import { Microscope, Shield, Zap, Activity, Award, Users } from 'lucide-react';
import { operationTheatre, supportServices } from '@/lib/data';

const AboutFacilities = () => {
  const facilities = [
    {
      icon: Microscope,
      title: 'Operation Theatre',
      description: operationTheatre.description,
      features: [
        'Vertical laminar airflow systems',
        'HEPA filtration',
        'Electro-hydraulic operating tables',
        'Advanced ophthalmic technology'
      ]
    },
    {
      icon: Shield,
      title: 'Laboratory Services',
      description: supportServices.laboratory,
      features: [
        'Bacteriology and serology',
        'Biochemistry and haematology',
        'Advanced diagnostic technology',
        'Skilled technicians'
      ]
    },
    {
      icon: Zap,
      title: 'Pharmacy',
      description: supportServices.pharmacy,
      features: [
        'Complete range of ophthalmic medications',
        'Oral, intravenous, and intravitreal drugs',
        'Major brand products',
        'Personalized consultations'
      ]
    },
    {
      icon: Activity,
      title: 'Optical Shop',
      description: supportServices.opticalShop,
      features: [
        'High-quality spectacles',
        'Top brands at affordable prices',
        'Qualified optometrists',
        'Comprehensive eye examinations'
      ]
    },
    {
      icon: Award,
      title: 'Insurance Services',
      description: supportServices.insurance,
      features: [
        'Wide range of insurance companies',
        'Flexible payment options',
        'Claims processing assistance',
        'Coverage inquiries support'
      ]
    },
    {
      icon: Users,
      title: 'Care Coordination',
      description: 'Our dedicated care coordinators ensure seamless patient experience from consultation to follow-up care.',
      features: [
        'Appointment scheduling',
        'Treatment coordination',
        'Follow-up care',
        'Patient support'
      ]
    }
  ];

  return (
    <section className="section-padding bg-white">
      <div className="container-custom">
        <div className="text-center mb-16">
          <h2 className="heading-2 mb-4">Our Facilities & Services</h2>
          <p className="text-body max-w-3xl mx-auto">
            State-of-the-art facilities and comprehensive support services designed to provide 
            the best possible care for our patients.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {facilities.map((facility, index) => {
            const Icon = facility.icon;
            return (
              <div key={index} className="card group">
                <div className="p-8">
                  <div className="flex items-center mb-6">
                    <div className="w-16 h-16 bg-gradient-green rounded-2xl flex items-center justify-center mr-6 group-hover:scale-110 transition-transform">
                      <Icon className="w-8 h-8 text-white" />
                    </div>
                    <h3 className="heading-4 group-hover:text-[var(--primary-green)] transition-colors">
                      {facility.title}
                    </h3>
                  </div>
                  
                  <p className="text-small mb-6">
                    {facility.description}
                  </p>
                  
                  <div className="space-y-2">
                    <h4 className="font-semibold text-sm text-[var(--text-dark)] mb-3">Key Features:</h4>
                    {facility.features.map((feature, idx) => (
                      <div key={idx} className="flex items-center text-sm text-[var(--text-light)]">
                        <div className="w-2 h-2 bg-[var(--primary-green)] rounded-full mr-3"></div>
                        <span>{feature}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Technology Section */}
        <div className="mt-16">
          <div className="bg-gray-50 rounded-2xl p-8">
            <h3 className="heading-3 text-center mb-8">Advanced Technology</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              <div className="text-center">
                <div className="w-16 h-16 bg-[var(--primary-green)]/10 rounded-2xl flex items-center justify-center mx-auto mb-4">
                  <Microscope className="w-8 h-8 text-[var(--primary-green)]" />
                </div>
                <h4 className="font-semibold mb-2">Carl Zeiss Lumera</h4>
                <p className="text-sm text-[var(--text-light)]">Operating Microscope</p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-[var(--primary-green)]/10 rounded-2xl flex items-center justify-center mx-auto mb-4">
                  <Zap className="w-8 h-8 text-[var(--primary-green)]" />
                </div>
                <h4 className="font-semibold mb-2">Alcon Centurion</h4>
                <p className="text-sm text-[var(--text-light)]">Phacoemulsification System</p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-[var(--primary-green)]/10 rounded-2xl flex items-center justify-center mx-auto mb-4">
                  <Shield className="w-8 h-8 text-[var(--primary-green)]" />
                </div>
                <h4 className="font-semibold mb-2">Constellation Vision</h4>
                <p className="text-sm text-[var(--text-light)]">Vitreoretinal System</p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-[var(--primary-green)]/10 rounded-2xl flex items-center justify-center mx-auto mb-4">
                  <Activity className="w-8 h-8 text-[var(--primary-green)]" />
                </div>
                <h4 className="font-semibold mb-2">SCHWIND TransPRK</h4>
                <p className="text-sm text-[var(--text-light)]">Refractive Surgery System</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutFacilities;
