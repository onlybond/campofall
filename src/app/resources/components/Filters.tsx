"use client";
import React, { Suspense, useCallback } from "react";
import Tags from "./Tag";
import { Label } from "@/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Separator } from "@/components/ui/separator";
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import { Button } from "@/components/ui/button";
const Filters = () => {
  const href = usePathname();
  const router = useRouter();
  const searchParams = useSearchParams();
  const typeSearch = useSearchParams().get("type")?.split(",") || [];
  const tagSearch = useSearchParams().get("tags")?.split(",") || [];
  const subscriptionSearch = useSearchParams().get("subscription");
  const handleSubscriptionChange = (value: string) => {
    router.push(`${href}?subscription=${value}`);

  }
  return (
    <div className="w-full sticky p-4 z-[1] bg-[#363636]">
      <div className="flex gap-4  items-center">
        <span className="font-bold text-2xl">Filters</span>
        <RadioGroup className="flex " value={subscriptionSearch || undefined} onValueChange={handleSubscriptionChange}>
          <div className="space-x-2">
            <RadioGroupItem value="free" id="free" />
            <Label htmlFor="free" className="cursor-pointer">
              Free
            </Label>
          </div>
          <div className="space-x-2">
            <RadioGroupItem value="paid" id="paid" />
            <Label htmlFor="paid" className="cursor-pointer">
              Paid
            </Label>
          </div>
        </RadioGroup>
        <Separator orientation="vertical" />
        <div className="flex gap-4 items-center">
          <div className="relative mr-2">
            <span className="font-bold text-xl">Types of resources</span>
            {typeSearch.length > 0 && (
              <span className="absolute -top-[30%] left-[96%] z-[2] bg-red-400 rounded-full w-6 h-6 text-center">
                {typeSearch.length}
              </span>
            )}
          </div>
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
          <div className="relative mr-2">
            <span className="font-bold text-xl">Search by Tag</span>
            {tagSearch.length > 0 && (
              <span className="absolute -top-[30%] left-[96%] z-[2] bg-red-400 rounded-full w-6 h-6 text-center">
                {tagSearch.length}
              </span>
            )}
          </div>
          <div
            className="flex gap-2 text-sm overflow-x-auto w-[20vw] whitespace-nowrap"
            style={{ scrollbarWidth: "none" }}
          >
            <Suspense fallback={<div>loading</div>}>
              <Tags label="tags" />
            </Suspense>
          </div>
        </div>
        <Button variant="outline" onClick={() => { }}>
          Reset
        </Button>
      </div>
    </div>
  );
};

export default Filters;
