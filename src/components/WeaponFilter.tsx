'use client'

import React from "react";

export default function WeaponFilter({ onWeaponChange, selectedWeapon }: { onWeaponChange: any, selectedWeapon: string}) {
    const renderCheckbox = (weapon: string, imagePath: string, label: string) => (
        <div key={weapon} className={`rounded-xl w-24 flex flex-col items-center text-sm sm:text-xl cursor-pointer ${selectedWeapon === weapon ? 'checked' : ''}`} onClick={() => onWeaponChange(weapon)}>
          <img src={imagePath} className={`w-12 ${selectedWeapon === weapon ? 'opacity-100' : 'opacity-25'}`} />
          <p className={`${selectedWeapon === weapon ? 'opacity-100' : 'opacity-50'} drop-shadow-text`}>{label}</p>
          <input type="checkbox" value={weapon} id={weapon} className='bg-darker hidden' checked={selectedWeapon === weapon} onChange={() => onWeaponChange(weapon)} />
        </div>
    );

    return (
        <div className='w-screen sm:max-w-lg bg-dark flex flex-row shadow-outer sm:rounded-xl items-center justify-evenly p-2 sm:p-4 my-2'>             
            {renderCheckbox('Sword', '/images/weapontype/Icon_Sword.webp', 'Sword')}
            {renderCheckbox('Claymore', '/images/weapontype/Icon_Claymore.webp', 'Claymore')}
            {renderCheckbox('Polearm', '/images/weapontype/Icon_Polearm.webp', 'Polearm')}
            {renderCheckbox('Bow', '/images/weapontype/Icon_Bow.webp', 'Bow')}
            {renderCheckbox('Catalyst', '/images/weapontype/Icon_Catalyst.webp', 'Catalyst')}
        </div>       
    )
}