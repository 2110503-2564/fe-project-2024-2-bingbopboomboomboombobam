"use client"

import { DatePicker } from "@mui/x-date-pickers"
import { useState } from "react"
import DateReserve from "./DateReserve"
import { Dayjs } from "dayjs"
export default function BookingInfo({ onChange, state }: { onChange: Function, state: BookingForm }) {
    return (
        <div className="flex flex-col gap-2 text-white w-full">
            <div className="flex flex-col w-full">
                <label htmlFor="location" className="block text-xs font-base">
                    Pick up location
                </label>
                <input
                    id="location"
                    name="location"
                    defaultValue={state.location}
                    onChange={(e) => onChange({ ...state, location: e.target.value })}
                    className="w-full px-2 py-1 bg-s-grey-900 border border-s-grey-950 rounded-md text-white focus:outline-none focus:ring-1 focus:ring-red-500"
                />
            </div>
            <div className="flex flex-col w-full">
                <label htmlFor="booking-date" className="block text-xs font-base">
                    Booking Date
                </label>
                <div className="w-full flex h-full flex-row bg-s-grey-900 border border-s-grey-950 rounded-md text-white items-center">
                    <input
                        type="date"
                        id="book date"
                        name="book date"
                        placeholder="Start Date"
                        defaultValue={state.startDate}
                        onChange={(e) => onChange({ ...state, startDate: e.target.value })}
                        className="w-1/2 px-2 py-1 rounded-l-md focus:outline-none focus:ring-1 focus:ring-red-500 placeholder:font-extralight placeholder:text-sm placeholder:text-center"
                    />
                    <div className="h-7 w-[2px] bg-s-grey-950 relative z-10" />
                    <input
                        type="date"
                        id="book date"
                        name="book date"
                        placeholder="End Date"
                        defaultValue={state.endDate}
                        onChange={(e) => onChange({ ...state, endDate: e.target.value })}
                        className="w-1/2 px-2 py-1 rounded-r-md focus:outline-none focus:ring-1 focus:ring-red-500 placeholder:font-extralight placeholder:text-sm placeholder:text-center"
                    />
                </div>
            </div>
        </div>
    )
}