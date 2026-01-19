import * as React from "react"
import { cn } from "@/lib/utils"

export interface TextareaProps
  extends React.TextareaHTMLAttributes<HTMLTextAreaElement> {
  error?: boolean
}

const Textarea = React.forwardRef<HTMLTextAreaElement, TextareaProps>(
  ({ className, error, ...props }, ref) => {
    return (
      <textarea
        className={cn(
          "flex min-h-[80px] w-full rounded-lg border bg-background px-3 py-2 text-sm transition-colors",
          "placeholder:text-muted-foreground",
          "hover:bg-secondary hover:border-input",
          "focus-visible:outline-none focus-visible:border-ring focus-visible:shadow-input-focus",
          "disabled:cursor-not-allowed disabled:bg-muted disabled:border-transparent",
          "resize-y",
          error && "border-destructive shadow-input-error hover:border-destructive focus-visible:border-destructive",
          !error && "border-border",
          className
        )}
        ref={ref}
        {...props}
      />
    )
  }
)
Textarea.displayName = "Textarea"

export { Textarea }
