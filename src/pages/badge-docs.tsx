import { Badge } from "@/components/ui/badge";
import { DocPage, DocSection, ComponentExample, Timestamp } from "@/components/docs";
import { Check, X, Info, Warning } from "@phosphor-icons/react";

export default function BadgeDocs() {
  return (
    <DocPage
      title="Badge"
      description="Badges are used to inform users of status or categorization."
      category="Components"
    >
      <DocSection title="Examples" description="Common use cases and variations of the badge component." level={2}>
        <DocSection title="Subtle Variants" description="Low-emphasis badges for status indicators.">
          <ComponentExample
            code={`<Badge>Default</Badge>
<Badge variant="info">Info</Badge>
<Badge variant="success">Success</Badge>
<Badge variant="warning">Warning</Badge>
<Badge variant="destructive">Destructive</Badge>
<Badge variant="outline">Outline</Badge>`}
          >
            <div className="flex flex-wrap items-center gap-2">
              <Badge>Default</Badge>
              <Badge variant="info">Info</Badge>
              <Badge variant="success">Success</Badge>
              <Badge variant="warning">Warning</Badge>
              <Badge variant="destructive">Destructive</Badge>
              <Badge variant="outline">Outline</Badge>
            </div>
          </ComponentExample>
        </DocSection>

        <DocSection title="Solid Variants" description="High-emphasis badges for important status.">
          <ComponentExample
            code={`<Badge variant="info-solid">Info</Badge>
<Badge variant="success-solid">Success</Badge>
<Badge variant="warning-solid">Warning</Badge>
<Badge variant="destructive-solid">Destructive</Badge>`}
          >
            <div className="flex flex-wrap items-center gap-2">
              <Badge variant="info-solid">Info</Badge>
              <Badge variant="success-solid">Success</Badge>
              <Badge variant="warning-solid">Warning</Badge>
              <Badge variant="destructive-solid">Destructive</Badge>
            </div>
          </ComponentExample>
        </DocSection>

        <DocSection title="Sizes" description="Small for dense UIs, default for standard use.">
          <ComponentExample
            code={`<Badge size="sm">Small</Badge>
<Badge size="default">Default</Badge>`}
          >
            <div className="flex items-center gap-4">
              <Badge size="sm">Small</Badge>
              <Badge size="default">Default</Badge>
            </div>
          </ComponentExample>
        </DocSection>

        <DocSection title="With Icon" description="Icons reinforce meaning. Auto-sized to badge.">
          <ComponentExample
            code={`<Badge variant="success-solid" icon={<Check size={14} />}>
  Complete
</Badge>
<Badge variant="destructive-solid" icon={<X size={14} />}>
  Failed
</Badge>`}
          >
            <div className="flex flex-wrap items-center gap-2">
              <Badge variant="success-solid" icon={<Check size={14} />}>
                Complete
              </Badge>
              <Badge variant="destructive-solid" icon={<X size={14} />}>
                Failed
              </Badge>
              <Badge variant="info" icon={<Info size={14} />}>
                Pending
              </Badge>
              <Badge variant="warning" icon={<Warning size={14} />}>
                Caution
              </Badge>
            </div>
          </ComponentExample>
        </DocSection>

        <DocSection title="Small with Icon" description="Icons scale down automatically in small badges.">
          <ComponentExample
            code={`<Badge variant="success" size="sm" icon={<Check size={14} />}>
  Done
</Badge>`}
          >
            <div className="flex flex-wrap items-center gap-2">
              <Badge variant="success" size="sm" icon={<Check size={14} />}>
                Done
              </Badge>
              <Badge variant="destructive" size="sm" icon={<X size={14} />}>
                Error
              </Badge>
              <Badge variant="info" size="sm" icon={<Info size={14} />}>
                New
              </Badge>
            </div>
          </ComponentExample>
        </DocSection>
      </DocSection>

      <DocSection title="Reference" description="Technical details and configuration for the badge component." level={2}>
        <DocSection title="Props">
          <div className="rounded-lg border overflow-hidden">
            <table className="w-full text-sm">
              <thead className="bg-muted/30">
                <tr>
                  <th className="text-left p-4 font-medium uppercase tracking-wider text-[11px] text-muted-foreground">Prop</th>
                  <th className="text-left p-4 font-medium uppercase tracking-wider text-[11px] text-muted-foreground">Type</th>
                  <th className="text-left p-4 font-medium uppercase tracking-wider text-[11px] text-muted-foreground">Default</th>
                </tr>
              </thead>
              <tbody className="divide-y">
                <tr>
                  <td className="p-4 font-mono text-xs">variant</td>
                  <td className="p-4 font-mono text-xs text-info/80">"default" | "info" | "info-solid" | "success" | "success-solid" | "warning" | "warning-solid" | "destructive" | "destructive-solid" | "outline"</td>
                  <td className="p-4 font-mono text-xs text-muted-foreground">"default"</td>
                </tr>
                <tr>
                  <td className="p-4 font-mono text-xs">size</td>
                  <td className="p-4 font-mono text-xs text-info/80">"sm" | "default"</td>
                  <td className="p-4 font-mono text-xs text-muted-foreground">"default"</td>
                </tr>
              </tbody>
            </table>
          </div>
        </DocSection>

        <DocSection title="Design Tokens">
          <div className="rounded-lg border border-border/50 overflow-hidden">
            <table className="w-full text-sm font-body">
              <thead className="bg-muted/30">
                <tr>
                  <th className="text-left p-4 font-medium uppercase tracking-wider text-[11px] text-muted-foreground">Token</th>
                  <th className="text-left p-4 font-medium uppercase tracking-wider text-[11px] text-muted-foreground">Value</th>
                  <th className="text-left p-4 font-medium uppercase tracking-wider text-[11px] text-muted-foreground">Usage</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-border/50">
                <tr>
                  <td className="p-4 font-mono text-xs">--info</td>
                  <td className="p-4 font-mono text-xs text-muted-foreground">#008ed6</td>
                  <td className="p-4 text-muted-foreground text-[13px]">Info badges</td>
                </tr>
                <tr>
                  <td className="p-4 font-mono text-xs">--success</td>
                  <td className="p-4 font-mono text-xs text-muted-foreground">#3ea377</td>
                  <td className="p-4 text-muted-foreground text-[13px]">Success badges</td>
                </tr>
                <tr>
                  <td className="p-4 font-mono text-xs">--warning</td>
                  <td className="p-4 font-mono text-xs text-muted-foreground">#e09200</td>
                  <td className="p-4 text-muted-foreground text-[13px]">Warning badges</td>
                </tr>
                <tr>
                  <td className="p-4 font-mono text-xs">--destructive</td>
                  <td className="p-4 font-mono text-xs text-muted-foreground">#bf1616</td>
                  <td className="p-4 text-muted-foreground text-[13px]">Destructive badges</td>
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
                <p className="text-muted-foreground leading-snug">Use semantic variants that match meaning: success for completed, warning for attention needed.</p>
              </div>
              <div className="flex gap-3">
                <span className="text-success font-bold">✅ Do:</span>
                <p className="text-muted-foreground leading-snug">Keep badge text short—1-2 words maximum for clarity.</p>
              </div>
            </div>
            <div className="space-y-4 p-4 rounded-lg bg-destructive/5 border border-destructive/10">
              <div className="flex gap-3">
                <span className="text-destructive font-bold">❌ Don't:</span>
                <p className="text-muted-foreground leading-snug">Use destructive (red) for neutral statuses or success for errors.</p>
              </div>
              <div className="flex gap-3">
                <span className="text-destructive font-bold">❌ Don't:</span>
                <p className="text-muted-foreground leading-snug">Put long sentences in badges. Use Alerts for detailed messages.</p>
              </div>
            </div>
          </div>
        </DocSection>
      </DocSection>

      <Timestamp date="17-01-2026 08:34PM" />
    </DocPage>
  );
}
