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
    <div className={cn("rounded-lg border overflow-hidden", className)}>
      {/* Preview */}
      <div className="flex min-h-40 items-center justify-center p-8 bg-background">
        {children}
      </div>

      {/* Code */}
      <div className="relative border-t bg-zinc-50">
        <button
          onClick={copy}
          className="absolute right-3 top-3 flex h-6 w-6 items-center justify-center rounded hover:bg-zinc-200 z-10"
        >
          {copied ? (
            <Check size={14} className="text-success" />
          ) : (
            <Copy size={14} className="text-zinc-500" />
          )}
        </button>
        <div 
          className="p-4 overflow-x-auto font-mono text-[13px] leading-relaxed [&_pre]:!bg-transparent [&_pre]:!m-0 [&_pre]:!p-0 [&_code]:!bg-transparent"
          dangerouslySetInnerHTML={{ __html: html }}
        />
      </div>
    </div>
  );
}
