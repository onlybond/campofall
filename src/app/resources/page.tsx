import ResourceCard from "./components/ResourceCard";
import AddResourceTrigger from "./components/AddResourceTrigger";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
  SelectGroup
} from "@/components/ui/select";
import Resources from "./components/resources";
export interface resource {
  resourceTitle: string;
  resourceURL: string;
  resourceDescription: string;
  resourceType: string;
  resourceTags: string[];
}

const getResources = async () => {
  const res = await fetch(
    "https://6652d529813d78e6d6d656d1.mockapi.io/products",
    {
      cache: "no-cache",
    }
  );
  const data:resource[] = await res.json();
  return data;
};
const page  = async () => {
  const resources = await getResources();
  return (
    <div className="flex container flex-col mt-36 relative w-full  justify-start items-end gap-4 h-full ">
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
                <SelectItem value={"Ascending"}>Ascending - A to Z</SelectItem>
                <SelectItem value={"Descending"}>
                  Descending - Z to A
                </SelectItem>
              </SelectGroup>
            </SelectContent>
          </Select>
        </div>
        <AddResourceTrigger>Add New Resource</AddResourceTrigger>
      </div>
      <div>
        <Resources resources = {resources}/>
      </div>
    </div>
  );
};

export default page;
