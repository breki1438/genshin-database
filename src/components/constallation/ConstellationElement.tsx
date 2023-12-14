'use client'

export default function ConstellationElement({number, conImg, con, color}: {number: number, conImg: any, con: any, color: any}) {
    const conId = `constellation${number}`;
    const onClick = () => {
        const talentDiv = document.getElementById(`constellation${number}`);
        const ArrowId = document.getElementById(`${conId}Arrow`);
        if (talentDiv && ArrowId) {
            talentDiv.classList.toggle('h-16');
            ArrowId.classList.toggle('rotate-180');
        }
    }
    return (
        <div id={ conId } className="bg-dark flex flex-col m-3 rounded-xl shadow-around h-16 overflow-hidden hover:cursor-pointer" onClick={onClick}>
                <div className='m-2 flex items-center'>
                    <img className='w-12' src={ conImg[number] } />
                    <p className='ml-2' style={{color: `${color.backgroundColor}`}}>{ con[number].name }</p>
                    <img id={ `${conId}Arrow` } className='w-6 ml-auto opacity-50 mr-1' src='/images/misc/whitearrow.png' />
                </div>
            <div className="mx-3 mb-3 text-xl">
                <p>{ con[number].description }</p>
            </div>
        </div>
    )
}