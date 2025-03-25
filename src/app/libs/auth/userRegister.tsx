export default async function userRegister(name:string,email:string, password:string,telephone_number:string) {
    const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/v1/auth/register`,{
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify({
            name,
            email,
            password,
            telephone_number
        }),
    });
    if(!response.ok){
        throw new Error("Failed to log in");
    }
    return response.json();
}
