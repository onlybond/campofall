"use client";
import React from "react";
import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { MdChevronRight } from "react-icons/md";
import { poppins } from "@/app/ui/fonts";
import { redirect } from "next/navigation";
import { MenuIcon } from "lucide-react";
const Header = () => {
  return (
    <div className="w-full sticky top-0 py-6 z-[2] bg-[#131313]">
      <div className="container flex justify-between">
        <div className=" flex flex-col items-center gap-4  md:flex-row">
          <Link href="/">
            <Image
              priority
              src="/assets/logo.png"
              alt="alt"
              style={{ height: "auto", width: "auto" }}
              width={100}
              height={0}
            />
          </Link>
          {/* <div className="hidden md:flex space-x-4">
            <Link
              href="/"
              className={`${poppins.className} font-extralight text-base`}
            >
              Freelance
            </Link>
            <Link
              href="/"
              className={`${poppins.className} font-extralight text-base`}
            >
              Inspiration
            </Link>
          </div> */}
        </div>
        <div className="gap-4 items-center hidden md:flex">
          {/* <Link
            href=""
            className="flex gap-2 items-center text-[#fff4] border-white text-sm rounded-full border pl-4 pr-2 py-1"
          >
            Search Resources
            <div className="flex items-center">
              <span className="bg-[#fff4] text-white px-1 mr-1 rounded text-[8px]">
                CTRL
              </span>
              <span className="bg-[#fff4] text-white px-1 mr-1 rounded text-[8px]">
                K
              </span>
            </div>
          </Link> */}
          <Link
            href="/sponsor"
            className={`${poppins.className} font-extralight text-base hover:opacity-50`}
          >
            Sponsor
          </Link>
          <Link href={"/sign-up"}>
            <Button
              variant={"outline"}
              className="bg-[#131313] hover:bg-white hover:text-[#131313] transition-all rounded-full px-6 py-1 h-fit text-xs"
            >
              Join Us <MdChevronRight className="pl-1 w-5 h-5" />
            </Button>
          </Link>
        </div>
        <div className=" bg-[#fff4] p-1 rounded-sm md:hidden">
          <MenuIcon className="cursor-pointer w-8 h-8" />
        </div>
      </div>
    </div>
  );
};

export default Header;
