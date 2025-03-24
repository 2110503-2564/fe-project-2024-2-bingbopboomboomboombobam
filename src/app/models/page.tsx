import BrandScroll from "@/components/BrandScroll";
import getCars from "../libs/cars/getCars";

function groupByBrand(cars: Car[]): [string, Car[]][] {
  const grouped: [string, Car[]][] = [];

  cars.forEach((car) => {
      const brand = car.brand;

      const existingGroup = grouped.find(group => group[0] === brand);

      if (existingGroup) {
          existingGroup[1].push(car);
      } else {
          grouped.push([brand, [car]]);
      }
  });

  return grouped;
}

export default async function Models() {
  const carsJson:CarsJson = await getCars();
  const brands = groupByBrand(carsJson.data);
  
  return (
    <div className="p-20 px-30 min-h-screen flex flex-col items-center">
      {brands.map((item,index) => <BrandScroll key={index} brand={item[0]} cars={item[1]}/>)}
    </div>
  );
}
