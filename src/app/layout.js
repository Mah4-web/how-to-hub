import { Geist, Geist_Mono } from "next/font/google";
import { Playfair_Display } from 'next/font/google';

const playfair = Playfair_Display({
  subsets: ['latin'],
  weight: ['400', '700'],  
  style: ['normal'],      
  variable: '--font-playfair',  
});

import "./globals.css";
import Header from "@/app/Components/Header";
import Footer from "@/app/Components/Footer";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "How-To-Hub",
  description: "A Next.js blog for sharing mini how-to guides with dynamic post sorting and a comments form allowing users to add and delete comments.",
  openGraph: {
    title: "How-To-Hub",
    description: "A Next.js blog for sharing mini how-to guides with dynamic post sorting and a comments form allowing users to add and delete comments.",
    type: "website",
    "url": "https://how-to-hub.vercel.app/",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <Header />
       
        {children}
         <Footer />
      </body>
    </html>
  );
}
