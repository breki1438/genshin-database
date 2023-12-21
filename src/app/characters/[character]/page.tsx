import { revalidatePath } from 'next/cache'
import CharacterInfoBox from '@/components/CharacterInfoBox';
import CharacterTopBox from '@/components/CharacterTopBox';
import CharacterConstelations from '@/components/CharacterConstelations';
import NavBar from '@/components/NavBar';
import CharacterSKillsBox from '@/components/CharacterSkillsBox';
import SubPageMenu from '@/components/SubPageMenu';
import CharacterStats from '@/components/CharacterStats';
import RecommendedBuilds from '@/components/builds/RecommendedBuilds';
import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

export default async function Page({ params }: { params: { character: string }}) {
    revalidatePath('/');
    const jebanko = await fetch(`https://genshin-database-ten.vercel.app/api/characters`);
    //const jebanko = await fetch('http://localhost:3000/api/characters');
    const sraki = await jebanko.json();
    const postac = params.character;
    const selectedCharacter = sraki.characters.find((character: any) => character.url === postac);
    const pickColor = sraki.colorPalette.find((color: any) => color.element === selectedCharacter.element);
    const obrazek = `/images/${selectedCharacter.url}/${selectedCharacter.url}_background.png`;
    const obrazek2 = {
        backgroundImage: `url(${obrazek})`
    };
    await prisma.$connect()
    const characterInfo = await prisma.character.findFirst({
        where: { url: params.character }
    })
    console.log(characterInfo?.weaponType)

    const weapons1 = await prisma.characterWeapons.findMany({
        where: { characterName: selectedCharacter.name }
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
        where: { characterName: selectedCharacter.name }
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
    const artifactStats = await prisma.characterArtifactStats.findMany();
    await prisma.$disconnect()

    return (         
            <div className='flex flex-col w-full m-auto justify-center' style={ obrazek2 }>
                <div className='backdrop-blur-xl bg-no-repeat bg-top' style={{backgroundImage: `url('/images/${characterInfo?.url}/${characterInfo?.url}_wish.webp')`}}>
                    <NavBar />
                    <div id='info' className='flex justify-center'>
                        <CharacterTopBox selectedCharacter={characterInfo} />   
                    </div>
                    <div className='flex flex-wrap m-auto w-full md:max-w-3xl xl:max-w-7xl justify-center xl:justify-between'>
                        <SubPageMenu />
                        <CharacterInfoBox character={selectedCharacter} />
                    </div>
                    <div className='flex flex-wrap m-auto w-full max-w-3xl xl:max-w-7xl justify-center xl:justify-between'>
                        <CharacterSKillsBox character={selectedCharacter} color={pickColor}/>
                        <CharacterConstelations character={selectedCharacter} color={pickColor} />    
                    </div>
                    <div id='stats' className='flex m-auto w-full max-w-3xl xl:max-w-7xl justify-center'>
                        <CharacterStats character={selectedCharacter}/>                       
                    </div>
                    <div id='builds' className='flex m-auto w-full max-w-3xl xl:max-w-7xl justify-center'>
                        <RecommendedBuilds weapons={ bronie } characterWeapons={ weapons1 } artifactStats={ artifactStats } characterArtifacts={ artifactSets } artifacts={ artifacts }/>
                    </div>
                    <div className='w-full h-3000 bg-poldark'>
                        d
                    </div>
                </div>                                                                                                   
            </div> 
           
    );
}