import React from "react";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { RiShareBoxLine } from "react-icons/ri";
import Link from "next/link";

interface ResourceCardProps {
  title: string;
  description: string;
  link: string;
  tags: string[];
  type: string;
  resourcePaid: boolean;
}

const ResourceCard = ({
  title,
  description,
  link,
  tags = [],
  type,
  resourcePaid,
}: ResourceCardProps) => {
  return (
    <div className="bg-[#131313] w-auto h-44 relative rounded-lg overflow-hidden transition-all duration-200 ease-in-out transform hover:-translate-y-1 hover:scale-105">
      <span className="absolute top-4 right-4 text-primary text-xs">{resourcePaid ? "Paid" : ""}</span>
      <div className="p-4 space-y-2">
        <Image src="/assets/logoiso.png" alt="alt" width={24} height={24} />
        <h1 className="text-2xl font-bold">{title}</h1>
        <p className="text-xs truncate">{description}</p>
        <div className="text-primary space-x-2 overflow-x-auto whitespace-nowrap text-xs font-bold" style={{scrollbarWidth:"none",scrollbarColor:"#F37121 transparent"}}>
          {tags.map((tag: string, index: number) => (
            <span key={index} className="">
              #{tag}
            </span>
          ))}
        </div>
      </div>
      <div className="bg-[#363636] absolute bottom-0 w-full flex justify-between items-center py-2 px-4">
        <Button
          variant={"outline"}
          className="bg-[#363636] h-fit text-xs py-1 rounded-sm border-white hover:bg-white hover:text-[#131313] focus:outline-none"
        >
          {type}
        </Button>
        <Link href={`${link}`} target="_blank" className="text-xs font-bold">
          <RiShareBoxLine className="w-4 h-4 fill-[#F37121]" />
        </Link>
      </div>
    </div>
  );
};

export default ResourceCard;
