import { Metadata } from 'next';
import Link from 'next/link';
import { Calendar, Users, MapPin, Phone, Mail, Clock } from 'lucide-react';
import { hospitalInfo, departments, seniorConsultants, consultants } from '@/lib/data';

export const metadata: Metadata = {
  title: 'Sreenethra Eye Care - Expert Eye Care Services',
  description: 'Leading eye care hospital providing comprehensive ophthalmology services with expert doctors and advanced treatments for all your vision needs.',
};

export default function HomePage() {
  const totalDoctors = seniorConsultants.length + consultants.length;
  
  return (
    <div className="min-h-screen">
      {/* Navigation */}
      <nav className="bg-white shadow-sm fixed w-full top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex-shrink-0">
              <h1 className="text-2xl font-bold text-[var(--primary-green)]">Sreenethra Eye Care</h1>
            </div>
            <div className="hidden md:block">
              <div className="ml-10 flex items-baseline space-x-4">
                <Link href="/" className="text-[var(--primary-green)] hover:text-[var(--dark-green)] px-3 py-2 rounded-md text-sm font-medium">Home</Link>
                <Link href="/about" className="text-gray-700 hover:text-[var(--primary-green)] px-3 py-2 rounded-md text-sm font-medium">About</Link>
                <Link href="/departments" className="text-gray-700 hover:text-[var(--primary-green)] px-3 py-2 rounded-md text-sm font-medium">Departments</Link>
                <Link href="/doctors" className="text-gray-700 hover:text-[var(--primary-green)] px-3 py-2 rounded-md text-sm font-medium">Doctors</Link>
                <Link href="/contact" className="text-gray-700 hover:text-[var(--primary-green)] px-3 py-2 rounded-md text-sm font-medium">Contact</Link>
                <Link href="/schedule" className="bg-[var(--primary-green)] text-white hover:bg-[var(--dark-green)] px-4 py-2 rounded-md text-sm font-medium">Schedule Appointment</Link>
              </div>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="pt-16 bg-gradient-to-br from-[var(--primary-green)] to-[var(--dark-green)] text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              Expert Eye Care Services
            </h1>
                              <p className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto">
                    {hospitalInfo.description}
                  </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link 
                href="/schedule"
                className="bg-white text-[var(--primary-green)] font-semibold py-4 px-8 rounded-xl hover:bg-gray-100 transition-colors inline-flex items-center justify-center"
              >
                <Calendar className="w-5 h-5 mr-2" />
                Schedule Appointment
              </Link>
              <Link 
                href="/departments"
                className="bg-white/20 text-white font-semibold py-4 px-8 rounded-xl hover:bg-white/30 transition-colors border border-white/30 inline-flex items-center justify-center"
              >
                <Users className="w-5 h-5 mr-2" />
                Our Services
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Quick Stats */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="text-3xl font-bold text-[var(--primary-green)] mb-2">{departments.length}</div>
              <div className="text-gray-600">Departments</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-[var(--primary-green)] mb-2">{totalDoctors}</div>
              <div className="text-gray-600">Expert Doctors</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-[var(--primary-green)] mb-2">5</div>
              <div className="text-gray-600">Locations</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-[var(--primary-green)] mb-2">24/7</div>
              <div className="text-gray-600">Emergency Care</div>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Departments */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Our Departments</h2>
            <p className="text-lg text-gray-600">Comprehensive eye care services across multiple specialties</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {departments.slice(0, 6).map((dept, index) => (
              <div key={index} className="bg-white rounded-xl shadow-sm p-6 hover:shadow-md transition-shadow">
                <h3 className="text-xl font-semibold text-gray-900 mb-3">{dept.name}</h3>
                <p className="text-gray-600 mb-4 line-clamp-3">{dept.description}</p>
                <Link 
                  href="/departments"
                  className="text-[var(--primary-green)] hover:text-[var(--dark-green)] font-medium inline-flex items-center"
                >
                  Learn More
                  <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </Link>
              </div>
            ))}
          </div>
          <div className="text-center mt-8">
            <Link 
              href="/departments"
              className="bg-[var(--primary-green)] text-white font-semibold py-3 px-6 rounded-xl hover:bg-[var(--dark-green)] transition-colors"
            >
              View All Departments
            </Link>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-16 bg-[var(--primary-green)] text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Get in Touch</h2>
            <p className="text-xl">Ready to take care of your vision? Contact us today.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <Phone className="w-12 h-12 mx-auto mb-4" />
              <h3 className="text-xl font-semibold mb-2">Call Us</h3>
              <p className="text-white/90">{hospitalInfo.mainBranch.phone}</p>
            </div>
            <div className="text-center">
              <Mail className="w-12 h-12 mx-auto mb-4" />
              <h3 className="text-xl font-semibold mb-2">Email Us</h3>
              <p className="text-white/90">info@sreenethra.com</p>
            </div>
            <div className="text-center">
              <MapPin className="w-12 h-12 mx-auto mb-4" />
              <h3 className="text-xl font-semibold mb-2">Visit Us</h3>
              <p className="text-white/90">Multiple Locations</p>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h3 className="text-2xl font-bold mb-4">Sreenethra Eye Care</h3>
            <p className="text-gray-400 mb-4">Expert Eye Care Services</p>
            <div className="flex justify-center space-x-6">
              <Link href="/" className="text-gray-400 hover:text-white">Home</Link>
              <Link href="/about" className="text-gray-400 hover:text-white">About</Link>
              <Link href="/departments" className="text-gray-400 hover:text-white">Departments</Link>
              <Link href="/doctors" className="text-gray-400 hover:text-white">Doctors</Link>
              <Link href="/contact" className="text-gray-400 hover:text-white">Contact</Link>
            </div>
            <div className="mt-4 text-gray-500">
              <p>&copy; 2024 Sreenethra Eye Care. All rights reserved.</p>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}