export default function RecommendedArticacts() {
    return (
        <div className='bg-poldark rounded-xl mt-1024 md:mt-0 my-5 shadow-outer text-2xl w-96 md:w-80 h-fit'>
            <div className='flex flex-col opacity-95'>
                <div className='text-center py-2'>
                    Artifact Stats
                </div>
                <div className="flex flex-col text-xl pt-2 m-auto">
                    <div className="bg-dark rounded-xl flex flex-row shadow-around m-5 mt-0 p-1 overflow-wrap">
                        <img className='w-12 mx-2' src='/images/artifacticons/Icon_Flower_of_Life.webp' />
                        <p className='m-auto text-center pr-3'>HP</p>
                    </div>
                    <div className="bg-dark rounded-xl flex flex-row shadow-around m-5 mt-0 p-1 overflow-wrap">
                        <img className='w-12 mx-2' src='/images/artifacticons/Icon_Plume_of_Death.webp' />
                        <p className='m-auto text-center pr-3'>ATK</p>
                    </div>
                    <div className="bg-dark rounded-xl flex flex-row shadow-around m-5 mt-0 p-1 overflow-wrap">
                        <img className='w-12 mx-2' src='/images/artifacticons/Icon_Sands_of_Eon.webp' />
                        <p className='m-auto text-center pr-3'>Energy Recharge / ATK%</p>
                    </div> 
                    <div className="bg-dark rounded-xl flex flex-row shadow-around m-5 mt-0 p-1 overflow-wrap">
                        <img className='w-12 mx-2' src='/images/artifacticons/Icon_Goblet_of_Eonothem.webp' />
                        <p className='m-auto text-center pr-3'>Electro DMG / ATK%</p>
                    </div>
                    <div className="bg-dark rounded-xl flex flex-row shadow-around m-5 mt-0 p-1 overflow-wrap">
                        <img className='w-12 mx-2' src='/images/artifacticons/Icon_Circlet_of_Logos.webp' />
                        <p className='m-auto text-center pr-3'>CRIT Rate / CRIT DMG</p>
                    </div>
                </div>
                <div className='text-center py-2'>
                    Recommended Set
                </div> 
                <div className="flex flex-col text-xl pt-2 m-auto">
                    <div className="bg-dark rounded-xl flex flex-row shadow-around m-5 mt-0 p-1 overflow-wrap">
                        <img className='w-12 mx-2' src='/images/EmblemOfSeveredFate.webp' />
                        <p className='m-auto text-center pr-3'>Emblem of Severed Fate</p>
                    </div>
                </div>                                                             
            </div>        
        </div>
    )
}