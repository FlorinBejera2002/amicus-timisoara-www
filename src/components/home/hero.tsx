import { motion } from "framer-motion";
import { Link } from 'react-router-dom';
import { 
  FaFacebookF, 
  FaInstagram, 
  FaYoutube, 
  FaEnvelope,
  FaUsers,
  FaHandsHelping,
  FaPray,
  FaHeart,
} from 'react-icons/fa';
import bgImage from '@/assets/bg-image-1.jpg';

export const Hero = () => {
    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
          opacity: 1,
          transition: {
            staggerChildren: 0.2
          }
        }
      };
    
      const itemVariants = {
        hidden: { opacity: 0, y: 20 },
        visible: {
          opacity: 1,
          y: 0,
          transition: { duration: 0.6 }
        }
      };
    return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden px-4 lg:px-8">
{/* Background Image with Gradient Overlay */}
<div 
  className="absolute inset-0 bg-cover bg-top bg-center bg-no-repeat"
  style={{ backgroundImage: `url(${bgImage})` }}
>
  <div className="absolute inset-0 bg-black/70"></div>
</div>

{/* Floating Elements */}
<div className="absolute inset-0 overflow-hidden pointer-events-none">
  <motion.div
    animate={{ 
      x: [0, 100, 0],
      y: [0, -50, 0],
      rotate: [0, 180, 360]
    }}
    transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
    className="absolute top-20 left-10 w-4 h-4 bg-white/20 rounded-full"
  />
  <motion.div
    animate={{ 
      x: [0, -80, 0],
      y: [0, 60, 0],
      rotate: [0, -180, -360]
    }}
    transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
    className="absolute top-40 right-20 w-6 h-6 bg-primary-red/30 rounded-full"
  />
  <motion.div
    animate={{ 
      x: [0, 60, 0],
      y: [0, -80, 0],
      rotate: [0, 90, 180]
    }}
    transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
    className="absolute bottom-40 left-1/4 w-3 h-3 bg-white/15 rounded-full"
  />
</div>

{/* Social Media Sidebar */}
<motion.div
  initial={{ x: -100, opacity: 0 }}
  animate={{ x: 0, opacity: 1 }}
  transition={{ duration: 0.8, delay: 1 }}
  className="absolute left-2 md:left-4 lg:left-6 top-1/3 transform -translate-y-1/2 z-20 hidden md:flex items-center flex-col space-y-3 lg:space-y-4"
>
  {[
    { Icon: FaFacebookF, url: 'https://facebook.com/amicus.timisoara', color: 'hover:bg-blue-600' },
    { Icon: FaInstagram, url: 'https://instagram.com/amicii.timisoara', color: 'hover:bg-pink-600' },
    { Icon: FaYoutube, url: 'https://youtube.com/@amicustimisoara', color: 'hover:bg-red-600' },
    { Icon: FaEnvelope, url: 'mailto:contact@amicus-timisoara.ro', color: 'hover:bg-gray-600' }
  ].map((social, index) => (
    <motion.a
      key={index}
      href={social.url}
      target="_blank"
      rel="noopener noreferrer"
      initial={{ x: -50, opacity: 0 }}
      animate={{ x: 0, opacity: 1 }}
      transition={{ duration: 0.5, delay: 1.2 + index * 0.1 }}
      className={`w-10 h-10 md:w-12 md:h-12 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full flex items-center justify-center text-white transition-all duration-300 ${social.color} hover:scale-110 hover:border-white/40`}
    >
      <social.Icon className="text-lg" />
    </motion.a>
  ))}
  <div className="w-px h-16 bg-white/30 mx-auto mt-4"></div>
  <span className="text-white/60 text-xs font-medium transform rotate-90 mt-8">FOLLOW US</span>
</motion.div>

{/* Hero Content */}
<motion.div
  variants={containerVariants}
  initial="hidden"
  animate="visible"
  className="relative z-10 text-center text-white w-full max-w-7xl mx-auto flex flex-col items-center justify-center px-4 mt-28"
