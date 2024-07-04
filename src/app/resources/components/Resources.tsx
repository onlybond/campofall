"use client";

import React, { useEffect, useState } from "react";
import { Resource } from "../page";
import ResourceCard from "./ResourceCard";
import { useSearchParams } from "next/navigation";

export default function Resources({ resources }: { resources: Resource[] }) {
  const searchParams = useSearchParams();
  const [filteredResources, setFilteredResources] =
    useState<Resource[]>(resources);
  useEffect(() => {
    const typeSearch = searchParams.get("type")?.split(",") || [];
    const tagSearch = searchParams.get("tags")?.split(",") || [];

    const SubSearch = searchParams.get("resourcePaid") || "";

    const filtered = resources.filter((resource) => {
      const typeMatch =
        typeSearch.length === 0 || typeSearch.includes(resource.type);
      const tagMatch =
        tagSearch.length === 0 ||
        tagSearch.some((tag) => resource.tags.includes(tag));
      const SubMatch =
        SubSearch === "" || resource.resourcePaid === (SubSearch === "true");
      return typeMatch && tagMatch && SubMatch;
    });

    setFilteredResources(filtered);
  }, [resources, searchParams]);

  return (
    <>
      {filteredResources.length !== 0 ? (
        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-x-8 gap-y-6 w-full min-w-3">
          {filteredResources.map((resource, idx) => (
            <ResourceCard
              key={idx}
              title={resource.title}
              description={resource.description}
              link={resource.resourceLink}
              type={resource.type}
              tags={resource.tags}
              subscription={resource.resourcePaid}
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
