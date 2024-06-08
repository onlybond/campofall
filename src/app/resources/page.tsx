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
const getResources = async () => {
  const res = await fetch(
    "https://6652d529813d78e6d6d656d1.mockapi.io/products",
    {
      cache: "no-cache",
    }
  );
  const data = await res.json();
  return data;
};
export interface resource {
  resourceTitle: string;
  resourceURL: string;
  resourceDescription: string;
  resourceType: string;
  resourceTags: string[];
}
const page = async () => {
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
        <div className="grid grid-cols-3 gap-x-8 gap-y-6 w-full">
          {resources.map((resource: resource, idx: number) => (
            <ResourceCard
              key={idx}
              title={resource.resourceTitle}
              description={resource.resourceDescription}
              link={resource.resourceURL}
              type={resource.resourceType}
              tags={resource.resourceTags}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default page;
