

import { PrismaClient } from "@prisma/client";
import AddUsuario from "./addUsuario";
//import DeleteProduct from "./deleteProduct";
//import UpdateProduct from "./updateProduct";
const prisma = new PrismaClient();

//CHAMA OS REGISTROS (usuarios)
const getUsuarios = async () => {
  const res = await prisma.usuario.findMany({
    select: {
      id: true,
      name: true,
      email: true,
      acessoId: true,
      acesso: true,
      organId: true,
      organ: true,
    }, 
  
  });
  return res;
};

//ASSIM COMO CHAMAMOS OS USUARIOS VAMOS CHAMAR A ORGANIZAÇÃO (Organ)

const getOrgans = async ()=> {
  const res = await prisma.organ.findMany();
  return res;
}

//CHAMAR (listar) NIVEL DE ACESSOS (Acesso)

const getAcessos = async ()=> {
  const res = await prisma.acesso.findMany();
  return res;
}


const Usuario = async () => {
//VAmos declarar os organs e acessos
const [ usuarios, organs, acessos ] = await Promise.all([getUsuarios(), getOrgans(), getAcessos()]) ;
//console.log(acessos);


  return (
    <>
     <div className="flex bg-gray-700  h-screen">
          <div className="flex-grow text-gray-700 text-center bg-gray-400 px-4 py-2 m-2">
             

            <div className=" bg-white">

              <div className="mb-2">
                <AddUsuario organs={organs} />
                               
              </div>
             
              <table className="table w-full">
                <thead>
                  <tr>
                    <th>#</th>
                    <th>Nome do usuário</th>
                    <th>Organização</th>
                    <th>Acesso</th>
                    <th className="text-center">Ação</th>
                  </tr>
                </thead>
                <tbody>
                  {usuarios.map((usuario, index)=>(
                  <tr key={usuario.id}>
                    <td>{index + 1}</td>
                    <td>{usuario.name} </td>
                    <td>{usuario.acesso.title} </td>
                    <td>{usuario.organ.name} </td>
                    <td></td>
                  </tr>
                  ))}
                 
                </tbody>
              </table>

            </div>




            </div>
            </div>
   
  </>
)

}

export default Usuario;