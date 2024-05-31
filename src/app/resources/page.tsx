import ResourceCard from "./components/ResourceCard";
import AddResourceTrigger from "./components/AddResourceTrigger";
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
      <AddResourceTrigger>Add New Resource</AddResourceTrigger>
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
