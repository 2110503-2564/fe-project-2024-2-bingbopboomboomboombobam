'use client'
import { useState } from "react";
import { useRouter } from "next/navigation"; // ใช้สำหรับเปลี่ยนเส้นทาง
import Info from "./Info";
import CustomerInfo from "./CustomerInfo";
import BookingInfo from "./BookingInfo";
import dayjs from "dayjs";
import putBooking from "@/app/libs/bookings/putBooking";
import deleteBooking from "@/app/libs/bookings/deleteBooking";
import { useSession } from "next-auth/react";
import { formatDate } from "@/app/libs/function/function";

export default function RightMyBookingPage({ booking }: { booking: Booking }) {
    const { data: session } = useSession();
    const router = useRouter(); // ใช้ router สำหรับเปลี่ยนเส้นทาง
    const [isEdit, setIsEdit] = useState(false);
    const [bookingForm, setBookingForm] = useState<BookingForm>({
        location: booking.pickup_location,
        startDate: dayjs(booking.startDate).format('YYYY-MM-DD'),
        endDate: dayjs(booking.endDate).format('YYYY-MM-DD'),
    });
    const [customerForm, setCustomerForm] = useState<CustomerForm>({
        name: booking.name.split(' ')[0],
        surname: booking.name.split(' ')[1],
        sex: booking.sex,
        birthDate: dayjs(booking.birthDate).format('YYYY-MM-DD'),
        ssn: booking.ssn,
        tel: booking.telephone_number,
        email: booking.email,
    });

    const handleConfirm = async () => {
        if (session?.user.token) {
            try {
                await putBooking(session.user.token, booking._id, {
                    name: `${customerForm.name} ${customerForm.surname}`,
                    email: customerForm.email,
                    ssn: customerForm.ssn,
                    sex: customerForm.sex,
                    telephone_number: customerForm.tel,
                    birthDate: customerForm.birthDate,
                    startDate: bookingForm.startDate,
                    endDate: bookingForm.endDate,
                    pickup_location: bookingForm.location,
                });
                alert("Booking updated successfully!");
                router.push("/mybookings"); // เปลี่ยนเส้นทางไปหน้า /mybookings
            } catch (error) {
                console.error(error);
                alert("Failed to update booking. Please try again.");
            }
        }
    };

    const handleDelete = async () => {
        if (session?.user.token) {
            try {
                await deleteBooking(session.user.token, booking._id);
                alert("Booking deleted successfully!");
                router.push("/mybookings"); // เปลี่ยนเส้นทางไปหน้า /mybookings
            } catch (error) {
                console.error(error);
                alert("Failed to delete booking. Please try again.");
            }
        }
    };

    return (
        <div className="w-96 relative flex flex-col items-center gap-2">
            {isEdit ? (
                <>
                    <CustomerInfo state={customerForm} onChange={setCustomerForm} />
                    <BookingInfo state={bookingForm} onChange={setBookingForm} />
                </>
            ) : (
                <>
                    <div className="relative w-full">
                        <Info data={[["Booking ID", booking._id]]} />
                        <Info data={[["Name Surname", booking.name], ["Sex", booking.sex], ["Birth Date", formatDate(booking.birthDate)], ["ID Card", booking.ssn], ["Email", booking.email], ["Phone Number", booking.telephone_number]]} />
                        <Info data={[["Brand", booking.car.brand], ["Model", booking.car.model], ["Color", booking.color], [" ", " "], ["Pick up location", booking.pickup_location], ["Start Date", formatDate(booking.startDate)], ["End Date", formatDate(booking.endDate)]]} />
                    </div>
                </>
            )}
            <div className="flex flex-row justify-center gap-2 w-full">
                {isEdit ? (
                    <>
                        <button
                            onClick={handleConfirm}
                            type="button"
                            className={`w-1/2 py-1 bg-red-600 text-white hover:bg-red-700 mt-2 font-medium rounded-md focus:outline-none`}
                        >
                            {'Confirmed'}
                        </button>
                        <button
                            onClick={() => setIsEdit(false)}
                            type="button"
                            className={`w-1/2 py-1 bg-gray-300 text-black hover:bg-gray-400 mt-2 font-medium rounded-md focus:outline-none`}
                        >
                            {'Cancel'}
                        </button>
                    </>
                ) : (
                    <>
                        <button
                            onClick={() => setIsEdit(true)}
                            type="button"
                            className={`w-1/2 py-1 bg-white text-black hover:bg-gray-300 mt-2 font-medium rounded-md focus:outline-none`}
                        >
                            {'Edit'}
                        </button>
                        <button
                            onClick={handleDelete}
                            type="button"
                            className={`w-1/2 py-1 bg-red-600 text-white hover:bg-red-700 mt-2 font-medium rounded-md focus:outline-none`}
                        >
                            {'Delete'}
                        </button>
                    </>
                )}
            </div>
        </div>
    );
}