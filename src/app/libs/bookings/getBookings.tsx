export default async function getBookings(token:string){
    const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/v1/bookings`,{
        method: "GET",
        headers:{
            authorization: `Bearer ${token}`
        }});
    if(!response.ok){
        const errorData = await response.json();
        throw new Error(`Failed to fetch bookings: ${errorData.message || 'Unknown error'}`);
    }
    return response.json();
}