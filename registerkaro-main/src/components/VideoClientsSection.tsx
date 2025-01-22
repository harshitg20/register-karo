
import {  Lightbulb, Wand2 } from "lucide-react";
import youtube from "./../assets/youtube.png";
import p from "./../assets/p.png";
import f from "./../assets/f.png";
import d from "./../assets/d.png";

const logos = [
  { src: p, size: "w-12 h-12" },
  { src: f, size: "w-16 h-16" },
  { src: d, size: "w-14 h-14" },
  { src: p, size: "w-10 h-10" },
  { src: f, size: "w-12 h-12" },
  { src: d, size: "w-16 h-16" },
  { src: p, size: "w-10 h-10" },
  { src: f, size: "w-14 h-14" },
  { src: d, size: "w-12 h-12" },
  { src: p, size: "w-16 h-16" },
  { src: f, size: "w-20 h-20" },
  { src: d, size: "w-14 h-14" },
  { src: p, size: "w-12 h-12" },
  { src: f, size: "w-10 h-10" },
  { src: d, size: "w-14 h-14" },
];

const VideoClientsSection = () => {
  const features = [
    {
      icon: <Lightbulb className="w-8 h-8 text-yellow-400" />,
      title: "Explore Ideas Together",
      description:
        "Collaboratively engage your audience and generate actionable insights with creative strategies.",
    },
    {
      icon: <Wand2 className="w-8 h-8 text-orange-400" />,
      title: "Bring Those Ideas to Life",
      description:
        "Turn creative ideas into reality with innovative tools and streamlined processes.",
    },
  ];

  return (
    <div className="w-full">
      {/* Video Introduction Section */}
      <section className="bg-blue-900 text-white py-16">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-8 items-center">
            {/* Left Content */}
            <div className="space-y-8">
              <h2 className="text-3xl font-bold">Our Video Introductions</h2>
              <p className="text-blue-100 leading-relaxed">
                Explore engaging video introductions that showcase our
                commitment to innovation and excellence. Watch how we bring
                ideas to life with creativity and expertise.
              </p>

              {/* Features List */}
              <div className="space-y-6">
                {features.map((feature, index) => (
                  <div
                    key={index}
                    className="flex items-start gap-4"
                  >
                    <div className="p-2 bg-blue-800 rounded-lg">
                      {feature.icon}
                    </div>
                    <div>
                      <h3 className="font-semibold text-lg mb-2">
                        {feature.title}
                      </h3>
                      <p className="text-blue-100 text-sm leading-relaxed">
                        {feature.description}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Right Video Section */}
            <div className="relative">
              <img
                src={youtube}
                alt="Video thumbnail"
                className="w-full rounded-lg shadow-lg"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Clients Section */}
      <section className="py-16 px-4 bg-gray-50">
        <div className="container mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold">Our Happy Clients</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Partner with us to cultivate meaningful client relationships.
              Experience cutting-edge customer service and innovative
              solutions.
            </p>
          </div>

          {/* Clients Grid */}
          <div className="grid grid-cols-3 md:grid-cols-5 lg:grid-cols-7 gap-8 items-center justify-items-center">
            {logos.map((logo, index) => (
              <img
                key={index}
                src={logo.src}
                alt={`Client logo ${index + 1}`}
                className={`${logo.size} object-contain transition-all duration-300 hover:scale-105`}
              />
            ))}
          </div>

          {/* Show More Button */}
          <div className="text-center">
            <button className="text-blue-600 hover:text-blue-800 inline-flex items-center gap-2">
              Show more
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
        </div>
      </section>
    </div>
  );
};

export default VideoClientsSection;
