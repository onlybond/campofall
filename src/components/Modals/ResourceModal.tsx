"use client";

import React, { useEffect } from "react";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormMessage,
  FormLabel,
} from "../ui/form";
import { Button } from "../ui/button";
import { Input } from "../ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { LoaderIcon } from "lucide-react";
import {toast} from "react-toastify"
const resourceSchema = z.object({
  title: z
    .string()
    .min(2, { message: "Title should be more than 2 characters" })
    .max(100),
  description: z
    .string()
    .min(10, { message: "Description should be more than 10 characters" }),
  link: z.string().url({ message: "Invalid URL" }),
  // keywords: z
  //   .array(z.string())
  //   .min(1, { message: "add Atleast one keyword" })
  //   .max(5, { message: "Maximum 5 keywords allowed" }),
  type: z.string().refine((data) => data.trim() !== '', {
    message: "Please select a resource type",
    path: ["type"]
  }),
})
const resourceTypes = ["design Tools","Coding Tools","AI Tools","Font","Plugins"]
const ResourceModal = ({ children }: { children: React.ReactNode }) => {
  const [openModal, setOpenModal] = React.useState(false);
  const form = useForm<z.infer<typeof resourceSchema>>({
    resolver: zodResolver(resourceSchema),
    defaultValues: {
      title: "",
      description: "",
      link: "",
      type: "",
    },
  });

  const handleSubmit = async (data: z.infer<typeof resourceSchema>) => {
    await new Promise((resolve) => setTimeout(resolve, 2000));
    console.log(data);
    form.reset();
    setOpenModal(false);
    toast.success("Resource submitted successfully", {
      position: "top-right",
      autoClose: 5000,

    });
  };
  const isLoading = form.formState.isSubmitting;
  return (
    <Dialog open={openModal} onOpenChange={setOpenModal}>
      <DialogTrigger>{children}</DialogTrigger>
      <DialogContent className="flex flex-col justify-start items-start bg-[#131313]">
        <DialogHeader>
          <DialogTitle>Submit Resource</DialogTitle>
          <DialogDescription className="text-primary">
            Submit a resource for other designers. If we like it too, we’ll
            feature it.
          </DialogDescription>
        </DialogHeader>
        <Form {...form}>
          <form
            onSubmit={form.handleSubmit(handleSubmit)}
            className="flex flex-col gap-4"
          >
            <FormField
              control={form.control}
              name="title"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Resource Title</FormLabel>
                  <FormControl>
                    <Input
                      className="bg-muted/10 focus-visible:ring-primary"
                      placeholder="Resource Title"
                      {...field}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="description"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Resource Description</FormLabel>
                  <FormControl>
                    <Input
                      className="bg-muted/10 focus-visible:ring-primary"
                      placeholder="Resource Description"
                      {...field}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="link"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Resource Link</FormLabel>
                  <FormControl className="bg-muted/10">
                    <Input
                      className="focus-visible:ring-primary"
                      placeholder="Resource Link"
                      {...field}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="type"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Select a resource type</FormLabel>
                  <FormControl>
                    <Select
                      onValueChange={field.onChange}
                      value={field.value}
                    >
                      <FormControl className="bg-muted/10  focus:ring-primary">
                        <SelectTrigger>
                          <SelectValue placeholder="Select the Resource Type" />
                        </SelectTrigger>
                      </FormControl>
                      <SelectContent>
                        {
                          resourceTypes.map((type) => (
                            <SelectItem
                              className="hover:bg-primary"
                              key={type}
                              value={type}
                            >
                              {type}
                            </SelectItem>
                          ))
                        }
                      </SelectContent>
                    </Select>
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <Button
              type="submit"
              className="text-foreground font-bold mt-4 disabled:cursor-not-allowed"
              disabled={isLoading}
            >{
              isLoading ?  <LoaderIcon className="w-4 h-4 animate-spin" /> : "Submit"
            }
            </Button>
          </form>
        </Form>
      </DialogContent>
    </Dialog>
  );
};

export default ResourceModal;
