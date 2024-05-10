"use client"
import { montserrat } from "@/app/ui/fonts";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";
import clsx from "clsx";
const SideNav = () => {
  const path = usePathname();
  console.log(path);
  return (
    <div className="w-5vw h-full">
      <div className="flex flex-col fixed items-center gap-8 px-10 justify-center h-full ">
        <Link href="/resources" className={`${montserrat.className} rotate-180 uppercase ${path === '/resources' ? 'text-[#F37121]' : ''}` } style={{
          writingMode:"vertical-lr"}}>Resource Links</Link>
        <Link href="/Components" className={`${montserrat.className} rotate-180 uppercase ${path === '/Components' ? 'text-[#F37121]' : ''}`} style={{
          writingMode:"vertical-lr"}}>Components</Link>
        <Link href="/" className={`${montserrat.className} rotate-180 uppercase  ${path === '/' ? 'text-[#F37121]' : ''}`} style={{
          writingMode:"vertical-lr"}}>Homepage</Link>
      </div>
    </div>
  );
};

export default SideNav;
