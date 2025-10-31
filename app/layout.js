import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { Footer } from "@/Components/Footer";
import { Navbar } from "@/Components/Navbar";
import {SessionProvider} from "next-auth/react";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "qwiikorder",
  description: "Fast Delivery Services",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
       <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
       >
        <Navbar/>
        <SessionProvider>
        {children}
        </SessionProvider>
        <Footer/>
        </body>
    </html>
  );
}