export default function ArtifactSets({ characterArtifacts, artifacts, build }: { characterArtifacts: Array<any>, artifacts: Array<any>, build: string }) {
    const selectBuild = build;
    const filteredArtifactSets = characterArtifacts
    .filter(build => build.build === selectBuild)
    .map(build => artifacts.find(artifact => artifact.name === build.artifactName));
    //console.log(filteredArtifactSets)
    return (
        <div className='bg-poldark rounded-xl shadow-around flex flex-col items-center text-2xl text-center p-2 m-5 w-420 mx-auto md:mx-5'>
            <p className='text-3xl font-bold drop-shadow-text'>Artifact Sets</p>
            {filteredArtifactSets.map((artifactSet) => {
                const expandElement = () => {
                    document.getElementById(`${artifactSet.name}IdUpper`)?.classList.toggle('hidden');
                    document.getElementById(`${artifactSet.name}IdLower`)?.classList.toggle('hidden');
                    document.getElementById(`${artifactSet.name}IdLower`)?.classList.toggle('flex');
                }
                return (
                    <div key={artifactSet} className='hover:cursor-pointer m-2 text-start' onClick={() => expandElement()}>
                        <div id={`${artifactSet.name}IdUpper`} className='w-96 bg-dark rounded-xl shadow-outer flex items-center justify-between p-1'>
                            <img src={`/images/artifacticons/artifactsets/${artifactSet.name.replaceAll(' ', '_')}.webp`} className='w-16 m-1' />
                            <p className='text-2xl mx-2 drop-shadow-text w-full'>{ artifactSet.name }</p>
                            <img className='w-6 opacity-50 mx-2' src='/images/misc/whitearrow.png' />
                        </div>
                        <div id={`${artifactSet.name}IdLower`} className='bg-dark hidden w-96 rounded-xl shadow-outer flex-col text-2xl justify-between p-3'>
                            <p className='drop-shadow-text'>{ artifactSet.name }</p>
                            <div className='flex justify-between'>
                                <div className='flex flex-col text-base justify-between'>
                                    <p className='drop-shadow-text'>Artifact Set</p>
                                    <div className=''>
                                        <p className='drop-shadow-text leading-4'>2-Piece Set</p>
                                        <p className='drop-shadow-text text-grayFont mb-6'>{ artifactSet.twoPiece }</p>
                                    </div>
                                </div>
                                <img className='w-32' src={`/images/artifacticons/artifactsets/${artifactSet.name.replaceAll(' ', '_')}.webp`} />
                            </div>
                            <div className='text-base'>
                                <p className='drop-shadow-text leading-4'>4-Piece Set</p>
                                <p className='drop-shadow-text text-grayFont'>{ artifactSet.fourPiece }</p>
                            </div>
                        </div>
                    </div>
                )
            })}
        </div>
    )
}