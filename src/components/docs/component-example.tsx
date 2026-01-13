import { useState } from "react";
import { cn } from "@/lib/utils";
import { CodeBlock } from "./code-block";

interface ComponentExampleProps {
  children: React.ReactNode;
  code: string;
  className?: string;
}

export function ComponentExample({ children, code, className }: ComponentExampleProps) {
  const [activeTab, setActiveTab] = useState<"preview" | "code">("preview");

  return (
    <div className={cn("rounded-lg border", className)}>
      {/* Tabs */}
      <div className="flex border-b">
        <button
          onClick={() => setActiveTab("preview")}
          className={cn(
            "px-4 py-2 text-sm font-medium transition-colors",
            activeTab === "preview"
              ? "border-b-2 border-foreground text-foreground"
              : "text-muted-foreground hover:text-foreground"
          )}
        >
          Preview
        </button>
        <button
          onClick={() => setActiveTab("code")}
          className={cn(
            "px-4 py-2 text-sm font-medium transition-colors",
            activeTab === "code"
              ? "border-b-2 border-foreground text-foreground"
              : "text-muted-foreground hover:text-foreground"
          )}
        >
          Code
        </button>
      </div>

      {/* Content */}
      {activeTab === "preview" ? (
        <div className="flex min-h-[200px] items-center justify-center p-10">
          {children}
        </div>
      ) : (
        <CodeBlock code={code} className="border-0 rounded-t-none" />
      )}
    </div>
  );
}
