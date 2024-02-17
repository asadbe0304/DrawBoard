'use client'
import { Plus } from "lucide-react";
import { CreateOrganization } from "@clerk/nextjs";
import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog";
import { Hint } from "@/components/hint";


const newButton = () => {
  return (
    <>
      <Dialog>
        <DialogTrigger asChild>
          <div className="aspect-square w-9 h-9">
            <Hint label={"Create organization"} side="right" align="start" sideOffset={18}>
              <button className="bg-white/25 h-9 w-9 rounded-md opacity-50 hover:opacity-100 transition flex justify-center items-center">
                <Plus className="text-white w-9 h-9" />
              </button>
            </Hint>
          </div>
        </DialogTrigger>
        <DialogContent className="p-0 bg-transparent border-none max-w-[480px]">
          <CreateOrganization />
        </DialogContent>
      </Dialog>
    </>
  );
}
export default newButton;