#!/usr/bin/env python3
"""
Video Compositor - Proper background composition
Places the Medanta Banner as a true background with the video subject in foreground
"""

import cv2
import numpy as np
import os

def composite_video_with_background():
    # File paths
    video_path = "/Users/siddarora/Documents/TestProject/Videos/Property Video.mp4"
    background_path = "/Users/siddarora/Documents/TestProject/Videos/Medanta Banner.png"
    output_path = "/Users/siddarora/Documents/TestProject/Videos/Property Video with Background Fixed.mp4"
    
    print("Loading video...")
    # Open the video
    cap = cv2.VideoCapture(video_path)
    
    # Get video properties
    fps = int(cap.get(cv2.CAP_PROP_FPS))
    width = int(cap.get(cv2.CAP_PROP_FRAME_WIDTH))
    height = int(cap.get(cv2.CAP_PROP_FRAME_HEIGHT))
    total_frames = int(cap.get(cv2.CAP_PROP_FRAME_COUNT))
    
    print(f"Video properties: {width}x{height}, {fps} FPS, {total_frames} frames")
    
    print("Loading background image...")
    # Load and resize background image
    background = cv2.imread(background_path)
    if background is None:
        print(f"Error: Could not load background image from {background_path}")
        return
    
    background_resized = cv2.resize(background, (width, height))
    
    # Setup video writer - using different codec for better compatibility
    fourcc = cv2.VideoWriter_fourcc(*'XVID')
    out = cv2.VideoWriter(output_path.replace('.mp4', '.avi'), fourcc, fps, (width, height))
    
    print("Processing frames...")
    frame_count = 0
    
    while True:
        ret, frame = cap.read()
        if not ret:
            break
        
        # Method 1: Simple overlay - video on top of background where video pixels are not black
        # Create mask for non-black pixels in video
        gray = cv2.cvtColor(frame, cv2.COLOR_BGR2GRAY)
        _, mask = cv2.threshold(gray, 10, 255, cv2.THRESH_BINARY)
        mask_inv = cv2.bitwise_not(mask)
        
        # Create composite
        # Background where video is black/dark
        background_part = cv2.bitwise_and(background_resized, background_resized, mask=mask_inv)
        # Video where it has content
        video_part = cv2.bitwise_and(frame, frame, mask=mask)
        
        composite_frame = cv2.add(background_part, video_part)
        
        out.write(composite_frame)
        
        frame_count += 1
        if frame_count % 30 == 0:  # Progress update every 30 frames
            progress = (frame_count / total_frames) * 100
            print(f"Progress: {progress:.1f}% ({frame_count}/{total_frames} frames)")
    
    # Clean up
    cap.release()
    out.release()
    cv2.destroyAllWindows()
    
    output_avi = output_path.replace('.mp4', '.avi')
    print(f"Video composite completed! Output saved to: {output_avi}")
    print("Note: Audio will need to be merged separately")

if __name__ == "__main__":
    composite_video_with_background()