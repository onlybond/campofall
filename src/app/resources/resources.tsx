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
import loading from "./loading";
import { Suspense } from "react";
import PaginationControls from "./components/PaginationControls";
export interface resource {
  resourceTitle: string;
  resourceURL: string;
  resourceDescription: string;
  resourceType: string;
  resourceTags: string[];
  subscription: boolean;
}

const getResources = async () => {
  const res = await fetch(
    "https://6652d529813d78e6d6d656d1.mockapi.io/products",
    {
      cache: "no-cache",
    }
  );
  const data: Array<resource> = await res.json();
  return data;
};
const ResourcesPage = async ({
  searchParams,
}: {
  searchParams: { [key: string]: string  | string[] | undefined};
}) => {
  const resources = await getResources();
  const page = searchParams["page"] ?? "1";
  const per_page = searchParams["per_page"] ?? "9";

  const start = (Number(page) - 1) * Number(per_page);
  const end = start + Number(per_page);

  const slicedResources = resources.slice(start, end);

  if (!page)
    return (
      <div className="flex container flex-col mt-36 relative w-full  justify-start items-end gap-4 h-full">
        page not found
      </div>
    );
  return (
    <div className="flex container flex-col mt-36 relative w-full  justify-start items-end gap-4 h-fit ">
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

export default ResourcesPage;
