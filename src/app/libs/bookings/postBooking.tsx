interface Booking {
    car: string;
    color:string;
    name: string;
    email: string;
    ssn: string;
    sex: string;
    telephone_number: string;
    birthDate: string;
    startDate: string;
    endDate: string;
    pickup_location: string;
  }
  
export default async function postBooking(token:string,data:Booking){
    const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/v1/bookings`,{
        method: "POST",
        headers:{
            authorization: `Bearer ${token}`,
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)
    });
    if(!response.ok){
        const errorData = await response.json();
        throw new Error(`Failed to post booking: ${errorData.message || 'Unknown error'}`);
    }
    return response.json();
}