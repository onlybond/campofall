"use client";

import React, { useState } from "react";
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

const resourceSchema = z.object({
  title: z
    .string()
    .min(2, { message: "Title should be more than 2 characters" })
    .max(100),
  description: z
    .string()
    .min(10, { message: "Description should be more than 10 characters" }),
  link: z.string().url({ message: "Invalid URL" }),
  keywords: z
    .array(z.string())
    .min(1, { message: "add Atleast one keyword" })
    .max(5, { message: "Maximum 5 keywords allowed" }),
  type: z.string(),
});

const ResourceModal = ({ children }: { children: React.ReactNode }) => {
  const [keywordInput, setkeywordInput] = useState<string>("");
  const [keywords, setkeywords] = useState<string[]>([]);
  const form = useForm<z.infer<typeof resourceSchema>>({
    resolver: zodResolver(resourceSchema),
    defaultValues: {
      title: "",
      description: "",
      link: "",
      keywords: [],
      type: "",
    },
  });

  const handlekeywordInput = (event: React.ChangeEvent<HTMLInputElement>) => {
    setkeywordInput(event.target.value);
  };

  const handleAddkeyword = () => {
    if (
      keywordInput.trim() &&
      !keywords.includes(keywordInput.trim()) &&
      keywords.length < 5
    ) {
      setkeywords([...keywords, keywordInput.trim()]);
      setkeywordInput("");
    } else if (keywords.length >= 5) {
      // disable input
      form.setError("keywords", {
        type: "max",
        message: "Maximum 5 keywords allowed",
      });
    } else if (keywords.includes(keywordInput.trim())) {
      alert("Keyword already exists");
    } else {
      alert("Invalid keyword");
    }
  };

  const handleRemovekeyword = (keywordToRemove: string) => {
    setkeywords(keywords.filter((keyword) => keyword !== keywordToRemove));
  };

  const handleSubmit = async (data: z.infer<typeof resourceSchema>) => {
    console.log(data);
  };

  return (
    <Dialog>
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
            action={form.handleSubmit(handleSubmit)}
            className="flex flex-col gap-4"
          >
            <FormField
              control={form.control}
              name="title"
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
              name="description"
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
              name="link"
              render={({ field }) => (
                <FormItem>
                  <FormControl className="bg-muted/10">
                    <Input className="focus-visible:ring-primary" placeholder="Resource Link" {...field} />
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
                  <FormControl>
                    <Select
                      onValueChange={field.onChange}
                      defaultValue={field.value}
                    >
                      <FormControl className="bg-muted/10  focus:ring-primary">
                        <SelectTrigger>
                          <SelectValue placeholder="Select the Resource Type" />
                        </SelectTrigger>
                      </FormControl>
                      <SelectContent>
                        <SelectItem
                          className="hover:bg-primary focus-visible:ring-primary"
                          value="design Tools"
                        >
                          design tools
                        </SelectItem>
                        <SelectItem
                          className="hover:bg-primary"
                          value="coding tools"
                        >
                          coding tools
                        </SelectItem>
                        <SelectItem
                          className="hover:bg-primary"
                          value="AI tools"
                        >
                          AI tools
                        </SelectItem>
                      </SelectContent>
                    </Select>
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <div className="flex items-center space-x-2">
              <Input
                className="bg-muted/10 focus-visible:ring-primary"
                placeholder="Add keyword"
                value={keywordInput}
                onChange={handlekeywordInput}
              />
              <Button onClick={handleAddkeyword}>Add</Button>
            </div>
            <div className="flex flex-wrap mt-2">
              {keywords.map((keyword, index) => (
                <div
                  key={index}
                  className="flex items-center bg-primary bg-opacity-25 rounded-md px-2 py-1 mr-2 mb-2"
                >
                  <span className="text-sm mr-1">{keyword}</span>
                  <button
                    type="button"
                    onClick={() => handleRemovekeyword(keyword)}
                  >
                    <svg
                      className="w-4 h-4 text-white"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M6 18L18 6M6 6l12 12"
                      />
                    </svg>
                  </button>
                </div>
              ))}
            </div>
            <Button type="submit" className="text-foreground font-bold mt-4">
              Submit
            </Button>
          </form>
        </Form>
      </DialogContent>
    </Dialog>
  );
};

export default ResourceModal;
