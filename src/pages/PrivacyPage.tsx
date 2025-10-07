import { motion } from 'framer-motion';
import {Footer} from '../components/Footer';

export const PrivacyPage = () => {
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
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              Politica de Confidențialitate
            </h1>
            <p className="text-xl text-red-100 max-w-3xl mx-auto">
              Cum colectăm, utilizăm și protejăm informațiile dumneavoastră personale
            </p>
          </motion.div>
        </div>
      </section>

      {/* Content Section */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="prose prose-lg max-w-none"
          >
            <div className="space-y-8">
              <div>
                <h2 className="text-2xl font-bold text-gray-900 mb-4">1. Introducere</h2>
                <p className="text-gray-700 mb-4">
                  AMiCUS Timișoara respectă confidențialitatea vizitatorilor site-ului nostru și a membrilor comunității. 
                  Această politică de confidențialitate explică cum colectăm, utilizăm și protejăm informațiile 
                  dumneavoastră personale în conformitate cu Regulamentul General privind Protecția Datelor (GDPR).
                </p>
              </div>

              <div>
                <h2 className="text-2xl font-bold text-gray-900 mb-4">2. Informații pe care le Colectăm</h2>
                <p className="text-gray-700 mb-4">
                  Colectăm următoarele tipuri de informații:
                </p>
                <ul className="list-disc pl-6 text-gray-700 mb-4">
                  <li><strong>Informații de contact:</strong> nume, adresă de email, număr de telefon</li>
                  <li><strong>Informații demografice:</strong> vârsta, universitatea, anul de studiu</li>
                  <li><strong>Informații de utilizare:</strong> cum utilizați site-ul nostru</li>
                  <li><strong>Cookies și tehnologii similare:</strong> pentru îmbunătățirea experienței utilizatorului</li>
                </ul>
              </div>

              <div>
                <h2 className="text-2xl font-bold text-gray-900 mb-4">3. Cum Utilizăm Informațiile</h2>
                <p className="text-gray-700 mb-4">
                  Utilizăm informațiile colectate pentru:
                </p>
                <ul className="list-disc pl-6 text-gray-700 mb-4">
                  <li>Comunicarea despre evenimente și activități AMiCUS</li>
                  <li>Procesarea înregistrărilor la evenimente</li>
                  <li>Îmbunătățirea serviciilor și conținutului site-ului</li>
                  <li>Respectarea obligațiilor legale</li>
                  <li>Răspunsul la întrebări și solicitări</li>
                </ul>
              </div>

              <div>
                <h2 className="text-2xl font-bold text-gray-900 mb-4">4. Baza Legală pentru Prelucrare</h2>
                <p className="text-gray-700 mb-4">
                  Prelucrăm datele dumneavoastră personale pe baza următoarelor fundamente legale:
                </p>
                <ul className="list-disc pl-6 text-gray-700 mb-4">
                  <li><strong>Consimțământul:</strong> pentru comunicări marketing și newsletter</li>
                  <li><strong>Interesul legitim:</strong> pentru îmbunătățirea serviciilor noastre</li>
                  <li><strong>Executarea unui contract:</strong> pentru participarea la evenimente</li>
                  <li><strong>Obligația legală:</strong> pentru respectarea cerințelor legale</li>
                </ul>
              </div>

              <div>
                <h2 className="text-2xl font-bold text-gray-900 mb-4">5. Partajarea Informațiilor</h2>
                <p className="text-gray-700 mb-4">
                  Nu vindem, nu închiriem și nu partajăm informațiile dumneavoastră personale cu terți, 
                  cu excepția următoarelor situații:
                </p>
                <ul className="list-disc pl-6 text-gray-700 mb-4">
                  <li>Cu consimțământul dumneavoastră explicit</li>
                  <li>Pentru respectarea obligațiilor legale</li>
                  <li>Cu furnizorii de servicii care ne ajută să operăm site-ul</li>
                  <li>În cadrul rețelei naționale AMiCUS pentru coordonarea activităților</li>
                </ul>
              </div>

              <div>
                <h2 className="text-2xl font-bold text-gray-900 mb-4">6. Securitatea Datelor</h2>
                <p className="text-gray-700 mb-4">
                  Implementăm măsuri de securitate tehnice și organizatorice adecvate pentru a proteja 
                  informațiile dumneavoastră împotriva accesului neautorizat, modificării, divulgării sau distrugerii.
                </p>
              </div>

              <div>
                <h2 className="text-2xl font-bold text-gray-900 mb-4">7. Drepturile Dumneavoastră</h2>
                <p className="text-gray-700 mb-4">
                  În conformitate cu GDPR, aveți următoarele drepturi:
                </p>
                <ul className="list-disc pl-6 text-gray-700 mb-4">
                  <li><strong>Dreptul de acces:</strong> să solicitați o copie a datelor personale</li>
                  <li><strong>Dreptul de rectificare:</strong> să corectați datele inexacte</li>
                  <li><strong>Dreptul la ștergere:</strong> să solicitați ștergerea datelor</li>
                  <li><strong>Dreptul la restricționarea prelucrării:</strong> să limitați utilizarea datelor</li>
                  <li><strong>Dreptul la portabilitatea datelor:</strong> să primiți datele într-un format structurat</li>
                  <li><strong>Dreptul de opoziție:</strong> să vă opuneți prelucrării datelor</li>
                </ul>
              </div>

              <div>
                <h2 className="text-2xl font-bold text-gray-900 mb-4">8. Cookies</h2>
                <p className="text-gray-700 mb-4">
                  Site-ul nostru utilizează cookies pentru a îmbunătăți experiența utilizatorului. 
                  Puteți controla utilizarea cookies prin setările browserului dumneavoastră.
                </p>
              </div>

              <div>
                <h2 className="text-2xl font-bold text-gray-900 mb-4">9. Păstrarea Datelor</h2>
                <p className="text-gray-700 mb-4">
                  Păstrăm datele dumneavoastră personale doar atât timp cât este necesar pentru 
                  îndeplinirea scopurilor pentru care au fost colectate sau conform cerințelor legale.
                </p>
              </div>

              <div>
                <h2 className="text-2xl font-bold text-gray-900 mb-4">10. Modificări ale Politicii</h2>
                <p className="text-gray-700 mb-4">
                  Ne rezervăm dreptul de a actualiza această politică de confidențialitate. 
                  Modificările vor fi publicate pe această pagină cu data actualizării.
                </p>
              </div>

              <div>
                <h2 className="text-2xl font-bold text-gray-900 mb-4">11. Contact</h2>
                <p className="text-gray-700 mb-4">
                  Pentru întrebări despre această politică de confidențialitate sau pentru exercitarea 
                  drepturilor dumneavoastră, contactați-ne la:
                </p>
                <div className="bg-gray-50 p-4 rounded-lg">
                  <p className="text-gray-700">
                    <strong>Responsabil cu protecția datelor:</strong> AMiCUS Timișoara<br />
                    <strong>Email:</strong> aamicustimisoara@gmail.com<br />
                    <strong>Telefon Președinte:</strong> 0758948440<br />
                    <strong>Telefon Capelan:</strong> +40 768 096 881<br />
                    <strong>Adresă:</strong> Str. Piața Alexandru Mocioni 7, Timișoara, România
                  </p>
                </div>
              </div>

              <div className="border-t pt-6 mt-8">
                <p className="text-sm text-gray-500">
                  Ultima actualizare: {new Date().toLocaleDateString('ro-RO')}
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

