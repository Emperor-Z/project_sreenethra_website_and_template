import { Eye, Heart, Shield, Users } from 'lucide-react';

const AboutMission = () => {
  const values = [
    {
      icon: Eye,
      title: 'Vision Excellence',
      description: 'Delivering world-class eye care with cutting-edge technology and internationally accepted standards of treatment.'
    },
    {
      icon: Heart,
      title: 'Compassionate Care',
      description: 'Providing patient-centered care with empathy, understanding, and personalized attention to each individual.'
    },
    {
      icon: Shield,
      title: 'Quality & Safety',
      description: 'Maintaining the highest standards of medical excellence, safety protocols, and infection control measures.'
    },
    {
      icon: Users,
      title: 'Community Service',
      description: 'Dedicated to serving the community through charitable initiatives and accessible healthcare for all.'
    }
  ];

  return (
    <section className="section-padding bg-white">
      <div className="container-custom">
        <div className="text-center mb-16">
          <h2 className="heading-2 mb-4">Our Mission & Values</h2>
          <p className="text-body max-w-3xl mx-auto">
            At Sreenethra Eye Care, we are committed to restoring and preserving vision through 
            excellence in medical care, advanced technology, and compassionate service.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {values.map((value, index) => {
            const Icon = value.icon;
            return (
              <div key={index} className="text-center group">
                <div className="w-20 h-20 bg-gradient-green rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform">
                  <Icon className="w-10 h-10 text-white" />
                </div>
                <h3 className="heading-4 mb-4">{value.title}</h3>
                <p className="text-small">{value.description}</p>
              </div>
            );
          })}
        </div>

        {/* Mission Statement */}
        <div className="mt-16 bg-gray-50 rounded-2xl p-8">
          <div className="max-w-4xl mx-auto text-center">
            <h3 className="heading-3 mb-6">Our Mission</h3>
            <p className="text-lg leading-relaxed text-[var(--text-light)]">
              To provide comprehensive, affordable, and compassionate eye care services using 
              state-of-the-art technology and internationally accepted standards of treatment. 
              We are dedicated to restoring vision to its fullest potential and improving the 
              quality of life for our patients and their families.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutMission;
