import LeftMyBookingPage from "@/components/LeftMyBookingPage";
import RightMyBookingPage from "@/components/RightMyBookingPage";
export default function MyBooking() {

    return (
        <div className="pt-20 h-screen">
            <div className="flex flex-row justify-center gap-30 items-center h-full pb-6">
                <LeftMyBookingPage />
                <RightMyBookingPage />
            </div>
        </div>
    )
}