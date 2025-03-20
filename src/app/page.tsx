import Banner from "@/components/Banner";
import RegisterForm from "@/components/Register";
import Image from "next/image";
import CarCard from "@/components/CarCard";
import WhyCard from "@/components/WhyCard";
import ReviewCard from "@/components/ReviewCard";
import OfferCard from "@/components/OfferCard";

export default function Home() {
  return (
    <div className="bg-[#1D1E1F] min-h-screen w-full">
      <div className="flex flex-col justify-center items-center pt-5 pb-10">

        <Banner />
        <RegisterForm />

        <div className="w-[880px] gap-y-4 flex flex-row justify-between items-center pb-5 pt-5 flex-wrap ">
          <OfferCard />
          <CarCard carname="Jaguar XJL 2016" price="$96.50" seat="2 PEOPLE" transmission="7-speed ISR" driveTrain="AWS" />
          <CarCard carname="Jaguar XJL 2016" price="$96.50" seat="2 PEOPLE" transmission="7-speed ISR" driveTrain="AWS" />
          <CarCard carname="Jaguar XJL 2016" price="$96.50" seat="2 PEOPLE" transmission="7-speed ISR" driveTrain="AWS" />
          <CarCard carname="Jaguar XJL 2016" price="$96.50" seat="2 PEOPLE" transmission="7-speed ISR" driveTrain="AWS" />
          <CarCard carname="Jaguar XJL 2016" price="$96.50" seat="2 PEOPLE" transmission="7-speed ISR" driveTrain="AWS" />
        </div>

        <div className="w-[880px] h-96 flex flex-row justify-between items-center pb-5 pt-5 flex-wrap ">
          <div className="flex flex-col gap-2 justify-between h-full">
            {/* <TextCard /> */}
            <WhyCard head="Why Choose Us?" description="Choose us for reliable, well-maintained cars, excellent customer service, and a seamless rental experience" title="" picture=""/>
            <WhyCard head="02." title="Full Auto Servicing Facility" picture="https://img.freepik.com/free-photo/man-checking-car-tires-showroom_23-2148384922.jpg?t=st=1742370596~exp=1742374196~hmac=8e0d1049bac55131d12ce3fe69b3068bd9824ab73e2ee31537a4106e9c1e5aa9&w=996" description="ensuring your rental is always in top condition and ready for the road" />
          </div>
          <div className="relative bg-amber-300 w-72 h-full flex flex-col justify-center items-start">
            <Image className='object-cover' src='https://img.freepik.com/free-photo/lamborghini-closeup_181624-29209.jpg?t=st=1742370420~exp=1742374020~hmac=c38d097e6d726506d7d4a081211612c53abc7f2b2b62a364c6dd938d4cd95538&w=996' fill alt='car picture' />
          </div>
          <div className="flex flex-col gap-2 justify-between h-full">
            <WhyCard head="01." title="Online Car Rental Booking" picture="https://img.freepik.com/free-photo/high-speed-driving-mini-sport-car-forest_114579-4014.jpg?t=st=1742370502~exp=1742374102~hmac=389b45c6d0a624361405dbca048aa13f9b0930110cb3296fa7a53992c9b2c762&w=996" description="Book your car rental online with us for a quick, hassle-free experience anytime, anywhere" />
            <WhyCard head="03." title="Pick And Drop" picture="https://img.freepik.com/free-photo/man-sitting-car-night_23-2149001285.jpg?t=st=1742370547~exp=1742374147~hmac=4d7269878eaff884042d108bde7e4f5851413cfa94eb0002642448ea8a0107aa&w=996" description="Enjoy our pick and drop service, for added convenience and time-saving" />
          </div>
        </div>

        <div className="w-[880px] flex flex-col justify-end items-left pt-5 pb-2">
          <div className=" text-white text-3xl font-semibold">
            Customer Reviews
          </div>
          <div className=" text-white text-base font-normal w-2/3">
            Thank you to all our valued customers for your reviews. Your feedback is important to us and helps us continually improve our services. We are committed to providing the best experience possible.
          </div>
        </div>

        <div className="w-[880px] h-96 flex flex-row justify-between items-center pb-5 pt-2 flex-wrap ">
          <ReviewCard name="John Doe" review="Great service! The car was in excellent condition, and the pick-up and drop-off were super convenient. Highly recommend!" picture="https://img.freepik.com/free-photo/young-woman-testing-car-car-showroom_1303-17732.jpg?t=st=1742370839~exp=1742374439~hmac=105c14c80cc9967cc82d24670e6bbe0f5e94e0afdc6c026f8b9e4aa0bee06fe7&w=996" />
          <ReviewCard name="Chong Shing" review="Fantastic experience! Easy booking, friendly staff, and the car was perfect for our trip. Will definitely use again!" picture="https://img.freepik.com/free-photo/man-drove-open-window-smilesd-happily_1150-51902.jpg?t=st=1742415645~exp=1742419245~hmac=70bc6bc27ee6188b9ac3d061271a951537d237adfc7258a0572754a70c271cea&w=996" />
          <ReviewCard name="Negus Nagia" review="Smooth rental process from start to finish. The car was clean and reliable. Highly satisfied with the service!" picture="https://img.freepik.com/free-photo/close-up-delivery-person-with-documents-car_23-2149095902.jpg?t=st=1742444186~exp=1742447786~hmac=2ee9541391a50627de2086c1dc011d43f436df35ab71c54a98277b854178b6ff&w=996" />
        </div>

      </div>
    </div>
  );
}

