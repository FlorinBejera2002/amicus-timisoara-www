import { useState } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import Footer from '../components/Footer';

export const EventsPage = () => {
  const [selectedFilter, setSelectedFilter] = useState('Toate');

  const upcomingEvents = [
    {
      id: 1,
      title: 'Întâlnire Săptămânală',
      date: '2024-01-04',
      time: '20:00',
      location: 'Str. Piața Alexandru Mocioni 7, Timișoara',
      category: 'Spiritual',
      description: 'Întâlnirea noastră săptămânală cu studiu biblic, rugăciune și părtășie.',
      image: 'ri-calendar-event-line',
      spots: 50,
      registered: 35,
      recurring: true
    },
    {
      id: 2,
      title: 'Conferința Anuală AMiCUS 2024',
      date: '2024-03-15',
      time: '09:00',
      location: 'Aula Magna, Universitatea de Vest Timișoara',
      category: 'Educație',
      description: 'Conferința anuală cu speakeri de renume din domeniul medical și spiritual.',
      image: 'ri-presentation-line',
      spots: 300,
      registered: 180,
      recurring: false
    },
    {
      id: 3,
      title: 'Campania de Donare de Sânge',
      date: '2024-02-20',
      time: '10:00',
      location: 'Centrul de Transfuzie Sanguină Timișoara',
      category: 'Social',
      description: 'Campanie de sensibilizare și donare de sânge pentru salvarea de vieți.',
      image: 'ri-heart-pulse-line',
      spots: 100,
      registered: 65,
      recurring: false
    },
    {
      id: 4,
      title: 'Workshop Dezvoltare Personală',
      date: '2024-01-25',
      time: '18:00',
      location: 'Sala de conferințe AMiCUS',
      category: 'Dezvoltare',
      description: 'Workshop interactiv despre dezvoltarea abilităților de leadership.',
      image: 'ri-user-star-line',
      spots: 30,
      registered: 22,
      recurring: false
    },
    {
      id: 5,
      title: 'Seară Culturală',
      date: '2024-02-10',
      time: '19:00',
      location: 'Casa de Cultură a Studenților',
      category: 'Cultural',
      description: 'O seară dedicată artei, muzicii și talentelor din comunitatea AMiCUS.',
      image: 'ri-music-line',
      spots: 80,
      registered: 45,
      recurring: false
    },
    {
      id: 6,
      title: 'Tabăra de Vară AMiCUS 2024',
      date: '2024-07-15',
      time: '10:00',
      location: 'Munții Carpați, România',
      category: 'Spiritual',
      description: 'Tabăra anuală de dezvoltare spirituală și personală în natură.',
      image: 'ri-tent-line',
      spots: 80,
      registered: 45,
      recurring: false
    }
  ];

  const pastEvents = [
    {
      id: 7,
      title: 'Conferința Medicală de Toamnă',
      date: '2023-11-20',
      location: 'Spitalul Județean Timișoara',
      category: 'Educație',
      participants: 150,
      image: 'ri-stethoscope-line'
    },
    {
      id: 8,
      title: 'Proiect Îngrijire Bătrâni',
      date: '2023-12-15',
      location: 'Căminul de Bătrâni "Speranța"',
      category: 'Social',
      participants: 25,
      image: 'ri-parent-line'
    },
    {
      id: 9,
      title: 'Concert de Colinde',
      date: '2023-12-22',
      location: 'Biserica Adventistă Timișoara',
      category: 'Cultural',
      participants: 200,
      image: 'ri-music-line'
    }
  ];

  const categories = ['Toate', 'Spiritual', 'Educație', 'Social', 'Dezvoltare', 'Cultural'];

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

      {/* Quick Stats */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {[
              { number: '52', label: 'Evenimente/An', icon: 'ri-calendar-line' },
              { number: '1500+', label: 'Participanți', icon: 'ri-group-line' },
              { number: '12', label: 'Tipuri Evenimente', icon: 'ri-list-check' },
              { number: '100%', label: 'Gratuite', icon: 'ri-gift-line' }
            ].map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="text-center"
              >
                <div className="w-16 h-16 bg-primary-red rounded-full flex items-center justify-center mx-auto mb-4">
                  <i className={`${stat.icon} text-2xl text-white`}></i>
                </div>
                <div className="text-3xl font-bold text-gray-900 mb-2">{stat.number}</div>
                <div className="text-gray-600">{stat.label}</div>
              </motion.div>
            ))}
          </div>
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
                  
                  <div className="mb-4">
                    <div className="flex justify-between text-sm text-gray-600 mb-2">
                      <span>Înregistrați: {event.registered}/{event.spots}</span>
                      <span>{Math.round((event.registered / event.spots) * 100)}%</span>
                    </div>
                    <div className="w-full bg-gray-200 rounded-full h-2">
                      <div 
                        className="bg-primary-red h-2 rounded-full transition-all duration-300"
                        style={{ width: `${(event.registered / event.spots) * 100}%` }}
                      ></div>
                    </div>
                  </div>
                  
                  <button className="w-full bg-primary-red text-white py-2 px-4 rounded-lg font-medium hover:bg-red-700 transition-colors duration-200 flex items-center justify-center space-x-2">
                    <span>Înscrie-te</span>
                    <i className="ri-arrow-right-line"></i>
                  </button>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Past Events */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Evenimente Trecute
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Privește în urmă la evenimentele noastre de succes
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {pastEvents.map((event, index) => (
              <motion.div
                key={event.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-gray-50 rounded-lg p-6 hover:shadow-lg transition-shadow duration-200"
              >
                <div className="flex items-center mb-4">
                  <div className="w-12 h-12 bg-gray-400 rounded-lg flex items-center justify-center mr-4">
                    <i className={`${event.image} text-xl text-white`}></i>
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900">{event.title}</h3>
                    <span className={`px-2 py-1 rounded-full text-xs font-medium ${getCategoryColor(event.category)}`}>
                      {event.category}
                    </span>
                  </div>
                </div>
                
                <div className="space-y-2 mb-4">
                  <div className="flex items-center text-sm text-gray-600">
                    <i className="ri-calendar-line mr-2"></i>
                    <span>{formatDate(event.date)}</span>
                  </div>
                  <div className="flex items-center text-sm text-gray-600">
                    <i className="ri-map-pin-line mr-2"></i>
                    <span>{event.location}</span>
                  </div>
                  <div className="flex items-center text-sm text-gray-600">
                    <i className="ri-group-line mr-2"></i>
                    <span>{event.participants} participanți</span>
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

