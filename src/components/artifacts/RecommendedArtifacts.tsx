'use client'

import React from "react";

export default function RecommendedArtifacts({ character }: { character: any }) {
    const artifacts = character.artifacts;
    const [selectedArtifact, setSelectedArtifact] = React.useState<string | null > (Object.keys(artifacts)[0]);
    const selectArtifact = (selected: any) => {
        setSelectedArtifact(selected);
    };
    const artifactSets = selectedArtifact ? artifacts[selectedArtifact].sets : '';
    const dupa: any = []
    for (const key in artifactSets) {
        dupa.push(`/images/artifacticons/artifactsets/${artifactSets[key].replaceAll(' ', '_')}.webp`)
    }
    console.log(artifactSets);
    return (
        <div className='bg-poldark rounded-xl md:mt-0 my-5 shadow-outer text-2xl w-96 md:w-80 h-fit'>
            <div className='flex flex-col opacity-95'>
                <div className='text-center py-2'>
                    Artifact Stats
                </div>
                <div className='text-center py-2 flex justify-around'>
                    {Object.keys(artifacts).map((key) => (
                        <button className='bg-darker p-2 rounded-xl text-xl shadow-around' key={key} onClick={() => selectArtifact(key)}>{ artifacts[key].type }</button>
                    ))}
                </div>
                <div className="flex flex-col text-xl pt-2">
                    <div className="bg-dark h-16 rounded-xl flex flex-row shadow-around m-5 mt-0 p-1 overflow-wrap items-center">
                        <img className='w-12 mx-2' src='/images/artifacticons/Icon_Flower_of_Life.webp' />
                        <p className='m-auto text-center pr-3'>{ selectedArtifact ? artifacts[selectedArtifact].flower : ''}</p>
                    </div>
                    <div className="bg-dark h-16 rounded-xl flex flex-row shadow-around m-5 mt-0 p-1 overflow-wrap items-center">
                        <img className='w-12 mx-2' src='/images/artifacticons/Icon_Plume_of_Death.webp' />
                        <p className='m-auto text-center pr-3'>{ selectedArtifact ? artifacts[selectedArtifact].plume : '' }</p>
                    </div>
                    <div className="bg-dark h-16 rounded-xl flex flex-row shadow-around m-5 mt-0 p-1 overflow-wrap items-center">
                        <img className='w-12 mx-2' src='/images/artifacticons/Icon_Sands_of_Eon.webp' />
                        <p className='m-auto text-center pr-3'>{ selectedArtifact ? artifacts[selectedArtifact].sands : '' }</p>
                    </div> 
                    <div className="bg-dark h-16 rounded-xl flex flex-row shadow-around m-5 mt-0 p-1 overflow-wrap items-center">
                        <img className='w-12 mx-2' src='/images/artifacticons/Icon_Goblet_of_Eonothem.webp' />
                        <p className='m-auto text-center pr-3'>{ selectedArtifact ? artifacts[selectedArtifact].goblet : '' }</p>
                    </div>
                    <div className="bg-dark h-16 rounded-xl flex flex-row shadow-around m-5 mt-0 p-1 overflow-wrap items-center">
                        <img className='w-12 mx-2' src='/images/artifacticons/Icon_Circlet_of_Logos.webp' />
                        <p className='m-auto text-center pr-3'>{ selectedArtifact ? artifacts[selectedArtifact].circlet : '' }</p>
                    </div>
                </div>
                <div className='text-center py-2'>
                    Recommended Set
                </div> 
                <div className="flex flex-col text-xl pt-2">
                {Object.keys(artifactSets).map((key, index) => (
                    <div className="bg-dark h-16 rounded-xl flex flex-row shadow-around m-5 mt-0 p-1 overflow-wrap items-center" key={key}>
                        <img className='w-12 mx-2' src={ dupa[index] } />
                        <p className='m-auto text-center pr-3'>{ artifactSets[key] }</p>
                    </div>
                ))}
                </div>                                                  
            </div>        
        </div>
    )
}