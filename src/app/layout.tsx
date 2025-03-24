import type { Metadata } from "next";
import "./globals.css";
import TopMenu from "@/components/TopMenu";
import { Session } from "inspector/promises";
import NextAuthProvider from "@/providers/NextAuthProvider";
import { getServerSession } from "next-auth";
import { authOptions } from "./api/auth/[...nextauth]/[...nextauth]";
import { Suspense } from "react";
import { CircularProgress, LinearProgress } from "@mui/material"
export const metadata: Metadata = {
  title: "Legendary Car 🏎️✨",
  description: "Fast and Easy Way To Drive Super Cars",
};

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const session = await getServerSession(authOptions); // Fetch the session on the server side

  return (
    <html lang="en">
      <body>
        <NextAuthProvider session={session}>
          <div className="relative min-h-screen min-w-screen bg-[#3C3D3D] z-0">
            <div className="absolute top-0 left-0 w-full h-96 bg-gradient-to-b from-[#0C0C0C]/100 via-[#242424]/50 to-[#3C3D3D]/0 pointer-events-none -z-1" />
            <div className="relative z-0">
              <TopMenu />
              <Suspense fallback={<div className="p-20">
                <LinearProgress color="inherit" />
              </div>}>
                {children}
              </Suspense>
            </div>
          </div>
        </NextAuthProvider>
      </body>
    </html>
  );
}
