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
  FormDescription,
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
import { RadioGroup, RadioGroupItem } from "../ui/radio-group";

const resourceTypes = [
  "Design Tools",
  "Coding Tools",
  "AI Tools",
  "Font",
  "Plugins",
] as const;
const resourceSchema = z.object({
  resourceTitle: z
    .string()
    .min(2, { message: "Title should be more than 2 characters" })
    .max(100),
  resourceDescription: z
    .string()
    .min(10, { message: "Description should be more than 10 characters" }),
  resourceLink: z
    .string()
    .url({
      message: "Invalid URL ex: https://example.com",
    }),
  resourceType: z.enum(resourceTypes, {
    message: "Please select a resource type",
  }),
  resourceTags: z.array(z.string()).refine(
    (data) => {
      if (data.length > 0) {
        return true;
      }
      return false;
    },
    {
      message: "Please select at least one tag",
    }
  ),
  resourcePaid: z.enum(["Yes", "No"], {
    message: "Please select the subscription",
  }),
  resourceMail: z.string().email({
    message: "Please enter a valid email",
  }),
});

const ResourceModal = ({ children }: { children: React.ReactNode }) => {
  const [openModal, setOpenModal] = React.useState(false);
  const [newTagValue, setNewTagValue] = React.useState("");
  const form = useForm<z.infer<typeof resourceSchema>>({
    resolver: zodResolver(resourceSchema),

    defaultValues: {
      resourceTitle: "",
      resourceDescription: "",
      resourceType: "AI Tools",
      resourceLink: "",
      resourcePaid: "No",
      resourceTags: ["design", "UI/UX"],
    },
  });

  const handleSubmit = async (data: z.infer<typeof resourceSchema>) => {
    try {
      await fetch("/api/newResources", {
        method: "POST",
        body: JSON.stringify({
          resourceTitle: data.resourceTitle,
          resourceDescription: data.resourceDescription,
          resourceType: data.resourceType,
          email: data.resourceMail,
          resourceTags: data.resourceTags,
          resourceLink: data.resourceLink,
          resourcePaid: data.resourcePaid === "Yes" ? true : false,
        }),
      });
      toast.success("Resource submitted successfully", {
        position: "top-right",
        autoClose: 5000,
      });
      form.reset();
      setOpenModal(false);
    } catch (error) {
      form.reset();
      toast.error("Error submitting resource", {
        position: "top-right",
        autoClose: 5000,
      });
    }
  };

  const isLoading = form.formState.isSubmitting;
  const handleClose = () => {
    form.reset();
    setOpenModal(!openModal);
  };
  return (
    <Dialog open={openModal} onOpenChange={handleClose}>
      <DialogTrigger>{children}</DialogTrigger>
      <DialogContent className="flex flex-col justify-start items-start bg-[#131313] overflow-y-auto max-h-full">
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
            className="flex flex-col gap-4 w-full "
          >
            <FormField
              control={form.control}
              name="resourceTitle"
              render={({ field }) => (
                <FormItem>
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
              name="resourceDescription"
              render={({ field }) => (
                <FormItem>
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
              name="resourceType"
              render={({ field }) => (
                <FormItem>
                  <FormControl>
                    <Select onValueChange={field.onChange} value={field.value}>
                      <SelectTrigger className="bg-muted/10 focus-visible:ring-primary">
                        <SelectValue placeholder="Select the Resource Type" />
                      </SelectTrigger>
                      <SelectContent>
                        {resourceTypes.map((type) => (
                          <SelectItem
                            className="bg-muted/10 focus-visible:ring-primary"
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
              name="resourceLink"
              render={({ field }) => (
                <FormItem>
                  <FormControl>
                    <Input
                      className="bg-muted/10 focus-visible:ring-primary"
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
              name="resourcePaid"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>
                    Subscription Required for access of this resource?{" "}
                  </FormLabel>
                  <FormControl>
                    <RadioGroup
                      onValueChange={field.onChange}
                      defaultValue={field.value}
                      className="flex gap-2"
                    >
                      <FormItem className="flex items-center justify-center gap-x-2">
                        <FormControl>
                          <RadioGroupItem value="Yes" />
                        </FormControl>
                        <FormLabel className="h-full">Yes</FormLabel>
                      </FormItem>
                      <FormItem className="flex items-center justify-center gap-x-2">
                        <FormControl>
                          <RadioGroupItem value="No" />
                        </FormControl>
                        <FormLabel className="h-full">No</FormLabel>
                      </FormItem>
                    </RadioGroup>
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="resourceMail"
              render={({ field }) => (
                <FormItem>
                  <FormControl>
                    <Input
                      className="bg-muted/10 focus-visible:ring-primary"
                      placeholder="Email"
                      {...field}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="resourceTags"
              render={({ field }) => (
                <FormItem className="flex flex-col">
                  <FormLabel>Tags</FormLabel>
                  <FormItem className="flex justify-center items-center gap-2">
                    <FormControl>
                      <Input
                        className="bg-muted/10 focus-visible:ring-primary flex-1"
                        placeholder="Add new tag"
                        value={newTagValue}
                        onChange={(e) => setNewTagValue(e.target.value)}
                        onKeyDown={(e) => {
                          if (e.key === "Enter") {
                            if (newTagValue) {
                              field.onChange([
                                ...(field.value || []),
                                newTagValue,
                              ]);
                              setNewTagValue("");
                            }
                            e.preventDefault();
                          }
                        }}
                      />
                    </FormControl>
                    <Button
                      onClick={(e) => {
                        e.preventDefault();
                        if (newTagValue) {
                          field.onChange([...(field.value || []), newTagValue]);
                          setNewTagValue("");
                        }
                      }}
                    >
                      Add Tag
                    </Button>
                  </FormItem>
                  <FormDescription>press ⏎ after typing a tag</FormDescription>
                  <div className="flex gap-2 flex-wrap">
                    {field.value &&
                      field.value.map((tag, index) => (
                        <div
                          key={index}
                          className="px-4 text-xs py-2 bg-muted rounded-full"
                          onChange={(e) =>
                            field.onChange(
                              field.value &&
                                field.value.map((val, i) =>
                                  i === index
                                    ? (e.currentTarget as HTMLInputElement)
                                        .value
                                    : val
                                )
                            )
                          }
                        >
                          {tag}
                          <button
                            className="text-primary ml-2"
                            onClick={(e) => {
                              e.preventDefault();
                              field.onChange(
                                field.value?.filter((_, i) => i !== index)
                              );
                            }}
                          >
                            x
                          </button>
                        </div>
                      ))}
                  </div>

                  <FormMessage />
                </FormItem>
              )}
            />
            <Button
              type="submit"
              className="text-foreground font-bold disabled:cursor-not-allowed"
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
