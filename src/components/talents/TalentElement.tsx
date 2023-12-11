'use client'

export default function TalentElement({character, talent}: {character: any, talent: any}) {
    const element = 'Electro';
    const style = `styles.${element}`;
    console.log(style);
    let talentElement = character.talents[talent].description.replaceAll('\\n', '<br />');
    talentElement = talentElement.replaceAll(`${element}`, `<span class=${element}>${element}</span>`);
    const talentImage = `/images/${character.url}/talents/${talent}.png`;
    const talentID = `${talent}Info`
    const onClick = () => {
        const talentDiv = document.getElementById(talent);
        const talentInfoDiv = document.getElementById(`${talent}Info`)      
        if (talentDiv && talentInfoDiv) {
            talentDiv.classList.toggle('h-fit');
            talentInfoDiv.classList.toggle('hidden');
        }
    }
    return (
        <div id={talent} className="bg-dark flex flex-col m-3 rounded-xl shadow-around h-fit overflow-hidden hover:cursor-pointer" onClick={onClick}>
            <div className="flex justify-center m-1 items-center h-fit">
                <div className='ml-2 flex items-center'>
                    <img className='w-12' src={ talentImage } />
                    <p className='ml-2'>{ character.talents[talent].title }</p>
                </div>
            </div>
            <div id={ talentID } className="mx-3 mb-3 text-xl hidden" dangerouslySetInnerHTML={{ __html: talentElement }}>
                
            </div>
        </div>
    )
}