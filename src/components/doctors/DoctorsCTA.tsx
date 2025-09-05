import Link from 'next/link';
import { Calendar, Phone, MapPin, Clock } from 'lucide-react';

const DoctorsCTA = () => {
  return (
    <section className="section-padding bg-gradient-to-br from-[var(--primary-green)] to-[var(--dark-green)] text-white">
      <div className="container-custom">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="heading-2 text-white mb-6">Ready to Meet Our Doctors?</h2>
          <p className="text-xl text-white/90 mb-12 leading-relaxed">
            Schedule a consultation with our expert eye care specialists and take the first step 
            towards better vision and eye health.
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
            <div className="text-center">
              <div className="w-16 h-16 bg-white/20 rounded-2xl flex items-center justify-center mx-auto mb-4">
                <Calendar className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-white mb-2">Book Appointment</h3>
              <p className="text-white/80">Schedule your consultation online or call us directly</p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-white/20 rounded-2xl flex items-center justify-center mx-auto mb-4">
                <Phone className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-white mb-2">Call Us</h3>
              <p className="text-white/80">Speak with our care coordinators for immediate assistance</p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-white/20 rounded-2xl flex items-center justify-center mx-auto mb-4">
                <MapPin className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-white mb-2">Visit Us</h3>
              <p className="text-white/80">Find our nearest location and plan your visit</p>
            </div>
          </div>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link 
              href="/schedule"
              className="inline-flex items-center justify-center bg-white text-[var(--primary-green)] font-semibold py-4 px-8 rounded-xl hover:bg-gray-100 transition-colors"
            >
              <Calendar className="w-5 h-5 mr-2" />
              Schedule Appointment
            </Link>
            <Link 
              href="/contact"
              className="inline-flex items-center justify-center bg-white/20 text-white font-semibold py-4 px-8 rounded-xl hover:bg-white/30 transition-colors border border-white/30"
            >
              <Phone className="w-5 h-5 mr-2" />
              Contact Us
            </Link>
          </div>
          
          <div className="mt-12 pt-8 border-t border-white/20">
            <div className="flex items-center justify-center text-white/80">
              <Clock className="w-5 h-5 mr-2" />
              <span>Available Monday to Saturday, 9:00 AM - 6:00 PM</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default DoctorsCTA;
