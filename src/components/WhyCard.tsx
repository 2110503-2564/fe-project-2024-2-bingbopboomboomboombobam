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
    <div className="relative w-72 h-42 bg-s-grey-400">
      <div className="absolute h-full w-full bg-black/30 z-2" />
        <div className="relative z-3 text-white drop-shadow-md flex flex-col gap-1 justify-center items-start p-5 w-full h-full">
          <div className="text-3xl font-semibold">{head}</div>
          {title && <div className="text-xl font-semibold">{title}</div>}
          {description && <div className="text-base font-normal">{description}</div>}
        </div>
      {picture && (
          <Image
            className="object-cover z-1"
            src={picture}
            fill
            alt="car picture"
          />
        )}
    </div>
  );
}