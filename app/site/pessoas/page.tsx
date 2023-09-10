import Image from "next/image";

export default function Pessoa(){

    return (

        <div className="flex bg-gray-700  h-screen">
            <div className="flex-grow text-gray-700 text-center bg-gray-400 px-4 py-2 m-2">
                Will grow

                <div>
 <Image
     src="/logoS.png"
     width={150}
     height={150}
     alt="Picture of the author"
 />
</div>
<div className=" flex max-h-96 max-w-ms bg-slate-500 justify-center ">


    <form action={" "} className="   ">
        <div className="  flex-grow px-4 py-2 m-2 justify-center items-center text-center  ">
              <label className=" p-7 " >Nome</label>
               <input type="text" name="name" />
        </div>
      
     
      <button type="submit">Submit</button>
    </form>
  

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
