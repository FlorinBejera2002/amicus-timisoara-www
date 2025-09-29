import { createClient } from '@supabase/supabase-js'
import { Toaster, toast } from 'sonner'
import { Button } from '../components/Button'
import { Input } from '../components/Input'
import { Label } from '../components/Label'
import logo from '@/assets/Logo-Amicus.png'
import heroImage from '@/assets/hero-image.jpeg'
import { useState } from 'react'

export default function Form() {
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
      const supabaseUrl = 'https://trzpetwunbmirbuqhxkh.supabase.co' // Înlocuiește cu valorile tale
      const supabaseKey =
          'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InRyenBldHd1bmJtaXJidXFoeGtoIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NTc0MDczMjYsImV4cCI6MjA3Mjk4MzMyNn0.M_bWzJgK6_2RgHeLyZDGUfz1PEv4ZYshm8sxqb2Y-Ec'
      const supabase = createClient(supabaseUrl, supabaseKey)

      // Inserare date în tabelul `requesters`
      const { error: requesterError } = await supabase
        .from('users')
        .insert({
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
          console.error(requesterError)
      }

      event.target.reset() // Resetare formular după trimitere
      toast('✅ Mulțumim pentru înscriere!')
    } catch (error) {
      toast('❌ Eroare la trimiterea formularului')
      console.error('Eroare la trimiterea formularului', error)
    }
  }

  return (
    <div className="min-h-screen pt-16 bg-gray-50">
      <Toaster position="top-right" />

      <div
        className="w-full bg-cover bg-center h-80 py-16 flex px-4 justify-center items-center text-white shadow-lg relative"
        style={{
          backgroundImage: `url(${heroImage})`
        }}
      >
        <div className="absolute inset-0 bg-black/40"></div>
        <div className="flex items-center gap-6 relative z-10">
          <img src={logo} alt="amicus logo" className="w-20 h-20" />
          <div>
            <h1 className="text-4xl md:text-6xl font-bold text-white">
              AMiCUS Timișoara
            </h1>
            <h2 className="md:text-xl text-lg font-semibold text-red-100 mt-2">
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
                className="rounded-md border bg-white border-gray-300 focus:border-primary-red focus:ring-2 focus:ring-red-200 transition duration-200 ease-in-out px-6 py-3 text-gray-700 placeholder-gray-400 shadow-lg w-full"
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
              <option value="Spiritual">Spiritual</option>
              <option value="Administrativ & Economic">Administrativ & Economic</option>
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
