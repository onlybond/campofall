import React, { Suspense } from "react";
import Tags from "./Tag";
import { Label } from "@/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Separator } from "@/components/ui/separator";

const Filters = () => {
  return (
    <div className="w-full fixed p-4 z-[2] bg-[#363636]">
      <div className="flex gap-4 items-center">
        <span className="font-bold text-2xl">Filters</span>
        <RadioGroup defaultValue="option-one" className="flex ">
          <div className="space-x-2">
            <RadioGroupItem value="option-one" id="option-one" />
            <Label htmlFor="option-one" className="cursor-pointer">Free</Label>
          </div>
          <div className="space-x-2">
            <RadioGroupItem value="option-two" id="option-two" />
            <Label htmlFor="option-two" className="cursor-pointer">Paid</Label>
          </div>
        </RadioGroup>
        <Separator orientation="vertical" />
        <div className="flex gap-4 items-center">
          <span className="font-bold text-xl">Types of resources</span>
          <div
            className="flex gap-2 text-sm overflow-x-auto w-[20vw] whitespace-nowrap"
            style={{ scrollbarWidth: "none" }}
          >
            <Suspense fallback={<div className="">loading...</div>}>
              <Tags label="type" />
            </Suspense>
          </div>
        </div>
        <Separator orientation="vertical" className="bg-[#fff] mr-2" />
        <div className="flex gap-4 items-center">
          <span className="font-bold text-xl">Search by Tag</span>
          <div
            className="flex gap-2 text-sm overflow-x-auto w-[20vw] whitespace-nowrap"
            style={{ scrollbarWidth: "none" }}
          >
            <Suspense fallback={<div>loading</div>}>
              <Tags label="tags" />
            </Suspense>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Filters;
