import { Star, Search, Target, Play } from 'lucide-react';
import oracle from './../assets/oracle.svg';
import c2 from './../assets/Group.svg';
import c3 from './../assets/Group (1).svg';
import c4 from './../assets/Group (2).svg';
import c5 from './../assets/Group (3).svg';
import bg from './../assets/bg.svg';

const HeroSection = () => {
  const stats = [
    { label: 'Customer Rating', value: '4.54' },
    { label: 'Clients', value: '20,000+' },
    { label: 'Financial liability', value: '99.8%' },
  ];

  const services = [
    'Annual Compliance',
    'Payroll Services',
    'Company Formation',
  ];

  return (
    <div className="min-h-screen  flex flex-col">
      {/* Main Hero Section */}
      <div
        className="w-full flex-1 bg-cover bg-center px-8 py-12 relative"
        style={{ backgroundImage: `url(${bg})` }}
      >
        {/* Google Rating */}
        <div className="flex items-center gap-2 mb-6">
          <span className="text-sm text-gray-600">Google Rating</span>
          <div className="flex">
            {[...Array(5)].map((_, i) => (
              <Star key={i} className="w-4 h-4 text-yellow-400 fill-current" />
            ))}
          </div>
        </div>

        {/* Main Content Grid */}
        <div className="grid md:grid-cols-2 gap-8 items-center">
          {/* Left Column - Text Content */}
          <div className="space-y-8">
            <div className="space-y-4">
              <h1 className="text-4xl md:text-5xl font-bold leading-tight">
                Your trusted partner
                <br />
                <span className="text-3xl md:text-4xl">
                  for compliance business needs
                </span>
              </h1>
              <p className="text-gray-600 max-w-lg">
                An online business compliance platform that helps entrepreneurs
                and other individuals with various registrations, tax filings,
                and other legal matters.
              </p>
            </div>

            {/* Stats */}
            <div className="flex flex-wrap gap-8">
              {stats.map((stat, index) => (
                <div key={index} className="flex items-center gap-2">
                  {index === 0 && <Star className="w-5 h-5 text-blue-600" />}
                  {index === 1 && <Search className="w-5 h-5 text-blue-600" />}
                  {index === 2 && <Target className="w-5 h-5 text-blue-600" />}
                  <div>
                    <div className="font-bold text-xl">{stat.value}</div>
                    <div className="text-sm text-gray-600">{stat.label}</div>
                  </div>
                </div>
              ))}
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-wrap gap-4">
              <button className="bg-blue-900 text-white px-6 py-3 rounded-lg hover:bg-blue-800 transition duration-200">
                Talk An Expert
              </button>
              <button className="flex items-center gap-2 px-4 py-2 rounded-lg transition-colors">
                <div className="bg-red-500 rounded-full p-1">
                  <Play className="w-3 h-3 text-white" />
                </div>
                <span className="text-gray-800 font-medium">
                  See how it works
                </span>
              </button>
            </div>
          </div>

          {/* Right Column - Illustration & Services */}
          <div className="absolute w-60 hidden md:block right-0 top-4 space-y-2">
            {services.map((service, index) => (
              <div
                key={index}
                className="bg-white p-3 rounded-l-lg shadow-lg text-sm w-full text-center"
              >
                {service}
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Partners Section */}
      <div className="bg-white pt-12 flex-1 border-t">
        <div className="container mx-auto px-4">
          <h2 className="text-center text-gray-600 mb-6">
            Trusted By Over 100+ Startups and freelance business
          </h2>
          <div className="flex flex-wrap justify-center items-center gap-8 md:gap-12">
            {[
              { name: 'ORACLE', value: oracle },
              { name: 'MORPHEUS', value: c2 },
              { name: 'SAMSUNG', value: c3 },
              { name: 'MONDAY', value: c4 },
              { name: 'SEGMENT', value: c5 },
            ].map(({ name, value }, index) => (
              <div key={index} className="transition-all">
                <div className="h-8 flex items-center">
                  <img
                    src={value}
                    alt={name}
                    className="h-full object-contain"
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
