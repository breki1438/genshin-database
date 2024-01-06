import { PrismaClient } from '@prisma/client';
import { NextResponse } from 'next/server';

const prisma = new PrismaClient();

export async function GET(req: Request) {
    const characters = await prisma.character.findMany();
    await prisma.$disconnect()

    return Response.json(characters);
}