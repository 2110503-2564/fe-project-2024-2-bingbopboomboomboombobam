import Image from "next/image";

export default function WhyCard({
  head,
  title,
  description,
  picture,
}: {
  head: string,
  title?: string,
  description?: string,
  picture?: string,
}) {
  return (
    <div className="relative w-72 h-full flex flex-col justify-center items-start bg-[#3B3C41]">
      <div className="px-4 z-2 text-white drop-shadow-md">
        <div className="text-3xl font-semibold">{head}</div>
        {title && <div className="text-xl font-semibold">{title}</div>}
        {description && <div className="text-base font-normal">{description}</div>}
      </div>
      <div className="absolute h-full w-full bg-black/30 z-1" />
      {picture && (
        <Image
          className="object-cover"
          src={picture}
          fill
          alt="car picture"
        />
      )}
    </div>
  );
}