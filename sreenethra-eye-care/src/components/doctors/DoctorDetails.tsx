import { ArrowLeft, Phone, Award, GraduationCap, Users, Clock, MapPin } from 'lucide-react';
import Link from 'next/link';
import { Doctor } from '@/lib/types';

interface DoctorDetailsProps {
  doctor: Doctor;
}

const DoctorDetails = ({ doctor }: DoctorDetailsProps) => {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <div className="bg-white shadow-sm">
        <div className="container-custom py-6">
          <Link 
            href="/doctors" 
            className="inline-flex items-center text-[var(--primary-green)] hover:text-[var(--dark-green)] transition-colors mb-4"
          >
            <ArrowLeft className="w-4 h-4 mr-2" />
            Back to Doctors
          </Link>
          <h1 className="heading-1 text-[var(--text-dark)]">{doctor.name}</h1>
          <p className="text-lg text-[var(--text-light)] mt-2">{doctor.position}</p>
        </div>
      </div>

      <div className="container-custom py-12">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Main Content */}
          <div className="lg:col-span-2 space-y-8">
            {/* Profile Card */}
            <div className="bg-white rounded-2xl shadow-sm p-8">
              <div className="flex items-start space-x-6">
                <div className="w-24 h-24 bg-gradient-green rounded-2xl flex items-center justify-center flex-shrink-0">
                  <span className="text-white font-bold text-2xl">
                    {doctor.name.split(' ').map(n => n[0]).join('')}
                  </span>
                </div>
                <div className="flex-1">
                  <h2 className="heading-2 text-[var(--text-dark)] mb-2">{doctor.name}</h2>
                  <p className="text-lg text-[var(--text-light)] mb-4">{doctor.position}</p>
                  <div className="flex items-center text-[var(--primary-green)]">
                    <Phone className="w-5 h-5 mr-2" />
                    <span className="font-medium">{doctor.contact}</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Profile Description */}
            <div className="bg-white rounded-2xl shadow-sm p-8">
              <h3 className="heading-3 text-[var(--text-dark)] mb-4">Profile</h3>
              <div className="prose prose-gray max-w-none">
                {doctor.profile.split('\n').map((paragraph, index) => (
                  <p key={index} className="text-[var(--text-light)] mb-4 leading-relaxed">
                    {paragraph}
                  </p>
                ))}
              </div>
            </div>

            {/* Qualifications */}
            <div className="bg-white rounded-2xl shadow-sm p-8">
              <h3 className="heading-3 text-[var(--text-dark)] mb-6 flex items-center">
                <GraduationCap className="w-6 h-6 text-[var(--primary-green)] mr-3" />
                Qualifications
              </h3>
              <div className="bg-gray-50 rounded-xl p-6">
                <p className="text-[var(--text-light)] leading-relaxed">{doctor.qualification}</p>
              </div>
            </div>

            {/* Specialties */}
            <div className="bg-white rounded-2xl shadow-sm p-8">
              <h3 className="heading-3 text-[var(--text-dark)] mb-6 flex items-center">
                <Award className="w-6 h-6 text-[var(--primary-green)] mr-3" />
                Specialties
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                {doctor.specialties.map((specialty, index) => (
                  <div key={index} className="flex items-center p-4 bg-gray-50 rounded-xl">
                    <div className="w-2 h-2 bg-[var(--primary-green)] rounded-full mr-3 flex-shrink-0"></div>
                    <span className="text-[var(--text-light)]">{specialty}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Accolades */}
            {doctor.accolades.length > 0 && (
              <div className="bg-white rounded-2xl shadow-sm p-8">
                <h3 className="heading-3 text-[var(--text-dark)] mb-6 flex items-center">
                  <Award className="w-6 h-6 text-[var(--primary-green)] mr-3" />
                  Achievements & Accolades
                </h3>
                <div className="space-y-4">
                  {doctor.accolades.map((accolade, index) => (
                    <div key={index} className="flex items-start p-4 bg-gray-50 rounded-xl">
                      <div className="w-2 h-2 bg-[var(--primary-green)] rounded-full mr-3 mt-2 flex-shrink-0"></div>
                      <span className="text-[var(--text-light)] leading-relaxed">{accolade}</span>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            {/* Contact Card */}
            <div className="bg-white rounded-2xl shadow-sm p-6">
              <h3 className="heading-3 text-[var(--text-dark)] mb-4">Contact Information</h3>
              <div className="space-y-4">
                <div className="flex items-center">
                  <Phone className="w-5 h-5 text-[var(--primary-green)] mr-3" />
                  <div>
                    <p className="font-medium text-[var(--text-dark)]">Phone</p>
                    <p className="text-[var(--text-light)]">{doctor.contact}</p>
                  </div>
                </div>
                <div className="flex items-center">
                  <MapPin className="w-5 h-5 text-[var(--primary-green)] mr-3" />
                  <div>
                    <p className="font-medium text-[var(--text-dark)]">Location</p>
                    <p className="text-[var(--text-light)]">Sreenethra Eye Care</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Appointment Card */}
            <div className="bg-gradient-green rounded-2xl p-6 text-white">
              <h3 className="text-xl font-semibold mb-4">Schedule Appointment</h3>
              <p className="text-white/90 mb-6">
                Book a consultation with {doctor.name.split(' ')[0]} to discuss your eye care needs.
              </p>
              <Link 
                href="/schedule"
                className="inline-flex items-center justify-center w-full bg-white text-[var(--primary-green)] font-semibold py-3 px-6 rounded-xl hover:bg-gray-100 transition-colors"
              >
                <Clock className="w-5 h-5 mr-2" />
                Book Now
              </Link>
            </div>

            {/* Quick Stats */}
            <div className="bg-white rounded-2xl shadow-sm p-6">
              <h3 className="heading-3 text-[var(--text-dark)] mb-4">Quick Info</h3>
              <div className="space-y-3">
                <div className="flex justify-between">
                  <span className="text-[var(--text-light)]">Position</span>
                  <span className="font-medium text-[var(--text-dark)]">{doctor.position}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-[var(--text-light)]">Type</span>
                  <span className="font-medium text-[var(--text-dark)]">{doctor.type}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-[var(--text-light)]">Specialties</span>
                  <span className="font-medium text-[var(--text-dark)]">{doctor.specialties.length}</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DoctorDetails;
