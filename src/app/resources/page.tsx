import ResourceCard from "./components/ResourceCard";
const getResources = async () => {
  const res = await fetch("http://localhost:3000/api/fetchResources", {
    cache: "no-store",
  });
  const data = await res.json();
  return data;
};
export interface resource {
  title: string;
  url: string;
  description: string;
  type: string;
  tags: string[];
}
const page = async () => {
  const resources = await getResources();
  return (
    <div className="flex container relative w-full items-center justify-center h-full ">
      <div className="grid grid-cols-3 gap-x-8 gap-y-6 w-full">
        {resources.map((resource: resource, idx: number) => (
          <ResourceCard
            key={idx}
            title={resource.title}
            description={resource.description}
            link={resource.url}
            type={resource.type}
            tags={resource.tags}
          />
        ))}
      </div>
    </div>
  );
};

export default page;
