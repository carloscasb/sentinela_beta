import React from "react";

export const metadata ={
title: 'Usuário',
}


const UsuarioLayout = ({children}: {children: React.ReactNode}) => {

    return (

        <div /*className="py-10 px-10"*/>
            {children}
        </div>

    )

}

export default UsuarioLayout;