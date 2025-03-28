'use client'

import React from "react";

export default function ElementFilter({ onElementChange, selectedElement }: { onElementChange: any, selectedElement: string}) {
    const renderCheckbox = (element: string, imagePath: string, label: string) => (
        <div key={element} className={`${element} rounded-xl w-20 flex flex-col items-center text-sm sm:text-xl cursor-pointer ${selectedElement === element ? 'checked' : ''}`} onClick={() => onElementChange(element)}>
          <img src={imagePath} className={`w-12 ${selectedElement === element ? 'opacity-100' : 'opacity-25'}`} />
          <p className={`${selectedElement === element ? 'opacity-100' : 'opacity-50'} drop-shadow-text`}>{label}</p>
          <input type="checkbox" value={element} id={element} className='hidden' checked={selectedElement === element} onChange={() => onElementChange(element)} />
        </div>
    );

    return (
        <div className='w-screen sm:max-w-xl border border-[#888888] bg-gradient-to-br from-[#232A37]/[75%] to-[#1E242F]/[75%] flex flex-row shadow-outer sm:rounded-xl items-center justify-evenly p-2 sm:p-4 my-2'>
            {renderCheckbox('Electro', '/images/elements/Element_Electro.svg', 'Electro')}
            {renderCheckbox('Hydro', '/images/elements/Element_Hydro.svg', 'Hydro')}
            {renderCheckbox('Pyro', '/images/elements/Element_Pyro.svg', 'Pyro')}
            {renderCheckbox('Cryo', '/images/elements/Element_Cryo.svg', 'Cryo')}
            {renderCheckbox('Geo', '/images/elements/Element_Geo.svg', 'Geo')}
            {renderCheckbox('Anemo', '/images/elements/Element_Anemo.svg', 'Anemo')}
            {renderCheckbox('Dendro', '/images/elements/Element_Dendro.svg', 'Dendro')}
        </div>       
    )
}