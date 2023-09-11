
import Image from "next/image"
import Link from "next/link"
//import {IconeCasa, IconeEventos, IconeFaccoes,  IconeOrganizacoes,  IconePessoas, IconeSistema, IconeUsuarios} from '../icons/page'
//import UserPage from "../users/page"

import { FaBeer } from "react-icons/fa";

import { BiCog } from 'react-icons/bi'

import { HiHome, HiOutlineFire, HiOutlineFlag, HiOutlineUsers,  HiOutlineCog, HiOutlineUserGroup, HiOutlineScale, HiOutlineHome, HiOutlineKey } from 'react-icons/hi'


export default function Sidebar() {
    return ( 

        <div className={" max-h-screen w-40 bg-red-100 border-r-[1px]  border-gray-300  float-left flex-col  "}>
            <div >
                <div>
                    <Image 
                        src="/logo.png"
                        width={'150'}
                        height={'150'}
                        alt="Picture of the author"
                        priority
                    />
                </div>
           
                 <div className="flex-1">
                    <ul  className="pt-2 pb-4 space-y-1 text-sm" >
                       
                    <li className="rounded-sm">
                            <Link href='/' className="flex items-center p-3 space-x-4 rounded-md">
                            <HiOutlineHome size={30} />
                                <span>Inícios</span>
                            </Link>
                        </li>

                        <li className="rounded-sm">
                            <Link href='/site/eventos' className="flex items-center p-3 space-x-4 rounded-md">
                            <HiOutlineFire size={30}/>
                                <span>Eventos</span>
                            </Link>
                        </li>

                        <li className="rounded-sm">
                            <Link href='/site/pessoas' className="flex items-center p-3 space-x-4 rounded-md">
                                <HiOutlineUsers size={30}/>
                                <span>Pessoas</span>
                            </Link>
                        </li>

                        <li className="rounded-sm">
                            <Link href='/site/faccs' className="flex items-center p-3 space-x-4 rounded-md">
                                <HiOutlineFlag size={30}/>
                                <span>Facções</span>
                            </Link>
                        </li>


                        <li className="rounded-sm">
                            <Link href='/site/organs' className="flex items-center p-3 space-x-4 rounded-md">
                                <HiOutlineScale size={30}/>
                                <span>Organizações</span>
                            </Link>
                        </li>

                        <li className="rounded-sm">
                            <Link href='/site/usuarios' className="flex items-center p-3 space-x-4 rounded-md">
                                <HiOutlineUserGroup size={30}/>
                                <span>Usuários</span>
                            </Link>
                        </li>

                        <li className="rounded-sm">
                            <Link href='/site/sistemas' className="flex items-center p-3 space-x-4 rounded-md">
                                <HiOutlineCog size={30}/>
                                <span>Sistema</span>
                            </Link>
                        </li>
                        
                        <li className="rounded-sm">
                            <Link href='/site/suportes' className="flex items-center p-3 space-x-4 rounded-md">
                                <HiOutlineKey size={30}/>
                                <span>Suporte</span>
                            </Link>
                        </li>
                        
                    </ul>
                    </div>
                 
            </div>
          
        </div>

        )
    }