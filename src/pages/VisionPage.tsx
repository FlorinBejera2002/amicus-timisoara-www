import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import Footer from '../components/Footer';

export const VisionPage = () => {
  const visionPillars = [
    {
      icon: 'ri-heart-line',
      title: 'Credința ca Fundament',
      description: 'Credința în Isus Hristos este fundamentul tuturor activităților noastre și ghidează fiecare decizie pe care o luăm.',
      goals: [
        'Întărirea relației personale cu Dumnezeu',
        'Integrarea valorilor creștine în practica medicală',
        'Dezvoltarea unei comunități spirituale puternice'
      ]
    },
    {
      icon: 'ri-graduation-cap-line',
      title: 'Excelența Profesională',
      description: 'Urmărim să fim modele de excelență în domeniul medical, combinând competența tehnică cu compasiunea creștină.',
      goals: [
        'Performanță academică de înalt nivel',
        'Dezvoltare profesională continuă',
        'Inovație în îngrijirea pacienților'
      ]
    },
    {
      icon: 'ri-community-line',
      title: 'Impactul Social',
      description: 'Dorim să transformăm comunitatea prin proiecte sociale și activități de voluntariat care reflectă dragostea lui Hristos.',
      goals: [
        'Proiecte sociale cu impact măsurabil',
        'Parteneriate cu organizații locale',
        'Educație pentru sănătate în comunitate'
      ]
    },
    {
      icon: 'ri-global-line',
      title: 'Influența Națională',
      description: 'Aspirăm să fim un model pentru alte filiale AMiCUS și să contribuim la dezvoltarea mișcării la nivel național.',
      goals: [
        'Leadership în rețeaua AMiCUS',
        'Schimb de bune practici',
        'Mentorat pentru filiale noi'
      ]
    }
  ];

  const strategicGoals = [
    {
      year: '2024',
      title: 'Consolidarea Bazei',
      objectives: [
        'Creșterea numărului de membri activi la 100',
        'Lansarea a 3 proiecte sociale noi',
        'Organizarea conferinței anuale cu 300+ participanți'
      ],
      status: 'in-progress'
    },
    {
      year: '2025',
      title: 'Extinderea Activităților',
      objectives: [
        'Deschiderea unui centru de consiliere',
        'Lansarea programului de mentorat profesional',
        'Parteneriat cu spitalele din Timișoara'
      ],
      status: 'planned'
    },
    {
      year: '2026',
      title: 'Impactul Regional',
      objectives: [
        'Extinderea în alte orașe din Banat',
        'Crearea unei fundații pentru proiecte sociale',
        'Dezvoltarea unui program de burse'
      ],
      status: 'planned'
    },
    {
      year: '2027-2030',
      title: 'Viziunea pe Termen Lung',
      objectives: [
        'Recunoaștere națională ca model de excelență',
        'Impact măsurabil în sistemul de sănătate',
        'Influență în politicile de sănătate publică'
      ],
      status: 'vision'
    }
  ];

  const values = [
    {
      title: 'Integritate',
      description: 'Trăim conform principiilor biblice în toate aspectele vieții',
      verse: 'Proverbele 10:9'
    },
    {
      title: 'Compasiune',
      description: 'Tratăm fiecare pacient cu dragostea lui Hristos',
      verse: 'Coloseni 3:12'
    },
    {
      title: 'Excelență',
      description: 'Urmărim perfecțiunea în tot ceea ce facem',
      verse: 'Coloseni 3:23'
    },
    {
      title: 'Serviciu',
      description: 'Servim comunitatea cu umilință și dedicare',
      verse: 'Marcu 10:43-44'
    },
    {
      title: 'Unitate',
      description: 'Lucrăm împreună ca un singur trup în Hristos',
      verse: '1 Corinteni 12:12'
    },
    {
      title: 'Creștere',
      description: 'Ne dezvoltăm continuu spiritual și profesional',
      verse: '2 Petru 3:18'
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
            <i className="ri-eye-line text-6xl mb-6"></i>
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              Viziunea Noastră
            </h1>
            <p className="text-xl text-red-100 max-w-3xl mx-auto mb-8">
              "Să fim o comunitate de tineri creștini care impactează pozitiv societatea 
              prin excelență profesională, integritate morală și serviciu dedicat."
            </p>
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 max-w-2xl mx-auto">
              <h3 className="text-2xl font-bold mb-4">Viziunea 2030</h3>
              <p className="text-red-100">
                Până în 2030, AMiCUS Timișoara va fi recunoscut ca un model de excelență 
                în integrarea credinței creștine cu practica medicală, influențând 
                pozitiv sistemul de sănătate din România.
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Mission Statement */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-8">
              Misiunea Noastră
            </h2>
            <div className="bg-gray-50 rounded-lg p-8">
              <blockquote className="text-xl text-gray-700 italic mb-6">
                "Să formăm și să susținem o comunitate de medici și studenți creștini 
                care să exceleze în profesie, să trăiască conform valorilor biblice 
                și să servească societatea cu dragoste și dedicare."
              </blockquote>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-8">
                <div className="text-center">
                  <div className="w-16 h-16 bg-primary-red rounded-full flex items-center justify-center mx-auto mb-4">
                    <i className="ri-user-star-line text-2xl text-white"></i>
                  </div>
                  <h3 className="font-semibold text-gray-900 mb-2">Formare</h3>
                  <p className="text-gray-600">Dezvoltăm lideri creștini în medicină</p>
                </div>
                <div className="text-center">
                  <div className="w-16 h-16 bg-primary-red rounded-full flex items-center justify-center mx-auto mb-4">
                    <i className="ri-trophy-line text-2xl text-white"></i>
                  </div>
                  <h3 className="font-semibold text-gray-900 mb-2">Excelență</h3>
                  <p className="text-gray-600">Urmărim performanța de înalt nivel</p>
                </div>
                <div className="text-center">
                  <div className="w-16 h-16 bg-primary-red rounded-full flex items-center justify-center mx-auto mb-4">
                    <i className="ri-hand-heart-line text-2xl text-white"></i>
                  </div>
                  <h3 className="font-semibold text-gray-900 mb-2">Serviciu</h3>
                  <p className="text-gray-600">Servim comunitatea cu dragoste</p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Vision Pillars */}
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
              Pilonii Viziunii Noastre
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Patru domenii fundamentale care susțin viziunea noastră pe termen lung
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {visionPillars.map((pillar, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-white rounded-lg p-8 shadow-lg hover:shadow-xl transition-shadow duration-200"
              >
                <div className="flex items-center mb-6">
                  <div className="w-16 h-16 bg-primary-red rounded-full flex items-center justify-center mr-4">
                    <i className={`${pillar.icon} text-2xl text-white`}></i>
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900">{pillar.title}</h3>
                </div>
                <p className="text-gray-600 mb-6">{pillar.description}</p>
                <div>
                  <h4 className="font-semibold text-gray-900 mb-3">Obiective:</h4>
                  <ul className="space-y-2">
                    {pillar.goals.map((goal, goalIndex) => (
                      <li key={goalIndex} className="flex items-center text-gray-600">
                        <i className="ri-check-line text-primary-red mr-2"></i>
                        {goal}
                      </li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Strategic Goals Timeline */}
      <section className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Planul Strategic 2024-2030
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Roadmap-ul nostru către realizarea viziunii pe termen lung
            </p>
          </motion.div>

          <div className="space-y-8">
            {strategicGoals.map((goal, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
                className={`flex items-center space-x-8 ${index % 2 === 1 ? 'flex-row-reverse space-x-reverse' : ''}`}
              >
                <div className="flex-shrink-0 w-24 h-24 bg-primary-red rounded-full flex items-center justify-center">
                  <span className="text-white font-bold text-lg">{goal.year}</span>
                </div>
                <div className="flex-1 bg-gray-50 rounded-lg p-6">
                  <div className="flex items-center justify-between mb-4">
                    <h3 className="text-xl font-bold text-gray-900">{goal.title}</h3>
                    <span className={`px-3 py-1 rounded-full text-sm font-medium ${
                      goal.status === 'in-progress' ? 'bg-yellow-100 text-yellow-800' :
                      goal.status === 'planned' ? 'bg-blue-100 text-blue-800' :
                      'bg-purple-100 text-purple-800'
                    }`}>
                      {goal.status === 'in-progress' ? 'În Progres' :
                       goal.status === 'planned' ? 'Planificat' : 'Viziune'}
                    </span>
                  </div>
                  <ul className="space-y-2">
                    {goal.objectives.map((objective, objIndex) => (
                      <li key={objIndex} className="flex items-center text-gray-600">
                        <i className="ri-arrow-right-line text-primary-red mr-2"></i>
                        {objective}
                      </li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Core Values */}
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
              Valorile Noastre Fundamentale
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Principiile biblice care ne ghidează în toate activitățile
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {values.map((value, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-white rounded-lg p-6 shadow-lg text-center hover:shadow-xl transition-shadow duration-200"
              >
                <h3 className="text-xl font-bold text-gray-900 mb-3">{value.title}</h3>
                <p className="text-gray-600 mb-4">{value.description}</p>
                <div className="bg-primary-red/10 rounded-lg p-3">
                  <p className="text-primary-red font-medium text-sm">{value.verse}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-20 bg-primary-red text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <i className="ri-rocket-line text-6xl mb-6"></i>
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Fii Parte din Viziunea Noastră
            </h2>
            <p className="text-xl text-red-100 mb-8 max-w-2xl mx-auto">
              Alătură-te unei comunități care își propune să schimbe lumea prin 
              credință, excelență și serviciu dedicat.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/form"
                className="bg-white text-primary-red px-8 py-4 rounded-lg font-semibold text-lg hover:bg-gray-100 transition-colors duration-200 inline-flex items-center justify-center space-x-2"
              >
                <span>Alătură-te Misiunii</span>
                <i className="ri-user-add-line"></i>
              </Link>
              <Link
                to="/projects"
                className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-white hover:text-primary-red transition-colors duration-200 inline-flex items-center justify-center space-x-2"
              >
                <span>Vezi Proiectele</span>
                <i className="ri-eye-line"></i>
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default VisionPage;
