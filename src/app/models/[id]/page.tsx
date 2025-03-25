'use client'
import { useParams } from "next/navigation";
import { authOptions } from "@/app/api/auth/[...nextauth]/[...nextauth]";
import getCar from "@/app/libs/cars/getCar";
import ColorPicker from "@/components/ColorPicker";
import MainCarDetails from "@/components/MainCarDetails";
import OtherCarDetails from "@/components/OtherCarDetails";
import ShowCar from "@/components/ShowCar";
import { Suspense, useEffect, useState } from "react";
import { LinearProgress } from "@mui/material";
import { Line } from "@react-three/drei";
import { Box, GalleryVertical } from "lucide-react";
import LeftBookingPage from "@/components/LeftBookPage";
import RightBookingPage from "@/components/RightBookPage";

export default function Car() {
    const [car, setCar] = useState<Car | null>(null)
    const [color, setColor] = useState(0);
    const [is3d, setIs3d] = useState(false);
    const params = useParams<{ id: string }>();
    const [isBook, setIsBook] = useState(false);
    useEffect(() => {
        const fetchCar = async () => {
            const carJson: CarJson = await getCar(params.id);
            setCar(carJson.data);
        }
        fetchCar();
    })
    return (
        <>
            {!isBook ? 
            <div className="pt-20 h-screen">
                {car ? 
                <div className="h-full flex flex-row justify-between items-center">
                    <div className="h-full w-1/6 flex flex-col items-end justify-center">
                        <OtherCarDetails car={car} />
                    </div>
                    <div className="h-full w-2/3 flex flex-col justify-between items-center">
                        <div className="grow w-full flex justify-center items-center">
                            <ShowCar car={car} is3d={is3d} setIs3d={setIs3d} />
                        </div>
                        <div className="h-30 w-full flex flex-col justify-between items-center">
                            <MainCarDetails car={car} is3d={is3d} setIs3d={setIs3d} setIsBook={setIsBook} />
                        </div>
                    </div>
                    <div className="h-full w-1/6 flex flex-row items-start justify-start">
                        <div onClick={() => setIs3d(!is3d)} className="flex hover:cursor-pointer">
                            <div className={`${is3d ? 'bg-s-grey-1100' : 'bg-s-grey-950'} flex items-center justify-center rounded-l-md border-2 border-s-grey-950`}>
                                <div className="h-full  p-1"><GalleryVertical size={20} className="text-s-grey-100" /> </div>
                            </div>
                            <div className={`${!is3d ? 'bg-s-grey-1100' : 'bg-s-grey-950'} flex items-center justify-center rounded-r-md border-2 border-s-grey-950`}>
                                <div className="h-full  p-1"><Box size={20} className="text-s-grey-100" /> </div>

                            </div>
                        </div>
                        {!is3d && <div className="self-center"> <ColorPicker isVertical />
                        </div>}
                    </div>
                </div> : <LinearProgress color="inherit" />}
            </div> : <div className="pt-20 h-screen">
                {car?<div className="flex flex-row justify-center gap-30 items-center h-full pb-6">
                    <LeftBookingPage car={car}/>
                    <RightBookingPage car={car} />
                </div>: <LinearProgress color="inherit" />}
            </div>}
        </>
    )
}
