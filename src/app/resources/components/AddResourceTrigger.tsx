import React from "react";
import { Button } from "@/components/ui/button";

const ResourceModal = dynamic(
  () => import("@/components/Modals/ResourceModal"),
  {
    ssr: false,
  }
);
// import ResourceModal from "@/components/Modals/ResourceModal";
import dynamic from "next/dynamic";
const AddResourceTrigger = ({ children }: { children: React.ReactNode }) => {
  return (
    <ResourceModal>
      <div className="bg-primary w-full h-full flex justify-center items-center px-4 py-1 rounded-full font-medium hover:opacity-80">{children}</div>
    </ResourceModal>
  );
};

export default AddResourceTrigger;
