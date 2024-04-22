import type { Metadata } from "next";
import { SpeedInsights } from "@vercel/speed-insights/next"
import { Analytics } from "@vercel/analytics/react"
import "./globals.css";
import Navbar from "./components/Navbar";
import Providers from "./providers";
import Footer from "./components/Footer";

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
      <body className="max-w-[1280px] mx-auto bg-[#f0f0f0] dark:bg-[#1c1c1c] transition-all duration-300">
        <Providers>
          <Navbar />
          {children}
          <SpeedInsights/>
          <Analytics />
          <Footer />
        </Providers>
      </body>
    </html>
  );
}
