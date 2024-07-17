import AddResourceTrigger from "./components/AddResourceTrigger";
import Resources from "./components/Resources";
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
  const res = await fetch(`/api/getResources`, {
    cache: "no-cache",
  });
  const data = await res.json();
  const resources: Array<resource> = data.data;
  return resources;
};
const ResourcesPage = async () => {
  const resources = await getResources();
  return (
    <div className="flex container flex-col mt-36 relative w-full  justify-start  gap-4 h-fit ">
      <div className="flex w-full justify-between">
        <div className="flex gap-4">
          <AddResourceTrigger>
            Add a Resource <ChevronRight />
          </AddResourceTrigger>
        </div>
      </div>
      <div>
        <Resources resources={resources} />
      </div>
    </div>
  );
};

export default ResourcesPage;
