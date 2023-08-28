



import Link from "next/link"
import React from "react"


export default function Suporte() {
    return (
      <>
       <div className="flex bg-gray-700  h-screen ">
            <div className="flex-grow text-gray-700 text-center items-center  bg-gray-400 px-4 py-2 m-2">

               <div className=" flex-1 ">
      <h1 className=" font-bold mb-10">Fomulario de Suporte</h1>
      <form method="" action=""  className="  bg-white">

        <div className=" flex justify-center text-center  align-middle  ">
          <label className=" mt-3 box-border  " >Name</label>
          <input type="text" name="name" className="  w-2/4 ml-3  mt-3 border-2 border-slate-900"/>
        </div>
 
        <div className=" flex justify-center text-center  align-middle ">
          <label className=" mt-3 box-border  ">Email</label>
          <input className="w-2/4 ml-3  mt-3 border-2 border-slate-900" type="text" name="email" />
        </div>

        <div className=" flex justify-center text-center  align-middle ">
          <label className=" mt-3 box-border  ">Nivel</label>
          <input className="w-2/4 ml-3  mt-3 border-2 border-slate-900" type="text" name="email" />
        </div>

        <div className=" flex-1  mx-6 my-4  ">
        <button type="submit" className=" p-5 ">Gravar</button>
        <button type="button" className=" bg-teal-500" >Warning</button>

        <Link href='/' className=" items-center p-3 space-x-4 rounded-md">
                               
        <button type="button" className=" bg-teal-300   rounded-xl" >Teste</button>
                            </Link>

        </div>
        
      </form>
    </div>

            </div>
            
        </div>
     
    </>
  )
}

