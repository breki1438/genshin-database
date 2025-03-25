import NavBar from '@/components/NavBar';
import CharacterSelectFilter from '@/components/CharacterSelectFilter';
import SideBar from "@/components/SideBar";

export default async function Page() {
    const characters = await getCharacters();
    //console.log(characters);
    
    return (
        <div className='bg-neutral-500 h-screen'>
            <div className="flex flex-row items-start bg-gradient-to-br from-[#191E28] to-[#141820] h-screen">
                <SideBar />
                <CharacterSelectFilter characters={ characters } />
            </div>
        </div>
    );      
}

async function getCharacters() {
    const isServer = typeof window === 'undefined';
    const baseUrl = isServer
        ? process.env.NEXT_PUBLIC_API_URL || `https://${process.env.VERCEL_URL}` || 'https://localhost:3000'
        : '';
    const res = await fetch(`${baseUrl}/api/test`);
    if(!res.ok) {
        throw new Error('Failed to fetch data')
    }

    return res.json()
}