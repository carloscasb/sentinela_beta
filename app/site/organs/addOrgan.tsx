
'use client'
import { useState, SyntheticEvent } from "react";
import axios from "axios";
import { useRouter } from "next/navigation";

const AddOrgan = () => {

    //2/VAMOS CRIAR UM ESTADO PARA CADA LINHA (item da tabela) - INICIANDO VAZIO
    //2/ SE TIVESSE RELACIONAMETO FARIAMOS TAMBEM PARA O ITEM RELACIONADO
    //2/ NA TABELA Organ SÒ TEM UM REGISTRO(linha) O (title)
    //const [title, setTitle] = useState ("");
    const [name, setName] = useState ("");
    ////////8/ POR FIM IMPORTA O UseROUTER E DECLARA
    const router = useRouter();

    ///3/ DEPOIS VAMOS O OBJETO CORRESPONDENTE (la no input do Form ) e faz a condição de se houve mudança
    /** 
     * 
                        <input type={title}
                         ////SE MUDAR DE VALOR
                        onChange = {(event)=>setTitle(e.targe.value) }
    */


////4/VAMOS CRIAR A CONSTANTE DE GRAVAÇÃO (handleSubmit) E COLOCAR(SUBMETER) NA ACÃO DO FORM  (Importar SyntheticEvent  )
////4/ <form onSubmit={handleSubmit}>

const handleSubmit = async (e: SyntheticEvent) => {
    e.preventDefault();
///////6/ IMPORTAR AXIOS (la em cima) E FAZ O CAMINHO
await axios.post("./api/organs", {
    name: name,

});
//////6/ESVAZIA OS CAMPOS
setName ("");
/////////8/ E VOLTA ROUTER
router.refresh();
///////8/ FECHA MODAL
setIsOpen(false);
}

/////5/VAMOS EM App/api/organizacao/touter (POST) e FAREMOS UMA ROUTER POST PARA ORGANIZAÇÃO

/**
 * 
import { NextResponse } from "next/server";
import { PrismaClient } from "@prisma/client";
const prisma= new PrismaClient();
import type { Organ } from "@prisma/client";

export const POST = async (request: Request) => {

    const body: Organ = await request.json();
    const organ = await prisma.organ.create({
        data:{
            
            name: body.name,
        }

    });
    return NextResponse.json(organ); 

}
 */

    //1 CRIAR ESTADO DE  VISIVEL 
    const [isOpen, setIsOpen] = useState(false);

    //1CONTROLAR (lidar) COM O MODAL (VISIBILIDADE)
    const handleModalO = () => {
        setIsOpen(!isOpen)
    }


    return (

        <div>

            <button className="btn" onClick={handleModalO}>NOVA ORGANIZAÇÃO</button>

            <div className={isOpen ? "modal modal-open" : "modal"}>
                <div className="modal-box">
                <h3 className="font-bold text-lg">Add New Organização</h3>

                <form onSubmit={handleSubmit}>
                    <div className="form-control w-full">
                        <label  className="label font-bold">Organização Nome</label>
                       
                        <input  type="text"
                            value={name}
                         ///3/SE MUDAR DE VALOR DIGITADO NO INPUT ASSUMA O NOVO
                        onChange = {(e)=>setName(e.target.value) }
                        className="input input-bordered" placeholder="Nome Organização" />
                    </div>
                    <div className="modal action"></div>
                    <button type="button" className="btn" onClick={handleModalO}>
                                Close
                            </button>

                            <button type="submit" className="btn btn-primary">
                                Save
                            </button>
                    </form>
                </div>
            </div>
        </div>
    )

}

export default AddOrgan;