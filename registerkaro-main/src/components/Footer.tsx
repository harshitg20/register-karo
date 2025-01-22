import { useState } from 'react';
import { Facebook, Twitter, Apple, Instagram, ArrowUp } from 'lucide-react';
import zoom from './../assets/zoom.png';
import slack from './../assets/slack.png';
import webflow from './../assets/spotify.png';
import dropbox from './../assets/webflow.png';
import spotify from './../assets/dropbox.png';

const Footer = () => {
  const [email, setEmail] = useState('');

  // const handleSubmit = (e) => {
  //   e.preventDefault();
  //   // Handle email submission
  // };

  const features = [
    "Instant results",
    "User-friendly interface",
    "Personalized customization"
  ];

  const footerLinks = {
    'START A BUSINESS': ['Features', 'Solutions', 'Integrations', 'Enterprise', 'Solutions'],
    'GOVERNMENT REGISTRATION': ['Partners', 'Community', 'Developers', 'App', 'Blog'],
    'COMPLIANCE & TAX': ['Channels', 'Scale', 'Watch the Demo', 'Our Competition'],
    'BIS & CDSCO': ['About Us', 'News', 'Leadership', 'Media Kit']
  };

  return (
    <footer className="w-full">
      {/* Newsletter Section */}
      <div className="bg-gradient-to-r from-orange-400 to-blue-900 text-white py-16">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-2xl mx-auto space-y-6">
            <p className="text-sm uppercase tracking-wider">1% OF THE INDUSTRY</p>
            <h2 className="text-3xl md:text-4xl font-bold">
              Welcome to your new digital reality. Now.
            </h2>

            {/* Email Form */}
            <form  className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
              <input
                type="email"
                placeholder="Enter Your Email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="flex-1 px-4 py-2 rounded-md text-gray-900 focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
              <button
                type="submit"
                className="bg-orange-500 text-white px-6 py-2 rounded-md hover:bg-orange-600 transition-colors"
              >
                Submit
              </button>
            </form>

            {/* Features */}
            <div className="flex flex-wrap justify-center gap-8 text-sm">
              {features.map((feature, index) => (
                <div key={index} className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-white rounded-full"></div>
                  {feature}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Partners Section */}
      <div className="border-y border-gray-200 py-8">
        <div className="container mx-auto px-4">
          <div className="flex flex-wrap justify-center items-center gap-8 md:gap-12">
            {[{name:'coinbase', value:zoom}, {name:'spotify', value:spotify}, {name:'slack', value:slack}, {name:'dropbox', value:dropbox}, {name:'webflow', value:webflow}, {name:'zoom', value:zoom}].map(({name, value}, index) => (
              <img
                key={index}
                src={value}
                alt={name}
                className="h-16 object-contain transition-all"
              />
            ))}
          </div>
        </div>
      </div>

      {/* Main Footer */}
      <div className="bg-blue-900 text-white py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8">
            {/* Company Info */}
            <div className="lg:col-span-1">
              <p className="text-sm text-gray-300 mb-6">
                Design outstanding interfaces with advanced Figma features in a matter of minutes.
              </p>
              <div className="flex gap-4">
                <a href="#" className="text-gray-300 hover:text-white">
                  <Facebook size={20} />
                </a>
                <a href="#" className="text-gray-300 hover:text-white">
                  <Twitter size={20} />
                </a>
                <a href="#" className="text-gray-300 hover:text-white">
                  <Apple size={20} />
                </a>
                <a href="#" className="text-gray-300 hover:text-white">
                  <Instagram size={20} />
                </a>
              </div>
            </div>

            {/* Footer Links */}
            {Object.entries(footerLinks).map(([title, links]) => (
              <div key={title}>
                <h3 className="text-sm font-semibold mb-4 text-orange-400">{title}</h3>
                <ul className="space-y-2">
                  {links.map((link) => (
                    <li key={link}>
                      <a href="#" className="text-sm text-gray-300 hover:text-white">
                        {link}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          {/* Bottom Bar */}
          <div className="mt-16 pt-8 border-t border-blue-800 flex flex-col md:flex-row justify-center items-center">
  <div className="flex flex-col justify-center items-center ">
    <button 
      onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
      className="mb-2 bg-yellow-500 p-2 rounded-full hover:bg-blue-700 transition-colors"
    >
      <ArrowUp size={20} />
    </button>
    <p className="text-sm text-gray-300">
      © 2024 Registerkaro. All Rights Reserved.
    </p>
  </div>
</div>

        </div>
      </div>
    </footer>
  );
};

export default Footer;
