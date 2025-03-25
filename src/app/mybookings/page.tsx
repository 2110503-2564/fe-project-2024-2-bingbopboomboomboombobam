import { getServerSession } from "next-auth";
import getBookings from "../libs/bookings/getBookings";
import { authOptions } from "../api/auth/[...nextauth]/[...nextauth]";
import MyBookingCard from "@/components/MyBookingCard";
import { formatDate, getImage } from "../libs/function/function";

export default async function MyBookings() {
  const session = await getServerSession(authOptions); // Fetch the session on the server side

  const bookingsJson:BookingsJson = await getBookings(session?.user?.token ?? '');
  const data:Booking[] = bookingsJson.data;
  return (
    <div className="p-20 pt-30 flex flex-row w-full justify-center flex-wrap gap-5">
      {data.map((item,index)=><MyBookingCard key={index} location={item.pickup_location} id={item._id} brand={item.car.brand} model={item.car.model} name={item.name} date={formatDate(item.startDate)} uid={item.user._id} img={getImage(item.color,item.car.image)}/>
)}
    </div>
  )
}
