import { headers } from "next/headers";
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

const getResources = async (host:string)=>{
  const response = await fetch(`${process.env.NODE_ENV === "production" ? "https":"http"}://${host}/api/getResources`)
  const data = await response.json()
  return data.data;
}
const ResourcesPage =  async () => {
  const host = headers().get("host")
  const resources = host && await getResources(host);  
  return (
    <div className="flex container flex-col relative w-full  justify-start  gap-4 h-fit ">
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
