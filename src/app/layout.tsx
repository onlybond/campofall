import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import SideNav from "@/components/SideNav";
import { poppins } from "@/app/ui/fonts";
import { ClerkProvider } from "@clerk/nextjs";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Campofall",
  description: "A ToolKit for Designers and Developers",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <ClerkProvider afterSignOutUrl={"/"}>
      <html lang="en">
        <body className={`${poppins.className} text-white bg-black`}>
          <Header />
          <div className="flex h-screen">
            <SideNav />
            {children}
          </div>
        </body>
      </html>
    </ClerkProvider>
  );
}
