'use client'

import { useState } from "react";
import WeaponBox from "../weapons/WeaponBox";
import ArtifactStats from "../artifacts/ArtifactStats";
import ArtifactSets from "../artifacts/ArtifactSets";

export default function RecommendedBuilds({ weapons, characterWeapons, artifactStats, characterArtifacts, artifacts, characterData }: { weapons: Array<any>, characterWeapons: Array<any>, artifactStats: Array<any>, characterArtifacts: Array<any>, artifacts: Array<any>, characterData: Object }) {
    const builds = characterWeapons.map(build => build.build)
    .filter((value, index, self) => self.indexOf(value) === index);

    const ech = artifactStats.filter(stat => stat.characterName == 'Yoimiya');
    //console.log(characterData)
    const [selectedBuild, setBuild] = useState(builds[0])
    return (
        <div className='bg-poldark md:rounded-xl shadow-outer flex flex-col max-w-3xl xl:max-w-7xl w-fit my-2'>
            <p className='text-center text-4xl font-bold drop-shadow-text p-2'>Builds</p>
            <div className='bg-poldark shadow-around flex justify-evenly h-14 text-3xl'>
                {builds.map((build) => {
                    return (
                        <button key={build} className='hover:bg-poldark hover:shadow-around drop-shadow-text p-2 mx-2' onClick={() => setBuild(build)}>{build}</button>
                    )
                })}
            </div>
            <div className='flex flex-col xl:flex-row sm:justify-center items-center xl:items-start xl:justify-between'>
                <ArtifactStats artifactStats={ artifactStats } build={ selectedBuild }/>
                <ArtifactSets characterArtifacts={ characterArtifacts } artifacts={ artifacts } build={ selectedBuild }/>
                <WeaponBox weapons={ weapons } characterWeapons={ characterWeapons } build={ selectedBuild }/>
            </div>                    
        </div>
    )
}