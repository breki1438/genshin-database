import PassiveElement from "./passives/PassiveElement";
import TalentElement from "./talents/TalentElement";

export default function CharacterSKillsBox({character, color}: {character: any, color: any}) {
    return (
        <div className='w-192 bg-poldark my-5 md:rounded-xl shadow-outer text-2xl h-fit'>
            <div className='flex flex-col p-2 overflow-hidden opacity-95'>
                <div className='text-2xl text-center'>
                    Talents
                </div>
                <div className="flex flex-col">
                    <TalentElement character={character} talent='normalAttack'/>
                    <TalentElement character={character} talent='elementalSkill'/>
                    <TalentElement character={character} talent='elementalBurst'/>
                </div>
                <div className='text-2xl text-center'>
                    Passives
                </div>
                <div className="flex flex-col">
                    <PassiveElement character={character} talent='normalAttack'/>
                </div>                                                         
            </div>
        </div>
    )
}