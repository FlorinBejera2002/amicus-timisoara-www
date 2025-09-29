import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import logo from '@/assets/Logo-Amicus.png';

export const Footer = () => {
  const { t } = useTranslation();

  const quickLinks = [
    { path: '/', label: 'Home' },
    { path: '/about', label: 'About Us' },
    { path: '/projects', label: 'Projects' },
    { path: '/events', label: 'Events' },
    { path: '/vision', label: 'Vision' }
  ];

  const resources = [
    { path: '/book', label: 'Book AMiCUS' },
    { path: '/podcast', label: 'Podcast' },
    { path: '/prayer-wall', label: 'Prayer Wall' },
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
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Logo and Description */}
          <div className="lg:col-span-1">
            <div className="flex items-center space-x-3 mb-4">
              <img src={logo} alt="AMiCUS Logo" className="h-10 w-10" />
              <span className="font-bold text-xl">
                AMiCUS <span className="text-primary-red">Timișoara</span>
              </span>
            </div>
            <p className="text-gray-300 mb-4">
              Asociația Medicilor și Studenților Creștini din Timișoara. 
              Construim împreună o comunitate de tineri creștini dedicați dezvoltării spirituale și profesionale.
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
          <div>
            <h3 className="font-semibold text-lg mb-4">Quick Links</h3>
            <ul className="space-y-2">
              {quickLinks.map((link, index) => (
                <li key={index}>
                  <Link
                    to={link.path}
                    className="text-gray-300 hover:text-white transition-colors duration-200"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Resources */}
          <div>
            <h3 className="font-semibold text-lg mb-4">Resources</h3>
            <ul className="space-y-2">
              {resources.map((resource, index) => (
                <li key={index}>
                  <Link
                    to={resource.path}
                    className="text-gray-300 hover:text-white transition-colors duration-200"
                  >
                    {resource.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="font-semibold text-lg mb-4">Contact Info</h3>
            <div className="space-y-3 text-gray-300">
              <div className="flex items-start space-x-3">
                <i className="ri-map-pin-line text-primary-red mt-1"></i>
                <div>
                  <p>Str. Piața Alexandru Mocioni 7</p>
                  <p>Timișoara, România</p>
                </div>
              </div>
              
              <div className="flex items-center space-x-3">
                <i className="ri-time-line text-primary-red"></i>
                <p>Joi ora 20:00</p>
              </div>
              
              <div className="flex items-center space-x-3">
                <i className="ri-mail-line text-primary-red"></i>
                <a 
                  href="mailto:contact@amicus-timisoara.ro"
                  className="hover:text-white transition-colors duration-200"
                >
                  contact@amicus-timisoara.ro
                </a>
              </div>
              
              <div className="flex items-center space-x-3">
                <i className="ri-phone-line text-primary-red"></i>
                <a 
                  href="tel:+40123456789"
                  className="hover:text-white transition-colors duration-200"
                >
                  +40 123 456 789
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Newsletter Signup */}
        <div className="border-t border-gray-800 mt-8 pt-8">
          <div className="max-w-md mx-auto text-center">
            <h3 className="font-semibold text-lg mb-2">Stay Connected</h3>
            <p className="text-gray-300 mb-4">
              Subscribe to our newsletter for updates on events and activities
            </p>
            <div className="flex space-x-2">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-4 py-2 bg-gray-800 border border-gray-700 rounded-lg focus:ring-2 focus:ring-primary-red focus:border-transparent text-white placeholder-gray-400"
              />
              <button className="bg-primary-red text-white px-6 py-2 rounded-lg font-semibold hover:bg-red-700 transition-colors duration-200">
                Subscribe
              </button>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-800 mt-8 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-400 text-sm">
            © {new Date().getFullYear()} AMiCUS Timișoara. All rights reserved.
          </p>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <Link to="/privacy" className="text-gray-400 hover:text-white text-sm transition-colors duration-200">
              Privacy Policy
            </Link>
            <Link to="/terms" className="text-gray-400 hover:text-white text-sm transition-colors duration-200">
              Terms of Service
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
