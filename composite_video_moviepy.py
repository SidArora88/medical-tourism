#!/usr/bin/env python3
"""
Video Compositor using MoviePy - Proper background with audio preservation
Places the Medanta Banner as a true background with original video and audio
"""

import moviepy.editor as mp
import numpy as np

def composite_video_with_background():
    # File paths
    video_path = "/Users/siddarora/Documents/TestProject/Videos/Property Video.mp4"
    background_path = "/Users/siddarora/Documents/TestProject/Videos/Medanta Banner.png"
    output_path = "/Users/siddarora/Documents/TestProject/Videos/Property Video with Background and Audio.mp4"
    
    print("Loading video with audio...")
    # Load the main video (this preserves audio automatically)
    video = mp.VideoFileClip(video_path)
    
    print("Loading background image...")
    # Load the background image and set it to video duration
    background = mp.ImageClip(background_path).set_duration(video.duration)
    
    # Resize background to match video dimensions
    background = background.resize(video.size)
    
    print("Creating composition...")
    
    # Create a mask for the video to make dark areas transparent
    # This allows the background to show through
    def make_frame_with_background(get_frame, t):
        frame = get_frame(t)
        # Convert to grayscale to create mask
        gray = np.mean(frame, axis=2)
        # Create mask - pixels below threshold become transparent
        mask = gray > 30  # Adjust threshold as needed
        return frame, mask
    
    # For simpler approach, just layer video on top of background
    # The video will be fully opaque over the background
    print("Compositing video...")
    final_video = mp.CompositeVideoClip([
        background,  # Background layer
        video.set_position('center')  # Video layer on top, centered
    ])
    
    # Keep original audio from the video
    final_video = final_video.set_audio(video.audio)
    
    print("Writing output video with audio...")
    # Write the final video with audio
    final_video.write_videofile(
        output_path,
        codec='libx264',
        audio_codec='aac',
        temp_audiofile='temp-audio.m4a',
        remove_temp=True,
        verbose=False,
        logger=None
    )
    
    print(f"Video composite with audio completed! Output saved to: {output_path}")
    
    # Clean up
    video.close()
    background.close()
    final_video.close()

if __name__ == "__main__":
    composite_video_with_background()