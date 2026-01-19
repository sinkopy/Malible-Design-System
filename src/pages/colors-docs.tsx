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
    <div className="rounded-lg border border-border/40 overflow-hidden">
      <table className="w-full text-sm table-fixed">
        <thead className="bg-muted/20">
          <tr>
            <th className="text-left py-2.5 px-4 font-medium uppercase tracking-wider text-[11px] text-muted-foreground w-[80px]">
              Preview
            </th>
            <th className="text-left py-2.5 px-4 font-medium uppercase tracking-wider text-[11px] text-muted-foreground w-[180px]">
              Name
            </th>
            <th className="text-left py-2.5 px-4 font-medium uppercase tracking-wider text-[11px] text-muted-foreground w-[240px]">
              Token
            </th>
            <th className="text-left py-2.5 px-4 font-medium uppercase tracking-wider text-[11px] text-muted-foreground w-[120px]">
              Value
            </th>
            <th className="text-left py-2.5 px-4 font-medium uppercase tracking-wider text-[11px] text-muted-foreground">
              Usage
            </th>
          </tr>
        </thead>
        <tbody className="divide-y divide-border/30">
          {colors.map((color) => (
            <tr key={color.token} className="group hover:bg-muted/5 transition-colors">
              <td className="py-3 px-4">
                <div
                  className="h-6 w-6 rounded border border-border/50 shadow-sm"
                  style={{ backgroundColor: color.hex }}
                />
              </td>
              <td className="py-3 px-4 font-medium text-[13px] truncate">{color.name}</td>
              <td className="py-3 px-4">
                <code className="text-[13px] font-mono text-foreground/80 bg-muted/20 px-1 border border-border/30 rounded truncate block w-fit max-w-full">
                  {color.token}
                </code>
              </td>
              <td className="py-3 px-4">
                <code className="text-[13px] font-mono text-muted-foreground truncate block">
                  {color.hex}
                </code>
              </td>
              <td className="py-3 px-4 text-[13px] text-muted-foreground/80 leading-snug truncate">
                {color.usage}
              </td>
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
              <h4 className="font-medium text-[12px] uppercase tracking-wider text-muted-foreground/70">Tailwind Classes</h4>
              <div className="rounded-lg border border-border/30 bg-muted/10 p-4 font-mono text-[13px] space-y-2 leading-relaxed">
                <div className="flex justify-between items-center group">
                  <span className="text-foreground/90">bg-primary</span>
                  <span className="text-muted-foreground/50 text-[11px] uppercase tracking-tighter">Background</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-foreground/90">text-primary</span>
                  <span className="text-muted-foreground/50 text-[11px] uppercase tracking-tighter">Text color</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-foreground/90">border-primary</span>
                  <span className="text-muted-foreground/50 text-[11px] uppercase tracking-tighter">Border color</span>
                </div>
                <div className="h-px bg-border/20 my-2" />
                <div className="flex justify-between items-center">
                  <span className="text-foreground/90">bg-info-subtle</span>
                  <span className="text-muted-foreground/50 text-[11px] uppercase tracking-tighter">Subtle bg</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-foreground/90">text-info</span>
                  <span className="text-muted-foreground/50 text-[11px] uppercase tracking-tighter">Colored text</span>
                </div>
              </div>
            </div>

            <div className="space-y-3">
              <h4 className="font-medium text-[12px] uppercase tracking-wider text-muted-foreground/70">CSS Variables</h4>
              <div className="rounded-lg border border-border/30 bg-muted/10 p-4 font-mono text-[13px] space-y-2 leading-relaxed h-full">
                <div className="flex flex-col gap-1">
                  <span className="text-muted-foreground/50 text-[11px] uppercase tracking-tighter">Background Utility</span>
                  <span className="text-foreground/90">background-color: <span className="text-muted-foreground/70">hsl(var(--primary));</span></span>
                </div>
                <div className="flex flex-col gap-1 mt-4">
                  <span className="text-muted-foreground/50 text-[11px] uppercase tracking-tighter">Text color Utility</span>
                  <span className="text-foreground/90">color: <span className="text-muted-foreground/70">hsl(var(--primary-foreground));</span></span>
                </div>
              </div>
            </div>
          </div>
        </DocSection>

        <DocSection title="Accessibility">
          <div className="p-5 rounded-lg bg-muted/5 border border-border/20 text-[14px]">
            <p className="text-muted-foreground leading-relaxed">
              All color combinations in the Malible design system are tested for <span className="text-foreground font-medium">WCAG 2.1 AA compliance</span>.
              The <code className="text-[13px] font-mono bg-muted/20 border border-border/30 px-1 rounded mx-0.5">Primary</code> and <code className="text-[13px] font-mono bg-muted/20 border border-border/30 px-1 rounded mx-0.5">Destructive</code> palettes
              automatically adjust their foreground colors to maintain high contrast ratios.
            </p>
          </div>
        </DocSection>
      </DocSection>

      <Timestamp date="17-01-2026 08:34PM" />
    </DocPage>
  );
}
