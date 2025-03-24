'use client'
import { useState } from "react";
import Info from "./Info";
import CustomerInfo from "./CustomerInfo";
import BookingInfo from "./BookingInfo";

export default function RightMyBookingPage() {
    const [isEdit, setIsEdit] = useState(false);
    return (
        <div className="w-96 relative flex flex-col items-center gap-2">
            {
                isEdit ? <>
                    <Info data={[["Booking ID", "@booking01"]]} />
                    <div className="relative w-full">
                        <Info data={[["Name Surname", "Nattapol Teerayuttawong"], ["Sex", "Male"], ["Birth Date", "20 January 2003"], ["ID Card", "1289980756414"], ["Email", "nattapol@gmail.com"], ["Phone Number", "081-234-5678"]]} />
                    </div>
                    <Info data={[["Brand", "Lamborghini"], ["Model", "Aventador"], ["Color", "Red"], ["none", "none"], ["Pick up location", "Santa Monica Pier, Santa Monica"]]} />
                </> : <>
                    <CustomerInfo />
                    <BookingInfo />
                </>
            }
            <div className="flex flex-row justify-center gap-2 w-full">
                <button onClick={() => { setIsEdit(!isEdit) }} type="button" className={`w-1/2 py-1 ${'bg-white text-black hover:bg-gray-300'} mt-2 font-medium rounded-md  focus:outline-none`}>
                    {'Edit'}
                </button>
                <button type="button" className={`w-1/2 py-1 ${'bg-red-600 text-white hover:bg-red-700'} mt-2 font-medium rounded-md  focus:outline-none`}>
                    {'Cancel'}
                </button>
            </div>
        </div>
    )
}