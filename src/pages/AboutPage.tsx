import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import Footer from '../components/Footer';
import logo from '@/assets/Logo-Amicus.png';

export const AboutPage = () => {
  const values = [
    {
      icon: 'ri-heart-line',
      title: 'Credința',
      description: 'Fundamentul tuturor activităților noastre este credința în Isus Hristos și valorile creștine.'
    },
    {
      icon: 'ri-community-line',
      title: 'Comunitatea',
      description: 'Construim relații autentice și susținem dezvoltarea fiecărui membru al comunității.'
    },
    {
      icon: 'ri-graduation-cap-line',
      title: 'Excelența',
      description: 'Încurajăm performanța academică și profesională în domeniul medical și nu numai.'
    },
    {
      icon: 'ri-hand-heart-line',
      title: 'Serviciul',
      description: 'Servim comunitatea prin proiecte sociale și activități de voluntariat.'
    }
  ];

  const departments = [
    {
      name: 'Departamentul Recreativ',
      description: 'Organizează activități de relaxare și socializare pentru membri',
      icon: 'ri-gamepad-line'
    },
    {
      name: 'Departamentul Cultural',
      description: 'Promovează activități culturale și artistice în comunitate',
      icon: 'ri-palette-line'
    },
    {
      name: 'Departamentul Social',
      description: 'Coordonează proiectele de ajutorare și sprijin social',
      icon: 'ri-group-line'
    },
    {
      name: 'Departamentul Proiecte',
      description: 'Dezvoltă și implementează proiecte inovatoare',
      icon: 'ri-lightbulb-line'
    },
    {
      name: 'Departamentul PR & Marketing',
      description: 'Gestionează comunicarea și promovarea activităților',
      icon: 'ri-megaphone-line'
    },
    {
      name: 'Departamentul Spiritual',
      description: 'Organizează activități de dezvoltare spirituală',
      icon: 'ri-book-read-line'
    }
  ];

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
            <img src={logo} alt="AMiCUS Logo" className="w-20 h-20 mx-auto mb-6" />
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              Despre AMiCUS Timișoara
            </h1>
            <p className="text-xl text-red-100 max-w-3xl mx-auto">
              Asociația Medicilor și Studenților Creștini din Timișoara - 
              O comunitate dedicată dezvoltării spirituale și profesionale
            </p>
          </motion.div>
        </div>
      </section>

      {/* Mission Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                Misiunea Noastră
              </h2>
              <p className="text-lg text-gray-600 mb-6">
                AMiCUS Timișoara este o asociație studențească autonomă, apolitică, 
                neguvernamentală și non-profit, constituită la nivel național. 
                Activitatea asociației se concentrează pe construirea unui mediu social 
                propice dezvoltării membrilor și încurajează voluntariatul prin demararea 
                multiplelor proiecte cu impact civic.
              </p>
              <p className="text-lg text-gray-600 mb-6">
                Suntem parte din rețeaua națională AMiCUS, activând în 13 centre universitare 
                din România și Republica Moldova, cu peste 2000 de membri activi.
              </p>
              <Link
                to="/form"
                className="bg-primary-red text-white px-6 py-3 rounded-lg font-semibold hover:bg-red-700 transition-colors duration-200 inline-flex items-center space-x-2"
              >
                <span>Alătură-te nouă</span>
                <i className="ri-arrow-right-line"></i>
              </Link>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="bg-gray-50 rounded-lg p-8"
            >
              <h3 className="text-2xl font-bold text-gray-900 mb-6">Viziunea Noastră</h3>
              <blockquote className="text-lg text-gray-700 italic mb-4">
                "Să fim o comunitate de tineri creștini care impactează pozitiv societatea 
                prin excelență profesională, integritate morală și serviciu dedicat."
              </blockquote>
              <div className="flex items-center space-x-4">
                <div className="w-12 h-12 bg-primary-red rounded-full flex items-center justify-center">
                  <i className="ri-eye-line text-xl text-white"></i>
                </div>
                <div>
                  <p className="font-semibold text-gray-900">Viziune 2030</p>
                  <p className="text-gray-600">Impactând comunitatea prin credință și excelență</p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Values Section */}
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
              Valorile Noastre
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Principiile fundamentale care ne ghidează în toate activitățile
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="text-center bg-white rounded-lg p-6 shadow-lg hover:shadow-xl transition-shadow duration-200"
              >
                <div className="w-16 h-16 bg-primary-red rounded-full flex items-center justify-center mx-auto mb-4">
                  <i className={`${value.icon} text-2xl text-white`}></i>
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">
                  {value.title}
                </h3>
                <p className="text-gray-600">
                  {value.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Departments Section */}
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
              Departamentele Noastre
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Fiecare departament contribuie la misiunea comună prin activități specializate
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {departments.map((dept, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-gray-50 rounded-lg p-6 hover:shadow-lg transition-shadow duration-200"
              >
                <div className="flex items-center mb-4">
                  <div className="w-12 h-12 bg-primary-red rounded-lg flex items-center justify-center mr-4">
                    <i className={`${dept.icon} text-xl text-white`}></i>
                  </div>
                  <h3 className="text-lg font-semibold text-gray-900">
                    {dept.name}
                  </h3>
                </div>
                <p className="text-gray-600">
                  {dept.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* History Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Istoria Noastră
            </h2>
            <p className="text-lg text-gray-600">
              O călătorie de peste un deceniu în slujirea comunității
            </p>
          </motion.div>

          <div className="space-y-8">
            {[
              { year: '2010', event: 'Înființarea AMiCUS Timișoara', description: 'Prima întâlnire oficială și stabilirea viziunii' },
              { year: '2015', event: 'Primul Congres Local', description: 'Organizarea primului eveniment major cu peste 200 de participanți' },
              { year: '2018', event: 'Extinderea Activităților', description: 'Lansarea programelor de mentorat și dezvoltare profesională' },
              { year: '2020', event: 'Adaptarea Digitală', description: 'Tranziția către activități online în perioada pandemiei' },
              { year: '2023', event: 'Noi Proiecte Sociale', description: 'Lansarea inițiativelor de impact comunitar și social' }
            ].map((milestone, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
                className="flex items-center space-x-6"
              >
                <div className="flex-shrink-0 w-20 h-20 bg-primary-red rounded-full flex items-center justify-center">
                  <span className="text-white font-bold text-lg">{milestone.year}</span>
                </div>
                <div className="flex-1">
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">
                    {milestone.event}
                  </h3>
                  <p className="text-gray-600">
                    {milestone.description}
                  </p>
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
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Fă Parte din Povestea Noastră
            </h2>
            <p className="text-xl text-red-100 mb-8 max-w-2xl mx-auto">
              Alătură-te unei comunități care valorează credința, excelența și serviciul
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/form"
                className="bg-white text-primary-red px-8 py-4 rounded-lg font-semibold text-lg hover:bg-gray-100 transition-colors duration-200 inline-flex items-center justify-center space-x-2"
              >
                <span>Înscrie-te Acum</span>
                <i className="ri-user-add-line"></i>
              </Link>
              <Link
                to="/contact"
                className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-white hover:text-primary-red transition-colors duration-200 inline-flex items-center justify-center space-x-2"
              >
                <span>Contactează-ne</span>
                <i className="ri-mail-line"></i>
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default AboutPage;
