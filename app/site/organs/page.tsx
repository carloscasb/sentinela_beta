import { PrismaClient } from "@prisma/client";
//import DeleteProduct from "./deleteProduct";
import AddOrgan from "./addOrgan";
//import UpdateProduct from "./updateProduct";

const prisma = new PrismaClient();

const getOrgans = async () => {
  const res = await prisma.organ.findMany({
    select: {
      id: true,
      name: true,

    },
  });
  return res;
};


export default async function Organizacao() {

    const organs = await getOrgans();

  //  console.log(organs)

    return (
        <div className="flex bg-gray-700  h-screen">
            <div className="flex-grow text-gray-700 text-center bg-gray-400 px-4 py-2 m-2">
                
            <div className=" bg-white">

            <div className="mb-2">
                <AddOrgan/>
            </div>
              
            <table className="table w-full">
                <thead>
                    <tr>
                        <th>#</th>
                        <th>Nome</th>
                        <th className=" text-center">Ação</th>
                        
                    </tr>
                </thead>
                <tbody>
                {organs.map((organ, index) => (
                    <tr key={organ.id}>
                        <td>{index +1}</td>
                        <td>{organ.name}</td>
                        <td>{/*organ.id*/}</td>
                       
                    </tr>
                ))}
                </tbody>
            </table>

            </div>

            </div>
            
        </div>
    )
}

