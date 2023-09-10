import Image from "next/image"
import Addfacc from "./addFacc"
// IMPORTAR
import { PrismaClient } from "@prisma/client"
// CRIAR UMA ESTANCIA NOVA PARA O PRISMA
const prisma = new PrismaClient();
//IMPORTAR COMPONENETE DELETEFACC e exibir la na ação da tabela
import Deletefacc from "./deleteFacc";
//////////9 IMPORTAR UpdateFacc
import Updatefacc from "./updateFacc";



//FAZER UMA FUNÇÃO ASINCROMA GET PARA MOSTRAR (guardar) OS REGISTROS
const getFaccs = async ()=> {

  /** INICIALMENTE MOSTRA VAZIA 
  const res = await prisma.facc.findMany();
  return  res;
  */

  //AGORA VAMOS ESPECIFICAR O QUE QUEREMOS PEGAR - E EXIBE NA TABELA PELO MAP
  const res = await prisma.facc.findMany({
    select: {
             id:true,
             name: true,
           
            }

  });
  return  res;

}

export default async function FaccPage() {
 // E PREPARAR PARA MOSTRA AQUI OS REGISTROS (atraves do map) PARA TESTAR PODE FAZER UM CONSOLE.LOG
  const Faccs = await getFaccs()
  //console.log(Faccs); 
  //NÃO VAI MOSTRAR PQ NAO TEM MAS MOSTRAR A WAY NO TERMINAL

    return (
      
      <div className="flex bg-gray-700  h-screen">
        <div className="flex-grow text-gray-700 text-center bg-gray-400 px-4 py-2 m-2">

          <div className=" bg-white">

            <div className="mb-2" /*2 QUANDO CRIAR A FUNÇÃO Addfacc (bottun)*/>
              <Addfacc />

            </div>

            <table className="table w-full ">
              <thead>
                <tr>
                  <th>#</th>
                  <th>Nome</th>
                  <th className=" text-center">Ação</th>
                </tr>
              </thead>
              <tbody>
                {Faccs.map((facc, index) => (
                  <tr key={facc.id}>
                    <td>{index + 1}</td>
                    <td>{facc.name} </td>
                    <td> 
                      <Updatefacc /**  brands={brands}*//>
                      <Deletefacc facc={facc} />
                       </td>
                  </tr>
                ))}

              </tbody>
            </table>
          </div>
        </div>
      </div>



      
  )
}
