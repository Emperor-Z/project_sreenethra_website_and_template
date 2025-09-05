import Link from 'next/link';
import { ArrowRight, Phone, Award, GraduationCap, Users } from 'lucide-react';
import { consultants } from '@/lib/data';

const Consultants = () => {
  return (
    <section className="section-padding bg-gray-50">
      <div className="container-custom">
        <div className="text-center mb-16">
          <div className="flex items-center justify-center mb-6">
            <Users className="w-8 h-8 text-[var(--primary-green)] mr-3" />
            <h2 className="heading-2">Consultants</h2>
            <Users className="w-8 h-8 text-[var(--primary-green)] ml-3" />
          </div>
          <p className="text-body max-w-3xl mx-auto">
            Our consultants are skilled professionals who provide comprehensive eye care services 
            with dedication and expertise in their respective specialties.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {consultants.map((doctor, index) => (
            <div key={index} className="doctor-card group">
              <div className="p-6">
                <div className="flex items-center mb-4">
                  <div className="w-16 h-16 bg-gradient-green rounded-2xl flex items-center justify-center mr-4">
                    <span className="text-white font-bold text-xl">
                      {doctor.name.split(' ').map(n => n[0]).join('')}
                    </span>
                  </div>
                  <div>
                    <h3 className="font-semibold text-[var(--text-dark)] group-hover:text-[var(--primary-green)] transition-colors">
                      {doctor.name}
                    </h3>
                    <p className="text-sm text-[var(--text-light)]">{doctor.position}</p>
                  </div>
                </div>
                
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
                
                {doctor.accolades.length > 0 && (
                  <div className="mb-4">
                    <div className="flex items-center text-sm text-[var(--primary-green)] mb-2">
                      <Award className="w-4 h-4 mr-2" />
                      <span className="font-medium">Achievements</span>
                    </div>
                    <div className="space-y-1">
                      {doctor.accolades.slice(0, 1).map((accolade, idx) => (
                        <div key={idx} className="flex items-start text-xs text-[var(--text-light)]">
                          <div className="w-1.5 h-1.5 bg-[var(--primary-green)] rounded-full mr-2 mt-1.5 flex-shrink-0"></div>
                          <span>{accolade}</span>
                        </div>
                      ))}
                      {doctor.accolades.length > 1 && (
                        <div className="text-xs text-[var(--text-light)] ml-3.5">
                          +{doctor.accolades.length - 1} more
                        </div>
                      )}
                    </div>
                  </div>
                )}
                
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
          ))}
        </div>
      </div>
    </section>
  );
};

export default Consultants;
