'use client'
import { useState } from "react";
import dynamic from "next/dynamic";
import Image from "next/image";

const ModelViewer = dynamic(() => import("./ModelViewer"), { 
  ssr: false,
  loading: () => <div className="flex items-center justify-center h-full">Loading 3D model...</div>
});

export default function ShowCar({car,is3d,setIs3d}:{car:Car,is3d:boolean,setIs3d:Function}) {
    return (
        <div className="flex flex-col justify-center w-full h-full items-center ">
            <div className="text-center text-md text-s-grey-100 max-w-[800px] font-light">
                {car.quote}
            </div>
            <div className="w-full grow relative max-w-[1000px] max-h-[350px] ">
                {is3d ? (
                    <ModelViewer key="model-viewer" />
                ) : (
                    <Image src={car.image?.[0]?.[1] || "/s-car.png"} fill alt="car" className="object-contain" />
                )}
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