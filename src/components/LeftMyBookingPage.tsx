import Image from "next/image";
import ConditionCard from "./ConditionCard";
import ColorPicker from "./ColorPicker";

export default function LeftMyBookingPage() {
    return (
        <div className="flex flex-col">
            <div className="text-s-grey-100 text-4xl font-bold">
                LAMBORGHINI
            </div>
            <div className="text-white text-7xl font-bold">
                AVENTADOR
            </div>
            <div className="relative w-[600px] h-[225px]">
                <Image className="object-cover object-center" src="/s-car.png" fill alt='main car' priority />
            </div>
        </div>
    )
}