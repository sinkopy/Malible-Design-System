import * as React from "react"
import * as TabsPrimitive from "@radix-ui/react-tabs"
import { cva, type VariantProps } from "class-variance-authority"
import { cn } from "@/lib/utils"

const Tabs = TabsPrimitive.Root

const tabsListVariants = cva(
  "inline-flex items-center p-0.5",
  {
    variants: {
      variant: {
        pill: "bg-accent rounded-[10px]",
        underline: "bg-transparent",
      },
    },
    defaultVariants: {
      variant: "pill",
    },
  }
)

interface TabsListProps
  extends React.ComponentPropsWithoutRef<typeof TabsPrimitive.List>,
  VariantProps<typeof tabsListVariants> { }

const TabsList = React.forwardRef<
  React.ElementRef<typeof TabsPrimitive.List>,
  TabsListProps
>(({ className, variant, ...props }, ref) => (
  <TabsPrimitive.List
    ref={ref}
    className={cn(tabsListVariants({ variant }), className)}
    {...props}
  />
))
TabsList.displayName = TabsPrimitive.List.displayName

const tabsTriggerVariants = cva(
  "inline-flex items-center justify-center gap-1 whitespace-nowrap px-2 py-1 text-sm font-semibold transition-all duration-150 min-h-[32px] min-w-[32px] disabled:pointer-events-none disabled:opacity-50",
  {
    variants: {
      variant: {
        pill: [
          "rounded-lg text-muted-foreground",
          "data-[state=active]:bg-background data-[state=active]:text-foreground",
          "data-[state=active]:border data-[state=active]:border-border",
          "data-[state=active]:shadow-xs",
        ],
        underline: [
          "text-muted-foreground",
          "data-[state=active]:text-info data-[state=active]:border-b-2 data-[state=active]:border-info",
        ],
      },
    },
    defaultVariants: {
      variant: "pill",
    },
  }
)

interface TabsTriggerProps
  extends React.ComponentPropsWithoutRef<typeof TabsPrimitive.Trigger>,
  VariantProps<typeof tabsTriggerVariants> { }

const TabsTrigger = React.forwardRef<
  React.ElementRef<typeof TabsPrimitive.Trigger>,
  TabsTriggerProps
>(({ className, variant, ...props }, ref) => (
  <TabsPrimitive.Trigger
    ref={ref}
    className={cn(tabsTriggerVariants({ variant }), className)}
    {...props}
  />
))
TabsTrigger.displayName = TabsPrimitive.Trigger.displayName

const TabsContent = React.forwardRef<
  React.ElementRef<typeof TabsPrimitive.Content>,
  React.ComponentPropsWithoutRef<typeof TabsPrimitive.Content>
>(({ className, ...props }, ref) => (
  <TabsPrimitive.Content
    ref={ref}
    className={cn(
      "mt-2 ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2",
      "animate-fade-in",
      className
    )}
    {...props}
  />
))
TabsContent.displayName = TabsPrimitive.Content.displayName

// Counter badge for tabs
const TabsCounter = React.forwardRef<
  HTMLSpanElement,
  React.HTMLAttributes<HTMLSpanElement>
>(({ className, ...props }, ref) => (
  <span
    ref={ref}
    className={cn(
      "inline-flex items-center justify-center size-4 rounded-full bg-muted text-xs font-semibold text-secondary-foreground",
      className
    )}
    {...props}
  />
))
TabsCounter.displayName = "TabsCounter"

export { Tabs, TabsList, TabsTrigger, TabsContent, TabsCounter }
