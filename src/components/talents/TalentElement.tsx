'use client'

export default function TalentElement({character, talent}: {character: any, talent: any}) {
    let talentElement = character.talents[talent].description;
    const talentImage = `/images/${character.url}/talents/${talent}.png`;
    const talentID = `${talent}Info`;
    const talentArrow = `${talent}Arrow`;
    const onClick = () => {
        const talentDiv = document.getElementById(talent);
        const talentInfoDiv = document.getElementById(`${talent}Info`)
        const whiteArrow = document.getElementById(`${talent}Arrow`)    
        if (talentDiv && talentInfoDiv && whiteArrow) {
            talentDiv.classList.toggle('h-fit');
            talentInfoDiv.classList.toggle('hidden');
            whiteArrow.classList.toggle('rotate-180');
        }
    }
    return (
        <div id={talent} className="bg-dark flex flex-col m-3 rounded-xl justify-between shadow-around h-fit overflow-hidden hover:cursor-pointer" onClick={onClick}>
            <div className="flex p-1 items-center h-fit mx-2">
                    <img className='w-12' src={ talentImage } />
                    <p className=''>{ character.talents[talent].title }</p>
                    <img id={ talentArrow } className='w-6 ml-auto opacity-50' src='/images/misc/whitearrow.png' />
            </div>
            <div id={ talentID } className="mx-3 mb-3 text-xl hidden" dangerouslySetInnerHTML={{ __html: talentElement }}>
                
            </div>
        </div>
    )
}