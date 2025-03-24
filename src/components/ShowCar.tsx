'use client'
import { useEffect, useState } from "react";
import ModelViewer from "./ModelViewer";
import { CAR_MODELS, CarModel } from "@/data/carModels";
import { useParams } from "next/navigation";
import { notFound } from "next/navigation";
import Image from "next/image";
import { Box, GalleryVertical } from "lucide-react";

export default function ShowCar() {
    return (
        <div className="flex flex-col justify-center w-full h-full items-center ">
            <div className="text-center text-md text-s-grey-100 max-w-[800px] font-light">
                Experience the ultimate driving thrill with the iconic Lamborghini Aventador. This masterpiece of engineering combines breathtaking performance with unmistakable design.
            </div>
            <div className="w-full grow relative max-w-[1000px] max-h-[350px]">
                <div className="absolute top-5 right-10 flex ">
                    <div className="bg-s-grey-1100 flex items-center justify-center rounded-l-md border-2 border-s-grey-950">                    
                        <div className="h-full  p-1"><GalleryVertical size={20} className="text-s-grey-100" /> </div> 
        
                    </div>
                    <div className="bg-s-grey-950 flex items-center justify-center rounded-r-md border-2 border-s-grey-950">                    
                        <div className="h-full  p-1"><Box size={20} className="text-s-grey-100" /> </div> 
        
                    </div>
                </div>
                <Image src='/s-car.png' fill alt='car' className="object-contain" />
            </div>
            <div className="relative right-60">
                <div className="text-s-grey-100 text-3xl font-bold">
                    LAMBORGHINI
                </div>
                <div className="text-white text-7xl font-bold">
                    AVENTADOR
                </div>
            </div>
        </div>
    )
}