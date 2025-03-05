'use client'

import { useState } from "react";

export default function WeaponBox({ weapons, characterWeapons, build }: { weapons: Array<any>, characterWeapons: Array<any>, build: string }) {
    const selectBuild = build;
    const filteredWeapons = characterWeapons
    .filter(build => build.build === selectBuild)
    .map(build => weapons.find(weapon => weapon.name === build.weaponName));
    return (
        <div className='bg-poldark rounded-xl shadow-around flex flex-col items-center text-2xl text-center p-2 m-5 w-420 mx-auto md:mx-5'>
            <p className='text-3xl font-bold drop-shadow-text'>Weapons</p>
            <div className='flex flex-col'>   
                {filteredWeapons.map((weapon, index) => {
                    const expandElement = () => {
                        document.getElementById(`${weapon.name}IdUpper`)?.classList.toggle('hidden');
                        document.getElementById(`${weapon.name}IdLower`)?.classList.toggle('hidden');
                        document.getElementById(`${weapon.name}IdLower`)?.classList.toggle('flex');
                    }
                    const weaponColor = () => {
                        if(weapon.stars == 5) {
                            document.getElementById(`${weapon.name}IdUpper`)?.classList.add('fiveStar');
                        } else {
                            document.getElementById(`${weapon.name}IdUpper`)?.classList.add('fourStar');
                        }
                    }
                    return (
                        <div key={ index } className='hover:cursor-pointer mt-2 text-start' onClick={() => expandElement()}>
                            <div id={`${weapon.name}IdUpper`} className={`p-2 w-96 bg-dark rounded-xl shadow-outer flex items-center justify-between stars-${weapon.stars}`} onLoad={() => weaponColor()}>
                                <img className='w-16 rounded-xl' src={`/images/weapons/Weapon_${weapon.name.replaceAll(/ |"/g, '_')}.webp`} />
                                <p className='text-2xl mx-2 drop-shadow-text w-full'>{ weapon.name }</p>
                                <img className='w-6 opacity-50 mx-2' src='/images/misc/whitearrow.png' />
                            </div>
                            <div id={`${weapon.name}IdLower`} className={`hidden w-96 rounded-xl shadow-outer flex-col text-2xl stars-${weapon.stars}`}>
                                <p className='drop-shadow-text p-3 pb-0'>{ weapon.name }</p>
                                <div className='flex justify-between px-3'>
                                    <div className='flex flex-col text-base justify-between'>
                                        <p className='drop-shadow-text'>{ weapon.type }</p>
                                        <div>
                                            <p className='text-grayFont drop-shadow-text leading-4'>{ weapon.secondStat }</p>
                                            <p className='drop-shadow-text'>{ weapon.secondStatValue }</p>
                                        </div>
                                        <div>
                                            <p className='text-grayFont drop-shadow-text leading-4'>Base ATK</p>
                                            <p className='text-2xl drop-shadow-text leading-6'>{ weapon.baseATK }</p>
                                            <img className='w-24 mb-2 mt-2' src='/images/misc/5star.png' />
                                        </div>                                                        
                                    </div>  
                                    <img className='w-44' src={`/images/weapons/Weapon_${weapon.name.replaceAll(/ |"/g, '_')}.webp`} />                
                                </div>
                                <div className='bg-darker rounded-b-xl px-3'>
                                    <p className='text-center m-2 drop-shadow-text'>{ weapon.passive }</p>
                                    <p className='text-base mb-2 leading-5 drop-shadow-text text-grayFont'>{ weapon.passiveDescription }</p>
                                </div>
                            </div>        
                        </div>
                    )
                })}
            </div>
        </div>       
    )
}