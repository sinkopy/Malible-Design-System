import * as React from "react";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/lib/utils";

const stackVariants = cva("flex flex-col", {
    variants: {
        align: {
            start: "items-start",
            center: "items-center",
            end: "items-end",
            stretch: "items-stretch",
        },
        justify: {
            start: "justify-start",
            center: "justify-center",
            end: "justify-end",
            between: "justify-between",
        },
        gap: {
            0: "gap-0",
            0.5: "gap-0.5",
            1: "gap-1",
            1.5: "gap-1.5",
            2: "gap-2",
            3: "gap-3",
            4: "gap-4",
            5: "gap-5",
            6: "gap-6",
            8: "gap-8",
            10: "gap-10",
            12: "gap-12",
            16: "gap-16",
        },
    },
    defaultVariants: {
        align: "stretch",
        justify: "start",
        gap: 4,
    },
});

export interface StackProps
    extends React.HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof stackVariants> {
    as?: React.ElementType;
}

/**
 * Stack is a specialized Flex component for vertical spacing.
 */
const Stack = React.forwardRef<HTMLElement, StackProps>(
    ({ className, align, justify, gap, as: Component = "div", ...props }, ref) => {
        return (
            <Component
                ref={ref}
                className={cn(stackVariants({ align, justify, gap, className }))}
                {...props}
            />
        );
    }
);
Stack.displayName = "Stack";

export { Stack, stackVariants };
