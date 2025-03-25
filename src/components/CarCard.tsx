import { Cog, LifeBuoy, Users } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export default function CarCard({ id, carname, price, seat, transmission, driveTrain, img }: { id: string, carname: string, price: string, seat: string, transmission: string, driveTrain: string, img: string }) {
    console.log(img)
    img = img || "/s-car.png";
    return (
        <div className="cursor-pointer w-[436px] h-42 bg-s-grey-1000 drop-shadow-md flex flex-row justify-center items-center p-2 hover:border-1 hover:border-red-500">
            <Link href={`models/${id}`} legacyBehavior>
                <div className="gap-5 flex w-[400px] h-full justify-center items-center">
                    <div className="relative w-50 h-full">
                        <Image className="object-contain" src={img} alt="car picture" fill />
                    </div>
                    <div className="grow flex flex-col items-start">
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
                        <div className="pt-4 text-white flex flex-row items-center justify-start gap-6">
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
            </Link>
        </div>
    )
}
