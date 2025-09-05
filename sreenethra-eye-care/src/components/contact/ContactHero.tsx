import { Phone, Mail, MapPin, Clock } from 'lucide-react';

const ContactHero = () => {
  return (
    <section className="relative bg-gradient-to-br from-[var(--primary-green)] to-[var(--dark-green)] text-white overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-0 left-0 w-full h-full bg-[url('data:image/svg+xml,%3Csvg width="60" height="60" viewBox="0 0 60 60" xmlns="http://www.w3.org/2000/svg"%3E%3Cg fill="none" fill-rule="evenodd"%3E%3Cg fill="%23ffffff" fill-opacity="0.1"%3E%3Ccircle cx="30" cy="30" r="2"/%3E%3C/g%3E%3C/g%3E%3C/svg%3E')]"></div>
      </div>
      
      <div className="container-custom relative z-10">
        <div className="py-20 lg:py-28">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="heading-1 text-white mb-6">
              Contact Our Team of Eye Care Specialists
            </h1>
            
            <p className="text-xl text-white/90 mb-12 leading-relaxed">
              If you have any comments, suggestions, or concerns, please don't hesitate to let us know. 
              Your input helps us serve you better.
            </p>
            
            {/* Quick Contact Info */}
            <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-12">
              <div className="text-center">
                <div className="w-16 h-16 bg-white/20 rounded-2xl flex items-center justify-center mx-auto mb-4">
                  <Phone className="w-8 h-8 text-white" />
                </div>
                <div className="text-lg font-semibold text-white mb-2">Call Us</div>
                <div className="text-white/80">+91 98765 43210</div>
              </div>
              
              <div className="text-center">
                <div className="w-16 h-16 bg-white/20 rounded-2xl flex items-center justify-center mx-auto mb-4">
                  <Mail className="w-8 h-8 text-white" />
                </div>
                <div className="text-lg font-semibold text-white mb-2">Email Us</div>
                <div className="text-white/80">info@sreenethra.com</div>
              </div>
              
              <div className="text-center">
                <div className="w-16 h-16 bg-white/20 rounded-2xl flex items-center justify-center mx-auto mb-4">
                  <MapPin className="w-8 h-8 text-white" />
                </div>
                <div className="text-lg font-semibold text-white mb-2">Visit Us</div>
                <div className="text-white/80">5 Locations</div>
              </div>
              
              <div className="text-center">
                <div className="w-16 h-16 bg-white/20 rounded-2xl flex items-center justify-center mx-auto mb-4">
                  <Clock className="w-8 h-8 text-white" />
                </div>
                <div className="text-lg font-semibold text-white mb-2">Hours</div>
                <div className="text-white/80">Mon-Sat: 9AM-6PM</div>
              </div>
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

export default ContactHero;
