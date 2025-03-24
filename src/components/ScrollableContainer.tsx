import Car from "@/app/models/[id]/page"
import CarCard from "./CarCard"

export default function ScrollableContainer() {
  // Sample array of items
  const items = Array.from({ length: 20 }).map((_, index) => ({
    id: index + 1,
    content: `Item ${index + 1}`,
  }))

  return (
    <div className="w-full overflow-x-auto pb-2 scrollbar-thin scrollbar-thumb-gray-500 scrollbar-track-gray-300">
      <div className="grid grid-flow-col grid-rows-2 gap-4 auto-cols-max show-scrollbar Fuck" style={{ minWidth: "min-content" }}>
        {items.map((item, index) => (
          <CarCard
            key={index}
            carname="Jaguar XJL 2016"
            price="$96.50"
            seat="2 PEOPLE"
            transmission="7-speed ISR"
            driveTrain="AWS"
          />
        ))}
      </div>
    </div>
  )
}

