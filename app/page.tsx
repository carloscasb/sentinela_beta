import Image from 'next/image'
//import {icone} from "../app/icons/page"

export default function Home() {
  return (
    <>
   <div className=" float-left  " >

  <div className=' justify-center items-center'>
              <Image
                src="/logo.png"
                width= {"500"}
                height={'550'}
                alt="Picture of the author"
                
              />

            </div>
   
    <span className={" max-w-screen-sm p-4 bg-slate-150 float-left  border-b-2 text-center "}>Bem vindo ao Sentinela_Beta</span>
   </div>
   </>
  )
}
