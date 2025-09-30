import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaCookie, FaTimes, FaCog } from 'react-icons/fa';

interface CookiePreferences {
  necessary: boolean;
  analytics: boolean;
  marketing: boolean;
}

const CookieBanner: React.FC = () => {
  const [showBanner, setShowBanner] = useState(false);
  const [showPreferences, setShowPreferences] = useState(false);
  const [preferences, setPreferences] = useState<CookiePreferences>({
    necessary: true, // Always true, cannot be disabled
    analytics: false,
    marketing: false
  });

  useEffect(() => {
    // Check if user has already made a choice
    const cookieConsent = localStorage.getItem('amicus-cookie-consent');
    if (!cookieConsent) {
      // Show banner after a short delay
      const timer = setTimeout(() => {
        setShowBanner(true);
      }, 2000);
      return () => clearTimeout(timer);
    }
  }, []);

  const handleAcceptAll = () => {
    const allPreferences = {
      necessary: true,
      analytics: true,
      marketing: true
    };
    
    localStorage.setItem('amicus-cookie-consent', JSON.stringify({
      preferences: allPreferences,
      timestamp: new Date().toISOString()
    }));
    
    // Enable analytics/marketing cookies here
    enableCookies(allPreferences);
    
    setShowBanner(false);
  };

  const handleAcceptSelected = () => {
    localStorage.setItem('amicus-cookie-consent', JSON.stringify({
      preferences,
      timestamp: new Date().toISOString()
    }));
    
    enableCookies(preferences);
    
    setShowBanner(false);
    setShowPreferences(false);
  };

  const handleRejectAll = () => {
    const minimalPreferences = {
      necessary: true,
      analytics: false,
      marketing: false
    };
    
    localStorage.setItem('amicus-cookie-consent', JSON.stringify({
      preferences: minimalPreferences,
      timestamp: new Date().toISOString()
    }));
    
    enableCookies(minimalPreferences);
    
    setShowBanner(false);
  };

  const enableCookies = (prefs: CookiePreferences) => {
    // Enable Google Analytics if analytics cookies are accepted
    if (prefs.analytics && typeof window !== 'undefined' && window.gtag) {
      window.gtag('consent', 'update', {
        analytics_storage: 'granted'
      });
    }
    
    // Enable marketing cookies if accepted
    if (prefs.marketing && typeof window !== 'undefined' && window.gtag) {
      window.gtag('consent', 'update', {
        ad_storage: 'granted'
      });
    }
  };

  const handlePreferenceChange = (type: keyof CookiePreferences) => {
    if (type === 'necessary') return; // Cannot disable necessary cookies
    
    setPreferences(prev => ({
      ...prev,
      [type]: !prev[type]
    }));
  };

  if (!showBanner) return null;

  return (
    <AnimatePresence>
      <motion.div
        initial={{ y: 100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        exit={{ y: 100, opacity: 0 }}
        transition={{ duration: 0.3 }}
        className="fixed bottom-0 left-0 right-0 z-50 bg-white shadow-2xl border-t border-gray-200"
      >
        <div className="max-w-7xl mx-auto p-4 md:p-6">
          {!showPreferences ? (
            // Main banner
            <div className="flex flex-col md:flex-row items-start md:items-center gap-4">
              <div className="flex items-start gap-3 flex-1">
                <FaCookie className="text-2xl text-primary-red mt-1 flex-shrink-0" />
                <div>
                  <h3 className="font-semibold text-gray-900 mb-2">Folosim cookie-uri pentru o experiență mai bună</h3>
                  <p className="text-sm text-gray-600 leading-relaxed">
                    Folosim cookie-uri pentru a îmbunătăți experiența ta pe site-ul nostru, pentru analiză și pentru a personaliza conținutul. 
                    Poți alege ce tipuri de cookie-uri să accepți.
                  </p>
                </div>
              </div>
              
              <div className="flex flex-col sm:flex-row gap-3 w-full md:w-auto">
                <button
                  onClick={() => setShowPreferences(true)}
                  className="flex items-center justify-center gap-2 px-4 py-2 text-sm font-medium text-gray-700 bg-gray-100 rounded-lg hover:bg-gray-200 transition-colors"
                >
                  <FaCog className="text-sm" />
                  Preferințe
                </button>
                
                <button
                  onClick={handleRejectAll}
                  className="px-4 py-2 text-sm font-medium text-gray-700 bg-gray-100 rounded-lg hover:bg-gray-200 transition-colors"
                >
                  Respinge toate
                </button>
                
                <button
                  onClick={handleAcceptAll}
                  className="px-6 py-2 text-sm font-semibold text-white bg-primary-red rounded-lg hover:bg-red-700 transition-colors"
                >
                  Acceptă toate
                </button>
              </div>
            </div>
          ) : (
            // Preferences panel
            <div>
              <div className="flex items-center justify-between mb-4">
                <h3 className="text-lg font-semibold text-gray-900">Preferințe Cookie-uri</h3>
                <button
                  onClick={() => setShowPreferences(false)}
                  className="p-2 text-gray-500 hover:text-gray-700 transition-colors"
                >
                  <FaTimes />
                </button>
              </div>
              
              <div className="space-y-4 mb-6">
                {/* Necessary Cookies */}
                <div className="flex items-start justify-between p-4 bg-gray-50 rounded-lg">
                  <div className="flex-1">
                    <h4 className="font-medium text-gray-900 mb-1">Cookie-uri necesare</h4>
                    <p className="text-sm text-gray-600">
                      Aceste cookie-uri sunt esențiale pentru funcționarea site-ului și nu pot fi dezactivate.
                    </p>
                  </div>
                  <div className="ml-4">
                    <div className="w-12 h-6 bg-primary-red rounded-full relative">
                      <div className="w-5 h-5 bg-white rounded-full absolute right-0.5 top-0.5"></div>
                    </div>
                  </div>
                </div>
                
                {/* Analytics Cookies */}
                <div className="flex items-start justify-between p-4 bg-gray-50 rounded-lg">
                  <div className="flex-1">
                    <h4 className="font-medium text-gray-900 mb-1">Cookie-uri de analiză</h4>
                    <p className="text-sm text-gray-600">
                      Ne ajută să înțelegem cum folosești site-ul pentru a îmbunătăți experiența.
                    </p>
                  </div>
                  <div className="ml-4">
                    <button
                      onClick={() => handlePreferenceChange('analytics')}
                      className={`w-12 h-6 rounded-full relative transition-colors ${
                        preferences.analytics ? 'bg-primary-red' : 'bg-gray-300'
                      }`}
                    >
                      <div className={`w-5 h-5 bg-white rounded-full absolute top-0.5 transition-transform ${
                        preferences.analytics ? 'right-0.5' : 'left-0.5'
                      }`}></div>
                    </button>
                  </div>
                </div>
                
                {/* Marketing Cookies */}
                <div className="flex items-start justify-between p-4 bg-gray-50 rounded-lg">
                  <div className="flex-1">
                    <h4 className="font-medium text-gray-900 mb-1">Cookie-uri de marketing</h4>
                    <p className="text-sm text-gray-600">
                      Folosite pentru a-ți arăta anunțuri relevante pe alte site-uri.
                    </p>
                  </div>
                  <div className="ml-4">
                    <button
                      onClick={() => handlePreferenceChange('marketing')}
                      className={`w-12 h-6 rounded-full relative transition-colors ${
                        preferences.marketing ? 'bg-primary-red' : 'bg-gray-300'
                      }`}
                    >
                      <div className={`w-5 h-5 bg-white rounded-full absolute top-0.5 transition-transform ${
                        preferences.marketing ? 'right-0.5' : 'left-0.5'
                      }`}></div>
                    </button>
                  </div>
                </div>
              </div>
              
              <div className="flex flex-col sm:flex-row gap-3 justify-end">
                <button
                  onClick={handleRejectAll}
                  className="px-4 py-2 text-sm font-medium text-gray-700 bg-gray-100 rounded-lg hover:bg-gray-200 transition-colors"
                >
                  Respinge toate
                </button>
                
                <button
                  onClick={handleAcceptSelected}
                  className="px-6 py-2 text-sm font-semibold text-white bg-primary-red rounded-lg hover:bg-red-700 transition-colors"
                >
                  Salvează preferințele
                </button>
              </div>
            </div>
          )}
        </div>
      </motion.div>
    </AnimatePresence>
  );
};

export default CookieBanner;
