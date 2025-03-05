'use client'

import React from "react";

export default function StarsFilter({ onStarsChange, selectedStars }: { onStarsChange: any, selectedStars: number}) {
    const renderCheckbox = (stars: number, imagePath: string) => (
        <div key={stars} className={`${stars} rounded-xl w-20 flex flex-col items-center text-sm sm:text-xl cursor-pointer ${selectedStars === stars ? 'checked' : ''}`} onClick={() => onStarsChange(stars)}>
          <img src={imagePath} className={`w-8 ${selectedStars === stars ? 'opacity-100' : 'opacity-25'}`} />
          <input type="checkbox" value={stars} id={stars.toString()} className='hidden' checked={selectedStars === stars} onChange={() => onStarsChange(stars)} />
        </div>
    );

    return (
        <div className='w-24 bg-dark flex flex-row shadow-outer sm:rounded-xl p-2 col-start-5'>             
            {renderCheckbox(5, '/images/misc/5starIcon.png')}
            {renderCheckbox(4, '/images/misc/4starIcon.png')}
        </div>       
    )
}