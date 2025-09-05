import { departments } from '@/lib/data';

const DepartmentsHero = () => {
  return (
    <section className="relative min-h-[50vh] flex items-center justify-center bg-gradient-green text-white">
      <div className="absolute inset-0 bg-black/20"></div>
      <div className="relative z-10 container-custom text-center">
        <h1 className="heading-1 mb-6">Our Departments</h1>
        <p className="text-xl max-w-4xl mx-auto leading-relaxed mb-8">
          Comprehensive eye care services across {departments.length} specialized departments, 
          each equipped with advanced technology and expert professionals.
        </p>
        <div className="flex flex-wrap justify-center gap-4">
          {departments.slice(0, 4).map((dept, index) => (
            <div key={index} className="bg-white/10 backdrop-blur-sm rounded-full px-4 py-2">
              <span className="text-sm">{dept.name}</span>
            </div>
          ))}
          <div className="bg-white/10 backdrop-blur-sm rounded-full px-4 py-2">
            <span className="text-sm">+{departments.length - 4} more</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default DepartmentsHero;
