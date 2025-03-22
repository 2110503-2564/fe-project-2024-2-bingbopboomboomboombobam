import { Cog, LifeBuoy, Users } from "lucide-react";
import Image from "next/image";

export default function CarCard({ carname, price, seat, transmission, driveTrain }: { carname: string, price: string, seat: string, transmission: string, driveTrain: string }) {
    return (
        <div className="w-[436px] h-42 bg-s-grey-1000 drop-shadow-md flex flex-row items-center p-5 gap-2">


            <div className="relative w-1/2 h-full">
                <Image className="object-cover" src="https://static.vecteezy.com/system/resources/previews/019/612/564/non_2x/sport-car-isolated-on-transparent-background-3d-rendering-illustration-free-png.png" alt="car picture" fill />
            </div>


            <div className="grow flex flex-col gap-1 items-start">
                <div className="text-white text-2xl font-semibold">
                    {carname}
                </div>
                <div className="flex flex-row gap-1 items-end">
                    <div className="text-white font-semibold text-xl">
                        {price}
                    </div>
                    <div className="text-white text-base font-light">
                        per day
                    </div>
                </div>
                <div className="text-white flex flex-row items-center justify-between w-full">
                    <div className="flex flex-col items-center">
                        <LifeBuoy className="font-thin" size={24} />
                        <div className="font-thin text-sm">{transmission}</div>
                    </div>
                    <div className="flex flex-col items-center">
                        <Cog className=" font-thin" size={24} />
                        <div className="font-thin text-sm">{driveTrain}</div>
                    </div>
                    <div className="flex flex-col items-center">
                        <Users className="font-thin" size={24} />
                        <div className="font-thin text-sm">{seat}</div>
                    </div>
                </div>
            </div>


        </div>
    )
}
