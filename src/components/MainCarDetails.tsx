import Link from "next/link";

export default function MainCarDetails({car,is3d,setIs3d,setIsBook}:{car:Car,is3d:boolean,setIs3d:Function,setIsBook:Function}){
    return (
        <div className="flex flex-row h-30 items-center justify-center bg-s-grey-1000">
                <div onClick={()=>setIsBook(true)} className="h-30 w-30 bg-red-600 flex hover:bg-red-700 flex-col items-center justify-center text-white hover:cursor-pointer">
                <div className="text-xl/tight font-semibold">BOOK NOW!</div>
                <div className="text-4xl/tight font-bold">${car.price.toLocaleString()}</div>
                <div className="text-xl/tight font-semibold text-s-grey-1000">per day</div>
            </div>
            <div className="h-30 w-40 bg-s-grey-1000 flex flex-col items-center justify-center text-white p-5">
                <div className="flex flex-col items-left justify-center">
                    <div className="text-xl font-semibold">POWER</div>
                    <div className="text-4xl font-semibold">{car.power} HP</div>
                    <div className="text-xs font-extralight text-s-grey-100">A Measures the power of an engine or motor</div>
                </div>
            </div>
            <div className="h-4/5 w-0.5 bg-s-grey-900" />
            <div className="h-30 w-40 bg-s-grey-1000 flex flex-col items-center justify-center text-white p-5">
                <div className="flex flex-col items-left justify-center">
                    <div className="text-xl font-semibold">TORQUE</div>
                    <div className="text-4xl font-semibold">{car.torque} Nm</div>
                    <div className="text-xs font-extralight text-s-grey-100">A Measure of rotational force applied to an object</div>
                </div>
            </div>
            <div className="h-4/5 w-0.5 bg-s-grey-900" />
            <div className="h-30 w-40 bg-s-grey-1000 flex flex-col items-center justify-center text-white p-5">
                <div className="flex flex-col items-left justify-center">
                    <div className="text-xl font-semibold">Engine</div>
                    <div className="text-4xl font-semibold">{car.engine}</div>
                    <div className="text-xs font-extralight text-s-grey-100">A loud, powerful roar, adding to its performance appeal</div>
                </div>
            </div>
            <div className="h-4/5 w-0.5 bg-s-grey-900" />



        </div>
    )
}