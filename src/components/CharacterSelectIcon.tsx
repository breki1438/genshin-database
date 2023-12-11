export default function CharacterSelectIcon({ sraki }: {sraki: any}) {
    return (
            <div className='flex flex-wrap ml-8 max-w-7xl justify-start m-auto'>
                {sraki.characters.map((sraka: any) => {
                    const imagePath = `/images/${sraka.url}/${sraka.url}.webp`;
                    const characterUrl = `/characters/${sraka.url}`;
                return (
                    <div key={sraka} className='flex flex-col w-32 h-fit m-5 items-center'>
                        <a href={characterUrl} className='flex rounded-full h-fit w-36 bg-neutral-300 shadow-around'>
                            <img src={imagePath} className='rounded-full'/>
                        </a>
                        <a href={characterUrl} className='pt-3 text-2xl text-center break-words'>{sraka.name}</a>             
                    </div>
                )
                })}
            </div>
    )
}