export default async function deleteBooking(token:string,bid:string){
    const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/v1/bookings/${bid}`,{
        method: "DELETE",
        headers:{
            authorization: `Bearer ${token}`
        }});
    if(!response.ok){
        const errorData = await response.json();
        throw new Error(`Failed to delete booking: ${errorData.message || 'Unknown error'}`);
    }
    return response.json();
}