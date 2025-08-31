#!/usr/bin/env python3
"""
Video Compositor - Adds background image to video
Composites the Medanta Banner as background for Property Video
"""

from moviepy.editor import VideoFileClip, ImageClip, CompositeVideoClip
import os

def composite_video_with_background():
    # File paths
    video_path = "/Users/siddarora/Documents/TestProject/Videos/Property Video.mp4"
    background_path = "/Users/siddarora/Documents/TestProject/Videos/Medanta Banner.png"
    output_path = "/Users/siddarora/Documents/TestProject/Videos/Property Video with Medanta Background.mp4"
    
    print("Loading video...")
    # Load the main video
    video = VideoFileClip(video_path)
    
    print("Loading background image...")
    # Load the background image and resize it to match video dimensions
    background = ImageClip(background_path).set_duration(video.duration).resize(video.size)
    
    print("Compositing video...")
    # Create composite with background first, then video on top
    # You can adjust the positioning and opacity as needed
    final_video = CompositeVideoClip([
        background,  # Background layer
        video.set_position('center')  # Video on top, centered
    ])
    
    print("Writing output video...")
    # Write the final video
    final_video.write_videofile(
        output_path,
        codec='libx264',
        audio_codec='aac',
        temp_audiofile='temp-audio.m4a',
        remove_temp=True
    )
    
    print(f"Video composite completed! Output saved to: {output_path}")
    
    # Clean up
    video.close()
    background.close()
    final_video.close()

if __name__ == "__main__":
    composite_video_with_background()