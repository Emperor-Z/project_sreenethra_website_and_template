import Link from 'next/link';
import { Phone, MapPin, Mail, Clock, Facebook, Twitter, Instagram, Linkedin } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const quickLinks = [
    { name: 'Home', href: '/' },
    { name: 'About Us', href: '/about' },
    { name: 'Departments', href: '/departments' },
    { name: 'Doctors', href: '/doctors' },
    { name: 'Services', href: '/services' },
    { name: 'Contact', href: '/contact' },
  ];

  const departments = [
    { name: 'Cataract Surgery', href: '/departments/cataract' },
    { name: 'Cornea & Refractive', href: '/departments/cornea' },
    { name: 'Retina & Vitreous', href: '/departments/retina' },
    { name: 'Glaucoma', href: '/departments/glaucoma' },
    { name: 'Paediatric Ophthalmology', href: '/departments/paediatric' },
    { name: 'Neuro-Ophthalmology', href: '/departments/neuro' },
  ];

  const branches = [
    { name: 'Thiruvananthapuram', phone: '04712 322 322' },
    { name: 'Kottarakkara', phone: 'Contact Main Branch' },
    { name: 'Kattakkada', phone: 'Contact Main Branch' },
    { name: 'Neyyattinkara', phone: 'Contact Main Branch' },
    { name: 'Chirayinkeezhu', phone: 'Contact Main Branch' },
  ];

  return (
    <footer className="footer-bg text-white">
      {/* Main footer content */}
      <div className="container-custom section-padding">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="space-y-6">
            <div className="flex items-center space-x-3">
              <div className="w-12 h-12 bg-gradient-green rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-xl">S</span>
              </div>
              <div>
                <h3 className="text-xl font-bold">Sreenethra Eye Care</h3>
                <p className="text-sm text-gray-300">Premier Eye Care Centre</p>
              </div>
            </div>
            <p className="text-gray-300 leading-relaxed">
              A world made brighter & clearer awaits you at Sreenethra Eye Care. 
              Premier tertiary eye care centre in Thiruvananthapuram.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-300 hover:text-[var(--primary-green)] transition-colors">
                <Facebook className="w-5 h-5" />
              </a>
              <a href="#" className="text-gray-300 hover:text-[var(--primary-green)] transition-colors">
                <Twitter className="w-5 h-5" />
              </a>
              <a href="#" className="text-gray-300 hover:text-[var(--primary-green)] transition-colors">
                <Instagram className="w-5 h-5" />
              </a>
              <a href="#" className="text-gray-300 hover:text-[var(--primary-green)] transition-colors">
                <Linkedin className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-6">
            <h4 className="text-lg font-semibold">Quick Links</h4>
            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <Link 
                    href={link.href}
                    className="text-gray-300 hover:text-[var(--primary-green)] transition-colors"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Departments */}
          <div className="space-y-6">
            <h4 className="text-lg font-semibold">Departments</h4>
            <ul className="space-y-3">
              {departments.map((dept) => (
                <li key={dept.name}>
                  <Link 
                    href={dept.href}
                    className="text-gray-300 hover:text-[var(--primary-green)] transition-colors text-sm"
                  >
                    {dept.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div className="space-y-6">
            <h4 className="text-lg font-semibold">Contact Info</h4>
            <div className="space-y-4">
              <div className="flex items-start space-x-3">
                <MapPin className="w-5 h-5 text-[var(--primary-green)] mt-1 flex-shrink-0" />
                <div>
                  <p className="text-gray-300 text-sm">
                    Bakery Junction, Nandavanam Road<br />
                    Thiruvananthapuram, Kerala
                  </p>
                </div>
              </div>
              
              <div className="flex items-center space-x-3">
                <Phone className="w-5 h-5 text-[var(--primary-green)] flex-shrink-0" />
                <div>
                  <p className="text-gray-300 text-sm">04712 322 322</p>
                  <p className="text-gray-300 text-sm">8590604204</p>
                </div>
              </div>
              
              <div className="flex items-center space-x-3">
                <Mail className="w-5 h-5 text-[var(--primary-green)] flex-shrink-0" />
                <p className="text-gray-300 text-sm">info@sreenethraeyecare.com</p>
              </div>
              
              <div className="flex items-start space-x-3">
                <Clock className="w-5 h-5 text-[var(--primary-green)] mt-1 flex-shrink-0" />
                <div>
                  <p className="text-gray-300 text-sm">Mon - Sat: 8:00 AM - 6:00 PM</p>
                  <p className="text-gray-300 text-sm">Sunday: 9:00 AM - 2:00 PM</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Branches Section */}
        <div className="mt-12 pt-8 border-t border-gray-700">
          <h4 className="text-lg font-semibold mb-6">Our Branches</h4>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-4">
            {branches.map((branch) => (
              <div key={branch.name} className="bg-gray-800 p-4 rounded-lg">
                <h5 className="font-semibold text-[var(--primary-green)] mb-2">{branch.name}</h5>
                <p className="text-gray-300 text-sm">{branch.phone}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Distance Information */}
        <div className="mt-8 pt-8 border-t border-gray-700">
          <h4 className="text-lg font-semibold mb-4">Distance From Major Landmarks</h4>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-sm">
            <div className="text-gray-300">
              <span className="text-[var(--primary-green)]">Thiruvananthapuram International Airport:</span> 4.9km
            </div>
            <div className="text-gray-300">
              <span className="text-[var(--primary-green)]">Trivandrum Central Railway Station:</span> 2.3 km
            </div>
            <div className="text-gray-300">
              <span className="text-[var(--primary-green)]">Thampanoor KSRTC Bus Station:</span> 2 km
            </div>
            <div className="text-gray-300">
              <span className="text-[var(--primary-green)]">Reserve Bank of India:</span> 200 mt
            </div>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-gray-700">
        <div className="container-custom py-6">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="text-gray-300 text-sm">
              © {currentYear} Sreenethra Eye Care. All Rights Reserved.
            </div>
            <div className="flex space-x-6 text-sm">
              <Link href="/privacy" className="text-gray-300 hover:text-[var(--primary-green)] transition-colors">
                Privacy Policy
              </Link>
              <Link href="/terms" className="text-gray-300 hover:text-[var(--primary-green)] transition-colors">
                Terms of Service
              </Link>
              <Link href="/sitemap" className="text-gray-300 hover:text-[var(--primary-green)] transition-colors">
                Sitemap
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
