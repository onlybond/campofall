import React, { Suspense } from "react";
import Tags from "./Tag";
const Filters = () => {
  return (
    <div className="w-full fixed p-4 z-10">
      <div className="flex gap-4 items-center">
        <span className="font-bold text-2xl">Filters</span>
        <div className="flex gap-2 text-sm">
          <input
            defaultChecked
            type="radio"
            name="type"
            id="free"
            className="text-red-500"
          />
          <label htmlFor="free">Free</label>
          <input type="radio" name="type" id="paid" className="text-red-500" />
          <label htmlFor="paid">Paid</label>
        </div>
        <div className="flex gap-4 items-center">
          <span className="font-bold text-xl">Types of resources</span>
          <div className="flex gap-2 text-sm">
            <Suspense fallback={<div>loading</div>}>
              <Tags label="type"/>
            </Suspense>
          </div>
        </div>
        <div className="flex gap-4 items-center">
          <span className="font-bold text-xl">Search by Tag</span>
          <div className="flex gap-2 text-sm">
            <Suspense fallback={<div>loading</div>}>
              <Tags label="tags"/>
            </Suspense>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Filters;
