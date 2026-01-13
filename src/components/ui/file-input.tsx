import * as React from "react";
import { cn } from "@/lib/utils";
import { UploadSimple } from "@phosphor-icons/react";

interface FileInputProps extends Omit<React.InputHTMLAttributes<HTMLInputElement>, "type"> {
  onFileSelect?: (file: File | null) => void;
}

const FileInput = React.forwardRef<HTMLInputElement, FileInputProps>(
  ({ className, onFileSelect, ...props }, ref) => {
    const [fileName, setFileName] = React.useState<string>("");
    const inputRef = React.useRef<HTMLInputElement>(null);

    const handleClick = () => {
      inputRef.current?.click();
    };

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
      const file = e.target.files?.[0] || null;
      setFileName(file?.name || "");
      onFileSelect?.(file);
    };

    // Merge refs
    const setRefs = React.useCallback(
      (node: HTMLInputElement | null) => {
        inputRef.current = node;
        if (typeof ref === "function") {
          ref(node);
        } else if (ref) {
          (ref as React.MutableRefObject<HTMLInputElement | null>).current = node;
        }
      },
      [ref]
    );

    return (
      <div
        onClick={handleClick}
        className={cn(
          "flex h-10 w-full items-center gap-2 rounded-lg border border-input bg-background px-3 text-sm cursor-pointer hover:bg-muted/50 transition-colors",
          "focus-within:ring-2 focus-within:ring-ring/32 focus-within:border-ring",
          className
        )}
      >
        <UploadSimple size={16} className="text-muted-foreground shrink-0" />
        <span className={cn(
          "flex-1 truncate min-w-0",
          fileName ? "text-foreground" : "text-muted-foreground"
        )}>
          {fileName || "Choose file..."}
        </span>
        <input
          type="file"
          ref={setRefs}
          onChange={handleChange}
          className="sr-only"
          {...props}
        />
      </div>
    );
  }
);
FileInput.displayName = "FileInput";

export { FileInput };
