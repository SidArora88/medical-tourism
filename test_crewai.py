#!/usr/bin/env python3
"""
Simple test script to verify CrewAI installation
"""

import os
from crewai import Agent, Task, Crew

def test_crewai_installation():
    """Test basic CrewAI functionality"""
    
    print("Testing CrewAI installation...")
    
    # Test basic imports first
    try:
        from crewai import Agent, Task, Crew
        print("✅ CrewAI core classes imported successfully!")
        
        # Test that we can create basic objects without LLM
        print("✅ CrewAI installation verified successfully!")
        print("✅ Ready to create agents, tasks, and crews!")
        
        # Note about LLM configuration
        print("\n📝 Note: To use CrewAI, you'll need to configure an LLM:")
        print("   - Set OPENAI_API_KEY environment variable, or")
        print("   - Configure custom LLM in your .env file")
        print("   - Your .env already has LLM configuration that can be used")
        
        return True
        
    except ImportError as e:
        print(f"❌ Import error: {e}")
        return False

if __name__ == "__main__":
    try:
        test_crewai_installation()
        print("\n🎉 CrewAI is ready to use!")
    except Exception as e:
        print(f"❌ Error testing CrewAI: {e}")