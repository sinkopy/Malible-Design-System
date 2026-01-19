import * as React from "react";
import { cn } from "@/lib/utils";
import { Label } from "@/components/ui/label";

export interface FormFieldProps {
    label?: string;
    helpText?: string;
    error?: boolean;
    errorMessage?: string;
    children: React.ReactNode;
    className?: string;
}

const FormField = React.forwardRef<HTMLDivElement, FormFieldProps>(
    ({ label, helpText, error, errorMessage, children, className }, ref) => {
        // We attempt to find the ID of the child input to link the label
        const childId = React.isValidElement(children) ? (children.props as any).id : undefined;

        return (
            <div ref={ref} className={cn("grid w-full items-start gap-1.5", className)}>
                {label && (
                    <Label
                        htmlFor={childId}
                        className={cn(error && "text-destructive")}
                    >
                        {label}
                    </Label>
                )}
                <div className="relative w-full">
                    {children}
                </div>
                {error && errorMessage ? (
                    <div className="flex items-center gap-1 mt-1">
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
                ) : (
                    helpText && (
                        <p className="text-[13px] text-muted-foreground mt-1 leading-snug">
                            {helpText}
                        </p>
                    )
                )}
            </div>
        );
    }
);

FormField.displayName = "FormField";

export { FormField };
