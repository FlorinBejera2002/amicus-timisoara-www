import { createClient } from '@supabase/supabase-js'
import { Toaster, toast } from 'sonner'
import { v4 as uuid } from 'uuid'
import logo from '../public/Logo-Amicus.png'
import { Button } from './components/Button'
import { Input } from './components/Input'
import { Label } from './components/Label'
import heroImage from '../public/hero-image.jpeg'
import { useState } from 'react'

export function App() {
  const [student, setStudent] = useState(false) // Stochează dacă utilizatorul este student

  const handleSubmit = async (event: any) => {
    try {
      event.preventDefault()

      // Preluare valori din formular
      const name = event.target.name.value
      const email = event.target.email.value
      const phone = event.target.phone.value
      const dateOfBirth = event.target.dateOfBirth.value
      const address = event.target.address.value
      const isMember = event.target.isMember.value === 'Da'
      const university = student ? event.target.university.value : null
      const faculty = student ? event.target.faculty.value : null
      const studyYear = student ? event.target.studyYear.value : null
      const department = event.target.department.value

      // supabase
      const supabaseUrl = 'https://tacgpszyibzcntbuxkoz.supabase.co' // Înlocuiește cu valorile tale
      const supabaseKey =
        'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InRhY2dwc3p5aWJ6Y250YnV4a296Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3MjgzOTA5MjIsImV4cCI6MjA0Mzk2NjkyMn0.SzLJHmrb7hg-K5fIl0JvfcCEl9qpfRMS5POu-o-WYpc'
      const supabase = createClient(supabaseUrl, supabaseKey)

      const personRequestingId = uuid()

      // Inserare date în tabelul `requesters`
      const { error: requesterError } = await supabase
        .from('requesters')
        .insert({
          id: personRequestingId,
          name: name || '',
          email: email || '',
          phone: phone || '',
          date_of_birth: dateOfBirth || null,
          address: address || '',
          is_member: isMember,
          university: university || null,
          faculty: faculty || null,
          study_year: studyYear || null,
          department: department || ''
        })

      if (requesterError) {
        throw new Error(requesterError.message)
      }

      event.target.reset() // Resetare formular după trimitere
      toast('✅ Mulțumim pentru înscriere!')
    } catch (error) {
      toast('❌ Eroare la trimiterea formularului')
      console.error('Eroare la trimiterea formularului', error)
    }
  }

  return (
    <div className="min-h-screen flex flex-col justify-start items-center bg-gradient-to-br from-blue-50 via-white to-blue-100">
      <Toaster position="top-right" />

      <div
        className="w-full bg-cover bg-center h-72 py-16 flex px-4 justify-center items-center text-white shadow-md"
        style={{
          backgroundImage: `url(${heroImage})`
        }}
      >
        <div className="flex mt-32 gap-5">
          <img src={logo} alt="amicus logo" className="w-24 h-24" />
          <div>
            <h1 className="text-3xl md:text-5xl font-extrabold text-white xl:text-white">
              AMiCUS Timișoara
            </h1>
            <h2 className="md:text-xl text-base font-bold text-gray-200 mt-2">
              Completează formularul și înscrie-te.
            </h2>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4 py-10 font-poppins max-w-xl">
        <form className="flex flex-col space-y-8" onSubmit={handleSubmit}>
          <div className="flex flex-col space-y-1">
            <Label text="Nume & Prenume" />
            <Input
              restProps={{
                id: 'name',
                name: 'name',
                required: true,
                type: 'text'
              }}
            />
          </div>

          <div className="flex flex-col md:flex-row md:space-x-6">
            <div className="flex flex-col space-y-1 flex-1">
              <Label text="Telefon" />
              <Input
                restProps={{
                  id: 'phone',
                  name: 'phone',
                  type: 'tel'
                }}
              />
            </div>

            <div className="flex flex-col space-y-1 flex-1 mt-5 md:mt-0">
              <Label text="Email" />
              <Input
                restProps={{
                  id: 'email',
                  name: 'email',
                  required: true,
                  type: 'email'
                }}
              />
            </div>
          </div>

          <div className="flex flex-col space-y-1">
            <Label text="Data nașterii" />
            <Input
              restProps={{
                id: 'dateOfBirth',
                name: 'dateOfBirth',
                type: 'date'
              }}
            />
          </div>

          <div className="flex flex-col md:flex-row md:space-x-6">
            <div className="flex flex-col space-y-1 flex-1">
              <Label text="Localitate de proveniență" />
              <Input
                restProps={{
                  id: 'address',
                  name: 'address',
                  type: 'text'
                }}
              />
            </div>

            <div className="flex flex-col space-y-1 flex-1 mt-5 md:mt-0">
              <Label text="Ești membru al bisericii AZȘ?" />
              <select
                id="isMember"
                name="isMember"
                className="rounded-md border bg-white border-gray-300 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 transition duration-200 ease-in-out px-6 py-3 text-gray-700 placeholder-gray-400 shadow-lg w-full"
              >
                <option value="Da">Da</option>
                <option value="Nu">Nu</option>
              </select>
            </div>
          </div>

          {/* Secțiunea "Ești student?" */}
          <div className="flex items-center">
            <h2 className="font-medium text-gray-500">Ești student?</h2>
            <button
              type="button"
              onClick={() => setStudent(true)}
              className="text-black font-bold py-2 px-4 rounded underline"
            >
              Da
            </button>
            /
            <button
              type="button"
              onClick={() => setStudent(false)}
              className="text-black font-bold py-2 px-4 rounded underline"
            >
              Nu
            </button>
          </div>

          {student && (
            <>
              <div className="flex flex-col space-y-1">
                <Label text="La ce universitate ești?" />
                <select
                  id="university"
                  name="university"
                  className="rounded-md border bg-white border-gray-300 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 transition duration-200 ease-in-out px-6 py-3 text-gray-700 placeholder-gray-400 shadow-lg w-full"
                >
                  <option value="UVT">UVT</option>
                  <option value="UMFT">UMFT</option>
                  <option value="UPT">UPT</option>
                  <option value="USAMVBT">USAMVBT</option>
                  <option value="Postliceală">Postliceală</option>
                </select>
              </div>

              <div className="flex flex-col md:flex-row md:space-x-3">
                <div className="flex flex-col space-y-1 flex-1">
                  <Label text="La ce facultate ești?" />
                  <Input
                    restProps={{
                      id: 'faculty',
                      name: 'faculty',
                      type: 'text'
                    }}
                  />
                </div>

                <div className="flex flex-col space-y-1 flex-1 mt-5 md:mt-0">
                  <Label text="În ce an de studiu?" />
                  <select
                    id="studyYear"
                    name="studyYear"
                    className="rounded-md border bg-white border-gray-300 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 transition duration-200 ease-in-out px-6 py-3 text-gray-700 placeholder-gray-400 shadow-lg w-full"
                  >
                    <option value="I">I</option>
                    <option value="II">II</option>
                    <option value="III">III</option>
                    <option value="IV">IV</option>
                    <option value="V">V</option>
                    <option value="VI">VI</option>
                    <option value="Master I">Master I</option>
                    <option value="Master II">Master II</option>
                  </select>
                </div>
              </div>
            </>
          )}

          <div className="flex flex-col space-y-1">
            <Label text="Selectează departamentul în care dorești să te implici" />
            <select
              id="department"
              name="department"
              className="rounded-md border bg-white border-gray-300 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 transition duration-200 ease-in-out px-6 py-3 text-gray-700 placeholder-gray-400 shadow-lg w-full"
            >
              <option value="Niciun departament">Niciun departament</option>
              <option value="Recreativ">Recreativ</option>
              <option value="Cultural">Cultural</option>
              <option value="Social">Social</option>
              <option value="Proiecte">Proiecte</option>
              <option value="PR & Marketing">PR & Marketing</option>
              <option value="Administrativ & Economic">
                Administrativ & Economic
              </option>
            </select>
          </div>

          <div className="flex justify-center mt-6">
            <Button text="Trimite" />
          </div>
        </form>
      </div>
    </div>
  )
}
