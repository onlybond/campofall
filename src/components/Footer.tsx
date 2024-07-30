import Image from "next/image";
import React from "react";
import { Button } from "./ui/button";

const Footer = () => {
  return (
    <footer className="w-full py-[5%] bg-[#131313]">
      <div className="flex flex-col md:flex-row items-center justify-between md:mx-[10%] mx-[5%]">
        <div className="text-center md:text-left mb-10 md:mb-0">
          <p className="text-[36px] sm:text-[40px]">Do you have</p>
          <p className="text-[36px] sm:text-[40px]">any questions?</p>
          <p className="pt-4 pb-9">
            Feel free to send us your questions or request a free consultation.
          </p>
          <Button className="text-white">Send a message</Button>
        </div>
        <div className="w-full md:w-1/3 text-center md:text-right">
          <p className="text-base">
            <span className="text-[#F37121] text-3xl">/</span>It is necessary to
            wash the car before tinting, as it affects the quality of the work.
          </p>
        </div>
      </div>

      <div className="px-[10%] mt-[4%]">
        <hr />
      </div>
      <div className="pt-3 px-[10%]">
        <p>Disclaimer +</p>
      </div>
      <p className="text-xl md:mx-[10%] mx-[5%] mt-8 md:mt-[5%]">Contacts</p>
      <div className="flex flex-col md:flex-row items-center justify-between md:mx-[10%] mx-[5%] mt-6 md:mt-5">
        <div className="w-full md:w-1/3 mb-10 md:mb-0">
          <div className="flex justify-between">
            <div>
              <p className="opacity-60 pb-3">Sign up</p>
              <p>+9142495738</p>
            </div>
            <div>
              <p className="opacity-60 pb-3">Opening hours</p>
              <p>24/7</p>
            </div>
          </div>
          <div>
            <p className="opacity-60 pb-3 pt-8">Email</p>
            <p>info@campofall.com</p>
          </div>
        </div>
        <div className="w-full md:w-6/12 flex flex-col items-center md:items-end md:">
          <div>
            <Image
              src="/assets/logo.png"
              alt="campofall"
              width={320}
              height={80}
              className="pb-3"
            />
          </div>
          <p className="opacity-60 w-10/12 p-2 text-center md:text-right md:w-6/12">
            Don&apos;t know where to get your car tinted? Logoipsum — practical,
            safe, and affordable.
          </p>
          <p className="opacity-60">© 2023 — Copyright</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
