import { Metadata } from 'next';
import Link from 'next/link';
import { hospitalInfo, departments, seniorConsultants, consultants, branches } from '@/lib/data';

export const metadata: Metadata = {
  title: 'Sreenethra Eye Care - Expert Eye Care Services',
  description: 'Leading eye care hospital providing comprehensive ophthalmology services with expert doctors and advanced treatments for all your vision needs.',
};

export default function HomePage() {
  const totalDoctors = seniorConsultants.length + consultants.length;

  return (
    <div className="min-h-screen">
      {/* Navigation - Based on HTML template structure */}
      <nav className="nav-fixed-white-menu w-nav fixed w-full top-0 z-50" style={{ backgroundColor: 'rgba(255, 255, 255, 0)' }}>
        <div className="main-nav-container w-container max-w-7xl mx-auto px-4">
          <div className="main-menu-wrapper flex justify-between items-center h-16">
            <Link href="/" className="brand-logo w-nav-brand">
              <h1 className="text-2xl font-bold text-white">Sreenethra Eye Care</h1>
            </Link>
            <nav className="nav-menu-wrap w-nav-menu hidden md:flex">
              <div className="flex items-baseline space-x-4">
                <Link href="/" className="nav-item-link text-white hover:text-yellow-300 px-3 py-2">Home</Link>
                <Link href="/about" className="nav-item-link text-white hover:text-yellow-300 px-3 py-2">About</Link>
                <Link href="/departments" className="nav-item-link text-white hover:text-yellow-300 px-3 py-2">Departments</Link>
                <Link href="/doctors" className="nav-item-link text-white hover:text-yellow-300 px-3 py-2">Doctors</Link>
                <Link href="/contact" className="nav-item-link text-white hover:text-yellow-300 px-3 py-2">Contact</Link>
              </div>
            </nav>
            <div className="right-header-wrap">
              <Link href="/contact" className="primary-button w-button bg-white text-gray-900 px-4 py-2 rounded hover:bg-gray-100 transition-colors">
                Contact Us
              </Link>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Banner Section - Based on HTML template */}
      <section className="section-banner-home-2 relative min-h-screen flex items-center">
        {/* Video Background Placeholder */}
        <div className="video-banner absolute inset-0">
          <div className="bg-gradient-to-br from-green-600 via-green-700 to-green-800 w-full h-full"></div>
        </div>
        
        <div className="base-container max-w-7xl mx-auto px-4 relative z-10">
          <div className="banner-intro-content-home-2 text-center text-white">
            <h1 className="white-banner-title-home-2 text-4xl md:text-6xl font-bold mb-6">
              Your journey to health
            </h1>
            <div className="description-banner-home-2 mb-8">
              <p className="white-description text-xl md:text-2xl max-w-3xl mx-auto">
                {hospitalInfo.description}
              </p>
            </div>
            <div className="button-hero-wrapper flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/about" className="white-button-wrap bg-white text-gray-900 font-semibold py-4 px-8 rounded-xl hover:bg-gray-100 transition-colors">
                Learn More
              </Link>
              <Link href="#our-services" className="next-section-link border-2 border-yellow-300 text-white font-semibold py-4 px-8 rounded-xl hover:bg-yellow-300 hover:text-gray-900 transition-colors">
                Our Services
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits/Stats Section - Based on HTML template */}
      <section id="Our-Benefits" className="red-section-benefits bg-green-600 py-16">
        <div className="base-container max-w-7xl mx-auto px-4">
          <div className="benefit-item-container grid grid-cols-2 md:grid-cols-4 gap-8">
            <div className="white-benefit-item-wrapper bg-white rounded-lg p-6 text-center">
              <div className="content-info">
                <h2 className="benefit-title-dark text-3xl font-bold text-green-600 mb-2">60,000+</h2>
                <p className="benefit-text-dark text-gray-600">Surgeries</p>
              </div>
            </div>
            <div className="white-benefit-item-wrapper bg-white rounded-lg p-6 text-center">
              <div className="content-info">
                <h2 className="benefit-title-dark text-3xl font-bold text-green-600 mb-2">{totalDoctors}</h2>
                <p className="benefit-text-dark text-gray-600">Expert Doctors</p>
              </div>
            </div>
            <div className="white-benefit-item-wrapper bg-white rounded-lg p-6 text-center">
              <div className="content-info">
                <h2 className="benefit-title-dark text-3xl font-bold text-green-600 mb-2">{branches.length}</h2>
                <p className="benefit-text-dark text-gray-600">Locations</p>
              </div>
            </div>
            <div className="white-benefit-item-wrapper bg-white rounded-lg p-6 text-center">
              <div className="content-info">
                <h2 className="benefit-title-dark text-3xl font-bold text-green-600 mb-2">20+</h2>
                <p className="benefit-text-dark text-gray-600">Years Experience</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section - Based on HTML template */}
      <section id="our-services" className="section py-16 bg-white">
        <div className="base-container max-w-7xl mx-auto px-4">
          <div className="subtitle-wrapper text-center mb-12">
            <div className="subtitle-center">
              <h2 className="h2-title text-3xl font-bold text-gray-900 mb-4">With our services, we are always ready to help</h2>
              <p className="center-description text-lg text-gray-600 max-w-3xl mx-auto">
                Explore our wide range of medical specialties and services, including primary care, specialized treatments, surgical procedures and more.
              </p>
            </div>
          </div>
          <div className="home-2-services grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {departments.slice(0, 6).map((dept, index) => (
              <div key={index} className="hero-item-home-2 bg-white rounded-xl shadow-sm p-6 hover:shadow-md transition-shadow">
                <div className="service-image w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mb-4">
                  <div className="w-8 h-8 bg-green-600 rounded-full"></div>
                </div>
                <div className="content-wrapper-home-2">
                  <h5 className="without-margin text-xl font-semibold text-gray-900 mb-3">{dept.name}</h5>
                  <p className="services-description-home-2 text-gray-600 mb-4 line-clamp-3">{dept.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action Section - Based on HTML template */}
      <section className="section relative py-20 bg-green-600 text-white overflow-hidden">
        <div className="background-fill absolute inset-0">
          <div className="bg-gradient-to-r from-green-600 to-green-800 w-full h-full"></div>
          <div className="shadows absolute inset-0 bg-black bg-opacity-20"></div>
        </div>
        <div className="base-container max-w-7xl mx-auto px-4 relative z-10">
          <div className="centered-call-to-action text-center">
            <div className="call-to-action-heading mb-8">
              <h2 className="join text-3xl md:text-4xl font-bold mb-4">
                Join our team of Medical professionals and make the world a better place!
              </h2>
              <p className="white-join-us-text text-xl">
                We believe in the power of teamwork and collaboration to deliver comprehensive care tailored to each individual's needs.
              </p>
            </div>
            <div className="dont-shrink-button">
              <Link href="/contact" className="white-button-wrap bg-white text-gray-900 font-semibold py-4 px-8 rounded-xl hover:bg-gray-100 transition-colors">
                Join Us
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Team Section - Based on HTML template */}
      <section className="section-our-team py-20 bg-gray-50">
        <div className="base-container max-w-7xl mx-auto px-4">
          <div className="subtitle-wrapper display-flex-center text-center mb-16">
            <div className="subtitle-center">
              <h2 className="h2-title text-3xl font-bold text-gray-900 mb-4">Meet our best Healthcare team</h2>
              <p className="center-description text-lg text-gray-600 max-w-3xl mx-auto mb-8">
                With a wealth of experience and a shared commitment to excellence, our diverse team brings together a range of specialties to address all your healthcare needs.
              </p>
              <Link href="/doctors" className="secondary-button-wrap border-2 border-gray-900 text-gray-900 font-semibold py-3 px-6 rounded-xl hover:bg-gray-900 hover:text-white transition-colors">
                View all team
              </Link>
            </div>
          </div>
        </div>
        <div className="team-collection-list-wrap">
          <div className="team-wrapper grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto px-4">
            {seniorConsultants.slice(0, 6).map((doctor, index) => (
              <div key={index} className="team-item bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-md transition-shadow">
                <div className="slide-image h-64 bg-gradient-to-br from-green-100 to-green-200 relative">
                  <div className="firefighter w-full h-full bg-gradient-to-br from-green-300 to-green-500"></div>
                  <div className="team-member-info absolute bottom-0 left-0 right-0 bg-white bg-opacity-95 p-4">
                    <h4 className="firefighter-name text-lg font-semibold text-gray-900">{doctor.name}</h4>
                    <p className="firefighter-job text-gray-600">{doctor.position}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section - Based on HTML template */}
      <section className="section-margin-bottom py-20">
        <div className="base-container max-w-7xl mx-auto px-4">
          <div className="get-in-touch-container-home-2 relative bg-green-600 rounded-2xl overflow-hidden">
            <div className="shadows absolute inset-0 bg-black bg-opacity-10"></div>
            <div className="contacts-info-wrapper relative z-10 p-12 text-white">
              <div className="top-content-wrap">
                <h2 className="text-white no-margin text-3xl font-bold mb-4">Easily find our contact information</h2>
                <p className="white-description text-lg mb-6">Ensuring seamless communication and access to our services.</p>
                <div className="phone-wrapper flex items-center mb-8">
                  <div className="phone-icon w-6 h-6 bg-white rounded-full mr-3"></div>
                  <a href={`tel:${hospitalInfo.mainBranch.phone}`} className="link-white text-xl font-semibold hover:text-yellow-300 transition-colors">
                    {hospitalInfo.mainBranch.phone}
                  </a>
                </div>
              </div>
              <Link href="/contact" className="white-button-wrap bg-white text-gray-900 font-semibold py-4 px-8 rounded-xl hover:bg-gray-100 transition-colors">
                Get in Touch
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Footer - Based on HTML template */}
      <footer className="main-project-footer bg-gray-900 text-white">
        <div className="footer-top py-12">
          <div className="base-container max-w-7xl mx-auto px-4">
            <div className="get-in-touch-container flex flex-col lg:flex-row justify-between items-start">
              <div className="logo-top-wrapper mb-8 lg:mb-0">
                <Link href="/" className="logo-brand inline-block mb-4">
                  <h3 className="text-2xl font-bold">Sreenethra Eye Care</h3>
                </Link>
                <Link href="/contact" className="primary-button-with-icon bg-white text-gray-900 font-semibold py-3 px-6 rounded-xl hover:bg-gray-100 transition-colors">
                  Get in Touch
                </Link>
              </div>
              <div className="our-contacts-wrapper">
                <div className="footer-contacts-container space-y-4">
                  <div className="contacts-item-wrapper flex items-start">
                    <div className="address-icon-footer w-6 h-6 bg-white rounded mr-3 mt-1"></div>
                    <p className="footer-address text-gray-300">{hospitalInfo.mainBranch.address}</p>
                  </div>
                  <div className="contacts-item-wrapper flex items-start">
                    <div className="address-icon-footer w-6 h-6 bg-white rounded mr-3 mt-1"></div>
                    <div className="phone-container">
                      <a href={`tel:${hospitalInfo.mainBranch.phone}`} className="footer-contact-link text-gray-300 hover:text-white block">
                        {hospitalInfo.mainBranch.phone}
                      </a>
                      <a href={`tel:${hospitalInfo.mainBranch.phone2}`} className="footer-contact-link text-gray-300 hover:text-white block">
                        {hospitalInfo.mainBranch.phone2}
                      </a>
                    </div>
                  </div>
                  <div className="contacts-item-wrapper flex items-start">
                    <div className="address-icon-footer w-6 h-6 bg-white rounded mr-3 mt-1"></div>
                    <a href="mailto:info@sreenethra.com" className="footer-contact-link text-gray-300 hover:text-white">
                      info@sreenethra.com
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="footer-bottom border-t border-gray-800 py-8">
          <div className="base-container max-w-7xl mx-auto px-4">
            <div className="footer-bottom-container flex flex-col lg:flex-row justify-between items-center">
              <div className="footer-links-wrap flex flex-wrap gap-6 mb-4 lg:mb-0">
                <Link href="/" className="link-white text-gray-300 hover:text-white">Home</Link>
                <Link href="/about" className="link-white text-gray-300 hover:text-white">About us</Link>
                <Link href="/departments" className="link-white text-gray-300 hover:text-white">Services</Link>
                <Link href="/contact" className="link-white text-gray-300 hover:text-white">Contact Us</Link>
              </div>
              <div className="footer-rights-wrapper text-center lg:text-right">
                <div className="footer-copyright text-gray-400">
                  © Sreenethra Eye Care. All Rights Reserved.
                </div>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}