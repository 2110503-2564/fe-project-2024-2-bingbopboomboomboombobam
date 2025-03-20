import Image from "next/image";

export default function ReviewCard({ name, review, picture }: { name: string, review: string, picture: string }) {
    return (
        <div className="relative bg-amber-300 w-72 h-full flex flex-col justify-end items-start">
            <div className="h-3/11 w-full z-3 px-4  drop-shadow-md text-white">
                <div className="text-base/5 font-light ">
                    {review}
                </div>
                <div className="font-semibold mt-1">
                    {name}
                </div>
            </div>
            <div className="absolute h-full w-full bg-gradient-to-b from-black/0 from-60% via-black/40 via-80% to-black/80 to-90% z-1 " />
            <Image className='object-cover' src={picture} fill alt='car picture' />
        </div>
    )
}