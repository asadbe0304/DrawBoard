'use client'

import { Button } from "@/components/ui/button";
import { useMutation } from "convex/react";
import { api } from "@/convex/_generated/api";

import Image from "next/image";
import { useOrganization } from "@clerk/nextjs";
import { useApiMutations } from "@/hooks/use-api-mutations";
import { toast } from "sonner";
import { useRouter } from "next/navigation";

export const NoBoard = () => {
  const router = useRouter()
  const { organization } = useOrganization()
  const { mutate, pending } = useApiMutations(api.board.create);

  const onClick = () => {
    if (!organization) return
    mutate({
      orgId: organization.id,
      title: 'Untitled'
    })
      .then((id) => {
        toast.success("Successfuly Board")
        router.push(`board/${id}`)
      }).catch(() =>
        toast.error("Failed To Create")
      )
  }

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
        <Button disabled={pending} onClick={onClick} size='lg'>
          Create Board
        </Button>
      </div>
    </div>
  )
}