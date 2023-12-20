export default function ArtifactStats({ artifactStats, build }: { artifactStats: Array<any>, build: string }) {
    const selectBuild = build;
    const filteredArtifactStats = artifactStats
    .filter(build => build.build === selectBuild)
    return (
        <div className='bg-poldark rounded-xl shadow-around flex flex-col text-2xl text-center p-2 m-5 w-96 xl:w-80 mx-auto md:mx-5'>
            <p className='text-3xl font-bold drop-shadow-text'>Artifact Stats</p>
            <div className='flex items-center bg-dark rounded-xl shadow-around m-2 text-xl h-20'>
                <div className='flex items-center text-xl text-center'>
                    <img className='m-1' src={`/images/artifacticons/flower.webp`} />
                     <p className=' mx-3 text-2xl drop-shadow-text text-start'>{ filteredArtifactStats[0].flower }</p>
                </div>  
            </div>
            <div className='flex items-center bg-dark rounded-xl shadow-around m-2 text-xl h-20'>
                <div className='flex items-center text-xl text-center'>
                    <img className='m-1' src={`/images/artifacticons/plume.webp`} />
                     <p className=' mx-3 text-2xl drop-shadow-text text-start'>{ filteredArtifactStats[0].plume }</p>
                </div>  
            </div>
            <div className='flex items-center bg-dark rounded-xl shadow-around m-2 text-xl h-20'>
                <div className='flex items-center text-xl text-center'>
                    <img className='m-1' src={`/images/artifacticons/sands.webp`} />
                     <p className=' mx-3 text-2xl drop-shadow-text text-start'>{ filteredArtifactStats[0].sands }</p>
                </div>  
            </div>
            <div className='flex items-center bg-dark rounded-xl shadow-around m-2 text-xl h-20'>
                <div className='flex items-center text-xl text-center'>
                    <img className='m-1' src={`/images/artifacticons/goblet.webp`} />
                     <p className=' mx-3 text-2xl drop-shadow-text text-start'>{ filteredArtifactStats[0].goblet }</p>
                </div>  
            </div>
            <div className='flex items-center bg-dark rounded-xl shadow-around m-2 text-xl h-20'>
                <div className='flex items-center text-xl text-center'>
                    <img className='m-1' src={`/images/artifacticons/circlet.webp`} />
                     <p className=' mx-3 text-2xl drop-shadow-text text-start'>{ filteredArtifactStats[0].circlet }</p>
                </div>  
            </div>
            <p className='mt-2 text-3xl font-bold drop-shadow-text'>Sub-Stats</p>
            <div className='bg-dark rounded-xl shadow-around m-2 p-2 text-xl h-20 flex items-center justify-center'>
                <p className='mx-3 text-2xl drop-shadow-text text-start'>{ filteredArtifactStats[0].subStats }</p>
            </div>                      
        </div>      
    )
}