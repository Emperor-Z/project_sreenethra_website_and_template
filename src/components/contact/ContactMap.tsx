import { MapPin, Navigation, Clock } from 'lucide-react';

const ContactMap = () => {
  return (
    <section className="section-padding bg-white">
      <div className="container-custom">
        <div className="text-center mb-16">
          <h2 className="heading-2 text-[var(--text-dark)] mb-6">Find Us</h2>
          <p className="text-body max-w-3xl mx-auto">
            Visit our main branch or any of our convenient locations. 
            We're easily accessible and ready to serve you.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Map Placeholder */}
          <div className="relative">
            <div className="bg-gray-200 rounded-2xl h-96 flex items-center justify-center">
              <div className="text-center">
                <MapPin className="w-16 h-16 text-[var(--primary-green)] mx-auto mb-4" />
                <h3 className="text-xl font-semibold text-[var(--text-dark)] mb-2">Interactive Map</h3>
                <p className="text-[var(--text-light)]">
                  Map integration will be added here
                </p>
              </div>
            </div>
            
            {/* Map Overlay Info */}
            <div className="absolute top-4 left-4 bg-white rounded-xl p-4 shadow-lg">
              <div className="flex items-center mb-2">
                <MapPin className="w-5 h-5 text-[var(--primary-green)] mr-2" />
                <span className="font-semibold text-[var(--text-dark)]">Main Branch</span>
              </div>
              <p className="text-sm text-[var(--text-light)]">
                123 Main Street, City Center
              </p>
            </div>
          </div>

          {/* Location Details */}
          <div className="space-y-6">
            <div className="bg-gray-50 rounded-2xl p-6">
              <h3 className="text-xl font-semibold text-[var(--text-dark)] mb-4">Main Branch Details</h3>
              
              <div className="space-y-4">
                <div className="flex items-start">
                  <MapPin className="w-6 h-6 text-[var(--primary-green)] mr-4 mt-1 flex-shrink-0" />
                  <div>
                    <h4 className="font-medium text-[var(--text-dark)] mb-1">Address</h4>
                    <p className="text-[var(--text-light)] text-sm leading-relaxed">
                      123 Main Street, City Center, Bangalore, Karnataka 560001
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <Clock className="w-6 h-6 text-[var(--primary-green)] mr-4 mt-1 flex-shrink-0" />
                  <div>
                    <h4 className="font-medium text-[var(--text-dark)] mb-1">Operating Hours</h4>
                    <div className="text-[var(--text-light)] text-sm space-y-1">
                      <p>Monday - Friday: 9:00 AM - 6:00 PM</p>
                      <p>Saturday: 9:00 AM - 4:00 PM</p>
                      <p>Sunday: Closed</p>
                    </div>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <Navigation className="w-6 h-6 text-[var(--primary-green)] mr-4 mt-1 flex-shrink-0" />
                  <div>
                    <h4 className="font-medium text-[var(--text-dark)] mb-1">Parking</h4>
                    <p className="text-[var(--text-light)] text-sm">
                      Free parking available for patients
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-gradient-green rounded-2xl p-6 text-white">
              <h3 className="text-xl font-semibold mb-4">Get Directions</h3>
              <p className="text-white/90 mb-6">
                Use your preferred navigation app to find the best route to our location.
              </p>
              
              <div className="grid grid-cols-2 gap-4">
                <a 
                  href="https://maps.google.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center bg-white text-[var(--primary-green)] font-semibold py-3 px-4 rounded-xl hover:bg-gray-100 transition-colors"
                >
                  <Navigation className="w-5 h-5 mr-2" />
                  Google Maps
                </a>
                <a 
                  href="https://maps.apple.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center bg-white text-[var(--primary-green)] font-semibold py-3 px-4 rounded-xl hover:bg-gray-100 transition-colors"
                >
                  <Navigation className="w-5 h-5 mr-2" />
                  Apple Maps
                </a>
              </div>
            </div>

            <div className="bg-white border border-gray-200 rounded-2xl p-6">
              <h3 className="text-xl font-semibold text-[var(--text-dark)] mb-4">Nearby Landmarks</h3>
              
              <div className="space-y-3">
                <div className="flex items-center">
                  <div className="w-2 h-2 bg-[var(--primary-green)] rounded-full mr-3"></div>
                  <span className="text-[var(--text-light)] text-sm">City Mall - 2 minutes walk</span>
                </div>
                <div className="flex items-center">
                  <div className="w-2 h-2 bg-[var(--primary-green)] rounded-full mr-3"></div>
                  <span className="text-[var(--text-light)] text-sm">Metro Station - 5 minutes walk</span>
                </div>
                <div className="flex items-center">
                  <div className="w-2 h-2 bg-[var(--primary-green)] rounded-full mr-3"></div>
                  <span className="text-[var(--text-light)] text-sm">Bus Stop - 1 minute walk</span>
                </div>
                <div className="flex items-center">
                  <div className="w-2 h-2 bg-[var(--primary-green)] rounded-full mr-3"></div>
                  <span className="text-[var(--text-light)] text-sm">Parking Garage - Adjacent building</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactMap;
