import type { Metadata } from "next";
import "./globals.css";
import TopMenu from "@/components/TopMenu";

export const metadata: Metadata = {
  title: "Legendary Car 🏎️✨",
  description: "Fast and Easy Way To Drive Super Cars",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body data-new-gr-c-s-check-loaded="14.1226.0" data-gr-ext-installed="">
        <div className="min-h-screen bg-[#3C3D3D]">
          <div className="absolute top-0 left-0 w-full h-96 bg-gradient-to-b from-[#0C0C0C]/100 via-[#242424]/50 to-[#3C3D3D]/0 pointer-events-none z-0" />
          <div className="relative z-1 min-h-screen">
            <TopMenu/>
            {children}
          </div>
        </div>
      </body>
    </html>
  );
}
