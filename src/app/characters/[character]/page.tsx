import { revalidatePath } from 'next/cache'
import CharacterInfoBox from '@/components/CharacterInfoBox';
import CharacterTopBox from '@/components/CharacterTopBox';
import CharacterConstellations from '@/components/CharacterConstellations';
import NavBar from '@/components/NavBar';
import SubPageMenu from '@/components/SubPageMenu';
import RecommendedBuilds from '@/components/builds/RecommendedBuilds';
import CharacterTalents2 from '@/components/talents/CharacterTalents2';
import CharacterPassives from "@/components/passives/CharacterPassives";
import YouTubeVideo from "@/components/yt/YouTubeVideo";
import SideBar from "@/components/SideBar";

export default async function Page({ params }: { params: { character: string }}) {
    revalidatePath('/');
    const characterName = params.character;
    //const characterData = await getCharacter(characterName);
    const characterData2 = await getCharacterData(characterName);
    const bgImg = `/images/${characterData2.url}/${characterData2.url}_background.png`;
    const bgImgUrl = {
        backgroundImage: `url(${bgImg})`
    };

    const characterBasicInfo = {
        name: characterData2.name,
        stars: characterData2.stars,
        element: characterData2.element,
        weaponType: characterData2.weaponType,
        region: characterData2.region,
        book: characterData2.book,
        weeklyBoss: characterData2.weeklyBoss,
        crystal: characterData2.crystal,
        bossMaterial: characterData2.bossMaterial,
        localSpeciality: characterData2.localSpeciality,
        enemyDrop: characterData2.enemyDrop,
        description: characterData2.description,
        url: characterData2.url,
    }


    //console.log("---------------Postac---------------\n", characterBasicInfo);

    return (
            <div className='flex flex-col w-full m-auto justify-center' style={ bgImgUrl }>
                <div className="flex flex-row items-start bg-gradient-to-br from-[#191E28] to-[#141820]">
                    <SideBar />
                    <div className='bg-no-repeat backdrop-blur w-full bg-[auto_800px] bg-top-100' style={{ backgroundImage: `url('/images/${characterData2.url}/${characterData2.url}_wish.webp')`}}>
                        <div className="flex flex-col w-full max-w-7xl m-auto">
                            <div id='info' className=' w-full'>
                                <CharacterTopBox selectedCharacter={ characterBasicInfo } />
                            </div>
                            <div className='flex flex-wrap m-auto w-full md:max-w-3xl xl:max-w-7xl justify-center xl:justify-end'>
                                <CharacterInfoBox character={ characterBasicInfo } />
                            </div>
                            <div id='talents' className='flex m-auto w-full max-w-3xl xl:max-w-7xl justify-center'>
                                <CharacterTalents2 talents={ characterData2.talents } />
                            </div>
                            <div id='passives' className='flex m-auto w-full max-w-3xl xl:max-w-7xl justify-center'>
                                <CharacterPassives passives={ characterData2.passives }/>
                            </div>
                            <div className='flex m-auto w-full max-w-3xl xl:max-w-7xl justify-center'>
                                <CharacterConstellations constellations={ characterData2.constellations } />
                            </div>
                            <div id='builds' className='flex m-auto w-full max-w-3xl xl:max-w-7xl justify-center'>
                                {/*<RecommendedBuilds weapons={ characterData.weapons } artifacts={ characterData.artifacts } characterData2={ characterData2 }/>*/}
                            </div>
                            <div id='yt' className='flex m-auto w-full md:max-w-3xl xl:max-w-7xl justify-center'>
                                {/*<YouTubeVideo />*/}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
           
    );
}

async function getCharacter(name: string) {
    const isServer = typeof window === 'undefined';
    const baseUrl = isServer
        ? process.env.NEXT_PUBLIC_API_URL || `https://${process.env.VERCEL_URL}` || 'https://localhost:3000'
        : '';
    const res = await fetch(`${baseUrl}/api/characters?character=${name}`);
    if(!res.ok) {
        throw new Error('Failed to fetch data')
    }

    return res.json()
}

async function getCharacterData(name: string) {
    const isServer = typeof window === 'undefined';
    const baseUrl = isServer
        ? process.env.NEXT_PUBLIC_API_URL || `https://${process.env.VERCEL_URL}` || 'https://localhost:3000'
        : '';
    const res = await fetch(`${baseUrl}/api/characterdata?character=${name}`);
    if(!res.ok) {
        throw new Error('Failed to fetch data')
    }

    return res.json();
}