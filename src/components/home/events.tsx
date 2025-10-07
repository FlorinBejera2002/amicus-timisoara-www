import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { useState, useEffect, useCallback } from "react";
import { 
  FaUsers,
  FaHandsHelping,
  FaCalendarAlt,
  FaBookOpen,
  FaChevronLeft,
  FaChevronRight,
  FaUser,
  FaMapMarkerAlt
} from 'react-icons/fa';

export const Events = () => {
    const [currentEventSlide, setCurrentEventSlide] = useState(0);
    const cardsPerSlide = 3; // Show 3 cards per slide on desktop

    // Events data
    const eventsData = [
        { 
          id: 1,
          title: 'Prima întâlnire', 
          date: 'Joi, 9 Octombrie',
          time: '20:00 - 22:00',
          location: 'Piața Mocioni 7, Timișoara',
          guest: 'Levis Nistor',
          theme: 'Amprenta',
          type: 'Întâlnire AMiCUS',
          Icon: FaUsers,
          color: 'bg-blue-500'
        },
        { 
          id: 2,
          title: 'Deschiderea anului Universitar', 
          date: 'Sâmbătă, 11 Octombrie',
          time: '17:00 - 18:00',
          location: 'Biserica AZS Maranatha, Timișoara',
          guest: 'Ionuț Feier',
          theme: 'Către necunoscut',
          type: 'Eveniment',
          Icon: FaCalendarAlt,
          color: 'bg-green-500'
        },
        { 
          id: 3,
          title: 'Serată', 
          date: 'Sâmbătă, 11 Octombrie',
          time: '20:00 - 23:00',
          location: 'Piața Mocioni 7, Timișoara',
          guest: 'Echipa AMiCUS',
          theme: 'Seară de jocuri',
          type: 'Recreativ',
          Icon: FaHandsHelping,
          color: 'bg-purple-500'
        },
        { 
          id: 4,
          title: 'Întâlnire AMiCUS', 
          date: 'Joi, 16 Octombrie',
          time: '20:00 - 22:00',
          location: 'Piața Mocioni 7, Timișoara',
          guest: 'Mihoc',
          theme: 'Față în față cu succesul?',
          type: 'Întâlnire AMiCUS',
          Icon: FaUsers,
          color: 'bg-blue-500'
        },
        { 
          id: 5,
          title: 'Drumeție', 
          date: 'Duminica, 19 Octombrie',
          time: '09:00 - 18:00',
          location: 'Moneasa - Platoul Tinoasa - Cabana Izoi',
          guest: 'Pr. Alexandru Munteanu',
          theme: 'Dezvoltarea Liderilor Creștini',
          type: 'Recreativ',
          Icon: FaUsers,
          color: 'bg-indigo-500'
        },
        { 
          id: 6,
          title: 'De vorbă cu capelanul', 
          date: 'Marti, 21 Octombrie',
          time: '20:00 - 22:00',
          location: 'Piața Mocioni 7, Timișoara',
          guest: 'Levis Nistor',
          theme: 'De vorbă cu capelanul',
          type: 'Proiect',
          Icon: FaUsers,
          color: 'bg-green-500'
        },
        { 
          id: 7,
          title: 'Întâlnire AMiCUS', 
          date: 'Joi, 23 Octombrie',
          time: '20:00 - 22:00',
          location: 'Piața Mocioni 7, Timișoara',
          guest: 'Adi Dorgo',
          theme: 'Orientare/Carieră',
          type: 'Întâlnire AMiCUS',
          Icon: FaUsers,
          color: 'bg-blue-500'
        },
        { 
          id: 8,
          title: 'Ieșire culturală', 
          date: 'Marți, 28 Octombrie',
          time: '09:00 - 18:00',
          location: 'Timișoara',
          guest: '',
          theme: 'Ieșire culturală',
          type: 'Cultural',
          Icon: FaUsers,
          color: 'bg-green-500'
        },
        { 
          id: 9,
          title: 'Întâlnire AMiCUS', 
          date: 'Joi, 30 Octombrie',
          time: '20:00 - 22:00',
          location: 'Piața Mocioni 7, Timișoara',
          guest: 'Florin Orodan',
          theme: 'Apocalipsa',
          type: 'Întâlnire AMiCUS',
          Icon: FaUsers,
        }
      ];

    const totalSlides = Math.ceil(eventsData.length / cardsPerSlide);

    const nextEventSlide = useCallback(() => {
      setCurrentEventSlide(prev => (prev + 1) % totalSlides);
    }, [totalSlides]);

    const prevEventSlide = useCallback(() => {
      setCurrentEventSlide(prev => (prev - 1 + totalSlides) % totalSlides);
    }, [totalSlides]);

    useEffect(() => {
      const handleKeyDown = (event: KeyboardEvent) => {
        if (event.key === 'ArrowLeft') {
          prevEventSlide();
        } else if (event.key === 'ArrowRight') {
          nextEventSlide();
        }
      };

      window.addEventListener('keydown', handleKeyDown);
      return () => window.removeEventListener('keydown', handleKeyDown);
    }, [prevEventSlide, nextEventSlide]);

    return (
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

          <div className="relative">
            {/* Mobile Scrollable Container */}
            <div 
              className="md:hidden overflow-x-auto pb-6 -mx-4 px-4"
            >
              <div className="flex space-x-4 w-max">
                {eventsData.map((event, index) => (
                  <div key={event.id} className="w-72 flex-shrink-0">
                    <motion.div
                      initial={{ opacity: 0, x: 20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.4, delay: index * 0.05 }}
                      viewport={{ once: true, margin: "-20% 0px -20% 0px" }}
                      className="bg-white rounded-xl p-6 shadow-sm transition-all duration-300 hover:scale-[1.02] flex flex-col h-full"
                    >
                      <div className="flex items-start justify-between mb-4">
                        <div className={`w-12 h-12 ${event.color} rounded-lg flex items-center justify-center flex-shrink-0`}>
                          <event.Icon className="text-xl text-white" />
                        </div>
                        <span className="text-xs font-semibold text-gray-500 bg-gray-100 px-2 py-1 rounded-full">
                          {event.type}
                        </span>
                      </div>

                      <h3 className="text-lg font-bold text-gray-900 mb-3 line-clamp-2 leading-tight">
                        {event.title}
                      </h3>

                      <div className="space-y-3 mb-4 flex-grow">
                        <div className="flex items-center text-sm text-gray-600">
                          <FaCalendarAlt className="mr-2 text-primary-red flex-shrink-0" />
                          <span>{event.date} • {event.time}</span>
                        </div>
                        
                        {event.location && (
                          <div className="flex items-start text-sm text-gray-600">
                            <FaMapMarkerAlt className="mr-2 text-primary-red mt-0.5 flex-shrink-0" />
                            <span>{event.location}</span>
                          </div>
                        )}
                        
                        {event.guest && (
                          <div className="flex items-center text-sm text-gray-600">
                            <FaUser className="mr-2 text-primary-red flex-shrink-0" />
                            <span>{event.guest}</span>
                          </div>
                        )}
                        
                        {event.theme && (
                          <div className="flex items-center text-sm text-gray-600">
                            <FaBookOpen className="mr-2 text-primary-red flex-shrink-0" />
                            <span>{event.theme}</span>
                          </div>
                        )}
                      </div>

                      <div className="mt-auto bg-gray-50 rounded-lg p-3 text-center">
                        <span className="text-sm text-gray-600 font-medium">Eveniment informativ</span>
                      </div>
                    </motion.div>
                  </div>
                ))}
              </div>
            </div>
            
            {/* Desktop Carousel */}
            <div 
              className="hidden md:block overflow-hidden relative"
            >
              {/* Desktop Navigation */}
              <div className="flex justify-between w-full absolute top-1/2 -translate-y-1/2 left-0 right-0 z-10 px-2">
                <button
                  onClick={prevEventSlide}
                  className="bg-white shadow-lg rounded-full p-3 hover:bg-gray-50 transition-all duration-300 hover:scale-110 border border-gray-200"
                  aria-label="Evenimentul anterior"
                >
                  <FaChevronLeft className="text-primary-red text-xl" />
                </button>
                <button
                  onClick={nextEventSlide}
                  className="bg-white shadow-lg rounded-full p-3 hover:bg-gray-50 transition-all duration-300 hover:scale-110 border border-gray-200"
                  aria-label="Evenimentul următor"
                >
                  <FaChevronRight className="text-primary-red text-xl" />
                </button>
              </div>
              
              <div 
                className="flex transition-transform duration-500 ease-in-out bg-transparent pb-6"
                style={{ transform: `translateX(calc(-${currentEventSlide * 100}%))` }}
              >
                {Array.from({ length: totalSlides }).map((_, slideIndex) => {
                  const startIndex = slideIndex * cardsPerSlide;
                  const endIndex = startIndex + cardsPerSlide;
                  const slideEvents = eventsData.slice(startIndex, endIndex);
                  
                  return (
                    <div key={slideIndex} className="w-full flex-shrink-0 px-8">
                      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                        {slideEvents.map((event, index) => (
                          <motion.div
                            key={event.id}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.4, delay: index * 0.1 }}
                            viewport={{ once: true }}
                            className="bg-white rounded-xl p-6 shadow-sm transition-all duration-300 hover:scale-105 flex flex-col h-full"
                          >
                            <div className="flex items-start justify-between mb-4">
                              <div className={`w-12 h-12 ${event.color} rounded-lg flex items-center justify-center flex-shrink-0`}>
                                <event.Icon className="text-xl text-white" />
                              </div>
                              <span className="text-xs font-semibold text-gray-500 bg-gray-100 px-2 py-1 rounded-full">
                                {event.type}
                              </span>
                            </div>

                            <h3 className="text-lg font-bold text-gray-900 mb-3 line-clamp-2 leading-tight">
                              {event.title}
                            </h3>

                            <div className="space-y-3 mb-4 flex-grow">
                              <div className="flex items-center text-sm text-gray-600">
                                <FaCalendarAlt className="mr-2 text-primary-red flex-shrink-0" />
                                <span>{event.date} • {event.time}</span>
                              </div>
                              
                              {event.location && (
                                <div className="flex items-start text-sm text-gray-600">
                                  <FaMapMarkerAlt className="mr-2 text-primary-red mt-0.5 flex-shrink-0" />
                                  <span>{event.location}</span>
                                </div>
                              )}
                              
                              {event.guest && (
                                <div className="flex items-center text-sm text-gray-600">
                                  <FaUser className="mr-2 text-primary-red flex-shrink-0" />
                                  <span>{event.guest}</span>
                                </div>
                              )}
                              
                              {event.theme && (
                                <div className="flex items-center text-sm text-gray-600">
                                  <FaBookOpen className="mr-2 text-primary-red flex-shrink-0" />
                                  <span>{event.theme}</span>
                                </div>
                              )}
                            </div>

                            <div className="mt-auto bg-gray-50 rounded-lg p-3 text-center">
                              <span className="text-sm text-gray-600 font-medium">Eveniment informativ</span>
                            </div>
                          </motion.div>
                        ))}
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
            
            {/* Navigation Dots - Desktop Only */}
            {totalSlides > 1 && (
              <div className="hidden md:flex justify-center space-x-2 mt-6">
                {Array.from({ length: totalSlides }).map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setCurrentEventSlide(index)}
                    className={`w-3 h-3 rounded-full transition-all duration-300 ${
                      index === currentEventSlide 
                        ? 'bg-primary-red scale-110' 
                        : 'bg-gray-300 hover:bg-gray-400'
                    }`}
                    aria-label={`Mergi la slide-ul ${index + 1}`}
                  />
                ))}
              </div>
            )}
          </div>

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
    );
};
