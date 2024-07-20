import React from "react";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogFooter,
  DialogTitle,
  DialogTrigger,
} from "../ui/dialog";

const FreelanceModal = ({ children }: { children: React.ReactNode }) => {
  return (
    <Dialog>
      <DialogTrigger>{children}</DialogTrigger>
      <DialogContent className="flex flex-col justify-center items-center bg-[#131313]">
        <DialogHeader>
          <DialogTitle>Submit Freelance Work</DialogTitle>
          <DialogDescription className="text-primary">
            Submit a freelance work for other designers. If we like it too,
            we’ll feature it.
          </DialogDescription>
        </DialogHeader>
      </DialogContent>
    </Dialog>
  );
};

export default FreelanceModal;
