import type { Metadata } from "next";
import "./globals.css";
import { Barlow } from "next/font/google";
import NavBar from "@/components/NavBar";
import Footer from "@/components/Footer";

const barlow = Barlow({
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  variable: "--font-playfair",
});

export const metadata: Metadata = {
  title: "SquareUp",
  description: "A Digital Product Studio that will Work",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${barlow.className} antialiased`}>
        <NavBar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
