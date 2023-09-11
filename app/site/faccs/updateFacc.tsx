'use client'
import { SyntheticEvent, useState } from "react";
/////5
import axios from "axios";
/////6
import { useRouter } from "next/navigation";
import { text } from "stream/consumers";
///5.1 EM VEZ DE IMPORTAR A TABELA ------import { Facc } from "@prisma/client";
///5.1 DECLARAMOS OS TIPOS --- Já podemos usar {facc.id ou facc.name}
//import type { Facc } from "@prisma/client";

type Facc = {
    id: number;
    name: string;
}



const Updatefacc =  ({ facc }: { facc: Facc }) => {

     //1 CRIAR ESTADO DE  VISIVEL (para trabalhar com modal)
 const [isOpen, setIsOpen] = useState(false);

 //2 CRIAR ESTADO (inicailmente com o campo a mudar) PREPARANDO PARA EDITAR
 //2/ SE TIVESSE RELACIONAMETO FARIAMOS TAMBEM PARA O ITEM RELACIONADO
 //2/ NA TABELA Facc SÒ TEM UM REGISTRO(linha) O (name), se tivesse mais fariamos
 const [name, setName] = useState(facc.name);

/////6 DECLARANDO A ROTA
const router = useRouter();

 //1CONTROLAR (lidar) COM O MODAL (VISIBILIDADE)
 const handleModalF = () => {
     setIsOpen(!isOpen);
 }

 ////4 VAMOS FAZER UMA FUCTION Async PARA EDITAR (lidar) OS DADOS, (ESSA FUNCTION VAI SER CHAMADA LA NO FORM 
 // COM O EVENTO onSubmit)

 const handleUpadeF = async (e: SyntheticEvent) => {
    e.preventDefault();
     /////5 PAUSAREMOS AQUI PARA FAZER A API
    /////5 NESSE MOMENTO FAREMOS UMA api/facss/router.ts para fazer o CAMINHO (METODOS UPDATE, DELETE, )
    /////5 IMPORTAR AXIOS (la em cima) E FAZ O CAMINHO PARA O POST (api/facss)
    
    await axios.patch(`./api/faccs/${facc.id}`, {
         /////5 ESCOLHE O ITEM
         name: name,
    });
   
     /////6 TEM UMA IMPORTAÇÃO IMPORTANTE QUE È A DO useRouter NAvigatiom e DECLARAR ACIMA
     /////6 ATUALIZA A ROTA
     router.refresh();
     /////7 FECHA O MODAL
     setIsOpen(false);

///////8 COMO JA DIZEMOS A FUNÇÂO SERÀ CHAMADA NO EVENTO onSubmit DO FORM

}
    
return (

    <div>
    <button className="btn btn-info btn-sm" onClick={handleModalF} >Editar</button>

<div className={isOpen ? "modal modal-open" : "modal"}>
        
    <div className="modal-box">
                <h3 className="font-bold text-lg">Update  {facc.name}</h3>
                    
                <form onSubmit={handleUpadeF}>
                    <div className="form-control w-full">
                        <label className="label font-bold">Editar Facção </label>

                        <input type="text"
                            ///3/SE MUDAR DE VALOR DIGITADO NO INPUT ASSUMA O NOVO (NO UPDATE MUDEI PARA setName)

                            value={name}
                            onChange={(e) => setName(e.target.value)}

                            className="input input-bordered" placeholder="Nome Facção" />
                    </div>
                    <div className="modal action"></div>
                    <button type="button" className="btn" onClick={handleModalF}>
                        Close
                    </button>

                    <button type="submit" className="btn btn-primary">
                        Update
                    </button>
                </form>
                </div>
          
        </div>
    </div>


)
}


export default Updatefacc;