#!/usr/bin/env python3
"""
Improved Background Replacement - Better subject detection
Uses color-based segmentation to better preserve the subject
"""

import cv2
import numpy as np

def improved_background_replacement():
    # File paths
    video_path = "/Users/siddarora/Documents/TestProject/Videos/Property Video.mp4"
    background_path = "/Users/siddarora/Documents/TestProject/Videos/Medanta Banner.png"
    output_path = "/Users/siddarora/Documents/TestProject/Videos/Property Video Improved Background.avi"
    
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
    
    print("Creating background model...")
    
    # Create background model by averaging first few frames
    background_model = None
    frame_count = 0
    sample_frames = 30  # Use first 30 frames to build background model
    
    while frame_count < sample_frames:
        ret, frame = cap.read()
        if not ret:
            break
        
        if background_model is None:
            background_model = np.float32(frame)
        else:
            cv2.accumulateWeighted(frame, background_model, 0.1)
        
        frame_count += 1
    
    # Convert background model back to uint8
    background_model = np.uint8(background_model)
    
    # Reset video to beginning
    cap.set(cv2.CAP_PROP_POS_FRAMES, 0)
    frame_count = 0
    
    print("Processing frames with improved subject detection...")
    
    while True:
        ret, frame = cap.read()
        if not ret:
            break
        
        # Calculate difference from background model
        diff = cv2.absdiff(frame, background_model)
        
        # Convert to grayscale
        diff_gray = cv2.cvtColor(diff, cv2.COLOR_BGR2GRAY)
        
        # Apply threshold to create binary mask
        _, thresh = cv2.threshold(diff_gray, 25, 255, cv2.THRESH_BINARY)
        
        # Apply morphological operations to clean up the mask
        kernel = cv2.getStructuringElement(cv2.MORPH_ELLIPSE, (5, 5))
        thresh = cv2.morphologyEx(thresh, cv2.MORPH_CLOSE, kernel)
        thresh = cv2.morphologyEx(thresh, cv2.MORPH_OPEN, kernel)
        
        # Find largest contour (likely the subject)
        contours, _ = cv2.findContours(thresh, cv2.RETR_EXTERNAL, cv2.CHAIN_APPROX_SIMPLE)
        
        if contours:
            # Get the largest contour
            largest_contour = max(contours, key=cv2.contourArea)
            
            # Create mask from largest contour
            mask = np.zeros(thresh.shape, dtype=np.uint8)
            cv2.fillPoly(mask, [largest_contour], 255)
            
            # Smooth the mask edges
            mask = cv2.GaussianBlur(mask, (5, 5), 0)
        else:
            # If no contours found, use the threshold mask
            mask = thresh
        
        # Convert mask to 3 channels and normalize
        mask_3ch = cv2.cvtColor(mask, cv2.COLOR_GRAY2BGR).astype(float) / 255.0
        inverse_mask = 1.0 - mask_3ch
        
        # Blend: subject where mask is white, new background where mask is black
        frame_float = frame.astype(float)
        background_float = new_background.astype(float)
        
        result = (frame_float * mask_3ch + background_float * inverse_mask).astype(np.uint8)
        
        out.write(result)
        
        frame_count += 1
        if frame_count % 30 == 0:
            progress = (frame_count / total_frames) * 100
            print(f"Progress: {progress:.1f}% ({frame_count}/{total_frames} frames)")
    
    cap.release()
    out.release()
    cv2.destroyAllWindows()
    
    print(f"Improved background replacement completed! Output saved to: {output_path}")

if __name__ == "__main__":
    improved_background_replacement()