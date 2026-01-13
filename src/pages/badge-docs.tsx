import { Badge } from "@/components/ui/badge";

// Inline SVG icons (since lucide-react is not installed)
const CheckIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M20 6 9 17l-5-5"/>
  </svg>
);

const XIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M18 6 6 18"/>
    <path d="m6 6 12 12"/>
  </svg>
);

const InfoIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <circle cx="12" cy="12" r="10"/>
    <path d="M12 16v-4"/>
    <path d="M12 8h.01"/>
  </svg>
);

const AlertTriangleIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="m21.73 18-8-14a2 2 0 0 0-3.48 0l-8 14A2 2 0 0 0 4 21h16a2 2 0 0 0 1.73-3Z"/>
    <path d="M12 9v4"/>
    <path d="M12 17h.01"/>
  </svg>
);

export default function BadgeDocs() {
  return (
    <div className="space-y-8 p-8">
      <div>
        <p className="text-sm text-muted-foreground">Docs/Components/Badge</p>
        <h1>Badge</h1>
        <p className="text-muted-foreground">
          Badges are used to inform users of status or categorization.
        </p>
      </div>

      {/* Subtle Variants */}
      <section className="space-y-4">
        <h2>Subtle Variants</h2>
        <p className="text-muted-foreground">
          Low-emphasis badges with tinted backgrounds.
        </p>
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
        <pre className="rounded-lg bg-muted px-4 py-3 text-sm">
{`<Badge>Default</Badge>
<Badge variant="info">Info</Badge>
<Badge variant="success">Success</Badge>
<Badge variant="warning">Warning</Badge>
<Badge variant="destructive">Destructive</Badge>
<Badge variant="outline">Outline</Badge>`}
        </pre>
      </section>

      {/* Solid Variants */}
      <section className="space-y-4">
        <h2>Solid Variants</h2>
        <p className="text-muted-foreground">
          High-emphasis badges with solid backgrounds.
        </p>
        <div className="flex items-center justify-center rounded-lg border bg-background p-8">
          <div className="flex flex-wrap items-center gap-2">
            <Badge variant="info-solid">Info</Badge>
            <Badge variant="success-solid">Success</Badge>
            <Badge variant="warning-solid">Warning</Badge>
            <Badge variant="destructive-solid">Destructive</Badge>
          </div>
        </div>
        <pre className="rounded-lg bg-muted px-4 py-3 text-sm">
{`<Badge variant="info-solid">Info</Badge>
<Badge variant="success-solid">Success</Badge>
<Badge variant="warning-solid">Warning</Badge>
<Badge variant="destructive-solid">Destructive</Badge>`}
        </pre>
      </section>

      {/* Sizes */}
      <section className="space-y-4">
        <h2>Sizes</h2>
        <p className="text-muted-foreground">
          Available in small (20px) and default (24px) sizes.
        </p>
        <div className="flex items-center justify-center rounded-lg border bg-background p-8">
          <div className="flex items-center gap-4">
            <Badge size="sm">Small</Badge>
            <Badge size="default">Default</Badge>
          </div>
        </div>
        <pre className="rounded-lg bg-muted px-4 py-3 text-sm">
{`<Badge size="sm">Small</Badge>
<Badge size="default">Default</Badge>`}
        </pre>
      </section>

      {/* With Icon */}
      <section className="space-y-4">
        <h2>With Icon</h2>
        <p className="text-muted-foreground">
          Icons are passed via the icon prop and automatically sized.
        </p>
        <div className="flex items-center justify-center rounded-lg border bg-background p-8">
          <div className="flex flex-wrap items-center gap-2">
            <Badge variant="success-solid" icon={<CheckIcon />}>
              Complete
            </Badge>
            <Badge variant="destructive-solid" icon={<XIcon />}>
              Failed
            </Badge>
            <Badge variant="info" icon={<InfoIcon />}>
              Pending
            </Badge>
            <Badge variant="warning" icon={<AlertTriangleIcon />}>
              Caution
            </Badge>
          </div>
        </div>
        <pre className="rounded-lg bg-muted px-4 py-3 text-sm">
{`<Badge variant="success-solid" icon={<CheckIcon />}>
  Complete
</Badge>
<Badge variant="destructive-solid" icon={<XIcon />}>
  Failed
</Badge>`}
        </pre>
      </section>

      {/* Small with Icon */}
      <section className="space-y-4">
        <h2>Small with Icon</h2>
        <p className="text-muted-foreground">
          Icons scale down automatically in small badges.
        </p>
        <div className="flex items-center justify-center rounded-lg border bg-background p-8">
          <div className="flex flex-wrap items-center gap-2">
            <Badge variant="success" size="sm" icon={<CheckIcon />}>
              Done
            </Badge>
            <Badge variant="destructive" size="sm" icon={<XIcon />}>
              Error
            </Badge>
            <Badge variant="info" size="sm" icon={<InfoIcon />}>
              New
            </Badge>
          </div>
        </div>
        <pre className="rounded-lg bg-muted px-4 py-3 text-sm">
{`<Badge variant="success" size="sm" icon={<CheckIcon />}>
  Done
</Badge>`}
        </pre>
      </section>

      {/* Props */}
      <section className="space-y-4">
        <h2>Props</h2>
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
      </section>

      {/* Design Tokens */}
      <section className="space-y-4">
        <h2>Design Tokens</h2>
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
      </section>
    </div>
  );
}
