import { 
    Mail,
    Phone,
    Instagram,
    Twitter,
    Facebook,
    Globe
  } from 'lucide-react';

function TopNav() {
  return (
    <nav className="w-full bg-blue-900 text-white shadow-lg">
      <div className="container mx-auto px-4 py-3">
        <div className="flex flex-col md:flex-row md:justify-end md:items-center space-y-4 md:space-y-0">
          {/* Left side - Contact Info */}
          <div className="flex flex-col md:flex-row items-center md:items-start space-y-2 md:space-y-0 md:space-x-6">
            <a 
              href="mailto:www.registertaxis.in" 
              className="flex items-center space-x-2 hover:text-blue-200 focus:text-blue-200 transition-colors duration-200"
            >
              <Mail className="w-4 h-4" />
              <span className="text-sm">www.registertaxis.in</span>
            </a>
            <a 
              href="tel:+919644784863" 
              className="flex items-center space-x-2 hover:text-blue-200 focus:text-blue-200 transition-colors duration-200"
            >
              <Phone className="w-4 h-4" />
              <span className="text-sm">+91 9644784863</span>
            </a>
          </div>

          {/* Right side - Social Icons */}
          <div className="flex justify-center ml-4 space-x-6">
            <a href="#" className="text-white hover:text-blue-200 focus:text-blue-200 transition-colors duration-200">
              <Instagram className="w-5 h-5" />
              <span className="sr-only">Instagram</span>
            </a>
            <a href="#" className="text-white hover:text-blue-200 focus:text-blue-200 transition-colors duration-200">
              <Twitter className="w-5 h-5" />
              <span className="sr-only">Twitter</span>
            </a>
            <a href="#" className="text-white hover:text-blue-200 focus:text-blue-200 transition-colors duration-200">
              <Facebook className="w-5 h-5" />
              <span className="sr-only">Facebook</span>
            </a>
            <a href="#" className="text-white hover:text-blue-200 focus:text-blue-200 transition-colors duration-200">
              <Globe className="w-5 h-5" />
              <span className="sr-only">Website</span>
            </a>
          </div>
        </div>
      </div>
    </nav>
  )
}

export default TopNav