import Car from "@/app/models/[id]/page"
import CarCard from "./CarCard"

export default function ScrollableContainer({ cars }: { cars: Car[] }) {
  // Sample array of items

  return (
    <div className="w-full overflow-x-auto pb-2 scrollbar-thin scrollbar-thumb-gray-500 scrollbar-track-gray-300">
      <div className="grid grid-flow-col grid-rows-2 gap-4 auto-cols-max show-scrollbar Fuck" style={{ minWidth: "min-content" }}>
        {cars.map((item, index) => (
          <CarCard
            id={item._id}
            key={index}
            carname={item.model}
            price={`$${item.price}`}
            seat={`${item.number_of_seats} Seat${item.number_of_seats > 1 ? 's' : ''}`}
            transmission={item.transmission}
            driveTrain={item.drivetrain}
            img={item.image[0]}
          />
        ))}
      </div>
    </div>
  )
}

