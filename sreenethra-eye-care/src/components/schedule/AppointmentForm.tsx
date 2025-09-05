'use client';

import { useState } from 'react';
import { Calendar, Clock, User, Phone, Mail, MessageSquare, CheckCircle } from 'lucide-react';
import { seniorConsultants, consultants, departments } from '@/lib/data';

interface AppointmentFormData {
  patientName: string;
  email: string;
  phone: string;
  dateOfBirth: string;
  gender: string;
  department: string;
  doctor: string;
  appointmentDate: string;
  appointmentTime: string;
  appointmentType: string;
  symptoms: string;
  message: string;
}

const AppointmentForm = () => {
  const [currentStep, setCurrentStep] = useState(1);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  
  const [formData, setFormData] = useState<AppointmentFormData>({
    patientName: '',
    email: '',
    phone: '',
    dateOfBirth: '',
    gender: '',
    department: '',
    doctor: '',
    appointmentDate: '',
    appointmentTime: '',
    appointmentType: '',
    symptoms: '',
    message: ''
  });

  const allDoctors = [...seniorConsultants, ...consultants];
  const availableDoctors = formData.department 
    ? allDoctors.filter(doctor => 
        departments.find(dept => dept.name === formData.department)?.associatedDoctors.includes(doctor.name)
      )
    : allDoctors;

  const timeSlots = [
    '09:00 AM', '09:30 AM', '10:00 AM', '10:30 AM', '11:00 AM', '11:30 AM',
    '02:00 PM', '02:30 PM', '03:00 PM', '03:30 PM', '04:00 PM', '04:30 PM', '05:00 PM'
  ];

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value,
      // Reset doctor when department changes
      ...(name === 'department' && { doctor: '' })
    }));
  };

  const handleNextStep = () => {
    setCurrentStep(prev => Math.min(prev + 1, 3));
  };

  const handlePrevStep = () => {
    setCurrentStep(prev => Math.max(prev - 1, 1));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    await new Promise(resolve => setTimeout(resolve, 2000));
    
    setIsSubmitting(false);
    setIsSubmitted(true);
  };

  const getMinDate = () => {
    const today = new Date();
    return today.toISOString().split('T')[0];
  };

  const getMaxDate = () => {
    const today = new Date();
    const maxDate = new Date(today.getTime() + (30 * 24 * 60 * 60 * 1000)); // 30 days from now
    return maxDate.toISOString().split('T')[0];
  };

  if (isSubmitted) {
    return (
      <section id="booking-form" className="section-padding bg-white">
        <div className="container-custom">
          <div className="max-w-2xl mx-auto text-center">
            <div className="bg-green-50 rounded-2xl p-12">
              <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <CheckCircle className="w-10 h-10 text-green-600" />
              </div>
              <h2 className="text-3xl font-bold text-[var(--text-dark)] mb-4">
                Appointment Booked Successfully!
              </h2>
              <p className="text-[var(--text-light)] mb-6">
                Thank you for booking your appointment with us. We have sent a confirmation email 
                with all the details to your registered email address.
              </p>
              <div className="bg-white rounded-xl p-6 mb-6">
                <h3 className="font-semibold text-[var(--text-dark)] mb-4">Appointment Details:</h3>
                <div className="space-y-2 text-left">
                  <p><span className="font-medium">Patient:</span> {formData.patientName}</p>
                  <p><span className="font-medium">Doctor:</span> {formData.doctor}</p>
                  <p><span className="font-medium">Department:</span> {formData.department}</p>
                  <p><span className="font-medium">Date:</span> {new Date(formData.appointmentDate).toLocaleDateString()}</p>
                  <p><span className="font-medium">Time:</span> {formData.appointmentTime}</p>
                  <p><span className="font-medium">Type:</span> {formData.appointmentType}</p>
                </div>
              </div>
              <button
                onClick={() => {
                  setIsSubmitted(false);
                  setCurrentStep(1);
                  setFormData({
                    patientName: '',
                    email: '',
                    phone: '',
                    dateOfBirth: '',
                    gender: '',
                    department: '',
                    doctor: '',
                    appointmentDate: '',
                    appointmentTime: '',
                    appointmentType: '',
                    symptoms: '',
                    message: ''
                  });
                }}
                className="bg-[var(--primary-green)] text-white font-semibold py-3 px-6 rounded-xl hover:opacity-90 transition-opacity"
              >
                Book Another Appointment
              </button>
            </div>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section id="booking-form" className="section-padding bg-white">
      <div className="container-custom">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="heading-2 text-[var(--text-dark)] mb-6">Book Your Appointment</h2>
            <p className="text-body">
              Fill out the form below to schedule your appointment with our expert eye care specialists.
            </p>
          </div>

          {/* Progress Steps */}
          <div className="flex items-center justify-center mb-12">
            <div className="flex items-center space-x-8">
              {[1, 2, 3].map((step) => (
                <div key={step} className="flex items-center">
                  <div className={`w-10 h-10 rounded-full flex items-center justify-center font-semibold ${
                    currentStep >= step 
                      ? 'bg-[var(--primary-green)] text-white' 
                      : 'bg-gray-200 text-gray-500'
                  }`}>
                    {step}
                  </div>
                  <span className={`ml-3 font-medium ${
                    currentStep >= step ? 'text-[var(--primary-green)]' : 'text-gray-500'
                  }`}>
                    {step === 1 ? 'Personal Info' : step === 2 ? 'Appointment Details' : 'Confirmation'}
                  </span>
                  {step < 3 && (
                    <div className={`w-16 h-0.5 ml-8 ${
                      currentStep > step ? 'bg-[var(--primary-green)]' : 'bg-gray-200'
                    }`} />
                  )}
                </div>
              ))}
            </div>
          </div>

          <div className="bg-gray-50 rounded-2xl p-8">
            <form onSubmit={handleSubmit}>
              {/* Step 1: Personal Information */}
              {currentStep === 1 && (
                <div className="space-y-6">
                  <h3 className="text-xl font-semibold text-[var(--text-dark)] mb-6 flex items-center">
                    <User className="w-6 h-6 text-[var(--primary-green)] mr-3" />
                    Personal Information
                  </h3>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="patientName" className="block text-sm font-medium text-[var(--text-dark)] mb-2">
                        Full Name *
                      </label>
                      <input
                        type="text"
                        id="patientName"
                        name="patientName"
                        value={formData.patientName}
                        onChange={handleInputChange}
                        required
                        className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:ring-2 focus:ring-[var(--primary-green)] focus:border-transparent transition-colors"
                        placeholder="Enter your full name"
                      />
                    </div>
                    
                    <div>
                      <label htmlFor="email" className="block text-sm font-medium text-[var(--text-dark)] mb-2">
                        Email Address *
                      </label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleInputChange}
                        required
                        className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:ring-2 focus:ring-[var(--primary-green)] focus:border-transparent transition-colors"
                        placeholder="Enter your email"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="phone" className="block text-sm font-medium text-[var(--text-dark)] mb-2">
                        Phone Number *
                      </label>
                      <input
                        type="tel"
                        id="phone"
                        name="phone"
                        value={formData.phone}
                        onChange={handleInputChange}
                        required
                        className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:ring-2 focus:ring-[var(--primary-green)] focus:border-transparent transition-colors"
                        placeholder="Enter your phone number"
                      />
                    </div>
                    
                    <div>
                      <label htmlFor="dateOfBirth" className="block text-sm font-medium text-[var(--text-dark)] mb-2">
                        Date of Birth *
                      </label>
                      <input
                        type="date"
                        id="dateOfBirth"
                        name="dateOfBirth"
                        value={formData.dateOfBirth}
                        onChange={handleInputChange}
                        required
                        className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:ring-2 focus:ring-[var(--primary-green)] focus:border-transparent transition-colors"
                      />
                    </div>
                  </div>

                  <div>
                    <label htmlFor="gender" className="block text-sm font-medium text-[var(--text-dark)] mb-2">
                      Gender *
                    </label>
                    <select
                      id="gender"
                      name="gender"
                      value={formData.gender}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:ring-2 focus:ring-[var(--primary-green)] focus:border-transparent transition-colors"
                    >
                      <option value="">Select Gender</option>
                      <option value="male">Male</option>
                      <option value="female">Female</option>
                      <option value="other">Other</option>
                      <option value="prefer-not-to-say">Prefer not to say</option>
                    </select>
                  </div>

                  <div className="flex justify-end">
                    <button
                      type="button"
                      onClick={handleNextStep}
                      className="bg-[var(--primary-green)] text-white font-semibold py-3 px-6 rounded-xl hover:opacity-90 transition-opacity"
                    >
                      Next Step
                    </button>
                  </div>
                </div>
              )}

              {/* Step 2: Appointment Details */}
              {currentStep === 2 && (
                <div className="space-y-6">
                  <h3 className="text-xl font-semibold text-[var(--text-dark)] mb-6 flex items-center">
                    <Calendar className="w-6 h-6 text-[var(--primary-green)] mr-3" />
                    Appointment Details
                  </h3>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="department" className="block text-sm font-medium text-[var(--text-dark)] mb-2">
                        Department *
                      </label>
                      <select
                        id="department"
                        name="department"
                        value={formData.department}
                        onChange={handleInputChange}
                        required
                        className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:ring-2 focus:ring-[var(--primary-green)] focus:border-transparent transition-colors"
                      >
                        <option value="">Select Department</option>
                        {departments.map((dept) => (
                          <option key={dept.name} value={dept.name}>{dept.name}</option>
                        ))}
                      </select>
                    </div>
                    
                    <div>
                      <label htmlFor="doctor" className="block text-sm font-medium text-[var(--text-dark)] mb-2">
                        Preferred Doctor *
                      </label>
                      <select
                        id="doctor"
                        name="doctor"
                        value={formData.doctor}
                        onChange={handleInputChange}
                        required
                        className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:ring-2 focus:ring-[var(--primary-green)] focus:border-transparent transition-colors"
                      >
                        <option value="">Select Doctor</option>
                        {availableDoctors.map((doctor) => (
                          <option key={doctor.name} value={doctor.name}>
                            {doctor.name} - {doctor.position}
                          </option>
                        ))}
                      </select>
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="appointmentDate" className="block text-sm font-medium text-[var(--text-dark)] mb-2">
                        Preferred Date *
                      </label>
                      <input
                        type="date"
                        id="appointmentDate"
                        name="appointmentDate"
                        value={formData.appointmentDate}
                        onChange={handleInputChange}
                        min={getMinDate()}
                        max={getMaxDate()}
                        required
                        className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:ring-2 focus:ring-[var(--primary-green)] focus:border-transparent transition-colors"
                      />
                    </div>
                    
                    <div>
                      <label htmlFor="appointmentTime" className="block text-sm font-medium text-[var(--text-dark)] mb-2">
                        Preferred Time *
                      </label>
                      <select
                        id="appointmentTime"
                        name="appointmentTime"
                        value={formData.appointmentTime}
                        onChange={handleInputChange}
                        required
                        className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:ring-2 focus:ring-[var(--primary-green)] focus:border-transparent transition-colors"
                      >
                        <option value="">Select Time</option>
                        {timeSlots.map((time) => (
                          <option key={time} value={time}>{time}</option>
                        ))}
                      </select>
                    </div>
                  </div>

                  <div>
                    <label htmlFor="appointmentType" className="block text-sm font-medium text-[var(--text-dark)] mb-2">
                      Appointment Type *
                    </label>
                    <select
                      id="appointmentType"
                      name="appointmentType"
                      value={formData.appointmentType}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:ring-2 focus:ring-[var(--primary-green)] focus:border-transparent transition-colors"
                    >
                      <option value="">Select Appointment Type</option>
                      <option value="consultation">General Consultation</option>
                      <option value="follow-up">Follow-up Visit</option>
                      <option value="emergency">Emergency</option>
                      <option value="surgery-consultation">Surgery Consultation</option>
                      <option value="routine-checkup">Routine Check-up</option>
                    </select>
                  </div>

                  <div>
                    <label htmlFor="symptoms" className="block text-sm font-medium text-[var(--text-dark)] mb-2">
                      Symptoms or Concerns
                    </label>
                    <textarea
                      id="symptoms"
                      name="symptoms"
                      value={formData.symptoms}
                      onChange={handleInputChange}
                      rows={3}
                      className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:ring-2 focus:ring-[var(--primary-green)] focus:border-transparent transition-colors resize-none"
                      placeholder="Please describe any symptoms or specific concerns..."
                    />
                  </div>

                  <div className="flex justify-between">
                    <button
                      type="button"
                      onClick={handlePrevStep}
                      className="bg-gray-200 text-[var(--text-dark)] font-semibold py-3 px-6 rounded-xl hover:bg-gray-300 transition-colors"
                    >
                      Previous Step
                    </button>
                    <button
                      type="button"
                      onClick={handleNextStep}
                      className="bg-[var(--primary-green)] text-white font-semibold py-3 px-6 rounded-xl hover:opacity-90 transition-opacity"
                    >
                      Next Step
                    </button>
                  </div>
                </div>
              )}

              {/* Step 3: Confirmation */}
              {currentStep === 3 && (
                <div className="space-y-6">
                  <h3 className="text-xl font-semibold text-[var(--text-dark)] mb-6 flex items-center">
                    <CheckCircle className="w-6 h-6 text-[var(--primary-green)] mr-3" />
                    Confirm Your Appointment
                  </h3>
                  
                  <div className="bg-white rounded-xl p-6 space-y-4">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div>
                        <span className="text-sm text-[var(--text-light)]">Patient Name:</span>
                        <p className="font-medium text-[var(--text-dark)]">{formData.patientName}</p>
                      </div>
                      <div>
                        <span className="text-sm text-[var(--text-light)]">Email:</span>
                        <p className="font-medium text-[var(--text-dark)]">{formData.email}</p>
                      </div>
                      <div>
                        <span className="text-sm text-[var(--text-light)]">Phone:</span>
                        <p className="font-medium text-[var(--text-dark)]">{formData.phone}</p>
                      </div>
                      <div>
                        <span className="text-sm text-[var(--text-light)]">Gender:</span>
                        <p className="font-medium text-[var(--text-dark)]">{formData.gender}</p>
                      </div>
                      <div>
                        <span className="text-sm text-[var(--text-light)]">Department:</span>
                        <p className="font-medium text-[var(--text-dark)]">{formData.department}</p>
                      </div>
                      <div>
                        <span className="text-sm text-[var(--text-light)]">Doctor:</span>
                        <p className="font-medium text-[var(--text-dark)]">{formData.doctor}</p>
                      </div>
                      <div>
                        <span className="text-sm text-[var(--text-light)]">Date:</span>
                        <p className="font-medium text-[var(--text-dark)]">
                          {formData.appointmentDate ? new Date(formData.appointmentDate).toLocaleDateString() : ''}
                        </p>
                      </div>
                      <div>
                        <span className="text-sm text-[var(--text-light)]">Time:</span>
                        <p className="font-medium text-[var(--text-dark)]">{formData.appointmentTime}</p>
                      </div>
                      <div className="md:col-span-2">
                        <span className="text-sm text-[var(--text-light)]">Appointment Type:</span>
                        <p className="font-medium text-[var(--text-dark)]">{formData.appointmentType}</p>
                      </div>
                      {formData.symptoms && (
                        <div className="md:col-span-2">
                          <span className="text-sm text-[var(--text-light)]">Symptoms/Concerns:</span>
                          <p className="font-medium text-[var(--text-dark)]">{formData.symptoms}</p>
                        </div>
                      )}
                    </div>
                  </div>

                  <div>
                    <label htmlFor="message" className="block text-sm font-medium text-[var(--text-dark)] mb-2">
                      Additional Message
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleInputChange}
                      rows={4}
                      className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:ring-2 focus:ring-[var(--primary-green)] focus:border-transparent transition-colors resize-none"
                      placeholder="Any additional information or special requests..."
                    />
                  </div>

                  <div className="flex justify-between">
                    <button
                      type="button"
                      onClick={handlePrevStep}
                      className="bg-gray-200 text-[var(--text-dark)] font-semibold py-3 px-6 rounded-xl hover:bg-gray-300 transition-colors"
                    >
                      Previous Step
                    </button>
                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className="bg-[var(--primary-green)] text-white font-semibold py-3 px-8 rounded-xl hover:opacity-90 transition-opacity disabled:opacity-50 disabled:cursor-not-allowed flex items-center"
                    >
                      {isSubmitting ? (
                        <>
                          <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin mr-2"></div>
                          Booking...
                        </>
                      ) : (
                        <>
                          <CheckCircle className="w-5 h-5 mr-2" />
                          Confirm Appointment
                        </>
                      )}
                    </button>
                  </div>
                </div>
              )}
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AppointmentForm;
