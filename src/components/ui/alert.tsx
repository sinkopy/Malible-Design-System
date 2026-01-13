import * as React from "react"
import { cva, type VariantProps } from "class-variance-authority"
import { Info, CheckCircle, Warning, WarningCircle } from "@phosphor-icons/react"
import { cn } from "@/lib/utils"

const alertVariants = cva(
  "relative w-full rounded-lg p-3 flex gap-2 items-start shadow-sm",
  {
    variants: {
      variant: {
        default: "bg-background border border-border text-foreground",
        info: "bg-info-subtle text-foreground",
        success: "bg-success-subtle text-foreground",
        warning: "bg-warning-subtle text-foreground",
        destructive: "bg-destructive-subtle text-foreground",
      },
    },
    defaultVariants: {
      variant: "default",
    },
  }
)

const iconMap = {
  default: Info,
  info: Info,
  success: CheckCircle,
  warning: Warning,
  destructive: WarningCircle,
}

const iconColorMap = {
  default: "text-foreground",
  info: "text-info",
  success: "text-success",
  warning: "text-warning",
  destructive: "text-destructive",
}

interface AlertProps
  extends React.HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof alertVariants> {
  showIcon?: boolean
}

const Alert = React.forwardRef<HTMLDivElement, AlertProps>(
  ({ className, variant = "default", showIcon = true, children, ...props }, ref) => {
    const Icon = iconMap[variant || "default"]
    const iconColor = iconColorMap[variant || "default"]
    
    return (
      <div
        ref={ref}
        role="alert"
        className={cn(alertVariants({ variant }), className)}
        {...props}
      >
        {showIcon && <Icon size={20} className={cn("shrink-0 mt-0.5", iconColor)} weight="fill" />}
        <div className="flex-1 space-y-0.5">{children}</div>
      </div>
    )
  }
)
Alert.displayName = "Alert"

const AlertTitle = React.forwardRef<
  HTMLParagraphElement,
  React.HTMLAttributes<HTMLHeadingElement> & { variant?: "default" | "destructive" }
>(({ className, variant = "default", ...props }, ref) => (
  <h5
    ref={ref}
    className={cn(
      "text-sm font-semibold leading-5 tracking-tight",
      variant === "destructive" ? "text-destructive" : "text-foreground",
      className
    )}
    {...props}
  />
))
AlertTitle.displayName = "AlertTitle"

const AlertDescription = React.forwardRef<
  HTMLParagraphElement,
  React.HTMLAttributes<HTMLParagraphElement>
>(({ className, ...props }, ref) => (
  <p
    ref={ref}
    className={cn("text-xs leading-[14px] tracking-tight text-muted-foreground", className)}
    {...props}
  />
))
AlertDescription.displayName = "AlertDescription"

export { Alert, AlertTitle, AlertDescription }
