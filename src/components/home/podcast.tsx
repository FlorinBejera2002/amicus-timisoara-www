import { motion } from 'framer-motion';
import { FaUsers, FaMicrophone, FaHeart, FaYoutube } from 'react-icons/fa';

export const Podcast = () => {

    return (
  <section className="py-10 md:py-16 bg-white">
  <div className="max-w-7xl mx-auto px-4 lg:px-8">
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
      <motion.div
        initial={{ opacity: 0, x: -50 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
      >
        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
          Podcast AMiCUS
        </h2>
        <p className="text-lg text-gray-600 mb-6">
          Ascultă conversații inspiraționale cu studenți din comunitatea noastră, 
          discuții despre credință, viața universitară și dezvoltare personală.
        </p>
        <div className="space-y-4 mb-6">
          <div className="flex items-center space-x-3">
            <FaMicrophone className="text-primary-red text-xl" />
            <span className="text-gray-700">Episoade lunare</span>
          </div>
          <div className="flex items-center space-x-3">
            <FaUsers className="text-primary-red text-xl" />
            <span className="text-gray-700">Invitați speciali</span>
          </div>
          <div className="flex items-center space-x-3">
            <FaHeart className="text-primary-red text-xl" />
            <span className="text-gray-700">Povești inspiraționale</span>
          </div>
        </div>
        <a
          href="https://www.youtube.com/playlist?list=PLuAQECfKvdHBZo4hBt9ESiDwN0teufCJD"
          target="_blank"
          rel="noopener noreferrer"
          className="bg-primary-red text-white px-8 py-4 rounded-md font-semibold hover:bg-red-700 transition-all duration-300 inline-flex items-center space-x-3 hover:scale-105"
        >
          <FaYoutube className="text-xl" />
          <span>Abonează-te pe YouTube</span>
        </a>
      </motion.div>
      <div className="w-full h-64 md:h-96">
          <iframe
            className="w-full h-full rounded-xl shadow-lg"
            src="https://www.youtube.com/embed/videoseries?list=PLuAQECfKvdHBZo4hBt9ESiDwN0teufCJD"
            title="Playlist Podcast AMiCUS"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen={true}
            loading="lazy"
          ></iframe>
      </div>
    </div>
  </div>
 </section>       
    )
}