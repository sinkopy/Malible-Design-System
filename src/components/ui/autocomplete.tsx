import * as React from "react";
import * as PopoverPrimitive from "@radix-ui/react-popover";
import { MagnifyingGlass, CaretDown, Check } from "@phosphor-icons/react";
import { cn } from "@/lib/utils";
import { ScrollArea } from "@/components/ui/scroll-area";
import { SelectableCard } from "@/components/ui/selectable-card";

export interface AutoCompleteOption {
    value: string;
    label: string;
    image?: string;
    description?: string;
    [key: string]: unknown;
}

export interface AutoCompleteProps<T extends AutoCompleteOption = AutoCompleteOption> {
    options: T[];
    /** Single select value */
    value?: string;
    /** Multi-select values */
    values?: string[];
    onValueChange?: (value: string) => void;
    onValuesChange?: (values: string[]) => void;
    placeholder?: string;
    emptyMessage?: string;
    className?: string;
    disabled?: boolean;
    /** Display variant: list (default) or grid */
    variant?: "list" | "grid";
    /** Number of columns for grid variant */
    columns?: 2 | 3 | 4;
    /** Enable multi-select mode */
    multiple?: boolean;
    /** Custom render function for items */
    renderItem?: (option: T, isSelected: boolean) => React.ReactNode;
}

