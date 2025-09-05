import { hospitalInfo } from '@/lib/data';

const AboutHero = () => {
  return (
    <section className="relative min-h-[60vh] flex items-center justify-center bg-gradient-green text-white">
      <div className="absolute inset-0 bg-black/20"></div>
      <div className="relative z-10 container-custom text-center">
        <h1 className="heading-1 mb-6">About Sreenethra Eye Care</h1>
        <p className="text-xl max-w-4xl mx-auto leading-relaxed">
          {hospitalInfo.description}
        </p>
      </div>
    </section>
  );
};

export default AboutHero;
