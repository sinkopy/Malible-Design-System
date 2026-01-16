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
      <DocSection title="Shadow Scale" description="5 elevation levels for different UI contexts.">
        <div className="rounded-lg border overflow-hidden">
          <table className="w-full text-sm">
            <thead className="bg-muted/50">
              <tr>
                <th className="text-left p-4 font-medium">Token</th>
                <th className="text-left p-4 font-medium">Preview</th>
                <th className="text-left p-4 font-medium">Use Case</th>
              </tr>
            </thead>
            <tbody className="divide-y">
              {shadowScale.map((shadow) => (
                <tr key={shadow.name}>
                  <td className="p-4">
                    <code className="text-sm bg-muted px-1.5 py-0.5 rounded">{shadow.name}</code>
                  </td>
                  <td className="p-4">
                    <div className={`w-24 h-12 bg-card rounded-lg border border-border ${shadow.name}`} />
                  </td>
                  <td className="p-4 text-muted-foreground">{shadow.use}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </DocSection>

      <DocSection title="Usage" description="Apply shadows via Tailwind utility classes.">
        <ComponentExample
          code={`<!-- No shadow (default) -->
<div className="rounded-lg border">...</div>

<!-- Card elevation -->
<div className="rounded-lg border shadow-md">...</div>

<!-- Dropdown/popover elevation -->
<div className="rounded-lg border shadow-lg">...</div>

<!-- Modal elevation -->
<div className="rounded-lg border shadow-xl">...</div>`}
        >
          <div className="flex gap-6 items-end">
            <div className="flex flex-col items-center gap-2">
              <div className="w-20 h-14 bg-card rounded-lg border border-border" />
              <span className="text-xs text-muted-foreground">none</span>
            </div>
            <div className="flex flex-col items-center gap-2">
              <div className="w-20 h-14 bg-card rounded-lg border border-border shadow-md" />
              <span className="text-xs text-muted-foreground">shadow-md</span>
            </div>
            <div className="flex flex-col items-center gap-2">
              <div className="w-20 h-14 bg-card rounded-lg border border-border shadow-lg" />
              <span className="text-xs text-muted-foreground">shadow-lg</span>
            </div>
            <div className="flex flex-col items-center gap-2">
              <div className="w-20 h-14 bg-card rounded-lg border border-border shadow-xl" />
              <span className="text-xs text-muted-foreground">shadow-xl</span>
            </div>
          </div>
        </ComponentExample>
      </DocSection>

      <DocSection title="Component Mapping" description="Recommended shadow levels per component.">
        <div className="rounded-lg border overflow-hidden">
          <table className="w-full text-sm">
            <thead className="bg-muted/50">
              <tr>
                <th className="text-left p-4 font-medium">Component</th>
                <th className="text-left p-4 font-medium">Shadow</th>
                <th className="text-left p-4 font-medium">Notes</th>
              </tr>
            </thead>
            <tbody className="divide-y">
              <tr>
                <td className="p-4">Card</td>
                <td className="p-4">
                  <code className="text-sm bg-muted px-1.5 py-0.5 rounded">none</code> or{" "}
                  <code className="text-sm bg-muted px-1.5 py-0.5 rounded">shadow-md</code>
                </td>
                <td className="p-4 text-muted-foreground">On-demand via className</td>
              </tr>
              <tr>
                <td className="p-4">Alert</td>
                <td className="p-4">
                  <code className="text-sm bg-muted px-1.5 py-0.5 rounded">shadow-xs</code>
                </td>
                <td className="p-4 text-muted-foreground">Subtle lift</td>
              </tr>
              <tr>
                <td className="p-4">Dropdown / Select</td>
                <td className="p-4">
                  <code className="text-sm bg-muted px-1.5 py-0.5 rounded">shadow-lg</code>
                </td>
                <td className="p-4 text-muted-foreground">Floating above content</td>
              </tr>
              <tr>
                <td className="p-4">Popover / Tooltip</td>
                <td className="p-4">
                  <code className="text-sm bg-muted px-1.5 py-0.5 rounded">shadow-lg</code>
                </td>
                <td className="p-4 text-muted-foreground">Floating above content</td>
              </tr>
              <tr>
                <td className="p-4">Modal / Dialog</td>
                <td className="p-4">
                  <code className="text-sm bg-muted px-1.5 py-0.5 rounded">shadow-xl</code>
                </td>
                <td className="p-4 text-muted-foreground">Highest elevation</td>
              </tr>
              <tr>
                <td className="p-4">Toast</td>
                <td className="p-4">
                  <code className="text-sm bg-muted px-1.5 py-0.5 rounded">shadow-lg</code>
                </td>
                <td className="p-4 text-muted-foreground">Floating notification</td>
              </tr>
            </tbody>
          </table>
        </div>
      </DocSection>

      <DocSection title="Design Principles">
        <ul className="space-y-2 text-sm text-muted-foreground">
          <li>• <strong>Single layer only</strong> — No stacked shadows</li>
          <li>• <strong>Soft opacity</strong> — Subtle, not harsh</li>
          <li>• <strong>Negative spread</strong> — Keeps shadow tight to element</li>
          <li>• <strong>Consistent color</strong> — Always #1A1A1A (foreground)</li>
          <li>• <strong>On-demand</strong> — Don't bake into component variants</li>
        </ul>
      </DocSection>

      <Timestamp date="13-01-2026" />
    </DocPage>
  )
}
