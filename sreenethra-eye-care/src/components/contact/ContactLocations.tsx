import { MapPin, Phone, Mail } from 'lucide-react';
import { hospitalInfo } from '@/lib/data';

const ContactLocations = () => {
  return (
    <section className="section-padding bg-white">
      <div className="container-custom">
        <div className="text-center mb-16">
          <h2 className="heading-2 text-[var(--text-dark)] mb-6">Our Locations</h2>
          <p className="text-body max-w-3xl mx-auto">
            Visit us at any of our convenient locations across the city. 
            We're here to provide exceptional eye care services close to you.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* Main Branch */}
          <div className="location-card group">
            <div className="p-6">
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 bg-gradient-green rounded-xl flex items-center justify-center mr-4">
                  <MapPin className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h3 className="font-semibold text-[var(--text-dark)] group-hover:text-[var(--primary-green)] transition-colors">
                    Main Branch
                  </h3>
                  <p className="text-sm text-[var(--text-light)]">Primary Location</p>
                </div>
              </div>
              
              <div className="space-y-3">
                <div className="flex items-start">
                  <MapPin className="w-5 h-5 text-[var(--primary-green)] mr-3 mt-0.5 flex-shrink-0" />
                  <div>
                    <p className="text-[var(--text-dark)] font-medium">Address</p>
                    <p className="text-[var(--text-light)] text-sm leading-relaxed">
                      {hospitalInfo.address}
                    </p>
                  </div>
                </div>
                
                <div className="flex items-center">
                  <Phone className="w-5 h-5 text-[var(--primary-green)] mr-3 flex-shrink-0" />
                  <div>
                    <p className="text-[var(--text-dark)] font-medium">Phone</p>
                    <div className="space-y-1">
                      {hospitalInfo.phoneNumbers.map((phone, index) => (
                        <a 
                          key={index}
                          href={`tel:${phone}`}
                          className="text-[var(--text-light)] text-sm hover:text-[var(--primary-green)] transition-colors block"
                        >
                          {phone}
                        </a>
                      ))}
                    </div>
                  </div>
                </div>
                
                <div className="flex items-center">
                  <Mail className="w-5 h-5 text-[var(--primary-green)] mr-3 flex-shrink-0" />
                  <div>
                    <p className="text-[var(--text-dark)] font-medium">Email</p>
                    <a 
                      href="mailto:info@sreenethra.com"
                      className="text-[var(--text-light)] text-sm hover:text-[var(--primary-green)] transition-colors"
                    >
                      info@sreenethra.com
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Branch Locations */}
          {hospitalInfo.branchLocations.map((branch, index) => (
            <div key={index} className="location-card group">
              <div className="p-6">
                <div className="flex items-center mb-4">
                  <div className="w-12 h-12 bg-gradient-green rounded-xl flex items-center justify-center mr-4">
                    <MapPin className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-[var(--text-dark)] group-hover:text-[var(--primary-green)] transition-colors">
                      {branch.name}
                    </h3>
                    <p className="text-sm text-[var(--text-light)]">Branch Location</p>
                  </div>
                </div>
                
                <div className="space-y-3">
                  <div className="flex items-start">
                    <MapPin className="w-5 h-5 text-[var(--primary-green)] mr-3 mt-0.5 flex-shrink-0" />
                    <div>
                      <p className="text-[var(--text-dark)] font-medium">Address</p>
                      <p className="text-[var(--text-light)] text-sm leading-relaxed">
                        {branch.address}
                      </p>
                    </div>
                  </div>
                  
                  <div className="flex items-center">
                    <Phone className="w-5 h-5 text-[var(--primary-green)] mr-3 flex-shrink-0" />
                    <div>
                      <p className="text-[var(--text-dark)] font-medium">Phone</p>
                      <a 
                        href={`tel:${branch.phone}`}
                        className="text-[var(--text-light)] text-sm hover:text-[var(--primary-green)] transition-colors"
                      >
                        {branch.phone}
                      </a>
                    </div>
                  </div>
                  
                  {branch.distance && (
                    <div className="flex items-center">
                      <div className="w-5 h-5 bg-[var(--primary-green)]/20 rounded-full mr-3 flex-shrink-0"></div>
                      <div>
                        <p className="text-[var(--text-dark)] font-medium">Distance</p>
                        <p className="text-[var(--text-light)] text-sm">
                          {branch.distance}
                        </p>
                      </div>
                    </div>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ContactLocations;
