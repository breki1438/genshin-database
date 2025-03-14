'use client'

export default function CharacterConstelations({ constellations }: { constellations: any }) {
    const sortedConstellations = constellations.slice().sort((a: any, b: any) => a.id -b.id)
    return (
        <div className='bg-poldark md:rounded-xl shadow-outer flex flex-col max-w-3xl xl:max-w-7xl w-full my-2 p-2'>
            <div className="text-5xl font-semibold text-center pt-3 drop-shadow-text">Character Constellations</div>
            {/*<div className="grid grid-cols-2">*/}
            {sortedConstellations.map((constellation: any, i: number) => (
                <div key={constellation.id} className='bg-dark75 m-5 p-5 rounded-md shadow-around w-auto'>
                    <div className='flex items-center mb-4'>
                        <img src={`/images/${constellation.characterName.toLowerCase().replace(' ', '')}/constellations/${constellation.constellationName.replaceAll(' ', '').replaceAll(/ |"/g, '_')}.png`} className='w-12'/>
                        <div className="ml-3 text-4xl font-semibold">{i+1}. { constellation.constellationName }</div>
                    </div>
                    <div className='text-2xl px-3' dangerouslySetInnerHTML={{__html: constellation.constellationDescription}}></div>
                </div>
            ))}
            {/*</div>*/}
            {/*{sortedConstellations.map((constellation: any) => {*/}
            {/*    //console.log(constellation.constellationName)*/}
            {/*    const expandElement = () => {*/}
            {/*        document.getElementById(`${constellation.constellationName}IdLower`)?.classList.toggle('hidden');*/}
            {/*    }*/}
            {/*    return (*/}
            {/*        <div key={constellation.id} className='text-3xl drop-shadow-text m-4 p-2 rounded-xl shadow-around flex flex-col bg-dark cursor-pointer' onClick={() => expandElement()}>*/}
            {/*            <div className='flex items-center'>*/}
            {/*                <img src={`/images/${constellation.characterName.toLowerCase().replace(' ', '')}/constellations/${constellation.constellationName.replaceAll(' ', '').replaceAll(/ |"/g, '_')}.png`} className='w-12 mr-2'/>*/}
            {/*                <p>{ constellation.constellationName }</p>*/}
            {/*            </div>                       */}
            {/*            <p id={`${constellation.constellationName}IdLower`} className='hidden text-grayFont text-2xl mt-2'>{ constellation.constellationDescription }</p>*/}
            {/*        </div>*/}
            {/*    )*/}
            {/*})}*/}
        </div>
    )
}