"use client";

import * as React from "react";
import * as RadioGroupPrimitives from "@radix-ui/react-radio-group";
import { cn } from "@/lib/utils";

const RadioGroup = React.forwardRef<
  React.ElementRef<typeof RadioGroupPrimitives.Root>,
  React.ComponentPropsWithoutRef<typeof RadioGroupPrimitives.Root>
>(({ className, ...props }, ref) => {
  return (
    <RadioGroupPrimitives.Root
      className={cn("grid gap-2", className)}
      {...props}
      ref={ref}
    />
  );
});
RadioGroup.displayName = RadioGroupPrimitives.Root.displayName;

export interface RadioGroupItemProps
  extends React.ComponentPropsWithoutRef<typeof RadioGroupPrimitives.Item> {
  error?: boolean;
}

const RadioGroupItem = React.forwardRef<
  React.ElementRef<typeof RadioGroupPrimitives.Item>,
  RadioGroupItemProps
>(({ className, error, ...props }, ref) => {
  return (
    <RadioGroupPrimitives.Item
      ref={ref}
      className={cn(
        // Base - 16px circle
        "aspect-square h-4 w-4 rounded-full border transition-colors duration-100",

        // Default state - gray border with hover
        "border-input bg-background hover:border-muted-foreground",

        // Checked state - primary border (orange)
        "data-[state=checked]:border-primary",

        // Focus ring - uses --ring token
        "focus:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background",

        // Error state - red border and ring
        error && [
          "border-destructive",
          "focus-visible:ring-destructive",
          "data-[state=checked]:border-destructive",
        ],

        // Disabled state
        "disabled:cursor-not-allowed disabled:opacity-50",

        className
      )}
      {...props}
    >
      <RadioGroupPrimitives.Indicator className="flex items-center justify-center animate-check-in">
        {/* Inner dot - 8px */}
        <div
          className={cn(
            "h-2 w-2 rounded-full",
            error ? "bg-destructive" : "bg-primary"
          )}
        />
      </RadioGroupPrimitives.Indicator>
    </RadioGroupPrimitives.Item>
  );
});
RadioGroupItem.displayName = RadioGroupPrimitives.Item.displayName;

export { RadioGroup, RadioGroupItem };
