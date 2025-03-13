'use client'

import { useState } from "react";

export default function CharacterTalents2({ talents }: { talents: Array<any> }) {
    const sortedTalentParameters = talents.sort((a, b) => (a.id < b.id ? -1 : 1))
    //const [level, setLevel] = useState(7);
    const [levels, setLevels] = useState(Array(4).fill(10));

    // const handleChange = (event: any) => {
    //     setLevel(event.target.value);
    // }

    const handleLevelsChange = (index: number) => (event: any) => {
        const newLevels = [...levels];
        newLevels[index] = Number(event.target.value);
        setLevels(newLevels);
    }

    console.log("ech ojezu", sortedTalentParameters);

    return (
        <div className="bg-poldark md:rounded-xl shadow-outer flex flex-col max-w-3xl xl:max-w-7xl w-full my-2 p-2">
            <div className="text-5xl font-semibold text-center pt-3">Skills</div>
            
            {sortedTalentParameters?.map((talent, index) => (
                <div key={talent.id} className="bg-dark75 m-5 mb-10 p-5 rounded-md shadow-around">
                    <div className="flex items-center mb-4">
                        <img className="w-12" src={`/images/talenticons/${talent.characterName.toLowerCase().replaceAll(" ", "")}/${talent.talentType}.webp`} />
                        <p className="ml-3 text-3xl font-semibold">{talent.talentType}: {talent.talentName}</p>
                    </div>
                    <p className="text-2xl" dangerouslySetInnerHTML={{__html: talent.talentDesciprtion}}></p>
                    <div className="bg-dark75 m-3 p-6 pt-4 rounded-md shadow-around mt-8">
                        <p className="text-2xl font-semibold">Skill Attributes (Lv. {levels[index]})</p>
                        <input className="w-full accent-yellow my-2" type="range" min="1" max="15" onChange={handleLevelsChange(index)}/>
                        <table className="text-2xl w-full">
                            <tbody>
                            {talent.talentParameters.map((param: any) => ( 
                                <tr key={param.id} className="odd:bg-poldark even:bg-poldark15">
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