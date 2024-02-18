'use client'

import { Button } from "@/components/ui/button"
import { CreateOrganization } from "@clerk/nextjs"
import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog"
import Image from "next/image"

export const EmptyOrg = () => {
  return (
    <div className="h-full flex flex-col items-center justify-center">
      <Image src={'/elements.svg'} alt="elements svg icon" width={200} height={200} />
      <h2 className="text-2xl font-semibold mt-6">
        Welcome to board
      </h2>
      <p className="text-muted-foreground text-sm mt-2">
        Create Organization to get started
      </p>
      <div className="mt-6">
        <Dialog>
          <DialogTrigger asChild>
            <Button>Create An Organization</Button>
          </DialogTrigger>
          <DialogContent className="p-0 bg-transparent border-none max-w-[480px]">
            <CreateOrganization/>
          </DialogContent>
        </Dialog>
      </div>
    </div>
  )
}