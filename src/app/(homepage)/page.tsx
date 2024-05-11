import Header from "@/components/Header";
import { Button } from "@/components/ui/button";
import { ArrowLeft, ArrowRight } from "lucide-react";
import Image from "next/image";
import ResourceCard from "../resources/components/ResourceCard";

export default function Home() {
  return (
    <div className="flex w-screen container flex-col ">
      <div className="flex justify-between items-center h-full"> 
        <div className="space-y-10 py-10">
          <div className="tracking-widest space-y-10">
            <h1 className="text-7xl font-thin">
              <span className="font-normal">Designing</span> a Better
            </h1>
            <h1 className="text-7xl font-thin">
              <span className="font-normal">World</span> Today
            </h1>
          </div>
          <div>
            <p className="text-primary">
              Submit a resource for other designers. If we like it too, we’ll
              feature it.
            </p>
            <p className="text-primary">
              Submit a resource for other designers. If we like it too, we’ll
              feature it.
            </p>
            <p className="text-primary">
              Submit a resource for other designers.
            </p>
          </div>
        </div>
      </div>
      <div className="flex flex-col gap-5 w-full">
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
          <ResourceCard />
          <ResourceCard />
          <ResourceCard />
        </div>
      </div>
    </div>
  );
}
