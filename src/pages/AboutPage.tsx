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

  const coreValues = [
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
              Mai mult decât o comunitate, o asociație studențească sau o oportunitate de dezvoltare. AMiCUS Timișoara e o familie!
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
                AMiCUS Timișoara este o asociație studențească autonomă, apolitică, 
                neguvernamentală și non-profit, constituită la nivel național. 
                Activitatea asociației se concentrează pe construirea unui mediu social 
                propice dezvoltării membrilor și încurajează voluntariatul prin demararea 
                multiplelor proiecte cu impact civic.
              </p>
              <p className="text-lg text-gray-600 mb-6">
                Suntem parte din rețeaua națională AMiCUS, activând în 13 centre universitare 
                din România și Republica Moldova, cu peste 2000 de membri activi. 
                Poți afla mai multe despre AMiCUS la nivel național <a href="https://amicus.ro" target="_blank" rel="noopener noreferrer" className="text-primary-red hover:underline">aici</a>.
              </p>
              
              <div className="bg-primary-red/10 rounded-lg p-6 mb-6">
                <h3 className="text-2xl font-bold text-gray-900 mb-4">Misiunea Noastră</h3>
                <p className="text-lg text-gray-700 font-semibold italic">
                  "Într-o societate fără reper, ne dorim să fim lumină!"
                </p>
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
                <strong>Prietenii de calitate, proiecte cu impact, asumarea valorilor și un stil de viață diferit.</strong>
              </blockquote>
              <p className="text-gray-700 mb-4">
                Prin activitățile noastre ne propunem să oferim atât membrilor, cât și participanților ocazii unice de dezvoltare și conștientizare. 
                Muncim ca o echipă pentru a aduce valorile de ieri în lumea de azi!
              </p>
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

      {/* Vision Section */}
      <section className="py-20 bg-primary-red text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <i className="ri-eye-line text-6xl mb-6"></i>
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Viziunea Noastră
            </h2>
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

      {/* Core Values */}
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
              Valorile Noastre Fundamentale
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Principiile biblice care ne ghidează în toate activitățile
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {coreValues.map((value, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-gray-50 rounded-lg p-6 shadow-lg text-center hover:shadow-xl transition-shadow duration-200"
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
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="prose prose-lg max-w-none text-gray-700 leading-relaxed"
          >
            <p className="mb-6">
              Studenția anilor '90 a fost marcată de o puternică perioadă de tranziție între două regimuri politice total diferite, 
              între libertate și povara ei, între oportunități și visuri fără de sfârșit. În toată această dorință de a atinge 
              excelența și performanța academică, studenții n-au uitat niciodată ce contează cu adevărat: omul. Omul în toată 
              splendoarea și decăderea lui. Omul ca întreg. Omul ca prieten... Și așa a luat naștere AMiCUS.
            </p>
            
            <p className="mb-6">
              Apariția AMiCUS-ului are la bază preocuparea unui grup de studenți ieșeni pentru întărirea relațiilor interumane, 
              fundamentate pe valorile moralei creștine și pe promovarea unor principii de viață sănătoase pentru trup, minte și suflet. 
              Aceste idei s-au convertit în scopuri ale asociației.
            </p>
            
            <p className="mb-6">
              Actele oficiale consemnează ziua de <strong>7 aprilie 1993</strong> drept data de înființare a asociației studențești 
              non-guvernamentale, non-profit și apolitice AMiCUS, acronim de la <em>Adventist Ministry for International College and University Students</em>. 
              Astfel, în 1993, AMiCUS International ajungea în România.
            </p>
            
            <p className="mb-6">
              Cu un puternic impact la nivel național, AMiCUS se răspândește ușor și în celelalte centre universitare: 
              București, Craiova, Brașov, Timișoara și așa mai departe.
            </p>
            
            <p className="mb-6">
              <strong>AMiCUS Timișoara</strong>, după mai bine de un sfert de veac, continuă să îndeplinească misiunea ce i-a fost încredințată. 
              În prezent, activitatea filialei se axează pe direcțiile: dezvoltare multilaterală, implicare în comunitate și nevoile ei, 
              transmiterea de valori și sprijinirea atât a membrilor, cât și a tuturor semenilor.
            </p>
            
            <p className="mb-6">
              Continuând proiectele tradiție (<strong>Orășelul Copiilor, Zi de bine, proiecte educaționale și seminare, proiecte sociale, 
              campionate sportive, excursii</strong>), bucurându-ne mereu de noi idei și șanse de reîntâlnire (<strong>clubul de carte Bibliophile, 
              Crosul Caritabil Alerg pentru mama, Campania de Donare de sânge Picătura de Viață, Podcastul Conceptum, Lecții de Zbor pentru Boboci, 
              TedTalks, De vorbă cu capelanul, activități recreative, concerte caritabile</strong> sub numele <em>Inima a fost dată împreună cu darul</em>), 
              privind cu admirație spre ideile specifice fiecărei generații în parte (<strong>Clubul Meteora, proiectul Pași spre cer, XChange, H2O pentru S2</strong> etc.), 
              suntem gata întotdeuna să ne unim forțele și să spunem <strong><em>Iată-mă, trimite-mă!</em></strong>
            </p>
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
              Alătură-te unei comunități ce are la bază credința, nădejdea și prietenia!
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

export { AboutPage as default };
