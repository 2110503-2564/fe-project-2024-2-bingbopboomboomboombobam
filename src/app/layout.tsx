import type { Metadata } from "next";
import "./globals.css";

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
        {children}
      </body>
    </html>
  );
}
