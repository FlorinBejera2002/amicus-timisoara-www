import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { 
  FaUsers,
  FaMicrophone,
  FaHeart,
} from 'react-icons/fa';
import {YouTubePodcast} from '../YouTubePodcast';

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
            <span className="text-gray-700">Episoade săptămânale</span>
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
        <Link
          to="/podcast"
          className="bg-primary-red text-white px-8 py-4 rounded-md font-semibold hover:bg-red-700 transition-all duration-300 inline-flex items-center space-x-3 hover:scale-105"
        >
          <FaMicrophone className="text-xl" />
          <span>Ascultă Podcast-ul</span>
        </Link>
      </motion.div>
      <YouTubePodcast 
        channelId="UCYourChannelIdHere"
      />
    </div>
  </div>
 </section>       
    )
}