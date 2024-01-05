'use client'

export default function CharacterConstelations({ constellations }: { constellations: any }) {
    const sortedConstellations = constellations.slice().sort((a: any, b: any) => a.id -b.id)
    return (
        <div className='bg-poldark rounded-xl shadow-outer w-96 h-fit'>
            <p className='text-4xl font-bold drop-shadow-text text-center m-2'>Constellations</p>
            {sortedConstellations.map((constellation: any) => {
                console.log(constellation.constellationName)
                const expandElement = () => {
                    document.getElementById(`${constellation.constellationName}IdLower`)?.classList.toggle('hidden');
                }
                return (
                    <div key={constellation.id} className='text-3xl drop-shadow-text m-4 p-2 rounded-xl shadow-around flex flex-col bg-dark cursor-pointer' onClick={() => expandElement()}>
                        <div className='flex items-center'>
                            <img src={`/images/${constellation.characterName.toLowerCase().replace(' ', '')}/constellations/${constellation.constellationName.replaceAll(' ', '')}.png`} className='w-12 mr-2'/>
                            <p>{ constellation.constellationName }</p>
                        </div>                       
                        <p id={`${constellation.constellationName}IdLower`} className='hidden text-grayFont text-2xl mt-2'>{ constellation.constellationDescription }</p>
                    </div>
                )
            })}
        </div>
    )
}