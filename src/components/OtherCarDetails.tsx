import { Cog, Fuel, Gauge, LifeBuoy, Luggage, Users } from "lucide-react";
import Detail from "./Detail";

export default function OtherCarDetails({car}:{car:Car}) {
    return (
        <div className="flex flex-col">
            <Detail label="Top Speed" value={`${car.top_speed} km/h`}>
                <Gauge size={25} />
            </Detail>
            <Detail label="Transmission" value={car.transmission}>
                <LifeBuoy size={25} />
            </Detail>
            <Detail label="Fuel Type" value={car.fuel}>
                <Fuel size={25} />
            </Detail>
            <Detail label="Drivetrain" value={car.drivetrain}>
                <Cog size={25} />
            </Detail>
            <Detail label="Seat" value={`${car.number_of_seats} People`}>
                <Users size={25} />
            </Detail>
            <Detail label="Capacity" value={`${car.capacity} Liters`}>
                <Luggage size={25} />
            </Detail>
        </div>
    )
}