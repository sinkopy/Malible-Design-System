import * as React from "react";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/lib/utils";

const textVariants = cva("", {
    variants: {
        size: {
            xs: "text-xs",
            sm: "text-sm",
            base: "text-base",
            lg: "text-lg",
            xl: "text-xl",
            "2xl": "text-2xl",
        },
        weight: {
            light: "font-light",
            normal: "font-normal",
            medium: "font-medium",
            semibold: "font-semibold",
            bold: "font-bold",
        },
        variant: {
            default: "text-foreground",
            muted: "text-muted-foreground",
            secondary: "text-secondary-foreground",
            destructive: "text-destructive",
            accent: "text-accent-foreground",
        },
        align: {
            left: "text-left",
            center: "text-center",
            right: "text-right",
        },
    },
    defaultVariants: {
        size: "base",
        weight: "normal",
        variant: "default",
        align: "left",
    },
});

export interface TextProps
    extends React.HTMLAttributes<HTMLElement>,
    VariantProps<typeof textVariants> {
    as?: React.ElementType;
    italic?: boolean;
    underlined?: boolean;
}

const Text = React.forwardRef<HTMLElement, TextProps>(
    ({ className, size, weight, variant, align, italic, underlined, as: Component = "p", ...props }, ref) => {
        return (
            <Component
                ref={ref}
                className={cn(
                    textVariants({ size, weight, variant, align, className }),
                    italic && "italic",
                    underlined && "underline"
                )}
                {...props}
            />
        );
    }
);
Text.displayName = "Text";

export { Text, textVariants };
