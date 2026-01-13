import * as React from "react";
import { Slot } from "@radix-ui/react-slot";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/lib/utils";

const buttonVariants = cva(
  // Base styles
  [
    "relative inline-flex items-center justify-center gap-2",
    "whitespace-nowrap text-sm font-medium",
    "rounded-lg transition-all duration-150",
    "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2",
    "disabled:pointer-events-none disabled:opacity-50",
    "[&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0",
  ],
  {
    variants: {
      variant: {
        default: [
          "bg-primary text-primary-foreground",
          "shadow-button-onfill-default",
          // Hover: 12% black overlay using pseudo-element
          "before:absolute before:inset-0 before:rounded-lg before:bg-black before:opacity-0 before:transition-opacity",
          "hover:before:opacity-[0.12]",
          "hover:shadow-button-onfill-hover",
          // Active: pressed effect
          "active:shadow-button-onfill-active",
          "active:before:opacity-[0.15]",
        ],
        destructive: [
          "bg-destructive text-destructive-foreground",
          "shadow-button-onfill-default",
          // Same hover pattern
          "before:absolute before:inset-0 before:rounded-lg before:bg-black before:opacity-0 before:transition-opacity",
          "hover:before:opacity-[0.12]",
          "hover:shadow-button-onfill-hover",
          "active:shadow-button-onfill-active",
          "active:before:opacity-[0.15]",
        ],
        secondary: [
          "bg-secondary text-secondary-foreground",
          "shadow-button-onlight-default",
          "border border-border",
          // Hover: slight darkening
          "before:absolute before:inset-0 before:rounded-lg before:bg-black before:opacity-0 before:transition-opacity",
          "hover:before:opacity-[0.05]",
          "hover:shadow-button-onlight-hover",
          "active:shadow-button-onlight-active",
          "active:before:opacity-[0.08]",
        ],
        ghost: [
          "text-foreground",
          // Hover: light gray background
          "hover:bg-accent hover:text-accent-foreground",
          "active:bg-accent/80",
        ],
        link: [
          "text-primary underline-offset-4",
          "hover:underline",
        ],
        outline: [
          "border border-input bg-background text-foreground",
          "hover:bg-accent hover:text-accent-foreground",
          "active:bg-accent/80",
        ],
      },
      size: {
        sm: "h-8 px-3 text-xs",
        default: "h-9 px-4 py-2",
        lg: "h-11 px-6 text-base",
        icon: "h-9 w-9 p-0",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  }
);

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean;
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, asChild = false, children, ...props }, ref) => {
    const Comp = asChild ? Slot : "button";
    return (
      <Comp
        className={cn(buttonVariants({ variant, size, className }))}
        ref={ref}
        {...props}
      >
        {/* Content needs z-index to appear above the overlay */}
        <span className="relative z-10 inline-flex items-center justify-center gap-2">
          {children}
        </span>
      </Comp>
    );
  }
);
Button.displayName = "Button";

export { Button, buttonVariants };
