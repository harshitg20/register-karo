
import {
  ShieldCheck,
  CheckCircle,
  SmilePlus,
  Users,
} from "lucide-react";
import Team from "./../assets/team.png";

const AboutFeatures = () => {
  const features = [
    {
      icon: <ShieldCheck className="w-6 h-6 text-orange-500" />,
      title: "Confidential & Safe",
      description: "All your private information is safe with us.",
      bgColor: "bg-red-50",
    },
    {
      icon: <CheckCircle className="w-6 h-6 text-green-500" />,
      title: "No Hidden Fee",
      description:
        "Everything is upfront with no hidden charges or conditions.",
      bgColor: "bg-green-50",
    },
    {
      icon: <SmilePlus className="w-6 h-6 text-blue-500" />,
      title: "Guaranteed Satisfaction",
      description:
        "We ensure that you will be 100% satisfied with our services.",
      bgColor: "bg-blue-50",
    },
    {
      icon: <Users className="w-6 h-6 text-orange-500" />,
      title: "Expert CA/CS Assistance",
      description: "Get prompt support from our in-house professionals.",
      bgColor: "bg-pink-50",
    },
  ];

  return (
    <div className="w-full">
      {/* About Section */}
      <section className="py-16 px-4 bg-white">
        <div className="container mx-auto">
          <div className="text-sm text-gray-500 uppercase tracking-wide mb-2">
            Welcome to RegisterKaro.in
          </div>

          <div className="grid md:grid-cols-2 gap-8 items-center">
            {/* Left Text Content */}
            <div className="space-y-6">
              <div className="flex items-center gap-2">
                <h2 className="text-3xl font-bold">About</h2>
                <span className="text-3xl font-bold text-orange-500">
                  Register Karo
                </span>
                <CheckCircle className="w-6 h-6 text-green-500" />
              </div>

              <p className="text-gray-600 leading-relaxed">
                We have been using Integegecis as our DevOps vendor for our
                field service applications over the last couple of years, and
                we're extremely pleased with their performance, ability to
                execute, and willingness to adapt to our ever-changing
                environment. Perry is an outstanding leader who is fanatical
                about customer satisfaction. His solid team consistently exceeds
                expectations.
              </p>

              <p className="text-gray-600 leading-relaxed">
                We strongly recommend their services to any organization
                seeking reliable, consistent, and predictable outcomes.
              </p>

              <button className="bg-blue-900 text-white px-6 py-2 rounded-md hover:bg-blue-800 transition-colors flex items-center gap-2">
                Learn More
                <svg
                  className="w-4 h-4"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M9 5l7 7-7 7"
                  />
                </svg>
              </button>
            </div>

            {/* Right Image Content */}
            <div className="relative">
              <img
                src={Team}
                alt="Team"
                className="rounded-lg shadow-lg w-full"
              />
              <div className="absolute inset-0 bg-gradient-to-r from-orange-500/10 to-transparent rounded-lg" />
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="py-16 px-4 bg-gray-50">
        <div className="container mx-auto">
          <div className="text-sm text-gray-500 uppercase tracking-wide mb-2">
            Why RegisterKaro.in
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {/* Header Section */}
            <div className="md:col-span-2 lg:col-span-2 mb-8 md:mb-0">
              <h2 className="text-3xl font-bold">Why Choose Register Karo</h2>
              <p className="text-gray-600 mt-4">
                Consistency in services and results builds trust. This trust
                allows us to better serve businesses and help them grow.
              </p>
            </div>

            {/* Features Section */}
            {features.map((feature, index) => (
              <div
                key={index}
                className={`${feature.bgColor} p-6 rounded-lg hover:shadow-md transition-shadow ${
                  index === 2 ? "lg:col-start-2" : ""
                }`}
              >
                <div className="flex flex-col items-center text-center space-y-4">
                  {feature.icon}
                  <h3 className="text-lg font-semibold">{feature.title}</h3>
                  <p className="text-sm text-gray-600 leading-relaxed">
                    {feature.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default AboutFeatures;
