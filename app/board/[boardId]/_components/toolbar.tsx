"use client"

import { Skeleton } from "@/components/ui/skeleton"

export const Toolbar = () => {
  return (
    <div className="absolute top-[50%] -translate-y-[50%] left-2 flex flex-col gap-y-4">
      <div className="bg-white rounded-md p-1.5 flex gap-y-1 flex-col items-center shadow-md">
        <div>
          Pencil
        </div>
        <div>
          Square
        </div>
        <div>
          Circle
        </div>
        <div>
          Elipsis
        </div>
      </div>
      <div className="bg-white rounded-md p-1.5 flex flex-col items-center shadow-md">
        <div>Undo</div>
        <div>Redo</div>
      </div>
    </div>
  )
}

Toolbar.Skeleton = function InfoSkeleton(){
  return (
    <div className="absolute top-2 left-2 bg-white rounded-md px-1.5 h-50 flex items-center shadow-md ">
      <Skeleton className="h-full w-full bg-muted-400 w-[40]px h-[300]px"/>
    </div>
  )
}