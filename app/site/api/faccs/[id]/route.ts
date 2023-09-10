
import { NextRequest, NextResponse } from "next/server";
import {  PrismaClient } from "@prisma/client";
//2 IMPORTAR TABELA (tipo) Facc
import type { Facc } from "@prisma/client";
//1 CRIA UMA NOVA ESTANCIA DO PRisma
const prisma = new PrismaClient();


export const DELETE = async (request: Request, {params}: {params: {id: string}}) =>{
   
    const facc = await prisma.facc.delete({

        where:{
            id: Number(params.id)
        }
      
    });
    return NextResponse.json(facc, {status: 200});
    
}

//VAI LA EM deleteFacc.tsx e faz o caminho com axios