import NavBar from '@/components/NavBar';
import CharacterSelectFilter from '@/components/CharacterSelectFilter';

export default async function Page() {
    const characters = await getCharacters();
    //console.log(characters);
    
    return (
        <div className='bg-neutral-500 h-screen'>
            <div className='h-screen bg-darker bg-opacity-95'>
                <NavBar />
                <CharacterSelectFilter characters={ characters } />             
            </div>
        </div>
    );      
}

async function getCharacters() {
    const isServer = typeof window === 'undefined';
    const baseUrl = isServer
        ? process.env.NEXT_PUBLIC_API_URL || 'https://localhost:3000' || `https://${process.env.VERCEL_URL}`
        : '';
    const res = await fetch(`${baseUrl}/api/test`);
    if(!res.ok) {
        throw new Error('Failed to fetch data')
    }

    return res.json()
}