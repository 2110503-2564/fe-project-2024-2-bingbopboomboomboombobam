// Make sure all car models are properly typed
export type CarModelType = "lamborghini_aventador_svj";

export interface CarSpecifications {
  body: {
    class: string;
    bodyStyle: string;
    layout: string;
    doors: string;
  };
  powertrain: {
    engine: string;
    powerOutput: string;
    transmission: string;
  };
  dimensions: {
    wheelbase: string;
    length: string;
    width: string;
    height: string;
    kerbWeight: string;
  };
  performance: {
    topSpeed: string;
    transmission: string;
    fuelType: string;
    drivetrain: string;
    seats: string;
    capacity: string;
  };
}

export interface CarModel {
  id: CarModelType;
  name: string;
  brand: string;  // Brand name (e.g., "Nissan")
  model: string;  // Model name (e.g., "GTR")
  description: string;
  modelPath: string;
  price: string;
  specifications: CarSpecifications;
  videoId?: string; // YouTube video ID property
}

export const CAR_MODELS: Record<CarModelType, CarModel> = {
  "lamborghini_aventador_svj": {
    id: "lamborghini_aventador_svj",
    name: "Lamborghini Aventador SVJ",
    brand: "Lamborghini",
    model: "Aventador SVJ",
    description: "The Aventador SVJ represents the pinnacle of Lamborghini's V12 flagship lineup, with track-focused performance.",
    modelPath: "lamborghini_aventador_svj",
    price: "$1,113",
    specifications: {
      body: {
        class: "Sports car (S)",
        bodyStyle: "2-door coupé",
        layout: "Mid-engine, all-wheel-drive",
        doors: "Scissor"
      },
      powertrain: {
        engine: "6.5 L L539 V12",
        powerOutput: "759 hp @ 8,500 rpm, 531 lb⋅ft @ 6,750 rpm",
        transmission: "7-speed ISR semi-automatic"
      },
      dimensions: {
        wheelbase: "2,700 mm (106.3 in)",
        length: "4,943 mm (194.6 in)",
        width: "2,098 mm (82.6 in)",
        height: "1,136 mm (44.7 in)",
        kerbWeight: "1,525 kg (3,362 lb)"
      },
      performance: {
        topSpeed: "355 KM/H",
        transmission: "7-speed ISR",
        fuelType: "Petrol",
        drivetrain: "AWD",
        seats: "2 PEOPLE",
        capacity: "110 LITERS"
      }
    },
    videoId: "fdS1ZQ7WJMk"
  }
};
