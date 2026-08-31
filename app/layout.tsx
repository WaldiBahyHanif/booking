import type { Metadata } from "next";
import { Raleway } from "next/font/google";
import "./globals.css";

// Mengimpor komponen Navbar yang baru kita buat
import Navbar from "@/components/navbar/navbar";

const raleway = Raleway({
  subsets: ["latin"],
  variable: "--font-raleway",
});

export const metadata: Metadata = {
  title: "Home",
  description: "Online Booking Hotel",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${raleway.variable} font-sans`}>
        {/* Memanggil Navbar di sini */}
        <Navbar />

        {/* Memberi warna dasar dan tinggi minimum pada halaman */}
        <main className="bg-gray-50 min-h-screen">{children}</main>
      </body>
    </html>
  );
}
