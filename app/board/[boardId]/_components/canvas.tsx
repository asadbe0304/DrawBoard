'use client';

import { Info } from "./info";
import { Participants } from "./partipicants";
import { Toolbar } from "./toolbar";
import { useSelf } from "@/liveblocks.config";

interface CanvasProps {
  boardId: string;
}
export const Canvas = ({ boardId }: CanvasProps) => {
const info =useSelf((me)=> me.info) 
// console.log(info);

  return (
    <main className="h-full w-full realtive bg-neutral-100 touch-none ">
      <Info boardId={boardId} />
      <Participants />
      <Toolbar />
    </main>
  )
}