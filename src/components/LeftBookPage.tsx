import Image from "next/image";
import ConditionCard from "./ConditionCard";
import ColorPicker from "./ColorPicker";

export default function LeftBookingPage() {
    return (
        <div className="flex flex-col">
            <div className="text-s-grey-100 text-4xl font-bold">
                LAMBORGHINI
            </div>
            <div className="text-white text-7xl font-bold">
                AVENTADOR
            </div>
            <div className="flex flex-row items-end justify-start gap-2">
                <div className="text-white text-3xl font-bold">
                    $1,200
                </div>
                <div className="text-s-grey-100 text-xl font-medium">
                    per day
                </div>
            </div>
            <div className="flex flex-row gap-2 py-2">
                <ConditionCard />
                <ConditionCard />
            </div>
            <div className="relative w-[600px] h-[225px]">
                <Image className="object-cover object-center" src="/s-car.png" fill alt='main car' priority />
            </div>
            <ColorPicker/>
        </div>
    )
}