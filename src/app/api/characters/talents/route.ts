import { NextRequest, NextResponse } from 'next/server';
import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

export async function GET(req: NextRequest) {
    const prisma = new PrismaClient();
    const selectedCharacter = req.nextUrl.searchParams.get('character')!;
    //console.log(selectedCharacter);

    const talentParameters = await prisma.character.findUnique({
        where: {
            name: selectedCharacter,
        },
        include: {
            talents: {
                include: {
                    talentParameters: true,
                },
            },
        },
    });

    const sortedTalentParameters = talentParameters?.talents.sort((a, b) => (a.id < b.id ? -1 : 1))

    await prisma.$disconnect()

    return NextResponse.json(sortedTalentParameters);
}