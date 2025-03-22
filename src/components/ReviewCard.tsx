import Image from "next/image";

export default function ReviewCard({ name, review, picture }: { name: string, review: string, picture: string }) {
    return (
        <div className="relative w-72 h-96 ">
            <div className="absolute h-full w-full bg-gradient-to-b from-black/0 from-60% via-black/40 via-80% to-black/80 to-90% z-1 " />
            <div className="relative h-full w-full z-3 drop-shadow-md text-white flex flex-col justify-end items-start p-5 pb-2">
                <div className="text-base/5 font-light ">
                    {review}
                </div>
                <div className="font-semibold mt-1">
                    {name}
                </div>
            </div>
            <Image className='object-cover' src={picture} fill alt='review picture' />
        </div>
    )
}