import ScrollableContainer from "./ScrollableContainer";

export default function BrandScroll({brand,cars}:{brand:string,cars:Car[]}) {
    return (
        <div className="flex w-[1200px] flex-col gap-3 py-10">
            <div className="text-4xl text-white font-semibold">{brand}</div>
            <div className="p-2 bg-s-grey-1100 rounded-lg" ><ScrollableContainer cars={cars} /></div>
        </div>
    )
}