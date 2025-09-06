import { Users, Award, GraduationCap, Phone } from 'lucide-react';
import { seniorConsultants, consultants } from '@/lib/data';

const DoctorsHero = () => {
  const totalDoctors = seniorConsultants.length + consultants.length;
  const totalSpecialties = [...seniorConsultants, ...consultants].reduce(
    (acc, doctor) => acc + doctor.specialties.length, 
    0
  );

  return (
    <section className="relative bg-gradient-to-br from-[var(--primary-green)] to-[var(--dark-green)] text-white overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-0 left-0 w-full h-full bg-[url('data:image/svg+xml,%3Csvg width=%2260%22 height=%2260%22 viewBox=%220 0 60 60%22 xmlns=%22http://www.w3.org/2000/svg%22%3E%3Cg fill=%22none%22 fill-rule=%22evenodd%22%3E%3Cg fill=%22%23ffffff%22 fill-opacity=%220.1%22%3E%3Ccircle cx=%2230%22 cy=%2230%22 r=%222%22/%3E%3C/g%3E%3C/g%3E%3C/svg%3E')]"></div>
      </div>
      
      <div className="container-custom relative z-10">
        <div className="py-20 lg:py-28">
          <div className="max-w-4xl mx-auto text-center">
            <div className="flex items-center justify-center mb-8">
              <Users className="w-12 h-12 text-white/80 mr-4" />
              <h1 className="heading-1 text-white">Our Expert Doctors</h1>
              <Users className="w-12 h-12 text-white/80 ml-4" />
            </div>
            
            <p className="text-xl text-white/90 mb-12 leading-relaxed">
              Meet our team of highly qualified and experienced eye care specialists who are dedicated 
              to providing exceptional care and treatment for all your vision needs.
            </p>
            
            {/* Quick Stats */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-12">
              <div className="text-center">
                <div className="w-16 h-16 bg-white/20 rounded-2xl flex items-center justify-center mx-auto mb-4">
                  <Users className="w-8 h-8 text-white" />
                </div>
                <div className="text-3xl font-bold text-white mb-2">{totalDoctors}</div>
                <div className="text-white/80">Expert Doctors</div>
              </div>
              
              <div className="text-center">
                <div className="w-16 h-16 bg-white/20 rounded-2xl flex items-center justify-center mx-auto mb-4">
                  <Award className="w-8 h-8 text-white" />
                </div>
                <div className="text-3xl font-bold text-white mb-2">{seniorConsultants.length}</div>
                <div className="text-white/80">Senior Consultants</div>
              </div>
              
              <div className="text-center">
                <div className="w-16 h-16 bg-white/20 rounded-2xl flex items-center justify-center mx-auto mb-4">
                  <GraduationCap className="w-8 h-8 text-white" />
                </div>
                <div className="text-3xl font-bold text-white mb-2">{consultants.length}</div>
                <div className="text-white/80">Consultants</div>
              </div>
              
              <div className="text-center">
                <div className="w-16 h-16 bg-white/20 rounded-2xl flex items-center justify-center mx-auto mb-4">
                  <Phone className="w-8 h-8 text-white" />
                </div>
                <div className="text-3xl font-bold text-white mb-2">{totalSpecialties}</div>
                <div className="text-white/80">Specialties</div>
              </div>
            </div>
            
            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a 
                href="#senior-consultants" 
                className="inline-flex items-center justify-center bg-white text-[var(--primary-green)] font-semibold py-4 px-8 rounded-xl hover:bg-gray-100 transition-colors"
              >
                <Award className="w-5 h-5 mr-2" />
                Meet Senior Consultants
              </a>
              <a 
                href="#consultants" 
                className="inline-flex items-center justify-center bg-white/20 text-white font-semibold py-4 px-8 rounded-xl hover:bg-white/30 transition-colors border border-white/30"
              >
                <Users className="w-5 h-5 mr-2" />
                View All Consultants
              </a>
            </div>
          </div>
        </div>
      </div>
      
      {/* Bottom Wave */}
      <div className="absolute bottom-0 left-0 w-full">
        <svg viewBox="0 0 1200 120" preserveAspectRatio="none" className="w-full h-16 fill-white">
          <path d="M0,0V46.29c47.79,22.2,103.59,32.17,158,28,70.36-5.37,136.33-33.31,206.8-37.5C438.64,32.43,512.34,53.67,583,72.05c69.27,18,138.3,24.88,209.4,13.08,36.15-6,69.85-17.84,104.45-29.34C989.49,25,1113-14.29,1200,52.47V0Z"></path>
        </svg>
      </div>
    </section>
  );
};

export default DoctorsHero;