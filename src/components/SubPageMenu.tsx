'use client'

export default function SubPageMenu() {
    const scrollToBuilds = (id: string) => {
        const navbarHeight = 56;
        const element = document.getElementById(id);
        if (element) {
            const rect = element.getBoundingClientRect();
            if (rect) {
                const offset = rect.top + window.scrollY - navbarHeight;
                window.scrollTo({
                top: offset,
                behavior: 'smooth',
                });
            }
        }
    }
    return (
            <div className='mt-1024 md:mt-5 flex flex-col bg-poldark rounded-xl shadow-outer w-96 md:w-48 h-fit text-xl my-5 md:mr-auto m-0'>
                <div className='m-3 flex justify-center text-2xl'>
                    Menu
                </div>
                <button className='bg-dark m-5 mt-0 rounded-xl shadow-around flex p-2 items-center' onClick={() => scrollToBuilds('info')}>
                    <img className='w-8 mx-2' src='/images/misc/UI_Quest.webp' />
                    <p className='m-auto pr-3'>Info</p>
                </button>
                <button className='bg-dark m-5 mt-0 rounded-xl shadow-around flex justify-start p-2 items-center' onClick={() => scrollToBuilds('stats')}>
                    <img className='w-8 mx-2' src='/images/misc/Icon_Version_Highlights.webp' />
                    <p className='m-auto pr-3'>Stats</p>
                </button>
                <button className='bg-dark m-5 mt-0 rounded-xl shadow-around flex justify-start p-2 items-center' onClick={() => scrollToBuilds('builds')}>
                    <img className='w-8 mx-2' src='/images/misc/Icon_Adventurer_Handbook.webp' />
                    <p className='m-auto pr-3'>Builds</p>
                </button>
                <button className='bg-dark m-5 mt-0 rounded-xl shadow-around flex justify-start p-2 items-center' onClick={() => scrollToBuilds('teams')}>
                    <img className='w-8 mx-2' src='/images/misc/Icon_Friends.webp' />
                    <p className='m-auto pr-3'>Teams</p>
                </button>
            </div>        
    )
}