'use client';

import { useState, useEffect } from 'react';
import { Star, Quote, ChevronLeft, ChevronRight } from 'lucide-react';

const TestimonialsSection = () => {
  const [currentTestimonial, setCurrentTestimonial] = useState(0);

  const testimonials = [
    {
      name: "Rajesh Kumar",
      location: "Thiruvananthapuram",
      treatment: "Cataract Surgery",
      rating: 5,
      text: "Dr. Ashad Sivaraman performed my cataract surgery with such precision. The entire process was smooth, and my vision is now crystal clear. The staff was very caring and professional throughout my treatment."
    },
    {
      name: "Priya Menon",
      location: "Kollam",
      treatment: "LASIK Surgery",
      rating: 5,
      text: "I had LASIK surgery with Dr. Swapna Nair and the results are amazing. No more glasses! The procedure was quick and painless. The team at Sreenethra Eye Care made me feel comfortable throughout the process."
    },
    {
      name: "Suresh Nair",
      location: "Kottayam",
      treatment: "Retinal Surgery",
      rating: 5,
      text: "When I was diagnosed with retinal detachment, I was very worried. But Dr. Anoop Sivaraman and his team handled my case with expertise. The surgery was successful, and I'm grateful for their care."
    },
    {
      name: "Lakshmi Devi",
      location: "Pathanamthitta",
      treatment: "Glaucoma Treatment",
      rating: 5,
      text: "Dr. Arvin Ponnat's treatment for my glaucoma has been excellent. The MIGS procedure was minimally invasive, and my eye pressure is now well-controlled. I highly recommend Sreenethra Eye Care."
    },
    {
      name: "Vijay Kumar",
      location: "Alappuzha",
      treatment: "Paediatric Eye Care",
      rating: 5,
      text: "My daughter's strabismus was treated by Dr. Anila George. The surgery was successful, and the follow-up care was exceptional. The pediatric care team made my daughter feel comfortable and safe."
    }
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTestimonial((prev) => (prev + 1) % testimonials.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  const nextTestimonial = () => {
    setCurrentTestimonial((prev) => (prev + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setCurrentTestimonial((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  const current = testimonials[currentTestimonial];

  return (
    <section className="section-padding bg-white">
      <div className="container-custom">
        <div className="text-center mb-16">
          <h2 className="heading-2 mb-4">Patient Testimonials</h2>
          <p className="text-body max-w-3xl mx-auto">
            Hear from our patients about their experiences and successful treatments at Sreenethra Eye Care.
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="testimonial-card relative">
            <div className="absolute top-6 left-6">
              <Quote className="w-8 h-8 text-[var(--primary-green)] opacity-20" />
            </div>
            
            <div className="pt-8">
              <div className="flex items-center mb-6">
                {[...Array(current.rating)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                ))}
              </div>
              
              <blockquote className="text-lg text-[var(--text-dark)] mb-8 leading-relaxed">
                "{current.text}"
              </blockquote>
              
              <div className="flex items-center justify-between">
                <div>
                  <h4 className="font-semibold text-[var(--text-dark)]">{current.name}</h4>
                  <p className="text-sm text-[var(--text-light)]">{current.location}</p>
                  <p className="text-sm text-[var(--primary-green)] font-medium">{current.treatment}</p>
                </div>
                
                <div className="flex space-x-2">
                  <button
                    onClick={prevTestimonial}
                    className="w-10 h-10 bg-[var(--primary-green)]/10 rounded-full flex items-center justify-center hover:bg-[var(--primary-green)]/20 transition-colors"
                    aria-label="Previous testimonial"
                  >
                    <ChevronLeft className="w-5 h-5 text-[var(--primary-green)]" />
                  </button>
                  <button
                    onClick={nextTestimonial}
                    className="w-10 h-10 bg-[var(--primary-green)]/10 rounded-full flex items-center justify-center hover:bg-[var(--primary-green)]/20 transition-colors"
                    aria-label="Next testimonial"
                  >
                    <ChevronRight className="w-5 h-5 text-[var(--primary-green)]" />
                  </button>
                </div>
              </div>
            </div>
          </div>

          {/* Testimonial indicators */}
          <div className="flex justify-center mt-8 space-x-2">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentTestimonial(index)}
                className={`w-3 h-3 rounded-full transition-colors ${
                  index === currentTestimonial 
                    ? 'bg-[var(--primary-green)]' 
                    : 'bg-gray-300 hover:bg-gray-400'
                }`}
                aria-label={`Go to testimonial ${index + 1}`}
              />
            ))}
          </div>
        </div>

        {/* Statistics */}
        <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="text-center">
            <div className="stat-number mb-2">98%</div>
            <p className="text-[var(--text-light)]">Patient Satisfaction Rate</p>
          </div>
          <div className="text-center">
            <div className="stat-number mb-2">50,000+</div>
            <p className="text-[var(--text-light)]">Successful Treatments</p>
          </div>
          <div className="text-center">
            <div className="stat-number mb-2">20+</div>
            <p className="text-[var(--text-light)]">Years of Excellence</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
