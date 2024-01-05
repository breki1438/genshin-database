'use client'

import { useState } from "react";
import CharacterSelectIcon from "./CharacterSelectIcon";
import ElementFilter from "./ElementFilter";
import WeaponFilter from "./WeaponFilter";
import SearchBar from "./SearchBar";


export default function CharacterSelectFilter({ characters }: { characters: Array<any> }) {
    const [selectedElement, setSelectedElement] = useState('');
    const [selectedWeapon, setSelectedWeapon] = useState('');
    const [filteredCharacters, setFilteredCharacters] = useState(characters)

    const handleElementChange = (element: string) => {
        setSelectedElement(prevSelectedElement => 
            prevSelectedElement === element ? '' : element
        );
    };

    const handleWeaponChange = (weapon: string) => {
        setSelectedWeapon(prevSelectedWeapon => 
            prevSelectedWeapon === weapon ? '' : weapon
        );
    };

    const handleFilterChange = (filteredItems: any) => {
        setFilteredCharacters(filteredItems);
    } 

    return (
        <div className='max-w-7xl flex flex-col m-auto'>
            <div className='flex flex-col'>
                <SearchBar characters={characters} onFilterChange={handleFilterChange}/>
                <div className='flex justify-between mb-4'>
                    <ElementFilter onElementChange={handleElementChange} selectedElement={selectedElement} />
                    <WeaponFilter onWeaponChange={handleWeaponChange} selectedWeapon={selectedWeapon} /> 
                </div>
                
            </div>           
            <CharacterSelectIcon characters={filteredCharacters} selectedElement={selectedElement} selectedWeapon={selectedWeapon}/>      
        </div>       
    )
}