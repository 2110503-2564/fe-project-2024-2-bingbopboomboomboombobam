import NextAuth from 'next-auth'

declare module "next-auth" {
    interface Session {
        user: {
            _id: string,
            name: string,
            role: string,
            token: string
        }
    }
}