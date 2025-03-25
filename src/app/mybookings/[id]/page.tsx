import { authOptions } from "@/app/api/auth/[...nextauth]/[...nextauth]";
import getBooking from "@/app/libs/bookings/getBooking";
import LeftMyBookingPage from "@/components/LeftMyBookingPage";
import RightMyBookingPage from "@/components/RightMyBookingPage";
import { getServerSession } from "next-auth";
export default async function MyBooking({ params }: Props) {
    const { id } = await params
    const session = await getServerSession(authOptions);
    const myBookingJson:BookingJson = await getBooking(session?.user?.token ?? '', id);
    const myBooking:Booking = myBookingJson.data;
    return (
        <div className="pt-20 h-screen">
            <div className="flex flex-row justify-center gap-30 items-center h-full pb-6">
                <LeftMyBookingPage booking={myBooking}/>
                <RightMyBookingPage booking={myBooking}/>
            </div>
        </div>
    )
}