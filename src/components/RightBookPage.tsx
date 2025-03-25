'use client'
import { useRef, useState } from "react";
import { useRouter } from "next/navigation"; // ใช้สำหรับเปลี่ยนเส้นทาง
import StepIndicator from "./StepIndicator";
import CustomerInfo from "./CustomerInfo";
import BookingInfo from "./BookingInfo";
import Info from "./Info";
import dayjs from "dayjs";
import postBooking from "@/app/libs/bookings/postBooking";
import { useSession } from "next-auth/react";

export default function RightBookingPage({ car }: { car: Car }) {
    const { data: session } = useSession();
    const router = useRouter(); // ใช้ router สำหรับเปลี่ยนเส้นทาง
    const [isSubmitting, setIsSubmitting] = useState(false);

    const [stage, setStage] = useState(0);
    const [bookingForm, setBookingForm] = useState<BookingForm>({ location: "", startDate: "", endDate: "" });
    const [customerForm, setCustomerForm] = useState<CustomerForm>({ name: "", surname: "", sex: "Male", birthDate: "", ssn: "", tel: "", email: "" });

    const handleConfirm = async () => {
        if (session?.user.token) {
            setIsSubmitting(true);
            try {
                await postBooking(session.user.token, {
                    car: car._id,
                    color: car.image?.[0]?.[0] || "red",
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
                alert("Booking confirmed successfully!");
                router.push("/mybookings"); // เปลี่ยนเส้นทางไปหน้า /mybookings
            } catch (error) {
                console.error(error);
                alert("Failed to confirm booking. Please try again.");
            } finally {
                setIsSubmitting(false);
            }
        }
    };

    return (
        <div className="relative flex flex-col justify-between item-start w-96 px-2">
            <StepIndicator steps={stage} currentStep={stage} />
            {stage > 0 && <div onClick={() => setStage((stage + 3 - 1) % 3)} className="hover:cursor-pointer absolute top-12 self-start text-red-500 font-bold text-xs">{'<<'} Go back</div>}
            <div className="h-[425px] flex flex-col items-center gap-2 pb-12 mt-2">
                <div className={`${stage == 0 ? '' : 'hidden'} w-full`}>
                    <CustomerInfo state={customerForm} onChange={setCustomerForm} />
                </div>
                <div className={`${stage == 1 ? '' : 'hidden'} w-full`}>
                    <BookingInfo state={bookingForm} onChange={setBookingForm} />
                </div>
                <div className={`${stage == 2 ? '' : 'hidden'} w-full`}>
                    <Info data={[["Name Surname", `${customerForm.name} ${customerForm.surname}`], ["Sex", customerForm.sex], ["Birth Date", customerForm.birthDate], ["ID Card", customerForm.ssn], ["Email", customerForm.email], ["Phone Number", customerForm.tel]]} />
                    <Info data={[["Brand", car.brand], ["Model", car.model], ["Color", "Red"], ["Pick up location", bookingForm.location]]} />
                    <Info data={[["Daily Rate", `$${car.price}`], ["Number of Days", `${dayjs(bookingForm.endDate).diff(dayjs(bookingForm.startDate), "day") + 1}`], ["Deposit", `$${car.deposit}`], [" ", " "], ["Total", `$${car.price * (dayjs(bookingForm.endDate).diff(dayjs(bookingForm.startDate), "day") + 1) + car.deposit}`]]} />
                </div>
                <button
                    onClick={stage == 2 ? handleConfirm : () => setStage((stage + 1) % 3)}
                    type="button"
                    disabled={
                        isSubmitting ||
                        (stage === 0 && Object.values(customerForm).some(value => value === "")) ||
                        (stage === 1 && Object.values(bookingForm).some(value => value === ""))
                    }
                    className={`w-full py-2 absolute bottom-0 ${stage == 2
                        ? 'bg-red-600 text-white hover:bg-red-700'
                        : 'bg-white text-black hover:bg-gray-300'
                        } font-semibold rounded-md focus:outline-none  ${((stage === 0 && Object.values(customerForm).some(value => value === "")) ||
                            (stage === 1 && Object.values(bookingForm).some(value => value === ""))
                            ? 'opacity-50 cursor-not-allowed'
                            : '')
                        }`}
                >
                    {isSubmitting ? 'Submitting...' : stage == 2 ? 'Confirmed' : 'Next'}
                </button>
            </div>
        </div>
    );
}