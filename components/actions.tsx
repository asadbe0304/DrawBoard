'use client'
import { DropdownMenuContentProps } from "@radix-ui/react-dropdown-menu";
import { DropdownMenu, DropdownMenuTrigger, DropdownMenuContent, DropdownMenuItem, DropdownMenuSeparator } from "./ui/dropdown-menu";
import { ConfirmModal } from "./confirm-modal";
import { Link2, Pencil, Trash2 } from "lucide-react";
import { toast } from "sonner";
import { useApiMutations } from "@/hooks/use-api-mutations";
import { api } from "@/convex/_generated/api";
import { Button } from "@/components/ui/button";
import { useRenameModal } from "@/store/use-rename-modal";

interface ActionProps {
  children: React.ReactNode;
  side?: DropdownMenuContentProps['side'],
  sideOffset?: DropdownMenuContentProps['sideOffset'],
  id: string,
  title: string,
}

export const Actions = ({
  children, side, sideOffset, id, title
}: ActionProps) => {
  const { onOpen } = useRenameModal()

  const { mutate, pending } = useApiMutations(api.board.remove)

  const onCopyLink = () => {
    navigator.clipboard.writeText(
      `${window.location.origin}/board${id}`,
    ).then(() => toast.success('Link copy')).catch(() => toast.error("Failed"))
  }
  const onDelete = () => {
    mutate({ id }).then(() => toast.success("Deleted Board")).catch(() => toast.error("Failed"))
  }

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        {children}
      </DropdownMenuTrigger>
      <DropdownMenuContent
        onClick={(e) => { e.stopPropagation() }}
        side={side}
        sideOffset={sideOffset}
        className={"w-60"}
      >
        <DropdownMenuItem onClick={onCopyLink} className="p-3 cursor-pointer">
          <Link2 className="h-4 w-4 mr-2" />
          Copy
        </DropdownMenuItem>
        <DropdownMenuItem onClick={() => onOpen(id, title)} className="p-3 cursor-pointer">
          <Pencil className="h-4 w-4 mr-2" />
          Edit Board
        </DropdownMenuItem>
        <ConfirmModal header="Delete Board" description="This will delete the board and all of its content" disabled={pending} onConfirm={onDelete}>
          <Button variant={'ghost'} className="p-3 cursor-pointer text-sm w-full justify-start font-normal">
            <Trash2 className="h-4 w-4 mr-2" />
            Delete
          </Button>
        </ConfirmModal>
      </DropdownMenuContent>
    </DropdownMenu>
  )
}
