import ScrollableContainer from "./ScrollableContainer";

export default function BrandScroll() {
    return (
        <div className="flex flex-col gap-3 py-10">
            <div className="text-4xl text-white font-semibold">Lamborghini</div>
            <div className="w-1/2">
                <div className="text-lg text-white font-light">
                    Lamborghini is an Italian luxury sports car brand, known for its powerful cars and sleek designs.
                </div>
            </div>
            <div className="p-2 bg-s-grey-1100 rounded-lg" ><ScrollableContainer /></div>
        </div>
    )
}