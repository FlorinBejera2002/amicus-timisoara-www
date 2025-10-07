import { motion } from 'framer-motion';
import {Footer} from '../components/Footer';

export const TermsPage = () => {
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
              Termeni și Condiții
            </h1>
            <p className="text-xl text-red-100 max-w-3xl mx-auto">
              Condițiile de utilizare ale site-ului AMiCUS Timișoara
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
                <h2 className="text-2xl font-bold text-gray-900 mb-4">1. Acceptarea Termenilor</h2>
                <p className="text-gray-700 mb-4">
                  Prin accesarea și utilizarea site-ului web al AMiCUS Timișoara, acceptați să fiți legați de acești 
                  termeni și condiții de utilizare. Dacă nu sunteți de acord cu oricare dintre acești termeni, 
                  vă rugăm să nu utilizați site-ul nostru.
                </p>
              </div>

              <div>
                <h2 className="text-2xl font-bold text-gray-900 mb-4">2. Despre AMiCUS Timișoara</h2>
                <p className="text-gray-700 mb-4">
                  AMiCUS Timișoara este o asociație studențească autonomă, apolitică, neguvernamentală și non-profit, 
                  constituită la nivel național. Site-ul nostru oferă informații despre activitățile, evenimentele 
                  și misiunea asociației.
                </p>
              </div>

              <div>
                <h2 className="text-2xl font-bold text-gray-900 mb-4">3. Utilizarea Site-ului</h2>
                <p className="text-gray-700 mb-4">
                  Vă acordăm o licență limitată, neexclusivă și neretransmisibilă pentru a accesa și utiliza site-ul 
                  în scopuri personale și necomerciale. Nu aveți dreptul să:
                </p>
                <ul className="list-disc pl-6 text-gray-700 mb-4">
                  <li>Modificați sau copiați materialele de pe site</li>
                  <li>Utilizați materialele în scopuri comerciale</li>
                  <li>Încercați să decompilați sau să faceți inginerie inversă asupra software-ului</li>
                  <li>Eliminați drepturile de autor sau alte notări proprietare</li>
                </ul>
              </div>

              <div>
                <h2 className="text-2xl font-bold text-gray-900 mb-4">4. Conținutul Utilizatorului</h2>
                <p className="text-gray-700 mb-4">
                  Prin trimiterea de informații prin formularul de contact sau alte mijloace de comunicare, 
                  garantați că aveți dreptul să transmiteți aceste informații și că acestea nu încalcă drepturile 
                  terților sau legile aplicabile.
                </p>
              </div>

              <div>
                <h2 className="text-2xl font-bold text-gray-900 mb-4">5. Proprietatea Intelectuală</h2>
                <p className="text-gray-700 mb-4">
                  Toate materialele de pe acest site, inclusiv textele, imaginile, logo-urile și designul, 
                  sunt proprietatea AMiCUS Timișoara sau sunt utilizate cu permisiune. Toate drepturile sunt rezervate.
                </p>
              </div>

              <div>
                <h2 className="text-2xl font-bold text-gray-900 mb-4">6. Limitarea Răspunderii</h2>
                <p className="text-gray-700 mb-4">
                  AMiCUS Timișoara nu va fi răspunzătoare pentru niciun fel de daune directe, indirecte, 
                  incidentale sau consecințiale care rezultă din utilizarea sau incapacitatea de a utiliza acest site.
                </p>
              </div>

              <div>
                <h2 className="text-2xl font-bold text-gray-900 mb-4">7. Modificări ale Termenilor</h2>
                <p className="text-gray-700 mb-4">
                  Ne rezervăm dreptul de a modifica acești termeni în orice moment. Modificările vor fi publicate 
                  pe această pagină și vor intra în vigoare imediat după publicare.
                </p>
              </div>

              <div>
                <h2 className="text-2xl font-bold text-gray-900 mb-4">8. Legea Aplicabilă</h2>
                <p className="text-gray-700 mb-4">
                  Acești termeni sunt guvernați de legile României. Orice dispută va fi soluționată în 
                  instanțele competente din Timișoara, România.
                </p>
              </div>

              <div>
                <h2 className="text-2xl font-bold text-gray-900 mb-4">9. Contact</h2>
                <p className="text-gray-700 mb-4">
                  Pentru întrebări despre acești termeni și condiții, vă rugăm să ne contactați la:
                </p>
                <div className="bg-gray-50 p-4 rounded-lg">
                  <p className="text-gray-700">
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

