import { Badge } from "@/components/ui/badge";
import { DocPage, DocSection, CodeBlock, Timestamp } from "@/components/docs";
import { Check, X, Info, Warning } from "@phosphor-icons/react";

export default function BadgeDocs() {
  return (
    <DocPage
      title="Badge"
      description="Badges are used to inform users of status or categorization."
      category="Components"
    >
      <DocSection title="Subtle Variants" description="Low-emphasis badges with tinted backgrounds.">
        <div className="flex items-center justify-center rounded-lg border bg-background p-8">
          <div className="flex flex-wrap items-center gap-2">
            <Badge>Default</Badge>
            <Badge variant="info">Info</Badge>
            <Badge variant="success">Success</Badge>
            <Badge variant="warning">Warning</Badge>
            <Badge variant="destructive">Destructive</Badge>
            <Badge variant="outline">Outline</Badge>
          </div>
        </div>
        <CodeBlock code={`<Badge>Default</Badge>
<Badge variant="info">Info</Badge>
<Badge variant="success">Success</Badge>
<Badge variant="warning">Warning</Badge>
<Badge variant="destructive">Destructive</Badge>
<Badge variant="outline">Outline</Badge>`} />
      </DocSection>

      <DocSection title="Solid Variants" description="High-emphasis badges with solid backgrounds.">
        <div className="flex items-center justify-center rounded-lg border bg-background p-8">
          <div className="flex flex-wrap items-center gap-2">
            <Badge variant="info-solid">Info</Badge>
            <Badge variant="success-solid">Success</Badge>
            <Badge variant="warning-solid">Warning</Badge>
            <Badge variant="destructive-solid">Destructive</Badge>
          </div>
        </div>
        <CodeBlock code={`<Badge variant="info-solid">Info</Badge>
<Badge variant="success-solid">Success</Badge>
<Badge variant="warning-solid">Warning</Badge>
<Badge variant="destructive-solid">Destructive</Badge>`} />
      </DocSection>

      <DocSection title="Sizes" description="Available in small (20px) and default (24px) sizes.">
        <div className="flex items-center justify-center rounded-lg border bg-background p-8">
          <div className="flex items-center gap-4">
            <Badge size="sm">Small</Badge>
            <Badge size="default">Default</Badge>
          </div>
        </div>
        <CodeBlock code={`<Badge size="sm">Small</Badge>
<Badge size="default">Default</Badge>`} />
      </DocSection>

      <DocSection title="With Icon" description="Icons are passed via the icon prop and automatically sized.">
        <div className="flex items-center justify-center rounded-lg border bg-background p-8">
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
        </div>
        <CodeBlock code={`<Badge variant="success-solid" icon={<Check size={14} />}>
  Complete
</Badge>
<Badge variant="destructive-solid" icon={<X size={14} />}>
  Failed
</Badge>`} />
      </DocSection>

      <DocSection title="Small with Icon" description="Icons scale down automatically in small badges.">
        <div className="flex items-center justify-center rounded-lg border bg-background p-8">
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
        </div>
        <CodeBlock code={`<Badge variant="success" size="sm" icon={<Check size={14} />}>
  Done
</Badge>`} />
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
