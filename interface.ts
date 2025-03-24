interface Car {
    image: string[];
    _id: string;
    license: string;
    brand: string;
    model: string;
    color: string[];
    fuel: string;
    price: number;
    number_of_seats: number;
    top_speed: number;
    transmission: string;
    drivetrain: string;
    capacity: number;
    power: number;
    torque: number;
    engine: string;
    quote: string;
    driver_license: string;
    minimum_age: number;
    deposit: number;
}

interface Booking {
    _id: string;
    car: {
        _id: string;
        brand: string;
        model: string;
        image: string[][];
    };
    user: {
        _id: string;
        ssn: string;
        name: string;
        email: string;
        telephone_number: string;
        role: string;
    };
    color:string;
    name: string;
    email: string;
    ssn: string;
    telephone_number: string;
    birthDate: string;
    sex: string;
    startDate: string;
    endDate: string;
    pickup_location: string;
    createdAt: string;
    totalPrice: number;
    __v: number;
}

interface CarsJson {
    success: boolean,
    count: number,
    data: Car[]
}
interface BookingsJson {
    success: boolean,
    count: number,
    data: Booking[]
}

interface Props {
    params: Promise<{ id: string }>
}