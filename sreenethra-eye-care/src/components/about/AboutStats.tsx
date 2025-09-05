'use client';

import { useState, useEffect } from 'react';
import { Eye, Users, Award, Clock } from 'lucide-react';

const AboutStats = () => {
  const [counts, setCounts] = useState({
    surgeries: 0,
    patients: 0,
    experience: 0,
    doctors: 0
  });

  const stats = [
    {
      icon: Eye,
      number: 60000,
      suffix: '+',
      label: 'Cataract Surgeries',
      description: 'Successfully performed by our expert surgeons'
    },
    {
      icon: Users,
      number: 50000,
      suffix: '+',
      label: 'Patients Treated',
      description: 'Comprehensive eye care provided'
    },
    {
      icon: Award,
      number: 20,
      suffix: '+',
      label: 'Years Experience',
      description: 'Of excellence in eye care'
    },
    {
      icon: Clock,
      number: 13,
      suffix: '',
      label: 'Expert Doctors',
      description: 'Highly qualified specialists'
    }
  ];

  useEffect(() => {
    const animateCounts = () => {
      stats.forEach((stat, index) => {
        const duration = 2000;
        const steps = 60;
        const increment = stat.number / steps;
        let current = 0;
        
        const timer = setInterval(() => {
          current += increment;
          if (current >= stat.number) {
            current = stat.number;
            clearInterval(timer);
          }
          
          setCounts(prev => ({
            ...prev,
            [index]: Math.floor(current)
          }));
        }, duration / steps);
      });
    };

    const timer = setTimeout(animateCounts, 500);
    return () => clearTimeout(timer);
  }, []);

  return (
    <section className="section-padding bg-gradient-green text-white">
      <div className="container-custom">
        <div className="text-center mb-16">
          <h2 className="heading-2 mb-4">Our Achievements</h2>
          <p className="text-lg opacity-90 max-w-3xl mx-auto">
            Numbers that reflect our commitment to excellence and the trust placed in us by our patients.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat, index) => {
            const Icon = stat.icon;
            const currentCount = counts[index as keyof typeof counts] || 0;
            
            return (
              <div key={index} className="text-center group">
                <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 hover:bg-white/20 transition-all duration-300 group-hover:scale-105">
                  <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:bg-white/30 transition-colors">
                    <Icon className="w-8 h-8 text-white" />
                  </div>
                  
                  <div className="text-4xl md:text-5xl font-bold text-white mb-2">
                    {currentCount.toLocaleString()}{stat.suffix}
                  </div>
                  
                  <h3 className="text-lg font-semibold text-white mb-2">
                    {stat.label}
                  </h3>
                  
                  <p className="text-sm opacity-80">
                    {stat.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>

        {/* Additional achievements */}
        <div className="mt-16">
          <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8">
            <h3 className="text-2xl font-bold text-center mb-8">Recognition & Awards</h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="text-center">
                <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Award className="w-8 h-8 text-white" />
                </div>
                <h4 className="font-semibold mb-2">Best Paper Award</h4>
                <p className="text-sm opacity-80">ASCRS 2015 - FLACS and FS LASIK sessions</p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Award className="w-8 h-8 text-white" />
                </div>
                <h4 className="font-semibold mb-2">IIRSI Gold Medal</h4>
                <p className="text-sm opacity-80">Recognition for excellence in refractive surgery</p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Award className="w-8 h-8 text-white" />
                </div>
                <h4 className="font-semibold mb-2">ISCKRS Young Achievers Award</h4>
                <p className="text-sm opacity-80">Outstanding contribution to corneal surgery</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutStats;
