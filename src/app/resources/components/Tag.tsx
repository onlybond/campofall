import React, { useEffect, useState } from "react";
import { useRouter, usePathname, useSearchParams } from "next/navigation";

type TagProps = {
  label: string;
};

const Tags = ({ label }: TagProps) => {
  const router = useRouter();
  const pathname = usePathname();
  const searchParams = useSearchParams();

  const [selectedTag, setSelectedTag] = useState<string | null>(null);
  const [tags, setTags] = useState<string[]>([]);

  useEffect(() => {
    if (typeof window !== "undefined") {
      const { protocol, host } = window.location;
      const baseUrl = `${protocol}//${host}`;
      fetch(`${baseUrl}/api/getResources?fields=${label}`, {
        cache: "no-cache",
      })
        .then((res) => res.json())
        .then((response) => {
          if (response.success) {
            const data =
              label === "tags"
                ? response.data.flatMap((item: { tags: string[] }) => item.tags)
                : response.data.map((item: { type: string }) => item.type);
            const uniqueTags: any = Array.from(new Set(data));
            setTags(uniqueTags);
          }
        })
        .catch((error) => {
          console.error("Error fetching data:", error);
        });
    }
  }, []);

  const handleClick = (tag: string) => {
    const newSelectedTag = tag === selectedTag ? null : tag;
    setSelectedTag(newSelectedTag);

    const query = new URLSearchParams(searchParams);
    if (newSelectedTag) {
      query.set(label, newSelectedTag);
    } else {
      query.delete(label);
    }
    console.log(query.toString());
    router.push(`${pathname}?${query.toString()}`);
  };

  return (
    <>
      {tags.map((tag, idx) => (
        <div
          className={`px-6 py-2 border rounded-full border-primary cursor-pointer select-none ${
            tag === selectedTag
              ? "bg-primary text-white"
              : "hover:bg-primary/50"
          }`}
          key={idx}
          onClick={() => handleClick(tag)}
        >
          {tag}
        </div>
      ))}
    </>
  );
};

export default Tags;
