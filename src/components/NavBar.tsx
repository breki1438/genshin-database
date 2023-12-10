export default function NavBar() {
    return (
        <div className='w-full h-14 m-auto flex justify-center bg-dark sticky top-0 z-10 py-2 shadow-around'>
            <div className='w-full max-w-3xl xl:max-w-7xl h-full flex justify-start'>
               <a className='w-24 flex items-center m-2 xl:w-36' href='/'>
                    <img src='/images/misc/GenshinImpactLogo.png' />
                </a>
                <div className='flex items-center'>
                <a className="flex bg-darker hover:bg-second w-24 mx-2 p-1 rounded-xl justify-center shadow-around" href="/characters">
                        Characters
                    </a>
                    <a className="flex bg-darker hover:bg-second w-24 mx-2 p-1 rounded-xl justify-center shadow-around" href="/weapons">
                        Weapons
                    </a>
                    <a className="flex bg-darker hover:bg-second w-24 mx-2 p-1 rounded-xl justify-center shadow-around" href="">
                        Artifacts
                    </a>               
                </div> 
            </div>
                     
        </div>
    )
    
}