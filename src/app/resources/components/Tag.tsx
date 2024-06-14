"use client";

import React, { useEffect, useState } from "react";
import { useRouter, usePathname, useSearchParams } from "next/navigation";

type TagProps = {
  label: string;
};

const Tags = ({ label }: TagProps) => {
  const router = useRouter();
  const pathname = usePathname();
  const searchParams = useSearchParams();

  const [selectedType, setSelectedType] = useState<Array<boolean>>([]);
  const [selectedTags, setSelectedTags] = useState<Array<boolean>>([]);
  const [types, setTypes] = useState<Array<string>>([]);
  useEffect(() => {
    fetch("https://6652d529813d78e6d6d656d1.mockapi.io/products", {
      cache: "no-cache",
    })
      .then((res) => res.json())
      .then((data) => {
        let initialSelected: Array<boolean> = [];
        if (label === "type") {
          const types: Array<string> = Array.from(
            new Set(
              data.map(
                (resource: { resourceType: string }) => resource.resourceType
              )
            )
          );
          setTypes(types);
          initialSelected = new Array(types.length).fill(false);

          const selectedTypesFromURL = searchParams.get(label)?.split(",") || [];
          selectedTypesFromURL.forEach((type) => {
            const index = types.indexOf(type);
            if (index > -1) {
              initialSelected[index] = true;
            }
          });
          setSelectedType(initialSelected); // Initialize selected state
        }
        if (label === "tags") {
          const tags: Array<string> = Array.from(
            new Set(
              data.flatMap(
                (resource: { resourceTags: string }) => resource.resourceTags
              )
            )
          );
          setTypes(tags);
          initialSelected = new Array(tags.length).fill(false);

          const selectedTagsFromURL = searchParams.get(label)?.split(",") || [];
          selectedTagsFromURL.forEach((tag) => {
            const index = tags.indexOf(tag);
            if (index > -1) {
              initialSelected[index] = true;
            }
          });
          setSelectedTags(initialSelected); // Initialize selected state
        }
      });
  }, [label, searchParams]);
  const handleClick = (index: number) => {
    if (label === "type") {
      const newSelected = [...selectedType];
      newSelected[index] = !newSelected[index];
      setSelectedType(newSelected);
      const searchselectedTypes = types.filter((_, idx) => newSelected[idx]);
      const newParams = new URLSearchParams(searchParams.toString());
      if (searchselectedTypes.length > 0) {
        newParams.set(label, searchselectedTypes.join(","));
      } else {
        newParams.delete(label);
      }
      router.push(`${pathname}?${newParams.toString()}`);
    } else if (label === "tags") {
      const newSelected = [...selectedTags];
      newSelected[index] = !newSelected[index];
      setSelectedTags(newSelected);
      const searchselectedTags = types.filter((_, idx) => newSelected[idx]);
      const newParams = new URLSearchParams(searchParams.toString());
      if (searchselectedTags.length > 0) {
        newParams.set(label, searchselectedTags.join(","));
      } else {
        newParams.delete(label);
      }
      router.push(`${pathname}?${newParams.toString()}`);
    }
  };

  return (
    <>
      {types.map((type, idx) => (
        <div
          className={`px-6 py-2 border rounded-full border-primary cursor-pointer select-none ${
            label === "type"
              ? selectedType[idx]
                ? "bg-primary text-white"
                : "hover:bg-primary/50"
              : selectedTags[idx]
              ? "bg-primary text-white"
              : "hover:bg-primary/50"
          }`}
          key={idx}
          onClick={() => handleClick(idx)}
        >
          {type}
        </div>
      ))}
    </>
  );
};

export default Tags;
