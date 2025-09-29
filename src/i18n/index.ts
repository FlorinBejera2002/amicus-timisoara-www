import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

const resources = {
  ro: {
    translation: {
      // Navigation
      home: 'Acasă',
      about: 'Despre',
      projects: 'Proiecte',
      events: 'Evenimente',
      book: 'Carte AMiCUS',
      vision: 'Viziune',
      podcast: 'Podcast',
      prayerWall: 'Zidul Rugăciunii',
      contact: 'Contact',
      dashboard: 'Dashboard',
      
      // Hero Section
      heroTitle: 'AMiCUS Timișoara',
      heroSubtitle: 'Asociația Medicilor și Studenților Creștini',
      heroDescription: 'Construim împreună o comunitate de tineri creștini dedicați dezvoltării spirituale și profesionale.',
      joinUs: 'Alătură-te nouă',
      learnMore: 'Află mai multe',
      
      // About Section
      aboutTitle: 'Despre AMiCUS',
      aboutDescription: 'AMiCUS este o asociație studențească autonomă, apolitică, neguvernamentală și non-profit, constituită la nivel național. Activitatea asociației se concentrează pe construirea unui mediu social propice dezvoltării membrilor și încurajează voluntariatul prin demararea multiplelor proiecte cu impact civic.',
      
      // Prayer Wall
      prayerWallTitle: 'Zidul Rugăciunii',
      prayerWallDescription: 'Împărtășește-ți rugăciunile și roagă-te pentru alții',
      addPrayer: 'Adaugă rugăciune',
      prayForThis: 'Roagă-te pentru aceasta',
      prayerTitle: 'Titlu rugăciune',
      prayerContent: 'Conținut rugăciune',
      authorName: 'Numele tău (opțional)',
      anonymous: 'Anonim',
      submit: 'Trimite',
      prayed: 'Te-ai rugat',
      peoplesPrayers: 'persoane s-au rugat',
      
      // Form
      formTitle: 'Înregistrare AMiCUS',
      name: 'Nume & Prenume',
      email: 'Email',
      phone: 'Telefon',
      dateOfBirth: 'Data nașterii',
      address: 'Localitate de proveniență',
      isMember: 'Ești membru al bisericii AZȘ?',
      yes: 'Da',
      no: 'Nu',
      isStudent: 'Ești student?',
      university: 'La ce universitate ești?',
      faculty: 'La ce facultate ești?',
      studyYear: 'În ce an de studiu?',
      department: 'Selectează departamentul în care dorești să te implici',
      
      // Departments
      departments: {
        none: 'Niciun departament',
        recreational: 'Recreativ',
        cultural: 'Cultural',
        social: 'Social',
        projects: 'Proiecte',
        marketing: 'PR & Marketing',
        spiritual: 'Spiritual',
        administrative: 'Administrativ & Economic'
      },
      
      // Messages
      registrationSuccess: '✅ Mulțumim pentru înscriere!',
      registrationError: '❌ Eroare la trimiterea formularului',
      prayerSuccess: '✅ Rugăciunea a fost adăugată!',
      
      // Dashboard
      totalRegistered: 'Total înregistrați',
      totalPaid: 'Total achitat',
      searchPlaceholder: 'Apasă tasta "F"',
      
      // Footer
      footerAddress: 'Str. Piața Alexandru Mocioni 7, Timișoara',
      meetingTime: 'Joi ora 20:00'
    }
  },
  en: {
    translation: {
      // Navigation
      home: 'Home',
      about: 'About',
      projects: 'Projects',
      events: 'Events',
      book: 'AMiCUS Book',
      vision: 'Vision',
      podcast: 'Podcast',
      prayerWall: 'Prayer Wall',
      contact: 'Contact',
      dashboard: 'Dashboard',
      
      // Hero Section
      heroTitle: 'AMiCUS Timișoara',
      heroSubtitle: 'Adventist Ministry to College and University Students',
      heroDescription: 'Building together a community of young Christians dedicated to spiritual and professional development in the medical field',
      joinCommunity: 'Join Our Community',
      discoverMission: 'Discover Our Mission',
      learnMore: 'Learn More',
      
      // About Section
      aboutTitle: 'About AMiCUS',
      aboutDescription: 'AMiCUS is an autonomous, apolitical, non-governmental and non-profit student association, established at national level. The association\'s activity focuses on building a social environment conducive to member development and encourages volunteering through the initiation of multiple projects with civic impact.',
      
      // Prayer Wall
      prayerWallTitle: 'Prayer Wall',
      prayerWallDescription: 'Share your prayers and pray for others',
      addPrayer: 'Add Prayer',
      prayForThis: 'Pray for this',
      prayerTitle: 'Prayer Title',
      prayerContent: 'Prayer Content',
      authorName: 'Your Name (optional)',
      anonymous: 'Anonymous',
      submit: 'Submit',
      prayed: 'You prayed',
      peoplesPrayers: 'people prayed',
      
      // Form
      formTitle: 'AMiCUS Registration',
      name: 'Full Name',
      email: 'Email',
      phone: 'Phone',
      dateOfBirth: 'Date of Birth',
      address: 'City of Origin',
      isMember: 'Are you a member of SDA church?',
      yes: 'Yes',
      no: 'No',
      isStudent: 'Are you a student?',
      university: 'Which university are you at?',
      faculty: 'Which faculty are you at?',
      studyYear: 'What year of study?',
      department: 'Select the department you want to get involved in',
      
      // Departments
      departments: {
        none: 'No department',
        recreational: 'Recreational',
        cultural: 'Cultural',
        social: 'Social',
        projects: 'Projects',
        marketing: 'PR & Marketing',
        spiritual: 'Spiritual',
        administrative: 'Administrative & Economic'
      },
      
      // Messages
      registrationSuccess: '✅ Thank you for registration!',
      registrationError: '❌ Error submitting form',
      prayerSuccess: '✅ Prayer has been added!',
      prayerError: '❌ Error adding prayer',
      
      // Dashboard
      totalRegistered: 'Total Registered',
      totalPaid: 'Total Paid',
      searchPlaceholder: 'Press "F" key',
      
      // Footer
      followUs: 'Follow Us',
      footerAddress: 'Alexandru Mocioni Square 7, Timișoara',
      meetingTime: 'Thursday 8:00 PM'
    }
  }
};

i18n
  .use(initReactI18next)
  .init({
    resources,
    lng: 'ro', // default language
    fallbackLng: 'ro',
    interpolation: {
      escapeValue: false
    }
  });

export default i18n;
