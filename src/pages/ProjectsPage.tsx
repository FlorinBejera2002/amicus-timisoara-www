import { useState } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import {Footer} from '../components/Footer';

export const ProjectsPage = () => {
  const projects = [
    {
      id: 1,
      title: 'Săptămâna Medicală AMiCUS',
      category: 'Educație',
      description: 'O săptămână dedicată educației medicale cu conferințe, workshop-uri și demonstrații practice pentru studenți și profesioniști din domeniul medical.',
      image: 'ri-stethoscope-line',
      status: 'Activ',
      participants: '300+',
      duration: '7 zile',
      impact: 'Educația a peste 300 de studenți și medici'
    },
    {
      id: 2,
      title: 'Campania de Donare de Sânge',
      category: 'Social',
      description: 'Campanie anuală de sensibilizare și donare de sânge în parteneriat cu Centrul de Transfuzie Sanguină Timișoara.',
      image: 'ri-heart-pulse-line',
      status: 'Recurent',
      participants: '150+',
      duration: '2 zile',
      impact: 'Peste 200 de donații de sânge anual'
    },
    {
      id: 3,
      title: 'Tabăra de Vară AMiCUS',
      category: 'Spiritual',
      description: 'Tabără anuală de dezvoltare spirituală și personală pentru tinerii creștini din domeniul medical și nu numai.',
      image: 'ri-tent-line',
      status: 'Anual',
      participants: '80+',
      duration: '5 zile',
      impact: 'Dezvoltarea spirituală a tinerilor'
    },
    {
      id: 4,
      title: 'Proiect Îngrijire Bătrâni',
      category: 'Social',
      description: 'Vizite regulate la căminele de bătrâni pentru a oferi companie, îngrijire și sprijin emoțional vârstnicilor.',
      image: 'ri-parent-line',
      status: 'Activ',
      participants: '40+',
      duration: 'Continuu',
      impact: 'Îngrijirea a peste 100 de vârstnici'
    },
    {
      id: 5,
      title: 'Conferința Națională AMiCUS',
      category: 'Educație',
      description: 'Eveniment anual care reunește toate filialele AMiCUS din țară pentru schimb de experiențe și dezvoltare profesională.',
      image: 'ri-presentation-line',
      status: 'Anual',
      participants: '500+',
      duration: '3 zile',
      impact: 'Networking și dezvoltare națională'
    },
    {
      id: 6,
      title: 'Programul de Mentorat',
      category: 'Dezvoltare',
      description: 'Program de mentorat pentru studenții la medicină, conectându-i cu medici experimentați pentru ghidare profesională.',
      image: 'ri-user-star-line',
      status: 'Activ',
      participants: '60+',
      duration: 'Continuu',
      impact: 'Ghidarea carierei pentru tineri medici'
    }
  ];

  const categories = ['Toate', 'Educație', 'Social', 'Spiritual', 'Dezvoltare'];
  const [selectedCategory, setSelectedCategory] = useState('Toate');

  const filteredProjects = selectedCategory === 'Toate' 
    ? projects 
    : projects.filter(project => project.category === selectedCategory);

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'Activ': return 'bg-green-100 text-green-800';
      case 'Recurent': return 'bg-blue-100 text-blue-800';
      case 'Anual': return 'bg-purple-100 text-purple-800';
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
            <i className="ri-rocket-line text-6xl mb-6"></i>
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              Proiectele Noastre
            </h1>
            <p className="text-xl text-red-100 max-w-3xl mx-auto">
              Descoperă inițiativele prin care AMiCUS Timișoara impactează pozitiv 
              comunitatea medicală și societatea în general
            </p>
          </motion.div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {[
              { number: '15+', label: 'Proiecte Active', icon: 'ri-rocket-line' },
              { number: '1000+', label: 'Beneficiari', icon: 'ri-group-line' },
              { number: '50+', label: 'Voluntari', icon: 'ri-hand-heart-line' },
              { number: '5', label: 'Ani Experiență', icon: 'ri-time-line' }
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
                onClick={() => setSelectedCategory(category)}
                className={`px-6 py-2 rounded-full font-medium transition-colors duration-200 ${
                  selectedCategory === category
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

      {/* Projects Grid */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredProjects.map((project, index) => (
              <motion.div
                key={project.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-200"
              >
                <div className="p-6">
                  <div className="flex items-center justify-between mb-4">
                    <div className="w-12 h-12 bg-primary-red rounded-lg flex items-center justify-center">
                      <i className={`${project.image} text-xl text-white`}></i>
                    </div>
                    <span className={`px-3 py-1 rounded-full text-sm font-medium ${getStatusColor(project.status)}`}>
                      {project.status}
                    </span>
                  </div>
                  
                  <h3 className="text-xl font-bold text-gray-900 mb-2">
                    {project.title}
                  </h3>
                  
                  <p className="text-gray-600 mb-4 line-clamp-3">
                    {project.description}
                  </p>
                  
                  <div className="space-y-2 mb-6">
                    <div className="flex items-center text-sm text-gray-500">
                      <i className="ri-group-line mr-2"></i>
                      <span>{project.participants} participanți</span>
                    </div>
                    <div className="flex items-center text-sm text-gray-500">
                      <i className="ri-time-line mr-2"></i>
                      <span>{project.duration}</span>
                    </div>
                    <div className="flex items-center text-sm text-gray-500">
                      <i className="ri-trophy-line mr-2"></i>
                      <span>{project.impact}</span>
                    </div>
                  </div>
                  
                  <button className="w-full bg-primary-red text-white py-2 px-4 rounded-lg font-medium hover:bg-red-700 transition-colors duration-200">
                    Află Mai Multe
                  </button>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Get Involved Section */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <i className="ri-hand-heart-line text-6xl text-primary-red mb-6"></i>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              Implică-te în Proiectele Noastre
            </h2>
            <p className="text-lg text-gray-600 mb-8 max-w-2xl mx-auto">
              Fiecare proiect are nevoie de voluntari dedicați. Alătură-te echipei noastre 
              și contribuie la impactul pozitiv în comunitate.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/form"
                className="bg-primary-red text-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-red-700 transition-colors duration-200 inline-flex items-center justify-center space-x-2"
              >
                <span>Devino Voluntar</span>
                <i className="ri-user-add-line"></i>
              </Link>
              <Link
                to="/contact"
                className="border-2 border-primary-red text-primary-red px-8 py-4 rounded-lg font-semibold text-lg hover:bg-primary-red hover:text-white transition-colors duration-200 inline-flex items-center justify-center space-x-2"
              >
                <span>Propune un Proiect</span>
                <i className="ri-lightbulb-line"></i>
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