>
  {/* Main Title */}
  <motion.h1 
    variants={itemVariants}
    className="text-5xl md:text-7xl lg:text-8xl font-bold mb-6 leading-tight"
  >
    <span className="bg-gradient-to-r from-white to-gray-200 bg-clip-text text-transparent">
      AMiCUS
    </span>
    <br />
    <span className="text-primary-red text-4xl md:text-5xl lg:text-6xl font-semibold">
      Timișoara
    </span>
  </motion.h1>

  {/* Description */}
  <motion.p 
    variants={itemVariants}
    className="text-lg md:text-xl mb-12 text-gray-300 max-w-2xl leading-relaxed"
  >
    Mai mult decât o comunitate, o asociație studențească sau o oportunitate de dezvoltare. AMiCUS Timișoara e o familie!
  </motion.p>

  {/* Action Buttons */}
  <motion.div 
    variants={itemVariants}
    className="flex flex-col sm:flex-row gap-6 justify-center mb-16"
  >
    <Link
      to="/form"
      className="group bg-primary-red text-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-red-700 transition-all duration-300 flex items-center justify-center space-x-3 shadow-2xl hover:shadow-red-500/25 hover:scale-105"
    >
      <FaUsers className="text-xl" />
      <span>Înscrie-te acum</span>
    </Link>
    
    <Link
      to="/about"
      className="group border-2 border-white/80 text-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-white hover:text-gray-900 transition-all duration-300 flex items-center justify-center space-x-3 backdrop-blur-sm hover:scale-105"
    >
      <FaHeart className="text-xl" />
      <span>Află mai multe</span>
    </Link>
  </motion.div>

  {/* Features Grid */}
  <motion.div 
    variants={itemVariants}
    className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl w-full mb-12"
  >
    <div className="text-center">
      <div className="w-16 h-16 bg-white/10 rounded-full flex items-center justify-center mx-auto mb-4 backdrop-blur-sm border border-white/20">
        <FaPray className="text-2xl text-white" />
      </div>
      <h3 className="text-xl font-semibold mb-2">Creștere Spirituală</h3>
      <p className="text-gray-300 text-sm">Studii biblice, rugăciune și dezvoltare în credința creștină</p>
    </div>
    
    <div className="text-center">
      <div className="w-16 h-16 bg-white/10 rounded-full flex items-center justify-center mx-auto mb-4 backdrop-blur-sm border border-white/20">
        <FaUsers className="text-2xl text-white" />
      </div>
      <h3 className="text-xl font-semibold mb-2">Comunitate</h3>
      <p className="text-gray-300 text-sm">Prietenii autentice și sprijin reciproc între studenți</p>
    </div>
    
    <div className="text-center">
      <div className="w-16 h-16 bg-white/10 rounded-full flex items-center justify-center mx-auto mb-4 backdrop-blur-sm border border-white/20">
        <FaHandsHelping className="text-2xl text-white" />
      </div>
      <h3 className="text-xl font-semibold mb-2">Serviciu</h3>
      <p className="text-gray-300 text-sm">Proiecte sociale și voluntariat în comunitatea locală</p>
    </div>
  </motion.div>

  <motion.div
    initial={{ y: 100, opacity: 0 }}
    animate={{ y: 0, opacity: 1 }}
    transition={{ duration: 0.8, delay: 1.5 }}
    className="md:hidden flex space-x-2 sm:space-x-3 justify-center mb-16"
  >
    {[
      { Icon: FaFacebookF, url: 'https://facebook.com/amicus.timisoara', color: 'hover:bg-blue-600' },
      { Icon: FaInstagram, url: 'https://www.instagram.com/amicus.timisoara/', color: 'hover:bg-pink-600' },
      { Icon: FaYoutube, url: 'https://www.youtube.com/@amicus.timisoara', color: 'hover:bg-red-600' },
      { Icon: FaEnvelope, url: 'mailto:aamicustimisoara@gmail.com', color: 'hover:bg-gray-600' }
    ].map((social, index) => (
      <a
        key={index}
        href={social.url}
        target="_blank"
        rel="noopener noreferrer"
        className={`w-10 h-10 sm:w-12 sm:h-12 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full flex items-center justify-center text-white transition-all duration-300 ${social.color} hover:scale-110`}
      >
        <social.Icon className="text-lg" />
      </a>
    ))}
  </motion.div>
</motion.div>
</section>
    )
}