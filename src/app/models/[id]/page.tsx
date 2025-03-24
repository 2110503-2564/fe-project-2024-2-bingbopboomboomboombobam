import ColorPicker from "@/components/ColorPicker";
import MainCarDetails from "@/components/MainCarDetails";
import OtherCarDetails from "@/components/OtherCarDetails";
import ShowCar from "@/components/ShowCar";

export default async function Car({ params }: Props) {
    const { id } = await params
    console.log(id);
    return (
        <div className="pt-20 h-screen">
            <div className="h-full flex flex-row justify-between items-center">
                <div className="h-full w-1/6 flex flex-col items-end justify-center">
                    <OtherCarDetails />
                </div>
                <div className="h-full w-2/3 flex flex-col justify-between items-center">
                    <div className="grow w-full flex justify-center items-center">
                        <ShowCar />
                    </div>
                    <div className="h-30 w-full flex flex-col justify-between items-center">
                        <MainCarDetails />
                    </div>
                </div>
                <div className="h-full w-1/6 flex flex-col items-start justify-center">
                    <ColorPicker isVertical />
                </div>
            </div>
        </div>
    )
}
