import React from "react";
import { Button } from "@/components/ui/button";

const ResourceModal = dynamic(() => import("@/components/Modals/ResourceModal"), {
  ssr: false,
})
// import ResourceModal from "@/components/Modals/ResourceModal";
import dynamic from "next/dynamic";
const AddResourceTrigger = ({ children }: { children: React.ReactNode }) => {
  return <ResourceModal>{children}</ResourceModal>;
};

export default AddResourceTrigger;
