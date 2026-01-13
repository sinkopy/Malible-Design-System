import * as React from "react";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/lib/utils";

const badgeVariants = cva(
  // Base styles - pill shape, inline-flex
  "inline-flex items-center gap-1 rounded-full font-medium transition-colors",
  {
    variants: {
      variant: {
        // Neutral - gray
        neutral: "bg-muted text-muted-foreground",
        
        // Info - blue
        info: "bg-info/10 text-info",
        
        // Success - green
        success: "bg-success/10 text-success",
        
        // Warning - amber
        warning: "bg-warning/10 text-warning-foreground",
        
        // Critical - red
        critical: "bg-destructive/10 text-destructive",
        
        // Solid variants (filled background)
        "neutral-solid": "bg-secondary-foreground text-background",
        "info-solid": "bg-info text-info-foreground",
        "success-solid": "bg-success text-success-foreground",
        "warning-solid": "bg-warning text-warning-foreground",
        "critical-solid": "bg-destructive text-destructive-foreground",
      },
      size: {
        sm: "h-5 px-2 text-xs",
        default: "h-6 px-2.5 text-sm",
      },
    },
    defaultVariants: {
      variant: "neutral",
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
