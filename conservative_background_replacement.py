#!/usr/bin/env python3
"""
Conservative Background Replacement - Minimal change approach
Only replaces very specific background areas, preserves most of the original
"""

import cv2
import numpy as np

def conservative_background_replacement():
    # File paths
    video_path = "/Users/siddarora/Documents/TestProject/Videos/Property Video.mp4"
    background_path = "/Users/siddarora/Documents/TestProject/Videos/Medanta Banner.png"
    output_path = "/Users/siddarora/Documents/TestProject/Videos/Property Video Conservative Background.avi"
    
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
    
    print("Processing frames conservatively...")
    frame_count = 0
    
    while True:
        ret, frame = cap.read()
        if not ret:
            break
        
        # Convert to HSV for better color segmentation
        hsv = cv2.cvtColor(frame, cv2.COLOR_BGR2HSV)
        
        # Very conservative approach - only replace areas that are clearly background
        # Focus on edge areas and very uniform color regions
        
        # Create mask for areas near the edges (likely background)
        edge_mask = np.zeros((height, width), dtype=np.uint8)
        border_width = 50  # Only replace 50 pixels from edges
        edge_mask[:border_width, :] = 255  # Top edge
        edge_mask[-border_width:, :] = 255  # Bottom edge  
        edge_mask[:, :border_width] = 255  # Left edge
        edge_mask[:, -border_width:] = 255  # Right edge
        
        # Also look for very uniform color regions (likely background)
        gray = cv2.cvtColor(frame, cv2.COLOR_BGR2GRAY)
        
        # Apply gaussian blur and find areas with very low variance
        blurred = cv2.GaussianBlur(gray, (15, 15), 0)
        
        # Calculate local standard deviation
        mean = cv2.blur(gray, (15, 15))
        sqr_diff = cv2.blur((gray.astype(np.float32) - mean.astype(np.float32))**2, (15, 15))
        std_dev = np.sqrt(sqr_diff)
        
        # Areas with very low standard deviation are likely uniform background
        uniform_mask = (std_dev < 10).astype(np.uint8) * 255
        
        # Combine edge mask with uniform areas, but be very conservative
        background_mask = cv2.bitwise_and(edge_mask, uniform_mask)
        
        # Apply minimal morphological operations
        kernel = cv2.getStructuringElement(cv2.MORPH_ELLIPSE, (3, 3))
        background_mask = cv2.morphologyEx(background_mask, cv2.MORPH_OPEN, kernel)
        
        # Convert to 3-channel and normalize
        background_mask_3ch = cv2.cvtColor(background_mask, cv2.COLOR_GRAY2BGR).astype(float) / 255.0
        subject_mask_3ch = 1.0 - background_mask_3ch
        
        # Very gentle blending
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
    
    print(f"Conservative background replacement completed! Output saved to: {output_path}")

if __name__ == "__main__":
    conservative_background_replacement()