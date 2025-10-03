import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

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
    url: "",
    images: ["https://next-comments-postgres.vercel.app/og-image.png"], // add an appropriate image to your public folder - need to be in an array
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <Header />
        <Footer />
        {children}
      </body>
    </html>
  );
}
