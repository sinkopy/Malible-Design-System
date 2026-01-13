import { Switch } from "@/components/ui/switch";
import { Label } from "@/components/ui/label";
import { DocPage, DocSection, CodeBlock, Timestamp } from "@/components/docs";

export default function SwitchDocs() {
  return (
    <DocPage
      title="Switch"
      description="A toggle control for binary on/off states."
      category="Components"
    >
      <DocSection title="Default">
        <div className="flex items-center justify-center rounded-lg border bg-background p-8">
          <div className="flex items-center gap-2">
            <Switch id="default-switch" />
            <Label htmlFor="default-switch">Airplane Mode</Label>
          </div>
        </div>
        <CodeBlock code={`<Switch id="airplane" />
<Label htmlFor="airplane">Airplane Mode</Label>`} />
      </DocSection>

      <DocSection title="Checked">
        <div className="flex items-center justify-center rounded-lg border bg-background p-8">
          <div className="flex items-center gap-2">
            <Switch id="checked-switch" defaultChecked />
            <Label htmlFor="checked-switch">Notifications</Label>
          </div>
        </div>
        <CodeBlock code={`<Switch id="notifications" defaultChecked />`} />
      </DocSection>

      <DocSection title="Disabled">
        <div className="flex items-center justify-center rounded-lg border bg-background p-8">
          <div className="flex items-center gap-4">
            <div className="flex items-center gap-2">
              <Switch id="disabled-off" disabled />
              <Label htmlFor="disabled-off" className="text-muted-foreground">Disabled Off</Label>
            </div>
            <div className="flex items-center gap-2">
              <Switch id="disabled-on" disabled defaultChecked />
              <Label htmlFor="disabled-on" className="text-muted-foreground">Disabled On</Label>
            </div>
          </div>
        </div>
        <CodeBlock code={`<Switch disabled />
<Switch disabled defaultChecked />`} />
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
                <td className="p-4 font-mono text-xs">checked</td>
                <td className="p-4 font-mono text-xs text-muted-foreground">boolean</td>
                <td className="p-4 font-mono text-xs text-muted-foreground">—</td>
              </tr>
              <tr>
                <td className="p-4 font-mono text-xs">defaultChecked</td>
                <td className="p-4 font-mono text-xs text-muted-foreground">boolean</td>
                <td className="p-4 font-mono text-xs text-muted-foreground">false</td>
              </tr>
              <tr>
                <td className="p-4 font-mono text-xs">onCheckedChange</td>
                <td className="p-4 font-mono text-xs text-muted-foreground">(checked: boolean) =&gt; void</td>
                <td className="p-4 font-mono text-xs text-muted-foreground">—</td>
              </tr>
              <tr>
                <td className="p-4 font-mono text-xs">disabled</td>
                <td className="p-4 font-mono text-xs text-muted-foreground">boolean</td>
                <td className="p-4 font-mono text-xs text-muted-foreground">false</td>
              </tr>
            </tbody>
          </table>
        </div>
      </DocSection>

      <Timestamp date="13-01-2026" />
    </DocPage>
  );
}
