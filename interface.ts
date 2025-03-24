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

interface Cars {
    success: boolean,
    count: number,
    data: Car[]
  }

interface Props {
    params: Promise<{ id: string }>
  }