
import Modal from "@/app/components/modal/modal"
import Image from "next/image"
import Link from "next/link"


export default function Evento() {

  return (

    <div className="flex bg-gray-700  h-screen">
    <div className="flex-grow text-gray-700 text-center bg-gray-400 px-4 py-2 m-2">

   
    <form className="  bg-red-100  items-center justify-center  text-center">
      <div className="space-y-10">
        

        <div className="border-b border-gray-900/10 pb-12">
          <h2 className="text-base font-semibold leading-7 text-gray-900">Personal Information</h2>
      

          <div className="mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6 ">
            <div className="sm:col-span-full ">
              <label form="first-name" className="block text-sm font-medium leading-6 text-gray-900">Titulo do Evento</label>
              <div className="mt-2">
                <input type="text" name="first-name" id="first-name" className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6" />
              </div>
            </div>

            <div className="sm:col-span-1">
              <label form="last-name" className="block text-sm font-medium leading-6 text-gray-900">Data do Evento</label>
              <div className="mt-2">
                <input type="text" name="last-name" id="last-name"  className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6" />
              </div>
            </div>

            <div className="sm:col-span-2">
              <label form="email" className="block text-sm font-medium leading-6 text-gray-900">Local/Municipio</label>
              <div className="mt-2">
                <input id="email" name="email" type="email"  className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"/>
              </div>
            </div>

            <div className="col-span-1">
              <label form="street-address" className="block text-sm font-medium leading-6 text-gray-900">Estado</label>
              <div className="mt-2">
                <input type="text" name="street-address" id="street-address"  className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"/>
              </div>
            </div>

            <div className="sm:col-span-1">
              <label form="country" className="block text-sm font-medium leading-6 text-gray-900">Status</label>
              <div className="mt-2">
                <select id="country" name="country"  className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:max-w-xs sm:text-sm sm:leading-6">
                  <option>Andamento</option>
                  <option>Arquivada</option>
                  <option>Resolvido</option>
                </select>
              </div>
            </div>

               <div className="col-span-full">
              <label form="about" className="block text-sm font-medium leading-6 text-gray-900">About</label>
              <div className="mt-2">
                <textarea id="about" name="about" className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"></textarea>
              </div>
             
            </div>

            <div className="sm:col-span-1">
              <label form="country" className="block text-sm font-medium leading-6 text-gray-900">Vincular</label>
              <div className="mt-2">
                <select id="country" name="country"  className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:max-w-xs sm:text-sm sm:leading-6">
                  <option>Pessoa 1</option>
                  <option>Pessoa 2</option>
                  <option>Pessoa 3</option>
                </select>
              </div>
            </div>
         
          </div>
        </div>

        
      </div>

      <div className="mt-6 flex items-center justify-end gap-x-6">
        <button type="button" className="text-sm font-semibold leading-6 text-gray-900">Cancel</button>
        <button type="submit" className="rounded-md bg-indigo-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">Save</button>
      </div>
    </form>
 
    </div>
    </div>



  )
}

