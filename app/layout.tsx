import type { Metadata } from "next";
import "./globals.css";
import Navbar from "./components/Navbar";
import Providers from "./providers";

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
    <html lang="en" suppressHydrationWarning>
      <body className="max-w-[1280px] mx-auto bg-[#f0f0f0] dark:bg-[#1c1c1c]">
        <Providers>
          <Navbar />
          {children}
        </Providers>
      </body>
    </html>
  );
}
