import { Link } from 'react-router-dom';
import logo from '@/assets/Logo-Amicus.png';

export const Footer = () => {

  const quickLinks = [
    { path: '/', label: 'Home' },
    { path: '/about', label: 'About Us' },
    { path: '/projects', label: 'Projects' },
    { path: '/events', label: 'Events' },
    { path: '/vision', label: 'Vision' }
  ];

  const resources = [
    // { path: '/book', label: 'Book AMiCUS' }, // TODO: Pagina comentată - doar secțiunea din home rămâne activă
    { path: '/podcast', label: 'Podcast' },
    // { path: '/prayer-wall', label: 'Prayer Wall' }, // TODO: Funcționalitate de adăugat mai târziu
    { path: '/form', label: 'Join Us' },
    { path: '/contact', label: 'Contact' }
  ];

  const socialLinks = [
    { icon: 'ri-facebook-fill', url: 'https://facebook.com/amicus.timisoara', label: 'Facebook' },
    { icon: 'ri-instagram-line', url: 'https://instagram.com/amicii.timisoara', label: 'Instagram' },
    { icon: 'ri-youtube-fill', url: 'https://youtube.com/@amicustimisoara', label: 'YouTube' },
    { icon: 'ri-mail-line', url: 'mailto:contact@amicus-timisoara.ro', label: 'Email' }
  ];

  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-3 sm:px-4 md:px-6 lg:px-8 py-8 sm:py-10 md:py-12">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
          {/* Logo and Description */}
          <div className="sm:col-span-2 lg:col-span-1">
            <div className="flex items-center space-x-2 sm:space-x-3 mb-3 sm:mb-4">
              <img src={logo} alt="AMiCUS Logo" className="h-8 w-8 sm:h-10 sm:w-10" />
              <span className="font-bold text-lg sm:text-xl">
                AMiCUS <span className="text-primary-red">Timișoara</span>
              </span>
            </div>
            <p className="text-gray-300 mb-4 text-sm sm:text-base leading-relaxed">
            Hai să fim prieteni!
            </p>
            <div className="flex space-x-4">
              {socialLinks.map((social, index) => (
                <a
                  key={index}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-400 hover:text-primary-red transition-colors duration-200"
                  aria-label={social.label}
                >
                  <i className={`${social.icon} text-xl`}></i>
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div className="mt-6 sm:mt-0">
            <h3 className="font-semibold text-base sm:text-lg mb-3 sm:mb-4">Quick Links</h3>
            <ul className="space-y-1.5 sm:space-y-2">
              {quickLinks.map((link, index) => (
                <li key={index}>
                  <Link
                    to={link.path}
                    className="text-gray-300 hover:text-white transition-colors duration-200 text-sm sm:text-base"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Resources */}
          <div className="mt-6 sm:mt-0">
            <h3 className="font-semibold text-base sm:text-lg mb-3 sm:mb-4">Resources</h3>
            <ul className="space-y-1.5 sm:space-y-2">
              {resources.map((resource, index) => (
                <li key={index}>
                  <Link
                    to={resource.path}
                    className="text-gray-300 hover:text-white transition-colors duration-200 text-sm sm:text-base"
                  >
                    {resource.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div className="mt-6 sm:mt-0 sm:col-span-2 lg:col-span-1">
            <h3 className="font-semibold text-base sm:text-lg mb-3 sm:mb-4">Contact Info</h3>
            <div className="space-y-2.5 sm:space-y-3 text-gray-300 text-sm sm:text-base">
              <div className="flex items-start space-x-2 sm:space-x-3">
                <i className="ri-map-pin-line text-primary-red mt-1 text-base sm:text-lg"></i>
                <div>
                  <p>Str. Piața Alexandru Mocioni 7</p>
                  <p>Timișoara, România</p>
                </div>
              </div>
          
              <div className="flex items-center space-x-2 sm:space-x-3">
                <i className="ri-mail-line text-primary-red text-base sm:text-lg"></i>
                <a 
                  href="https://mail.google.com/mail/?view=cm&fs=1&to=aamicustimisoara@gmail.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-white transition-colors duration-200 break-all sm:break-normal"
                >
                 aamicustimisoara@gmail.com
                </a>
              </div>
              
              <div className="flex flex-col space-y-2">
                <div className="flex items-center space-x-2 sm:space-x-3">
                  <i className="ri-phone-line text-primary-red text-base sm:text-lg"></i>
                  <div className="flex flex-col">
                    <a 
                      href="tel:0758948440"
                      className="hover:text-white transition-colors duration-200 text-sm"
                    >
                      Președinte: 0758948440
                    </a>
                    <a 
                      href="tel:+40768096881"
                      className="hover:text-white transition-colors duration-200 text-sm"
                    >
                      Capelan: +40 768 096 881
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>


        {/* Bottom Bar */}
        <div className="border-t border-gray-800 mt-6 sm:mt-8 pt-6 sm:pt-8 flex flex-col sm:flex-row justify-between items-center space-y-3 sm:space-y-0">
          <p className="text-gray-400 text-xs sm:text-sm text-center sm:text-left">
            © {new Date().getFullYear()} AMiCUS Timișoara. All rights reserved.
          </p>
          <div className="flex space-x-4 sm:space-x-6">
            <Link to="/privacy" className="text-gray-400 hover:text-white text-xs sm:text-sm transition-colors duration-200">
              Privacy Policy
            </Link>
            <Link to="/terms" className="text-gray-400 hover:text-white text-xs sm:text-sm transition-colors duration-200">
              Terms of Service
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

