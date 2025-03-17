export default async function getCar(cid:string){
    const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/v1/cars/${cid}`);
    if(!response.ok){
        const errorData = await response.json();
        throw new Error(`Failed to fetch car: ${errorData.message || 'Unknown error'}`);
    }
    return response.json();
}