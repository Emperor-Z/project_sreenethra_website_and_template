import Link from 'next/link';
import { ArrowRight, Eye, Microscope, Shield, Heart, Zap, Activity } from 'lucide-react';

const ServicesSection = () => {
  const services = [
    {
      icon: Eye,
      title: 'Cataract Surgery',
      description: 'Advanced phacoemulsification with premium IOLs for clear vision restoration.',
      features: ['Phacoemulsification', 'Premium IOLs', 'Quick Recovery', 'High Success Rate']
    },
    {
      icon: Microscope,
      title: 'Retinal Surgery',
      description: 'Minimally invasive vitreoretinal procedures for complex retinal conditions.',
      features: ['MIVS Technology', 'Diabetic Retinopathy', 'Retinal Detachment', 'Macular Surgery']
    },
    {
      icon: Shield,
      title: 'Cornea & Refractive',
      description: 'LASIK, TransPRK, and corneal transplant procedures for vision correction.',
      features: ['LASIK Surgery', 'TransPRK', 'Corneal Transplant', 'ICL Surgery']
    },
    {
      icon: Heart,
      title: 'Glaucoma Treatment',
      description: 'Advanced glaucoma management with MIGS and traditional surgical options.',
      features: ['MIGS Procedures', 'Trabeculectomy', 'Laser Treatment', 'Early Detection']
    },
    {
      icon: Zap,
      title: 'Paediatric Care',
      description: 'Specialized eye care for children with strabismus and developmental issues.',
      features: ['Strabismus Surgery', 'Amblyopia Treatment', 'ROP Screening', 'Child-Friendly Care']
    },
    {
      icon: Activity,
      title: 'Emergency Care',
      description: '24/7 emergency eye care services for urgent eye conditions and injuries.',
      features: ['24/7 Availability', 'Trauma Care', 'Emergency Surgery', 'Quick Response']
    }
  ];

  return (
    <section className="section-padding bg-gray-50">
      <div className="container-custom">
        <div className="text-center mb-16">
          <h2 className="heading-2 mb-4">Our Services</h2>
          <p className="text-body max-w-3xl mx-auto">
            Comprehensive eye care services using state-of-the-art technology and internationally 
            accepted standards of treatment.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => {
            const Icon = service.icon;
            
            return (
              <div key={index} className="card group">
                <div className="p-8">
                  <div className="w-16 h-16 bg-gradient-green rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                    <Icon className="w-8 h-8 text-white" />
                  </div>
                  
                  <h3 className="heading-4 mb-4 group-hover:text-[var(--primary-green)] transition-colors">
                    {service.title}
                  </h3>
                  
                  <p className="text-small mb-6">
                    {service.description}
                  </p>
                  
                  <div className="space-y-2 mb-6">
                    {service.features.map((feature, idx) => (
                      <div key={idx} className="flex items-center text-sm text-[var(--text-light)]">
                        <div className="w-2 h-2 bg-[var(--primary-green)] rounded-full mr-3"></div>
                        <span>{feature}</span>
                      </div>
                    ))}
                  </div>
                  
                  <Link 
                    href="/services"
                    className="inline-flex items-center text-[var(--primary-green)] hover:text-[var(--dark-green)] transition-colors group/link"
                  >
                    Learn More
                    <ArrowRight className="w-4 h-4 ml-2 group-hover/link:translate-x-1 transition-transform" />
                  </Link>
                </div>
              </div>
            );
          })}
        </div>

        {/* Support Services */}
        <div className="mt-16">
          <h3 className="heading-3 text-center mb-12">Support Services</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="bg-white rounded-xl p-6 text-center shadow-lg">
              <div className="w-12 h-12 bg-[var(--primary-green)]/10 rounded-lg flex items-center justify-center mx-auto mb-4">
                <Microscope className="w-6 h-6 text-[var(--primary-green)]" />
              </div>
              <h4 className="font-semibold mb-2">Laboratory</h4>
              <p className="text-sm text-[var(--text-light)]">Advanced diagnostic services</p>
            </div>
            
            <div className="bg-white rounded-xl p-6 text-center shadow-lg">
              <div className="w-12 h-12 bg-[var(--primary-green)]/10 rounded-lg flex items-center justify-center mx-auto mb-4">
                <Heart className="w-6 h-6 text-[var(--primary-green)]" />
              </div>
              <h4 className="font-semibold mb-2">Pharmacy</h4>
              <p className="text-sm text-[var(--text-light)]">Complete range of medications</p>
            </div>
            
            <div className="bg-white rounded-xl p-6 text-center shadow-lg">
              <div className="w-12 h-12 bg-[var(--primary-green)]/10 rounded-lg flex items-center justify-center mx-auto mb-4">
                <Eye className="w-6 h-6 text-[var(--primary-green)]" />
              </div>
              <h4 className="font-semibold mb-2">Optical Shop</h4>
              <p className="text-sm text-[var(--text-light)]">Quality spectacles & frames</p>
            </div>
            
            <div className="bg-white rounded-xl p-6 text-center shadow-lg">
              <div className="w-12 h-12 bg-[var(--primary-green)]/10 rounded-lg flex items-center justify-center mx-auto mb-4">
                <Shield className="w-6 h-6 text-[var(--primary-green)]" />
              </div>
              <h4 className="font-semibold mb-2">Insurance</h4>
              <p className="text-sm text-[var(--text-light)]">Wide range of policies accepted</p>
            </div>
          </div>
        </div>

        {/* CTA Section */}
        <div className="mt-16 text-center">
          <div className="bg-white rounded-2xl p-8 shadow-lg max-w-4xl mx-auto">
            <h3 className="heading-3 mb-4">Need More Information About Our Services?</h3>
            <p className="text-body mb-6">
              Our care coordinators are available to help you understand our services and find the right treatment for your needs.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/contact" className="btn-primary">
                Contact Us
              </Link>
              <Link href="/services" className="btn-secondary">
                View All Services
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
