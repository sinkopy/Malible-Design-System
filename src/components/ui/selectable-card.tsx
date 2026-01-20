import * as React from "react";
import { Check } from "@phosphor-icons/react";
import { cn } from "@/lib/utils";

interface SelectableCardProps {
    image?: string;
    label: string;
    selected?: boolean;
    onClick?: () => void;
    className?: string;
}

function SelectableCard({
    image,
    label,
    selected = false,
    onClick,
    className,
}: SelectableCardProps) {
    return (
        <button
            type="button"
            onClick={onClick}
            className={cn(
                "relative flex flex-col items-center p-2 rounded-lg text-left transition-all",
                selected
                    ? "border-2 border-primary bg-primary/5"
                    : "border-2 border-border hover:border-primary/50 hover:bg-accent/50",
                className
            )}
        >
            {/* Selection indicator */}
            {selected && (
                <div className="absolute top-2 right-2 size-5 rounded bg-primary flex items-center justify-center">
                    <Check className="size-3 text-primary-foreground" weight="bold" />
                </div>
            )}

            {/* Thumbnail */}
            {image ? (
                <div className="w-full aspect-video mb-2 rounded overflow-hidden bg-muted">
                    <img
                        src={image}
                        alt={label}
                        className="w-full h-full object-cover"
                    />
                </div>
            ) : (
                <div className="w-full aspect-video mb-2 rounded bg-muted/30 flex flex-col items-center justify-center gap-1">
                    <div className="w-12 h-1 bg-muted rounded-full" />
                    <div className="w-8 h-1 bg-muted rounded-full" />
                </div>
            )}

            {/* Label */}
            <span
                className={cn(
                    "text-[13px] font-medium text-center truncate w-full",
                    selected ? "text-primary" : "text-foreground"
                )}
            >
                {label}
            </span>
        </button>
    );
}

SelectableCard.displayName = "SelectableCard";

export { SelectableCard, type SelectableCardProps };
