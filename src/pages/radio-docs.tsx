import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Label } from "@/components/ui/label";
import { DocPage, DocSection, ComponentExample, Timestamp, PropsTable } from "@/components/docs";

export default function RadioDocs() {
  return (
    <DocPage
      title="Radio Group"
      description="A set of checkable buttons where only one can be checked at a time."
      category="Components"
    >
      <DocSection title="Examples" description="Common use cases and variations of the radio group component." level={2}>
        <DocSection title="Default" description="Standard vertical layout for selecting exactly one option from a list.">
          <ComponentExample
            code={`<RadioGroup defaultValue="option-1">
  <div className="flex items-center gap-2">
    <RadioGroupItem value="option-1" id="option-1" />
    <Label htmlFor="option-1">Option 1</Label>
  </div>
  <div className="flex items-center gap-2">
    <RadioGroupItem value="option-2" id="option-2" />
    <Label htmlFor="option-2">Option 2</Label>
  </div>
</RadioGroup>`}
          >
            <RadioGroup defaultValue="option-1" className="grid gap-4">
              <div className="flex items-center gap-3">
                <RadioGroupItem value="option-1" id="option-1" />
                <Label htmlFor="option-1">Option 1</Label>
              </div>
              <div className="flex items-center gap-3">
                <RadioGroupItem value="option-2" id="option-2" />
                <Label htmlFor="option-2">Option 2</Label>
              </div>
              <div className="flex items-center gap-3">
                <RadioGroupItem value="option-3" id="option-3" />
                <Label htmlFor="option-3">Option 3</Label>
              </div>
            </RadioGroup>
          </ComponentExample>
        </DocSection>

        <DocSection title="Horizontal" description="Use when space allows and options are short.">
          <ComponentExample
            code={`<RadioGroup defaultValue="md" className="flex gap-6">
  <div className="flex items-center gap-2">
    <RadioGroupItem value="sm" id="size-sm" />
    <Label htmlFor="size-sm">Small</Label>
  </div>
  {/* ... */}
</RadioGroup>`}
          >
            <RadioGroup defaultValue="md" className="flex flex-wrap gap-6">
              <div className="flex items-center gap-2">
                <RadioGroupItem value="sm" id="size-sm" />
                <Label htmlFor="size-sm">Small</Label>
              </div>
              <div className="flex items-center gap-2">
                <RadioGroupItem value="md" id="size-md" />
                <Label htmlFor="size-md">Medium</Label>
              </div>
              <div className="flex items-center gap-2">
                <RadioGroupItem value="lg" id="size-lg" />
                <Label htmlFor="size-lg">Large</Label>
              </div>
            </RadioGroup>
          </ComponentExample>
        </DocSection>

        <DocSection title="Disabled" description="Prevents selection when options are locked.">
          <ComponentExample
            code={`<RadioGroup defaultValue="disabled-selected" disabled>
  <div className="flex items-center gap-2">
    <RadioGroupItem value="disabled-selected" id="d1" />
    <Label htmlFor="d1">Selected (disabled)</Label>
  </div>
  {/* ... */}
</RadioGroup>`}
          >
            <RadioGroup defaultValue="disabled-selected" disabled className="grid gap-4">
              <div className="flex items-center gap-3">
                <RadioGroupItem value="disabled-selected" id="d1" />
                <Label htmlFor="d1" className="text-muted-foreground opacity-70">Selected (disabled)</Label>
              </div>
              <div className="flex items-center gap-3">
                <RadioGroupItem value="disabled-unselected" id="d2" />
                <Label htmlFor="d2" className="text-muted-foreground opacity-70">Unselected (disabled)</Label>
              </div>
            </RadioGroup>
          </ComponentExample>
        </DocSection>
      </DocSection>

      <DocSection title="Reference" description="Technical details and compliance for the radio group component." level={2}>
        <DocSection title="Accessibility">
          <div className="space-y-4 text-[14px] text-muted-foreground leading-relaxed">
            <p>
              Radio groups use standard ARIA patterns to ensure they are accessible.
            </p>
            <ul className="list-disc list-inside space-y-2 ml-2">
              <li>Use the <code className="text-[13px] bg-muted/20 border border-border/30 px-1 rounded">RadioGroup</code> and <code className="text-[13px] bg-muted/20 border border-border/30 px-1 rounded">RadioGroupItem</code> components together.</li>
              <li>Each item must be associated with a <code className="text-[13px] bg-muted/20 border border-border/30 px-1 rounded">Label</code> via <code className="text-[13px] bg-muted/20 border border-border/30 px-1 rounded">id</code> and <code className="text-[13px] bg-muted/20 border border-border/30 px-1 rounded">htmlFor</code>.</li>
              <li>Keyboard: <kbd className="text-[11px] font-sans bg-muted/20 px-1 rounded border border-border/20">Arrow Keys</kbd> to navigate, <kbd className="text-[11px] font-sans bg-muted/20 px-1 rounded border border-border/20">Space</kbd> to select.</li>
            </ul>
          </div>
        </DocSection>

        <DocSection title="Props" description="Radio Group component props configuration.">
          <PropsTable
            props={[
              {
                name: "defaultValue",
                type: "string",
                description: "The value of the radio item checked by default."
              },
              {
                name: "onValueChange",
                type: "(value: string) => void",
                description: "Event handler called when the value changes."
              },
              {
                name: "disabled",
                type: "boolean",
                default: "false",
                description: "Whether the entire group is disabled."
              },
            ]}
          />
        </DocSection>

        <DocSection title="Best Practices">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-[14px]">
            <div className="space-y-4 p-4 rounded-lg bg-success/5 border border-success/10">
              <div className="flex gap-3">
                <span className="text-success font-bold">✅ Do:</span>
                <p className="text-muted-foreground leading-snug">Use radio buttons for mutually exclusive choices where only one option can be selected.</p>
              </div>
              <div className="flex gap-3">
                <span className="text-success font-bold">✅ Do:</span>
                <p className="text-muted-foreground leading-snug">Always provide a default selection when one option makes sense as a standard choice.</p>
              </div>
            </div>
            <div className="space-y-4 p-4 rounded-lg bg-destructive/5 border border-destructive/10">
              <div className="flex gap-3">
                <span className="text-destructive font-bold">❌ Don't:</span>
                <p className="text-muted-foreground leading-snug">Use for binary yes/no questions where a single checkbox or switch would be more appropriate.</p>
              </div>
              <div className="flex gap-3">
                <span className="text-destructive font-bold">❌ Don't:</span>
                <p className="text-muted-foreground leading-snug">Use more than 5-6 options—consider a dropdown menu for larger lists to save space.</p>
              </div>
            </div>
          </div>
        </DocSection>
      </DocSection>

      <Timestamp date="17-01-2026 08:34PM" />
    </DocPage>
  );
}
