import NavBar from '@/components/NavBar';
import CharacterSelectFilter from '@/components/CharacterSelectFilter';

export default async function Page() {
    //const jebanko = await fetch('http://localhost:3000/api/test');
    const jebanko = await fetch('https://genshin-database-ten.vercel.app/api/test');
    const characters = await jebanko.json();
    
    return (
        <div className='bg-[url("/images/fur.jpg")] bg-cover'>
            <div className='h-screen bg-darker bg-opacity-95'>
                <NavBar />
                <CharacterSelectFilter characters={ characters } />                
            </div>
        </div>
    );      
}