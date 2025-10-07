import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import {Footer} from '../components/Footer';
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
      description: 'Încurajăm performanța academică și profesională în toate domeniile de studiu.'
    },
    {
      icon: 'ri-hand-heart-line',
      title: 'Serviciul',
      description: 'Servim comunitatea prin proiecte sociale și activități de voluntariat.'
    }
  ];

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

  const departments = [
    {
      name: 'Președinte',
      description: 'Elaborează și urmărește viziunea de ansamblu, reprezintă filiala în fața bisericii și a altor instituții, convocă și conduce ședințele comitetului.',
      icon: 'ri-user-star-line'
    },
    {
      name: 'Departamentul Administrativ',
      description: 'Ține evidența membrilor, comunică anunțurile organizatorice, se ocupă de fonduri și cheltuieli, întocmește bugetul anual.',
      icon: 'ri-file-list-3-line'
    },
    {
      name: 'Departamentul Marketing și Relații Publice',
      description: 'Păstrează și promovează identitatea vizuală, menține legătura cu presa, coordonează campaniile de promovare.',
      icon: 'ri-megaphone-line'
    },
    {
      name: 'Departamentul Spiritual',
      description: 'Propune și coordonează activități care să promoveze valorile moral-creștine, oferă sprijin studenților care au nevoie de îndrumare.',
      icon: 'ri-book-read-line'
    },
    {
      name: 'Departamentul de Resurse Umane',
      description: 'Coordonează activitatea voluntarilor, propune strategii de atragere de noi membri, organizează activități de părtășie.',
      icon: 'ri-team-line'
    },
    {
      name: 'Departamentul Cultural',
      description: 'Dezvoltă programe culturale de calitate, întreține relații cu organizațiile culturale, mediatizează programele culturale.',
      icon: 'ri-palette-line'
    },
    {
      name: 'Departamentul Social',
      description: 'Organizează acțiuni de responsabilitate socială, identifică oportunitățile de implicare în proiecte locale cu persoane defavorizate.',
      icon: 'ri-heart-line'
    },
    {
      name: 'Departamentul de Activități Recreative',
      description: 'Asigură momente de destindere și cunoaștere, organizează ieșiri în aer liber, excursii, concursuri, tabere.',
      icon: 'ri-gamepad-line'
    },
    {
      name: 'Departamentul de Coordonare a Proiectelor',
      description: 'Concepe și implementează proiecte pe termen scurt și lung, gestionează buna desfășurare a proiectelor mari.',
      icon: 'ri-lightbulb-line'
    },
    {
      name: 'Capelanul',
      description: 'Oferă consiliere și călăuzire specifică fiecărui student, asistă în plănuirea programelor spirituale și sociale.',
      icon: 'ri-user-heart-line'
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
              O asociație studențească înființată de studenți, membrii ai Bisericii Adventiste de Ziua a Șaptea, 
              deschisă pentru orice student care-și asumă viziunea, misiunea și valorile asociației.
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
                Despre Noi
              </h2>
              <p className="text-lg text-gray-600 mb-6">
                AMiCUS Timișoara este o asociație studențească înființată de studenți, membrii ai Bisericii Adventiste de Ziua a Șaptea. 
                Ea continuă să-și desfășoare activitatea ca asociație studențească fiind deschisă pentru orice student 
                care-și asumă viziunea, misiunea și valorile asociației. Oferim membrilor noștri ocazia de a aparține 
                unui grup cu preocupări similare, în care să-și împlinească nevoile relaționale.
              </p>
              <p className="text-lg text-gray-600 mb-6">
                Suntem parte din rețeaua națională AMiCUS, activând în 13 centre universitare 
                din România și Republica Moldova, cu peste 2000 de membri activi. 
                Poți afla mai multe despre AMiCUS la nivel național <a href="https://amicus.ro" target="_blank" rel="noopener noreferrer" className="text-primary-red hover:underline">aici</a>.
              </p>
              
              <div className="bg-primary-red/10 rounded-lg p-6 mb-6">
                <h3 className="text-2xl font-bold text-gray-900 mb-4">Misiunea Noastră</h3>
                <ul className="text-gray-700 space-y-2">
                  <li className="flex items-start"><span className="text-primary-red mr-2">✓</span>Să oferim membrilor noștri ocazia de a aparține unui grup cu preocupări similare</li>
                  <li className="flex items-start"><span className="text-primary-red mr-2">✓</span>Să promovăm creșterea spirituală și intelectuală</li>
                  <li className="flex items-start"><span className="text-primary-red mr-2">✓</span>Să încurajăm implicarea în proiecte comunitare și evanghelistice</li>
                  <li className="flex items-start"><span className="text-primary-red mr-2">✓</span>Să oferim asistență în orientarea și formarea profesională</li>
                  <li className="flex items-start"><span className="text-primary-red mr-2">✓</span>Să asigurăm un cadru pentru împlinirea culturală, religiosă, artistică și sportivă</li>
                </ul>
              </div>
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
              <blockquote className="text-lg text-gray-700 mb-4">
                <strong>Să oferim membrilor noștri ocazia de a aparține unui grup cu preocupări similare și să promovăm creșterea spirituală și intelectuală.</strong>
              </blockquote>
              <p className="text-gray-700 mb-4">
                Ne propunem să încurajăm membrii să se implice atât individual cât și ca grup în proiecte comunitare și evanghelistice, 
                să oferim asistență în orientarea și formarea profesională și să asigurăm un cadru specific pentru împlinirea culturală, religiosă, artistică și sportivă.
              </p>
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
              Structura Organizațională
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Comitetul de Conducere al Filialei AMiCUS conform Regulamentului de Ordine Interioară
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

      {/* History Section */}
      <section className="py-20 bg-gradient-to-br from-gray-50 to-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Povestea Noastră
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              O călătorie de peste 30 de ani în slujba studenților și a comunității
            </p>
          </motion.div>

          {/* Timeline */}
          <div className="relative">
            {/* Timeline Line */}
            <div className="absolute left-1/2 transform -translate-x-1/2 w-1 bg-primary-red h-full hidden lg:block"></div>
            
            {/* Timeline Items */}
            <div className="space-y-8">
              {/* 1990s - Origins */}
              <motion.div
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
                className="lg:flex lg:items-center lg:space-x-8"
              >
                <div className="lg:w-1/2 lg:text-right">
                  <div className="bg-white rounded-lg shadow-lg p-6 mb-4 lg:mb-0">
                    <div className="flex items-center mb-4 lg:justify-end">
                      <div className="w-12 h-12 bg-primary-red rounded-full flex items-center justify-center mr-4 lg:mr-0 lg:ml-4 lg:order-2">
                        <i className="ri-time-line text-xl text-white"></i>
                      </div>
                      <h3 className="text-xl font-bold text-gray-900 lg:order-1">Anii '90 - Începuturile</h3>
                    </div>
                    <p className="text-gray-600 leading-relaxed">
                      Studenția anilor '90 a fost marcată de o puternică perioadă de tranziție. În toată această dorință de a atinge 
                      excelența și performanța academică, studenții n-au uitat niciodată ce contează cu adevărat: <strong>omul</strong>. 
                      Omul ca prieten... Și așa a luat naștere AMiCUS.
                    </p>
                  </div>
                </div>
                <div className="hidden lg:block lg:w-8 lg:flex-shrink-0 lg:relative">
                  <div className="w-4 h-4 bg-primary-red rounded-full absolute left-1/2 transform -translate-x-1/2"></div>
                </div>
                <div className="lg:w-1/2"></div>
              </motion.div>

              {/* 1993 - Foundation */}
              <motion.div
                initial={{ opacity: 0, x: 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                viewport={{ once: true }}
                className="lg:flex lg:items-center lg:space-x-8"
              >
                <div className="lg:w-1/2"></div>
                <div className="hidden lg:block lg:w-8 lg:flex-shrink-0 lg:relative">
                  <div className="w-4 h-4 bg-primary-red rounded-full absolute left-1/2 transform -translate-x-1/2"></div>
                </div>
                <div className="lg:w-1/2">
                  <div className="bg-white rounded-lg shadow-lg p-6">
                    <div className="flex items-center mb-4">
                      <div className="w-12 h-12 bg-primary-red rounded-full flex items-center justify-center mr-4">
                        <i className="ri-flag-line text-xl text-white"></i>
                      </div>
                      <h3 className="text-xl font-bold text-gray-900">7 Aprilie 1993 - Înființarea</h3>
                    </div>
                    <p className="text-gray-600 leading-relaxed mb-4">
                      Actele oficiale consemnează această zi drept data de înființare a asociației studențești 
                      non-guvernamentale, non-profit și apolitice AMiCUS.
                    </p>
                    <div className="bg-primary-red/10 rounded-lg p-3">
                      <p className="text-sm text-primary-red font-medium">
                        <em>Adventist Ministry for International College and University Students</em>
                      </p>
                    </div>
                  </div>
                </div>
              </motion.div>

              {/* Expansion */}
              <motion.div
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.4 }}
                viewport={{ once: true }}
                className="lg:flex lg:items-center lg:space-x-8"
              >
                <div className="lg:w-1/2 lg:text-right">
                  <div className="bg-white rounded-lg shadow-lg p-6 mb-4 lg:mb-0">
                    <div className="flex items-center mb-4 lg:justify-end">
                      <div className="w-12 h-12 bg-primary-red rounded-full flex items-center justify-center mr-4 lg:mr-0 lg:ml-4 lg:order-2">
                        <i className="ri-map-line text-xl text-white"></i>
                      </div>
                      <h3 className="text-xl font-bold text-gray-900 lg:order-1">Expansiunea Națională</h3>
                    </div>
                    <p className="text-gray-600 leading-relaxed">
                      Cu un puternic impact la nivel național, AMiCUS se răspândește în celelalte centre universitare: 
                      <strong>București, Craiova, Brașov, Timișoara</strong> și multe altele.
                    </p>
                  </div>
                </div>
                <div className="hidden lg:block lg:w-8 lg:flex-shrink-0 lg:relative">
                  <div className="w-4 h-4 bg-primary-red rounded-full absolute left-1/2 transform -translate-x-1/2"></div>
                </div>
                <div className="lg:w-1/2"></div>
              </motion.div>

              {/* Present Day */}
              <motion.div
                initial={{ opacity: 0, x: 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.6 }}
                viewport={{ once: true }}
                className="lg:flex lg:items-center lg:space-x-8"
              >
                <div className="lg:w-1/2"></div>
                <div className="hidden lg:block lg:w-8 lg:flex-shrink-0 lg:relative">
                  <div className="w-4 h-4 bg-primary-red rounded-full absolute left-1/2 transform -translate-x-1/2"></div>
                </div>
                <div className="lg:w-1/2">
                  <div className="bg-white rounded-lg shadow-lg p-6">
                    <div className="flex items-center mb-4">
                      <div className="w-12 h-12 bg-primary-red rounded-full flex items-center justify-center mr-4">
                        <i className="ri-heart-line text-xl text-white"></i>
                      </div>
                      <h3 className="text-xl font-bold text-gray-900">AMiCUS Timișoara Astăzi</h3>
                    </div>
                    <p className="text-gray-600 leading-relaxed mb-4">
                      După mai bine de un sfert de veac, continuăm să îndeplinim misiunea ce ne-a fost încredințată. 
                      Activitatea noastră se axează pe: <strong>dezvoltare multilaterală, implicare în comunitate și transmiterea de valori</strong>.
                    </p>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>

          {/* Projects Showcase */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.8 }}
            viewport={{ once: true }}
            className="mt-16"
          >
            <div className="text-center mb-12">
              <h3 className="text-3xl font-bold text-gray-900 mb-4">
                Proiectele Noastre
              </h3>
              <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                De-a lungul anilor, am dezvoltat o gamă variată de proiecte care au marcat generații de studenți
              </p>
            </div>
            
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
              {/* Traditional Projects */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.1 }}
                viewport={{ once: true }}
                className="bg-gradient-to-br from-primary-red to-red-700 rounded-2xl p-6 text-white relative overflow-hidden"
              >
                <div className="absolute top-0 right-0 w-32 h-32 bg-white/10 rounded-full transform translate-x-16 -translate-y-16"></div>
                <div className="relative z-10">
                  <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center mb-4">
                    <i className="ri-trophy-line text-3xl text-white"></i>
                  </div>
                  <h4 className="text-xl font-bold mb-3">Proiecte Tradiție</h4>
                  <p className="text-red-100 mb-4 text-sm">
                    Proiectele care au definit identitatea AMiCUS de-a lungul anilor
                  </p>
                  <div className="space-y-2">
                    {['Orășelul Copiilor', 'Zi de bine', 'Proiecte educaționale', 'Seminare', 'Campionate sportive'].map((project, index) => (
                      <div key={index} className="flex items-center text-sm">
                        <i className="ri-check-line mr-2 text-red-200"></i>
                        <span className="text-red-100">{project}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </motion.div>

              {/* New Initiatives */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                viewport={{ once: true }}
                className="bg-gradient-to-br from-blue-500 to-blue-700 rounded-2xl p-6 text-white relative overflow-hidden"
              >
                <div className="absolute top-0 right-0 w-32 h-32 bg-white/10 rounded-full transform translate-x-16 -translate-y-16"></div>
                <div className="relative z-10">
                  <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center mb-4">
                    <i className="ri-lightbulb-line text-3xl text-white"></i>
                  </div>
                  <h4 className="text-xl font-bold mb-3">Inițiative Noi</h4>
                  <p className="text-blue-100 mb-4 text-sm">
                    Proiecte inovatoare care răspund nevoilor actuale ale comunității
                  </p>
                  <div className="space-y-2">
                    {['Bibliophile', 'Alerg pentru mama', 'Picătura de Viață', 'Conceptum', 'Lecții de Zbor'].map((project, index) => (
                      <div key={index} className="flex items-center text-sm">
                        <i className="ri-check-line mr-2 text-blue-200"></i>
                        <span className="text-blue-100">{project}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </motion.div>

              {/* Mission Statement */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.3 }}
                viewport={{ once: true }}
                className="bg-gradient-to-br from-gray-800 to-gray-900 rounded-2xl p-6 text-white relative overflow-hidden flex flex-col justify-center"
              >
                <div className="absolute top-0 right-0 w-32 h-32 bg-white/5 rounded-full transform translate-x-16 -translate-y-16"></div>
                <div className="relative z-10 text-center">
                  <div className="w-16 h-16 bg-white/10 rounded-full flex items-center justify-center mb-6 mx-auto">
                    <i className="ri-heart-line text-3xl text-white"></i>
                  </div>
                  <blockquote className="text-2xl font-bold mb-4 italic">
                    "Iată-mă, trimite-mă!"
                  </blockquote>
                  <p className="text-gray-300 text-sm mb-4">
                    Motto-ul care ne ghidează în fiecare proiect și inițiativă
                  </p>
                </div>
              </motion.div>
            </div>
            
            {/* Additional Projects - Simple List */}
            <div className="mt-12 bg-white rounded-lg shadow-sm p-6">
              <h4 className="text-lg font-semibold text-gray-900 mb-4 text-center">
                Alte Proiecte și Activități
              </h4>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {[
                  { 
                    name: 'TedTalks', 
                    icon: 'ri-presentation-line',
                    description: 'Prezentări inspiraționale și educaționale'
                  },
                  { 
                    name: 'De vorbă cu capelanul', 
                    icon: 'ri-chat-3-line',
                    description: 'Sesiuni de consiliere și îndrumare spirituală'
                  },
                  { 
                    name: 'Activități recreative', 
                    icon: 'ri-gamepad-line',
                    description: 'Jocuri, concursuri și activități de relaxare'
                  },
                  { 
                    name: 'Concerte caritabile', 
                    icon: 'ri-music-line',
                    description: 'Evenimente muzicale cu scop caritabil'
                  }
                ].map((project, index) => (
                  <div
                    key={index}
                    className="flex items-start space-x-3 p-3 bg-gray-50 rounded-lg"
                  >
                    <div className="w-8 h-8 bg-primary-red rounded-lg flex items-center justify-center flex-shrink-0 mt-0.5">
                      <i className={`${project.icon} text-sm text-white`}></i>
                    </div>
                    <div>
                      <h5 className="text-sm font-medium text-gray-900 mb-1">
                        {project.name}
                      </h5>
                      <p className="text-xs text-gray-600">
                        {project.description}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>
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
              Alătură-te unei comunități ce are la bază credința, dezvoltarea și prietenia!
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

