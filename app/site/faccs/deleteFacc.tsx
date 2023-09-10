
'use client'
import { SyntheticEvent, useState } from "react";
/////5
import axios from "axios";
/////6
import { useRouter } from "next/navigation";
///5 EM VEZ DE IMPORTAR A TABELA ------import { Facc } from "@prisma/client";
///5 DECLARAMOS OS TIPOS --- Já podemos usar {facc.id ou facc.name}
type Facc = {
    id: number;
    name: string;
}

//2 IMPORTAR A TABELA FACC e SETAR O REGISTRO
const Deletefacc = ({ facc }: { facc: Facc }) => {

  //1 CRIAR ESTADO DE  VISIVEL (para trabalhar com modal)
 const [isOpen, setIsOpen] = useState(false);

  //1CONTROLAR (lidar) COM O MODAL (VISIBILIDADE)
 const handleModal_DF = () => {
     setIsOpen(!isOpen);
 }

//3 VAMOS EM PAGE.TSX E COLOCAR UM BOTÃO DELETE (importando o componente) E OUTRO DE EDITAR (<td> <Deletefacc facc={facc}/> </td>)

/////6 DECLARANDO A ROTA
const router = useRouter();


 ////4 VAMOS FAZER UMA FUCTION Async PARA DELETAR (lidar) OS DADOS, (ESSA FUNCTION VAI SER CHAMADA LA NO BOTÃO SIM 
 //4 COM O EVENTO onCLICK (-onClick={()=> handleDeleteF(facc.id) }-)
 //4 O AXIOS VAI PEGAR A API DELETE PELA ROUTE

 const handleDeleteF = async (faccId: number) => {
    //setIsLoading
    
     /////5 PAUSAREMOS AQUI PARA FAZER A API
    /////5 NESSE MOMENTO FAREMOS UMA api/facss/[id]/router.ts para fazer o CAMINHO (METODOS  DELETE, UPDATE)
    /////5 DEPOIS DE FAZER A API - IMPORTAR AXIOS (la em cima) E FAZ O CAMINHO PARA O POST (api/facss)

    await axios.delete(`./api/faccs/${facc.id}`);
    
     /////6 TEM UMA IMPORTAÇÃO IMPORTANTE QUE È A DO useRouter NAvigatiom e DECLARAR ACIMA
     /////6 ATUALIZA A ROTA
     router.refresh();
     /////7 FECHA O MODAL
     setIsOpen(false);

}
    
return (

    <div>
        <button className="btn btn-error btn-sm" onClick={handleModal_DF} >Delete</button>

        <div className={isOpen ? "modal modal-open" : "modal"}>

            <div className="modal-box">
                <h3 className="font-bold text-lg">Você quer mesmo EXCLUIR O REGISTRO {facc.name}</h3>

                <div className="modal action"></div>
                <button type="button" className="btn" onClick={handleModal_DF}>
                    Não
                </button>

                <button type="button" onClick={() => handleDeleteF(facc.id)} className="btn btn-primary">
                    Sim
                </button>
            </div>
        </div>
    </div>


)
}


export default Deletefacc;