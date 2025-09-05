import Link from 'next/link';
import { Phone, Calendar, Users, ArrowRight } from 'lucide-react';

const DepartmentsCTA = () => {
  return (
    <section className="section-padding bg-white">
      <div className="container-custom">
        <div className="text-center mb-16">
          <h2 className="heading-2 mb-4">Need Help Choosing the Right Department?</h2>
          <p className="text-body max-w-3xl mx-auto">
            Our care coordinators are here to help you find the right specialist for your needs. 
            Contact us for personalized guidance and appointment scheduling.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          <div className="text-center group">
            <div className="w-20 h-20 bg-gradient-green rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform">
              <Phone className="w-10 h-10 text-white" />
            </div>
            <h3 className="heading-4 mb-4">Call Our Care Coordinator</h3>
            <p className="text-small mb-6">
              Speak directly with our care coordinator who can help you choose the right department and schedule your appointment.
            </p>
            <a href="tel:8590604204" className="btn-primary">
              Call 85906 04204
            </a>
          </div>

          <div className="text-center group">
            <div className="w-20 h-20 bg-gradient-green rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform">
              <Calendar className="w-10 h-10 text-white" />
            </div>
            <h3 className="heading-4 mb-4">Book Online Appointment</h3>
            <p className="text-small mb-6">
              Schedule your appointment online with our easy-to-use booking system. Choose your preferred doctor and time slot.
            </p>
            <Link href="/schedule" className="btn-primary">
              Book Appointment
            </Link>
          </div>

          <div className="text-center group">
            <div className="w-20 h-20 bg-gradient-green rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform">
              <Users className="w-10 h-10 text-white" />
            </div>
            <h3 className="heading-4 mb-4">Meet Our Doctors</h3>
            <p className="text-small mb-6">
              Learn more about our expert doctors and their specializations to make an informed decision about your care.
            </p>
            <Link href="/doctors" className="btn-primary">
              View Doctors
            </Link>
          </div>
        </div>

        {/* Emergency Section */}
        <div className="bg-red-50 border border-red-200 rounded-2xl p-8 mb-16">
          <div className="text-center">
            <h3 className="heading-3 mb-4 text-red-800">Emergency Eye Care</h3>
            <p className="text-body mb-6 text-red-700">
              For urgent eye conditions, injuries, or sudden vision changes, contact our emergency line immediately.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a href="tel:04712322322" className="bg-red-600 text-white px-6 py-3 rounded-lg font-medium hover:bg-red-700 transition-colors">
                Emergency: 04712 322 322
              </a>
              <a href="tel:8590604204" className="bg-red-600 text-white px-6 py-3 rounded-lg font-medium hover:bg-red-700 transition-colors">
                Mobile: 8590604204
              </a>
            </div>
          </div>
        </div>

        {/* Additional Information */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          <div className="bg-gray-50 rounded-2xl p-8">
            <h3 className="heading-3 mb-6">What to Expect</h3>
            <div className="space-y-4">
              <div className="flex items-start space-x-4">
                <div className="w-8 h-8 bg-[var(--primary-green)] rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                  <span className="text-white font-bold text-sm">1</span>
                </div>
                <div>
                  <h4 className="font-semibold mb-2">Initial Consultation</h4>
                  <p className="text-sm text-[var(--text-light)]">Comprehensive eye examination and diagnosis</p>
                </div>
              </div>
              <div className="flex items-start space-x-4">
                <div className="w-8 h-8 bg-[var(--primary-green)] rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                  <span className="text-white font-bold text-sm">2</span>
                </div>
                <div>
                  <h4 className="font-semibold mb-2">Treatment Planning</h4>
                  <p className="text-sm text-[var(--text-light)]">Personalized treatment plan based on your condition</p>
                </div>
              </div>
              <div className="flex items-start space-x-4">
                <div className="w-8 h-8 bg-[var(--primary-green)] rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                  <span className="text-white font-bold text-sm">3</span>
                </div>
                <div>
                  <h4 className="font-semibold mb-2">Follow-up Care</h4>
                  <p className="text-sm text-[var(--text-light)]">Ongoing monitoring and support for optimal recovery</p>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-gray-50 rounded-2xl p-8">
            <h3 className="heading-3 mb-6">Insurance & Payment</h3>
            <div className="space-y-4">
              <div className="flex items-center space-x-3">
                <div className="w-2 h-2 bg-[var(--primary-green)] rounded-full"></div>
                <span className="text-sm text-[var(--text-light)]">Wide range of insurance policies accepted</span>
              </div>
              <div className="flex items-center space-x-3">
                <div className="w-2 h-2 bg-[var(--primary-green)] rounded-full"></div>
                <span className="text-sm text-[var(--text-light)]">Flexible payment options available</span>
              </div>
              <div className="flex items-center space-x-3">
                <div className="w-2 h-2 bg-[var(--primary-green)] rounded-full"></div>
                <span className="text-sm text-[var(--text-light)]">Claims processing assistance</span>
              </div>
              <div className="flex items-center space-x-3">
                <div className="w-2 h-2 bg-[var(--primary-green)] rounded-full"></div>
                <span className="text-sm text-[var(--text-light)]">Transparent pricing and billing</span>
              </div>
            </div>
            <div className="mt-6">
              <Link href="/contact" className="inline-flex items-center text-[var(--primary-green)] hover:text-[var(--dark-green)] transition-colors group/link">
                Learn More About Insurance
                <ArrowRight className="w-4 h-4 ml-2 group-hover/link:translate-x-1 transition-transform" />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default DepartmentsCTA;
