'use client'
import { SyntheticEvent, useState } from "react";
/////5
import axios from "axios";
/////6
import { useRouter } from "next/navigation";



const Addfacc =  () => {

     //1 CRIAR ESTADO DE  VISIVEL (para trabalhar com modal)
 const [isOpen, setIsOpen] = useState(false);

 //2 CRIAR ESTADO (inicailmente vazio) PREPARANDO PARA GRAVAR
 //2/ SE TIVESSE RELACIONAMETO FARIAMOS TAMBEM PARA O ITEM RELACIONADO
 //2/ NA TABELA Facc SÒ TEM UM REGISTRO(linha) O (name), se tivesse mais fariamos
 const [name, setName] = useState("");

/////6 DECLARANDO A ROTA
const router = useRouter();

 //1CONTROLAR (lidar) COM O MODAL (VISIBILIDADE)
 const handleModalF = () => {
     setIsOpen(!isOpen);
 }

 ////4 VAMOS FAZER UMA FUCTION Async PARA GRAVAR (lidar) OS DADOS, (ESSA FUNCTION VAI SER CHAMADA LA NO FORM 
 // COM O EVENTO onSubmit)

 const handleSubmitF = async (e: SyntheticEvent) => {
    e.preventDefault();
     /////5 PAUSAREMOS AQUI PARA FAZER A API
    /////5 NESSE MOMENTO FAREMOS UMA api/facss/router.ts para fazer o CAMINHO (METODOS POST, DELETE, UPDATE)
    /////5 IMPORTAR AXIOS (la em cima) E FAZ O CAMINHO PARA O POST (api/facss)
    
    await axios.post ("./api/faccs", {
         /////5 ESCOLHE O ITEM
         name: name,
    });

     //////6 DEPOIS DE GRAVADO LIMPAR O CAMPO
     setName("");
     /////6 TEM UMA IMPORTAÇÃO IMPORTANTE QUE È A DO useRouter NAvigatiom e DECLARAR ACIMA
     /////6 ATUALIZA A ROTA
     router.refresh();
     /////7 FECHA O MODAL
     setIsOpen(false);

///////8 COMO JA DIZEMOS A FUNÇÂO SERÀ CHAMADA NO EVENTO onSubmit DO FORM

}
    
return (

    <div>
    <button className="btn" onClick={handleModalF} >NOVA FACÇÃO</button>

<div className={isOpen ? "modal modal-open" : "modal"}>
        
    <div className="modal-box">
                <h3 className="font-bold text-lg">Add New Facção</h3>
                    
                <form onSubmit={handleSubmitF}>
                    <div className="form-control w-full">
                        <label  className="label font-bold">Facção Nome</label>
                       
                        <input  type="text" 
                        ///3/SE MUDAR DE VALOR DIGITADO NO INPUT ASSUMA O NOVO
                          value={name}
                       
                        onChange = {(e)=>setName(e.target.value) }
                        className="input input-bordered" placeholder="Nome Facção" />
                    </div>
                    <div className="modal action"></div>
                    <button type="button" className="btn" onClick={handleModalF}>
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


export default Addfacc;