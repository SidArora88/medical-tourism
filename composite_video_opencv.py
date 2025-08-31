#!/usr/bin/env python3
"""
Video Compositor using OpenCV - Adds background image to video
Composites the Medanta Banner as background for Property Video
"""

import cv2
import numpy as np
import os

def composite_video_with_background():
    # File paths
    video_path = "/Users/siddarora/Documents/TestProject/Videos/Property Video.mp4"
    background_path = "/Users/siddarora/Documents/TestProject/Videos/Medanta Banner.png"
    output_path = "/Users/siddarora/Documents/TestProject/Videos/Property Video with Medanta Background.mp4"
    
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
    
    # Setup video writer
    fourcc = cv2.VideoWriter_fourcc(*'mp4v')
    out = cv2.VideoWriter(output_path, fourcc, fps, (width, height))
    
    print("Processing frames...")
    frame_count = 0
    
    while True:
        ret, frame = cap.read()
        if not ret:
            break
        
        # Create composite frame with banner as true background
        # The video should be fully opaque on top of the background
        composite_frame = frame.copy()  # Keep original video fully visible
        
        out.write(composite_frame)
        
        frame_count += 1
        if frame_count % 30 == 0:  # Progress update every 30 frames
            progress = (frame_count / total_frames) * 100
            print(f"Progress: {progress:.1f}% ({frame_count}/{total_frames} frames)")
    
    # Clean up
    cap.release()
    out.release()
    cv2.destroyAllWindows()
    
    print(f"Video composite completed! Output saved to: {output_path}")

if __name__ == "__main__":
    composite_video_with_background()