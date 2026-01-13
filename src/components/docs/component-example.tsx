import { useState } from "react";
import { Check, Copy } from "@phosphor-icons/react";
import { cn } from "@/lib/utils";

interface ComponentExampleProps {
  children: React.ReactNode;
  code: string;
  className?: string;
}

export function ComponentExample({ children, code, className }: ComponentExampleProps) {
  const [activeTab, setActiveTab] = useState<"preview" | "code">("preview");
  const [copied, setCopied] = useState(false);

  const copy = () => {
    navigator.clipboard.writeText(code);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className={cn("rounded-lg border", className)}>
      {/* Tabs */}
      <div className="flex items-center justify-between border-b px-4">
        <div className="flex">
          <button
            onClick={() => setActiveTab("preview")}
            className={cn(
              "px-4 py-3 text-sm font-medium transition-colors",
              activeTab === "preview"
                ? "border-b-2 border-foreground text-foreground -mb-px"
                : "text-muted-foreground hover:text-foreground"
            )}
          >
            Preview
          </button>
          <button
            onClick={() => setActiveTab("code")}
            className={cn(
              "px-4 py-3 text-sm font-medium transition-colors",
              activeTab === "code"
                ? "border-b-2 border-foreground text-foreground -mb-px"
                : "text-muted-foreground hover:text-foreground"
            )}
          >
            Code
          </button>
        </div>
        
        {/* Copy button */}
        <button
          onClick={copy}
          className="flex h-8 w-8 items-center justify-center rounded-lg hover:bg-muted"
        >
          {copied ? (
            <Check size={16} className="text-success" />
          ) : (
            <Copy size={16} className="text-muted-foreground" />
          )}
        </button>
      </div>

      {/* Content */}
      {activeTab === "preview" ? (
        <div className="flex min-h-40 items-center justify-center p-8">
          {children}
        </div>
      ) : (
        <pre className="overflow-x-auto p-4 text-sm">
          <code>{code}</code>
        </pre>
      )}
    </div>
  );
}
