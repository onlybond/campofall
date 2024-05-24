"use client";

import React, { useEffect, useState } from "react";

type TagProps = {
  label: string;
};

const Tags = ({ label }: TagProps) => {
  const [selected, setSelected] = useState<Array<boolean>>([]);
  const [types, setTypes] = useState<Array<string>>([]);

  useEffect(() => {
    fetch("http://localhost:3000/api/fetchResources", { cache: "no-store" })
      .then((res) => res.json())
      .then((data) => {
        if (label === "type") {
          const types: Array<string> = Array.from(
            new Set(data.map((resource: { type: string }) => resource.type))
          );
          setTypes(types);
          setSelected(new Array(types.length).fill(false)); // Initialize selected state
        }
        if (label === "tags") {
          const tags: Array<string> = Array.from(
            new Set(data.flatMap((resource: { tags: Array<string> }) => resource.tags))
          );
          setTypes(tags);
          setSelected(new Array(tags.length).fill(false)); // Initialize selected state
        }
      });
  }, []);

  const handleClick = (index: number) => {
    const newSelected = [...selected];
    newSelected[index] = !newSelected[index];
    setSelected(newSelected);
  };

  return (
    <>
      {types.map((type, idx) => (
        <div
          className={`px-6 py-2 border rounded-full border-primary cursor-pointer select-none hover:bg-primary/50 active:bg-primary active:text-white ${
            selected[idx] ? "bg-primary":"hover:bg-primary/50"
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

