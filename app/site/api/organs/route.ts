

import { NextRequest, NextResponse } from "next/server";
import { PrismaClient } from "@prisma/client";
import type { Organ } from "@prisma/client";
const prisma = new PrismaClient();

export const POST = async (request: Request) =>{
    const body: Organ = await request.json();
    const organ = await prisma.organ.create({
        data:{
            name: body.name,
       
        }
    });
    return NextResponse.json(organ, {status: 201});
}
