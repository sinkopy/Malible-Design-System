import { Separator } from "@/components/ui/separator"
import { DocPage, DocSection, ComponentExample } from "@/components/docs"

export default function SeparatorDocs() {
  return (
    <DocPage
      title="Separator"
      description="Visually divides content into clear sections."
      category="Components"
    >
      <DocSection title="Examples" description="Common use cases and variations of the separator component." level={2}>
        <DocSection title="Horizontal" description="Default orientation. Full width, 1px height.">
          <ComponentExample
            code={`<div className="space-y-4">
  <div>Content above</div>
  <Separator />
  <div>Content below</div>
</div>`}
          >
            <div className="w-full max-w-sm space-y-4">
              <div className="text-sm">Content above</div>
              <Separator />
              <div className="text-sm">Content below</div>
            </div>
          </ComponentExample>
        </DocSection>

        <DocSection title="Vertical" description="Use orientation='vertical' for vertical dividers.">
          <ComponentExample
            code={`<div className="flex h-5 items-center gap-4">
  <span>Item 1</span>
  <Separator orientation="vertical" />
  <span>Item 2</span>
</div>`}
          >
            <div className="flex h-5 items-center gap-4 text-sm">
              <span className="font-medium">Item 1</span>
              <Separator orientation="vertical" />
              <span className="font-medium">Item 2</span>
              <Separator orientation="vertical" />
              <span className="font-medium">Item 3</span>
            </div>
          </ComponentExample>
        </DocSection>
      </DocSection>

      <DocSection title="Reference" description="Technical details and configuration for the separator component." level={2}>
        <DocSection title="Props" description="Separator component props configuration.">
          <div className="rounded-lg border border-border/50 overflow-hidden">
            <table className="w-full text-sm">
              <thead className="bg-muted/30">
                <tr>
                  <th className="text-left p-4 font-medium uppercase tracking-wider text-[11px] text-muted-foreground">Prop</th>
                  <th className="text-left p-4 font-medium uppercase tracking-wider text-[11px] text-muted-foreground">Type</th>
                  <th className="text-left p-4 font-medium uppercase tracking-wider text-[11px] text-muted-foreground">Default</th>
                  <th className="text-left p-4 font-medium uppercase tracking-wider text-[11px] text-muted-foreground">Description</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-border/50">
                <tr>
                  <td className="p-4 font-medium text-[13px]">orientation</td>
                  <td className="p-4"><code className="text-xs font-mono bg-muted/50 px-1.5 py-0.5 rounded text-info/80">"horizontal" | "vertical"</code></td>
                  <td className="p-4 text-muted-foreground text-[13px]">"horizontal"</td>
                  <td className="p-4 text-muted-foreground text-[13px]">The orientation of the separator.</td>
                </tr>
                <tr>
                  <td className="p-4 font-medium text-[13px]">decorative</td>
                  <td className="p-4"><code className="text-xs font-mono bg-muted/50 px-1.5 py-0.5 rounded text-info/80">boolean</code></td>
                  <td className="p-4 text-muted-foreground text-[13px]">true</td>
                  <td className="p-4 text-muted-foreground text-[13px]">Whether the component is purely decorative.</td>
                </tr>
              </tbody>
            </table>
          </div>
        </DocSection>

        <DocSection title="Best Practices">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-[14px]">
            <div className="space-y-4 p-4 rounded-lg bg-success/5 border border-success/10">
              <div className="flex gap-3">
                <span className="text-success font-bold">✅ Do:</span>
                <p className="text-muted-foreground leading-snug">Use separators to group related content sections visually for better information hierarchy.</p>
              </div>
              <div className="flex gap-3">
                <span className="text-success font-bold">✅ Do:</span>
                <p className="text-muted-foreground leading-snug">Use vertical separators sparingly in toolbars or navigation bars to separate logical groups.</p>
              </div>
            </div>
            <div className="space-y-4 p-4 rounded-lg bg-destructive/5 border border-destructive/10">
              <div className="flex gap-3">
                <span className="text-destructive font-bold">❌ Don't:</span>
                <p className="text-muted-foreground leading-snug">Use separators between every single item in a list—it creates unnecessary visual noise.</p>
              </div>
              <div className="flex gap-3">
                <span className="text-destructive font-bold">❌ Don't:</span>
                <p className="text-muted-foreground leading-snug">Mix horizontal and vertical separators inconsistently within the same component area.</p>
              </div>
            </div>
          </div>
        </DocSection>
      </DocSection>
    </DocPage>
  )
}
