import * as React from "react";
import { cn } from "@/lib/utils";

export interface InputProps
  extends React.InputHTMLAttributes<HTMLInputElement> {
  error?: boolean;
  errorMessage?: string;
  helpText?: string;
  prefix?: React.ReactNode;
  suffix?: React.ReactNode;
}

const Input = React.forwardRef<HTMLInputElement, InputProps>(
  (
    {
      className,
      type,
      error,
      errorMessage,
      helpText,
      prefix,
      suffix,
      disabled,
      readOnly,
      ...props
    },
    ref
  ) => {
    return (
      <div className="flex flex-col gap-1 w-full">
        {/* Input Container */}
        <div
          className={cn(
            // Base - 40px height, 8px radius (different from button's 12px)
            "flex h-10 w-full items-center gap-2 rounded-lg px-3 py-2",
            "text-sm transition-colors",
            
            // Default state
            "bg-background border border-border",
            
            // Hover state
            "hover:bg-secondary hover:border-input",
            
            // Focus state - uses --ring token
            "focus-within:bg-secondary focus-within:border-ring",
            "focus-within:shadow-input-focus",
            
            // Error state - uses --destructive token
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

        {/* Error Message */}
        {error && errorMessage && (
          <div className="flex items-center gap-1">
            <svg
              className="h-2 w-2 shrink-0 fill-destructive"
              viewBox="0 0 8 8"
              xmlns="http://www.w3.org/2000/svg"
            >
              <circle cx="4" cy="4" r="4" />
            </svg>
            <span className="text-xs font-medium text-destructive">
              {errorMessage}
            </span>
          </div>
        )}

        {/* Help Text */}
        {helpText && !(error && errorMessage) && (
          <span className="text-sm text-muted-foreground">{helpText}</span>
        )}
      </div>
    );
  }
);
Input.displayName = "Input";

export { Input };
