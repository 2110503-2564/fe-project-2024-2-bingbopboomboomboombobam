export default async function userLogIn(email:string, password:string) {
    const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/v1/auth/login`,{
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify({
            email,
            password
        }),
    });
    if(!response.ok){
        throw new Error("Failed to log in");
    }
    return response.json();
}
