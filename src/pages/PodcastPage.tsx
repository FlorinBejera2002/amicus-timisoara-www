import { motion } from 'framer-motion';
import Footer from '../components/Footer';

export const PodcastPage = () => {
  const episodes = [
    {
      id: 1,
      title: 'Credința în Medicină: O Perspectivă Creștină',
      description: 'Discutăm despre cum să integrezi credința în practica medicală quotidiană și să fii un martor pentru Hristos în spital.',
      duration: '45 min',
      date: '2024-03-15',
      guests: ['Dr. Maria Popescu', 'Dr. Alexandru Ionescu'],
      topics: ['Credință', 'Medicină', 'Mărturie'],
      audioUrl: '#',
      imageUrl: '/podcast-episode-1.jpg'
    },
    {
      id: 2,
      title: 'Echilibrul Între Studii și Viața Spirituală',
      description: 'Cum să menții o relație puternică cu Dumnezeu în timpul anilor de facultate și să excelezi academic.',
      duration: '38 min',
      date: '2024-03-08',
      guests: ['Andrei Popescu', 'Elena Dumitrescu'],
      topics: ['Studii', 'Spiritualitate', 'Echilibru'],
      audioUrl: '#',
      imageUrl: '/podcast-episode-2.jpg'
    },
    {
      id: 3,
      title: 'Serviciul în Comunitate: Proiecte Sociale AMiCUS',
      description: 'Explorăm impactul proiectelor sociale ale AMiCUS și cum poți să te implici în serviciul comunității.',
      duration: '52 min',
      date: '2024-03-01',
      guests: ['Echipa Proiecte AMiCUS'],
      topics: ['Serviciu', 'Comunitate', 'Voluntariat'],
      audioUrl: '#',
      imageUrl: '/podcast-episode-3.jpg'
    },
    {
      id: 4,
      title: 'Mărturii de Transformare: Povești Personale',
      description: 'Membri ai comunității AMiCUS împărtășesc povești personale de transformare și creștere spirituală.',
      duration: '41 min',
      date: '2024-02-22',
      guests: ['Membri AMiCUS'],
      topics: ['Mărturii', 'Transformare', 'Creștere'],
      audioUrl: '#',
      imageUrl: '/podcast-episode-4.jpg'
    },
    {
      id: 5,
      title: 'Viitorul Medicinei Creștine în România',
      description: 'O discuție despre provocările și oportunitățile pentru medicii creștini în sistemul de sănătate românesc.',
      duration: '47 min',
      date: '2024-02-15',
      guests: ['Prof. Dr. Mihai Georgescu'],
      topics: ['Viitor', 'Medicină', 'România'],
      audioUrl: '#',
      imageUrl: '/podcast-episode-5.jpg'
    }
  ];

  const hosts = [
    {
      name: 'Dr. Maria Popescu',
      role: 'Medic Cardiolog & Host Principal',
      bio: 'Cu peste 10 ani de experiență în cardiologie, Dr. Popescu combină expertiza medicală cu o pasiune pentru împărtășirea credinței.',
      image: '/host-maria.jpg'
    },
    {
      name: 'Andrei Popescu',
      role: 'Student Medicină & Co-host',
      bio: 'Student în anul VI la medicină, Andrei aduce perspectiva tinerilor medici și experiența studenților.',
      image: '/host-andrei.jpg'
    }
  ];

  const stats = [
    { number: '50+', label: 'Episoade', icon: 'ri-headphone-line' },
    { number: '10K+', label: 'Ascultători', icon: 'ri-user-line' },
    { number: '4.8/5', label: 'Rating', icon: 'ri-star-line' },
    { number: '25+', label: 'Invitați', icon: 'ri-mic-line' }
  ];

  return (
    <div className="min-h-screen pt-16">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-primary-red to-red-800 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
            >
              <div className="flex items-center space-x-4 mb-6">
                <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center">
                  <i className="ri-mic-line text-3xl"></i>
                </div>
                <div>
                  <h1 className="text-4xl md:text-6xl font-bold">
                    Podcast AMiCUS
                  </h1>
                  <p className="text-red-100 text-lg">Credință • Medicină • Comunitate</p>
                </div>
              </div>
              <p className="text-xl text-red-100 mb-8">
                Conversații inspiraționale despre integrarea credinței creștine în 
                practica medicală, cu medici și studenți din comunitatea AMiCUS.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <button className="bg-white text-primary-red px-8 py-4 rounded-lg font-semibold text-lg hover:bg-gray-100 transition-colors duration-200 inline-flex items-center justify-center space-x-2">
                  <i className="ri-play-line"></i>
                  <span>Ascultă Ultimul Episod</span>
                </button>
                <button className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-white hover:text-primary-red transition-colors duration-200 inline-flex items-center justify-center space-x-2">
                  <i className="ri-rss-line"></i>
                  <span>Abonează-te</span>
                </button>
              </div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="flex justify-center"
            >
              <div className="relative">
                <div className="w-80 h-80 bg-white/10 backdrop-blur-sm rounded-full flex items-center justify-center">
                  <div className="w-60 h-60 bg-white rounded-full flex items-center justify-center shadow-2xl">
                    <i className="ri-mic-line text-6xl text-primary-red"></i>
                  </div>
                </div>
                <div className="absolute -top-4 -right-4 w-16 h-16 bg-white rounded-full flex items-center justify-center shadow-lg">
                  <i className="ri-notification-line text-2xl text-primary-red"></i>
                </div>
                <div className="absolute -bottom-4 -left-4 w-16 h-16 bg-white rounded-full flex items-center justify-center shadow-lg">
                  <i className="ri-headphone-line text-2xl text-primary-red"></i>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
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

      {/* Latest Episodes */}
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
              Episoade Recente
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Explorează conversațiile noastre despre credință, medicină și comunitate
            </p>
          </motion.div>

          <div className="space-y-8">
            {episodes.map((episode, index) => (
              <motion.div
                key={episode.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-200"
              >
                <div className="p-6">
                  <div className="flex items-start space-x-6">
                    <div className="flex-shrink-0">
                      <div className="w-24 h-24 bg-primary-red rounded-lg flex items-center justify-center">
                        <i className="ri-play-line text-3xl text-white"></i>
                      </div>
                    </div>
                    <div className="flex-1">
                      <div className="flex items-center justify-between mb-2">
                        <span className="text-sm text-gray-500">Episodul {episode.id}</span>
                        <span className="text-sm text-gray-500">{episode.date}</span>
                      </div>
                      <h3 className="text-xl font-bold text-gray-900 mb-2">
                        {episode.title}
                      </h3>
                      <p className="text-gray-600 mb-4">
                        {episode.description}
                      </p>
                      <div className="flex items-center space-x-6 mb-4">
                        <div className="flex items-center space-x-2 text-sm text-gray-500">
                          <i className="ri-time-line"></i>
                          <span>{episode.duration}</span>
                        </div>
                        <div className="flex items-center space-x-2 text-sm text-gray-500">
                          <i className="ri-user-line"></i>
                          <span>{episode.guests.join(', ')}</span>
                        </div>
                      </div>
                      <div className="flex items-center justify-between">
                        <div className="flex flex-wrap gap-2">
                          {episode.topics.map((topic, topicIndex) => (
                            <span
                              key={topicIndex}
                              className="px-3 py-1 bg-red-100 text-primary-red text-sm rounded-full"
                            >
                              {topic}
                            </span>
                          ))}
                        </div>
                        <button className="bg-primary-red text-white px-6 py-2 rounded-lg font-medium hover:bg-red-700 transition-colors duration-200 inline-flex items-center space-x-2">
                          <i className="ri-play-line"></i>
                          <span>Ascultă</span>
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          <div className="text-center mt-12">
            <button className="bg-primary-red text-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-red-700 transition-colors duration-200 inline-flex items-center space-x-2">
              <span>Vezi Toate Episoadele</span>
              <i className="ri-arrow-right-line"></i>
            </button>
          </div>
        </div>
      </section>

      {/* Hosts */}
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
              Găzduitorii Podcast-ului
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Cunoaște echipa care aduce conversațiile inspiraționale
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            {hosts.map((host, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="text-center"
              >
                <div className="w-48 h-48 bg-gray-200 rounded-full mx-auto mb-6 flex items-center justify-center">
                  <i className="ri-user-line text-6xl text-gray-400"></i>
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-2">{host.name}</h3>
                <p className="text-primary-red font-medium mb-4">{host.role}</p>
                <p className="text-gray-600 max-w-md mx-auto">{host.bio}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Subscribe Section */}
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
              Nu Rata Niciun Episod
            </h2>
            <p className="text-xl text-red-100 mb-8 max-w-2xl mx-auto">
              Abonează-te la podcast-ul nostru și primește notificări pentru 
              fiecare episod nou cu conversații inspiraționale.
            </p>
            <div className="flex flex-wrap justify-center gap-4 mb-8">
              {[
                { name: 'Spotify', icon: 'ri-spotify-line', url: '#' },
                { name: 'Apple Podcasts', icon: 'ri-apple-line', url: '#' },
                { name: 'Google Podcasts', icon: 'ri-google-line', url: '#' },
                { name: 'YouTube', icon: 'ri-youtube-line', url: '#' },
                { name: 'RSS', icon: 'ri-rss-line', url: '#' }
              ].map((platform, index) => (
                <a
                  key={index}
                  href={platform.url}
                  className="bg-white/10 backdrop-blur-sm text-white px-6 py-3 rounded-lg font-medium hover:bg-white/20 transition-colors duration-200 inline-flex items-center space-x-2"
                >
                  <i className={platform.icon}></i>
                  <span>{platform.name}</span>
                </a>
              ))}
            </div>
            <p className="text-red-200 text-sm">
              Disponibil pe toate platformele majore de podcast
            </p>
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default PodcastPage;
