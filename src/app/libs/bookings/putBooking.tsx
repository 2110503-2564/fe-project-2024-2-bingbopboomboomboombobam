type PutBooking = {
    name: string;
    email: string;
    ssn: string;
    sex: string;
    telephone_number: string;
    birthDate: string;
    startDate: string;
    endDate: string;
    pickup_location: string;
  };
  

export default async function putBooking(token:string,bid:string,data:PutBooking){
    const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/v1/bookings/${bid}`,{
        method: "PUT",
        headers:{
            authorization: `Bearer ${token}`,
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)
    });
    if(!response.ok){
        const errorData = await response.json();
        throw new Error(`Failed to put booking: ${errorData.message || 'Unknown error'}`);
    }
    return response.json();
}