import { useState } from "react";

export default function SearchBar({ characters, onFilterChange }: { characters: any, onFilterChange: any }) {
  const [searchItem, setSearchItem] = useState('');

  const handleInputChange = (e: any) => {
    const searchTerm = e.target.value;
    setSearchItem(searchTerm);
    const filteredItems = characters.filter((character: any) => {
      return character.name.toLowerCase().includes(searchTerm.toLowerCase());
    });
    onFilterChange(filteredItems);
  }

  return (
    <div className='m-4 flex justify-center w-full col-start-2 col-span-3'>
      <input type='text' placeholder='Search character...' onChange={handleInputChange} value={searchItem} className='bg-dark rounded-xl p-3 enabled:border-0 outline-none max-w-xl w-full shadow-outer' />
    </div>
  );
}