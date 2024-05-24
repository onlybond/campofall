"use client"
import { use, type ReactNode } from "react";
import Filters from "./components/Filters";

type LayoutProps = {
  children: ReactNode;
};

export default function resourceTemplate({ children }: LayoutProps) {
  return (
    <div className="w-screen flex flex-col min-h-screen">
      <Filters />
      <div className="flex-grow">{children}</div> 
    </div>
  );
}
