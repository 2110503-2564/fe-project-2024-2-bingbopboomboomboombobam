import { getImage } from "@/app/libs/function/function";
import Image from "next/image";


export default function LeftMyBookingPage({booking}:{booking:Booking}) {
    console.log(booking.color,booking.car.image)
    return (
        <div className="flex flex-col">
            <div className="text-s-grey-100 text-4xl font-bold">
                {booking.car.brand.toUpperCase()}
            </div>
            <div className="text-white text-7xl font-bold">
                {booking.car.model.toUpperCase()}
            </div>
            <div className="relative w-[600px] h-[225px]">
                <Image className="object-cover object-center" src={getImage(booking.color,booking.car.image)} fill alt='main car' priority />
            </div>
        </div>
    )
}