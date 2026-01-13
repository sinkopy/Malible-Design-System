import { Checkbox } from "@/components/ui/checkbox";
import { Label } from "@/components/ui/label";
import { Timestamp } from "@/components/docs";

export default function CheckboxDocs() {
  return (
    <div className="space-y-8 p-8">
      <div>
        <p className="text-sm text-muted-foreground">Docs/Components/Checkbox</p>
        <h1>Checkbox</h1>
        <p className="text-muted-foreground">
          A control for selecting one or more items from a set.
        </p>
      </div>

      <section className="space-y-4">
        <h2>Default</h2>
        <div className="flex items-center justify-center rounded-lg border bg-background p-8">
          <div className="flex items-center gap-2">
            <Checkbox id="terms" />
            <Label htmlFor="terms">Accept terms and conditions</Label>
          </div>
        </div>
        <pre className="rounded-lg bg-muted px-4 py-3 text-sm">
{`<Checkbox id="terms" />
<Label htmlFor="terms">Accept terms</Label>`}
        </pre>
      </section>

      <section className="space-y-4">
        <h2>States</h2>
        <div className="flex items-center justify-center rounded-lg border bg-background p-8">
          <div className="flex items-center gap-6">
            <div className="flex items-center gap-2">
              <Checkbox id="unchecked" />
              <Label htmlFor="unchecked">Unchecked</Label>
            </div>
            <div className="flex items-center gap-2">
              <Checkbox id="checked" defaultChecked />
              <Label htmlFor="checked">Checked</Label>
            </div>
            <div className="flex items-center gap-2">
              <Checkbox id="indeterminate" checked="indeterminate" />
              <Label htmlFor="indeterminate">Indeterminate</Label>
            </div>
          </div>
        </div>
        <pre className="rounded-lg bg-muted px-4 py-3 text-sm">
{`<Checkbox />
<Checkbox defaultChecked />
<Checkbox checked="indeterminate" />`}
        </pre>
      </section>

      <section className="space-y-4">
        <h2>Disabled</h2>
        <div className="flex items-center justify-center rounded-lg border bg-background p-8">
          <div className="flex items-center gap-6">
            <div className="flex items-center gap-2">
              <Checkbox id="disabled-unchecked" disabled />
              <Label htmlFor="disabled-unchecked" className="text-muted-foreground">Disabled</Label>
            </div>
            <div className="flex items-center gap-2">
              <Checkbox id="disabled-checked" disabled defaultChecked />
              <Label htmlFor="disabled-checked" className="text-muted-foreground">Disabled Checked</Label>
            </div>
          </div>
        </div>
        <pre className="rounded-lg bg-muted px-4 py-3 text-sm">
{`<Checkbox disabled />
<Checkbox disabled defaultChecked />`}
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
                <td className="p-4 font-mono text-xs text-muted-foreground">boolean | "indeterminate"</td>
                <td className="p-4 font-mono text-xs text-muted-foreground">—</td>
              </tr>
              <tr>
                <td className="p-4 font-mono text-xs">defaultChecked</td>
                <td className="p-4 font-mono text-xs text-muted-foreground">boolean</td>
                <td className="p-4 font-mono text-xs text-muted-foreground">false</td>
              </tr>
              <tr>
                <td className="p-4 font-mono text-xs">onCheckedChange</td>
                <td className="p-4 font-mono text-xs text-muted-foreground">(checked: boolean | "indeterminate") =&gt; void</td>
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

      <Timestamp date="13-01-2026" />
    </div>
  );
}
