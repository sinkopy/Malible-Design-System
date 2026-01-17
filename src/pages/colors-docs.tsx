import { DocPage, DocSection, Timestamp } from "@/components/docs";

const coreColors = [
  { name: "Primary", token: "--primary", hsl: "18 74% 53%", hex: "#E0622D", usage: "Primary actions, links" },
  { name: "Primary Foreground", token: "--primary-foreground", hsl: "0 0% 100%", hex: "#ffffff", usage: "Text on primary" },
  { name: "Secondary", token: "--secondary", hsl: "240 5% 96%", hex: "#f5f5f5", usage: "Secondary actions" },
  { name: "Secondary Foreground", token: "--secondary-foreground", hsl: "240 4% 26%", hex: "#424242", usage: "Text on secondary" },
  { name: "Destructive", token: "--destructive", hsl: "0 79% 42%", hex: "#bf1616", usage: "Errors, destructive actions" },
  { name: "Destructive Foreground", token: "--destructive-foreground", hsl: "0 0% 100%", hex: "#ffffff", usage: "Text on destructive" },
  { name: "Muted", token: "--muted", hsl: "0 0% 96%", hex: "#f5f5f5", usage: "Muted backgrounds" },
  { name: "Muted Foreground", token: "--muted-foreground", hsl: "240 4% 46%", hex: "#737373", usage: "Muted text, placeholders" },
];

const semanticColors = [
  { name: "Info", token: "--info", hsl: "200 100% 42%", hex: "#008ed6", usage: "Informational states" },
  { name: "Info Subtle", token: "--info-subtle", hsl: "200 100% 95%", hex: "#eaf8ff", usage: "Info badge background" },
  { name: "Success", token: "--success", hsl: "152 48% 45%", hex: "#3ea377", usage: "Success states, switch on" },
  { name: "Success Subtle", token: "--success-subtle", hsl: "145 47% 93%", hex: "#e2f4eb", usage: "Success badge background" },
  { name: "Warning", token: "--warning", hsl: "38 100% 44%", hex: "#e09200", usage: "Warning states" },
  { name: "Warning Subtle", token: "--warning-subtle", hsl: "40 95% 95%", hex: "#fef6e6", usage: "Warning badge background" },
  { name: "Destructive Subtle", token: "--destructive-subtle", hsl: "0 90% 95%", hex: "#fde8e8", usage: "Error badge background" },
];

const uiColors = [
  { name: "Background", token: "--background", hsl: "0 0% 100%", hex: "#ffffff", usage: "Page background" },
  { name: "Foreground", token: "--foreground", hsl: "240 6% 10%", hex: "#1a1a1a", usage: "Primary text" },
  { name: "Border", token: "--border", hsl: "0 0% 90%", hex: "#e5e5e5", usage: "Subtle borders" },
  { name: "Input", token: "--input", hsl: "0 0% 83%", hex: "#d4d4d4", usage: "Input borders" },
  { name: "Ring", token: "--ring", hsl: "200 100% 36%", hex: "#007ab7", usage: "Focus rings" },
];

function ColorTable({ colors }: { colors: typeof coreColors }) {
  return (
    <div className="rounded-lg border overflow-hidden text-sm">
      <table className="w-full">
        <thead className="bg-muted/50">
          <tr>
            <th className="text-left p-3 font-medium w-10"></th>
            <th className="text-left p-3 font-medium">Name</th>
            <th className="text-left p-3 font-medium">Token</th>
            <th className="text-left p-3 font-medium">Value</th>
            <th className="text-left p-3 font-medium">Usage</th>
          </tr>
        </thead>
        <tbody className="divide-y">
          {colors.map((color) => (
            <tr key={color.token}>
              <td className="p-3">
                <div
                  className="h-6 w-6 rounded border"
                  style={{ backgroundColor: color.hex }}
                />
              </td>
              <td className="p-3 font-medium whitespace-nowrap">{color.name}</td>
              <td className="p-3 font-mono text-muted-foreground">{color.token}</td>
              <td className="p-3 font-mono text-muted-foreground">{color.hex}</td>
              <td className="p-3 text-muted-foreground">{color.usage}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default function ColorsDocs() {
  return (
    <DocPage
      title="Colors"
      description="The color system for consistent, accessible interfaces."
      category="Foundation"
    >
      <DocSection title="Palette" description="The primary color tokens used throughout the system." level={2}>
        <DocSection title="Core Colors" description="Primary palette for actions and interactive UI components.">
          <ColorTable colors={coreColors} />
        </DocSection>

        <DocSection title="Semantic Colors" description="Feedback and status colors for informational states.">
          <ColorTable colors={semanticColors} />
        </DocSection>

        <DocSection title="System Surfaces" description="Backgrounds, borders, and structural colors.">
          <ColorTable colors={uiColors} />
        </DocSection>
      </DocSection>

      <DocSection title="Reference" description="Technical details for applying colors in your project." level={2}>
        <DocSection title="Usage" description="Applying color tokens via Tailwind or CSS variables.">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="space-y-3">
              <h4 className="font-medium text-[13px] uppercase tracking-wider text-muted-foreground">Tailwind Classes</h4>
              <div className="rounded-lg border bg-muted/30 p-4 font-mono text-[12px] space-y-2">
                <div className="text-foreground/80"><span className="text-info">bg-primary</span> <span className="text-muted-foreground">/* Background */</span></div>
                <div className="text-foreground/80"><span className="text-info">text-primary</span> <span className="text-muted-foreground">/* Text color */</span></div>
                <div className="text-foreground/80"><span className="text-info">border-primary</span> <span className="text-muted-foreground">/* Border color */</span></div>
                <div className="pt-2 text-foreground/80"><span className="text-info">bg-info-subtle</span> <span className="text-muted-foreground">/* Subtle background */</span></div>
                <div className="text-foreground/80"><span className="text-info">text-info</span> <span className="text-muted-foreground">/* Colored text */</span></div>
              </div>
            </div>

            <div className="space-y-3">
              <h4 className="font-medium text-[13px] uppercase tracking-wider text-muted-foreground">CSS Variables</h4>
              <div className="rounded-lg border bg-muted/30 p-4 font-mono text-[12px] space-y-2">
                <div className="text-foreground/80"><span className="text-info">background-color:</span> <span className="text-success">hsl(var(--primary));</span></div>
                <div className="text-foreground/80"><span className="text-info">color:</span> <span className="text-success">hsl(var(--primary-foreground));</span></div>
              </div>
            </div>
          </div>
        </DocSection>

        <DocSection title="Accessibility">
          <div className="p-4 rounded-lg bg-info/5 border border-info/10 text-[14px]">
            <p className="text-muted-foreground leading-relaxed">
              All color combinations in the Malible design system are tested for WCAG 2.1 AA compliance.
              The <code className="text-xs font-mono bg-muted/50 px-1 rounded">Primary</code> and <code className="text-xs font-mono bg-muted/50 px-1 rounded">Destructive</code> palettes
              automatically adjust their foreground colors to maintain high contrast ratios.
            </p>
          </div>
        </DocSection>
      </DocSection>

      <Timestamp date="17-01-2026 08:34PM" />
    </DocPage>
  );
}
