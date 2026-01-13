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

      <DocSection title="Props">
        <div className="rounded-lg border overflow-hidden">
          <table className="w-full text-sm">
            <thead className="bg-muted/50">
              <tr>
                <th className="text-left p-4 font-medium">Prop</th>
                <th className="text-left p-4 font-medium">Type</th>
                <th className="text-left p-4 font-medium">Default</th>
              </tr>
            </thead>
            <tbody className="divide-y">
              <tr>
                <td className="p-4 font-mono text-xs">variant</td>
                <td className="p-4 font-mono text-xs text-muted-foreground">"default" | "info" | "info-solid" | "success" | "success-solid" | "warning" | "warning-solid" | "destructive" | "destructive-solid" | "outline"</td>
                <td className="p-4 font-mono text-xs text-muted-foreground">"default"</td>
              </tr>
              <tr>
                <td className="p-4 font-mono text-xs">size</td>
                <td className="p-4 font-mono text-xs text-muted-foreground">"sm" | "default"</td>
                <td className="p-4 font-mono text-xs text-muted-foreground">"default"</td>
              </tr>
            </tbody>
          </table>
        </div>
      </DocSection>

      <DocSection title="Design Tokens">
        <div className="rounded-lg border overflow-hidden">
          <table className="w-full text-sm">
            <thead className="bg-muted/50">
              <tr>
                <th className="text-left p-4 font-medium">Token</th>
                <th className="text-left p-4 font-medium">Value</th>
                <th className="text-left p-4 font-medium">Usage</th>
              </tr>
            </thead>
            <tbody className="divide-y">
              <tr>
                <td className="p-4 font-mono text-xs">--info</td>
                <td className="p-4 font-mono text-xs text-muted-foreground">#008ed6</td>
                <td className="p-4 text-muted-foreground">Info badges</td>
              </tr>
              <tr>
                <td className="p-4 font-mono text-xs">--success</td>
                <td className="p-4 font-mono text-xs text-muted-foreground">#3ea377</td>
                <td className="p-4 text-muted-foreground">Success badges</td>
              </tr>
              <tr>
                <td className="p-4 font-mono text-xs">--warning</td>
                <td className="p-4 font-mono text-xs text-muted-foreground">#e09200</td>
                <td className="p-4 text-muted-foreground">Warning badges</td>
              </tr>
              <tr>
                <td className="p-4 font-mono text-xs">--destructive</td>
                <td className="p-4 font-mono text-xs text-muted-foreground">#bf1616</td>
                <td className="p-4 text-muted-foreground">Destructive badges</td>
              </tr>
            </tbody>
          </table>
        </div>
      </DocSection>

      <Timestamp date="13-01-2026" />
    </DocPage>
  );
}
