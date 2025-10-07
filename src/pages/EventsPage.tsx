import { useState } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import {Footer} from '../components/Footer';

export const EventsPage = () => {
  const [selectedFilter, setSelectedFilter] = useState('Toate');

  const upcomingEvents = [
    {
      id: 1,
      title: 'Prima întâlnire',
      date: 'Joi, 9 Octombrie',
      time: '20:00 - 22:00',
      location: 'Piața Mocioni 7, Timișoara',
      category: 'Întâlnire AMiCUS',
      description: 'Prima întâlnire cu invitatul Levis Nistor pe tema "Amprenta".',
      image: 'ri-calendar-event-line',
      guest: 'Levis Nistor',
      theme: 'Amprenta'
    },
    {
      id: 2,
      title: 'Deschiderea anului Universitar',
      date: 'Sâmbătă, 11 Octombrie',
      time: '17:00 - 18:00',
      location: 'Biserica AZS Maranatha, Timișoara',
      category: 'Eveniment',
      description: 'Eveniment de deschidere a anului universitar cu Ionuț Feier pe tema "Către necunoscut".',
      image: 'ri-presentation-line',
      guest: 'Ionuț Feier',
      theme: 'Către necunoscut'
    },
    {
      id: 3,
      title: 'Serată',
      date: 'Sâmbătă, 11 Octombrie',
      time: '20:00 - 23:00',
      location: 'Piața Mocioni 7, Timișoara',
      category: 'Recreativ',
      description: 'Seară de jocuri organizată de echipa AMiCUS.',
      image: 'ri-gamepad-line',
      guest: 'Echipa AMiCUS',
      theme: 'Seară de jocuri'
    },
    {
      id: 4,
      title: 'Întâlnire AMiCUS',
      date: 'Joi, 16 Octombrie',
      time: '20:00 - 22:00',
      location: 'Piața Mocioni 7, Timișoara',
      category: 'Întâlnire AMiCUS',
      description: 'Întâlnire cu Mihoc pe tema "Față în față cu succesul?".',
      image: 'ri-calendar-event-line',
      guest: 'Mihoc',
      theme: 'Față în față cu succesul?'
    },
    {
      id: 5,
      title: 'Drumeție',
      date: 'Duminica, 19 Octombrie',
      time: '09:00 - 18:00',
      location: 'Moneasa - Platoul Tinoasa - Cabana Izoi',
      category: 'Recreativ',
      description: 'Drumeție cu Pr. Alexandru Munteanu pe tema "Dezvoltarea Liderilor Creștini".',
      image: 'ri-mountain-line',
      guest: 'Pr. Alexandru Munteanu',
      theme: 'Dezvoltarea Liderilor Creștini'
    },
    {
      id: 6,
      title: 'De vorbă cu capelanul',
      date: 'Marti, 21 Octombrie',
      time: '20:00 - 22:00',
      location: 'Piața Mocioni 7, Timișoara',
      category: 'Proiect',
      description: 'Sesiune de discuții cu capelanul Levis Nistor.',
      image: 'ri-chat-3-line',
      guest: 'Levis Nistor',
      theme: 'De vorbă cu capelanul'
    },
    {
      id: 7,
      title: 'Întâlnire AMiCUS',
      date: 'Joi, 23 Octombrie',
      time: '20:00 - 22:00',
      location: 'Piața Mocioni 7, Timișoara',
      category: 'Întâlnire AMiCUS',
      description: 'Întâlnire cu Adi Dorgo pe tema orientării și carierei.',
      image: 'ri-calendar-event-line',
      guest: 'Adi Dorgo',
      theme: 'Orientare/Carieră'
    },
    {
      id: 8,
      title: 'Ieșire culturală',
      date: 'Marți, 28 Octombrie',
      time: '09:00 - 18:00',
      location: 'Timișoara',
      category: 'Cultural',
      description: 'Ieșire culturală în Timișoara pentru explorarea patrimoniului local.',
      image: 'ri-building-line',
      theme: 'Ieșire culturală'
    },
    {
      id: 9,
      title: 'Întâlnire AMiCUS',
      date: 'Joi, 30 Octombrie',
      time: '20:00 - 22:00',
      location: 'Piața Mocioni 7, Timișoara',
      category: 'Întâlnire AMiCUS',
      description: 'Întâlnire cu Florin Orodan pe tema Apocalipsei.',
      image: 'ri-calendar-event-line',
      guest: 'Florin Orodan',
      theme: 'Apocalipsa'
    }
  ];


  const categories = ['Toate', 'Întâlnire AMiCUS', 'Eveniment', 'Recreativ', 'Proiect', 'Cultural'];

  const filteredEvents = selectedFilter === 'Toate' 
    ? upcomingEvents 
    : upcomingEvents.filter(event => event.category === selectedFilter);

  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return date.toLocaleDateString('ro-RO', {
      weekday: 'long',
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    });
  };

  const getCategoryColor = (category: string) => {
    switch (category) {
      case 'Spiritual': return 'bg-purple-100 text-purple-800';
      case 'Educație': return 'bg-blue-100 text-blue-800';
      case 'Social': return 'bg-green-100 text-green-800';
      case 'Dezvoltare': return 'bg-yellow-100 text-yellow-800';
      case 'Cultural': return 'bg-pink-100 text-pink-800';
      default: return 'bg-gray-100 text-gray-800';
    }
  };

  return (
    <div className="min-h-screen pt-16">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-primary-red to-red-800 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <i className="ri-calendar-event-line text-6xl mb-6"></i>
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              Evenimente AMiCUS
            </h1>
            <p className="text-xl text-red-100 max-w-3xl mx-auto">
              Participă la activitățile noastre și conectează-te cu comunitatea. 
              Fiecare eveniment este o oportunitate de creștere și dezvoltare.
            </p>
          </motion.div>
        </div>
      </section>

     
      {/* Filter Section */}
      <section className="py-8 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap justify-center gap-4">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setSelectedFilter(category)}
                className={`px-6 py-2 rounded-full font-medium transition-colors duration-200 ${
                  selectedFilter === category
                    ? 'bg-primary-red text-white'
                    : 'bg-white text-gray-700 hover:bg-gray-100'
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Upcoming Events */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Evenimente Viitoare
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Înscrie-te la evenimentele noastre și fii parte din comunitate
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredEvents.map((event, index) => (
              <motion.div
                key={event.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-200"
              >
                <div className="p-6">
                  <div className="flex items-center justify-between mb-4">
                    <div className="w-12 h-12 bg-primary-red rounded-lg flex items-center justify-center">
                      <i className={`${event.image} text-xl text-white`}></i>
                    </div>
                    <span className={`px-3 py-1 rounded-full text-sm font-medium ${getCategoryColor(event.category)}`}>
                      {event.category}
                    </span>
                  </div>
                  
                  <h3 className="text-xl font-bold text-gray-900 mb-2">
                    {event.title}
                  </h3>
                  
                  <div className="space-y-2 mb-4">
                    <div className="flex items-center text-sm text-gray-600">
                      <i className="ri-calendar-line mr-2 text-primary-red"></i>
                      <span>{formatDate(event.date)}</span>
                    </div>
                    <div className="flex items-center text-sm text-gray-600">
                      <i className="ri-time-line mr-2 text-primary-red"></i>
                      <span>{event.time}</span>
                    </div>
                    <div className="flex items-center text-sm text-gray-600">
                      <i className="ri-map-pin-line mr-2 text-primary-red"></i>
                      <span className="line-clamp-1">{event.location}</span>
                    </div>
                  </div>
                  
                  <p className="text-gray-600 mb-4 line-clamp-2">
                    {event.description}
                  </p>
                  
                  {event.guest && (
                    <div className="flex items-center text-sm text-gray-600 mb-2">
                      <i className="ri-user-line mr-2 text-primary-red"></i>
                      <span>Invitat: {event.guest}</span>
                    </div>
                  )}
                  
                  {event.theme && (
                    <div className="flex items-center text-sm text-gray-600 mb-4">
                      <i className="ri-bookmark-line mr-2 text-primary-red"></i>
                      <span>Tema: {event.theme}</span>
                    </div>
                  )}
                  
                  <div className="bg-gray-50 rounded-lg p-3 text-center">
                    <span className="text-sm text-gray-600 font-medium">Eveniment informativ</span>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>


      {/* CTA Section */}
      <section className="py-20 bg-primary-red text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <i className="ri-notification-line text-6xl mb-6"></i>
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Nu Rata Niciun Eveniment
            </h2>
            <p className="text-xl text-red-100 mb-8 max-w-2xl mx-auto">
              Înscrie-te în comunitatea noastră pentru a primi notificări despre toate evenimentele
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/form"
                className="bg-white text-primary-red px-8 py-4 rounded-lg font-semibold text-lg hover:bg-gray-100 transition-colors duration-200 inline-flex items-center justify-center space-x-2"
              >
                <span>Alătură-te Comunității</span>
                <i className="ri-user-add-line"></i>
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

