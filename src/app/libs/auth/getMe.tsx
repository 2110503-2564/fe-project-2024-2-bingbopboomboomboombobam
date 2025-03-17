export default async function getMe(token:string){
    const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/v1/auth/me`,{
        method: "GET",
        headers:{
            authorization: `Bearer ${token}`
        }});
    if(!response.ok){
        const errorData = await response.json();
        throw new Error(`Failed to fetch me: ${errorData.message || 'Unknown error'}`);
    }
    return response.json();
}