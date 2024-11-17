import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import HeadNavbar from "@/components/HeadNavbar";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata: Metadata = {
  title: "B-BarberShop",
  description:
    "Welcome to B-BarberShop, where classic barbering traditions meet modern style. Experience tailored haircuts that reflect your personality, precision shaves, and an atmosphere fit for a gentleman. With skilled barbers and premium products, were more than just a barbershop—were a destination for mens grooming and lifestyle. Step in and discover your style today!",
  keywords: [
    "Barbershop",
    "Barber near me",
    "Men's grooming",
    "Men's haircuts",
    "Hair salon for men",
    "Haircut near me",
    "Classic barbershop",
    "Haircut for men",
    "Beard trimming",
    "Shaving services",
    "Hot towel shave",
    "Beard styling",
    "Fade haircut",
    "Razor shave",
    "Grooming packages",
    "Gentlemen's lounge",
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <HeadNavbar />
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
