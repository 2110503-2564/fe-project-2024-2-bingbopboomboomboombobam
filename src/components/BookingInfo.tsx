"use client"

export default function BookingInfo() {

    return (
        <div className="flex flex-col gap-2 text-white w-full">
            <div className="flex flex-col">
                <label htmlFor="name" className="block text-xs font-base">
                    Pick up location
                </label>
                <input
                    id="location"
                    name="location"
                    className="w-full px-2 py-1 bg-s-grey-900 border border-s-grey-950 rounded-md text-white focus:outline-none focus:ring-1 focus:ring-red-500"
                />
            </div>
            <div className="flex flex-col">
                <label htmlFor="name" className="block text-xs font-base">
                    Booking Date
                </label>
                <div className="w-full flex flex-row bg-s-grey-900 border border-s-grey-950 rounded-md text-white items-center">
                <input
                    id="book date"
                    name="book date"
                    placeholder="Start Date"
                    className="w-1/2 px-2 py-1 rounded-l-md focus:outline-none focus:ring-1 focus:ring-red-500 placeholder:font-extralight placeholder:text-sm placeholder:text-center"
                />
                <div className="h-full w-[2px] bg-s-grey-950 relative z-10"/>
                <input
                    id="book date"
                    name="book date"
                    placeholder="End Date"
                    className="w-1/2 px-2 py-1 rounded-r-md focus:outline-none focus:ring-1 focus:ring-red-500 placeholder:font-extralight placeholder:text-sm placeholder:text-center"
                />
                </div>
            </div>



        </div>
    )
}

