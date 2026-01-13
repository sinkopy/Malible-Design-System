import * as React from "react";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/lib/utils";

const badgeVariants = cva(
  // Base styles - pill shape, inline-flex
  "inline-flex items-center gap-1 rounded-full font-medium transition-colors",
  {
    variants: {
      variant: {
        default: "bg-muted text-muted-foreground",
        info: "bg-info-subtle text-info",
        "info-solid": "bg-info text-info-foreground",
        success: "bg-success-subtle text-success",
        "success-solid": "bg-success text-success-foreground",
        warning: "bg-warning-subtle text-warning",
        "warning-solid": "bg-warning text-warning-foreground",
        destructive: "bg-destructive-subtle text-destructive",
        "destructive-solid": "bg-destructive text-destructive-foreground",
        outline: "border border-border text-foreground bg-transparent",
      },
      size: {
        sm: "h-5 px-2 text-xs",
        default: "h-6 px-2.5 text-sm",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  }
);

export interface BadgeProps
  extends React.HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof badgeVariants> {
  /** Optional icon to display before the label */
  icon?: React.ReactNode;
}

function Badge({ className, variant, size, icon, children, ...props }: BadgeProps) {
  return (
    <div className={cn(badgeVariants({ variant, size }), className)} {...props}>
      {icon && (
        <span className={cn(
          "shrink-0",
          size === "sm" ? "[&>svg]:h-3 [&>svg]:w-3" : "[&>svg]:h-3.5 [&>svg]:w-3.5"
        )}>
          {icon}
        </span>
      )}
      {children}
    </div>
  );
}

export { Badge, badgeVariants };
