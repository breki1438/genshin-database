export default async function CharacterPassives({passives}: { passives: Array<any> }) {
    return (
        <div className="border border-[#888888] bg-gradient-to-br from-[#232A37] to-[#1E242F] md:rounded-xl shadow-outer flex flex-col max-w-3xl xl:max-w-7xl w-full my-2 p-2">
            <div className="text-2xl font-semibold text-center pt-3 drop-shadow-text">Character Passives</div>
            <div className="grid grid-cols-2">
            {passives.map((p, i) => (
                <div key={i} className="border border-[#888888] bg-gradient-to-br from-[#2D3647] to-[#28303F] m-5 p-5 rounded-md shadow-around w-auto">
                    <div className="flex items-center mb-4">
                        <img className="w-12" src={`/images/${p.characterName.toLowerCase().replaceAll(" ", "")}/passives/${p.passiveType}.webp`}/>
                        <div className="ml-3 text-xl font-semibold">{p.passiveType}: {p.passiveName}</div>
                    </div>
                    <div className="text-lg px-3" dangerouslySetInnerHTML={{__html: p.passiveDescription}}></div>
                </div>
            ))}
            </div>
        </div>
    )
}