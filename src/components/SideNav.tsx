import { montserrat } from "@/app/(ui)/fonts";
import Link from "next/link";
import React from "react";

const SideNav = () => {
  return (
    <div className="w-5vw h-full">
      <div className="flex flex-col items-center gap-8 px-10 justify-center h-full ">
        <Link href="/" className={`${montserrat.className} rotate-180 uppercase`} style={{
          writingMode:"vertical-lr"}}>Resource Links</Link>
        <Link href="/" className={`${montserrat.className} rotate-180 uppercase`} style={{
          writingMode:"vertical-lr"}}>Components</Link>
        <Link href="/" className={`${montserrat.className} rotate-180 uppercase visited:text-[#F37121]`} style={{
          writingMode:"vertical-lr"}}>Homepage</Link>
      </div>
    </div>
  );
};

export default SideNav;
