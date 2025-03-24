// import { headers } from 'next/headers';
// import { useEffect } from 'react';

import CarCard from "@/components/CarCard";

export default function MyBookings({ searchParams }: { searchParams: { id: string } }) {
  return (
    <div className="p-20 pt-30 flex flex-row w-full justify-center flex-wrap gap-5">
      <CarCard carname="Jaguar XJL 2016" price="$96.50" seat="2 PEOPLE" transmission="7-speed ISR" driveTrain="AWS" />
      <CarCard carname="Jaguar XJL 2016" price="$96.50" seat="2 PEOPLE" transmission="7-speed ISR" driveTrain="AWS" />
      <CarCard carname="Jaguar XJL 2016" price="$96.50" seat="2 PEOPLE" transmission="7-speed ISR" driveTrain="AWS" />
      <CarCard carname="Jaguar XJL 2016" price="$96.50" seat="2 PEOPLE" transmission="7-speed ISR" driveTrain="AWS" />
      <CarCard carname="Jaguar XJL 2016" price="$96.50" seat="2 PEOPLE" transmission="7-speed ISR" driveTrain="AWS" />
      <CarCard carname="Jaguar XJL 2016" price="$96.50" seat="2 PEOPLE" transmission="7-speed ISR" driveTrain="AWS" />
      <CarCard carname="Jaguar XJL 2016" price="$96.50" seat="2 PEOPLE" transmission="7-speed ISR" driveTrain="AWS" />
      <CarCard carname="Jaguar XJL 2016" price="$96.50" seat="2 PEOPLE" transmission="7-speed ISR" driveTrain="AWS" />
      <CarCard carname="Jaguar XJL 2016" price="$96.50" seat="2 PEOPLE" transmission="7-speed ISR" driveTrain="AWS" />
      <CarCard carname="Jaguar XJL 2016" price="$96.50" seat="2 PEOPLE" transmission="7-speed ISR" driveTrain="AWS" />
      <CarCard carname="Jaguar XJL 2016" price="$96.50" seat="2 PEOPLE" transmission="7-speed ISR" driveTrain="AWS" />
      <CarCard carname="Jaguar XJL 2016" price="$96.50" seat="2 PEOPLE" transmission="7-speed ISR" driveTrain="AWS" />
    </div>
  )
}
