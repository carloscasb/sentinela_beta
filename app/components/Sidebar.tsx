import Image from "next/image"
import Link from "next/link"
import {IconeCasa, IconeEventos, IconeFaccoes, IconeLogin, IconeOrganizacoes, IconePasta, IconePessoas, IconeSistema, IconeUsuarios} from '../icons/page'
import UserPage from "../users/page"




export default function Sidebar() {
    return ( 

        <div className={" max-h-screen w-40 bg-red-100 border-r-[1px]  border-gray-300  float-left flex-col  "}>
            <div >
                <div>
                    <Image
                        src="/logoS.png"
                        width={150}
                        height={150}
                        alt="Picture of the author"
                    />
                </div>
           
                 <div className="flex-1">
                    <ul  className="pt-2 pb-4 space-y-1 text-sm" >
                        <li className="rounded-sm">
                            <Link href='/' className="flex items-center p-3 space-x-4 rounded-md">
                                {IconeCasa}
                                <span>Inícios</span>
                            </Link>
                        </li>

                        <li className="rounded-sm">
                            <Link href='/site/evento' className="flex items-center p-3 space-x-4 rounded-md">
                                {IconeEventos}
                                <span>Eventos</span>
                            </Link>
                        </li>

                        <li className="rounded-sm">
                            <Link href='/site/pessoa' className="flex items-center p-3 space-x-4 rounded-md">
                                {IconePessoas}
                                <span>Pessoas</span>
                            </Link>
                        </li>

                        <li className="rounded-sm">
                            <Link href='/site/faccao' className="flex items-center p-3 space-x-4 rounded-md">
                                {IconeFaccoes}
                                <span>Facções</span>
                            </Link>
                        </li>


                        <li className="rounded-sm">
                            <Link href='/site/organizacao' className="flex items-center p-3 space-x-4 rounded-md">
                                {IconeOrganizacoes}
                                <span>Organizações</span>
                            </Link>
                        </li>

                        <li className="rounded-sm">
                            <Link href='/users' className="flex items-center p-3 space-x-4 rounded-md">
                                {IconeUsuarios}
                                <span>Usuários</span>
                            </Link>
                        </li>

                        <li className="rounded-sm">
                            <Link href='/site/sistema' className="flex items-center p-3 space-x-4 rounded-md">
                                {IconeSistema}
                                <span>Sistema</span>
                            </Link>
                        </li>

                        

                        
                    </ul>
                    </div>
                 
            </div>
          
        </div>

        )
    }