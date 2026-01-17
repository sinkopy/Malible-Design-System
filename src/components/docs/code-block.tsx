import { useState, useEffect } from "react";
import { Check, Copy } from "@phosphor-icons/react";
import { cn } from "@/lib/utils";
import { codeToHtml } from "shiki";

interface CodeBlockProps {
  code: string;
  language?: string;
  className?: string;
}

export function CodeBlock({ code, language = "text", className }: CodeBlockProps) {
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
    <div className={cn("relative", className)}>
      <div className="overflow-x-auto rounded-lg border bg-muted p-4 text-sm">
        <div 
          className="font-mono text-[13px] leading-relaxed [&_pre]:!bg-transparent [&_pre]:!m-0 [&_pre]:!p-0 [&_code]:!bg-transparent"
          dangerouslySetInnerHTML={{ __html: html }}
        />
      </div>
      <button
        onClick={copy}
        className="absolute right-3 top-3 flex h-8 w-8 items-center justify-center rounded-lg border bg-background hover:bg-muted"
      >
        {copied ? (
          <Check size={16} className="text-success" />
        ) : (
          <Copy size={16} className="text-muted-foreground" />
        )}
      </button>
    </div>
  );
}
