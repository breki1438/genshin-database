export default function CharacterSelectIcon({ characters, selectedElement, selectedWeapon }: { characters: Array<any>, selectedElement: string, selectedWeapon: string }) {
    const isCharacterVisible = (character: any) => {
        return (
            (!selectedElement || character.element === selectedElement) &&
            (!selectedWeapon || character.weaponType === selectedWeapon)
        )
    };

    return (
            <div className='flex flex-wrap max-w-7xl justify-start bg-dark w-full rounded-xl shadow-outer'>
                { characters.map((character) => {
                    return (
                        isCharacterVisible(character) && <div key={ character } id={ character.element } className='flex flex-col w-36 h-fit m-4 items-center'>
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