'use client'
import { api } from "@/convex/_generated/api";
import { useApiMutations } from "@/hooks/use-api-mutations";
import { cn } from "@/lib/utils";
import { useMutation } from "convex/react";
import { Plus } from "lucide-react";
import { toast } from "sonner";

interface NewBoardButtonProp {
  orgId: string;
  disabled?: boolean;
}


export const NewBoardButton = ({ orgId, disabled }: NewBoardButtonProp) => {

  const { mutate, pending } = useApiMutations(api.board.create)

  const onClick = () => {
    mutate({
      orgId,
      title: 'Untitled'
    }).then((id) => {
      toast.success('Board Create')
    }).catch(() => toast.error('Failed'))
  }
  return (
    <button className={cn('col-span-1 aspect-[100/127] bg-blue-600 rounded-lg hover:bg-blue-800 flex flex-col items-center justify-center py-6', (pending || disabled) && 'opacity-75 cursor-not-allowed')} onClick={onClick} disabled={pending || disabled} >
      <Plus className="text-white h-12 w-12  stroke-1" />
      <p className="text-sm text-white font-light">
        New Board
      </p>
    </button>
  )
}