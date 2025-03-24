import Image from "next/image";
import Link from "next/link";

export default function MyBookingCard({ id,location,model,name,date,uid,img }: { id: string,location:string,brand:string,model:string,name:string,date:string,uid:string,img:string }) {
    img = 'https://static.vecteezy.com/system/resources/previews/019/612/564/non_2x/sport-car-isolated-on-transparent-background-3d-rendering-illustration-free-png.png'
    return (
        <div className="cursor-pointer w-[436px] h-42 bg-s-grey-1000 drop-shadow-md flex flex-row justify-center items-center p-2 hover:border-1 hover:border-red-500">
            <Link href={`mybookings/${id}`} legacyBehavior>
                <div className="gap-x-5 flex w-[400px] h-full justify-center items-center">
                    <div className="relative w-50 h-full">
                        <Image className="object-cover" src={img} alt="car picture" fill />
                    </div>
                    <div className="grow flex flex-col items-start">
                        <div className="text-white text-2xl/tight font-semibold">
                            {model}
                        </div>
                        <div className="text-white text-lg font-medium">
                            {name}
                        </div>
                        <div className="text-white text-base">
                            {date}
                        </div>
                        <div className="text-white text-xs font-light">
                            {location}
                        </div>
                        <div className="text-white/50 text-xs mt-2 font-light">
                            User: {uid}
                        </div>
                    </div>
                </div>
            </Link>
        </div>
    )
}
