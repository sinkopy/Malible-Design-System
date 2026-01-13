import { useState } from "react";
import { cn } from "@/lib/utils";

// Inline SVG icons (since lucide-react is not installed)
const CheckIcon = ({ className }: { className?: string }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
    <path d="M20 6 9 17l-5-5"/>
  </svg>
);

const CopyIcon = ({ className }: { className?: string }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
    <rect width="14" height="14" x="8" y="8" rx="2" ry="2"/>
    <path d="M4 16c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2h8c1.1 0 2 .9 2 2"/>
  </svg>
);

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
            <CheckIcon className="h-4 w-4 text-success" />
          ) : (
            <CopyIcon className="h-4 w-4 text-muted-foreground" />
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
