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
      <DocSection title="Download">
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
      <DocSection title="Spacing" description="Consistent spacing scale for layout and components.">
        <div className="rounded-lg border overflow-hidden">
          <table className="w-full text-sm">
            <thead className="bg-muted/50">
              <tr>
                <th className="text-left p-4 font-medium">Token</th>
                <th className="text-left p-4 font-medium">Value</th>
                <th className="text-left p-4 font-medium">Tailwind</th>
                <th className="text-left p-4 font-medium">Preview</th>
              </tr>
            </thead>
            <tbody className="divide-y">
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
                  <td className="p-4 font-mono text-xs">{item.token}</td>
                  <td className="p-4 font-mono text-xs">{item.value}</td>
                  <td className="p-4 font-mono text-xs text-muted-foreground">{item.tw}</td>
                  <td className="p-4">
                    <div 
                      className="bg-primary h-4" 
                      style={{ width: item.value === "0px" ? "2px" : item.value }}
                    />
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </DocSection>

      {/* Radius */}
      <DocSection title="Border Radius" description="Consistent corner rounding.">
        <div className="rounded-lg border overflow-hidden">
          <table className="w-full text-sm">
            <thead className="bg-muted/50">
              <tr>
                <th className="text-left p-4 font-medium">Token</th>
                <th className="text-left p-4 font-medium">Value</th>
                <th className="text-left p-4 font-medium">Tailwind</th>
                <th className="text-left p-4 font-medium">Preview</th>
              </tr>
            </thead>
            <tbody className="divide-y">
              <tr>
                <td className="p-4 font-mono text-xs">--radius</td>
                <td className="p-4 font-mono text-xs">8px</td>
                <td className="p-4 font-mono text-xs text-muted-foreground">rounded-lg</td>
                <td className="p-4">
                  <div className="h-8 w-16 bg-primary rounded-lg" />
                </td>
              </tr>
              <tr>
                <td className="p-4 font-mono text-xs">radius-sm</td>
                <td className="p-4 font-mono text-xs">4px</td>
                <td className="p-4 font-mono text-xs text-muted-foreground">rounded</td>
                <td className="p-4">
                  <div className="h-8 w-16 bg-primary rounded" />
                </td>
              </tr>
              <tr>
                <td className="p-4 font-mono text-xs">radius-full</td>
                <td className="p-4 font-mono text-xs">9999px</td>
                <td className="p-4 font-mono text-xs text-muted-foreground">rounded-full</td>
                <td className="p-4">
                  <div className="h-8 w-16 bg-primary rounded-full" />
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </DocSection>

      {/* Shadows */}
      <DocSection title="Shadows" description="Elevation and depth effects.">
        <div className="rounded-lg border overflow-hidden">
          <table className="w-full text-sm">
            <thead className="bg-muted/50">
              <tr>
                <th className="text-left p-4 font-medium">Token</th>
                <th className="text-left p-4 font-medium">Usage</th>
                <th className="text-left p-4 font-medium">Preview</th>
              </tr>
            </thead>
            <tbody className="divide-y">
              <tr>
                <td className="p-4 font-mono text-xs">shadow-button-onfill-default</td>
                <td className="p-4 text-muted-foreground">Primary/destructive buttons</td>
                <td className="p-4">
                  <div className="h-8 w-24 bg-primary rounded-lg shadow-button-onfill-default" />
                </td>
              </tr>
              <tr>
                <td className="p-4 font-mono text-xs">shadow-button-onlight-default</td>
                <td className="p-4 text-muted-foreground">Secondary buttons</td>
                <td className="p-4">
                  <div className="h-8 w-24 bg-secondary border rounded-lg shadow-button-onlight-default" />
                </td>
              </tr>
              <tr>
                <td className="p-4 font-mono text-xs">shadow-input-focus</td>
                <td className="p-4 text-muted-foreground">Input focus ring</td>
                <td className="p-4">
                  <div className="h-8 w-24 bg-background border border-ring rounded-lg shadow-input-focus" />
                </td>
              </tr>
              <tr>
                <td className="p-4 font-mono text-xs">shadow-input-error</td>
                <td className="p-4 text-muted-foreground">Input error ring</td>
                <td className="p-4">
                  <div className="h-8 w-24 bg-background border border-destructive rounded-lg shadow-input-error" />
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </DocSection>

      {/* All CSS Variables */}
      <DocSection title="All CSS Variables">
        <div className="rounded-lg border p-4">
          <pre className="text-xs overflow-x-auto">
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

      <Timestamp date="13-01-2026" />
    </DocPage>
  );
}
