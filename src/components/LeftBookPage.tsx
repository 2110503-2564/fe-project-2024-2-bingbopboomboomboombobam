import Image from "next/image";
import ConditionCard from "./ConditionCard";
import ColorPicker from "./ColorPicker";

export default function LeftBookingPage({car}:{car:Car}) {
    return (
        <div className="flex flex-col">
            <div className="text-s-grey-100 text-4xl font-bold">
                {car.brand}
            </div>
            <div className="text-white text-7xl font-bold">
                {car.model}
            </div>
            <div className="flex flex-row items-end justify-start gap-2">
                <div className="text-white text-3xl font-bold">
                    ${car.price.toLocaleString()}
                </div>
                <div className="text-s-grey-100 text-xl font-medium">
                    per day
                </div>
            </div>
            <div className="flex flex-row gap-2 py-2">
                {/* <ConditionCard isDriver text={car.driver_license} />
                <ConditionCard isDriver={false} text={`You must be at least ${car.minimum_age} years old`}/> */}
            </div>
            <div className="relative w-[600px] h-[225px]">
                <Image className="object-cover object-center" src={car.image?.[0]?.[1] || "/s-car.png"} fill alt='main car' priority />
            </div>
            <ColorPicker/>
        </div>
    )
}