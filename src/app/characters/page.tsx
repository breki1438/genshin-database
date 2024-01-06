import NavBar from '@/components/NavBar';
import CharacterSelectFilter from '@/components/CharacterSelectFilter';

export default async function Page() {
    const characters = await getCharacters();
    console.log(characters);
    
    return (
        <div className='bg-[url("/images/fur.jpg")] bg-cover'>
            <div className='h-screen bg-darker bg-opacity-95'>
                <NavBar />
                <CharacterSelectFilter characters={ characters } />                
            </div>
        </div>
    );      
}

async function getCharacters() {
    //const res = await fetch('http://localhost:3000/api/test');
    const res = await fetch('https://genshin-database-current.vercel.app/api/test');
    if(!res.ok) {
        throw new Error('Failed to fetch data')
    }

    return res.json()
}