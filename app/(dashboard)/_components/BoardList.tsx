'use client'

import { EmptyFavorites } from "./empty-favorites";
import { EmptySearch } from "./empty-search";
import { NoBoard } from "./noboard";

interface BaordListProps {
  orgId: string;
  query: {
    search?: string;
    favorites?: string;
  }

}

export const BoardList = ({ orgId, query }: BaordListProps) => {
  const data = []
  if (!data?.length && query.search) {
    return (
      <EmptySearch />
    )
  }
  if (!data?.length && query.favorites) {
    return (
      <EmptyFavorites />
    )
  }
  if (!data?.length) {
    return (
      <NoBoard />
    )
  }

  return (
    <div>
      {JSON.stringify(query)}
    </div>
  )
}