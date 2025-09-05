import Link from 'next/link';
import { ArrowRight, Phone, Award, GraduationCap } from 'lucide-react';
import { seniorConsultants, consultants } from '@/lib/data';

const DoctorsSection = () => {
  const displayDoctors = [...seniorConsultants.slice(0, 6), ...consultants.slice(0, 3)];

  return (
    <section className="section-padding bg-white">
      <div className="container-custom">
        <div className="text-center mb-16">
          <h2 className="heading-2 mb-4">Meet Our Expert Doctors</h2>
          <p className="text-body max-w-3xl mx-auto">
            Our team of highly qualified and experienced ophthalmologists are dedicated to providing 
            the best possible eye care using advanced technology and proven techniques.
          </p>
        </div>

        {/* Senior Consultants */}
        <div className="mb-16">
          <div className="flex items-center justify-between mb-8">
            <div>
              <h3 className="heading-3 mb-2">Senior Consultants</h3>
              <p className="text-[var(--text-light)]">Highly experienced specialists with advanced training</p>
            </div>
            <Link href="/doctors" className="btn-secondary">
              View All Doctors
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {seniorConsultants.slice(0, 6).map((doctor, index) => (
              <div key={index} className="doctor-card group">
                <div className="p-6">
                  <div className="flex items-center mb-4">
                    <div className="w-16 h-16 bg-gradient-green rounded-full flex items-center justify-center mr-4">
                      <span className="text-white font-bold text-xl">
                        {doctor.name.split(' ').map(n => n[0]).join('')}
                      </span>
                    </div>
                    <div>
                      <h4 className="font-semibold text-[var(--text-dark)] group-hover:text-[var(--primary-green)] transition-colors">
                        {doctor.name}
                      </h4>
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

        {/* Consultants */}
        <div className="mb-16">
          <div className="flex items-center justify-between mb-8">
            <div>
              <h3 className="heading-3 mb-2">Consultants</h3>
              <p className="text-[var(--text-light)]">Skilled professionals providing comprehensive care</p>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {consultants.slice(0, 6).map((doctor, index) => (
              <div key={index} className="doctor-card group">
                <div className="p-6">
                  <div className="flex items-center mb-4">
                    <div className="w-16 h-16 bg-gradient-green rounded-full flex items-center justify-center mr-4">
                      <span className="text-white font-bold text-xl">
                        {doctor.name.split(' ').map(n => n[0]).join('')}
                      </span>
                    </div>
                    <div>
                      <h4 className="font-semibold text-[var(--text-dark)] group-hover:text-[var(--primary-green)] transition-colors">
                        {doctor.name}
                      </h4>
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

        {/* CTA Section */}
        <div className="text-center">
          <div className="bg-gradient-green text-white rounded-2xl p-8 max-w-4xl mx-auto">
            <h3 className="heading-3 mb-4">Ready to Schedule Your Appointment?</h3>
            <p className="text-lg mb-6 opacity-90">
              Book an appointment with our expert doctors for comprehensive eye care.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/schedule" className="btn-white">
                Book Appointment
              </Link>
              <Link href="/doctors" className="btn-secondary">
                View All Doctors
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default DoctorsSection;
