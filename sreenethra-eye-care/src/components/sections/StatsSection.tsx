'use client';

import { useState, useEffect } from 'react';
import { Eye, Users, Award, Clock } from 'lucide-react';

const StatsSection = () => {
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
      color: 'text-[var(--primary-green)]'
    },
    {
      icon: Users,
      number: 50000,
      suffix: '+',
      label: 'Patients Treated',
      color: 'text-[var(--primary-green)]'
    },
    {
      icon: Award,
      number: 20,
      suffix: '+',
      label: 'Years Experience',
      color: 'text-[var(--primary-green)]'
    },
    {
      icon: Clock,
      number: 13,
      suffix: '',
      label: 'Expert Doctors',
      color: 'text-[var(--primary-green)]'
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

    // Start animation when component mounts
    const timer = setTimeout(animateCounts, 500);
    return () => clearTimeout(timer);
  }, []);

  return (
    <section className="section-padding bg-gradient-green text-white">
      <div className="container-custom">
        <div className="text-center mb-12">
          <h2 className="heading-2 mb-4">Our Achievements</h2>
          <p className="text-body max-w-2xl mx-auto">
            Delivering exceptional eye care with state-of-the-art technology and experienced professionals
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
                  
                  <div className="stat-number text-white mb-2">
                    {currentCount.toLocaleString()}{stat.suffix}
                  </div>
                  
                  <h3 className="text-lg font-semibold text-white">
                    {stat.label}
                  </h3>
                </div>
              </div>
            );
          })}
        </div>

        {/* Additional info */}
        <div className="mt-16 text-center">
          <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 max-w-4xl mx-auto">
            <h3 className="text-2xl font-bold mb-4">Premier Tertiary Eye Care Centre</h3>
            <p className="text-lg leading-relaxed">
              Located in Thiruvananthapuram, Kerala's capital city, we utilize internationally accepted 
              standards of treatment and state-of-the-art technology to restore your vision to its fullest potential.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default StatsSection;
