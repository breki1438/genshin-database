import { revalidatePath } from 'next/cache'
import SideBar from '@/components/SideBar';
import CharacterSelectIcon from '@/components/CharacterSelectIcon';

export default async function jebaneGowno() {
    revalidatePath('/');
    const jebanko = await fetch('https://genshin-database-ten.vercel.app/api/characters');
    const sraki = await jebanko.json();
    //console.log(sraki);
    return (
        <div className='flex flex-row bg-darker'>
            <SideBar />
            <CharacterSelectIcon sraki={ sraki } />
        </div>
    );
  }