import { createClient } from '@supabase/supabase-js';
import { Toaster, toast } from 'sonner';
import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {Footer} from '../components/Footer';

// Create Supabase client instance once to avoid multiple instances
const supabaseUrl = 'https://simjdwskdosbmenaqhzd.supabase.co';
const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InNpbWpkd3NrZG9zYm1lbmFxaHpkIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NTk0NzgwNDQsImV4cCI6MjA3NTA1NDA0NH0.ujTLHvPIAbF1HVhgOF1Tqk-Rr4a18z7ZoEjk7IANe-E';
const supabase = createClient(supabaseUrl, supabaseKey);

interface FormData {
  name: string;
  email: string;
  phone: string;
  dateOfBirth: string;
  address: string;
  isMember: boolean;
  isStudent: boolean;
  university: string;
  faculty: string;
  studyYear: string;
  department: string;
  howDidYouHear: string;
  interests: string[];
  motivation: string;
}

// Move components outside to prevent re-creation on each render
const InputField = ({ label, type = 'text', value, onChange, required = false, placeholder = '' }: {
  label: string;
  type?: string;
  value: string;
  onChange: (value: string) => void;
  required?: boolean;
  placeholder?: string;
}) => (
  <div className="space-y-2">
    <label className="block text-sm font-medium text-gray-700">
      {label} {required && <span className="text-red-500">*</span>}
    </label>
    <input
      type={type}
      value={value}
      onChange={(e) => onChange(e.target.value)}
      placeholder={placeholder}
      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-red focus:border-transparent transition-all duration-200 bg-white"
      required={required}
    />
  </div>
);

const SelectField = ({ label, value, onChange, options, required = false }: {
  label: string;
  value: string;
  onChange: (value: string) => void;
  options: { value: string; label: string }[];
  required?: boolean;
}) => (
  <div className="space-y-2">
    <label className="block text-sm font-medium text-gray-700">
      {label} {required && <span className="text-red-500">*</span>}
    </label>
    <select
      value={value}
      onChange={(e) => onChange(e.target.value)}
      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-red focus:border-transparent transition-all duration-200 bg-white"
      required={required}
    >
      <option value="">Selectează...</option>
      {options.map(option => (
        <option key={option.value} value={option.value}>{option.label}</option>
      ))}
    </select>
  </div>
);

