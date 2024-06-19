"use client";

import { useRouter, useSearchParams } from "next/navigation";

import {
  Pagination,
  PaginationContent,
  PaginationEllipsis,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from "@/components/ui/pagination";

interface PaginationControlsProps {
  hasNextPage: boolean;
  hasPreviousPage: boolean;
}

const PaginationControls = ({hasNextPage, hasPreviousPage}: PaginationControlsProps) => {
  const router = useRouter();
  const searchParams = useSearchParams();

  const page = searchParams.get("page") ?? "1";
  const per_page = searchParams.get("per_page") ?? "9";
  const pages = Math.ceil(100 / Number(per_page));
  return (
    <Pagination>
      <PaginationContent>
        <PaginationItem  >
          <PaginationPrevious onClick={() => {if(hasPreviousPage){router.push(`/resources?page=${Number(page) - 1}&per_page=${per_page}`)}}}></PaginationPrevious>
        </PaginationItem>
        <PaginationItem>
          <PaginationLink onClick={() => router.push(`/resources?page=1&per_page=${per_page}`)}>{page}</PaginationLink>
        </PaginationItem>
        <PaginationItem>
          <PaginationEllipsis onClick={() => router.push(`/resources?page=2&per_page=${per_page}`)} />
        </PaginationItem>
        <PaginationItem>
          <PaginationNext onClick={() => {if( hasNextPage){router.push(`/resources?page=${Number(page) + 1}&per_page=${per_page}`)}}}/>
        </PaginationItem>
      </PaginationContent>
    </Pagination>
  );
};

export default PaginationControls;
