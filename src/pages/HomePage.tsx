import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { 
  FaFacebookF, 
  FaInstagram, 
  FaYoutube, 
  FaEnvelope,
  FaUsers,
  FaHandsHelping,
  FaCalendarAlt,
  FaBookOpen,
  FaMicrophone,
  FaPray,
  FaHeart,
  FaTimes,
  FaChevronLeft,
  FaChevronRight
} from 'react-icons/fa';
import bgImage from '@/assets/bg-image.png';
import Footer from '../components/Footer';
import LazyImage from '../components/LazyImage';
import YouTubePodcast from '../components/YouTubePodcast';
import DailyVerse from '../components/DailyVerse';

// Global gtag declaration
declare global {
  interface Window {
    gtag?: (...args: any[]) => void;
  }
}

// Import member photos
import member1 from '@/assets/_DSC0059-2.jpg';
import member2 from '@/assets/_DSC9796-2.jpg';
import member3 from '@/assets/_DSC9812-2.jpg';
import member4 from '@/assets/_DSC9833-2.jpg';
import member5 from '@/assets/_DSC0069-2.jpg';
import member6 from '@/assets/_DSC9856-2.jpg';
import member7 from '@/assets/_DSC9866-2.jpg';
import member8 from '@/assets/_DSC9954-2.jpg';

