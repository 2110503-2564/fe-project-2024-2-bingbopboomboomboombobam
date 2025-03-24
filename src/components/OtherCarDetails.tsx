import { Cog, Fuel, Gauge, LifeBuoy, Luggage, Users } from "lucide-react";
import Detail from "./Detail";

export default function OtherCarDetails() {
    return (
        <div className="flex flex-col">
            <Detail label="Top Speed" value="300 km/h">
                <Gauge size={25} />
            </Detail>
            <Detail label="Transmission" value="7-speed ISR">
                <LifeBuoy size={25} />
            </Detail>
            <Detail label="Fuel Type" value="Petrol">
                <Fuel size={25} />
            </Detail>
            <Detail label="Drivetrain" value="AWD">
                <Cog size={25} />
            </Detail>
            <Detail label="Seat" value="2 People">
                <Users size={25} />
            </Detail>
            <Detail label="Capacity" value="110 Liters">
                <Luggage size={25} />
            </Detail>
        </div>
    )
}