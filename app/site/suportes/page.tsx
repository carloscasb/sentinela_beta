
'use client'


import Link from "next/link"
import React from "react"


 
import { useRouter } from 'next/navigation'


export default function Suporte() { 
  const router = useRouter()
    return (
        /**   
      <>
      
       <div className="flex bg-gray-700 items-center  justify-center   h-screen ">
            <div className="flex-row text-gray-700 text-center items-center  bg-gray-400 px-4 py-2 m-2">
          

            <div className=" inline-grid">
             
              <button type="button" onClick={() => router.push('/site/pessoas')} className="btn btn-primary
               m-2 w-40
                
              ">
                                Pessoa
                            </button>
             
              
              <button type="button" onClick={() => router.push('/')} className="btn btn-primary m-2 w-40">
                                Home
                            </button>
             
             
             
              <button type="button" onClick={() => router.push('/site/faccs')} className="btn btn-primary m-2  w-40">
                                Facção
                            </button>
              
            
              <button type="button" onClick={() => router.push('/site/organs')} className="btn btn-primary m-2 w-40">
                                Organ
                            </button>
              
              </div> 



            
            

            </div>
            
        </div>
     
    </>
    
    */


      <div className="flex bg-gray-700 items-center  justify-center   h-screen ">

       <div className="grid gap-4 grid-cols-2">
          <div> <button type="button" onClick={() => router.push('/site/usuarios')} className="btn btn-primary
 m-2 w-40 ">
            Usuarios
          </button></div>
          <div> <button type="button" onClick={() => router.push('/site/organs')} className="btn btn-primary
 m-2 w-40 ">
            Organização
          </button></div>
          <div> <button type="button" onClick={() => router.push('/site/sistemas')} className="btn btn-primary
 m-2 w-40 ">
            Sistema
          </button></div>
          <div> <button type="button" onClick={() => router.push('/site/faccs')} className="btn btn-primary
 m-2 w-40 ">
            Faccs
          </button></div>
        </div>

      </div>
  
  )
}






