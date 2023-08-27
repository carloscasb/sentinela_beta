//import Image from "next/image"


export default function Navbar() {
    return ( 
<>
        <div className={" w-screen h-20 border-b-[1px]  bg-orange-200 border-gray-300 text-black"}>
            <div className={" max-w-screen-2x1 h-full mx-auto px-4 flex justify-between  items-center "}>
          
                 <h1 className={" text-2xl uppercase font-bold"}>Sentinela_Beta</h1> 
                 <ul className={"flex justify-between items-center px-4 gap-6"}>
                    <li>Home</li>
                    <li>Page</li>
                    <li>Home</li>
                    </ul>
                 <div>Outros</div>
            </div>
          
        </div>
</>
        )
    }