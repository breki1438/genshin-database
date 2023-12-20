import { revalidatePath } from 'next/cache'
import NavBar from '@/components/NavBar';
import CharacterSelectIcon from '@/components/CharacterSelectIcon';

export default async function jebaneGowno() {
    revalidatePath('/');
    //const jebanko = await fetch('https://genshin-database-ten.vercel.app/api/characters');
    const jebanko = await fetch('http://localhost:3000/api/characters');
    const sraki = await jebanko.json();
    //console.log(sraki);
    return (
        <div className='flex flex-col bg-darker'>
            <NavBar />
            <div className='flex justify-center m-auto mt-5'>
                <CharacterSelectIcon sraki={ sraki } />      
            </div>
                 
        </div>
    );
  }