import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Label } from "@/components/ui/label";
import { DocPage, DocSection, ComponentExample, Timestamp } from "@/components/docs";

export default function RadioDocs() {
  return (
    <DocPage
      title="Radio Group"
      description="A set of checkable buttons where only one can be checked at a time."
      category="Components"
    >
      <DocSection title="Default" description="For selecting exactly one option from a list.">
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
          <RadioGroup defaultValue="option-1">
            <div className="flex items-center gap-2">
              <RadioGroupItem value="option-1" id="option-1" />
              <Label htmlFor="option-1">Option 1</Label>
            </div>
            <div className="flex items-center gap-2">
              <RadioGroupItem value="option-2" id="option-2" />
              <Label htmlFor="option-2">Option 2</Label>
            </div>
            <div className="flex items-center gap-2">
              <RadioGroupItem value="option-3" id="option-3" />
              <Label htmlFor="option-3">Option 3</Label>
            </div>
          </RadioGroup>
        </ComponentExample>
      </DocSection>

      <DocSection title="Horizontal" description="Use when space allows and options are short.">
        <ComponentExample
          code={`<RadioGroup defaultValue="sm" className="flex gap-4">
  ...
</RadioGroup>`}
        >
          <RadioGroup defaultValue="sm" className="flex gap-4">
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
          code={`<RadioGroup disabled defaultValue="enabled">
  ...
</RadioGroup>`}
        >
          <RadioGroup defaultValue="enabled" disabled>
            <div className="flex items-center gap-2">
              <RadioGroupItem value="enabled" id="dis-1" />
              <Label htmlFor="dis-1" className="text-muted-foreground">Selected (disabled)</Label>
            </div>
            <div className="flex items-center gap-2">
              <RadioGroupItem value="other" id="dis-2" />
              <Label htmlFor="dis-2" className="text-muted-foreground">Other (disabled)</Label>
            </div>
          </RadioGroup>
        </ComponentExample>
      </DocSection>

      <DocSection title="States" description="Selection and disabled states.">
        <ComponentExample
          code={`<RadioGroup defaultValue="selected">
  <RadioGroupItem value="selected" />   {/* Selected */}
  <RadioGroupItem value="unselected" /> {/* Unselected */}
</RadioGroup>
<RadioGroup disabled>                   {/* Disabled */}`}
        >
          <div className="flex gap-8">
            <RadioGroup defaultValue="selected">
              <div className="flex items-center gap-2">
                <RadioGroupItem value="selected" id="selected" />
                <Label htmlFor="selected">Selected</Label>
              </div>
              <div className="flex items-center gap-2">
                <RadioGroupItem value="unselected" id="unselected" />
                <Label htmlFor="unselected">Unselected</Label>
              </div>
            </RadioGroup>
            <RadioGroup disabled defaultValue="dis">
              <div className="flex items-center gap-2">
                <RadioGroupItem value="dis" id="dis" />
                <Label htmlFor="dis" className="text-muted-foreground">Disabled</Label>
              </div>
            </RadioGroup>
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
                <td className="p-3 font-medium">Unselected</td>
                <td className="p-3 text-muted-foreground">Border only</td>
                <td className="p-3 font-mono text-xs text-muted-foreground">border-input</td>
              </tr>
              <tr>
                <td className="p-3 font-medium">Selected</td>
                <td className="p-3 text-muted-foreground">Primary background + dot</td>
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

      <DocSection title="Props">
        <h3>RadioGroup</h3>
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
                <td className="p-4 font-mono text-xs">value</td>
                <td className="p-4 font-mono text-xs text-muted-foreground">string</td>
                <td className="p-4 font-mono text-xs text-muted-foreground">—</td>
              </tr>
              <tr>
                <td className="p-4 font-mono text-xs">defaultValue</td>
                <td className="p-4 font-mono text-xs text-muted-foreground">string</td>
                <td className="p-4 font-mono text-xs text-muted-foreground">—</td>
              </tr>
              <tr>
                <td className="p-4 font-mono text-xs">onValueChange</td>
                <td className="p-4 font-mono text-xs text-muted-foreground">(value: string) =&gt; void</td>
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
