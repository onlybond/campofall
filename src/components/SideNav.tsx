"use client"
import {  poppins } from "@/app/ui/fonts";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";
import clsx from "clsx";
const SideNav = () => {
  const path = usePathname();
  return (
    <div className="w-5vw h-full z-[2]">
      <div className="flex flex-col fixed items-center gap-8 px-10 justify-center h-full ">
        <Link href="/resources" className={`${poppins.className} rotate-180 font-extralight uppercase ${path === '/resources' ? 'text-[#F37121]' : ''}` } style={{
          writingMode:"vertical-lr"}}>Resource Links</Link>
        <Link href="/" className={`${poppins.className} rotate-180  font-extralight uppercase  ${path === '/' ? 'text-[#F37121]' : ''}`} style={{
          writingMode:"vertical-lr"}}>Homepage</Link>
      </div>
    </div>
  );
};

export default SideNav;
