import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Label } from "@/components/ui/label";
import { DocPage, Timestamp } from "@/components/docs";

export default function RadioDocs() {
  return (
    <DocPage
      title="Radio Group"
      description="A set of checkable buttons where only one can be checked at a time."
      category="Components"
    >

      <section className="space-y-4">
        <h2>Default</h2>
        <div className="flex items-center justify-center rounded-lg border bg-background p-8">
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
        </div>
        <pre className="rounded-lg bg-muted px-4 py-3 text-sm">
{`<RadioGroup defaultValue="option-1">
  <div className="flex items-center gap-2">
    <RadioGroupItem value="option-1" id="option-1" />
    <Label htmlFor="option-1">Option 1</Label>
  </div>
  ...
</RadioGroup>`}
        </pre>
      </section>

      <section className="space-y-4">
        <h2>Horizontal</h2>
        <div className="flex items-center justify-center rounded-lg border bg-background p-8">
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
        </div>
        <pre className="rounded-lg bg-muted px-4 py-3 text-sm">
{`<RadioGroup className="flex gap-4">
  ...
</RadioGroup>`}
        </pre>
      </section>

      <section className="space-y-4">
        <h2>Disabled</h2>
        <div className="flex items-center justify-center rounded-lg border bg-background p-8">
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
        </div>
        <pre className="rounded-lg bg-muted px-4 py-3 text-sm">
{`<RadioGroup disabled>
  ...
</RadioGroup>`}
        </pre>
      </section>

      <section className="space-y-4">
        <h2>Props</h2>
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
      </section>

      <Timestamp date="13-01-2026" />
    </DocPage>
  );
}
