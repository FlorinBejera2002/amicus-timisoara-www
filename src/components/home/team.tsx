import { motion } from 'framer-motion';
import { useState, useEffect } from 'react';
import { 
  FaUsers,
  FaHandsHelping,
  FaCalendarAlt,
  FaTimes,
  FaChevronLeft,
  FaChevronRight,
} from 'react-icons/fa';

// Import member photos
import member1 from '@/assets/_DSC0059-2.jpg';
import member2 from '@/assets/_DSC9796-2.jpg';
import member3 from '@/assets/_DSC9812-2.jpg';
import member4 from '@/assets/_DSC9833-2.jpg';
import member5 from '@/assets/_DSC0069-2.jpg';
import member6 from '@/assets/_DSC9856-2.jpg';
import member7 from '@/assets/_DSC9866-2.jpg';
import member8 from '@/assets/_DSC9954-2.jpg';


export const Team = () => {
    const [selectedMember, setSelectedMember] = useState<any>(null);
    const [currentSlide, setCurrentSlide] = useState(0);
    const [isAutoPlaying, setIsAutoPlaying] = useState(true);
  
    useEffect(() => {
      if (!isAutoPlaying) return;
      
      const interval = setInterval(() => {
        nextSlide();
      }, 4000);
  
      return () => clearInterval(interval);
    }, [isAutoPlaying]);

  
    // Keyboard navigation for events carousel
    useEffect(() => {
      const handleKeyDown = (event: KeyboardEvent) => {
        if (event.key === 'ArrowLeft') {
          prevSlide();
        } else if (event.key === 'ArrowRight') {
          nextSlide();
        }
      };
  
      window.addEventListener('keydown', handleKeyDown);
      return () => window.removeEventListener('keydown', handleKeyDown);
    }, []);
  
  
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
        name: 'Luis Prundeanu',
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
        name: 'Oana Maghiari',
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
  
    const cardsPerSlide = 2; 
    const totalTeamSlides = Math.ceil(committeeMembers.length / cardsPerSlide);
  
    const nextSlide = () => {
      setCurrentSlide((prev) => (prev + 1) % totalTeamSlides);
    };
  
    const prevSlide = () => {
      setCurrentSlide((prev) => (prev - 1 + totalTeamSlides) % totalTeamSlides);
    };


return (
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
   <div className="hidden md:grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-6">
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
             <img 
               src={member.image} 
               alt={member.name}
               className="w-full h-50 object-cover"
               loading="lazy"
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
     className="md:hidden relative px-2"
     onMouseEnter={() => setIsAutoPlaying(false)}
     onMouseLeave={() => setIsAutoPlaying(true)}
   >
     <div className="overflow-hidden rounded-md">
       <motion.div 
         className="flex transition-transform duration-300 ease-in-out"
         style={{ transform: `translateX(-${currentSlide * 100}%)` }}
       >
         {Array.from({ length: totalTeamSlides }).map((_, slideIndex) => (
           <div key={slideIndex} className="w-full flex-shrink-0 grid grid-cols-2 gap-3 px-1">
             {committeeMembers
               .slice(slideIndex * cardsPerSlide, slideIndex * cardsPerSlide + cardsPerSlide)
               .map((member) => (
                 <motion.div
                   key={member.id}
                   className="group cursor-pointer"
                   onClick={() => setSelectedMember(member)}
                   whileTap={{ scale: 0.95 }}
                 >
                   <div className="bg-gray-50 rounded-lg p-3 hover:shadow-lg transition-all duration-300 h-full">
                     <div className="relative mb-2 overflow-hidden rounded-lg aspect-square">
                       <img 
                         src={member.image} 
                         alt={member.name}
                         className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                         loading="lazy"
                       />
                     </div>
                     <h3 className="text-sm font-bold text-gray-900 mb-1 leading-tight line-clamp-1">{member.name}</h3>
                     <p className="text-primary-red font-medium text-xs leading-tight line-clamp-1">{member.position}</p>
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
       className="absolute left-1 xs:left-0 top-1/2 transform -translate-y-1/2 xs:-translate-x-4 w-8 h-8 bg-white rounded-full shadow-lg flex items-center justify-center text-gray-600 hover:text-primary-red transition-colors duration-200 z-10"
     >
       <FaChevronLeft className="text-sm" />
     </button>
     <button
       onClick={nextSlide}
       aria-label="Slide următor"
       className="absolute right-1 xs:right-0 top-1/2 transform -translate-y-1/2 xs:translate-x-4 w-8 h-8 bg-white rounded-full shadow-lg flex items-center justify-center text-gray-600 hover:text-primary-red transition-colors duration-200 z-10"
     >
       <FaChevronRight className="text-sm" />
     </button>

     {/* Carousel Indicators */}
     <div className="flex justify-center mt-4 xs:mt-6 space-x-2">
       {Array.from({ length: totalTeamSlides }).map((_, index) => (
         <button
           key={index}
           onClick={() => setCurrentSlide(index)}
           aria-label={`Mergi la slide-ul ${index + 1}`}
           className={`w-2.5 h-2.5 rounded-full transition-colors duration-200 ${
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
           <img 
             src={selectedMember.image} 
             alt={selectedMember.name}
             className="w-full h-full object-cover"
             loading="lazy"
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

)
}