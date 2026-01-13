import { Checkbox } from "@/components/ui/checkbox";
import { Label } from "@/components/ui/label";
import { DocPage, DocSection, ComponentExample, Timestamp } from "@/components/docs";

export default function CheckboxDocs() {
  return (
    <DocPage
      title="Checkbox"
      description="A control for selecting one or more items from a set."
      category="Components"
    >
      <DocSection title="Default" description="For selecting one or more options from a list.">
        <ComponentExample
          code={`<div className="flex items-center gap-2">
  <Checkbox id="terms" />
  <Label htmlFor="terms">Accept terms and conditions</Label>
</div>`}
        >
          <div className="flex items-center gap-2">
            <Checkbox id="terms" />
            <Label htmlFor="terms">Accept terms and conditions</Label>
          </div>
        </ComponentExample>
      </DocSection>

      <DocSection title="States" description="Selection states including indeterminate.">
        <ComponentExample
          code={`<Checkbox />                         {/* Unchecked */}
<Checkbox defaultChecked />          {/* Checked */}
<Checkbox checked="indeterminate" /> {/* Indeterminate */}
<Checkbox disabled />                {/* Disabled */}`}
        >
          <div className="grid grid-cols-2 gap-4">
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
            <div className="flex items-center gap-2">
              <Checkbox id="disabled" disabled />
              <Label htmlFor="disabled" className="text-muted-foreground">Disabled</Label>
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
                <td className="p-3 font-medium">Unchecked</td>
                <td className="p-3 text-muted-foreground">Border only</td>
                <td className="p-3 font-mono text-xs text-muted-foreground">border-input</td>
              </tr>
              <tr>
                <td className="p-3 font-medium">Checked</td>
                <td className="p-3 text-muted-foreground">Primary background + checkmark</td>
                <td className="p-3 font-mono text-xs text-muted-foreground">bg-primary</td>
              </tr>
              <tr>
                <td className="p-3 font-medium">Indeterminate</td>
                <td className="p-3 text-muted-foreground">Primary background + dash</td>
                <td className="p-3 font-mono text-xs text-muted-foreground">bg-primary</td>
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

      <DocSection title="Disabled" description="Prevents selection when option is unavailable.">
        <ComponentExample
          code={`<Checkbox disabled />
<Checkbox disabled defaultChecked />`}
        >
          <div className="flex items-center gap-6">
            <div className="flex items-center gap-2">
              <Checkbox id="disabled-off" disabled />
              <Label htmlFor="disabled-off" className="text-muted-foreground">Disabled</Label>
            </div>
            <div className="flex items-center gap-2">
              <Checkbox id="disabled-on" disabled defaultChecked />
              <Label htmlFor="disabled-on" className="text-muted-foreground">Disabled checked</Label>
            </div>
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
      </DocSection>

      <Timestamp date="13-01-2026" />
    </DocPage>
  );
}
