import  { useState } from 'react';
import { Menu, X, ChevronDown, Search } from 'lucide-react';
import logo from "./../assets/logo.svg"
const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-white shadow-md w-full">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex items-center">
            <div className="flex items-center justify-center">
              <img 
                src={logo}
                alt="RegisterKaro" 
                className="h-10 w-auto"
              />
            </div>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <div className="relative group">
              <button className="flex items-center space-x-1 text-gray-700 hover:text-orange-500">
                <span>Our Services</span>
                <ChevronDown className="w-4 h-4" />
              </button>
            </div>
            <a href="#" className="text-gray-700 hover:text-orange-500">Blog</a>
            <a href="#" className="text-gray-700 hover:text-orange-500">Contact Us</a>
            <a href="#" className="text-gray-700 hover:text-orange-500">About us</a>
            <button className="text-gray-700 hover:text-orange-500">
              <Search className="w-5 h-5" />
            </button>
            <button className="bg-orange-500 text-white px-4 py-2 rounded-md hover:bg-orange-600 transition duration-200">
              Talk An Expert
            </button>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-gray-700 hover:text-orange-500 focus:outline-none"
            >
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>

        {/* Mobile menu */}
        {isOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1">
              <div className="block px-3 py-2 text-gray-700 hover:text-orange-500">
                <button className="flex items-center space-x-1">
                  <span>Our Services</span>
                  <ChevronDown className="w-4 h-4" />
                </button>
              </div>
              <a 
                href="#" 
                className="block px-3 py-2 text-gray-700 hover:text-orange-500"
              >
                Blog
              </a>
              <a 
                href="#" 
                className="block px-3 py-2 text-gray-700 hover:text-orange-500"
              >
                Contact Us
              </a>
              <a 
                href="#" 
                className="block px-3 py-2 text-gray-700 hover:text-orange-500"
              >
                About us
              </a>
              <div className="flex items-center justify-between px-3 py-2">
                <button className="text-gray-700 hover:text-orange-500">
                  <Search className="w-5 h-5" />
                </button>
                <button className="bg-orange-500 text-white px-4 py-2 rounded-md hover:bg-orange-600 transition duration-200">
                  Talk An Expert
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;