'use client'
import { useEffect, useState } from "react";
import ModelViewer from "./ModelViewer";
import { CAR_MODELS, CarModel } from "@/data/carModels";
import { useParams } from "next/navigation";
import { notFound } from "next/navigation";
import Image from "next/image";
import { Box, GalleryVertical } from "lucide-react";

export default function ShowCar({car,is3d,setIs3d}:{car:Car,is3d:boolean,setIs3d:Function}) {
    return (
        <div className="flex flex-col justify-center w-full h-full items-center ">
            <div className="text-center text-md text-s-grey-100 max-w-[800px] font-light">
                {car.quote}
            </div>
            <div className="w-full grow relative max-w-[1000px] max-h-[350px]">
                <Image src={car.image[0]||"/s-car.png"} fill alt='car' className="object-contain" />
            </div>
            <div className="relative right-60">
                <div className="text-s-grey-100 text-3xl font-bold">
                {car.brand.toUpperCase()}
                </div>
                <div className="text-white text-7xl font-bold">
                    {car.model.toUpperCase()}
                </div>
            </div>
        </div>
    )
}