export const Form = () => {
  const [currentStep, setCurrentStep] = useState(1);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formData, setFormData] = useState<FormData>({
    name: '',
    email: '',
    phone: '',
    dateOfBirth: '',
    address: '',
    isMember: false,
    isStudent: false,
    university: '',
    faculty: '',
    studyYear: '',
    department: '',
    howDidYouHear: '',
    interests: [],
    motivation: ''
  });

  const totalSteps = 4;

  // biome-ignore lint/suspicious/noExplicitAny: <explanation>
  const updateFormData = (field: keyof FormData, value: any) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  const handleInterestToggle = (interest: string) => {
    setFormData(prev => ({
      ...prev,
      interests: prev.interests.includes(interest)
        ? prev.interests.filter(i => i !== interest)
        : [...prev.interests, interest]
    }));
  };

  const validateStep = (step: number): boolean => {
    switch (step) {
      case 1:
        return !!(formData.name && formData.email && formData.phone);
      case 2:
        return !!(formData.dateOfBirth && formData.address);
      case 3:
        return formData.isStudent ? !!(formData.university && formData.faculty && formData.studyYear) : true;
      case 4:
        return !!(formData.department && formData.howDidYouHear);
      default:
        return true;
    }
  };

  const nextStep = () => {
    if (validateStep(currentStep)) {
      setCurrentStep(prev => Math.min(prev + 1, totalSteps));
    } else {
      toast.error('Te rugăm să completezi toate câmpurile obligatorii');
    }
  };

  const prevStep = () => {
    setCurrentStep(prev => Math.max(prev - 1, 1));
  };

  const handleSubmit = async () => {
    if (!validateStep(4)) {
      toast.error('Te rugăm să completezi toate câmpurile obligatorii');
      return;
    }

    setIsSubmitting(true);
    
    try {
      const { error } = await supabase.from('users').insert({
        full_name: formData.name,
        email: formData.email,
        phone: formData.phone,
        date_of_birth: formData.dateOfBirth || null,
        address: formData.address,
        is_member: formData.isMember,
        university: formData.isStudent ? formData.university : null,
        faculty: formData.isStudent ? formData.faculty : null,
        study_year: formData.isStudent ? parseInt(formData.studyYear) || null : null,
        department: formData.department
      });

      if (error) {
        // Handle specific error cases
        if (error.code === '23505' && error.message.includes('users_email_key')) {
          toast.error('📧 Acest email este deja înregistrat. Te rugăm să folosești o altă adresă de email.');
          return;
        }
        throw error;
      }

      toast.success('🎉 Mulțumim pentru înscriere! Te vom contacta în curând.');
      
      // Reset form
      setFormData({
        name: '', email: '', phone: '', dateOfBirth: '', address: '',
        isMember: false, isStudent: false, university: '', faculty: '',
        studyYear: '', department: '', howDidYouHear: '', interests: [], motivation: ''
      });
      setCurrentStep(1);
      
    } catch (error) {
      console.error('Error:', error);
      toast.error('❌ Eroare la trimiterea formularului. Te rugăm să încerci din nou.');
    } finally {
      setIsSubmitting(false);
    }
  };

  const StepIndicator = () => (
    <div className="flex items-center justify-center mb-8">
      {Array.from({ length: totalSteps }, (_, i) => i + 1).map((step) => (
        <div key={step} className="flex items-center">
          <div className={`w-10 h-10 rounded-full flex items-center justify-center text-sm font-medium transition-all duration-300 ${
            step <= currentStep 
              ? 'bg-primary-red text-white shadow-lg' 
              : 'bg-gray-200 text-gray-500'
          }`}>
            {step < currentStep ? (
              <i className="ri-check-line text-lg"></i>
            ) : (
              step
            )}
          </div>
          {step < totalSteps && (
            <div className={`w-5 md:w-16 h-1 mx-2 transition-all duration-300 ${
              step < currentStep ? 'bg-primary-red' : 'bg-gray-200'
            }`}></div>
          )}
        </div>
      ))}
    </div>
  );

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100 pt-16">
      <Toaster position="top-right" />
      
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-primary-red to-red-800 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <i className="ri-user-add-line text-6xl mb-6"></i>
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              Alătură-te AMiCUS
            </h1>
            <p className="text-xl text-red-100 max-w-3xl mx-auto">
              Completează formularul de mai jos pentru a te înscrie în comunitatea AMiCUS Timișoara. 
              Procesul durează doar câteva minute.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Form Section */}
      <div className="max-w-2xl mx-auto px-4 py-12">
        <div className="bg-white rounded-2xl shadow-xl p-8">
          <StepIndicator />
          
          <AnimatePresence mode="wait">
            <motion.div
              key={currentStep}
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              transition={{ duration: 0.3 }}
            >
              {/* Step 1: Personal Information */}
              {currentStep === 1 && (
                <div className="space-y-6">
                  <div className="text-center mb-8">
                    <h2 className="text-2xl font-bold text-gray-900 mb-2">Informații Personale</h2>
                    <p className="text-gray-600">Să te cunoaștem mai bine</p>
                  </div>
                  
                  <InputField
                    label="Nume și Prenume"
                    value={formData.name}
                    onChange={(value) => updateFormData('name', value)}
                    required={true}
                    placeholder="Ex: Ion Popescu"
                  />
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <InputField
                      label="Email"
                      type="email"
                      value={formData.email}
                      onChange={(value) => updateFormData('email', value)}
                      required={true}
                      placeholder="ex@email.com"
                    />
                    
                    <InputField
                      label="Telefon"
                      type="tel"
                      value={formData.phone}
                      onChange={(value) => updateFormData('phone', value)}
                      required={true}
                      placeholder="0712345678"
                    />
                  </div>
                </div>
              )}

              {/* Step 2: Additional Details */}
              {currentStep === 2 && (
                <div className="space-y-6">
                  <div className="text-center mb-8">
                    <h2 className="text-2xl font-bold text-gray-900 mb-2">Detalii Suplimentare</h2>
                    <p className="text-gray-600">Câteva informații în plus</p>
                  </div>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <InputField
                      label="Data Nașterii"
                      type="date"
                      value={formData.dateOfBirth}
                      onChange={(value) => updateFormData('dateOfBirth', value)}
                      required={true}
                    />
                    
                    <InputField
                      label="Adresa"
                      value={formData.address}
                      onChange={(value) => updateFormData('address', value)}
                      required={true}
                      placeholder="Ex: Timișoara"
                    />
                  </div>
                  
                  <div className="space-y-4">
                    <label className="block text-sm font-medium text-gray-700">
                      Ești membru al unei biserici Adventiste?
                    </label>
                    <div className="flex space-x-4">
                      {[
                        { value: true, label: 'Da' },
                        { value: false, label: 'Nu' }
                      ].map((option) => (
                        <button
                          key={option.label}
                          type="button"
                          onClick={() => updateFormData('isMember', option.value)}
                          className={`px-6 py-3 rounded-lg font-medium transition-all duration-200 ${
                            formData.isMember === option.value
                              ? 'bg-primary-red text-white shadow-lg'
                              : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                          }`}
                        >
                          {option.label}
                        </button>
                      ))}
                    </div>
                  </div>
                </div>
              )}

              {/* Step 3: Student Information */}
              {currentStep === 3 && (
                <div className="space-y-6">
                  <div className="text-center mb-8">
                    <h2 className="text-2xl font-bold text-gray-900 mb-2">Informații Academice</h2>
                    <p className="text-gray-600">Spune-ne despre studiile tale</p>
                  </div>
                  
                  <div className="space-y-4">
                    <label className="block text-sm font-medium text-gray-700">
                      Ești în prezent student?
                    </label>
                    <div className="flex flex-col md:flex-row gap-4 md:gap-0 md:space-x-4">
                      {[
                        { value: true, label: 'Da, sunt student' },
                        { value: false, label: 'Nu, nu sunt student' }
                      ].map((option) => (
                        <button
                          key={option.label}
                          type="button"
                          onClick={() => updateFormData('isStudent', option.value)}
                          className={`px-6 py-3 rounded-lg font-medium transition-all duration-200 ${
                            formData.isStudent === option.value
                              ? 'bg-primary-red text-white shadow-lg'
                              : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                          }`}
                        >
                          {option.label}
                        </button>
                      ))}
                    </div>
                  </div>
                  
                  {formData.isStudent && (
                    <motion.div
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: 'auto' }}
                      className="space-y-6"
                    >
                      <SelectField
                        label="Universitatea"
                        value={formData.university}
                        onChange={(value) => updateFormData('university', value)}
                        required={true}
                        options={[
                          { value: 'UVT', label: 'Universitatea de Vest din Timișoara' },
                          { value: 'UMFT', label: 'Universitatea de Medicină și Farmacie' },
                          { value: 'UPT', label: 'Universitatea Politehnica Timișoara' },
                          { value: 'USAMVBT', label: 'Universitatea de Științe Agricole' },
                          { value: 'Postliceală', label: 'Școală Postliceală' },
                          { value: 'Altă', label: 'Altă universitate' }
                        ]}
                      />
                      
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <InputField
                          label="Facultatea"
                          value={formData.faculty}
                          onChange={(value) => updateFormData('faculty', value)}
                          required={true}
                          placeholder="Ex: Medicină"
                        />
                        
                        <SelectField
                          label="Anul de studiu"
                          value={formData.studyYear}
                          onChange={(value) => updateFormData('studyYear', value)}
                          required={true}
                          options={[
                            { value: 'I', label: 'Anul I' },
                            { value: 'II', label: 'Anul II' },
                            { value: 'III', label: 'Anul III' },
                            { value: 'IV', label: 'Anul IV' },
                            { value: 'V', label: 'Anul V' },
                            { value: 'VI', label: 'Anul VI' },
                            { value: 'Master I', label: 'Master I' },
                            { value: 'Master II', label: 'Master II' },
                            { value: 'Doctorat', label: 'Doctorat' }
                          ]}
                        />
                      </div>
                    </motion.div>
                  )}
                </div>
              )}

              {/* Step 4: Involvement & Interests */}
              {currentStep === 4 && (
                <div className="space-y-6">
                  <div className="text-center mb-8">
                    <h2 className="text-2xl font-bold text-gray-900 mb-2">Implicare și Interese</h2>
                    <p className="text-gray-600">Cum vrei să te implici în comunitate?</p>
                  </div>
                  
                  <SelectField
                    label="Departamentul în care dorești să te implici"
                    value={formData.department}
                    onChange={(value) => updateFormData('department', value)}
                    required={true}
                    options={[
                      { value: 'Recreativ', label: 'Departamentul Recreativ' },
                      { value: 'Cultural', label: 'Departamentul Cultural' },
                      { value: 'Social', label: 'Departamentul Social' },
                      { value: 'Proiecte', label: 'Departamentul Proiecte' },
                      { value: 'PR & Marketing', label: 'PR & Marketing' },
                      { value: 'Spiritual', label: 'Departamentul Spiritual' },
                      { value: 'Administrativ & Economic', label: 'Administrativ & Economic' },
                      { value: 'Niciun departament', label: 'Nu știu încă / Niciun departament' }
                    ]}
                  />
                  
                  <SelectField
                    label="Cum ai aflat despre AMiCUS?"
                    value={formData.howDidYouHear}
                    onChange={(value) => updateFormData('howDidYouHear', value)}
                    required={true}
                    options={[
                      { value: 'Prieteni', label: 'Prin prieteni' },
                      { value: 'Social Media', label: 'Social Media (Facebook, Instagram)' },
                      { value: 'Eveniment', label: 'La un eveniment AMiCUS' },
                      { value: 'Biserica', label: 'Prin biserica' },
                      { value: 'Website', label: 'Website-ul AMiCUS' },
                      { value: 'Altceva', label: 'Altceva' }
                    ]}
                  />
                  
                  <div className="space-y-3">
                    <label className="block text-sm font-medium text-gray-700">
                      Ce te interesează? (opțional)
                    </label>
                    <div className="grid grid-cols-1 md:grid-cols-2 md:grid-cols-3 gap-3">
                      {[
                        'Activități sociale', 'Evenimente culturale', 'Studiu biblic',
                        'Voluntariat', 'Sport și recreere', 'Muzică și artă',
                        'Proiecte comunitare', 'Dezvoltare personală', 'Networking'
                      ].map((interest) => (
                        <button
                          key={interest}
                          type="button"
                          onClick={() => handleInterestToggle(interest)}
                          className={`px-4 py-2 rounded-lg text-sm font-medium transition-all duration-200 ${
                            formData.interests.includes(interest)
                              ? 'bg-primary-red text-white shadow-md'
                              : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                          }`}
                        >
                          {interest}
                        </button>
                      ))}
                    </div>
                  </div>
                </div>
              )}
            </motion.div>
          </AnimatePresence>
          
          {/* Navigation Buttons */}
          <div className="flex flex-col md:flex-row justify-between mt-8 pt-6 border-t border-gray-200 gap-6">
            <button
              onClick={prevStep}
              disabled={currentStep === 1}
              className={`px-6 py-3 rounded-lg font-medium transition-all duration-200 ${
                currentStep === 1
                  ? 'bg-gray-100 text-gray-400 cursor-not-allowed'
                  : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
              }`}
            >
              <i className="ri-arrow-left-line mr-2"></i>
              Înapoi
            </button>
            
            {currentStep < totalSteps ? (
              <button
                onClick={nextStep}
                className="px-8 py-3 bg-primary-red text-white rounded-lg font-medium hover:bg-red-700 transition-all duration-200 shadow-lg hover:shadow-xl"
              >
                Continuă
                <i className="ri-arrow-right-line ml-2"></i>
              </button>
            ) : (
              <button
                onClick={handleSubmit}
                disabled={isSubmitting}
                className={`px-8 py-3 rounded-lg font-medium transition-all duration-200 shadow-lg hover:shadow-xl ${
                  isSubmitting
                    ? 'bg-gray-400 text-white cursor-not-allowed'
                    : 'bg-green-600 text-white hover:bg-green-700'
                }`}
              >
                {isSubmitting ? (
                  <>
                    <i className="ri-loader-4-line animate-spin mr-2"></i>
                    Se trimite...
                  </>
                ) : (
                  <>
                    <i className="ri-check-line mr-2"></i>
                    Trimite Înscrierea
                  </>
                )}
              </button>
            )}
          </div>
        </div>
      </div>
      
      <Footer />
    </div>
  );
}
