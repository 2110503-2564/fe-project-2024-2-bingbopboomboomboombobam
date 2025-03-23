import LeftBookingPage from "@/components/LeftBookingPage"
import RightBookingPage from "@/components/RightBookingPage"



export default function Home() {
  return (
    <div className="pt-20 h-screen">
      <div className="flex flex-row justify-center gap-30 items-center h-full pb-6">
        <LeftBookingPage />
        <RightBookingPage />
      </div>
    </div>
  )
}


