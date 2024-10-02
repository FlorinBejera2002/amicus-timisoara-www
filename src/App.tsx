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
  const [categories, setCategories] = useState<string[]>([]) // Modificăm pentru a stoca un array de categorii selectate

  const handleSubmit = async (event: any) => {
    try {
      event.preventDefault()
      const name = event.target.name.value
      const email = event.target.email.value
      const phone = event.target.phone.value
      const details = event.target.details.value

      // supabase
      const supabaseUrl = 'todo'
      const supabaseAnonKey = 'todo'
      const supabase = createClient(supabaseUrl, supabaseAnonKey)

      const evReqId = uuid()
      const personRequestingId = uuid()

      const { error: requesterError } = await supabase
        .from('requesters')
        .insert({
          details: details || '',
          email: email || '',
          id: personRequestingId,
          name: name || '',
          phone: phone || ''
        })

      if (requesterError) {
        throw new Error(requesterError.message)
      }

      const { error: reqError } = await supabase
        .from('evangelism_requests')
        .insert({
          category: categories.join(', '), // Unim categoriile selectate într-un string
          id: evReqId,
          person_requesting_id: personRequestingId,
          status: 'received'
        })

      if (reqError) {
        throw new Error(reqError.message)
      }

      event.target.reset()
      toast('✅ Mulțumim!')
    } catch (error) {
      toast('❌ Eroare la crearea cererii')
      console.error('Eroare la crearea cererii', error)
    }
  }

  // Funcție pentru actualizarea categoriilor selectate
  const handleCategoryChange = (event: any) => {
    const selectedOptions = Array.from(event.target.selectedOptions).map(
      (option: any) => option.value
    )
    setCategories(selectedOptions)
  }

  return (
    <div className="min-h-screen flex flex-col justify-start items-center bg-gradient-to-br from-blue-50 via-white to-blue-100">
      <Toaster position="top-right" />

      <div
        className="w-full bg-cover bg-center  h-72 py-16 flex px-4 justify-center items-center text-white shadow-md"
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

      <div className="container mx-auto px-4 py-10 font-poppins max-w-lg">
        <form className="flex flex-col space-y-8" onSubmit={handleSubmit}>
          <div className="flex flex-col space-y-1">
            <Label text="Numele întreg" />
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
                id: 'age',
                name: 'age',
                type: 'number'
              }}
            />
          </div>

          <div className="flex flex-col md:flex-row md:space-x-3">
            <div className="flex flex-col space-y-1 flex-1">
              <Label text="La ce facultate ești?" />
              <Input
                restProps={{
                  id: 'phone',
                  name: 'phone',
                  type: 'tel'
                }}
              />
            </div>

            <div className="flex flex-col space-y-1 flex-1 mt-5 md:mt-0">
              <Label text="În ce an de studiu?" />
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
            <Label text="Selectează departamentul în care dorești să te implici" />
            <select
              id="category"
              name="category"
              onChange={handleCategoryChange}
              className="rounded-md border bg-white border-gray-300 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 transition duration-200 ease-in-out px-6 py-3 text-gray-700 placeholder-gray-400 shadow-lg w-full"
            >
              <option className="hover:!bg-red-500" value="Nici un departament">
                Nici un departament
              </option>
              <option className="hover:!bg-red-500" value="Recreativ">
                Recreativ
              </option>
              <option className="hover:!bg-red-500" value="Cultural">
                Cultural
              </option>
              <option className="hover:!bg-red-500" value="Social">
                Social
              </option>
              <option className="hover:!bg-red-500" value="Proiecte">
                Proiecte
              </option>
              <option className="hover:!bg-red-500" value="PR & Marketing">
                PR & Marketing
              </option>
              <option
                className="hover:focus-red-500"
                value="Administrativ & Economic"
              >
                Administrativ & Economic
              </option>
            </select>
          </div>

          <div className="flex flex-col space-y-1">
            <Label text="Vrei să ne transmiți ceva?" />
            <Input
              isTextArea={true}
              restProps={{
                id: 'details',
                name: 'details'
              }}
            />
          </div>

          <div className="flex justify-center mt-6">
            <Button text="Trimite" />
          </div>
        </form>
      </div>
    </div>
  )
}
