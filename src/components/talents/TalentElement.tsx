import styles from "./TalentElement.module.css"

export default function TalentElement({character, talent}: {character: any, talent: any}) {
    const element = 'Electro';
    const style = `styles.${element}`;
    console.log(style);
    let talentElement = character.talents[talent].description.replaceAll('\\n', '<br />');
    talentElement = talentElement.replaceAll(`${element}`, `<span class=${element}>${element}</span>`);
    return (
        <div className="bg-dark flex flex-col m-3 rounded-xl shadow-around">
            <div className="flex justify-center m-3 items-center">
                <div className='ml-2 flex items-center'>
                    <p className='ml-2'>{ character.talents[talent].title }</p>
                </div>
            </div>
            <div className="mx-3 mb-3 text-xl" dangerouslySetInnerHTML={{ __html: talentElement }}>
                
            </div>
        </div>
    )
}