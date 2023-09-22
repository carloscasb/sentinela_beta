'use client'
import Image from "next/image";
import { useRouter } from "next/navigation";


export default function Pessoa(){

   const router = useRouter()

    return (

        <div className="flex bg-gray-700  h-screen">
            <div className="flex-grow text-gray-700 text-center bg-gray-400 px-4 py-2 m-2">
                Will grow

                
<div className=" flex max-h-96 max-w-ms bg-slate-500 justify-center ">


    <form action={" "} className="   ">
        <div className="  flex-grow px-4 py-2 m-2 justify-center items-center text-center  ">
              <label className=" p-7 " >Nome</label>
               <input type="text" name="name" />
        </div>
      
     
      <button type="submit">Submit</button>
    </form>
  

</div>

                <div className="grid gap-4 grid-cols-2">
                    <div> <button>01</button>   </div>
                    <div> <button type="button" onClick={() => router.push('/site/usuarios')} className="btn btn-primary
               m-2 w-40
                
              ">
                        Pessoa
                    </button></div>
                    <div>03</div>
                    <div>04</div>
                </div>

            </div>
            
        </div>



)}

/**
 * <div className="flex bg-gray-700  h-screen">
            <div className="flex-grow text-gray-700 text-center bg-gray-400 px-4 py-2 m-2">
                Will grow
            </div>
            
        </div>
 */
