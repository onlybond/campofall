"use client";

import React, { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
type TagProps = {
  label: string;
};

const Tags = ({ label }: TagProps) => {
  const router = useRouter();
  const [selectedType, setSelectedType] = useState<Array<boolean>>([]);
  const [selectedTags, setSelectedTags] = useState<Array<boolean>>([]);
  const [types, setTypes] = useState<Array<string>>([]);
  useEffect(() => {
    fetch("https://6652d529813d78e6d6d656d1.mockapi.io/products", {
      cache: "no-store",
    })
      .then((res) => res.json())
      .then((data) => {
        if (label === "type") {
          const types: Array<string> = Array.from(
            new Set(
              data.map(
                (resource: { resourceType: string }) => resource.resourceType
              )
            )
          );
          setTypes(types);
          setSelectedType(new Array(types.length).fill(false)); // Initialize selected state
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
          setSelectedTags(new Array(tags.length).fill(false)); // Initialize selected state
        }
      });
  }, [label]);

  const handleClick = (index: number,type:string) => {
    if (label === "type") {
      const newSelected = [...selectedType];
      newSelected[index] = !newSelected[index];
      setSelectedType(newSelected);
      console.log(selectedType);
      const searchselectedTypes = types.filter((_, idx) => selectedType[idx]);
      router.push(`/resources?${label}=${searchselectedTypes.join(",")}`);
    }
    else if(label === "tags"){
      const newSelected = [...selectedTags];
      newSelected[index] = !newSelected[index];
      setSelectedTags(newSelected);
      const searchselectedTags = types.filter((_, idx) => selectedTags[idx]);
      router.push(`/resources?${label}=${searchselectedTags.join(",")}`);
    }
  };
  return (
    <>
      {types.map((type, idx) => (
        <div
          className={`px-6 py-2 border rounded-full border-primary cursor-pointer select-none hover:bg-primary/50 active:bg-primary active:text-white ${
            label === "type" ? selectedType[idx] ? "bg-primary" : "hover:bg-primary/50" :
            selectedTags[idx] ? "bg-primary" : "hover:bg-primary/50"
          }`}
          key={idx}
          onClick={() => handleClick(idx,type)}
        >
          {type}
        </div>
      ))}
    </>
  );
};

export default Tags;
