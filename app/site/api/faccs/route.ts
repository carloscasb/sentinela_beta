import { NextRequest, NextResponse } from "next/server";
import {  PrismaClient } from "@prisma/client";
//2 IMPORTAR TABELA (tipo) Facc
import type { Facc } from "@prisma/client";
//1 CRIA UMA NOVA ESTANCIA DO PRisma
const prisma = new PrismaClient();


export const POST = async (request: Request) => {

    const body: Facc = await request.json();
    const facc = await prisma.facc.create({
        data:{
            name: body.name,
       
        }
    });
    return NextResponse.json(facc, {status: 201});
    
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