"use client";

import * as React from "react";
import * as SwitchPrimitives from "@radix-ui/react-switch";
import { cn } from "@/lib/utils";

const Switch = React.forwardRef<
  React.ElementRef<typeof SwitchPrimitives.Root>,
  React.ComponentPropsWithoutRef<typeof SwitchPrimitives.Root>
>(({ className, ...props }, ref) => (
  <SwitchPrimitives.Root
    className={cn(
      // Base - 44px × 24px track
      "peer inline-flex h-6 w-11 shrink-0 cursor-pointer items-center",
      "rounded-full border-2 border-transparent transition-colors",
      
      // Unchecked state - gray track
      "bg-input",
      
      // Checked state - success color (green #3ea377)
      "data-[state=checked]:bg-success",
      
      // Focus ring - uses --ring token
      "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background",
      
      // Disabled state
      "disabled:cursor-not-allowed disabled:opacity-50",
      
      className
    )}
    {...props}
    ref={ref}
  >
    <SwitchPrimitives.Thumb
      className={cn(
        // Thumb - 20px circle
        "pointer-events-none block h-5 w-5 rounded-full bg-background shadow-lg ring-0 transition-transform",
        
        // Unchecked position
        "data-[state=unchecked]:translate-x-0",
        
        // Checked position - move right
        "data-[state=checked]:translate-x-5"
      )}
    />
  </SwitchPrimitives.Root>
));
Switch.displayName = SwitchPrimitives.Root.displayName;

export { Switch };
