import { Checkbox } from "@/components/ui/checkbox";
import { Label } from "@/components/ui/label";
import { DocPage, DocSection, ComponentExample, Timestamp, PropsTable, StateTable } from "@/components/docs";

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
        <DocSection title="Accessibility">
          <div className="space-y-4 text-[14px] text-muted-foreground leading-relaxed">
            <p>
              Checkboxes use semantic HTML and ARIA attributes to ensure they are accessible.
            </p>
            <ul className="list-disc list-inside space-y-2 ml-2">
              <li>Use the <code className="text-[13px] bg-muted/20 border border-border/30 px-1 rounded">Label</code> component with <code className="text-[13px] bg-muted/20 border border-border/30 px-1 rounded">htmlFor</code> to provide a text label.</li>
              <li>Supports <code className="text-[13px] bg-muted/20 border border-border/30 px-1 rounded">indeterminate</code> state for partial selection.</li>
              <li>Keyboard: <kbd className="text-[11px] font-sans bg-muted/20 px-1 rounded border border-border/20">Space</kbd> to toggle.</li>
            </ul>
          </div>
        </DocSection>

        <DocSection title="State Reference">
          <StateTable
            states={[
              { state: "Unchecked", style: "Border only", token: "border-input" },
              { state: "Checked", style: "Primary background", token: "bg-primary" },
              { state: "Indeterminate", style: "Dash indicator", token: "bg-primary" },
              { state: "Disabled", style: "50% opacity", token: "opacity-50" },
            ]}
          />
        </DocSection>

        <DocSection title="Props">
          <PropsTable
            props={[
              {
                name: "checked",
                type: 'boolean | "indeterminate"',
                description: "The checked state of the checkbox."
              },
              {
                name: "defaultChecked",
                type: "boolean",
                default: "false",
                description: "The initial checked state."
              },
              {
                name: "disabled",
                type: "boolean",
                default: "false",
                description: "Whether the checkbox is disabled."
              },
            ]}
          />
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

      <Timestamp date="17-01-2026 08:34PM" />
    </DocPage>
  );
}
