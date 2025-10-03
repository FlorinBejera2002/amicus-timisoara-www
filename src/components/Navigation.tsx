import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import logo from '@/assets/Logo-Amicus.png';

interface DropdownItem {
  path: string;
  label: string;
  icon: string;
}

interface NavItem {
  path?: string;
  label: string;
  type: 'single' | 'dropdown';
  items?: DropdownItem[];
}

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const location = useLocation();

  const navItems: NavItem[] = [
    { path: '/', label: 'Acasă', type: 'single' },
    { path: '/about', label: 'Despre Noi', type: 'single' },
    {
      label: 'Proiecte',
      type: 'dropdown',
      items: [
        { path: '/projects', label: 'Toate Proiectele', icon: 'ri-folder-line' },
        { path: '/prayer-wall', label: 'Peretele Rugăciunii', icon: 'ri-hands-pray-line' },
        { path: '/book', label: 'Carte', icon: 'ri-book-line' }
      ]
    },
    { path: '/events', label: 'Evenimente', type: 'single' },
    { path: '/contact', label: 'Contact', type: 'single' }
  ];

  const isActive = (path: string) => location.pathname === path;
  
  const isDropdownActive = (items: DropdownItem[]) => {
    return items.some(item => location.pathname === item.path);
  };

  // Mobile menu component
  const MobileMenu = () => (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          transition={{ duration: 0.2 }}
          className="md:hidden absolute top-16 left-0 right-0 bg-white shadow-lg z-30"
        >
          <div className="px-2 pt-2 pb-3 space-y-1">
            {navItems.map((item, index) => (
              <div key={index}>
                {item.type === 'single' ? (
                  <Link
                    to={item.path!}
                    className={`block px-3 py-2 rounded-md text-base font-medium ${
                      isActive(item.path!)
                        ? 'bg-red-50 text-primary-red'
                        : 'text-gray-700 hover:bg-gray-50 hover:text-primary-red'
                    }`}
                    onClick={() => setIsOpen(false)}
                  >
                    {item.label}
                  </Link>
                ) : (
                  <div>
                    <button
                      onClick={() => setActiveDropdown(
                        activeDropdown === item.label ? null : item.label
                      )}
                      className="flex items-center justify-between w-full px-3 py-2 text-base font-medium text-gray-700 hover:bg-gray-50 hover:text-primary-red rounded-md"
                    >
                      <span>{item.label}</span>
                      <i className={`ri-arrow-down-s-line transition-transform duration-200 ${
                        activeDropdown === item.label ? 'rotate-180' : ''
                      }`}></i>
                    </button>
                    
                    <AnimatePresence>
                      {activeDropdown === item.label && (
                        <motion.div
                          initial={{ opacity: 0, height: 0 }}
                          animate={{ opacity: 1, height: 'auto' }}
                          exit={{ opacity: 0, height: 0 }}
                          transition={{ duration: 0.2 }}
                          className="ml-4 mt-1 space-y-1"
                        >
                          {item.items!.map((subItem, subIndex) => (
                            <Link
                              key={subIndex}
                              to={subItem.path}
                              onClick={() => {
                                setIsOpen(false);
                                setActiveDropdown(null);
                              }}
                              className={`flex items-center space-x-3 px-3 py-2 text-sm rounded-md transition-colors duration-200 ${
                                isActive(subItem.path)
                                  ? 'text-primary-red bg-red-50'
                                  : 'text-gray-600 hover:text-primary-red hover:bg-gray-50'
                              }`}
                            >
                              <i className={`${subItem.icon} text-base`}></i>
                              <span>{subItem.label}</span>
                            </Link>
                          ))}
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                )}
              </div>
            ))}
            <Link
              to="/form"
              className="block w-full text-center bg-red-600 hover:bg-red-700 text-white px-4 py-2 rounded-md text-base font-medium mt-2"
              onClick={() => setIsOpen(false)}
            >
              Înscriere
            </Link>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );

  return (
    <nav className="fixed top-0 left-0 right-0 z-40 bg-white/95 backdrop-blur-sm border-b border-gray-200 shadow-sm">
      <div className="max-w-7xl mx-auto px-3 sm:px-4 md:px-6 lg:px-8">
        <div className="flex justify-between items-center h-14 sm:h-16">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-2 sm:space-x-3">
            <img src={logo} alt="AMiCUS Logo" className="h-8 w-8 sm:h-10 sm:w-10" />
            <span className="font-bold text-lg sm:text-xl text-gray-900">
              <span className="hidden xs:inline">AMiCUS </span>
              <span className="text-primary-red">
                <span className="xs:hidden">AMiCUS </span>
                <span className="hidden xs:inline">Timișoara</span>
                <span className="xs:hidden">TM</span>
              </span>
            </span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-6">
            {navItems.map((item, index) => (
              <div key={index} className="relative">
                {item.type === 'single' ? (
                  <Link
                    to={item.path!}
                    className={`relative px-3 py-2 text-sm font-medium transition-colors duration-200 ${
                      isActive(item.path!)
                        ? 'text-primary-red'
                        : 'text-gray-700 hover:text-primary-red'
                    }`}
                  >
                    {item.label}
                    {isActive(item.path!) && (
                      <motion.div
                        layoutId="activeTab"
                        className="absolute bottom-0 left-0 right-0 h-0.5 bg-primary-red"
                        initial={false}
                        transition={{ type: "spring", stiffness: 500, damping: 30 }}
                      />
                    )}
                  </Link>
                ) : (
                  <div
                    className="relative"
                    onMouseEnter={() => setActiveDropdown(item.label)}
                    onMouseLeave={() => setActiveDropdown(null)}
                  >
                    <button
                      className={`flex items-center space-x-1 px-3 py-2 text-sm font-medium transition-colors duration-200 ${
                        isDropdownActive(item.items!)
                          ? 'text-primary-red'
                          : 'text-gray-700 hover:text-primary-red'
                      }`}
                    >
                      <span>{item.label}</span>
                      <i className={`ri-arrow-down-s-line transition-transform duration-200 ${
                        activeDropdown === item.label ? 'rotate-180' : ''
                      }`}></i>
                    </button>
                    
                    {/* Dropdown Menu */}
                    <AnimatePresence>
                      {activeDropdown === item.label && (
                        <motion.div
                          initial={{ opacity: 0, y: 10, scale: 0.95 }}
                          animate={{ opacity: 1, y: 0, scale: 1 }}
                          exit={{ opacity: 0, y: 10, scale: 0.95 }}
                          transition={{ duration: 0.2 }}
                          className="absolute top-full left-0 mt-2 w-56 bg-white rounded-lg shadow-xl border border-gray-200 py-2 z-50"
                        >
                          {item.items!.map((subItem, subIndex) => (
                            <Link
                              key={subIndex}
                              to={subItem.path}
                              className={`flex items-center space-x-3 px-4 py-3 text-sm transition-colors duration-200 ${
                                isActive(subItem.path)
                                  ? 'text-primary-red bg-red-50'
                                  : 'text-gray-700 hover:text-primary-red hover:bg-gray-50'
                              }`}
                              onClick={() => setActiveDropdown(null)}
                            >
                              <i className={`${subItem.icon} text-lg`}></i>
                              <span>{subItem.label}</span>
                            </Link>
                          ))}
                        </motion.div>
                      )}
                    </AnimatePresence>
                    
                    {isDropdownActive(item.items!) && (
                      <motion.div
                        layoutId="activeTab"
                        className="absolute bottom-0 left-0 right-0 h-0.5 bg-primary-red"
                        initial={false}
                        transition={{ type: "spring", stiffness: 500, damping: 30 }}
                      />
                    )}
                  </div>
                )}
              </div>
            ))}
            
            {/* Inscriere Button */}
            <Link
              to="/form"
              className="bg-red-600 hover:bg-red-700 text-white px-6 py-2 rounded-md text-sm font-medium transition-colors duration-200 ml-2"
            >
              Înscriere
            </Link>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="p-2 text-gray-700 hover:text-primary-red transition-colors duration-200"
              aria-label="Toggle menu"
            >
              {isOpen ? (
                <i className="ri-close-line text-2xl"></i>
              ) : (
                <i className="ri-menu-line text-2xl"></i>
              )}
            </button>
          </div>
        </div>
        <MobileMenu />
      </div>
    </nav>
  );
};

export { Navigation };
