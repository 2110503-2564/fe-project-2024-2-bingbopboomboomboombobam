import { Cog, LifeBuoy, Users } from "lucide-react";
import Image from "next/image";

export default function CarCard({carname,price,seat,transmission,driveTrain}:{carname:string,price:string,seat:string,transmission:string,driveTrain:string}) {
    return <div className="w-[27em] h-42 bg-[#27272A] drop-shadow-md">
        <div className="flex relative h-full flex-row gap-4 items-center">
            <div className="relative h-30 w-1/2 ml-5">
                <Image className="object-cover" src="https://static.vecteezy.com/system/resources/previews/019/612/564/non_2x/sport-car-isolated-on-transparent-background-3d-rendering-illustration-free-png.png" alt="car picture" fill />
            </div>
            <div className="w-1/2 flex flex-col justify-center items-start mr-5">
                <div className="text-white  text-2xl font-semibold">
                    {carname}
                </div>
                <div className="flex flex-row justify-start items-end">
                    <div className="text-white  font-semibold text-xl mr-1">
                        {price}
                    </div>
                    <div className="text-[#E4E5EA]  text-base font-light">
                        per day
                    </div>
                </div>
                <div className="flex flex-row items-center mt-2 justify-between w-full ">
                    <div className="flex flex-col items-center">
                        <LifeBuoy className="text-[#E4E5EA] font-thin" size={24} />
                        <div className="text-[#E4E5EA] font-thin text-sm">{transmission}</div>
                    </div>
                    <div className="flex flex-col items-center">
                        <Cog className="text-[#E4E5EA] font-thin" size={24} />
                        <div className="text-[#E4E5EA] font-thin text-sm">{driveTrain}</div>
                    </div>
                    <div className="flex flex-col items-center">
                        <Users className="text-[#E4E5EA] font-thin" size={24} />
                        <div className="text-[#E4E5EA] font-thin text-sm">{seat}</div>
                    </div>
                </div>
            </div>

        </div>
    </div>
}
