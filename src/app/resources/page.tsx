"use client"

import AddResourceTrigger from "./components/AddResourceTrigger";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
  SelectGroup,
} from "@/components/ui/select";
import Resources from "./components/Resources";
import { Suspense, useEffect, useState } from "react";
import PaginationControls from "./components/PaginationControls";

export interface Resource {
  title: string;
  type: string;
  email: string;
  tags: string[];
  description: string;
  resourceLink: string;
  resourcePaid: boolean;
}

const fetchResources = async () => {
  const { protocol, host } = window.location;
  const baseUrl = `${protocol}//${host}`;
  const res = await fetch(`${baseUrl}/api/getResources`, {
    cache: "no-cache",
  });
  const data = await res.json();
  return data.data;
};

const Page = ({
  searchParams,
}: {
  searchParams: { [key: string]: string | string[] | undefined };
}) => {
  const [resources, setResources] = useState<Resource[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const getResources = async () => {
      const data = await fetchResources();
      setResources(data ?? []);
      setLoading(false);
    };
    getResources();
  }, []);

  const page = searchParams["page"] ?? "1";
  const per_page = searchParams["per_page"] ?? "9";

  const start = (Number(page) - 1) * Number(per_page);
  const end = start + Number(per_page);

  const slicedResources = resources.slice(start, end);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (!page) {
    return (
      <div className="flex container flex-col mt-36 relative w-full justify-start items-end gap-4 h-full">
        page not found
      </div>
    );
  }

  return (
    <div className="flex container flex-col mt-36 relative w-full justify-start items-end gap-4 h-fit">
      <div className="flex w-full justify-between">
        <div>Showing {`${slicedResources.length}`} resources</div>
        <div className="flex gap-4">
          <div className="flex justify-center items-center gap-2">
            <span>sorting</span>
            <Select>
              <SelectTrigger>
                <SelectValue placeholder="Sort By"></SelectValue>
              </SelectTrigger>
              <SelectContent>
                <SelectGroup>
                  <SelectItem value={"featured"}>featured</SelectItem>
                  <SelectItem value={"rating"}>rating</SelectItem>
                  <SelectItem value={"Ascending"}>
                    Ascending - A to Z
                  </SelectItem>
                  <SelectItem value={"Descending"}>
                    Descending - Z to A
                  </SelectItem>
                </SelectGroup>
              </SelectContent>
            </Select>
          </div>
          <AddResourceTrigger>Add New Resource</AddResourceTrigger>
        </div>
      </div>
      <div>
        <Suspense fallback={<div> loading...</div>}>
          <Resources resources={slicedResources} />
        </Suspense>
      </div>
      <PaginationControls
        hasNextPage={end < resources.length}
        hasPreviousPage={start > 0}
      />
    </div>
  );
};

export default Page;
