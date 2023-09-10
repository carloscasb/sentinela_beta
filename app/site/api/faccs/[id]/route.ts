
import { NextRequest, NextResponse } from "next/server";
import {  PrismaClient } from "@prisma/client";
//2 IMPORTAR TABELA (tipo) Facc
import type { Facc } from "@prisma/client";
//1 CRIA UMA NOVA ESTANCIA DO PRisma
const prisma = new PrismaClient();

/// FUNCTION PARA EDITAR
export const PATCH = async (request: Request, {params}: {params: {id: string}})=>{
    const body: Facc = await request.json();
    const facc = await prisma.facc.update({

        where:{
            id: Number(params.id)
        },
        data: {
            name: body.name
        }
      
    });
    return NextResponse.json(facc, {status: 200});
    
}




/// FUNCTION PARA DELETRA


export const DELETE = async (request: Request, {params}: {params: {id: string}}) =>{
   
    const facc = await prisma.facc.delete({

        where:{
            id: Number(params.id)
        }
      
    });
    return NextResponse.json(facc, {status: 200});
    
}

//VAI LA EM deleteFacc.tsx e faz o caminho com axios