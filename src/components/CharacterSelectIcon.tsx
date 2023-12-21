export default function CharacterSelectIcon({ characters }: { characters: Array<any> }) {
    return (
            <div className='flex flex-wrap ml-8 max-w-7xl justify-start m-auto'>
                { characters.map((character) => {
                    return (
                        <div key={ character } className='flex flex-col w-32 h-fit m-5 items-center'>
                            <a href={`/characters/${character.url}`} className='flex rounded-full h-fit w-36 bg-neutral-300 shadow-outer'>
                                <img src={`/images/${character.url}/${character.url}.webp`} className='rounded-full'/>
                            </a>
                            <a href={`/characters/${character.url}`} className='pt-3 text-2xl text-center break-words'>{character.name}</a>
                        </div>
                    )
                }) }
            </div>
    )
}