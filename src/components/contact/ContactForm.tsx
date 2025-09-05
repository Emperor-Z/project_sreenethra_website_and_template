import { useState } from 'react';
import { Send, Phone, Mail, MapPin, Clock } from 'lucide-react';

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: ''
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    await new Promise(resolve => setTimeout(resolve, 1000));
    
    setIsSubmitting(false);
    setIsSubmitted(true);
    
    // Reset form after 3 seconds
    setTimeout(() => {
      setIsSubmitted(false);
      setFormData({
        name: '',
        email: '',
        phone: '',
        subject: '',
        message: ''
      });
    }, 3000);
  };

  return (
    <section className="section-padding bg-gray-50">
      <div className="container-custom">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="heading-2 text-[var(--text-dark)] mb-6">Get in Touch</h2>
            <p className="text-body max-w-3xl mx-auto">
              Do you have questions? Please provide your name, email address, phone number, and your message, 
              and we will get back to you as soon as possible.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            {/* Contact Form */}
            <div className="lg:col-span-2">
              <div className="bg-white rounded-2xl shadow-sm p-8">
                {isSubmitted ? (
                  <div className="text-center py-12">
                    <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
                      <Send className="w-8 h-8 text-green-600" />
                    </div>
                    <h3 className="text-2xl font-semibold text-[var(--text-dark)] mb-4">
                      Thank You!
                    </h3>
                    <p className="text-[var(--text-light)]">
                      Your message has been sent successfully. We'll get back to you soon.
                    </p>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div>
                        <label htmlFor="name" className="block text-sm font-medium text-[var(--text-dark)] mb-2">
                          Your Name *
                        </label>
                        <input
                          type="text"
                          id="name"
                          name="name"
                          value={formData.name}
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
                        <label htmlFor="subject" className="block text-sm font-medium text-[var(--text-dark)] mb-2">
                          Subject *
                        </label>
                        <select
                          id="subject"
                          name="subject"
                          value={formData.subject}
                          onChange={handleInputChange}
                          required
                          className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:ring-2 focus:ring-[var(--primary-green)] focus:border-transparent transition-colors"
                        >
                          <option value="">Select a subject</option>
                          <option value="appointment">Book Appointment</option>
                          <option value="consultation">General Consultation</option>
                          <option value="emergency">Emergency</option>
                          <option value="billing">Billing Inquiry</option>
                          <option value="feedback">Feedback</option>
                          <option value="other">Other</option>
                        </select>
                      </div>
                    </div>

                    <div>
                      <label htmlFor="message" className="block text-sm font-medium text-[var(--text-dark)] mb-2">
                        Message *
                      </label>
                      <textarea
                        id="message"
                        name="message"
                        value={formData.message}
                        onChange={handleInputChange}
                        required
                        rows={6}
                        className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:ring-2 focus:ring-[var(--primary-green)] focus:border-transparent transition-colors resize-none"
                        placeholder="Please describe your inquiry or concern..."
                      />
                    </div>

                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className="w-full bg-gradient-green text-white font-semibold py-4 px-8 rounded-xl hover:opacity-90 transition-opacity disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center"
                    >
                      {isSubmitting ? (
                        <>
                          <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin mr-2"></div>
                          Sending...
                        </>
                      ) : (
                        <>
                          <Send className="w-5 h-5 mr-2" />
                          Send Message
                        </>
                      )}
                    </button>
                  </form>
                )}
              </div>
            </div>

            {/* Contact Information Sidebar */}
            <div className="space-y-6">
              <div className="bg-white rounded-2xl shadow-sm p-6">
                <h3 className="text-xl font-semibold text-[var(--text-dark)] mb-6">Contact Information</h3>
                
                <div className="space-y-6">
                  <div className="flex items-start">
                    <Phone className="w-6 h-6 text-[var(--primary-green)] mr-4 mt-1 flex-shrink-0" />
                    <div>
                      <h4 className="font-medium text-[var(--text-dark)] mb-2">Phone Numbers</h4>
                      <div className="space-y-1">
                        <a href="tel:+919876543210" className="text-[var(--text-light)] hover:text-[var(--primary-green)] transition-colors block">
                          +91 98765 43210
                        </a>
                        <a href="tel:+919876543211" className="text-[var(--text-light)] hover:text-[var(--primary-green)] transition-colors block">
                          +91 98765 43211
                        </a>
                      </div>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <Mail className="w-6 h-6 text-[var(--primary-green)] mr-4 mt-1 flex-shrink-0" />
                    <div>
                      <h4 className="font-medium text-[var(--text-dark)] mb-2">Email</h4>
                      <a href="mailto:info@sreenethra.com" className="text-[var(--text-light)] hover:text-[var(--primary-green)] transition-colors">
                        info@sreenethra.com
                      </a>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <MapPin className="w-6 h-6 text-[var(--primary-green)] mr-4 mt-1 flex-shrink-0" />
                    <div>
                      <h4 className="font-medium text-[var(--text-dark)] mb-2">Address</h4>
                      <p className="text-[var(--text-light)] text-sm leading-relaxed">
                        123 Main Street, City Center, Bangalore, Karnataka 560001
                      </p>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <Clock className="w-6 h-6 text-[var(--primary-green)] mr-4 mt-1 flex-shrink-0" />
                    <div>
                      <h4 className="font-medium text-[var(--text-dark)] mb-2">Working Hours</h4>
                      <div className="text-[var(--text-light)] text-sm space-y-1">
                        <p>Monday - Friday: 9:00 AM - 6:00 PM</p>
                        <p>Saturday: 9:00 AM - 4:00 PM</p>
                        <p>Sunday: Closed</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-gradient-green rounded-2xl p-6 text-white">
                <h3 className="text-xl font-semibold mb-4">Emergency Contact</h3>
                <p className="text-white/90 mb-4">
                  For urgent eye care needs outside regular hours, please call our emergency line.
                </p>
                <a 
                  href="tel:+919876543210"
                  className="inline-flex items-center justify-center w-full bg-white text-[var(--primary-green)] font-semibold py-3 px-6 rounded-xl hover:bg-gray-100 transition-colors"
                >
                  <Phone className="w-5 h-5 mr-2" />
                  Emergency: +91 98765 43210
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactForm;
