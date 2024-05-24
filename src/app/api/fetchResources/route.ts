import { NextRequest, NextResponse } from "next/server";

let resources = [
  {
    id: 1,
    title: "test",
    url: "https://www.google.com",
    type: "design tool",
    description: "test lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem, quia.",
    tags: ["test","test3"],
  },
  {
    id: 2,
    title: "test2",
    url: "https://www.google.com",
    type: "coding plugin",
    description: "test",
    tags: ["test2"],
  },
  {
    id: 3,
    title: "test3",
    url: "https://www.google.com",
    description: "test",
    type: "font",
    tags: ["test"],
  },
  {
    id: 4,
    title: "test4",
    url: "https://www.google.com",
    type: "design tool",
    description: "test",
    tags: ["test","test2","test3"],
  },
  {
    id: 5,
    title: "test5",
    url: "https://www.google.com",
    description: "test",
    type: "coding plugin",
    tags: ["test3"],
  },
  {
    id: 6,
    title: "test6",
    url: "https://www.google.com",
    description: "test",
    type: "font",
    tags: ["test","test3"],
  },
];

export const GET = async () => {
  // await new Promise((resolve) => setTimeout(resolve, 2000)); // Add a 2 second delay
  const fetchedResources = await Promise.resolve(resources);
  return new Response(JSON.stringify(fetchedResources), {
    headers: {
      "Content-Type": "application/json",
    },
  });
};
