import { NextRequest, NextResponse } from 'next/server';
import { PrismaClient } from '@prisma/client';

export async function GET(req: NextRequest) {
    const prisma = new PrismaClient();
    const selectedCharacter = req.nextUrl.searchParams.get('character')!;

    const passives = await prisma.passives.findMany({
        where: {
            characterName: selectedCharacter,
        },
    });

    const sortedPassives = passives?.sort((a, b) => (a.id < b.id ? -1 : 1))

    await prisma.$disconnect()

    return NextResponse.json(sortedPassives);
}