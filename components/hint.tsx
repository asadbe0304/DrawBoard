import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@radix-ui/react-tooltip";

export interface HintProps {
  label: string;
  children: React.ReactNode;
  side?: "top" | 'bottom' | 'left' | 'right'
  align?: "start" | 'center' | 'end'
  sideOffset?: number;
  alignOffset?: number
}

export const Hint = ({ label, children, side, align, sideOffset, alignOffset }: HintProps) => {
  return (
    <TooltipProvider>
      <Tooltip delayDuration={100}>
        <TooltipTrigger>
          {children}
        </TooltipTrigger>
        <TooltipContent className="text-white rounded-md p-1 bg-black border-black" side={side} align={align} sideOffset={sideOffset} alignOffset={alignOffset}>
          <p className="capitalize font-normal">
            {label}
          </p>
        </TooltipContent>
      </Tooltip>
    </TooltipProvider>
  )
}