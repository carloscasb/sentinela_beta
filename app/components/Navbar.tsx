//import Image from "next/image"

import Link from "next/link";
import { FaBeer } from "react-icons/fa";

import { BiCog } from 'react-icons/bi'

import { HiHome, HiOutlineFire, HiOutlineFlag, HiOutlineUsers,  HiOutlineCog, HiOutlineUserGroup, HiOutlineScale, HiOutlineHome, HiOutlineKey } from 'react-icons/hi'


export default function Navbar() {
    return ( 
<>
        <div className={" h-screen w-40 border-b-[1px]  bg-orange-200 border-gray-800 text-black"}>
            <div className={" max-w-screen-2x1 h-full mx-auto px-4 flex-col justify-between  items-center "}>
          
                 
                 <ul className={"flex-col justify-between items-center px-2 gap-6"}>
                 <li className="rounded-sm">
                            <Link href='/' className="flex items-center p-3 space-x-4 rounded-md">
                            <HiOutlineHome size={80} />
                                <span>Inícios</span>
                            </Link>
                        </li>
                        <li className="rounded-sm">
                            <Link href='/site/eventos' className="flex items-center p-3 space-x-4 rounded-md">
                            <HiOutlineFire size={80}/>
                                <span>Eventos</span>
                            </Link>
                        </li>

                        <li className="rounded-sm">
                            <Link href='/site/pessoas' className="flex items-center p-3 space-x-4 rounded-md">
                                <HiOutlineUsers size={80}/>
                                <span>Pessoas</span>
                            </Link>
                        </li>

                        <li className="rounded-sm">
                            <Link href='/site/faccs' className="flex items-center p-3 space-x-4 rounded-md">
                                <HiOutlineFlag size={80}/>
                                <span>Facções</span>
                            </Link>
                        </li>


                        <li className="rounded-sm">
                            <Link href='/site/organs' className="flex items-center p-3 space-x-4 rounded-md">
                                <HiOutlineScale size={80}/>
                                <span>Organizações</span>
                            </Link>
                        </li>

                        <li className="rounded-sm">
                            <Link href='/site/usuarios' className="flex items-center p-3 space-x-4 rounded-md">
                                <HiOutlineUserGroup size={80}/>
                                <span>Usuários</span>
                            </Link>
                        </li>

                        <li className="rounded-sm">
                            <Link href='/site/sistemas' className="flex items-center p-3 space-x-4 rounded-md">
                                <HiOutlineCog size={80}/>
                                <span>Sistema</span>
                            </Link>
                        </li>
                        
                        <li className="rounded-sm">
                            <Link href='/site/suportes' className="flex items-center p-3 space-x-4 rounded-md">
                                <HiOutlineKey size={80}/>
                                <span>Suporte</span>
                            </Link>
                        </li>
                    </ul>
              
            </div>
          
        </div>
</>
        )
    }