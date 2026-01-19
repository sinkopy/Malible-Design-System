import { DocPage, DocSection, Timestamp } from "@/components/docs";
import { DownloadSimple } from "@phosphor-icons/react";

export default function TokensDocs() {
  return (
    <DocPage
      title="Design Tokens"
      description="The foundational values that power the design system."
      category="Foundation"
    >
      {/* Download */}
      <DocSection title="Download" description="Get all tokens as JSON for tooling integration.">
        <a
          href="/malible-tokens.json"
          download="malible-tokens.json"
          className="inline-flex items-center gap-2 rounded-lg border bg-background px-4 py-2 text-sm font-medium hover:bg-muted transition-colors"
        >
          <DownloadSimple size={16} />
          Download Tokens (JSON)
        </a>
      </DocSection>

      {/* Spacing */}
      <DocSection title="Spacing" description="Consistent spacing scale for layout and components." level={2}>
        <div className="rounded-xl border border-border/40 overflow-hidden">
          <table className="w-full text-left text-sm">
            <thead className="border-b border-border/40 bg-muted/20">
              <tr>
                <th className="p-4 font-medium uppercase tracking-wider text-[11px] text-muted-foreground/70">Token</th>
                <th className="p-4 font-medium uppercase tracking-wider text-[11px] text-muted-foreground/70">Value</th>
                <th className="p-4 font-medium uppercase tracking-wider text-[11px] text-muted-foreground/70">Tailwind</th>
                <th className="p-4 font-medium uppercase tracking-wider text-[11px] text-muted-foreground/70">Preview</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-border/30">
              {[
                { token: "space-0", value: "0px", tw: "p-0, m-0, gap-0" },
                { token: "space-2", value: "2px", tw: "p-0.5, m-0.5, gap-0.5" },
                { token: "space-4", value: "4px", tw: "p-1, m-1, gap-1" },
                { token: "space-8", value: "8px", tw: "p-2, m-2, gap-2" },
                { token: "space-12", value: "12px", tw: "p-3, m-3, gap-3" },
                { token: "space-16", value: "16px", tw: "p-4, m-4, gap-4" },
                { token: "space-24", value: "24px", tw: "p-6, m-6, gap-6" },
                { token: "space-32", value: "32px", tw: "p-8, m-8, gap-8" },
              ].map((item) => (
                <tr key={item.token}>
                  <td className="p-4 bg-muted/5">
                    <code className="text-[13px] font-mono text-foreground/80 bg-muted/20 border border-border/30 px-1.5 py-0.5 rounded leading-none">
                      {item.token}
                    </code>
                  </td>
                  <td className="p-4 font-mono text-[13px] text-muted-foreground/90">{item.value}</td>
                  <td className="p-4 text-muted-foreground/70 text-[13px]">{item.tw}</td>
                  <td className="p-4">
                    <div
                      className="bg-muted-foreground/20 h-4 rounded-sm"
                      style={{ width: item.value === "0px" ? "2px" : item.value }}
                    />
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </DocSection>

      <DocSection title="Radius & Shadows" description="Foundational depth and corner tokens." level={2}>
        <DocSection title="Border Radius" description="Consistent corner rounding tokens.">
          <div className="rounded-xl border border-border/40 overflow-hidden">
            <table className="w-full text-left text-sm">
              <thead className="border-b border-border/40 bg-muted/20">
                <tr>
                  <th className="p-4 font-medium uppercase tracking-wider text-[11px] text-muted-foreground/70">Token</th>
                  <th className="p-4 font-medium uppercase tracking-wider text-[11px] text-muted-foreground/70">Value</th>
                  <th className="p-4 font-medium uppercase tracking-wider text-[11px] text-muted-foreground/70">Tailwind</th>
                  <th className="p-4 font-medium uppercase tracking-wider text-[11px] text-muted-foreground/70">Preview</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-border/30">
                <tr>
                  <td className="p-4 bg-muted/5">
                    <code className="text-[13px] font-mono text-foreground/80 bg-muted/20 border border-border/30 px-1.5 py-0.5 rounded leading-none">
                      --radius
                    </code>
                  </td>
                  <td className="p-4 font-mono text-[13px] text-muted-foreground/90">8px</td>
                  <td className="p-4 text-muted-foreground/70 text-[13px]">rounded-lg</td>
                  <td className="p-4">
                    <div className="h-8 w-16 bg-muted border border-border/50 rounded-lg" />
                  </td>
                </tr>
                <tr>
                  <td className="p-4 bg-muted/5">
                    <code className="text-[13px] font-mono text-foreground/80 bg-muted/20 border border-border/30 px-1.5 py-0.5 rounded leading-none">
                      radius-full
                    </code>
                  </td>
                  <td className="p-4 font-mono text-[13px] text-muted-foreground/90">9999px</td>
                  <td className="p-4 text-muted-foreground/70 text-[13px]">rounded-full</td>
                  <td className="p-4">
                    <div className="h-8 w-16 bg-muted border border-border/50 rounded-full" />
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </DocSection>

        <DocSection title="Shadow Tokens" description="Elevation and depth effects for functional elements.">
          <div className="rounded-xl border border-border/40 overflow-hidden">
            <table className="w-full text-left text-sm">
              <thead className="border-b border-border/40 bg-muted/20">
                <tr>
                  <th className="p-4 font-medium uppercase tracking-wider text-[11px] text-muted-foreground/70">Token</th>
                  <th className="p-4 font-medium uppercase tracking-wider text-[11px] text-muted-foreground/70">Usage</th>
                  <th className="p-4 font-medium uppercase tracking-wider text-[11px] text-muted-foreground/70">Preview</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-border/30">
                <tr>
                  <td className="p-4 bg-muted/5">
                    <code className="text-[13px] font-mono text-foreground/80 bg-muted/20 border border-border/30 px-1.5 py-0.5 rounded leading-none">
                      shadow-xs
                    </code>
                  </td>
                  <td className="p-4 text-muted-foreground/70 text-[13px]">Alerts, simple inputs</td>
                  <td className="p-4">
                    <div className="h-8 w-16 bg-card border border-border/50 rounded-lg shadow-xs" />
                  </td>
                </tr>
                <tr>
                  <td className="p-4 bg-muted/5">
                    <code className="text-[13px] font-mono text-foreground/80 bg-muted/20 border border-border/30 px-1.5 py-0.5 rounded leading-none">
                      shadow-md
                    </code>
                  </td>
                  <td className="p-4 text-muted-foreground/70 text-[13px]">Cards, elevated panels</td>
                  <td className="p-4">
                    <div className="h-8 w-16 bg-card border border-border/50 rounded-lg shadow-md" />
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </DocSection>
      </DocSection>

      <DocSection title="Technical Reference" description="Complete token and variable reference for developers." level={2}>
        <DocSection title="Download" description="Get all tokens as JSON for tooling integration.">
          <a
            href="/malible-tokens.json"
            download="malible-tokens.json"
            className="inline-flex items-center gap-2 rounded-lg border border-border/50 bg-background px-4 py-2 text-sm font-medium hover:bg-muted transition-colors"
          >
            <DownloadSimple size={16} />
            Download Tokens (JSON)
          </a>
        </DocSection>

        <DocSection title="CSS Variables" description="Complete variable reference for the global stylesheet.">
          <div className="rounded-xl border border-border/40 bg-muted/10 p-6 overflow-hidden">
            <pre className="text-[13px] font-mono leading-relaxed overflow-x-auto text-muted-foreground/80 selection:bg-info/20">
              {`:root {
  /* Colors */
  --background: 0 0% 100%;
  --foreground: 240 6% 10%;
  --primary: 18 74% 53%;
  --primary-foreground: 0 0% 100%;
  --secondary: 240 5% 96%;
  --secondary-foreground: 240 4% 26%;
  --destructive: 0 79% 42%;
  --destructive-foreground: 0 0% 100%;
  --destructive-subtle: 0 90% 95%;
  --muted: 0 0% 96%;
  --muted-foreground: 240 4% 46%;
  --info: 200 100% 42%;
  --info-foreground: 0 0% 100%;
  --info-subtle: 200 100% 95%;
  --success: 152 48% 45%;
  --success-foreground: 0 0% 100%;
  --success-subtle: 145 47% 93%;
  --warning: 38 100% 44%;
  --warning-foreground: 0 0% 100%;
  --warning-subtle: 40 95% 95%;
  --border: 0 0% 90%;
  --input: 0 0% 83%;
  --ring: 200 100% 36%;
  
  /* Radius */
  --radius: 0.5rem;
  
  /* Fonts */
  --font-heading: "tt-commons-pro", sans-serif;
  --font-body: "Inter", sans-serif;
  --font-mono: "Menlo", monospace;
}`}
            </pre>
          </div>
        </DocSection>
      </DocSection>

      <Timestamp date="17-01-2026 08:34PM" />
    </DocPage>
  );
}
