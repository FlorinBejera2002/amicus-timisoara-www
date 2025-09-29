import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { useTranslation } from 'react-i18next';
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

export const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [currentLang, setCurrentLang] = useState('ro');
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const { t, i18n } = useTranslation();
  const location = useLocation();

  const toggleLanguage = () => {
    const newLang = currentLang === 'ro' ? 'en' : 'ro';
    setCurrentLang(newLang);
    i18n.changeLanguage(newLang);
  };

  const navItems: NavItem[] = [
    { path: '/', label: t('home'), type: 'single' },
    {
      label: 'Despre Noi',
      type: 'dropdown',
      items: [
        { path: '/about', label: t('about'), icon: 'ri-information-line' },
        { path: '/vision', label: t('vision'), icon: 'ri-eye-line' },
        { path: '/projects', label: t('projects'), icon: 'ri-folder-line' }
      ]
    },
    {
      label: 'Activități',
      type: 'dropdown',
      items: [
        { path: '/events', label: t('events'), icon: 'ri-calendar-line' },
        { path: '/prayer-wall', label: t('prayerWall'), icon: 'ri-heart-line' },
        { path: '/podcast', label: t('podcast'), icon: 'ri-mic-line' }
      ]
    },
    {
      label: 'Resurse',
      type: 'dropdown',
      items: [
        { path: '/book', label: t('book'), icon: 'ri-book-line' },
        { path: '/form', label: 'Înscrie-te', icon: 'ri-user-add-line' }
      ]
    },
    { path: '/contact', label: t('contact'), type: 'single' },
    { path: '/dashboard', label: t('dashboard'), type: 'single' }
  ];

  const isActive = (path: string) => location.pathname === path;
  
  const isDropdownActive = (items: DropdownItem[]) => {
    return items.some(item => location.pathname === item.path);
  };

  const handleDropdownToggle = (label: string) => {
    setActiveDropdown(activeDropdown === label ? null : label);
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-40 bg-white/95 backdrop-blur-sm border-b border-gray-200 shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-3">
            <img src={logo} alt="AMiCUS Logo" className="h-10 w-10" />
            <span className="font-bold text-xl text-gray-900">
              AMiCUS <span className="text-primary-red">Timișoara</span>
            </span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
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
            
            {/* Language Toggle */}
            <button
              onClick={toggleLanguage}
              className="flex items-center space-x-1 px-3 py-2 text-sm font-medium text-gray-700 hover:text-primary-red transition-colors duration-200 border border-gray-300 rounded-md hover:border-primary-red"
            >
              <span>{currentLang.toUpperCase()}</span>
              <i className="ri-global-line text-sm"></i>
            </button>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden flex items-center space-x-4">
            <button
              onClick={toggleLanguage}
              className="p-2 text-gray-700 hover:text-primary-red transition-colors duration-200"
            >
              <span className="text-sm font-medium">{currentLang.toUpperCase()}</span>
            </button>
            
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="p-2 text-gray-700 hover:text-primary-red transition-colors duration-200"
            >
              <i className={`ri-${isOpen ? 'close' : 'menu'}-line text-xl`}></i>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.2 }}
            className="md:hidden bg-white border-t border-gray-200"
          >
            <div className="px-4 py-2 space-y-1">
              {navItems.map((item, index) => (
                <div key={index}>
                  {item.type === 'single' ? (
                    <Link
                      to={item.path!}
                      onClick={() => setIsOpen(false)}
                      className={`block px-3 py-2 text-base font-medium rounded-md transition-colors duration-200 ${
                        isActive(item.path!)
                          ? 'text-primary-red bg-red-50'
                          : 'text-gray-700 hover:text-primary-red hover:bg-gray-50'
                      }`}
                    >
                      {item.label}
                    </Link>
                  ) : (
                    <div>
                      <button
                        onClick={() => handleDropdownToggle(item.label)}
                        className={`w-full flex items-center justify-between px-3 py-2 text-base font-medium rounded-md transition-colors duration-200 ${
                          isDropdownActive(item.items!)
                            ? 'text-primary-red bg-red-50'
                            : 'text-gray-700 hover:text-primary-red hover:bg-gray-50'
                        }`}
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
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navigation;
