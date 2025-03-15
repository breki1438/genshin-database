import { PrismaClient } from '@prisma/client';
import { NextRequest, NextResponse } from 'next/server';

export async function GET(req: NextRequest) {
    const prisma = new PrismaClient();
    const selectedCharacter = req.nextUrl.searchParams.get('character')!;
    const characterData = await prisma.character.findFirst({
        where: {
            url: selectedCharacter
        },
        include: {
            constellations: true,
            talents: {
                include: {
                    talentParameters: true,
                },
            },
            passives: true,
            weapons: true,
            artifacts: true,
            artifactSets: true,
        }
    })
    await prisma.$disconnect()

    characterData?.constellations.sort((a: any, b: any) => a.id -b.id)
    characterData?.talents.sort((a: any, b: any) => a.id -b.id)
    characterData?.passives.sort((a: any, b: any) => a.id -b.id)

    return NextResponse.json(characterData);
}