import Link from 'next/link';
import { ArrowRight, Eye, Heart, Brain, Shield, Baby, Zap, Activity, Stethoscope, Users } from 'lucide-react';
import { departments } from '@/lib/data';

const DepartmentsGrid = () => {
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
          <h2 className="heading-2 mb-4">Specialized Eye Care Departments</h2>
          <p className="text-body max-w-3xl mx-auto">
            Each department is staffed with expert doctors and equipped with state-of-the-art 
            technology to provide the best possible care for specific eye conditions.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {departments.map((department, index) => {
            const Icon = departmentIcons[department.name as keyof typeof departmentIcons] || Eye;
            
            return (
              <div key={index} className="department-card group">
                <div className="p-8">
                  <div className="flex items-center mb-6">
                    <div className="w-16 h-16 bg-gradient-green rounded-2xl flex items-center justify-center mr-6 group-hover:scale-110 transition-transform">
                      <Icon className="w-8 h-8 text-white" />
                    </div>
                    <div>
                      <h3 className="heading-4 group-hover:text-[var(--primary-green)] transition-colors">
                        {department.name}
                      </h3>
                      <div className="flex items-center text-sm text-[var(--text-light)] mt-1">
                        <Users className="w-4 h-4 mr-2" />
                        <span>{department.doctors.length} specialist{department.doctors.length !== 1 ? 's' : ''}</span>
                      </div>
                    </div>
                  </div>
                  
                  <p className="text-small mb-6">
                    {department.description}
                  </p>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                    <div>
                      <h4 className="font-semibold text-sm text-[var(--text-dark)] mb-3">Key Procedures:</h4>
                      <div className="space-y-2">
                        {department.procedures.slice(0, 4).map((procedure, idx) => (
                          <div key={idx} className="flex items-center text-sm text-[var(--text-light)]">
                            <div className="w-2 h-2 bg-[var(--primary-green)] rounded-full mr-3"></div>
                            <span>{procedure}</span>
                          </div>
                        ))}
                        {department.procedures.length > 4 && (
                          <div className="text-xs text-[var(--text-light)] ml-5">
                            +{department.procedures.length - 4} more procedures
                          </div>
                        )}
                      </div>
                    </div>
                    
                    <div>
                      <h4 className="font-semibold text-sm text-[var(--text-dark)] mb-3">Advanced Equipment:</h4>
                      <div className="space-y-2">
                        {department.equipment.slice(0, 4).map((equipment, idx) => (
                          <div key={idx} className="flex items-center text-sm text-[var(--text-light)]">
                            <div className="w-2 h-2 bg-[var(--primary-green)] rounded-full mr-3"></div>
                            <span>{equipment}</span>
                          </div>
                        ))}
                        {department.equipment.length > 4 && (
                          <div className="text-xs text-[var(--text-light)] ml-5">
                            +{department.equipment.length - 4} more equipment
                          </div>
                        )}
                      </div>
                    </div>
                  </div>
                  
                  <div className="flex items-center justify-between pt-6 border-t border-gray-100">
                    <div className="text-sm text-[var(--text-light)]">
                      <span className="font-medium">Expert Doctors:</span> {department.doctors.slice(0, 2).join(', ')}
                      {department.doctors.length > 2 && ` +${department.doctors.length - 2} more`}
                    </div>
                    <Link 
                      href={`/departments/${department.name.toLowerCase().replace(/\s+/g, '-').replace(/&/g, 'and')}`}
                      className="inline-flex items-center text-[var(--primary-green)] hover:text-[var(--dark-green)] transition-colors group/link"
                    >
                      Learn More
                      <ArrowRight className="w-4 h-4 ml-2 group-hover/link:translate-x-1 transition-transform" />
                    </Link>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default DepartmentsGrid;
