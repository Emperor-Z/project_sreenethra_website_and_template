import { Clock, Phone, MapPin, Calendar, CheckCircle, AlertCircle } from 'lucide-react';

const ScheduleInfo = () => {
  return (
    <section className="section-padding bg-gray-50">
      <div className="container-custom">
        <div className="text-center mb-16">
          <h2 className="heading-2 text-[var(--text-dark)] mb-6">Important Information</h2>
          <p className="text-body max-w-3xl mx-auto">
            Please review the following information before booking your appointment to ensure a smooth experience.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Working Hours */}
          <div className="bg-white rounded-2xl shadow-sm p-8">
            <h3 className="text-xl font-semibold text-[var(--text-dark)] mb-6 flex items-center">
              <Clock className="w-6 h-6 text-[var(--primary-green)] mr-3" />
              Working Hours
            </h3>
            
            <div className="space-y-4">
              <div className="flex justify-between items-center py-3 border-b border-gray-100">
                <span className="font-medium text-[var(--text-dark)]">Monday - Friday</span>
                <span className="text-[var(--text-light)]">9:00 AM - 6:00 PM</span>
              </div>
              <div className="flex justify-between items-center py-3 border-b border-gray-100">
                <span className="font-medium text-[var(--text-dark)]">Saturday</span>
                <span className="text-[var(--text-light)]">9:00 AM - 4:00 PM</span>
              </div>
              <div className="flex justify-between items-center py-3">
                <span className="font-medium text-[var(--text-dark)]">Sunday</span>
                <span className="text-red-500">Closed</span>
              </div>
            </div>

            <div className="mt-6 p-4 bg-blue-50 rounded-xl">
              <div className="flex items-start">
                <AlertCircle className="w-5 h-5 text-blue-600 mr-3 mt-0.5 flex-shrink-0" />
                <div>
                  <h4 className="font-medium text-blue-900 mb-1">Emergency Services</h4>
                  <p className="text-sm text-blue-700">
                    For urgent eye care needs outside regular hours, please call our emergency line at +91 98765 43210.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Appointment Guidelines */}
          <div className="bg-white rounded-2xl shadow-sm p-8">
            <h3 className="text-xl font-semibold text-[var(--text-dark)] mb-6 flex items-center">
              <CheckCircle className="w-6 h-6 text-[var(--primary-green)] mr-3" />
              Appointment Guidelines
            </h3>
            
            <div className="space-y-4">
              <div className="flex items-start">
                <div className="w-2 h-2 bg-[var(--primary-green)] rounded-full mr-3 mt-2 flex-shrink-0"></div>
                <p className="text-[var(--text-light)] text-sm leading-relaxed">
                  Please arrive 15 minutes before your scheduled appointment time
                </p>
              </div>
              <div className="flex items-start">
                <div className="w-2 h-2 bg-[var(--primary-green)] rounded-full mr-3 mt-2 flex-shrink-0"></div>
                <p className="text-[var(--text-light)] text-sm leading-relaxed">
                  Bring a valid ID and any previous medical records related to your eye condition
                </p>
              </div>
              <div className="flex items-start">
                <div className="w-2 h-2 bg-[var(--primary-green)] rounded-full mr-3 mt-2 flex-shrink-0"></div>
                <p className="text-[var(--text-light)] text-sm leading-relaxed">
                  If you wear contact lenses, please remove them before your eye examination
                </p>
              </div>
              <div className="flex items-start">
                <div className="w-2 h-2 bg-[var(--primary-green)] rounded-full mr-3 mt-2 flex-shrink-0"></div>
                <p className="text-[var(--text-light)] text-sm leading-relaxed">
                  Cancellations must be made at least 24 hours in advance
                </p>
              </div>
              <div className="flex items-start">
                <div className="w-2 h-2 bg-[var(--primary-green)] rounded-full mr-3 mt-2 flex-shrink-0"></div>
                <p className="text-[var(--text-light)] text-sm leading-relaxed">
                  You will receive a confirmation email and SMS with appointment details
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Contact Information */}
        <div className="mt-12">
          <div className="bg-gradient-green rounded-2xl p-8 text-white">
            <div className="text-center mb-8">
              <h3 className="text-2xl font-semibold mb-4">Need Help with Booking?</h3>
              <p className="text-white/90">
                Our friendly staff is here to assist you with scheduling your appointment
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="w-16 h-16 bg-white/20 rounded-2xl flex items-center justify-center mx-auto mb-4">
                  <Phone className="w-8 h-8 text-white" />
                </div>
                <h4 className="font-semibold text-white mb-2">Call Us</h4>
                <a href="tel:+919876543210" className="text-white/90 hover:text-white transition-colors">
                  +91 98765 43210
                </a>
              </div>
              
              <div className="text-center">
                <div className="w-16 h-16 bg-white/20 rounded-2xl flex items-center justify-center mx-auto mb-4">
                  <MapPin className="w-8 h-8 text-white" />
                </div>
                <h4 className="font-semibold text-white mb-2">Visit Us</h4>
                <p className="text-white/90">
                  123 Main Street<br />City Center, Bangalore
                </p>
              </div>
              
              <div className="text-center">
                <div className="w-16 h-16 bg-white/20 rounded-2xl flex items-center justify-center mx-auto mb-4">
                  <Calendar className="w-8 h-8 text-white" />
                </div>
                <h4 className="font-semibold text-white mb-2">Book Online</h4>
                <p className="text-white/90">
                  Available 24/7<br />Instant Confirmation
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ScheduleInfo;
