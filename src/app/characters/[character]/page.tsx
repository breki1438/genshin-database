import { revalidatePath } from 'next/cache'
import CharacterInfoBox from '@/components/CharacterInfoBox';
import CharacterTopBox from '@/components/CharacterTopBox';
import CharacterConstellations from '@/components/CharacterConstellations';
import NavBar from '@/components/NavBar';
import SubPageMenu from '@/components/SubPageMenu';
import RecommendedBuilds from '@/components/builds/RecommendedBuilds';
import CharacterTalents from '@/components/CharacterTalents';
import CharacterTalents2 from '@/components/talents/CharacterTalents2';
import CharacterPassives from "@/components/passives/CharacterPassives";
import YouTubeVideo from "@/components/yt/YouTubeVideo";

export default async function Page({ params }: { params: { character: string }}) {
    revalidatePath('/');
    const postac = params.character;
    const characterData = await getCharacter(postac);
    const obrazek = `/images/${characterData.character.name.toLowerCase().replaceAll(' ', '')}/${characterData.character.name.toLowerCase().replaceAll(' ', '')}_background.png`;
    const obrazek2 = {
        backgroundImage: `url(${obrazek})`
    };

    const talenty = await getCharacterTalents(characterData.character.name);

    const passives = await getCharacterPasives(characterData.character.name);

    return (         
            <div className='flex flex-col w-full m-auto justify-center' style={ obrazek2 }>
                <div className='backdrop-blur-xl bg-no-repeat bg-top-100' style={{ backgroundImage: `url('/images/${characterData.character?.url}/${characterData.character?.url}_wish.webp')`}}>
                    <NavBar />
                    <div id='info' className='flex justify-center'>
                        <CharacterTopBox selectedCharacter={ characterData.character } />   
                    </div>
                    <div className='flex flex-wrap m-auto w-full md:max-w-3xl xl:max-w-7xl justify-center xl:justify-between'>
                        <SubPageMenu />
                        <CharacterInfoBox character={ characterData.character } />
                    </div>
                    <div id='talents' className='flex m-auto w-full max-w-3xl xl:max-w-7xl justify-center'>
                      <CharacterTalents2 talents={ talenty }/>
                    </div>
                    <div id='passives' className='flex m-auto w-full max-w-3xl xl:max-w-7xl justify-center'>
                        <CharacterPassives passives={ passives }/>
                    </div>
                    <div className='flex m-auto w-full max-w-3xl xl:max-w-7xl justify-center'>
                        <CharacterConstellations constellations={ characterData.characterConstellations } />    
                    </div>
                    <div id='builds' className='flex m-auto w-full max-w-3xl xl:max-w-7xl justify-center'>
                        <RecommendedBuilds weapons={ characterData.weapons } characterWeapons={ characterData.characterWeapons } artifactStats={ characterData.artifactStats } characterArtifacts={ characterData.artifactSets } artifacts={ characterData.artifacts } characterData={ characterData }/>
                    </div>
                    <div id='yt' className='flex m-auto w-full md:max-w-3xl xl:max-w-7xl justify-center'>
                        <YouTubeVideo />
                    </div>
                </div>                                                                                                   
            </div> 
           
    );
}

async function getCharacter(postac: string) {
    const isServer = typeof window === 'undefined';
    const baseUrl = isServer
        ? process.env.NEXT_PUBLIC_API_URL || 'https://localhost:3000' || `https://${process.env.VERCEL_URL}`
        : '';
    const res = await fetch(`${baseUrl}/api/characters?character=${postac}`);
    if(!res.ok) {
        throw new Error('Failed to fetch data')
    }

    return res.json()
}

async function getCharacterTalents(postac: string) {
  const isServer = typeof window === 'undefined';
    const baseUrl = isServer
        ? process.env.NEXT_PUBLIC_API_URL || 'https://localhost:3000' || `https://${process.env.VERCEL_URL}`
        : '';
    const res = await fetch(`${baseUrl}/api/characters/talents?character=${postac}`);
    if(!res.ok) {
        throw new Error('Failed to fetch data')
    }

    return res.json();
}

async function getCharacterPasives(postac: string) {
  const isServer = typeof window === 'undefined';
    const baseUrl = isServer
        ? process.env.NEXT_PUBLIC_API_URL || 'https://localhost:3000' || `https://${process.env.VERCEL_URL}`
        : '';
    const res = await fetch(`${baseUrl}/api/characters/passives?character=${postac}`);
    if(!res.ok) {
        throw new Error('Failed to fetch data')
    }

    return res.json();
}