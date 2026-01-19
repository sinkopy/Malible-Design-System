import { Separator } from "@/components/ui/separator"
import { DocPage, DocSection, ComponentExample, PropsTable } from "@/components/docs"

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

      <DocSection title="Reference" description="Technical details and compliance for the separator component." level={2}>
        <DocSection title="Accessibility">
          <div className="space-y-4 text-[14px] text-muted-foreground leading-relaxed">
            <p>
              By default, separators are treated as decorative elements and hidden from screen readers.
            </p>
            <ul className="list-disc list-inside space-y-2 ml-2">
              <li>When <code className="text-[13px] bg-muted/20 border border-border/30 px-1 rounded">decorative</code> is true (default), the element uses <code className="text-[13px] bg-muted/20 border border-border/30 px-1 rounded">role="none"</code>.</li>
              <li>Set <code className="text-[13px] bg-muted/20 border border-border/30 px-1 rounded">decorative={false}</code> to use <code className="text-[13px] bg-muted/20 border border-border/30 px-1 rounded">role="separator"</code> for semantic dividers.</li>
              <li>Ensure correct <code className="text-[13px] bg-muted/20 border border-border/30 px-1 rounded">orientation</code> is passed for non-decorative separators.</li>
            </ul>
          </div>
        </DocSection>

        <DocSection title="Props" description="Separator component props configuration.">
          <PropsTable
            props={[
              {
                name: "orientation",
                type: '"horizontal" | "vertical"',
                default: '"horizontal"',
                description: "The orientation of the separator."
              },
              {
                name: "decorative",
                type: "boolean",
                default: "true",
                description: "Whether the component is purely decorative."
              },
            ]}
          />
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
