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
import { Suspense } from "react";
import { ChevronRight } from "lucide-react";

export interface resource {
  resourceTitle: string;
  resourceLink: string;
  resourceDescription: string;
  resourceType: string;
  resourceTags: string[];
  resourcePaid: boolean;
}

const getResources = async () => {
  const res = await fetch(
    "http:localhost:3000/api/getResources",
    {
      cache: "no-cache",
    }
  );
  const data = await res.json();
  const resources:Array<resource> = data.data
  return resources
};
const ResourcesPage = async () => {
  const resources = await getResources();
  return (
    <div className="flex container flex-col mt-36 relative w-full  justify-start  gap-4 h-fit ">
      <div className="flex w-full justify-between">
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
          <AddResourceTrigger>Submit <ChevronRight/></AddResourceTrigger>
        </div>
      </div>
      <div>
        <Resources resources={resources} />
      </div>
    </div>
  );
};

export default ResourcesPage;
