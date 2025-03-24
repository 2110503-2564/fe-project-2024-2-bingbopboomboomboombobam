'use client'
import { useState } from "react";
import StepIndicator from "./StepIndicator";
import CustomerInfo from "./CustomerInfo";
import BookingInfo from "./BookingInfo";
import Info from "./Info";

export default function RightBookingPage() {
    const [toggle, setToggle] = useState(0)
    return (
        <div className="flex flex-col justify-between item-start w-96">
            <StepIndicator steps={toggle} currentStep={toggle} />
            <div className="relative h-[425px] flex flex-col items-center gap-2 pb-12">
                {
                    toggle == 0 && <CustomerInfo />
                }
                {
                    toggle == 1 && <BookingInfo />
                }

                {
                    toggle == 2 && <>
                        <Info data={[["Name Surname", "Nattapol Teerayuttawong"], ["Sex", "Male"], ["Birth Date", "20 January 2003"], ["ID Card", "1289980756414"], ["Email", "nattapol@gmail.com"], ["Phone Number", "081-234-5678"]]} />
                        <Info data={[["Brand", "Lamborghini"], ["Model", "Aventador"], ["Color", "Red"], ["Pick up location", "Santa Monica Pier, Santa Monica"]]} />
                        <Info data={[["Daily Rate", "$1,200"], ["Number of Days", "4"], ["Deposit", "$1,000"], ["line:", "line"], ["Total", "$5,800"]]} />
                    </>
                }
                <button onClick={() => setToggle((toggle+1)%3)} type="button" className={`w-full py-2 absolute bottom-0 ${toggle==2?'bg-red-600 text-white hover:bg-red-700':'bg-white text-black hover:bg-gray-300'} font-semibold rounded-md  focus:outline-none`}>
                    {toggle==2?'Confirmed':'Next'}
                </button>

            </div>
        </div>
    )
}