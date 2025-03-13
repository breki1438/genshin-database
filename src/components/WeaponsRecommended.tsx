'use client'

import { useState } from "react";

export default function WeaponsRecommended(character: any) {
    const [type, setType] = useState('General');
    const weapons = character.character.weapons; 
    //console.log(weapons[type]);

    return (
        <div>
            <button onClick={() => setType('General')}>General</button>
            <button onClick={() => setType('Hyperbloom')}>Hyperbloom</button>
            {weapons[type].map((weapon: string) => {
                return (
                    <div key={weapon}>
                        {weapon}
                    </div>
                )
            })}
        </div>
    )
}