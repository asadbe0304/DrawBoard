'use client';

import { Info } from "./info";
import { Participants } from "./partipicants";
import { Toolbar } from "./toolbar";

interface CanvasProps {
  boardId: string;
}
export const Canvas = ({ boardId }: CanvasProps) => {
  return (
    <main className="h-full w-full realtive bg-neutral-100 touch-none ">
      <Info />
      <Participants />
      <Toolbar />
    </main>
  )
}