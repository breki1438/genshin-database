'use client'

export default function CharacterTalents({ characterData }: { characterData: any }) {
    const sortedTalents = characterData.characterTalents.slice().sort((a: any, b: any) => a.id -b.id)
    return (
        <div className='bg-poldark rounded-xl shadow-outer max-w-3xl w-full h-fit'>
            <p className='text-4xl font-bold drop-shadow-text text-center m-2'>Talents</p>
            {sortedTalents.map((talent: any) => {
                let talentElement = talent.talentDesciprtion.replaceAll('\\n', '<br />');
                const element = characterData.character.element
                talentElement = talentElement.replaceAll(`${element}`, `<span class=${element}>${element}</span>`);
                //console.log(talent.talentName)
                const expandElement = () => {
                    document.getElementById(`${talent.talentType}IdLower`)?.classList.toggle('hidden');
                }
                return (
                    <div key={talent.id} className='text-3xl drop-shadow-text m-4 p-2 rounded-xl shadow-around flex flex-col bg-dark cursor-pointer' onClick={() => expandElement()}>
                        <div className='flex items-center'>
                            <img src={`/images/${talent.characterName.toLowerCase().replace(' ', '')}/talents/${talent.talentType.toLowerCase().replaceAll(' ', '')}.png`} className='w-12 mr-2'/>
                            <p>{ talent.talentName }</p>
                        </div>                       
                        <p id={`${talent.talentType}IdLower`} className='hidden text-grayFont text-2xl mt-2' dangerouslySetInnerHTML={{ __html: talentElement }}></p>
                    </div>
                )
            })}
        </div>
    )
}