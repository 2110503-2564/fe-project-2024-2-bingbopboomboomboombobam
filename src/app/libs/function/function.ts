export function getImage(color:string,image:string[][]):string{
  const foundItem = image.find((item) => item[0] === color);
  return foundItem ? foundItem[1] : '/s-car.png';
}

export function formatDate(dateString: string): string {
  const date = new Date(dateString);
  return date.toLocaleDateString("en-GB", {
    day: "2-digit",
    month: "long",
    year: "numeric",
  });
}