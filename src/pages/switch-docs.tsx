import { Switch } from "@/components/ui/switch";
import { Label } from "@/components/ui/label";

export default function SwitchDocs() {
  return (
    <div className="space-y-8 p-8">
      <div>
        <p className="text-sm text-muted-foreground">Docs/Components/Switch</p>
        <h1>Switch</h1>
        <p className="text-muted-foreground">
          A toggle control for binary on/off states.
        </p>
      </div>

      <section className="space-y-4">
        <h2>Default</h2>
        <div className="flex items-center justify-center rounded-lg border bg-background p-8">
          <div className="flex items-center gap-2">
            <Switch id="default-switch" />
            <Label htmlFor="default-switch">Airplane Mode</Label>
          </div>
        </div>
        <pre className="rounded-lg bg-muted px-4 py-3 text-sm">
{`<Switch id="airplane" />
<Label htmlFor="airplane">Airplane Mode</Label>`}
        </pre>
      </section>

      <section className="space-y-4">
        <h2>Checked</h2>
        <div className="flex items-center justify-center rounded-lg border bg-background p-8">
          <div className="flex items-center gap-2">
            <Switch id="checked-switch" defaultChecked />
            <Label htmlFor="checked-switch">Notifications</Label>
          </div>
        </div>
        <pre className="rounded-lg bg-muted px-4 py-3 text-sm">
{`<Switch id="notifications" defaultChecked />`}
        </pre>
      </section>

      <section className="space-y-4">
        <h2>Disabled</h2>
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
        <pre className="rounded-lg bg-muted px-4 py-3 text-sm">
{`<Switch disabled />
<Switch disabled defaultChecked />`}
        </pre>
      </section>

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
      </section>
    </div>
  );
}
