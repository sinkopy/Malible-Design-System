import { useState, useEffect } from "react";
import { Check, Copy } from "@phosphor-icons/react";
import { cn } from "@/lib/utils";
import { codeToHtml } from "shiki";

interface ComponentExampleProps {
  children: React.ReactNode;
  code: string;
  language?: string;
  className?: string;
}

export function ComponentExample({
  children,
  code,
  language = "tsx",
  className
}: ComponentExampleProps) {
  const [copied, setCopied] = useState(false);
  const [html, setHtml] = useState("");

  useEffect(() => {
    async function highlight() {
      try {
        const html = await codeToHtml(code.trim(), {
          lang: language,
          theme: "github-light",
        });
        setHtml(html);
      } catch (error) {
        // Fallback to plain text if highlighting fails
        setHtml(`<pre><code>${code.trim()}</code></pre>`);
      }
    }
    highlight();
  }, [code, language]);

  const copy = () => {
    navigator.clipboard.writeText(code);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className={cn("group relative my-4 flex flex-col space-y-2", className)}>
      <div className="rounded-lg border bg-background transition-all">
        {/* Preview Container */}
        <div className="relative flex min-h-40 items-center justify-center p-10 bg-muted/10">
          {children}
        </div>

        {/* Code Container */}
        <div className="relative border-t bg-background">
          <div className="flex items-center justify-between px-4 py-2 border-b bg-muted/20">
            <span className="text-[11px] font-medium text-muted-foreground/50 select-none">
              Source Code
            </span>
            <button
              onClick={copy}
              className="flex h-7 w-7 items-center justify-center rounded-md hover:bg-muted transition-colors"
              title="Copy code"
            >
              {copied ? (
                <Check size={14} className="text-success" />
              ) : (
                <Copy size={14} className="text-muted-foreground" />
              )}
            </button>
          </div>
          <div
            className="p-5 overflow-x-auto font-mono text-[13px] leading-relaxed [&_pre]:!bg-transparent [&_pre]:!m-0 [&_pre]:!p-0 [&_code]:!bg-transparent selection:bg-primary/20"
            dangerouslySetInnerHTML={{ __html: html }}
          />
        </div>
      </div>
    </div>
  );
}
