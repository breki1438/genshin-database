'use client'

export default function ConstellationElement({number, conImg, con, color}: {number: number, conImg: any, con: any, color: any}) {
    const onClick = () => {
        const talentDiv = document.getElementById(`constellation${number}`);
        if (talentDiv) {
            talentDiv.classList.toggle('h-16');
        }
    }
    const conId = `constellation${number}`;
    return (
        <div id={ conId } className="bg-dark flex flex-col m-3 rounded-xl shadow-around h-16 overflow-hidden hover:cursor-pointer" onClick={onClick}>
            <div className="flex justify-center m-2 items-center">
                <div className='ml-2 flex items-center'>
                    <img className='w-12' src={ conImg[number] } />
                    <p className='ml-2' style={{color: `${color.backgroundColor}`}}>{ con[number].name }</p>
                </div>
            </div>
            <div className="mx-3 mb-3 text-xl">
                <p>{ con[number].description }</p>
            </div>
        </div>
    )
}