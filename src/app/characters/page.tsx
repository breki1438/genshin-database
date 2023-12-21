import NavBar from '@/components/NavBar';
import CharacterSelectIcon from '@/components/CharacterSelectIcon';
import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

export default async function Page() {
    const characters = await prisma.character.findMany();
    console.log(characters)

    return (
        <div className='flex flex-col bg-darker'>
            <NavBar />
            <div className='flex justify-center m-auto mt-5'>
                <CharacterSelectIcon characters={ characters }/>      
            </div>
                 
        </div>
    );
  }