import { text } from "stream/consumers"

export default function ConstellationElement({number, conImg, con, color}: {number: number, conImg: any, con: any, color: any}) {

    return (
        <div className="bg-dark flex flex-col m-3 rounded-xl shadow-around">
            <div className="flex justify-center m-3 items-center">
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