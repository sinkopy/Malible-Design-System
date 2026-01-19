import * as React from "react";
import { cn } from "@/lib/utils";

export interface BoxProps extends React.HTMLAttributes<HTMLDivElement> {
    as?: React.ElementType;
}

/**
 * Box is a base polymorphic primitive for layout.
 * It provides a clean way to apply spacing and alignment without polluting semantic HTML.
 */
const Box = React.forwardRef<HTMLElement, BoxProps>(
    ({ className, as: Component = "div", ...props }, ref) => {
        return (
            <Component
                ref={ref}
                className={cn(className)}
                {...props}
            />
        );
    }
);
Box.displayName = "Box";

export { Box };
