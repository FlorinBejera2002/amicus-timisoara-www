import { motion } from 'framer-motion';
import Footer from '../components/Footer';
import { FaYoutube } from 'react-icons/fa';

const PodcastPage = () => {
  // YouTube Playlist ID
  const playlistId = 'PLuAQECfKvdHBZo4hBt9ESiDwN0teufCJD';

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="py-16 md:py-24 bg-gradient-to-r from-primary-red to-red-700 text-white">
        <div className="max-w-7xl mx-auto px-4 lg:px-8 text-center">
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-4xl md:text-5xl font-bold mb-6"
          >
            Podcast AMiCUS
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-xl md:text-2xl max-w-3xl mx-auto mb-8"
          >
            Ascultă conversații inspiraționale cu studenți din comunitatea noastră, despre credință, viața universitară și dezvoltare personală.
          </motion.p>
        </div>
      </section>

      {/* Main Content */}
      <main className="max-w-7xl mx-auto px-4 lg:px-8 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          {/* Main Player */}
          <div className="lg:col-span-2">
            <div className="bg-white rounded-xl shadow-lg overflow-hidden">
              <div className="aspect-w-16 aspect-h-9 w-full">
                <iframe
                  className="w-full h-64 md:h-96"
                  src={`https://www.youtube.com/embed/videoseries?list=${playlistId}`}
                  title="Playlist Podcast AMiCUS"
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen={true}
                  loading="lazy"
                ></iframe>
              </div>
              <div className="p-6">
                <h2 className="text-2xl font-bold text-gray-900 mb-4">Urmărește-ne pe YouTube</h2>
                <p className="text-gray-600 mb-6">
                  Abonează-te la canalul nostru de YouTube pentru a fi la curent cu cele mai noi episoade și conținut exclusiv.
                </p>
                <a
                  href="https://www.youtube.com/playlist?list=PLuAQECfKvdHBZo4hBt9ESiDwN0teufCJD"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center px-6 py-3 bg-primary-red text-white rounded-md font-medium hover:bg-red-700 transition-colors"
                >
                  <FaYoutube className="mr-2 text-xl" />
                  Abonează-te pe YouTube
                </a>
              </div>
            </div>
          </div>

          {/* Sidebar */}
          <div className="lg:col-span-1">
            <div className="bg-white rounded-xl shadow-lg p-6">
              <h3 className="text-xl font-bold text-gray-900 mb-4">Despre Podcast</h3>
              <p className="text-gray-600 mb-6">
                Podcast-ul AMiCUS aduce în prim plan discuții despre credință, viața universitară și dezvoltare personală, cu invitați speciali din diverse domenii.
              </p>
              
              <div className="space-y-4">
                <div className="flex items-start">
                  <div className="flex-shrink-0 mt-1">
                    <div className="w-6 h-6 rounded-full bg-primary-red flex items-center justify-center">
                      <svg className="w-3 h-3 text-white" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                    </div>
                  </div>
                  <p className="ml-3 text-gray-700">Episoade lunare cu teme diverse</p>
                </div>
                
                <div className="flex items-start">
                  <div className="flex-shrink-0 mt-1">
                    <div className="w-6 h-6 rounded-full bg-primary-red flex items-center justify-center">
                      <svg className="w-3 h-3 text-white" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                    </div>
                  </div>
                  <p className="ml-3 text-gray-700">Invitați speciali din diverse domenii</p>
                </div>
                
                <div className="flex items-start">
                  <div className="flex-shrink-0 mt-1">
                    <div className="w-6 h-6 rounded-full bg-primary-red flex items-center justify-center">
                      <svg className="w-3 h-3 text-white" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                    </div>
                  </div>
                  <p className="ml-3 text-gray-700">Discuții despre credință și știință</p>
                </div>
              </div>
              
              <div className="mt-8">
                <h4 className="font-medium text-gray-900 mb-3">Urmărește-ne pe:</h4>
                <div className="flex space-x-4">
                  <a 
                    href="https://www.youtube.com/@amicus.timisoara" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="text-gray-400 hover:text-red-600 transition-colors"
                    aria-label="YouTube"
                  >
                    <FaYoutube className="w-6 h-6" />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export { PodcastPage };
