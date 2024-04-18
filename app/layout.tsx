import type { Metadata } from "next";
import "./globals.css";
import Navbar from "./components/Navbar";

export const metadata: Metadata = {
  title: "vkar.blog",
  description: "Created by Vladyslav Karapetov",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className=" bg-[#f0f0f0]">
        <Navbar />
        
        {children}
      </body>
    </html>
  );
}
