import Header from "@/components/Header";
import { Button } from "@/components/ui/button";
import { ArrowLeft, ArrowRight } from "lucide-react";
import Image from "next/image";
import ResourceCard from "../resources/components/ResourceCard";
import Heroanimation from "./components/Heroanimation";
import ResourcesPage from "../resources/resources";
import Filters from "../resources/components/Filters";
import { Suspense } from "react";
export default async function Home() {
  return (
    <div className="flex w-screen container flex-col ">
      <div className="flex justify-between items-center h-[85dvh] py-6  ">
        <div className="absolute inset-0 -z-[2] bg-[#252524] overflow-hidden">
          <Heroanimation />
        </div>
        <div className="space-y-14 sm:space-y-20 py-10">
          <div className="space-y-4 sm:space-y-10">
            <h1 className="text-[46px] sm:text-7xl font-thin">
              <span className="font-normal">Design</span> Together
            </h1>
            <h1 className="text-5xl sm:text-7xl font-thin">
              <span className="font-normal">Thrive</span> in the{" "}
              <span
                className="font-bold text-transparent"
                style={{
                  WebkitTextStrokeWidth: "3px",
                  WebkitTextStrokeColor: "#F37121",
                }}
              >
                Camp
              </span>
              <span
                className="font-bold text-transparent"
                style={{
                  WebkitTextStrokeWidth: "3px",
                  WebkitTextStrokeColor: "#fff",
                }}
              >
                ofall
              </span>
            </h1>
          </div>
          <div className="text-2xl font-extralight">
            <p className="text-primary">
              Connect, collaborate, and find the resources you need to elevate your projects.
            </p>
          </div>
        </div>
      </div>
      <Suspense fallback={<div className="w-screen h-screen bg-[rgba(0,0,0,0,4)]]">Loading...</div>}>
        <div className="flex flex-col relative gap-5 py-6 my-16 h-fit w-full">
          <div className="flex gap-y-4 items-center w-full justify-between">
            <div className="sm:text-6xl font-thin text-5xl flex justify-center items-center w-full sm:justify-start ml-[3%]">
              <span className="font-semibold">Resource</span>&nbsp;Links
            </div>
          </div>

          <ResourcesPage />
        </div>
      </Suspense>
    </div>
  );
}
