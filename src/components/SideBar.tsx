export default function SideBar() {
    return (
        <div className='border-r border-[#888888] bg-gradient-to-t from-[#1E242F] via-[#2D3647] to-[#1E242F] font-semibold flex flex-col items-center drop-shadow-text h-screen text-lg fixed z-20 top-0 w-[240px] px-4'>
            <div className="flex items-center m-5">
                <a href='/'>
                    <img src='/images/misc/GenshinImpactLogo.png' />
                </a>                
            </div>
            <div className="flex flex-col w-full">
                <a className="flex hover:bg-gradient-to-br hover:from-[#778DA9]/[18.75%] hover:to-[#E0E1DD]/[37.5%] hover:shadow-around w-full p-4 rounded-xl justify-start items-center" href="/characters">
                    <img src="/images/icons/characters_icon.webp" alt="" className="w-9 mr-2"/>
                    Characters
                </a>
                <a className="flex hover:bg-gradient-to-br hover:from-[#778DA9]/[18.75%] hover:to-[#E0E1DD]/[37.5%] hover:shadow-around w-full p-4 rounded-xl justify-start items-center" href="/weapons">
                    <img src="/images/icons/weapons_icon.webp" alt="" className="w-9 mr-2"/>
                    Weapons
                </a>
                <a className="flex hover:bg-gradient-to-br hover:from-[#778DA9]/[18.75%] hover:to-[#E0E1DD]/[37.5%] hover:shadow-around w-full p-4 rounded-xl justify-start items-center" href="">
                    <img src="/images/icons/artifacts_icon.webp" alt="" className="w-9 mr-2"/>
                    Artifacts
                </a>
            </div>
        </div>
    )
}