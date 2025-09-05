'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { ArrowRight, Play, Phone, MapPin } from 'lucide-react';
import { hospitalInfo } from '@/lib/data';

const HeroSection = () => {
  const [currentImage, setCurrentImage] = useState(0);
  
  const heroImages = [
    '/images/hero-1.jpg',
    '/images/hero-2.jpg', 
    '/images/hero-3.jpg'
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImage((prev) => (prev + 1) % heroImages.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Images */}
      <div className="absolute inset-0">
        {heroImages.map((image, index) => (
          <div
            key={index}
            className={`absolute inset-0 bg-cover bg-center bg-no-repeat transition-opacity duration-1000 ${
              index === currentImage ? 'opacity-100' : 'opacity-0'
            }`}
            style={{
              backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.4)), url(${image})`
            }}
          />
        ))}
      </div>

      {/* Content */}
      <div className="relative z-10 container-custom text-center text-white">
        <div className="max-w-4xl mx-auto">
          <h1 className="heading-1 mb-6 animate-fade-in">
            {hospitalInfo.tagline}
          </h1>
          
          <p className="text-body mb-8 max-w-3xl mx-auto animate-slide-up">
            {hospitalInfo.description}
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12 animate-slide-up">
            <Link href="/schedule" className="btn-white group">
              Book Appointment
              <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
            </Link>
            <Link href="/about" className="btn-secondary group">
              Learn More
              <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>

          {/* Quick Contact Info */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto animate-slide-up">
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6">
              <Phone className="w-8 h-8 text-[var(--primary-green)] mx-auto mb-3" />
              <h3 className="font-semibold mb-2">Emergency Contact</h3>
              <p className="text-sm">{hospitalInfo.mainBranch.phone}</p>
              <p className="text-sm">{hospitalInfo.mainBranch.phone2}</p>
            </div>
            
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6">
              <MapPin className="w-8 h-8 text-[var(--primary-green)] mx-auto mb-3" />
              <h3 className="font-semibold mb-2">Location</h3>
              <p className="text-sm">{hospitalInfo.mainBranch.address}</p>
            </div>
            
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6">
              <Phone className="w-8 h-8 text-[var(--primary-green)] mx-auto mb-3" />
              <h3 className="font-semibold mb-2">Care Coordinator</h3>
              <p className="text-sm">{hospitalInfo.mainBranch.careCoordinator}</p>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-white rounded-full flex justify-center">
          <div className="w-1 h-3 bg-white rounded-full mt-2 animate-pulse"></div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
