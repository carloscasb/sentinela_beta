"use cliente"
import Image from "next/image"
import Link from "next/link"
//import {IconeCasa, IconeEventos, IconeFaccoes,  IconeOrganizacoes,  IconePessoas, IconeSistema, IconeUsuarios} from '../icons/page'
//import UserPage from "../users/page"

import { FaBeer } from "react-icons/fa";

import { BiCog } from 'react-icons/bi'

import { HiOutlineUsers } from 'react-icons/hi'

export default function Sidebar() {
    return ( 

        <div className={" max-h-screen w-40 bg-red-100 border-r-[1px]  border-gray-300  float-left flex-col  "}>
            <div >
                <div>
                    <Image
                        src="/logo.png"
                        width={150}
                        height={150}
                        alt="Picture of the author"
                    />
                </div>
           
                 <div className="flex-1">
                    <ul  className="pt-2 pb-4 space-y-1 text-sm" >
                       

                        <li className="rounded-sm">
                            <Link href='/site/sistema' className="flex items-center p-5 space-x-4 rounded-sm">
                            <FaBeer />
                           
                                <span>Sistema</span>
                            </Link>
                        </li>
                        
                        <li className=" rounded-xl">
                            <Link href='/site/faccao' className="flex items-center p-5 space-x-4  rounded-none ">
                            
                           < BiCog/>
                                <span>Outros</span>
                            </Link>
                        </li>

                        <li className=" rounded-xl">
                            <Link href='/site/faccao' className="flex items-center p-5 space-x-4  rounded-none ">
                            
                           < HiOutlineUsers/>
                                <span>Outros</span>
                            </Link>
                        </li>
                        
                        
                    </ul>
                    </div>
                 
            </div>
          
        </div>

        )
    }