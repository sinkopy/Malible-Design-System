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
      <DocSection title="Examples" description="Common use cases and variations of the checkbox component." level={2}>
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
      </DocSection>

      <DocSection title="Reference" description="Technical details and configuration for the checkbox component." level={2}>
        <DocSection title="State Reference">
          <div className="rounded-lg border border-border/50 overflow-hidden">
            <table className="w-full text-sm">
              <thead className="bg-muted/30">
                <tr>
                  <th className="text-left p-4 font-medium uppercase tracking-wider text-[11px] text-muted-foreground">State</th>
                  <th className="text-left p-4 font-medium uppercase tracking-wider text-[11px] text-muted-foreground">Style</th>
                  <th className="text-left p-4 font-medium uppercase tracking-wider text-[11px] text-muted-foreground">Token/Value</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-border/50">
                <tr>
                  <td className="p-4 font-medium">Unchecked</td>
                  <td className="p-4 text-muted-foreground text-[13px]">Border only</td>
                  <td className="p-4 font-mono text-xs text-info/80">border-input</td>
                </tr>
                <tr>
                  <td className="p-4 font-medium">Checked</td>
                  <td className="p-4 text-muted-foreground text-[13px]">Primary background + checkmark</td>
                  <td className="p-4 font-mono text-xs text-info/80">bg-primary</td>
                </tr>
                <tr>
                  <td className="p-4 font-medium">Indeterminate</td>
                  <td className="p-4 text-muted-foreground text-[13px]">Primary background + dash</td>
                  <td className="p-4 font-mono text-xs text-info/80">bg-primary</td>
                </tr>
                <tr>
                  <td className="p-4 font-medium">Disabled</td>
                  <td className="p-4 text-muted-foreground text-[13px]">50% opacity</td>
                  <td className="p-4 font-mono text-xs text-info/80">opacity-50</td>
                </tr>
              </tbody>
            </table>
          </div>
        </DocSection>

        <DocSection title="Props">
          <div className="rounded-lg border border-border/50 overflow-hidden">
            <table className="w-full text-sm">
              <thead className="bg-muted/30">
                <tr>
                  <th className="text-left p-4 font-medium uppercase tracking-wider text-[11px] text-muted-foreground">Prop</th>
                  <th className="text-left p-4 font-medium uppercase tracking-wider text-[11px] text-muted-foreground">Type</th>
                  <th className="text-left p-4 font-medium uppercase tracking-wider text-[11px] text-muted-foreground">Default</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-border/50">
                <tr>
                  <td className="p-4 font-mono text-xs text-info/80 font-semibold leading-tight">checked</td>
                  <td className="p-4 font-mono text-xs text-info/80">boolean | "indeterminate"</td>
                  <td className="p-4 font-mono text-xs text-muted-foreground">—</td>
                </tr>
                <tr>
                  <td className="p-4 font-mono text-xs text-info/80 font-semibold leading-tight">defaultChecked</td>
                  <td className="p-4 font-mono text-xs text-info/80">boolean</td>
                  <td className="p-4 font-mono text-xs text-muted-foreground">false</td>
                </tr>
                <tr>
                  <td className="p-4 font-mono text-xs text-info/80 font-semibold leading-tight">disabled</td>
                  <td className="p-4 font-mono text-xs text-info/80">boolean</td>
                  <td className="p-4 font-mono text-xs text-muted-foreground">false</td>
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
                <p className="text-muted-foreground leading-snug">Use checkboxes when users can select multiple options from a list.</p>
              </div>
              <div className="flex gap-3">
                <span className="text-success font-bold">✅ Do:</span>
                <p className="text-muted-foreground leading-snug">Use indeterminate state for "select all" when some children are checked.</p>
              </div>
            </div>
            <div className="space-y-4 p-4 rounded-lg bg-destructive/5 border border-destructive/10">
              <div className="flex gap-3">
                <span className="text-destructive font-bold">❌ Don't:</span>
                <p className="text-muted-foreground leading-snug">Use checkboxes for mutually exclusive options—use radio buttons instead.</p>
              </div>
              <div className="flex gap-3">
                <span className="text-destructive font-bold">❌ Don't:</span>
                <p className="text-muted-foreground leading-snug">Use checkboxes without labels—the label is the target for accessibility.</p>
              </div>
            </div>
          </div>
        </DocSection>
      </DocSection>

      <Timestamp date="13-01-2026" />
    </DocPage>
  );
}
