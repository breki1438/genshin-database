'use client'

import { useState } from "react";

export default function CharacterTalents2({ talents }: { talents: Array<any> }) {
    const [levels, setLevels] = useState(Array(4).fill(10));
    const handleLevelsChange = (index: number) => (event: any) => {
        const newLevels = [...levels];
        newLevels[index] = Number(event.target.value);
        setLevels(newLevels);
    }

    return (
        <div className="border border-[#888888] bg-gradient-to-br from-[#232A37]/[75%] to-[#1E242F]/[75%] md:rounded-xl shadow-outer flex flex-col max-w-3xl xl:max-w-7xl w-full my-2 p-2">
            <div className="text-2xl font-semibold text-center drop-shadow-text">Character Talents</div>
            {talents?.map((talent, index) => (
                <div key={talent.id} className="border border-[#888888] bg-gradient-to-br from-[#2D3647]/[75%] to-[#28303F]/[75%] m-3 p-3 rounded-md shadow-around">
                    <div className="flex items-center">
                        <img className="w-10" src={`/images/talenticons/${talent.characterName.toLowerCase().replaceAll(" ", "")}/${talent.talentType}.webp`} />
                        <p className="mx-2 text-xl font-semibold">{talent.talentType}: {talent.talentName}</p>
                    </div>
                    <p className="text-lg mx-2 pt-2" dangerouslySetInnerHTML={{__html: talent.talentDesciprtion}}></p>
                    <div className="border border-[#888888] bg-gradient-to-br from-[#323C4F]/[75%] to-[#475061]/[75%] m-4 p-3 rounded-md shadow-around mt-8">
                        <p className="text-xl font-semibold">Skill Attributes (Lv. {levels[index]})</p>
                        <input className="w-full accent-yellow my-2" type="range" min="1" max="15" onChange={handleLevelsChange(index)}/>
                        <table className="text-lg w-full">
                            <tbody>
                            {talent.talentParameters.map((param: any) => ( 
                                <tr key={param.id} className="odd:bg-[#232A37]/[75%] even:bg-[#495162]/[75%]">
                                    <td className="text-center drop-shadow-text w-1/2">{param.parameterName}</td>
                                    <td className="text-center drop-shadow-text w-1/2">{param[`lv${levels[index]}`]}</td>
                                </tr>  
                            ))}
                            </tbody>
                        </table>
                    </div>
                </div>
            ))}
        </div>
    )
}