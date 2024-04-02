"use client"

import { Skeleton } from "@/components/ui/skeleton"

export const Participants = () => {
  return (
    <div className="h-12 absolute top-2 right-2 bg-white rounded-md p-3 flex items-center shadow-md">
      List of user
      </div>
  )
}

Participants.Skeleton = function InfoSkeleton(){
  return (
    <div className="absolute top-2 left-2 bg-white rounded-md px-1.5 h-12 flex items-center shadow-md ">
      <Skeleton className="h-full w-full bg-muted-400 w-[300]px"/>
    </div>
  )
}