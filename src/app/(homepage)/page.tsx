import Header from "@/components/Header";
import { Button } from "@/components/ui/button";
import { ArrowLeft, ArrowRight } from "lucide-react";
import Image from "next/image";
import ResourceCard from "../resources/components/ResourceCard";
import Heroanimation from "./components/Heroanimation";
import ResourcesPage from "../resources/resources";
import Filters from "../resources/components/Filters";
export default async function Home() {
  return (
    <div className="flex w-screen container flex-col ">
      <div className="flex justify-between items-center h-[85dvh] py-6  ">
        <div className="absolute inset-0 -z-[2] bg-[#252524] overflow-hidden">
          <Heroanimation />
        </div>
        <div className="space-y-20 py-10">
          <div className="tracking-widest space-y-10">
            <h1 className="text-7xl font-thin">
              <span className="font-normal">Designing</span> Together
            </h1>
            <h1 className="text-7xl font-thin">
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
              Connect, collaborate, and find the resources you need to elevate
            </p>
            <p className="text-primary">your projects.</p>
          </div>
        </div>
      </div>
      <div className="flex flex-col relative gap-5 py-6 mt-8 h-fit w-full">
        <div className="flex gap-y-4 items-center w-full justify-between">
          <h1 className="text-6xl font-thin">
            <span className="font-semibold">Resource</span> Links
          </h1>
        </div>
        <Filters/>
        <ResourcesPage/>
      </div>
    </div>
  );
}
