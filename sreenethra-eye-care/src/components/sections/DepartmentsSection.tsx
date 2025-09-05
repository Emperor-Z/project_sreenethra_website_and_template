import Link from 'next/link';
import { ArrowRight, Eye, Heart, Brain, Shield, Baby, Zap, Activity, Stethoscope } from 'lucide-react';
import { departments } from '@/lib/data';

const DepartmentsSection = () => {
  const departmentIcons = {
    'Cataract': Eye,
    'Cornea & Refractive Surgery': Eye,
    'Retina and Vitreous': Eye,
    'Glaucoma': Eye,
    'Paediatric Ophthalmology and strabismus or Squint': Baby,
    'Uvea': Heart,
    'Neuro-Ophthalmology': Brain,
    'Orbit, Oculoplasty, prosthetics and oncology': Shield,
    'General Ophthalmology': Stethoscope
  };

  return (
    <section className="section-padding bg-gray-50">
      <div className="container-custom">
        <div className="text-center mb-16">
          <h2 className="heading-2 mb-4">Our Departments</h2>
          <p className="text-body max-w-3xl mx-auto">
            Comprehensive eye care services across 9 specialized departments, 
            each equipped with advanced technology and expert professionals.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {departments.map((department, index) => {
            const Icon = departmentIcons[department.name as keyof typeof departmentIcons] || Eye;
            
            return (
              <div key={index} className="department-card group">
                <div className="flex items-center mb-4">
                  <div className="w-12 h-12 bg-gradient-green rounded-lg flex items-center justify-center mr-4 group-hover:scale-110 transition-transform">
                    <Icon className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="heading-4 group-hover:text-[var(--primary-green)] transition-colors">
                    {department.name}
                  </h3>
                </div>
                
                <p className="text-small mb-6 line-clamp-3">
                  {department.description}
                </p>
                
                <div className="space-y-3 mb-6">
                  <div>
                    <h4 className="font-semibold text-sm text-[var(--text-dark)] mb-2">Key Procedures:</h4>
                    <div className="flex flex-wrap gap-2">
                      {department.procedures.slice(0, 3).map((procedure, idx) => (
                        <span 
                          key={idx}
                          className="bg-[var(--primary-green)]/10 text-[var(--primary-green)] px-2 py-1 rounded-full text-xs"
                        >
                          {procedure}
                        </span>
                      ))}
                      {department.procedures.length > 3 && (
                        <span className="text-xs text-[var(--text-light)]">
                          +{department.procedures.length - 3} more
                        </span>
                      )}
                    </div>
                  </div>
                  
                  <div>
                    <h4 className="font-semibold text-sm text-[var(--text-dark)] mb-2">Expert Doctors:</h4>
                    <p className="text-xs text-[var(--text-light)]">
                      {department.doctors.length} specialist{department.doctors.length !== 1 ? 's' : ''}
                    </p>
                  </div>
                </div>
                
                <Link 
                  href={`/departments/${department.name.toLowerCase().replace(/\s+/g, '-').replace(/&/g, 'and')}`}
                  className="inline-flex items-center text-[var(--primary-green)] hover:text-[var(--dark-green)] transition-colors group/link"
                >
                  Learn More
                  <ArrowRight className="w-4 h-4 ml-2 group-hover/link:translate-x-1 transition-transform" />
                </Link>
              </div>
            );
          })}
        </div>

        {/* CTA Section */}
        <div className="mt-16 text-center">
          <div className="bg-white rounded-2xl p-8 shadow-lg max-w-4xl mx-auto">
            <h3 className="heading-3 mb-4">Need Help Choosing the Right Department?</h3>
            <p className="text-body mb-6">
              Our care coordinators are here to help you find the right specialist for your needs.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/contact" className="btn-primary">
                Contact Care Coordinator
              </Link>
              <Link href="/departments" className="btn-secondary">
                View All Departments
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default DepartmentsSection;
