import Link from 'next/link';
import { Phone, MapPin, Mail, Clock, ArrowRight } from 'lucide-react';
import { hospitalInfo, branches } from '@/lib/data';

const ContactSection = () => {
  return (
    <section className="section-padding bg-gradient-green text-white">
      <div className="container-custom">
        <div className="text-center mb-16">
          <h2 className="heading-2 mb-4">Get In Touch</h2>
          <p className="text-lg opacity-90 max-w-3xl mx-auto">
            Ready to take the first step towards better vision? Contact us today to schedule 
            your appointment or learn more about our services.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Information */}
          <div className="space-y-8">
            <div>
              <h3 className="text-2xl font-bold mb-6">Main Branch</h3>
              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <MapPin className="w-6 h-6 text-white mt-1 flex-shrink-0" />
                  <div>
                    <h4 className="font-semibold mb-1">Address</h4>
                    <p className="opacity-90">{hospitalInfo.mainBranch.address}</p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-4">
                  <Phone className="w-6 h-6 text-white mt-1 flex-shrink-0" />
                  <div>
                    <h4 className="font-semibold mb-1">Phone Numbers</h4>
                    <p className="opacity-90">{hospitalInfo.mainBranch.phone}</p>
                    <p className="opacity-90">{hospitalInfo.mainBranch.phone2}</p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-4">
                  <Phone className="w-6 h-6 text-white mt-1 flex-shrink-0" />
                  <div>
                    <h4 className="font-semibold mb-1">Care Coordinator</h4>
                    <p className="opacity-90">{hospitalInfo.mainBranch.careCoordinator}</p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-4">
                  <Clock className="w-6 h-6 text-white mt-1 flex-shrink-0" />
                  <div>
                    <h4 className="font-semibold mb-1">Working Hours</h4>
                    <p className="opacity-90">Monday - Saturday: 8:00 AM - 6:00 PM</p>
                    <p className="opacity-90">Sunday: 9:00 AM - 2:00 PM</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Distance Information */}
            <div>
              <h3 className="text-xl font-semibold mb-4">Distance From Major Landmarks</h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4">
                  <p className="text-sm opacity-90">
                    <span className="font-semibold">Airport:</span> {hospitalInfo.distances.airport}
                  </p>
                </div>
                <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4">
                  <p className="text-sm opacity-90">
                    <span className="font-semibold">Railway Station:</span> {hospitalInfo.distances.railway}
                  </p>
                </div>
                <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4">
                  <p className="text-sm opacity-90">
                    <span className="font-semibold">Bus Station:</span> {hospitalInfo.distances.busStation}
                  </p>
                </div>
                <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4">
                  <p className="text-sm opacity-90">
                    <span className="font-semibold">RBI:</span> {hospitalInfo.distances.rbi}
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* CTA Cards */}
          <div className="space-y-6">
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8">
              <h3 className="text-2xl font-bold mb-4">Book an Appointment</h3>
              <p className="opacity-90 mb-6">
                Schedule your consultation with our expert doctors for comprehensive eye care.
              </p>
              <Link href="/schedule" className="btn-white inline-flex items-center group">
                Book Now
                <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>

            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8">
              <h3 className="text-2xl font-bold mb-4">Emergency Care</h3>
              <p className="opacity-90 mb-6">
                For urgent eye conditions, contact our emergency line for immediate assistance.
              </p>
              <a href={`tel:${hospitalInfo.mainBranch.phone}`} className="btn-white inline-flex items-center group">
                Call Emergency
                <Phone className="w-5 h-5 ml-2 group-hover:scale-110 transition-transform" />
              </a>
            </div>

            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8">
              <h3 className="text-2xl font-bold mb-4">Our Branches</h3>
              <p className="opacity-90 mb-4">
                We have multiple locations across Kerala for your convenience.
              </p>
              <div className="space-y-2 mb-6">
                {branches.slice(0, 3).map((branch, index) => (
                  <div key={index} className="flex justify-between items-center text-sm">
                    <span className="opacity-90">{branch.name}</span>
                    <span className="font-semibold">{branch.phone}</span>
                  </div>
                ))}
              </div>
              <Link href="/contact" className="btn-white inline-flex items-center group">
                View All Branches
                <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>
          </div>
        </div>

        {/* Bottom CTA */}
        <div className="mt-16 text-center">
          <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 max-w-4xl mx-auto">
            <h3 className="text-2xl font-bold mb-4">Ready to Start Your Journey to Better Vision?</h3>
            <p className="text-lg opacity-90 mb-6">
              Join thousands of patients who have trusted Sreenethra Eye Care for their eye health needs.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/schedule" className="btn-white">
                Schedule Consultation
              </Link>
              <Link href="/about" className="btn-secondary">
                Learn More About Us
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
