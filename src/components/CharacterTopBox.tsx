export default function CharacterTopBox({ selectedCharacter }: { selectedCharacter: any }) {
    const description = selectedCharacter.description.split('\n');
    let element = selectedCharacter.element;
    element = element.replace(element, `<span class='${element}'>${element}</span>`)
    console.log(element)
    return (
        <div className='bg-poldark w-full max-w-3xl xl:max-w-7xl my-5 p-3 md:rounded-xl flex flex-row shadow-outer bg-cover'>
            <img className='rounded-full h-32 bg-neutral-300 shadow-around w-32' src={`/images/${selectedCharacter.url}/${selectedCharacter.url}.webp`}/>
            <div className='flex flex-col w-full ml-3'>
                <div className='flex flex-wrap items-center justify-start'>
                    <p className='text-xl md:text-4xl font-bold drop-shadow-text'>{ selectedCharacter.name }</p>
                    <img className='w-24 ml-2 m-auto p-1 bg-dark rounded-xl' src={`/images/misc/${selectedCharacter.stars}star.png`} />
                    <div className='flex justify-end md:ml-auto text-lg md:text-2xl'>
                        <div className="flex flex-row items-center">
                            <img src={`/images/elements/Element_${selectedCharacter.element}.svg`} className="w-10"/>
                            <p className='ml-1 drop-shadow-text' dangerouslySetInnerHTML={{ __html: element }}></p>
                        </div>
                        <div className="flex flex-row items-center ml-3">
                            <img src={`/images/weapontype/Icon_${selectedCharacter.weaponType}.webp`} className="w-10" />
                            <p className='ml-1 drop-shadow-text text-neutral-300'>{ selectedCharacter.weaponType }</p>
                        </div> 
                    </div>
                                                         
                </div>
                <div className='text-lg drop-shadow-text text-neutral-200'>
                    <p className='text-xl'>Region: { selectedCharacter.region }</p>
                    <div>
                        {description.map((paragraph: any, index: any) => (
                            <p className='text-neutral-400' key={ index }>{ paragraph }</p>
                        ))}
                    </div>               
                </div>
            </div>                                        
        </div>
    )
}