'use client'

export default function PassiveElement(character: any) {
    const passives = character.character.passives;
    return (
        <div>
            {passives.map((passive: any) => {
                let passiveElement = passive.description.replaceAll('\\n', '<br />');
                passiveElement = passiveElement.replaceAll(`${character.character.element}`, `<span class=${character.character.element}>${character.character.element}</span>`);
                const expandDescription = () => {
                    document.getElementById(passive.name)?.classList.toggle('hidden');
                    document.getElementById(`${passive.name}Expand`)?.classList.toggle('rotate-180');
                } 
                return (
                    <div key={passive.name} className="bg-dark flex flex-col m-3 my-6 rounded-xl justify-between shadow-around h-fit overflow-hidden hover:cursor-pointer" onClick={() => expandDescription()}>
                        <div className="flex p-1 items-center h-fit mx-2">
                            <img className='w-12' src={`/images/${character.character.url}/talents/${passive.name.replaceAll(' ', '_')}.png`} />
                            <p>{ passive.name }</p>
                            <img id={`${passive.name}Expand`} className='w-6 ml-auto opacity-50' src='/images/misc/whitearrow.png' />
                        </div>
                        <div id={passive.name} className="mx-3 mb-3 text-xl hidden" dangerouslySetInnerHTML={{ __html: passiveElement }}>                    
                        </div>
                    </div>
                )
            })}
        </div>
    )
}