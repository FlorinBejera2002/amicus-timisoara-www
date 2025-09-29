import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import Footer from '../components/Footer';

export const BookPage = () => {
  const chapters = [
    {
      number: 1,
      title: 'Începuturile',
      description: 'Povestea înființării AMiCUS și primii pași în comunitate',
      pages: 25,
      author: 'Echipa Fondatoare'
    },
    {
      number: 2,
      title: 'Credința în Medicină',
      description: 'Cum să îmbini credința creștină cu practica medicală',
      pages: 35,
      author: 'Dr. Maria Popescu'
    },
    {
      number: 3,
      title: 'Mărturii de Transformare',
      description: 'Povești personale de schimbare și creștere spirituală',
      pages: 40,
      author: 'Membri AMiCUS'
    },
    {
      number: 4,
      title: 'Serviciul în Comunitate',
      description: 'Proiecte sociale și impactul lor asupra societății',
      pages: 30,
      author: 'Echipa Proiecte'
    },
    {
      number: 5,
      title: 'Dezvoltarea Profesională',
      description: 'Ghid pentru cariera medicală din perspectivă creștină',
      pages: 45,
      author: 'Dr. Alexandru Ionescu'
    },
    {
      number: 6,
      title: 'Viitorul AMiCUS',
      description: 'Viziunea și planurile pentru următorii ani',
      pages: 20,
      author: 'Consiliul Director'
    }
  ];

  const testimonials = [
    {
      name: 'Dr. Elena Dumitrescu',
      role: 'Medic Cardiolog',
      text: 'Această carte m-a inspirat să văd medicina nu doar ca o profesie, ci ca o chemare divină de a servi oamenii.',
      rating: 5
    },
    {
      name: 'Andrei Popescu',
      role: 'Student Medicină',
      text: 'Mărturiile din această carte mi-au dat curaj să îmi trăiesc credința și în mediul academic.',
      rating: 5
    },
    {
      name: 'Prof. Dr. Mihai Georgescu',
      role: 'Profesor Universitar',
      text: 'O lucrare valoroasă care demonstrează că știința și credința pot coexista armonios.',
      rating: 5
    }
  ];

  const bookStats = [
    { number: '195', label: 'Pagini', icon: 'ri-file-text-line' },
    { number: '15+', label: 'Autori', icon: 'ri-user-line' },
    { number: '6', label: 'Capitole', icon: 'ri-book-line' },
    { number: '1000+', label: 'Cititori', icon: 'ri-group-line' }
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
              <h1 className="text-4xl md:text-6xl font-bold mb-6">
                Cartea AMiCUS Timișoara
              </h1>
              <p className="text-xl text-red-100 mb-8">
                O colecție inspirațională de povești, mărturii și învățături din 
                comunitatea medicilor și studenților creștini din Timișoara.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <button className="bg-white text-primary-red px-8 py-4 rounded-lg font-semibold text-lg hover:bg-gray-100 transition-colors duration-200 inline-flex items-center justify-center space-x-2">
                  <span>Descarcă Gratuit</span>
                  <i className="ri-download-line"></i>
                </button>
                <button className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-white hover:text-primary-red transition-colors duration-200 inline-flex items-center justify-center space-x-2">
                  <span>Citește Online</span>
                  <i className="ri-book-open-line"></i>
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
                <div className="w-80 h-96 bg-white rounded-lg shadow-2xl transform rotate-3 hover:rotate-0 transition-transform duration-300">
                  <div className="p-8 h-full flex flex-col justify-between">
                    <div>
                      <div className="w-16 h-16 bg-primary-red rounded-full flex items-center justify-center mb-6">
                        <i className="ri-book-open-line text-2xl text-white"></i>
                      </div>
                      <h3 className="text-2xl font-bold text-gray-900 mb-4">
                        AMiCUS Timișoara
                      </h3>
                      <p className="text-gray-600 mb-6">
                        Povești de credință și excelență în medicina creștină
                      </p>
                    </div>
                    <div className="text-sm text-gray-500">
                      <p>Editura AMiCUS • 2024</p>
                      <p>195 pagini • Format digital</p>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Book Stats */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {bookStats.map((stat, index) => (
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

      {/* About the Book */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              Despre Această Carte
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              "Cartea AMiCUS Timișoara" este o compilație unică care adună experiențele, 
              mărturiile și învățăturile membrilor comunității noastre. Fiecare pagină 
              reflectă călătoria spirituală și profesională a celor care au ales să 
              îmbine credința cu excelența în domeniul medical.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
            {[
              {
                icon: 'ri-heart-line',
                title: 'Mărturii Personale',
                description: 'Povești autentice de transformare și creștere spirituală'
              },
              {
                icon: 'ri-lightbulb-line',
                title: 'Învățături Practice',
                description: 'Ghiduri concrete pentru integrarea credinței în medicină'
              },
              {
                icon: 'ri-community-line',
                title: 'Experiențe Comunitare',
                description: 'Impactul proiectelor sociale și al activităților de grup'
              }
            ].map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="text-center bg-white rounded-lg p-6 shadow-lg"
              >
                <div className="w-16 h-16 bg-primary-red rounded-full flex items-center justify-center mx-auto mb-4">
                  <i className={`${feature.icon} text-2xl text-white`}></i>
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">
                  {feature.title}
                </h3>
                <p className="text-gray-600">
                  {feature.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Chapters */}
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
              Cuprinsul Cărții
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Explorează cele 6 capitole care acoperă toate aspectele vieții creștine în medicină
            </p>
          </motion.div>

          <div className="space-y-6">
            {chapters.map((chapter, index) => (
              <motion.div
                key={chapter.number}
                initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
                className="bg-gray-50 rounded-lg p-6 hover:shadow-lg transition-shadow duration-200"
              >
                <div className="flex items-center space-x-6">
                  <div className="flex-shrink-0 w-16 h-16 bg-primary-red rounded-full flex items-center justify-center">
                    <span className="text-white font-bold text-xl">{chapter.number}</span>
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl font-bold text-gray-900 mb-2">
                      {chapter.title}
                    </h3>
                    <p className="text-gray-600 mb-2">
                      {chapter.description}
                    </p>
                    <div className="flex items-center space-x-4 text-sm text-gray-500">
                      <span>
                        <i className="ri-file-text-line mr-1"></i>
                        {chapter.pages} pagini
                      </span>
                      <span>
                        <i className="ri-user-line mr-1"></i>
                        {chapter.author}
                      </span>
                    </div>
                  </div>
                  <button className="bg-primary-red text-white px-4 py-2 rounded-lg font-medium hover:bg-red-700 transition-colors duration-200">
                    Citește
                  </button>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
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
              Ce Spun Cititorii
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Feedback-ul celor care au fost inspirați de această carte
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-white rounded-lg p-6 shadow-lg"
              >
                <div className="flex items-center mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <i key={i} className="ri-star-fill text-yellow-400 text-lg"></i>
                  ))}
                </div>
                <blockquote className="text-gray-600 mb-4 italic">
                  "{testimonial.text}"
                </blockquote>
                <div className="flex items-center">
                  <div className="w-12 h-12 bg-primary-red rounded-full flex items-center justify-center mr-4">
                    <i className="ri-user-line text-xl text-white"></i>
                  </div>
                  <div>
                    <p className="font-semibold text-gray-900">{testimonial.name}</p>
                    <p className="text-gray-600 text-sm">{testimonial.role}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Download CTA */}
      <section className="py-20 bg-primary-red text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <i className="ri-download-cloud-line text-6xl mb-6"></i>
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Descarcă Cartea Gratuit
            </h2>
            <p className="text-xl text-red-100 mb-8 max-w-2xl mx-auto">
              Această carte este disponibilă gratuit pentru toți cei interesați să 
              exploreze intersecția dintre credință și medicină.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-white text-primary-red px-8 py-4 rounded-lg font-semibold text-lg hover:bg-gray-100 transition-colors duration-200 inline-flex items-center justify-center space-x-2">
                <span>Descarcă PDF</span>
                <i className="ri-file-pdf-line"></i>
              </button>
              <button className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-white hover:text-primary-red transition-colors duration-200 inline-flex items-center justify-center space-x-2">
                <span>Citește Online</span>
                <i className="ri-book-open-line"></i>
              </button>
            </div>
            <p className="text-red-200 text-sm mt-6">
              * Cartea este disponibilă în format digital. Pentru versiunea tipărită, contactează-ne.
            </p>
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default BookPage;
