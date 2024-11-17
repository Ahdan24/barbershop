"use client";
import {
  Pagination,
  PaginationContent,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from "@/components/ui/pagination";
import { useRouter, useSearchParams } from "next/navigation";
import { FC } from "react";

interface PaginatiosnSectionProps {
  total: number;
  limit: number;
}

const PaginationSection: FC<PaginatiosnSectionProps> = ({ total, limit }) => {
  const router = useRouter();
  const searchParams = useSearchParams();

  const currentPage = parseInt(String(searchParams.get("page"))) || 1;

  const handleNextPage = () => {
    if (currentPage < Math.ceil(total / limit)) {
      router.push(`?page=${currentPage + 1}`);
    }
  };

  const handlePrevPage = () => {
    if (currentPage > 1) {
      router.push(`?page=${currentPage - 1}`);
    }
  };
  return (
    <Pagination className=" bg-gray-800 pb-10">
      <PaginationContent>
        <PaginationItem>
          <PaginationPrevious onClick={handlePrevPage} />
        </PaginationItem>

        <PaginationItem>
          <PaginationLink>{currentPage}</PaginationLink>
        </PaginationItem>

        <PaginationItem>
          <PaginationNext onClick={handleNextPage} />
        </PaginationItem>
      </PaginationContent>
    </Pagination>
  );
};

export default PaginationSection;
