'use client'

import { useState } from "react";
import WeaponBox from "../weapons/WeaponBox";
import ArtifactStats from "../artifacts/ArtifactStats";
import ArtifactSets from "../artifacts/ArtifactSets";

export default function RecommendedBuilds({ weapons, artifacts, characterData2 }: { weapons: Array<any>, artifacts: Array<any>, characterData2: any }) {
    const builds = characterData2.weapons.map((build: any) => build.build)
    .filter((value: any, index: any, self: any) => self.indexOf(value) === index);

    console.log("dziala: \n", characterData2.artifacts);

    const [selectedBuild, setBuild] = useState(builds[0])
    return (
        <div className='bg-poldark md:rounded-xl shadow-outer flex flex-col max-w-3xl xl:max-w-7xl w-fit my-2'>
            <p className='text-center text-4xl font-bold drop-shadow-text p-2'>Builds</p>
            <div className='bg-poldark shadow-around flex justify-evenly h-14 text-3xl'>
                {builds.map((build: any) => {
                    return (
                        <button key={build} className='hover:bg-poldark hover:shadow-around drop-shadow-text p-2 mx-2' onClick={() => setBuild(build)}>{build}</button>
                    )
                })}
            </div>
            <div className='flex flex-col xl:flex-row sm:justify-center items-center xl:items-start xl:justify-between'>
                <ArtifactStats artifactStats={ characterData2.artifacts } build={ selectedBuild }/>
                <ArtifactSets characterArtifacts={ characterData2.artifactSets } artifacts={ artifacts } build={ selectedBuild }/>
                <WeaponBox weapons={ weapons } characterWeapons={ characterData2.weapons } build={ selectedBuild }/>
            </div>                    
        </div>
    )
}