"use client";

import * as React from "react";
import * as CheckboxPrimitives from "@radix-ui/react-checkbox";
import { cn } from "@/lib/utils";

export interface CheckboxProps
  extends React.ComponentPropsWithoutRef<typeof CheckboxPrimitives.Root> {
  error?: boolean;
}

const Checkbox = React.forwardRef<
  React.ElementRef<typeof CheckboxPrimitives.Root>,
  CheckboxProps
>(({ className, error, ...props }, ref) => (
  <CheckboxPrimitives.Root
    ref={ref}
    className={cn(
      // Base - 16px × 16px square with 4px radius
      "peer h-4 w-4 shrink-0 rounded-[4px] border transition-colors duration-100",

      // Default state - gray border with hover
      "border-input bg-background hover:border-muted-foreground",

      // Checked state - primary fill (orange)
      "data-[state=checked]:border-primary data-[state=checked]:bg-primary data-[state=checked]:text-primary-foreground",

      // Indeterminate state - primary fill
      "data-[state=indeterminate]:border-primary data-[state=indeterminate]:bg-primary data-[state=indeterminate]:text-primary-foreground",

      // Focus ring - uses --ring token
      "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background",

      // Error state - red border and ring
      error && [
        "border-destructive",
        "focus-visible:ring-destructive",
        "data-[state=checked]:border-destructive data-[state=checked]:bg-destructive",
        "data-[state=indeterminate]:border-destructive data-[state=indeterminate]:bg-destructive",
      ],

      // Disabled state
      "disabled:cursor-not-allowed disabled:opacity-50",

      className
    )}
    {...props}
  >
    <CheckboxPrimitives.Indicator
      className={cn("flex items-center justify-center text-current animate-check-in")}
    >
      {props.checked === "indeterminate" ? (
        // Minus icon for indeterminate
        <svg
          width="10"
          height="2"
          viewBox="0 0 10 2"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M1 1H9"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
          />
        </svg>
      ) : (
        // Checkmark icon
        <svg
          width="10"
          height="8"
          viewBox="0 0 10 8"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M1 4L3.5 6.5L9 1"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      )}
    </CheckboxPrimitives.Indicator>
  </CheckboxPrimitives.Root>
));
Checkbox.displayName = CheckboxPrimitives.Root.displayName;

export { Checkbox };
