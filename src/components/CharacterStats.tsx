'use client'

import { useState } from "react";

export default function CharacterStats(character: any) {
    const [ascension, setAscension] = useState('one');
    const ascensions = character.character.ascension;
    return (
        <div className='flex flex-col my-5 bg-poldark md:rounded-xl shadow-outer w-full max-w-3xl xl:max-w-7xl'>
            <div className='text-2xl text-center m-2'>
                Base Stats
            </div>
            <div className='flex bg-poldark shadow-around justify-center'>
                <button className='hover:bg-poldark p-2 hover:shadow-around' onClick={() => setAscension('one')}>Lv.1</button>
                <button className='hover:bg-poldark p-2 hover:shadow-around' onClick={() => setAscension('twenty')}>Lv.20</button>  
                <button className='hover:bg-poldark p-2 hover:shadow-around' onClick={() => setAscension('forty')}>Lv.40</button>  
                <button className='hover:bg-poldark p-2 hover:shadow-around' onClick={() => setAscension('fifty')}>Lv.50</button>  
                <button className='hover:bg-poldark p-2 hover:shadow-around' onClick={() => setAscension('sixty')}>Lv.60</button>  
                <button className='hover:bg-poldark p-2 hover:shadow-around' onClick={() => setAscension('seventy')}>Lv.70</button>
                <button className='hover:bg-poldark p-2 hover:shadow-around' onClick={() => setAscension('eighty')}>Lv.80</button>
                <button className='hover:bg-poldark p-2 hover:shadow-around' onClick={() => setAscension('ninety')}>Lv.90</button>  
            </div>
            <table className='text-start my-5 shadow-around'>
                <tbody>
                    <tr className='bg-poldark'>
                        <td></td>
                        <td>Before Ascension</td>
                        <td>After Ascension</td>
                    </tr>
                    {ascensions[ascension].map((ascend: any) => {
                        return (
                            <tr key={ ascend.name } className='bg-dark'>
                                <td className='w-1/3'>{ ascend.name }</td>
                                <td className='w-1/3'>{ ascend.before }</td>
                                <td className='w-1/3'>{ ascend.after }</td>
                            </tr>
                        )
                    })}
                </tbody>
            </table>
        </div>
    )
}