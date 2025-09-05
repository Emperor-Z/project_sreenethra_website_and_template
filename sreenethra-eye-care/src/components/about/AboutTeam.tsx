import Link from 'next/link';
import { ArrowRight, Phone, Award, GraduationCap } from 'lucide-react';
import { seniorConsultants } from '@/lib/data';

const AboutTeam = () => {
  const featuredDoctors = seniorConsultants.slice(0, 4);

  return (
    <section className="section-padding bg-gray-50">
      <div className="container-custom">
        <div className="text-center mb-16">
          <h2 className="heading-2 mb-4">Meet Our Leadership Team</h2>
          <p className="text-body max-w-3xl mx-auto">
            Our senior consultants bring decades of experience and expertise to provide 
            the highest quality eye care services.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          {featuredDoctors.map((doctor, index) => (
            <div key={index} className="doctor-card group">
              <div className="p-8">
                <div className="flex items-start space-x-6">
                  <div className="w-20 h-20 bg-gradient-green rounded-full flex items-center justify-center flex-shrink-0">
                    <span className="text-white font-bold text-2xl">
                      {doctor.name.split(' ').map(n => n[0]).join('')}
                    </span>
                  </div>
                  <div className="flex-grow">
                    <h3 className="heading-4 mb-2 group-hover:text-[var(--primary-green)] transition-colors">
                      {doctor.name}
                    </h3>
                    <p className="text-sm text-[var(--text-light)] mb-3">{doctor.position}</p>
                    
                    <div className="mb-4">
                      <div className="flex items-center text-sm text-[var(--primary-green)] mb-2">
                        <GraduationCap className="w-4 h-4 mr-2" />
                        <span className="font-medium">Qualifications</span>
                      </div>
                      <p className="text-xs text-[var(--text-light)]">{doctor.qualification}</p>
                    </div>
                    
                    <div className="mb-4">
                      <div className="flex items-center text-sm text-[var(--primary-green)] mb-2">
                        <Award className="w-4 h-4 mr-2" />
                        <span className="font-medium">Specialties</span>
                      </div>
                      <div className="flex flex-wrap gap-1">
                        {doctor.specialties.slice(0, 2).map((specialty, idx) => (
                          <span 
                            key={idx}
                            className="bg-[var(--primary-green)]/10 text-[var(--primary-green)] px-2 py-1 rounded-full text-xs"
                          >
                            {specialty}
                          </span>
                        ))}
                        {doctor.specialties.length > 2 && (
                          <span className="text-xs text-[var(--text-light)]">
                            +{doctor.specialties.length - 2} more
                          </span>
                        )}
                      </div>
                    </div>
                    
                    <div className="flex items-center justify-between pt-4 border-t border-gray-100">
                      <div className="flex items-center text-sm text-[var(--text-light)]">
                        <Phone className="w-4 h-4 mr-2" />
                        <span>{doctor.contact}</span>
                      </div>
                      <Link 
                        href={`/doctors/${doctor.name.toLowerCase().replace(/\s+/g, '-').replace(/\./g, '')}`}
                        className="text-[var(--primary-green)] hover:text-[var(--dark-green)] transition-colors"
                      >
                        <ArrowRight className="w-4 h-4" />
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Team CTA */}
        <div className="text-center">
          <div className="bg-white rounded-2xl p-8 shadow-lg max-w-4xl mx-auto">
            <h3 className="heading-3 mb-4">Our Complete Team</h3>
            <p className="text-body mb-6">
              We have a total of 13 expert doctors including senior consultants and consultants, 
              each specializing in different areas of ophthalmology to provide comprehensive care.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/doctors" className="btn-primary">
                View All Doctors
              </Link>
              <Link href="/schedule" className="btn-secondary">
                Book Consultation
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutTeam;
