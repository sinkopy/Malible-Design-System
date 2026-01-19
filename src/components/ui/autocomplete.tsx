import * as React from "react";
import { MagnifyingGlass, CaretDown, Check } from "@phosphor-icons/react";
import { cn } from "@/lib/utils";
import { Input } from "@/components/ui/input";
import {
    Popover,
    PopoverContent,
    PopoverTrigger,
    PopoverAnchor,
} from "@/components/ui/popover";
import { ScrollArea } from "@/components/ui/scroll-area";

export interface AutoCompleteOption {
    value: string;
    label: string;
}

export interface AutoCompleteProps {
    options: AutoCompleteOption[];
    value?: string;
    onValueChange?: (value: string) => void;
    placeholder?: string;
    emptyMessage?: string;
    className?: string;
    disabled?: boolean;
}

const AutoComplete = React.forwardRef<HTMLDivElement, AutoCompleteProps>(
    (
        {
            options,
            value,
            onValueChange,
            placeholder = "Search...",
            emptyMessage = "No results found.",
            className,
            disabled,
        },
        ref
    ) => {
        const [open, setOpen] = React.useState(false);
        const [searchValue, setSearchValue] = React.useState("");

        const filteredOptions = options.filter((option) =>
            option.label.toLowerCase().includes(searchValue.toLowerCase())
        );

        const selectedOption = options.find((opt) => opt.value === value);

        const handleSelect = (optionValue: string) => {
            onValueChange?.(optionValue);
            setOpen(false);
            setSearchValue("");
        };

        return (
            <div className={cn("relative w-full", className)} ref={ref}>
                <Popover open={open} onOpenChange={setOpen}>
                    <PopoverAnchor asChild>
                        <Input
                            placeholder={placeholder}
                            value={open ? searchValue : selectedOption?.label ?? ""}
                            onChange={(e) => {
                                setSearchValue(e.target.value);
                                if (!open) setOpen(true);
                            }}
                            onFocus={() => {
                                setOpen(true);
                                setSearchValue("");
                            }}
                            disabled={disabled}
                            prefix={<MagnifyingGlass />}
                            suffix={<CaretDown className={cn("h-4 w-4 transition-transform", open && "rotate-180")} />}
                            autoComplete="off"
                        />
                    </PopoverAnchor>
                    <PopoverContent
                        className="p-0 border-border bg-background w-[var(--radix-popover-trigger-width)]"
                        align="start"
                        onOpenAutoFocus={(e) => e.preventDefault()}
                    >
                        <ScrollArea className="max-h-[300px] overflow-auto">
                            <div className="p-1">
                                {filteredOptions.length > 0 ? (
                                    filteredOptions.map((option) => (
                                        <button
                                            key={option.value}
                                            className={cn(
                                                "relative flex w-full cursor-default select-none items-center rounded-sm px-2 py-1.5 text-sm outline-none transition-colors",
                                                "hover:bg-secondary hover:text-secondary-foreground focus:bg-secondary focus:text-secondary-foreground",
                                                value === option.value && "bg-secondary/50"
                                            )}
                                            onClick={() => handleSelect(option.value)}
                                        >
                                            <span className="flex-1 text-left">{option.label}</span>
                                            {value === option.value && (
                                                <Check className="ml-2 h-4 w-4 text-primary" />
                                            )}
                                        </button>
                                    ))
                                ) : (
                                    <div className="py-6 text-center text-sm text-muted-foreground">
                                        {emptyMessage}
                                    </div>
                                )}
                            </div>
                        </ScrollArea>
                    </PopoverContent>
                </Popover>
            </div>
        );
    }
);

AutoComplete.displayName = "AutoComplete";

export { AutoComplete };
