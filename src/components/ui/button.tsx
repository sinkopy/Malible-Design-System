import * as React from "react";
import { Slot } from "@radix-ui/react-slot";
import { cva, type VariantProps } from "class-variance-authority";
import { IconContext } from "@phosphor-icons/react";
import { cn } from "@/lib/utils";

const buttonVariants = cva(
  // Base styles
  [
    "relative inline-flex items-center justify-center gap-2",
    "whitespace-nowrap text-sm font-semibold",
    "rounded-lg transition-all duration-150",
    "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2",
    "disabled:pointer-events-none disabled:opacity-50",
    "active:scale-[0.98]",
    "[&_svg]:pointer-events-none [&_svg]:shrink-0",
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
          "text-info underline underline-offset-4 h-auto p-0",
          "focus-visible:ring-1 focus-visible:ring-info focus-visible:ring-offset-2 rounded",
        ],
      },
      size: {
        sm: "h-8 px-3 text-xs [&_svg]:size-[14px]",
        default: "h-9 px-4 py-2 [&_svg]:size-4",
        lg: "h-11 px-6 text-base [&_svg]:size-5",
        "icon-sm": "h-8 w-8 p-2 [&_svg]:size-4",
        icon: "h-9 w-9 p-2 [&_svg]:size-5",
        "icon-lg": "h-11 w-11 p-2.5 [&_svg]:size-6",
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
        <IconContext.Provider value={{ weight: "bold", mirrored: false }}>
          <span className="relative z-10 inline-flex items-center justify-center gap-2">
            {children}
          </span>
        </IconContext.Provider>
      </Comp>
    );
  }
);
Button.displayName = "Button";

export { Button, buttonVariants };
