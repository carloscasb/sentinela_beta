"use client";
import { useState, SyntheticEvent } from "react";
import type { Organ } from "@prisma/client";
import type { Acesso } from "@prisma/client";
import { useRouter } from "next/navigation";
import axios from "axios";

const AddProduct = ({ organs }: { organs: Organ[] }) => {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [organ, setOrgan] = useState("");
    const [isOpen, setIsOpen] = useState(false);
 
  const router = useRouter();

  const handleSubmitU = async (e: SyntheticEvent) => {
    e.preventDefault();
   
    await axios.post("./api/usuarios", {
        name: name,
        email: email,
        organId:  Number(organs)
        
        
    });
   
    setName("");
    setEmail("");
    setOrgan("");
    router.refresh();
    setIsOpen(false);
  };

  const handleModalU = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div>
      <button className="btn" onClick={handleModalU}>
        Add New
      </button>

      <div className={isOpen ? "modal modal-open" : "modal"}>
        <div className="modal-box">
          <h3 className="font-bold text-lg">Add New Usuário</h3>
          <form onSubmit={handleSubmitU}>
            <div className="form-control w-full">
              <label className="label font-bold">Usuário Nome</label>
              <input
                type="text"
                value={name}
                onChange={(e) => setName(e.target.value)}
                className="input input-bordered"
                placeholder="Usuário Nome"
              />
            </div>
            <div className="form-control w-full">
              <label className="label font-bold">Email</label>
              <input
                type="text"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="input input-bordered"
                placeholder="Email"
              />
            </div>
            <div className="form-control w-full">
              <label className="label font-bold">Organização</label>
              <select
                value={organ}
                onChange={(e) => setOrgan(e.target.value)}
                className="select select-bordered"
              >
                <option value="" disabled>
                Selecione a Organização
                </option>
                {organs.map((organ) => (
                  <option value={organ.id} key={organ.id}>
                    {organ.name}
                  </option>
                ))}
              </select>
            </div>

            <div className="form-control w-full">
                            <label className="label font-bold">Acesso</label>
                            <select
                               // value=""
                              // value={acesso}
                              // onChange= {(e) => setAcesso(e.target.value)}
                                className="select select-bordered">
                                <option value="" disabled>
                                    Selecione o Nivel de Acesso
                                </option>

                              
                                <option value="">COORDENADOR</option>
                                <option value="">GERENTE</option>
                                <option value="">OSTENSIVO</option>
                                 

                          </select>
                        </div>

                        <div className="modal-action">
                            <button type="button" className="btn" onClick={handleModalU}>
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
  );
};

export default AddProduct;