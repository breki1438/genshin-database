export default function CharacterConstellations({ constellations }: { constellations: any }) {
    return (
        <div className='border border-[#888888] bg-gradient-to-br from-[#232A37]/[75%] to-[#1E242F]/[75%] md:rounded-xl shadow-outer flex flex-col max-w-3xl xl:max-w-7xl w-full my-2 p-2'>
            <div className="text-2xl font-semibold text-center pt-3 drop-shadow-text">Character Constellations</div>
            <div className="grid grid-cols-1">
            {constellations.map((constellation: any, i: number) => (
                <div key={constellation.id} className='border border-[#888888] bg-gradient-to-br from-[#2D3647]/[75%] to-[#28303F]/[75%] m-5 p-4 rounded-md shadow-around w-auto'>
                    <div className='flex items-center mb-2'>
                        <img src={`/images/${constellation.characterName.toLowerCase().replace(' ', '')}/constellations/${constellation.constellationName.replaceAll(' ', '').replaceAll(/ |"/g, '_')}.png`} className='w-10'/>
                        <div className="ml-3 text-xl font-semibold">{i+1}. { constellation.constellationName }</div>
                    </div>
                    <div className='text-lg' dangerouslySetInnerHTML={{__html: constellation.constellationDescription}}></div>
                </div>
            ))}
            </div>
        </div>
    )
}