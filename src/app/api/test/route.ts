import { PrismaClient } from '@prisma/client';
import { NextResponse } from 'next/server';

export async function GET(req: Request) {
    const prisma = new PrismaClient();
    const characters = await prisma.character.findMany({
        select: {
            name: true,
            stars: true,
            element: true,
            weaponType: true,
            url: true
        }
    })
    await prisma.$disconnect()

    return NextResponse.json(characters);
}