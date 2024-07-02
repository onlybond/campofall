import Header from "@/components/Header";
import { Button } from "@/components/ui/button";
import { ArrowLeft, ArrowRight } from "lucide-react";
import Image from "next/image";
import ResourceCard from "../resources/components/ResourceCard";
import Heroanimation from "./components/Heroanimation";
import ComponentCard from "../componentPage/component/componentCard";
import Gallery from "../componentPage/component/componentCard";
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
      <div className="flex flex-col gap-5 py-6 h-fit mt-8">
        <div className="flex gap-y-4 items-center w-full justify-between">
          <h1 className="text-6xl font-thin">
            <span className="font-semibold">Resource</span> Links
          </h1>

          <div className="flex flex-row gap-x-4 items-center justify-center">
            <ArrowLeft className="w-4 h-4 text-primary" />
            <ArrowRight className="w-4 h-4 text-primary" />
          </div>
        </div>
        <div className="grid grid-cols-3 gap-x-8 gap-y-6">
        <ResourceCard title="CampOfall" description="Design and collaborate all in the browser" link="" tags={['tools','tech']} type="Design Tools" subscription={false}/>
          <ResourceCard title="CampOfall" description="Design and collaborate all in the browser" link="" tags={['tools','tech']} type="Design Tools" subscription={false}/>
          <ResourceCard title="CampOfall" description="Design and collaborate all in the browser" link="" tags={['tools','tech']} type="Design Tools" subscription={false}/>
        </div>
      </div>
      {
        /* Components part starts here */
      }
    <div className="flex flex-col gap-5 h-fit">
      <div className="flex gap-y-4 items-center w-full justify-between">
        <h1 className="text-4xl sm:text-6xl font-thin">
          <span className="font-semibold">All</span> Components
        </h1>
        <div className="flex flex-row gap-x-4 items-center justify-center">
          <ArrowLeft className="w-4 h-4 text-primary" />
          <ArrowRight className="w-4 h-4 text-primary" />
        </div>
      </div>
     <div className="flex flex-wrap">
        <Gallery displayCount={8} />
      </div>
  </div>

    </div>
  );
}