function AutoComplete<T extends AutoCompleteOption = AutoCompleteOption>({
    options,
    value,
    values = [],
    onValueChange,
    onValuesChange,
    placeholder = "Search...",
    emptyMessage = "No results found.",
    className,
    disabled,
    variant = "list",
    columns = 2,
    multiple = false,
    renderItem,
}: AutoCompleteProps<T>) {
    const [open, setOpen] = React.useState(false);
    const [searchValue, setSearchValue] = React.useState("");
    const inputRef = React.useRef<HTMLInputElement>(null);

    const filteredOptions = React.useMemo(
        () =>
            options.filter((option) =>
                option.label.toLowerCase().includes(searchValue.toLowerCase())
            ),
        [options, searchValue]
    );

    const isSelected = (optionValue: string) => {
        if (multiple) {
            return values.includes(optionValue);
        }
        return value === optionValue;
    };

    const selectedOption = options.find((opt) => opt.value === value);

    const handleSelect = (optionValue: string) => {
        if (multiple) {
            const newValues = values.includes(optionValue)
                ? values.filter((v) => v !== optionValue)
                : [...values, optionValue];
            onValuesChange?.(newValues);
        } else {
            onValueChange?.(optionValue);
            setOpen(false);
            setSearchValue("");
        }
    };

    const getDisplayValue = () => {
        if (open) return searchValue;
        if (multiple) {
            if (values.length === 0) return "";
            if (values.length === 1) {
                return options.find((o) => o.value === values[0])?.label ?? "";
            }
            return `${values.length} selected`;
        }
        return selectedOption?.label ?? "";
    };

    // Reset search when closing
    React.useEffect(() => {
        if (!open) {
            setSearchValue("");
        }
    }, [open]);

    const gridCols = {
        2: "grid-cols-2",
        3: "grid-cols-3",
        4: "grid-cols-4",
    };

    // Default grid item renderer using SelectableCard
    const defaultGridItem = (option: T, selected: boolean) => (
        <SelectableCard
            image={option.image}
            label={option.label}
            selected={selected}
        />
    );

    // Default list item renderer
    const defaultListItem = (option: T, selected: boolean) => (
        <div
            className={cn(
                "relative flex w-full cursor-default select-none items-center rounded-md px-3 py-2 text-sm outline-none transition-colors",
                "hover:bg-accent",
                selected && "bg-accent"
            )}
        >
            <span className="flex-1 text-left">{option.label}</span>
            {selected && (
                <Check className="ml-2 h-4 w-4 text-primary" weight="bold" />
            )}
        </div>
    );

    return (
        <PopoverPrimitive.Root open={open} onOpenChange={setOpen}>
            <PopoverPrimitive.Trigger asChild disabled={disabled}>
                <div
                    role="combobox"
                    aria-expanded={open}
                    aria-haspopup="listbox"
                    aria-disabled={disabled}
                    className={cn(
                        "flex items-center h-10 w-full rounded-lg border bg-background px-3 gap-2 cursor-pointer",
                        "transition-colors duration-200",
                        open ? "border-primary ring-2 ring-ring ring-offset-2" : "border-input",
                        disabled && "opacity-50 pointer-events-none cursor-not-allowed",
                        className
                    )}
                    onClick={() => {
                        if (!disabled && !open) {
                            setOpen(true);
                            // Focus input after popover opens
                            setTimeout(() => inputRef.current?.focus(), 0);
                        }
                    }}
                >
                    <MagnifyingGlass className="h-4 w-4 text-muted-foreground shrink-0" />
                    <input
                        ref={inputRef}
                        type="text"
                        role="searchbox"
                        placeholder={placeholder}
                        value={getDisplayValue()}
                        onChange={(e) => {
                            setSearchValue(e.target.value);
                            if (!open) setOpen(true);
                        }}
                        onFocus={() => {
                            if (!open) {
                                setOpen(true);
                                setSearchValue("");
                            }
                        }}
                        onKeyDown={(e) => {
                            if (e.key === "Escape") {
                                setOpen(false);
                            }
                        }}
                        disabled={disabled}
                        autoComplete="off"
                        className="flex-1 bg-transparent text-sm outline-none placeholder:text-muted-foreground"
                    />
                    <CaretDown
                        className={cn(
                            "h-4 w-4 text-muted-foreground shrink-0 transition-transform duration-200",
                            open && "rotate-180"
                        )}
                    />
                </div>
            </PopoverPrimitive.Trigger>

            <PopoverPrimitive.Portal>
                <PopoverPrimitive.Content
                    align="start"
                    sideOffset={4}
                    onOpenAutoFocus={(e) => {
                        // Prevent popover from stealing focus, keep it on input
                        e.preventDefault();
                        inputRef.current?.focus();
                    }}
                    className={cn(
                        "z-50 w-[var(--radix-popover-trigger-width)] rounded-lg border border-border bg-popover shadow-lg overflow-hidden",
                        // Animations
                        "data-[state=open]:animate-in data-[state=closed]:animate-out",
                        "data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0",
                        "data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95",
                        "data-[side=bottom]:slide-in-from-top-2",
                        "data-[side=top]:slide-in-from-bottom-2"
                    )}
                >
                    <ScrollArea className="max-h-[300px]">
                        <div
                            role="listbox"
                            className={cn(variant === "list" ? "p-1" : "p-3")}
                        >
                            {filteredOptions.length > 0 ? (
                                variant === "grid" ? (
                                    <div className={cn("grid gap-3", gridCols[columns])}>
                                        {filteredOptions.map((option) => (
                                            <div
                                                key={option.value}
                                                role="option"
                                                aria-selected={isSelected(option.value)}
                                                onClick={() => handleSelect(option.value)}
                                            >
                                                {renderItem
                                                    ? renderItem(option, isSelected(option.value))
                                                    : defaultGridItem(option, isSelected(option.value))}
                                            </div>
                                        ))}
                                    </div>
                                ) : (
                                    filteredOptions.map((option) => (
                                        <button
                                            key={option.value}
                                            type="button"
                                            role="option"
                                            aria-selected={isSelected(option.value)}
                                            className="w-full"
                                            onClick={() => handleSelect(option.value)}
                                        >
                                            {renderItem
                                                ? renderItem(option, isSelected(option.value))
                                                : defaultListItem(option, isSelected(option.value))}
                                        </button>
                                    ))
                                )
                            ) : (
                                <div className="py-6 text-center text-sm text-muted-foreground">
                                    {emptyMessage}
                                </div>
                            )}
                        </div>
                    </ScrollArea>
                </PopoverPrimitive.Content>
            </PopoverPrimitive.Portal>
        </PopoverPrimitive.Root>
    );
}

AutoComplete.displayName = "AutoComplete";

export { AutoComplete };
