export default function SideBar() {
    return (
        <div className='bg-dark min-w-xs flex flex-col items-center shadow-around h-screen text-lg sticky top-0 w-80'>
            <div className="flex items-center m-2">
                <a href='/'>
                    <img src='/images/misc/GenshinImpactLogo.png' />
                </a>                
            </div>
            <a className="flex bg-darker hover:bg-second w-4/5 p-4 mt-8 rounded-xl justify-center shadow-around" href="/characters">
                Characters
            </a>
            <a className="flex bg-darker hover:bg-second w-4/5 p-4 mt-8 rounded-xl justify-center shadow-around" href="/weapons">
                Weapons
            </a>
            <a className="flex bg-darker hover:bg-second w-4/5 p-4 mt-8 rounded-xl justify-center shadow-around" href="">
                Artifacts
            </a>
        </div>
    )
}