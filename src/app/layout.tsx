import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import SideNav from "@/components/SideNav";
import { poppins } from "@/app/ui/fonts";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${poppins.className} text-white bg-black`}>
        <Header />
        <div className="flex h-screen">
        <SideNav />
        {children}
        </div>
        </body>
    </html>
  );
}
