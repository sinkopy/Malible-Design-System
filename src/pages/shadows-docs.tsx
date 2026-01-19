import { DocPage, DocSection, ComponentExample, Timestamp } from "@/components/docs"

const shadowScale = [
  { name: "shadow-xs", value: "0px 1px 0px 0px rgba(26, 26, 26, 0.04)", use: "Alerts, inputs" },
  { name: "shadow-sm", value: "0px 3px 1px -1px rgba(26, 26, 26, 0.04)", use: "Buttons" },
  { name: "shadow-md", value: "0px 4px 6px -2px rgba(26, 26, 26, 0.10)", use: "Cards, panels" },
  { name: "shadow-lg", value: "0px 8px 16px -4px rgba(26, 26, 26, 0.12)", use: "Dropdowns, popovers" },
  { name: "shadow-xl", value: "0px 12px 20px -8px rgba(26, 26, 26, 0.14)", use: "Modals" },
]

export default function ShadowsDocs() {
  return (
    <DocPage
      category="Foundation"
      title="Shadows"
      description="Elevation system based on Polaris standards with soft opacity. Single-layer shadows for consistent depth perception."
    >
      <DocSection title="Examples" description="Visual demonstrations and technical specifications of the shadow system." level={2}>
        <DocSection title="Shadow Scale" description="5 elevation levels for different UI contexts.">
          <div className="rounded-xl border border-border/40 overflow-hidden">
            <table className="w-full text-left text-sm">
              <thead className="border-b border-border/40 bg-muted/20">
                <tr>
                  <th className="p-4 font-medium uppercase tracking-wider text-[11px] text-muted-foreground/70">Token</th>
                  <th className="p-4 font-medium uppercase tracking-wider text-[11px] text-muted-foreground/70">Preview</th>
                  <th className="p-4 font-medium uppercase tracking-wider text-[11px] text-muted-foreground/70">Use Case</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-border/30">
                {shadowScale.map((shadow) => (
                  <tr key={shadow.name}>
                    <td className="p-4 bg-muted/5">
                      <code className="text-[13px] font-mono text-foreground/80 bg-muted/20 border border-border/30 px-1.5 py-0.5 rounded leading-none">
                        {shadow.name}
                      </code>
                    </td>
                    <td className="p-4">
                      <div className={`w-24 h-12 bg-card rounded-lg border border-border/50 ${shadow.name}`} />
                    </td>
                    <td className="p-4 text-muted-foreground text-[13px]">{shadow.use}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </DocSection>

        <DocSection title="Usage" description="Apply shadows via Tailwind utility classes.">
          <ComponentExample
            code={`<!-- No shadow (default) -->
<div className="rounded-lg border border-border/50">...</div>

<!-- Card elevation -->
<div className="rounded-lg border border-border/50 shadow-md">...</div>

<!-- Dropdown/popover elevation -->
<div className="rounded-lg border border-border/50 shadow-lg">...</div>`}
          >
            <div className="flex gap-6 items-end">
              <div className="flex flex-col items-center gap-2">
                <div className="w-20 h-14 bg-card rounded-lg border border-border/50" />
                <span className="text-[11px] font-mono text-muted-foreground/60">none</span>
              </div>
              <div className="flex flex-col items-center gap-2">
                <div className="w-20 h-14 bg-card rounded-lg border border-border/50 shadow-md" />
                <span className="text-[11px] font-mono text-muted-foreground/60">shadow-md</span>
              </div>
              <div className="flex flex-col items-center gap-2">
                <div className="w-20 h-14 bg-card rounded-lg border border-border/50 shadow-lg" />
                <span className="text-[11px] font-mono text-muted-foreground/60">shadow-lg</span>
              </div>
              <div className="flex flex-col items-center gap-2">
                <div className="w-20 h-14 bg-card rounded-lg border border-border/50 shadow-xl" />
                <span className="text-[11px] font-mono text-muted-foreground/60">shadow-xl</span>
              </div>
            </div>
          </ComponentExample>
        </DocSection>
      </DocSection>

      <DocSection title="Reference" description="Technical mapping and principles for the shadow system." level={2}>
        <DocSection title="Component Mapping" description="Recommended shadow levels per component.">
          <div className="rounded-xl border border-border/40 overflow-hidden">
            <table className="w-full text-left text-sm">
              <thead className="border-b border-border/40 bg-muted/20">
                <tr>
                  <th className="p-4 font-medium uppercase tracking-wider text-[11px] text-muted-foreground/70">Component</th>
                  <th className="p-4 font-medium uppercase tracking-wider text-[11px] text-muted-foreground/70">Shadow</th>
                  <th className="p-4 font-medium uppercase tracking-wider text-[11px] text-muted-foreground/70">Notes</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-border/30">
                <tr>
                  <td className="p-4 font-medium text-[13px] text-foreground/80">Card</td>
                  <td className="p-4">
                    <code className="text-[13px] font-mono text-foreground/70 bg-muted/20 border border-border/30 px-1 rounded">none</code>
                    <span className="text-muted-foreground/40 mx-2">/</span>
                    <code className="text-[13px] font-mono text-foreground/70 bg-muted/20 border border-border/30 px-1 rounded">shadow-md</code>
                  </td>
                  <td className="p-4 text-muted-foreground text-[13px]">On-demand elevation</td>
                </tr>
                <tr>
                  <td className="p-4 font-medium text-[13px] text-foreground/80">Dropdown / Select</td>
                  <td className="p-4">
                    <code className="text-[13px] font-mono text-foreground/70 bg-muted/20 border border-border/30 px-1 rounded">shadow-lg</code>
                  </td>
                  <td className="p-4 text-muted-foreground text-[13px]">Floating interaction layer</td>
                </tr>
                <tr>
                  <td className="p-4 font-medium text-[13px] text-foreground/80">Modal / Dialog</td>
                  <td className="p-4">
                    <code className="text-[13px] font-mono text-foreground/70 bg-muted/20 border border-border/30 px-1 rounded">shadow-xl</code>
                  </td>
                  <td className="p-4 text-muted-foreground text-[13px]">Highest visual stack point</td>
                </tr>
              </tbody>
            </table>
          </div>
        </DocSection>

        <DocSection title="Design Principles">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-[14px]">
            <div className="space-y-4 p-4 rounded-lg bg-info/5 border border-info/10">
              <div className="flex gap-3">
                <span className="text-info font-bold">🎯 Focus:</span>
                <p className="text-muted-foreground leading-snug font-mono text-xs">Soft opacity and negative spread keep shadows tight and natural.</p>
              </div>
            </div>
            <div className="space-y-4 p-4 rounded-lg bg-warning/5 border border-warning/10">
              <div className="flex gap-3">
                <span className="text-warning font-bold">⚠️ Avoid:</span>
                <p className="text-muted-foreground leading-snug font-mono text-xs">Do not stack multi-layer shadows. Stick to the provided scale.</p>
              </div>
            </div>
          </div>
        </DocSection>
      </DocSection>

      <Timestamp date="17-01-2026 08:34PM" />
    </DocPage>
  )
}
