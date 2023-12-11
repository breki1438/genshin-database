export default function CharacterInfoBox({ character }: { character: any }) {
    const book = `/images/books/${character.book.replaceAll(" ", "_")}.webp`;
    const weeklyBoss = `/images/weeklybosses/${character.weeklyBoss.replaceAll(" ", "_")}.webp`;
    const crystal = `/images/crystals/${character.crystal.replaceAll(" ", "_")}.webp`;
    const boss = `/images/bosses/${character.bossMaterial.replaceAll(" ", "_")}.webp`;
    const local = `/images/localspecialities/Item_${character.localSpeciality.replaceAll(' ', '_')}.webp`
    const material = `/images/materials/Item_${character.enemyDrop.replaceAll(' ', '_')}.webp`;
    return (
        <div className='bg-poldark rounded-xl my-5 shadow-outer text-2xl w-96 md:w-80 h-fit'>
            <div className='flex flex-col opacity-95'>
                <div className='text-center py-2'>
                    Materials
                </div>
                <div className="flex flex-col text-xl pt-2 m-auto">
                    <div className="bg-dark rounded-xl flex flex-row shadow-around m-5 mt-0 p-1 overflow-wrap">
                        <img className='w-12 mx-2' src={ book } />
                        <p className='m-auto text-center pr-3'>{ character.book }</p>
                    </div>
                    <div className="bg-dark rounded-xl flex flex-row shadow-around m-5 mt-0 p-1 overflow-wrap">
                        <img className='w-12 mx-2' src={ weeklyBoss } />
                        <p className='m-auto text-center pr-3'>{ character.weeklyBoss }</p>
                    </div>
                    <div className="bg-dark rounded-xl flex flex-row shadow-around m-5 mt-0 p-1 overflow-wrap">
                        <img className='w-12 mx-2' src={ crystal } />
                        <p className='m-auto text-center pr-3'>{ character.crystal }</p>
                    </div> 
                    <div className="bg-dark rounded-xl flex flex-row shadow-around m-5 mt-0 p-1 overflow-wrap">
                        <img className='w-12 mx-2' src={ boss } />
                        <p className='m-auto text-center pr-3'>{ character.bossMaterial }</p>
                    </div>
                    <div className="bg-dark rounded-xl flex flex-row shadow-around m-5 mt-0 p-1 overflow-wrap">
                        <img className='w-12 mx-2' src={ local } />
                        <p className='m-auto text-center pr-3'>{ character.localSpeciality }</p>
                    </div>
                    <div className="bg-dark rounded-xl flex flex-row shadow-around m-5 mt-0 p-1 overflow-wrap">
                        <img className='w-12 mx-2' src={ material } />
                        <p className='m-auto text-center pr-3'>{ character.enemyDrop }</p>
                    </div>
                </div>                                                              
            </div>        
        </div>
    )
}