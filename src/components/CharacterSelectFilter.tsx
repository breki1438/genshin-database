'use client'

import { useState } from "react";
import CharacterSelectIcon from "./CharacterSelectIcon";
import ElementFilter from "./ElementFilter";
import WeaponFilter from "./WeaponFilter";
import SearchBar from "./SearchBar";
import StarsFilter from "./StarsFilter";


export default function CharacterSelectFilter({ characters }: { characters: Array<any> }) {
    const [selectedElement, setSelectedElement] = useState('');
    const [selectedWeapon, setSelectedWeapon] = useState('');
    const [selectedStars, setSelectedStars] = useState(0);
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

    const handleStarsChange = (stars: number) => {
        setSelectedStars(prevSelectedStars => 
            prevSelectedStars === stars ? 0 : stars
        );
    };

    const handleFilterChange = (filteredItems: any) => {
        setFilteredCharacters(filteredItems);
    } 

    return (
        <div className='max-w-7xl flex flex-col m-auto'>
            <div className='flex flex-col'>
                <div className='flex flex-col xl:grid xl:grid-cols-5 justify-between m-2 items-center'>
                    <SearchBar characters={characters} onFilterChange={handleFilterChange}/>
                    <StarsFilter onStarsChange={handleStarsChange} selectedStars={selectedStars} />
                </div>
                <div className='flex flex-col xl:flex-row justify-between mb-4 items-center'>               
                    <ElementFilter onElementChange={handleElementChange} selectedElement={selectedElement} />             
                    <WeaponFilter onWeaponChange={handleWeaponChange} selectedWeapon={selectedWeapon} /> 
                </div>          
            </div>         
            <CharacterSelectIcon characters={filteredCharacters} selectedElement={selectedElement} selectedWeapon={selectedWeapon} selectedStars={selectedStars}/>  
        </div>       
    )
}