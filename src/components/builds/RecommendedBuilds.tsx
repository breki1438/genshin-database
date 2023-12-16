'use client'

import { useState } from "react";

export default function RecommendedBuilds(character: any) {
    const [artifactStats, setArtifactStats] = useState(0);
    const builds = character.character.builds[artifactStats];
    return (
        <div className='bg-poldark md:rounded-xl shadow-outer flex flex-col max-w-3xl xl:max-w-7xl w-full my-2'>
            <p className='text-center text-2xl p-2'>{character.character.name} Builds</p>
            <div className='bg-poldark shadow-around flex justify-center'>
                <button className='hover:bg-poldark hover:shadow-around p-2 mx-2' onClick={() => setArtifactStats(0)}>General</button>
                <button className='hover:bg-poldark hover:shadow-around p-2 mx-2' onClick={() => setArtifactStats(1)}>Hyperbloom</button>
            </div>
            <div className='flex flex-col xl:flex-row sm:justify-center items-center xl:items-start xl:justify-between'>
                <div className='bg-poldark rounded-xl shadow-around flex flex-col text-2xl text-center p-2 m-5 w-96 xl:w-80 mx-auto md:mx-5'>
                    <p>Artifact Stats</p>
                    {builds.stats.map((stat: string, index: number) => {
                        return (
                            <div key={index} className='bg-dark rounded-xl shadow-around m-2 p-2 text-xl'>
                                <div className='flex items-center text-xl text-center'>
                                    <img className='w-12' src={`/images/artifacticons/${index}.webp`} />
                                    <p className='m-auto'>{stat}</p>
                                </div>  
                            </div>
                        )
                    })}
                    <p>Sub-Stats</p>
                    <div className='bg-dark rounded-xl shadow-around m-2 p-2 text-xl'>
                        <p>{builds.subs[0]}</p>
                    </div>
                </div>
                <div className='bg-poldark rounded-xl shadow-around flex flex-col text-2xl text-center p-2 m-5 w-96 mx-auto md:mx-5'>
                    <p>Artifact Sets</p>
                    {builds.sets.map((set: any, index: number) => {
                        const hideDescription = () => {
                            document.getElementById(`${set.name}ID`)?.classList.toggle('hidden');
                            document.getElementById(`${set.name}Arrow`)?.classList.toggle('rotate-180');
                        }
                        return (
                            <div key={index} className='bg-dark rounded-xl shadow-around m-2 p-2 flex flex-col hover:cursor-pointer' onClick={() => hideDescription()}>
                                <div className='flex items-center justify-between text-xl'>
                                    <img className='w-16' src={`/images/artifacticons/artifactsets/${set.name.replaceAll(' ', '_')}.webp`} />
                                    <p>{set.name}</p>
                                    <img id={`${set.name}Arrow`} className='w-4 opacity-50' src='/images/misc/whitearrow.png' />
                                </div>
                                <p id={`${set.name}ID`} className='text-xl m-2 text-gray-400 text-start hidden'>{set.description}</p>
                            </div>
                        )
                    })}
                </div>
                <div className='bg-poldark rounded-xl shadow-around flex flex-col text-2xl text-center p-2 m-5 w-96 xl:w-80 mx-auto md:mx-5'>
                    <p>Weapons</p>
                    {builds.weapons.map((weapon: string, index: number) => {
                        return (
                           <div key={index} className='bg-dark rounded-xl shadow-around m-2 p-2 text-xl'>{weapon}</div> 
                        )                      
                    })}
                </div>
            </div>          
        </div>
    )
}