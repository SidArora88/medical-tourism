#!/usr/bin/env python3
"""
Background Replacement - Replace video background with Medanta Banner
Removes original background and replaces it with the banner image
"""

import cv2
import numpy as np

def replace_video_background():
    # File paths
    video_path = "/Users/siddarora/Documents/TestProject/Videos/Property Video.mp4"
    background_path = "/Users/siddarora/Documents/TestProject/Videos/Medanta Banner.png"
    output_path = "/Users/siddarora/Documents/TestProject/Videos/Property Video Background Replaced.avi"
    
    print("Loading video...")
    cap = cv2.VideoCapture(video_path)
    
    # Get video properties
    fps = int(cap.get(cv2.CAP_PROP_FPS))
    width = int(cap.get(cv2.CAP_PROP_FRAME_WIDTH))
    height = int(cap.get(cv2.CAP_PROP_FRAME_HEIGHT))
    total_frames = int(cap.get(cv2.CAP_PROP_FRAME_COUNT))
    
    print(f"Video properties: {width}x{height}, {fps} FPS, {total_frames} frames")
    
    print("Loading new background...")
    new_background = cv2.imread(background_path)
    if new_background is None:
        print(f"Error: Could not load background image")
        return
    
    # Resize new background to match video dimensions
    new_background = cv2.resize(new_background, (width, height))
    
    # Setup video writer
    fourcc = cv2.VideoWriter_fourcc(*'XVID')
    out = cv2.VideoWriter(output_path, fourcc, fps, (width, height))
    
    print("Processing frames for background replacement...")
    
    # Background subtractor for motion detection
    backSub = cv2.createBackgroundSubtractorMOG2(detectShadows=True)
    
    frame_count = 0
    frames_buffer = []
    
    # First pass: collect some frames to establish background
    print("Analyzing video to detect subject...")
    while len(frames_buffer) < min(100, total_frames):
        ret, frame = cap.read()
        if not ret:
            break
        frames_buffer.append(frame)
        backSub.apply(frame)
    
    # Reset video capture
    cap.set(cv2.CAP_PROP_POS_FRAMES, 0)
    frame_count = 0
    
    print("Replacing background...")
    while True:
        ret, frame = cap.read()
        if not ret:
            break
        
        # Apply background subtraction
        fg_mask = backSub.apply(frame)
        
        # Clean up the mask
        kernel = cv2.getStructuringElement(cv2.MORPH_ELLIPSE, (3, 3))
        fg_mask = cv2.morphologyEx(fg_mask, cv2.MORPH_OPEN, kernel)
        fg_mask = cv2.morphologyEx(fg_mask, cv2.MORPH_CLOSE, kernel)
        
        # Blur the mask edges for smoother blending
        fg_mask = cv2.GaussianBlur(fg_mask, (5, 5), 0)
        
        # Convert mask to 3-channel
        fg_mask_3ch = cv2.cvtColor(fg_mask, cv2.COLOR_GRAY2BGR)
        fg_mask_3ch = fg_mask_3ch.astype(float) / 255.0
        
        # Create inverse mask for background
        bg_mask_3ch = 1.0 - fg_mask_3ch
        
        # Blend: foreground where mask is white, new background where mask is black
        frame_float = frame.astype(float)
        bg_float = new_background.astype(float)
        
        result = (frame_float * fg_mask_3ch + bg_float * bg_mask_3ch).astype(np.uint8)
        
        out.write(result)
        
        frame_count += 1
        if frame_count % 30 == 0:
            progress = (frame_count / total_frames) * 100
            print(f"Progress: {progress:.1f}% ({frame_count}/{total_frames} frames)")
    
    cap.release()
    out.release()
    cv2.destroyAllWindows()
    
    print(f"Background replacement completed! Output saved to: {output_path}")
    print("Note: Audio needs to be merged separately")

if __name__ == "__main__":
    replace_video_background()