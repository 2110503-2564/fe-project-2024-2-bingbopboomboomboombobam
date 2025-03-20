import Image from "next/image";

export default function Banner() {
    return <div className="absolute top-0 w-full h-96 overflow-hidden">
        <div className="absolute w-full h-full bg-black/50 z-1" />
        <Image className="z-0 object-cover object-[100%_85%] absolute" src='/home-bg-1.jpg' fill alt='home background' priority />
    </div>
}
