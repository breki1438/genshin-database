export default function CharacterSelectIcon({ characters, selectedElement, selectedWeapon, selectedStars }: { characters: Array<any>, selectedElement: string, selectedWeapon: string, selectedStars: number }) {
    const isCharacterVisible = (character: any) => {
        return (
            (!selectedElement || character.element === selectedElement) &&
            (!selectedWeapon || character.weaponType === selectedWeapon) &&
            (!selectedStars || character.stars === selectedStars)
        )
    };
    //console.log(selectedStars, characters[0].stars)

    return (
            <div className='border border-[#888888] bg-gradient-to-br from-[#232A37]/[75%] to-[#1E242F]/[75%] flex h-fit xl:max-w-7xl justify-center w-full xl:rounded-xl shadow-outer overflow-scroll mb-5'>
                <div className='mx-2 grid max-[420px]:grid-cols-3 grid-cols-4 md:grid-cols-5 lg:grid-cols-6 xl:grid-cols-8 justify-items-center w-full m-auto py-4'>
                    { characters.map((character, index) => {
                        return (
                            isCharacterVisible(character) && <div key={ index } id={ character.element } className='flex flex-col w-24 items-center pb-4'>
                                <a href={`/characters/${character.url}`} className='flex rounded-full h-fit w-24 sm:w-32 bg-neutral-300 shadow-outer'>
                                    <img src={`/images/${character.url}/${character.url}.webp`} alt={character.url} loading="lazy" decoding="async" className={`rounded-full stars${character.stars} shadow-outer`}/>
                                </a>
                                <a href={`/characters/${character.url}`} className='mt-2 text-lg md:text-xl text-center break-words drop-shadow-text'>{character.name}</a>
                            </div>
                        )
                    }) }
                </div>               
            </div>
    )
}