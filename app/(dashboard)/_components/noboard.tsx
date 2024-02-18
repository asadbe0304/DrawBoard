'use client'

import { Button } from "@/components/ui/button";
import { CreateOrganization } from "@clerk/nextjs";
import Image from "next/image";


export const NoBoard = () => {
  return (
    <div className="h-full flex flex-col items-center justify-center">
      <Image src={'/note.svg'} alt="search icon" width={110} height={110} />
      <h2 className="text-2xl font-semibold mt-6">
        Create you First Board
      </h2>
      <p className="text-muted-foreground textg-sm mt-2">
        Try Somethings
      </p>
      <div className="mt-6">
        <Button size='lg'>
          Create Board
        </Button>
      </div>
    </div>
  )
}