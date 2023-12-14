import ConstellationElement from "./constallation/ConstellationElement";

export default function CharacterConstelations({ character, color }: {character: any, color: any}) {
    let constellationImages = [];
    let constellations = [];
    for (let i=1; i<=6; i++) {
        constellationImages.push(`/images/${character.url}/constellations/constellation_${i}.png`);
    }
    for (let i=1; i<=6; i++) {
        const dupa = character.constellations[i];
        constellations.push(dupa)
    }
    //console.log(constellations[0]);

    return (
        <div className='bg-poldark w-96 my-5 rounded-xl shadow-around text-2xl h-fit'>
            <div className='flex flex-col p-2 overflow-hidden opacity-95'>
                <div className='text-2xl text-center'>
                    Constellations
                </div>
                <div className="flex flex-col">
                    <ConstellationElement number={0} conImg={constellationImages} con={constellations} color={color}/>
                    <ConstellationElement number={1} conImg={constellationImages} con={constellations} color={color}/>
                    <ConstellationElement number={2} conImg={constellationImages} con={constellations} color={color}/>
                    <ConstellationElement number={3} conImg={constellationImages} con={constellations} color={color}/>
                    <ConstellationElement number={4} conImg={constellationImages} con={constellations} color={color}/>
                    <ConstellationElement number={5} conImg={constellationImages} con={constellations} color={color}/>
                </div>                                                             
            </div>        
        </div>
    )
}