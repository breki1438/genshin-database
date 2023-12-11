import { revalidatePath } from 'next/cache'
import SideBar from '@/components/SideBar';
import CharacterInfoBox from '@/components/CharacterInfoBox';
import CharacterTopBox from '@/components/CharacterTopBox';
import CharacterConstelations from '@/components/CharacterConstelations';
import NavBar from '@/components/NavBar';
import CharacterSKillsBox from '@/components/CharacterSkillsBox';
import RecommendedArticacts from '@/components/artifacts/RecommendedArtifacts';

export default async function Dupa({ params }: { params: {character: string} }) {
    revalidatePath('/');
    const jebanko = await fetch(`https://genshin-database-ten.vercel.app/api/characters`);
    //const jebanko = await fetch('http://localhost:3000/api/characters');
    const sraki = await jebanko.json();
    const postac = params.character;
    const selectedCharacter = sraki.characters.find((character: any) => character.url === postac);
    const backgroundPath = `url('/images/${selectedCharacter.url}/${selectedCharacter.url}_wish.webp')`;
    const pickColor = sraki.colorPalette.find((color: any) => color.element === selectedCharacter.element);
    const obrazek = `/images/${selectedCharacter.url}/${selectedCharacter.url}_background.png`;
    const obrazek2 = {
        backgroundImage: `url(${obrazek})`
    };

    return (         
            <div className='flex flex-col w-full m-auto justify-center' style={ obrazek2 }>
                <div className='backdrop-blur-xl'>
                    <NavBar />
                    <div className='flex justify-center'>
                        <CharacterTopBox selectedCharacter={selectedCharacter} color={pickColor} />   
                    </div>
                    <div className='flex flex-wrap m-auto w-full max-w-3xl xl:max-w-7xl justify-center md:justify-between bg-top bg-no-repeat bg-auto md:bg-contain' style={{backgroundImage: backgroundPath}}>
                        <RecommendedArticacts />
                        <CharacterInfoBox character={selectedCharacter} />
                    </div>
                    <div className='flex flex-wrap m-auto w-full max-w-3xl xl:max-w-7xl justify-center xl:justify-between'>
                        <CharacterSKillsBox character={selectedCharacter} color={pickColor}/>
                        <CharacterConstelations character={selectedCharacter} color={pickColor} />    
                    </div> 
                </div>                                                        
                
                                            
            </div> 
           
    );
}