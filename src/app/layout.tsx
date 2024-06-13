import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import SideNav from "@/components/SideNav";
import { poppins } from "@/app/ui/fonts";
import { ThemeProvider } from "@/components/ThemeProvider";
import ToastProvider from "@/lib/react-toastify/ToastProvider";
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
    <html lang="en">
      <body
        className={`${poppins.className} text-white bg-black flex flex-col`}
      >
        <ThemeProvider attribute="class" defaultTheme="dark">
          <Header />
          <ToastProvider>
            <div className="flex">
              <SideNav />
              {children}
            </div>
          </ToastProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
