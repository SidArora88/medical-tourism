#!/usr/bin/env python3
"""
Audio Merger - Add original audio to background-replaced video
"""

import moviepy.editor as mp

def merge_audio_with_video():
    # File paths
    original_video_path = "/Users/siddarora/Documents/TestProject/Videos/Property Video.mp4"
    background_replaced_video_path = "/Users/siddarora/Documents/TestProject/Videos/Property Video Improved Background.avi"
    output_path = "/Users/siddarora/Documents/TestProject/Videos/Final Improved Property Video with Banner Background.mp4"
    
    print("Loading original video for audio...")
    original_video = mp.VideoFileClip(original_video_path)
    
    print("Loading background-replaced video...")
    bg_replaced_video = mp.VideoFileClip(background_replaced_video_path)
    
    print("Merging audio with background-replaced video...")
    # Add original audio to the background-replaced video
    final_video = bg_replaced_video.set_audio(original_video.audio)
    
    print("Writing final video with audio...")
    final_video.write_videofile(
        output_path,
        codec='libx264',
        audio_codec='aac',
        temp_audiofile='temp-audio.m4a',
        remove_temp=True,
        verbose=False,
        logger=None
    )
    
    print(f"Final video completed! Output saved to: {output_path}")
    
    # Clean up
    original_video.close()
    bg_replaced_video.close()
    final_video.close()

if __name__ == "__main__":
    merge_audio_with_video()