#!/usr/bin/env python3
"""
Simple Background Replacement - Color-based approach
Uses simple color range detection to preserve subject better
"""

import cv2
import numpy as np

def simple_background_replacement():
    # File paths
    video_path = "/Users/siddarora/Documents/TestProject/Videos/Property Video.mp4"
    background_path = "/Users/siddarora/Documents/TestProject/Videos/Medanta Banner.png"
    output_path = "/Users/siddarora/Documents/TestProject/Videos/Property Video Simple Background.avi"
    
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
    
    print("Processing frames with simple approach...")
    frame_count = 0
    
    while True:
        ret, frame = cap.read()
        if not ret:
            break
        
        # Convert to HSV for better color detection
        hsv = cv2.cvtColor(frame, cv2.COLOR_BGR2HSV)
        
        # Create a very liberal mask to preserve most of the frame
        # We'll identify obvious background colors to replace
        
        # Method 1: Replace very dark or very bright areas (likely background)
        gray = cv2.cvtColor(frame, cv2.COLOR_BGR2GRAY)
        
        # Create mask for very dark areas (shadows/black background)
        dark_mask = gray < 40
        
        # Create mask for very bright areas (white/overexposed background)  
        bright_mask = gray > 220
        
        # Combine masks - these are areas we want to replace
        background_mask = dark_mask | bright_mask
        
        # Apply some morphological operations to clean up
        kernel = cv2.getStructuringElement(cv2.MORPH_ELLIPSE, (3, 3))
        background_mask = cv2.morphologyEx(background_mask.astype(np.uint8), cv2.MORPH_CLOSE, kernel)
        
        # Convert to 3-channel mask
        background_mask_3ch = cv2.cvtColor(background_mask, cv2.COLOR_GRAY2BGR).astype(float) / 255.0
        subject_mask_3ch = 1.0 - background_mask_3ch
        
        # Blend: keep original frame mostly, replace only obvious background areas
        frame_float = frame.astype(float)
        background_float = new_background.astype(float)
        
        result = (frame_float * subject_mask_3ch + background_float * background_mask_3ch).astype(np.uint8)
        
        out.write(result)
        
        frame_count += 1
        if frame_count % 30 == 0:
            progress = (frame_count / total_frames) * 100
            print(f"Progress: {progress:.1f}% ({frame_count}/{total_frames} frames)")
    
    cap.release()
    out.release()
    cv2.destroyAllWindows()
    
    print(f"Simple background replacement completed! Output saved to: {output_path}")

if __name__ == "__main__":
    simple_background_replacement()