export const HomePage = () => {
  const [selectedMember, setSelectedMember] = useState<any>(null);
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);

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

  const committeeMembers = [
    {
      id: 1,
      name: 'Florin Bejera',
      position: 'Președinte',
      image: member3,
      description: 'Coordonează activitățile generale ale asociației și reprezintă AMiCUS în relațiile cu universitățile și organizațiile studențești. Asigură implementarea strategiei și viziunii organizației studențești.'
    },
    {
      id: 2,
      name: 'Carolina Boghiu',
      position: 'Administrativ & Resurse Umane',
      image: member1,
      description: 'Coordonează activitățile administrativă ale asociației. Asigură gestionarea documentației și menținerea comunicării internă. Asigură respectarea procedurilor administrative.'
    },
    {
      id: 3,
      name: 'Luis Pruteanu',
      position: 'Marketing & PR',
      image: member7,
      description: 'Gestionează prezența online a AMiCUS, dezvoltă strategii de comunicare și menține relațiile cu media. Coordonează campaniile de promovare.'
    },
    {
      id: 4,
      name: 'Oana Popa',
      position: 'Cultural',
      image: member6,
      description: 'Planifică și organizează conferințele, seminariile și activitățile culturale. Asigură logistica și promovarea evenimentelor asociației.'
    },
    {
      id: 5,
      name: 'Oana Maghiarii',
      position: 'Social si Spiritual',
      image: member8,
      description: 'Dezvoltă și coordonează proiectele sociale ale AMiCUS. Colaborează cu organizațiile partenere pentru maximizarea impactului în comunitate.'
    },
    {
      id: 6,
      name: 'Marc Gherzan',
      position: 'Recreativ',
      image: member5,
      description: 'Planifică și organizează conferințele, seminariile și activitățile culturale. Asigură logistica și promovarea evenimentelor asociației.'
    },
    {
      id: 7,
      name: 'Gabriela Mich',
      position: 'Proiecte',
      image: member2,
      description: 'Planifică și organizează conferințele, seminariile și activitățile culturale. Asigură logistica și promovarea evenimentelor asociației.'
    },
    {
      id: 8,
      name: 'Levis Nistor',
      position: 'Capelan',
      image: member4,
      description: 'Sprijină președintele în coordonarea activităților și preia responsabilitățile acestuia în absența sa. Coordonează proiectele strategice ale asociației.'
    }
  ];

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % Math.ceil(committeeMembers.length / 2));
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + Math.ceil(committeeMembers.length / 2)) % Math.ceil(committeeMembers.length / 2));
  };

  // Auto-play carousel
  useEffect(() => {
    if (!isAutoPlaying) return;
    
    const interval = setInterval(() => {
      nextSlide();
    }, 4000); // Change slide every 4 seconds

    return () => clearInterval(interval);
  }, [currentSlide, isAutoPlaying]);

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden px-4 lg:px-8">
        {/* Background Image with Gradient Overlay */}
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{ backgroundImage: `url(${bgImage})` }}
        >
          <div className="absolute inset-0 bg-gradient-to-br from-black/70 via-black/60 to-primary-red/40"></div>
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
            O comunitate de studenți creștini care se întâlnesc pentru a crește împreună în credință, prietenie și serviciu în orașul Timișoara.
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
             { Icon: FaInstagram, url: 'https://instagram.com/amicii.timisoara', color: 'hover:bg-pink-600' },
             { Icon: FaYoutube, url: 'https://youtube.com/@amicustimisoara', color: 'hover:bg-red-600' },
             { Icon: FaEnvelope, url: 'mailto:contact@amicus-timisoara.ro', color: 'hover:bg-gray-600' }
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

          {/* Mobile Social Icons */}
       

        </motion.div>
      </section>

      {/* Book Section */}
      <section className="py-16 bg-gradient-to-br from-gray-50 to-gray-100">
        <div className="max-w-7xl mx-auto px-4 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            {/* Book Image */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="relative "
            >
              <div className="relative group">
                {/* Book Cover Placeholder - Replace with actual book image */}
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
                
                {/* Glow Effect */}
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

              {/* Features */}
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

              {/* CTA Buttons */}
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

      {/* Committee Section */}
      <section className="py-10 md:py-16 bg-white">
        <div className="max-w-7xl mx-auto px-3 sm:px-4 md:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-8 md:mb-10"
          >
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 px-2">
              Echipa Noastră
            </h2>
          </motion.div>

          {/* Desktop and Tablet Grid */}
          <div className="hidden sm:grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-6">
            {committeeMembers.map((member, index) => (
              <motion.div
                key={member.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="group cursor-pointer"
                onClick={() => setSelectedMember(member)}
              >
                <div className="bg-gray-50 rounded-md p-4 sm:p-5 md:p-6 hover:shadow-sm transition-all duration-300 group-hover:scale-105">
                  <div className="relative mb-3 sm:mb-4 overflow-hidden rounded-lg sm:rounded-md">
                    <LazyImage 
                      src={member.image} 
                      alt={member.name}
                      className="w-full h-50"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  </div>
                  <h3 className="text-base sm:text-lg font-bold text-gray-900 mb-1 leading-tight">{member.name}</h3>
                  <p className="text-primary-red font-medium text-xs sm:text-sm leading-tight">{member.position}</p>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Mobile Carousel */}
          <div 
            className="sm:hidden relative px-2"
            onMouseEnter={() => setIsAutoPlaying(false)}
            onMouseLeave={() => setIsAutoPlaying(true)}
          >
            <div className="overflow-hidden rounded-md">
              <motion.div 
                className="flex transition-transform duration-300 ease-in-out"
                style={{ transform: `translateX(-${currentSlide * 100}%)` }}
              >
                {Array.from({ length: Math.ceil(committeeMembers.length / 2) }).map((_, slideIndex) => (
                  <div key={slideIndex} className="w-full flex-shrink-0 grid grid-cols-2 gap-3 px-1">
                    {committeeMembers.slice(slideIndex * 2, slideIndex * 2 + 2).map((member) => (
                      <motion.div
                        key={member.id}
                        className="group cursor-pointer"
                        onClick={() => setSelectedMember(member)}
                        whileTap={{ scale: 0.95 }}
                      >
                        <div className="bg-gray-50 rounded-lg p-4 xs:p-5 hover:shadow-lg transition-all duration-300">
                          <div className="relative mb-3 xs:mb-4 overflow-hidden rounded-lg">
                            <LazyImage 
                              src={member.image} 
                              alt={member.name}
                              className="w-full h-36 xs:h-40 group-hover:scale-110 transition-transform duration-300"
                            />
                          </div>
                          <h3 className="text-sm xs:text-base font-bold text-gray-900 mb-1 leading-tight">{member.name}</h3>
                          <p className="text-primary-red font-medium text-xs xs:text-sm leading-tight">{member.position}</p>
                        </div>
                      </motion.div>
                    ))}
                  </div>
                ))}
              </motion.div>
            </div>

            {/* Carousel Controls */}
            <button
              onClick={prevSlide}
              aria-label="Slide anterior"
              className="absolute left-1 xs:left-0 top-1/2 transform -translate-y-1/2 xs:-translate-x-4 w-7 h-7 xs:w-8 xs:h-8 bg-white rounded-full shadow-lg flex items-center justify-center text-gray-600 hover:text-primary-red transition-colors duration-200 z-10"
            >
              <FaChevronLeft className="text-xs xs:text-sm" />
            </button>
            <button
              onClick={nextSlide}
              aria-label="Slide următor"
              className="absolute right-1 xs:right-0 top-1/2 transform -translate-y-1/2 xs:translate-x-4 w-7 h-7 xs:w-8 xs:h-8 bg-white rounded-full shadow-lg flex items-center justify-center text-gray-600 hover:text-primary-red transition-colors duration-200 z-10"
            >
              <FaChevronRight className="text-xs xs:text-sm" />
            </button>

            {/* Carousel Indicators */}
            <div className="flex justify-center mt-4 xs:mt-6 space-x-1 xs:space-x-2">
              {Array.from({ length: Math.ceil(committeeMembers.length / 2) }).map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentSlide(index)}
                  aria-label={`Mergi la slide-ul ${index + 1}`}
                  className={`w-2 h-2 xs:w-2.5 xs:h-2.5 rounded-full transition-colors duration-200 ${
                    currentSlide === index ? 'bg-primary-red' : 'bg-gray-300'
                  }`}
                />
              ))}
            </div>
          </div>
        </div>

        {/* Member Modal */}
        {selectedMember && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center p-3 sm:p-4"
            onClick={() => setSelectedMember(null)}
          >
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.8, opacity: 0 }}
              className="bg-white rounded-md max-w-sm sm:max-w-md w-full p-5 sm:p-6 relative max-h-[90vh] overflow-y-auto"
              onClick={(e) => e.stopPropagation()}
            >
              <button
                onClick={() => setSelectedMember(null)}
                aria-label="Închide modal"
                className="absolute top-3 right-3 sm:top-4 sm:right-4 w-7 h-7 sm:w-8 sm:h-8 bg-gray-100 rounded-full flex items-center justify-center text-gray-600 hover:bg-gray-200 transition-colors duration-200"
              >
                <FaTimes className="text-sm" />
              </button>
              
              <div className="text-center mb-5 sm:mb-6">
                <div className="w-20 h-20 sm:w-24 sm:h-24 mx-auto mb-3 sm:mb-4 overflow-hidden rounded-full">
                  <LazyImage 
                    src={selectedMember.image} 
                    alt={selectedMember.name}
                    className="w-full h-full"
                  />
                </div>
                <h3 className="text-xl sm:text-2xl font-bold text-gray-900 mb-2">{selectedMember.name}</h3>
                <p className="text-primary-red font-semibold text-base sm:text-lg">{selectedMember.position}</p>
              </div>
              
              <div className="text-gray-600 leading-relaxed text-sm sm:text-base">
                <h4 className="font-semibold text-gray-900 mb-2 text-base sm:text-lg">Responsabilități:</h4>
                <p className="leading-relaxed">{selectedMember.description}</p>
              </div>
            </motion.div>
          </motion.div>
        )}
      </section>

      {/* Events Section */}
      <section className="py-10 md:py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Evenimente Viitoare
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Participă la activitățile noastre și conectează-te cu comunitatea
            </p>
          </motion.div>

          {/* Events Scroll Container */}
          <div className="relative">
            <div className="overflow-x-auto pb-4">
              <div className="flex space-x-6 min-w-max">
                {[
                  { 
                    id: 1,
                    title: 'Întâlnire Săptămânală', 
                    date: 'Joi, 19 Decembrie',
                    time: '20:00 - 22:00',
                    location: 'Piața Mocioni 7, Timișoara',
                    guest: 'Pastor Daniel Popescu',
                    theme: 'Credința în Timpul Examenelor',
                    type: 'Întâlnire Spirituală',
                    Icon: FaPray,
                    color: 'bg-blue-500'
                  },
                  { 
                    id: 2,
                    title: 'Conferința Anuală AMiCUS', 
                    date: 'Sâmbătă, 15 Decembrie',
                    time: '09:00 - 18:00',
                    location: 'Sala Mare UVT, Timișoara',
                    guest: 'Dr. Maria Ionescu',
                    theme: 'Viitorul Creștinismului în Universități',
                    type: 'Conferință',
                    Icon: FaCalendarAlt,
                    color: 'bg-green-500'
                  },
                  { 
                    id: 3,
                    title: 'Proiect Social - Ajutorarea Nevoiașilor', 
                    date: 'Duminică, 22 Decembrie',
                    time: '14:00 - 17:00',
                    location: 'Centrul Orașului, Timișoara',
                    guest: 'Echipa AMiCUS',
                    theme: 'Serviciul în Comunitate',
                    type: 'Proiect Social',
                    Icon: FaHandsHelping,
                    color: 'bg-purple-500'
                  },
                  { 
                    id: 4,
                    title: 'Seară de Rugăciune și Laudă', 
                    date: 'Vineri, 27 Decembrie',
                    time: '19:30 - 21:30',
                    location: 'Biserica Baptistă Emanuel',
                    guest: 'Trupa de Laudă AMiCUS',
                    theme: 'Mulțumire și Recunoștință',
                    type: 'Eveniment Spiritual',
                    Icon: FaMicrophone,
                    color: 'bg-red-500'
                  },
                  { 
                    id: 5,
                    title: 'Workshop Leadership Creștin', 
                    date: 'Sâmbătă, 4 Ianuarie',
                    time: '10:00 - 16:00',
                    location: 'Centrul de Conferințe UVT',
                    guest: 'Pr. Alexandru Munteanu',
                    theme: 'Dezvoltarea Liderilor Creștini',
                    type: 'Workshop',
                    Icon: FaUsers,
                    color: 'bg-indigo-500'
                  }
                ].map((event, index) => (
                  <motion.div
                    key={event.id}
                    initial={{ opacity: 0, x: 50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                    viewport={{ once: true }}
                    className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 min-w-[320px] max-w-[320px] flex-shrink-0"
                  >
                    {/* Event Header */}
                    <div className="flex items-start justify-between mb-4">
                      <div className={`w-12 h-12 ${event.color} rounded-lg flex items-center justify-center flex-shrink-0`}>
                        <event.Icon className="text-xl text-white" />
                      </div>
                      <span className="text-xs font-semibold text-gray-500 bg-gray-100 px-2 py-1 rounded-full">
                        {event.type}
                      </span>
                    </div>

                    {/* Event Title */}
                    <h3 className="text-lg font-bold text-gray-900 mb-3 line-clamp-2 leading-tight">
                      {event.title}
                    </h3>

                    {/* Event Details */}
                    <div className="space-y-3 mb-4">
                      {/* Date & Time */}
                      <div className="flex items-center text-sm text-gray-600">
                        <FaCalendarAlt className="mr-2 text-primary-red flex-shrink-0" />
                        <div>
                          <p className="font-medium">{event.date}</p>
                          <p className="text-xs text-gray-500">{event.time}</p>
                        </div>
                      </div>

                      {/* Location */}
                      <div className="flex items-start text-sm text-gray-600">
                        <FaUsers className="mr-2 text-primary-red mt-0.5 flex-shrink-0" />
                        <p className="line-clamp-2">{event.location}</p>
                      </div>

                      {/* Guest */}
                      <div className="flex items-center text-sm text-gray-600">
                        <FaMicrophone className="mr-2 text-primary-red flex-shrink-0" />
                        <p className="font-medium">{event.guest}</p>
                      </div>

                      {/* Theme */}
                      <div className="flex items-start text-sm text-gray-600">
                        <FaBookOpen className="mr-2 text-primary-red mt-0.5 flex-shrink-0" />
                        <p className="line-clamp-2 italic">"{event.theme}"</p>
                      </div>
                    </div>

                    {/* CTA Button */}
                    <Link
                      to="/events"
                      className="w-full bg-primary-red text-white py-3 px-4 rounded-lg font-semibold hover:bg-red-700 transition-all duration-300 inline-flex items-center justify-center space-x-2 group"
                    >
                      <span>Află mai multe</span>
                      <FaChevronRight className="text-sm group-hover:translate-x-1 transition-transform" />
                    </Link>
                  </motion.div>
                ))}
              </div>
            </div>

            {/* Scroll Indicators */}
            <div className="flex justify-center mt-6 space-x-2">
              <div className="w-2 h-2 bg-primary-red rounded-full"></div>
              <div className="w-2 h-2 bg-gray-300 rounded-full"></div>
              <div className="w-2 h-2 bg-gray-300 rounded-full"></div>
            </div>
          </div>

          {/* View All Events Button */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.5 }}
            viewport={{ once: true }}
            className="text-center mt-12"
          >
            <Link
              to="/events"
              className="bg-primary-red text-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-red-700 transition-all duration-300 inline-flex items-center space-x-3 hover:scale-105 shadow-lg"
            >
              <FaCalendarAlt className="text-xl" />
              <span>Vezi Toate Evenimentele</span>
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Podcast Section */}
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
              // apiKey="YOUR_YOUTUBE_API_KEY" // Uncomment and add your API key
            />
          </div>
        </div>
      </section>

      {/* Daily Verse Section */}
      <section className="py-10 md:py-16 bg-primary-red text-white">
        <div className="max-w-6xl mx-auto px-4 lg:px-8">
          <DailyVerse />
        </div>
      </section>

      {/* Footer */}
      <Footer />
    </div>
  );
};

export default HomePage;
