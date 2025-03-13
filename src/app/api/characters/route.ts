import { NextRequest, NextResponse } from 'next/server';
import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

export async function GET(req: NextRequest) {
    let data: {
        character: any, 
        weapons: any,
        characterWeapons: any,
        artifacts: any, 
        artifactStats: any,
        artifactSets: any,
        characterTalents: any, 
        characterConstellations: any
    } = {
        character: null, 
        weapons: null,
        characterWeapons: null,
        artifacts: null, 
        artifactStats: null,
        artifactSets: null,
        characterTalents: null, 
        characterConstellations: null
    }

    const selectedCharacter = req.nextUrl.searchParams.get('character')!;

    if (!selectedCharacter) {
        return NextResponse.json({ error: 'Did not provide character name'})
    } else {
        const character = await prisma.character.findFirst({
            where: { url: selectedCharacter }
        });
        if (!character) {
            return NextResponse.json({ error: 'Invalid character name'})
        } else {
            const weapons1 = await prisma.characterWeapons.findMany({
                where: { characterName: character.name }
            })
            let broniewszystkie: string[] = []
            weapons1.forEach(  (item) => {
                broniewszystkie.push(item.weaponName)
            } )
            const bronie = await prisma.weapon.findMany({
                where: { name: {
                    in: broniewszystkie
                } }
            })
        
            const artifactSets = await prisma.characterArtifactSets.findMany({
                where: { characterName: character.name }
            })
            let allArtifacts: string[] = []
            artifactSets.forEach((item) => {
                allArtifacts.push(item.artifactName)
            })
            const artifacts = await prisma.artifacts.findMany({
                where: { name: {
                    in: allArtifacts
                } }
            })
            const artifactStats = await prisma.characterArtifactStats.findMany({
                where: { characterName: character.name }
            });
        
            const characterTalents = await prisma.characterTalents.findMany({
                where: { characterName: character.name }
            })
        
            const characterConstellations = await prisma.characterConstellations.findMany({
                where: { characterName: character.name }
            })

            await prisma.$disconnect()

            data.character = character
            data.weapons = bronie
            data.characterWeapons = weapons1
            data.artifacts = artifacts
            data.artifactStats = artifactStats
            data.artifactSets = artifactSets
            data.characterTalents = characterTalents
            data.characterConstellations = characterConstellations
        }
    }   

    return NextResponse.json(data);
}