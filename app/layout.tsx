import type { Metadata } from "next";
import "./globals.css";


import TopBanner from "../components/layout/TopBanner";
import Header from "../components/layout/Header";
import Footer from "../components/layout/Footer";

export const metadata: Metadata = {
  title: "The Battlefield Online | Premium B2B E-Commerce",
  description: "Premium corporate gifting, ICT infrastructure, and enterprise procurement.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="overflow-x-hidden">
        <TopBanner />
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}