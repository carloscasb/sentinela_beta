
import { NextRequest, NextResponse } from "next/server";
import {  PrismaClient } from "@prisma/client";

//1 CRIA UMA NOVA ESTANCIA DO PRisma
const prisma = new PrismaClient();
//2 IMPORTAR TABELA (tipo) Usuarios do schema.prisma
import type { Usuario } from "@prisma/client";

export const POST = async (request: Request) => {

    const body: Usuario = await request.json();
    const usuario = await prisma.usuario.create({
        data:{
           
            email: body.email,
            name: body.name,
            organId: body.organId,
            acessoId: body.acessoId
            

       
        }
    });
    return NextResponse.json(usuario,  {status: 201});
    
}

/** 
export const POST = async (request: NextRequest) => {

    const {name} = await request.json();
    const facc = await prisma.facc.create({
        data:{
            name
        }
    })

    return NextResponse.json({facc})
}

*/