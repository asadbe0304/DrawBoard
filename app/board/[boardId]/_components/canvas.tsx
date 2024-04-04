'use client';

import { useState } from "react";
import { Info } from "./info";
import { Participants } from "./partipicants";
import { Toolbar } from "./toolbar";
import { useHistory, useSelf, useCanRedo, useCanUndo } from "@/liveblocks.config";
import { CanvasMode, CanvasState } from "@/types/canvas";

interface CanvasProps {
  boardId: string;
}
export const Canvas = ({ boardId }: CanvasProps) => {
  const info = useSelf((me) => me.info)
  // console.log(info);
  const [canvasState, setCanvasState] = useState<CanvasState>({
    mode: CanvasMode.None
  })

  const history = useHistory()
  const canUndo = useCanUndo()
  const canRedo = useCanRedo()

  return (
    <main className="h-full w-full realtive bg-neutral-100 touch-none ">
      <Info boardId={boardId} />
      <Participants />
      <Toolbar
        canvasState={canvasState}
        setCanvasState={setCanvasState}
        canRedo={false}
        canUndo={false}
        undo={history.undo}
        redo={history.redo}
      />
    </main>
  )
}