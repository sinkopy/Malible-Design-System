import { Switch } from "@/components/ui/switch";
import { Label } from "@/components/ui/label";
import { DocPage, DocSection, ComponentExample, Timestamp } from "@/components/docs";

export default function SwitchDocs() {
  return (
    <DocPage
      title="Switch"
      description="A toggle control for binary on/off states."
      category="Components"
    >
      <DocSection title="Default" description="Binary toggle for on/off settings.">
        <ComponentExample
          code={`<div className="flex items-center gap-2">
  <Switch id="airplane" />
  <Label htmlFor="airplane">Airplane Mode</Label>
</div>`}
        >
          <div className="flex items-center gap-2">
            <Switch id="airplane" />
            <Label htmlFor="airplane">Airplane Mode</Label>
          </div>
        </ComponentExample>
      </DocSection>

      <DocSection title="Checked" description="Active state with success color.">
        <ComponentExample
          code={`<Switch defaultChecked />`}
        >
          <div className="flex items-center gap-2">
            <Switch id="notifications" defaultChecked />
            <Label htmlFor="notifications">Notifications</Label>
          </div>
        </ComponentExample>
      </DocSection>

      <DocSection title="Disabled" description="Prevents interaction when setting is locked.">
        <ComponentExample
          code={`<Switch disabled />
<Switch disabled defaultChecked />`}
        >
          <div className="flex items-center gap-4">
            <div className="flex items-center gap-2">
              <Switch id="disabled-off" disabled />
              <Label htmlFor="disabled-off" className="text-muted-foreground">Disabled off</Label>
            </div>
            <div className="flex items-center gap-2">
              <Switch id="disabled-on" disabled defaultChecked />
              <Label htmlFor="disabled-on" className="text-muted-foreground">Disabled on</Label>
            </div>
          </div>
        </ComponentExample>
      </DocSection>

      <DocSection title="States" description="Toggle states and disabled variations.">
        <ComponentExample
          code={`<Switch />                    {/* Unchecked: bg-muted */}
<Switch defaultChecked />     {/* Checked: bg-success */}
<Switch disabled />           {/* Disabled: opacity-50 */}
<Switch disabled defaultChecked />`}
        >
          <div className="grid grid-cols-2 gap-4">
            <div className="flex items-center gap-2">
              <Switch id="off" />
              <Label htmlFor="off">Off</Label>
            </div>
            <div className="flex items-center gap-2">
              <Switch id="on" defaultChecked />
              <Label htmlFor="on">On</Label>
            </div>
            <div className="flex items-center gap-2">
              <Switch id="dis-off" disabled />
              <Label htmlFor="dis-off" className="text-muted-foreground">Disabled Off</Label>
            </div>
            <div className="flex items-center gap-2">
              <Switch id="dis-on" disabled defaultChecked />
              <Label htmlFor="dis-on" className="text-muted-foreground">Disabled On</Label>
            </div>
          </div>
        </ComponentExample>
      </DocSection>

      <DocSection title="State Reference">
        <div className="rounded-lg border overflow-hidden">
          <table className="w-full text-sm">
            <thead className="bg-muted/50">
              <tr>
                <th className="text-left p-3 font-medium">State</th>
                <th className="text-left p-3 font-medium">Style</th>
                <th className="text-left p-3 font-medium">Token/Value</th>
              </tr>
            </thead>
            <tbody className="divide-y">
              <tr>
                <td className="p-3 font-medium">Off</td>
                <td className="p-3 text-muted-foreground">Muted background</td>
                <td className="p-3 font-mono text-xs text-muted-foreground">bg-muted</td>
              </tr>
              <tr>
                <td className="p-3 font-medium">On</td>
                <td className="p-3 text-muted-foreground">Success background</td>
                <td className="p-3 font-mono text-xs text-muted-foreground">bg-success</td>
              </tr>
              <tr>
                <td className="p-3 font-medium">Disabled</td>
                <td className="p-3 text-muted-foreground">50% opacity</td>
                <td className="p-3 font-mono text-xs text-muted-foreground">opacity-50</td>
              </tr>
            </tbody>
          </table>
        </div>
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

      <DocSection title="Best Practices">
        <div className="space-y-4 text-sm">
          <div className="flex gap-3">
            <span className="text-green-600 font-medium">✅ Do:</span>
            <p className="text-muted-foreground">Use switches for binary on/off settings that take effect immediately.</p>
          </div>
          <div className="flex gap-3">
            <span className="text-red-600 font-medium">❌ Don't:</span>
            <p className="text-muted-foreground">Use switches for yes/no questions that require form submission.</p>
          </div>

          <div className="flex gap-3">
            <span className="text-green-600 font-medium">✅ Do:</span>
            <p className="text-muted-foreground">Always pair with a label that describes what happens when "on".</p>
          </div>
          <div className="flex gap-3">
            <span className="text-red-600 font-medium">❌ Don't:</span>
            <p className="text-muted-foreground">Use ambiguous labels like "Setting" without explaining the effect.</p>
          </div>
        </div>
      </DocSection>

      <Timestamp date="17-01-2026 08:34PM" />
    </DocPage>
  );
}
