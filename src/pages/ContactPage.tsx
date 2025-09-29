import { motion } from 'framer-motion';
import { useState } from 'react';
import { toast } from 'sonner';
import Footer from '../components/Footer';

export const ContactPage = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: '',
    category: 'general'
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Here you would typically send the form data to your backend
    console.log('Form submitted:', formData);
    toast.success('Mesajul a fost trimis cu succes! Vă vom răspunde în curând.');
    
    // Reset form
    setFormData({
      name: '',
      email: '',
      phone: '',
      subject: '',
      message: '',
      category: 'general'
    });
  };

  const contactInfo = [
    {
      icon: 'ri-map-pin-line',
      title: 'Adresa',
      details: [
        'Str. Piața Alexandru Mocioni 7',
        'Timișoara, România'
      ],
      action: 'Vezi pe Hartă'
    },
    {
      icon: 'ri-time-line',
      title: 'Program Întâlniri',
      details: [
        'Joi ora 20:00',
        'Duminică ora 18:00 (Rugăciune)'
      ],
      action: 'Vezi Calendar'
    },
    {
      icon: 'ri-mail-line',
      title: 'Email',
      details: [
        'contact@amicus-timisoara.ro',
        'leadership@amicus-timisoara.ro'
      ],
      action: 'Trimite Email'
    },
    {
      icon: 'ri-phone-line',
      title: 'Telefon',
      details: [
        '+40 123 456 789',
        '+40 987 654 321'
      ],
      action: 'Sună Acum'
    }
  ];

  const socialLinks = [
    {
      name: 'Facebook',
      icon: 'ri-facebook-fill',
      url: 'https://facebook.com/amicus.timisoara',
      color: 'bg-blue-600 hover:bg-blue-700'
    },
    {
      name: 'Instagram',
      icon: 'ri-instagram-line',
      url: 'https://instagram.com/amicii.timisoara',
      color: 'bg-pink-600 hover:bg-pink-700'
    },
    {
      name: 'YouTube',
      icon: 'ri-youtube-fill',
      url: 'https://youtube.com/@amicustimisoara',
      color: 'bg-red-600 hover:bg-red-700'
    },
    {
      name: 'LinkedIn',
      icon: 'ri-linkedin-fill',
      url: 'https://linkedin.com/company/amicus-timisoara',
      color: 'bg-blue-700 hover:bg-blue-800'
    }
  ];

  const faqItems = [
    {
      question: 'Cum mă pot alătura comunității AMiCUS?',
      answer: 'Poți să te alături completând formularul de înscriere de pe site-ul nostru sau venind direct la una dintre întâlnirile noastre săptămânale.'
    },
    {
      question: 'Trebuie să fiu student la medicină pentru a participa?',
      answer: 'Nu neapărat! Deși ne concentrăm pe medici și studenți la medicină, primim cu brațele deschise pe oricine dorește să facă parte din comunitatea noastră creștină.'
    },
    {
      question: 'Ce activități organizați?',
      answer: 'Organizăm întâlniri săptămânale, conferințe, proiecte sociale, activități de voluntariat, studii biblice și multe altele.'
    },
    {
      question: 'Cum pot să mă implic în proiectele sociale?',
      answer: 'Contactează-ne prin email sau vino la o întâlnire pentru a afla despre oportunitățile de voluntariat și proiectele în desfășurare.'
    }
  ];

  const teamMembers = [
    {
      name: 'Dr. Maria Popescu',
      role: 'Președinte',
      email: 'maria.popescu@amicus-timisoara.ro',
      phone: '+40 123 456 789'
    },
    {
      name: 'Andrei Popescu',
      role: 'Vicepreședinte',
      email: 'andrei.popescu@amicus-timisoara.ro',
      phone: '+40 987 654 321'
    },
    {
      name: 'Elena Dumitrescu',
      role: 'Coordonator Proiecte',
      email: 'elena.dumitrescu@amicus-timisoara.ro',
      phone: '+40 555 666 777'
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
            <i className="ri-customer-service-line text-6xl mb-6"></i>
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              Contactează-ne
            </h1>
            <p className="text-xl text-red-100 max-w-2xl mx-auto">
              Suntem aici să răspundem la întrebările tale și să te ajutăm să te 
              alături comunității noastre. Nu ezita să ne scrii!
            </p>
          </motion.div>
        </div>
      </section>

      {/* Contact Information */}
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
              Informații de Contact
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Găsește-ne și conectează-te cu noi prin multiple canale
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {contactInfo.map((info, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-gray-50 rounded-lg p-6 text-center hover:shadow-lg transition-shadow duration-200"
              >
                <div className="w-16 h-16 bg-primary-red rounded-full flex items-center justify-center mx-auto mb-4">
                  <i className={`${info.icon} text-2xl text-white`}></i>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">{info.title}</h3>
                <div className="space-y-1 mb-4">
                  {info.details.map((detail, detailIndex) => (
                    <p key={detailIndex} className="text-gray-600">{detail}</p>
                  ))}
                </div>
                <button className="text-primary-red font-medium hover:text-red-700 transition-colors duration-200">
                  {info.action}
                </button>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Form */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Trimite-ne un Mesaj
            </h2>
            <p className="text-lg text-gray-600">
              Completează formularul de mai jos și îți vom răspunde în cel mai scurt timp
            </p>
          </motion.div>

          <motion.form
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            onSubmit={handleSubmit}
            className="bg-white rounded-lg shadow-lg p-8"
          >
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                  Nume Complet *
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleInputChange}
                  required
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-red focus:border-transparent transition-colors duration-200"
                  placeholder="Introduceți numele complet"
                />
              </div>
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                  Email *
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  required
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-red focus:border-transparent transition-colors duration-200"
                  placeholder="exemplu@email.com"
                />
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
              <div>
                <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-2">
                  Telefon
                </label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  value={formData.phone}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-red focus:border-transparent transition-colors duration-200"
                  placeholder="+40 123 456 789"
                />
              </div>
              <div>
                <label htmlFor="category" className="block text-sm font-medium text-gray-700 mb-2">
                  Categoria
                </label>
                <select
                  id="category"
                  name="category"
                  value={formData.category}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-red focus:border-transparent transition-colors duration-200"
                >
                  <option value="general">Întrebare Generală</option>
                  <option value="membership">Înscriere Membru</option>
                  <option value="volunteer">Voluntariat</option>
                  <option value="partnership">Parteneriat</option>
                  <option value="media">Media & Presă</option>
                </select>
              </div>
            </div>

            <div className="mb-6">
              <label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-2">
                Subiect *
              </label>
              <input
                type="text"
                id="subject"
                name="subject"
                value={formData.subject}
                onChange={handleInputChange}
                required
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-red focus:border-transparent transition-colors duration-200"
                placeholder="Subiectul mesajului"
              />
            </div>

            <div className="mb-8">
              <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                Mesaj *
              </label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleInputChange}
                required
                rows={6}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-red focus:border-transparent transition-colors duration-200 resize-vertical"
                placeholder="Scrie mesajul tău aici..."
              />
            </div>

            <div className="text-center">
              <button
                type="submit"
                className="bg-primary-red text-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-red-700 transition-colors duration-200 inline-flex items-center space-x-2"
              >
                <span>Trimite Mesajul</span>
                <i className="ri-send-plane-line"></i>
              </button>
            </div>
          </motion.form>
        </div>
      </section>

      {/* Social Media */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              Urmărește-ne pe Social Media
            </h2>
            <p className="text-lg text-gray-600 mb-8">
              Rămâi conectat cu noi și află ultimele noutăți despre activitățile comunității
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              {socialLinks.map((social, index) => (
                <motion.a
                  key={index}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className={`${social.color} text-white px-6 py-3 rounded-lg font-medium transition-colors duration-200 inline-flex items-center space-x-2`}
                >
                  <i className={social.icon}></i>
                  <span>{social.name}</span>
                </motion.a>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Întrebări Frecvente
            </h2>
            <p className="text-lg text-gray-600">
              Răspunsuri la cele mai comune întrebări despre AMiCUS Timișoara
            </p>
          </motion.div>

          <div className="space-y-6">
            {faqItems.map((faq, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-white rounded-lg shadow-lg p-6"
              >
                <h3 className="text-xl font-bold text-gray-900 mb-3">
                  {faq.question}
                </h3>
                <p className="text-gray-600">
                  {faq.answer}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Team Contact */}
      <section className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Contactează Echipa de Leadership
            </h2>
            <p className="text-lg text-gray-600">
              Pentru întrebări specifice, poți contacta direct membrii echipei noastre
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {teamMembers.map((member, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-gray-50 rounded-lg p-6 text-center"
              >
                <div className="w-20 h-20 bg-primary-red rounded-full flex items-center justify-center mx-auto mb-4">
                  <i className="ri-user-line text-3xl text-white"></i>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">{member.name}</h3>
                <p className="text-primary-red font-medium mb-4">{member.role}</p>
                <div className="space-y-2">
                  <a
                    href={`mailto:${member.email}`}
                    className="block text-gray-600 hover:text-primary-red transition-colors duration-200"
                  >
                    <i className="ri-mail-line mr-2"></i>
                    {member.email}
                  </a>
                  <a
                    href={`tel:${member.phone}`}
                    className="block text-gray-600 hover:text-primary-red transition-colors duration-200"
                  >
                    <i className="ri-phone-line mr-2"></i>
                    {member.phone}
                  </a>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default ContactPage;
