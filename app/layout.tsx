import type { Metadata } from "next";
import { Raleway } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/navbar/navbar";
import Footer from "@/components/footer";

const raleway = Raleway({
  subsets: ["latin"],
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
    <html lang="en" suppressHydrationWarning>
      <body className={raleway.className} suppressHydrationWarning>
        <Navbar />
        <main className="bg-gray-50 min-h-screen">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
