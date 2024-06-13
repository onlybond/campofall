"use client";
import Link from "next/link";
import React from "react";
import { poppins } from "@/app/ui/fonts";
import { usePathname } from "next/navigation";
import clsx from "clsx";
const Links = [
  {
    name: "Resource Links",
    path: "/resources",
  },
  {
    name: "Homepage",
    path: "/",
  },
];
export default function SideNavLinks() {
  const pathname = usePathname();
  return (
    <>
      {Links.map((link) => (
        <Link
          href={link.path}
          key={link.name}
          className={clsx(`${poppins.className} rotate-180 font-extralight uppercase`,{
            "text-primary": pathname === link.path || pathname === "/-[]"
          })}
          style={{
            writingMode: "vertical-lr",
          }}
        >
          {link.name}
        </Link>
      ))}
    </>
  );
}
