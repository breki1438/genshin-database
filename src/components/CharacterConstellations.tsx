export default function CharacterConstellations({ constellations }: { constellations: any }) {
    return (
        <div className='bg-poldark md:rounded-xl shadow-outer flex flex-col max-w-3xl xl:max-w-7xl w-full my-2 p-2'>
            <div className="text-4xl font-semibold text-center pt-3 drop-shadow-text">Character Constellations</div>
            <div className="grid grid-cols-2">
            {constellations.map((constellation: any, i: number) => (
                <div key={constellation.id} className='bg-dark75 m-5 p-5 rounded-md shadow-around w-auto'>
                    <div className='flex items-center mb-4'>
                        <img src={`/images/${constellation.characterName.toLowerCase().replace(' ', '')}/constellations/${constellation.constellationName.replaceAll(' ', '').replaceAll(/ |"/g, '_')}.png`} className='w-12'/>
                        <div className="ml-3 text-3xl font-semibold">{i+1}. { constellation.constellationName }</div>
                    </div>
                    <div className='text-2xl px-3' dangerouslySetInnerHTML={{__html: constellation.constellationDescription}}></div>
                </div>
            ))}
            </div>
        </div>
    )
}