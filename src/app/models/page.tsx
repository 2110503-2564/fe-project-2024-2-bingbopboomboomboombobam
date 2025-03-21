"use client";

import { CAR_MODELS } from "@/data/carModels";
import Link from "next/link";

export default function ModelsListPage() {
  return (
    <div className="min-h-screen bg-gray-900 text-white">
      <div className="container mx-auto px-4 py-12">

        <div className="mt-20 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {Object.values(CAR_MODELS).map((car) => (
            <Link 
              href={`/models/${car.id}`} 
              key={car.id}
              >
              {car.name}
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}
