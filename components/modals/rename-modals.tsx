'use client';

import { Dialog, DialogClose, DialogContent, DialogDescription, DialogFooter, DialogHeader, DialogTrigger, DialogTitle } from "@/components/ui/dialog";
import { useRenameModal } from "@/store/use-rename-modal";
import { useState, useEffect, FormEventHandler } from "react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { useApiMutations } from "@/hooks/use-api-mutations";
import { toast } from "sonner";
import { api } from "@/convex/_generated/api";

export const RenameModal = () => {
  const { mutate, pending } = useApiMutations(api.board.update)

  const {
    isOpen,
    onClose,
    initialValues,
  } = useRenameModal();
  const [title, setTitle] = useState(initialValues.title)
  useEffect(() => {
    setTitle(initialValues.title)
  }, [initialValues.title])

  const onSubmit: FormEventHandler<HTMLFormElement> = (e,) => {
    e.preventDefault()
    mutate({
      id: initialValues.id,
      title,
    }).then(() => { toast.success("Renamed Baord") }).catch(() => toast.error('Failed'))
  }
  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>
            Edit Board title
          </DialogTitle>
          <DialogDescription>
            Enter new title for this board
          </DialogDescription>
          <form onSubmit={onSubmit} className="space-y-4">
            <Input disabled={pending} required maxLength={60} value={title} onChange={(e) => setTitle(e.target.value)} placeholder="Board title" />
            <DialogFooter>
              <DialogClose asChild>
                <Button type={'button'} variant={'outline'} >
                  Cancel
                </Button>
              </DialogClose>
              <Button disabled={pending} type="submit" >Save</Button>
            </DialogFooter>
          </form>
        </DialogHeader>
      </DialogContent>
    </Dialog>
  )
}

