import * as React from "react";
import { cn } from "@/lib/utils";

export interface InputProps
  extends Omit<React.InputHTMLAttributes<HTMLInputElement>, "prefix"> {
  error?: boolean;
  prefix?: React.ReactNode;
  suffix?: React.ReactNode;
}

const Input = React.forwardRef<HTMLInputElement, InputProps>(
  (
    {
      className,
      type,
      error,
      prefix,
      suffix,
      disabled,
      readOnly,
      ...props
    },
    ref
  ) => {
    return (
      <div
        className={cn(
          // Base - 40px height, 8px radius
          "flex h-10 w-full items-center gap-2 rounded-lg px-3 py-2",
          "text-sm transition-colors",

          // Default state
          "bg-background border border-border",

          // Hover state
          "hover:bg-secondary hover:border-input",

          // Focus state
          "focus-within:bg-secondary focus-within:border-ring",
          "focus-within:shadow-input-focus",

          // Error state
          error && [
            "border-destructive shadow-input-error",
            "hover:border-destructive",
            "focus-within:border-destructive focus-within:shadow-input-error",
          ],

          // Disabled state
          disabled && [
            "bg-muted border-transparent cursor-not-allowed",
            "hover:bg-muted hover:border-transparent",
          ],

          // Read only state
          readOnly && [
            "bg-muted border-transparent",
            "hover:bg-muted hover:border-transparent",
          ],

          className
        )}
      >
        {/* Prefix */}
        {prefix && (
          <div className="flex items-center justify-center shrink-0 text-muted-foreground [&>svg]:h-4 [&>svg]:w-4">
            {prefix}
          </div>
        )}

        {/* Input Element */}
        <input
          type={type}
          className={cn(
            "flex-1 bg-transparent outline-none min-w-0",
            "text-secondary-foreground placeholder:text-muted-foreground",
            "focus:text-foreground",
            (disabled || readOnly) && "text-muted-foreground cursor-not-allowed"
          )}
          ref={ref}
          disabled={disabled}
          readOnly={readOnly}
          {...props}
        />

        {/* Suffix */}
        {suffix && (
          <div className="flex items-center justify-center shrink-0 text-muted-foreground [&>svg]:h-4 [&>svg]:w-4 [&>button]:p-0 [&>button]:bg-transparent [&>button]:border-none">
            {suffix}
          </div>
        )}
      </div>
    );
  }
);
Input.displayName = "Input";

export { Input };
