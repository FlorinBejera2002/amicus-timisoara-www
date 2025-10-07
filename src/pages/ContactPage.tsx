import { motion } from 'framer-motion';
import { useState } from 'react';
import { toast } from 'sonner';
import {Footer} from '../components/Footer';

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
      ]
    },
    {
      icon: 'ri-mail-line',
      title: 'Email',
      details: [
        'aamicustimisoara@gmail.com'
      ] 
    },
    {
      icon: 'ri-phone-line',
      title: 'Telefon',
      details: [
        'Președinte: 0758948440',
        'Capelan: +40 768 096 881'
      ]
    },
  ];

  const socialLinks = [
    {
      name: 'Facebook',
      icon: 'ri-facebook-fill',
      url: 'https://facebook.com/amicus.timisoara',
      color: 'bg-blue-600 hover:bg-blue-700',
      description: 'Urmărește-ne pentru actualizări zilnice'
    },
    {
      name: 'Instagram',
      icon: 'ri-instagram-line',
      url: 'https://instagram.com/amicus.timisoara',
      color: 'bg-pink-600 hover:bg-pink-700',
      description: 'Fotografii de la evenimentele noastre'
    },
    {
      name: 'YouTube',
      icon: 'ri-youtube-fill',
      url: 'https://youtube.com/@amicustimisoara',
      color: 'bg-red-600 hover:bg-red-700',
      description: 'Predici și prezentări video'
    }
  ];

  const faqItems = [
    {
      question: 'Cum mă pot alătura comunității AMiCUS?',
      answer: 'Poți să te alături completând formularul de înscriere sau venind direct la întâlnirile noastre de joi seara, ora 20:00, la Piața Mocioni 7. Suntem o asociație studențească deschisă pentru orice student care-și asumă viziunea, misiunea și valorile noastre.'
    },
    {
      question: 'Ce activități organizați?',
      answer: 'Întâlniri săptămânale de joi seara, drumeții, serate recreative, ieșiri culturale, proiecte comunitare și evanghelistice, activități de dezvoltare spirituală și intelectuală.'
    },
    {
      question: 'Care este misiunea AMiCUS Timișoara?',
      answer: 'Să oferim membrilor noștri ocazia de a aparține unui grup cu preocupări similare, să promovăm valorile moral-creștine și să asigurăm un cadru pentru împlinirea culturală, religiosă, artistică și sportivă.'
    },
    {
      question: 'Trebuie să fiu membru al Bisericii Adventiste?',
      answer: 'AMiCUS este o asociație studențească înființată de studenți membri ai Bisericii Adventiste, dar este deschisă pentru orice student care-și asumă viziunea, misiunea și valorile asociației.'
    },
    {
      question: 'Când și unde au loc întâlnirile?',
      answer: 'Întâlnirile regulate au loc joi seara, între orele 20:00-22:00, la adresa Piața Alexandru Mocioni 7, Timișoara. Verifică secțiunea Evenimente pentru program detaliat.'
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
              Hai să fim prieteni!
            </h1>
            <p className="text-xl text-red-100 max-w-3xl mx-auto">
              Suntem o asociație studențească înființată de studenți adventisti, deschisă pentru 
              orice student care-și asumă viziunea, misiunea și valorile noastre. 
              <span className="block mt-2 font-semibold">Contactează-ne și alătură-te familiei AMiCUS!</span>
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

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {contactInfo.map((info, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-white rounded-xl p-6 text-center shadow-lg transition-shadow duration-200"
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
            className="bg-white rounded-xl shadow-sm p-8"
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
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
              {socialLinks.map((social, index) => (
                <motion.a
                  key={index}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="bg-white rounded-xl p-6 text-center shadow-sm hover:shadow-lg transition-shadow duration-200"
                >
                  <div className={`w-16 h-16 ${social.color} rounded-full flex items-center justify-center mx-auto mb-4`}>
                    <i className={`${social.icon} text-2xl text-white`}></i>
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">{social.name}</h3>
                </motion.a>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Quick Actions CTA */}
      <section className="py-16 bg-primary-red text-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Gata să te alături?
            </h2>
            <p className="text-xl text-red-100 max-w-2xl mx-auto">
              Fă primul pas către o experiență universitară memorabilă
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="bg-white/10 backdrop-blur-sm rounded-xl p-6 text-center hover:bg-white/20 transition-colors duration-200"
            >
              <i className="ri-user-add-line text-4xl mb-4"></i>
              <h3 className="text-xl font-bold mb-2">Înscrie-te</h3>
              <p className="text-red-100 mb-4">Completează formularul și devino membru AMiCUS</p>
              <a 
                href="/form" 
                className="bg-white text-primary-red px-6 py-2 rounded-lg font-semibold hover:bg-gray-100 transition-colors duration-200 inline-block"
              >
                Formular Înscriere
              </a>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              viewport={{ once: true }}
              className="bg-white/10 backdrop-blur-sm rounded-xl p-6 text-center hover:bg-white/20 transition-colors duration-200"
            >
              <i className="ri-calendar-event-line text-4xl mb-4"></i>
              <h3 className="text-xl font-bold mb-2">Vino la întâlniri</h3>
              <p className="text-red-100 mb-4">Joi seara, 20:00-22:00, Piața Mocioni 7</p>
              <a 
                href="/events" 
                className="bg-white text-primary-red px-6 py-2 rounded-lg font-semibold hover:bg-gray-100 transition-colors duration-200 inline-block"
              >
                Vezi Evenimente
              </a>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
              className="bg-white/10 backdrop-blur-sm rounded-xl p-6 text-center hover:bg-white/20 transition-colors duration-200"
            >
              <i className="ri-question-answer-line text-4xl mb-4"></i>
              <h3 className="text-xl font-bold mb-2">Întreabă-ne</h3>
              <p className="text-red-100 mb-4">Scrie-ne direct pentru orice întrebare</p>
              <a 
                href="https://mail.google.com/mail/?view=cm&fs=1&to=aamicustimisoara@gmail.com" 
                className="bg-white text-primary-red px-6 py-2 rounded-lg font-semibold hover:bg-gray-100 transition-colors duration-200 inline-block"
              >
                Trimite Email
              </a>
            </motion.div>
          </div>
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
                className="bg-white rounded-xl shadow-sm p-6"
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


      <Footer />
    </div>
  );
};

