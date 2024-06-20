"use client";

import React from "react";
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
import { toast } from "react-toastify";
import { RadioGroup } from "@radix-ui/react-radio-group";
import { RadioGroupItem } from "../ui/radio-group";

const resourceSchema = z.object({
  title: z
    .string()
    .min(2, { message: "Title should be more than 2 characters" })
    .max(100),
  description: z
    .string()
    .min(10, { message: "Description should be more than 10 characters" }),
  link: z.string().url({ message: "Invalid URL" }).optional(),
  type: z.string({ message: "Please select a resource type" }),
  format: z.enum(["link", "file"],{ message: "Please select a resource format" }),
  resourceFile:  z
  .instanceof(FileList)
  .optional()
  .refine((file) => file?.length == 1, "File is required.")
  .refine(
    (file) =>
      file && file[0]?.type === "image/png" ||
      file && file[0]?.type === "image/jpeg" ||
      file && file[0]?.type === "image/jpg",
    "Must be a png, jpeg or jpg.",
  )
  .refine((file) => file && file[0]?.size <= 5000000, `Max file size is 5MB.`),
}).refine((data) => {
  if (data.format === "link" && !data.link) {
    return false;
  }
  if (data.format === "file" && !data.resourceFile) {
    return false;
  }
  return true;
}, {
  message: "Either link or file must be provided",
  path: ["link", "resourceFile"], // or any other path to show the error
});

const resourceTypes = [
  "Design Tools",
  "Coding Tools",
  "AI Tools",
  "Font",
  "Plugins",
];

const ResourceModal = ({ children }: { children: React.ReactNode }) => {
  const [openModal, setOpenModal] = React.useState(false);
  const form = useForm<z.infer<typeof resourceSchema>>({
    resolver: zodResolver(resourceSchema),
    defaultValues: {
      title: "",
      description: "",
      link: "",
      type: "",
      format: "link",
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
            Submit a resource for other designers. If we like it too, we’ll feature it.
          </DialogDescription>
        </DialogHeader>
        <Form {...form}>
          <form
            onSubmit={form.handleSubmit(handleSubmit)}
            className="flex flex-col gap-4 w-full"
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
              name="type"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Select a resource type</FormLabel>
                  <FormControl>
                    <Select onValueChange={field.onChange} value={field.value}>
                      <SelectTrigger>
                        <SelectValue placeholder="Select the Resource Type" />
                      </SelectTrigger>
                      <SelectContent>
                        {resourceTypes.map((type) => (
                          <SelectItem
                            className="hover:bg-primary"
                            key={type}
                            value={type}
                          >
                            {type}
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="format"
              render={({ field }) => (
                <FormItem className="flex justify-center items-center gap-2">
                  <FormLabel>Resource Format: {"  "}</FormLabel>
                  <FormControl>
                    <RadioGroup
                      onValueChange={field.onChange}
                      value={field.value}
                      className="flex space-x-2"
                    >
                      <FormItem className="space-x-2">
                        <FormControl>
                          <RadioGroupItem value="link" />
                        </FormControl>
                        <FormLabel>Link</FormLabel>
                      </FormItem>
                      <FormItem className="space-x-2">
                        <FormControl>
                          <RadioGroupItem value="file" />
                        </FormControl>
                        <FormLabel>File</FormLabel>
                      </FormItem>
                    </RadioGroup>
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            {form.watch("format") === "file" ? (
              <FormField
                control={form.control}
                name="resourceFile"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Resource File</FormLabel>
                    <FormControl className="bg-muted/10">
                      <Input
                        className="focus-visible:ring-primary"
                        placeholder="Resource File"
                        type="file"
                        onChange={(event) => {
                          field.onChange(event.target?.files?.[0] ?? undefined);
                        }}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            ) : null}
            {form.watch("format") === "link" ? (
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
            ) : null}

            <Button
              type="submit"
              className="text-foreground font-bold mt-4 disabled:cursor-not-allowed"
              disabled={isLoading}
            >
              {isLoading ? (
                <LoaderIcon className="w-4 h-4 animate-spin" />
              ) : (
                "Submit"
              )}
            </Button>
          </form>
        </Form>
      </DialogContent>
    </Dialog>
  );
};

export default ResourceModal;
