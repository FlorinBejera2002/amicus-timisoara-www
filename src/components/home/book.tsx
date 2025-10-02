import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { 
  FaEnvelope,
  FaBookOpen,
  FaPray,
  FaHeart,
} from 'react-icons/fa';

export const Book = () => {
   
return (
  <section className="py-16 bg-gradient-to-br from-gray-50 to-gray-100">
  <div className="max-w-7xl mx-auto px-4 lg:px-8">
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
      {/* Book Image */}
      <motion.div
        initial={{ opacity: 0, x: -50 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className="relative"
      >
        <div className="relative group">
          <div className="bg-gradient-to-br from-primary-red via-red-600 to-red-800 rounded-2xl shadow-2xl transform rotate-3 group-hover:rotate-0 transition-transform duration-500 aspect-[6/4] flex flex-col justify-between p-8 text-white">
            <div>
              <FaBookOpen className="text-6xl mb-4 opacity-80" />
              <h3 className="text-3xl font-bold mb-2">AMiCUS</h3>
              <p className="text-red-100 text-lg">Povești de credință</p>
            </div>
            <div className="text-right">
              <p className="text-red-200 text-sm">Asociația Studenților</p>
              <p className="text-red-200 text-sm">Creștini Timișoara</p>
            </div>
          </div>
          <div className="absolute inset-0 bg-gradient-to-br from-primary-red/20 to-red-800/20 rounded-2xl blur-xl scale-110 -z-10"></div>
        </div>
      </motion.div>

      {/* Book Content */}
      <motion.div
        initial={{ opacity: 0, x: 50 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8, delay: 0.2 }}
        viewport={{ once: true }}
        className="space-y-8"
      >
        <div>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Cartea AMiCUS
          </h2>
          <p className="text-lg text-gray-600 mb-6 leading-relaxed">
            Cartea AMiCUS este o compilație unică de experiențe, mărturii și învățături din comunitatea studenților creștini. 
            Fiecare pagină reflectă călătoria spirituală și academică a studenților noștri, oferind inspirație și îndrumire.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="flex items-start space-x-4">
            <div className="w-12 h-12 bg-primary-red/10 rounded-lg flex items-center justify-center flex-shrink-0">
              <FaHeart className="text-primary-red text-xl" />
            </div>
            <div>
              <h4 className="font-semibold text-gray-900 mb-1">Mărturii Personale</h4>
              <p className="text-gray-600 text-sm">Povești reale de transformare și creștere</p>
            </div>
          </div>
          
          <div className="flex items-start space-x-4">
            <div className="w-12 h-12 bg-primary-red/10 rounded-lg flex items-center justify-center flex-shrink-0">
              <FaPray className="text-primary-red text-xl" />
            </div>
            <div>
              <h4 className="font-semibold text-gray-900 mb-1">Învățături Spirituale</h4>
              <p className="text-gray-600 text-sm">Reflecții biblice și aplicații practice</p>
            </div>
          </div>
        </div>

        <div className="flex flex-col sm:flex-row gap-4">
          <Link
            to="/book"
            className="bg-primary-red text-white px-8 py-4 rounded-lg font-semibold hover:bg-red-700 transition-all duration-300 inline-flex items-center justify-center space-x-3 hover:scale-105 shadow-lg"
          >
            <FaBookOpen className="text-xl" />
            <span>Citește Online</span>
          </Link>
          
          <button className="border-2 border-primary-red text-primary-red px-8 py-4 rounded-lg font-semibold hover:bg-primary-red hover:text-white transition-all duration-300 inline-flex items-center justify-center space-x-3 hover:scale-105">
            <FaEnvelope className="text-xl" />
            <span>Obține un exemplar</span>
          </button>
        </div>
      </motion.div>
    </div>
  </div>
</section>

)
}
