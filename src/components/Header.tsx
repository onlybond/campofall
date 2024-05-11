import React from "react";
import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { MdChevronRight } from "react-icons/md";
import { poppins } from "@/app/ui/fonts";
const Header = () => {
  return (
    <div className="w-full sticky top-0 py-6 bg-[#131313]">
      <div className="container flex justify-between">
        <div className=" flex flex-col items-center gap-4  md:flex-row">
          <Link href="href">
            <Image src="/assets/logo.png" alt="alt" width={120} height={120} />
          </Link>
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
        </div>
        <div className="flex gap-4 items-center">
          <Link
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
          </Link>
          <Link
            href="/"
            className={`${poppins.className} font-extralight text-base`}
          >
            NewsLetter
          </Link>
          <Link
            href="/"
            className={`${poppins.className} font-extralight text-base`}
          >
            Sponser
          </Link>
          <Button
            variant={"outline"}
            className="bg-[#131313] rounded-full px-6 py-1 h-fit text-xs"
          >
            Submit <MdChevronRight className="pl-1 w-5 h-5" />
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Header;
