
'use client'

import { useState } from "react";
import  type  { Organ } from "@prisma/client";
import type { Acesso } from "@prisma/client";

const AddUsuario = ({organs}:{organs: Organ[]}, {acessos}:{acessos: Acesso[]}) => {

    // mudar estado de VISIVEL
    const [isOpen, setIsOpen] = useState(false);


    //Lidar com o estado com arrow function
   
    const handelModal = () => {
        setIsOpen(!isOpen);
    };


    return (
         
        <div>
           
            <button className="btn" onClick={handelModal}>Add New</button>

            <div className={isOpen ? "modal modal-open" : "modal"}>
            <div className="modal-box">
            <h3 className="font-bold text-lg">Add New Usuário</h3>
          <form >
                        <div className="form-control w-full">
                            <label className="label font-bold">Usuário Nome</label>
                            <input
                                type="text"
                                className="input input-bordered"
                                placeholder="Usuário Nome"
                            />
                        </div>

                        <div className="form-control w-full">
                            <label className="label font-bold">Email</label>
                            <input
                                type="text"

                                className="input input-bordered"
                                placeholder="Email"
                            />
                        </div>

                        <div className="form-control w-full">
                            <label className="label font-bold">Organização</label>
                            <select
                                //value=""

                                className="select select-bordered">
                                <option value="" disabled>
                                    Selecione a Organização
                                </option>
                                {organs.map((organ)=>( 
                                <option value={organ.id} key={organ.id}>{organ.name}</option>
                                    ))};
                            </select>
                        </div>

                        <div className="form-control w-full">
                            <label className="label font-bold">Acesso</label>
                            <select
                               // value=""

                                className="select select-bordered">
                                <option value="" disabled>
                                    Selecione o Nivel de Acesso
                                </option>

                               <option value="">
                                    Nivel 1
                                </option>

                             

                            </select>
                        </div>

                        <div className="modal-action">
                            <button type="button" className="btn" onClick={handelModal}>
                                Close
                            </button>

                            <button type="submit" className="btn btn-primary">
                                Save
                            </button>


                        </div>
          </form>
        </div>
      </div>

        </div>
    )

}

export default AddUsuario;