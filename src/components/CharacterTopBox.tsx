export default function CharacterTopBox({ selectedCharacter }: { selectedCharacter: any }) {
    const description = selectedCharacter.description.split('\n');
    let element = selectedCharacter.element;
    element = element.replace(element, `<span class='${element}'>${element}</span>`)
    //console.log(element)
    return (
        <div className='border border-[#888888] bg-gradient-to-br from-[#232A37]/[75%] to-[#1E242F]/[75%] w-full max-w-3xl xl:max-w-7xl my-5 p-3 md:rounded-xl flex flex-row shadow-outer bg-cover'>
            <img className='rounded-full h-32 bg-neutral-300 shadow-around w-32' src={`/images/${selectedCharacter.url}/${selectedCharacter.url}.webp`}/>
            <div className='flex flex-col w-full ml-3'>
                <div className="flex flex-row">
                    <p className='text-xl md:text-2xl font-bold drop-shadow-text'>{ selectedCharacter.name }</p>
                    <img className='w-24 ml-2 m-auto p-1 bg-poldark rounded-xl shadow-around' src={`/images/misc/${selectedCharacter.stars}star.png`} />
                </div>
                <div className="flex flex-row text-xl font-semibold items-center">
                    <div className="flex flex-row items-center pr-2">
                        <img src={`/images/elements/Element_${selectedCharacter.element}.svg`} className="w-8 mr-1"/>
                        <p className='drop-shadow-text' dangerouslySetInnerHTML={{ __html: element }}></p>
                    </div>
                    <div className="flex flex-row items-center">
                        <img src={`/images/weapontype/Icon_${selectedCharacter.weaponType}.webp`} className="w-8 mr-1" />
                        <p className='drop-shadow-text text-neutral-300'>{ selectedCharacter.weaponType }</p>
                    </div>
                    <div className="flex flex-row items-center m-auto mr-1">
                        <img src={`/images/region/${selectedCharacter.region}.webp`} className="w-8 mr-1" />
                        <p className='drop-shadow-text font-semibold text-amber-100'>{ selectedCharacter.region }</p>
                    </div>           
                </div>
                <div>
                    {description.map((paragraph: any, index: any) => (
                        <p className='drop-shadow-text text-[#E0E1DD] text-lg' key={ index }>{ paragraph }</p>
                    ))}
                </div>
            </div>                                        
        </div>
    )
}