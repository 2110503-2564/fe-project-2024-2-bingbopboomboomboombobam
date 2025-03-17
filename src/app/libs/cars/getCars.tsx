export default async function getCars(){
    const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/v1/cars`);
    if(!response.ok){
        const errorData = await response.json();
        throw new Error(`Failed to fetch cars: ${errorData.message || 'Unknown error'}`);
    }
    return response.json();
}