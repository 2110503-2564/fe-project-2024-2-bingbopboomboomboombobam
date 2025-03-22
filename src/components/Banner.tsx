import Image from "next/image";

export default function Banner() {
    return <div className="absolute top-0 w-full max-w-[2000px] h-[500px] overflow-hidden">
        <div className="absolute w-full h-full bg-black/50 z-1" />
        <Image className="object-cover object-[100%_85%] absolute" src='/home-bg-1.JPG' fill alt='home background' priority />
    </div>
}
