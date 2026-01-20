import * as React from "react";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/lib/utils";

const headingVariants = cva("font-heading", {
    variants: {
        level: {
            1: "text-3xl leading-10 font-medium tracking-tight",
            2: "text-2xl leading-8 font-semibold tracking-tight",
            3: "text-xl leading-6 font-semibold tracking-[-0.015em]",
            4: "text-xl leading-6 font-semibold tracking-[-0.015em]",
            5: "text-xs leading-4 font-normal font-body",
            6: "text-xs leading-4 font-normal font-body",
        },
        variant: {
            default: "text-foreground",
            muted: "text-muted-foreground",
            accent: "text-accent-foreground",
        },
    },
    defaultVariants: {
        level: 1,
        variant: "default",
    },
});

export interface HeadingProps
    extends React.HTMLAttributes<HTMLHeadingElement>,
    VariantProps<typeof headingVariants> {
    as?: React.ElementType;
}

const Heading = React.forwardRef<HTMLHeadingElement, HeadingProps>(
    ({ className, level = 1, variant, as, ...props }, ref) => {
        // Map level to semantic HTML tag (h1-h6)
        const Tag = as || (`h${level}` as keyof JSX.IntrinsicElements);
        
        return (
            <Tag
                ref={ref}
                className={cn(headingVariants({ level, variant, className }))}
                {...props}
            />
        );
    }
);
Heading.displayName = "Heading";

export { Heading, headingVariants };
