import React from "react";
import { Button } from "@/components/ui/button";
import ResourceModal from "@/components/Modals/ResourceModal";
const AddResourceTrigger = ({ children }: { children: React.ReactNode }) => {
  return <ResourceModal>{children}</ResourceModal>;
};

export default AddResourceTrigger;
