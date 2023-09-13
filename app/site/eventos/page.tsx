
import Modal from "@/app/components/modal/modal"
import Image from "next/image"

export default function Evento(){

    return(
      <div className="flex bg-gray-700  h-screen">
        <div className="flex-grow text-gray-700 text-center bg-gray-100 px-4 py-2 m-2">
          Eventos

          <div>
                    <Image
                        src="/logo2.png"
                        width={'150'}
                        height={'150'}
                        alt="lobo"
                        priority
                        
                      
                    />
                </div>





        </div>

      </div>
    )
}

