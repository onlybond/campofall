import React from "react";
import ResourceCard from "./components/ResourceCard";
import Filters from "./components/Filters";
const page = () => {
  return (
    <div className="flex container relative w-full items-center justify-center h-full ">
      <Filters/>
      <div className="grid grid-cols-3 gap-x-8 gap-y-6 w-full">
        <ResourceCard />
        <ResourceCard />
        <ResourceCard />
        <ResourceCard />
        <ResourceCard />
        <ResourceCard />
      </div>
    </div>
  );
};

export default page;
