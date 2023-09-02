"use client";

import { SimpleGrid } from "@chakra-ui/react";

import { ModeCardSkeleton, PageTitleSkeleton } from "@/components";

export default function Loading() {
  return (
    <>
      <PageTitleSkeleton withDesc />

      <SimpleGrid columns={{ base: 1, md: 2, xl: 3 }} spacing={{ base: 4, md: 6, xl: 8 }} py={{ base: 4, md: 8 }}>
        <ModeCardSkeleton />
        <ModeCardSkeleton />
        <ModeCardSkeleton />
        <ModeCardSkeleton />
        <ModeCardSkeleton />
      </SimpleGrid>
    </>
  );
}
