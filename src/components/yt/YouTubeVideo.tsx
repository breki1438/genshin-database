export default async function YouTubeVideo() {
    return (
        <div className="bg-poldark md:rounded-xl shadow-outer flex flex-col max-w-3xl xl:max-w-7xl w-full my-2 py-2 h-fit">
            <div className="text-5xl font-semibold text-center pt-3 drop-shadow-text">Kitchen Nightmares</div>
            <iframe width="1280" height="720" className="rounded-xl my-4 shadow-around" src={`http://www.youtube.com/embed/playlist?list=PLoieWSdjTgUL0owghq6DWTiQf2nUcghJ2&index=${Math.floor(Math.random() * 152) + 1}`} title="EVERY FULL EPISODE" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"></iframe>
        </div>
    )
}