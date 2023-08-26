
"use cliente"

import { ModalContext } from "./modal-context"
import { ReactNode, useState } from "react"

function ModalProvider({children }: {children: React.ReactNode}) {

const [show, setShow] = useState<boolean>(false);

    return (

        
        <ModalContext.Provider value={{show, setShow}}>
            {children}
        </ModalContext.Provider>

    )

}