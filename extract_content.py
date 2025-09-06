#!/usr/bin/env python3
"""
Script to extract and identify content from minified HTML files
"""
import re

def extract_content_from_html(file_path):
    with open(file_path, 'r', encoding='utf-8') as f:
        content = f.read()
    
    # Search for doctor names pattern
    doctor_pattern = r'Dr\.\s+[A-Z][a-z]+\s+[A-Z][a-z]+'
    doctors = re.findall(doctor_pattern, content)
    
    # Search for Webflow promotional content
    webflow_patterns = [
        r'Boost Your Webflow[^<]*',
        r'Get 20% Off[^<]*',
        r'Try Now[^<]*',
        r'More Templates[^<]*',
        r'Made in Webflow[^<]*',
        r'WEBFLOW20[^<]*'
    ]
    
    webflow_content = []
    for pattern in webflow_patterns:
        matches = re.findall(pattern, content, re.IGNORECASE)
        webflow_content.extend(matches)
    
    # Search for specialty/department names
    specialty_pattern = r'[A-Z][a-z]+\s+(Surgeon|Medicine|Surgery|Treatment)'
    specialties = re.findall(specialty_pattern, content)
    
    print("=== DOCTORS FOUND ===")
    for doctor in doctors:
        print(f"- {doctor}")
    
    print("\n=== WEBFLOW PROMOTIONAL CONTENT ===")
    for promo in webflow_content:
        print(f"- {promo}")
    
    print("\n=== SPECIALTIES/DEPARTMENTS ===")
    for spec in specialties:
        print(f"- {spec}")
    
    # Search for specific text patterns that might be template content
    template_patterns = [
        r'Healthcare Institution[^<]*',
        r'Medical Institution[^<]*',
        r'Orthopedic[^<]*',
        r'Cardiology[^<]*',
        r'Emergency[^<]*'
    ]
    
    print("\n=== TEMPLATE CONTENT TO REPLACE ===")
    for pattern in template_patterns:
        matches = re.findall(pattern, content, re.IGNORECASE)
        for match in matches:
            print(f"- {match}")

if __name__ == "__main__":
    extract_content_from_html("Home.html")
