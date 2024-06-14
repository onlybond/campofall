"use client";

import React, { useEffect, useState } from "react";
import { resource } from "../page";
import ResourceCard from "./ResourceCard";
import { useSearchParams } from "next/navigation";

export default function Resources({ resources }: { resources: resource[] }) {
  const searchParams = useSearchParams();
  const [filteredResources, setFilteredResources] =
    useState<resource[]>(resources);
  useEffect(() => {
    const typeSearch = searchParams.get("type")?.split(",") || [];
    const tagSearch = searchParams.get("tags")?.split(",") || [];
    const SubSearch = searchParams.get("subscription") || "";
    console.log(SubSearch)
    const filtered = resources.filter((resource) => {
      const typeMatch =
        typeSearch.length === 0 || typeSearch.includes(resource.resourceType);
      const tagMatch =
        tagSearch.length === 0 ||
        tagSearch.includes(resource.resourceTags.toString());
      const SubMatch = SubSearch === "" ||resource.subscription === (SubSearch === "true");
      return typeMatch && tagMatch && SubMatch;
    });

    setFilteredResources(filtered);
  }, [resources, searchParams]);

  return (
    <>
      {filteredResources.length!== 0 ? (
        <div className="grid grid-cols-3 gap-x-8 gap-y-6 w-full">
          {filteredResources.map((resource, idx) => (
            <ResourceCard
              key={idx}
              title={resource.resourceTitle}
              description={resource.resourceDescription}
              link={resource.resourceURL}
              type={resource.resourceType}
              tags={resource.resourceTags}
              subscription={resource.subscription}
            />
          ))}
        </div>
      ) : (
        <div className="flex justify-center w-screen h-screen ">
          <span>No resources found</span>
        </div>
      )}
    </>
  );
}
