import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import SideNav from "@/components/SideNav";
import { poppins } from "@/app/ui/fonts";
import { ClerkProvider } from "@clerk/nextjs";
import { ThemeProvider } from "@/components/ThemeProvider";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "CAMPofall - Your Design Resource Hub",
  description:
    "Join the Campofall community and connect with fellow designers and developers. Share your work, get feedback, and collaborate on exciting projects. ",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" style={{ scrollbarWidth: "none" }}>
      <body
        className={`${poppins.className} text-white bg-black flex flex-col`}
      >
        <ThemeProvider attribute="class" defaultTheme="dark">
          <Header />
          <div className="flex">
            <SideNav />
            {children}
          </div>
        </ThemeProvider>
      </body>
    </html>
  );
}
