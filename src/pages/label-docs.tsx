import { Label } from "@/components/ui/label"
import { Input } from "@/components/ui/input"
import { Checkbox } from "@/components/ui/checkbox"
import { DocPage, DocSection, ComponentExample } from "@/components/docs"

export default function LabelDocs() {
  return (
    <DocPage
      title="Label"
      description="Accessible label for form controls and inputs."
      category="Components"
    >
      <DocSection title="Examples" description="Common use cases and variations of the label component." level={2}>
        <DocSection title="Default" description="Standard label for form inputs. Always pair with inputs for accessibility.">
          <ComponentExample
            code={`<div className="space-y-2">
  <Label htmlFor="email">Email</Label>
  <Input id="email" type="email" placeholder="Enter your email" />
</div>`}
          >
            <div className="w-full max-w-sm space-y-2">
              <Label htmlFor="email">Email</Label>
              <Input id="email" type="email" placeholder="Enter your email" />
            </div>
          </ComponentExample>
        </DocSection>

        <DocSection title="With Checkbox" description="Labels work with checkboxes and other form controls.">
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

        <DocSection title="Required" description="Indicate required fields with an asterisk.">
          <ComponentExample
            code={`<div className="space-y-2">
  <Label htmlFor="name">
    Name <span className="text-destructive">*</span>
  </Label>
  <Input id="name" placeholder="Enter your name" />
</div>`}
          >
            <div className="w-full max-w-sm space-y-2">
              <Label htmlFor="name">
                Name <span className="text-destructive">*</span>
              </Label>
              <Input id="name" placeholder="Enter your name" />
            </div>
          </ComponentExample>
        </DocSection>

        <DocSection title="Disabled State" description="Labels automatically adapt when associated input is disabled.">
          <ComponentExample
            code={`<div className="space-y-2">
  <Label htmlFor="disabled-input">Disabled Input</Label>
  <Input id="disabled-input" disabled placeholder="Cannot edit" />
</div>`}
          >
            <div className="w-full max-w-sm space-y-2">
              <Label htmlFor="disabled-input">Disabled Input</Label>
              <Input id="disabled-input" disabled placeholder="Cannot edit" />
            </div>
          </ComponentExample>
        </DocSection>
      </DocSection>

      <DocSection title="Reference" description="Technical details and configuration for the label component." level={2}>
        <DocSection title="Best Practices">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-[14px]">
            <div className="space-y-4 p-4 rounded-lg bg-success/5 border border-success/10">
              <div className="flex gap-3">
                <span className="text-success font-bold">✅ Do:</span>
                <p className="text-muted-foreground leading-snug">Always connect labels to inputs using htmlFor and matching id.</p>
              </div>
              <div className="flex gap-3">
                <span className="text-success font-bold">✅ Do:</span>
                <p className="text-muted-foreground leading-snug">Use red asterisk (*) consistently for required fields.</p>
              </div>
            </div>
            <div className="space-y-4 p-4 rounded-lg bg-destructive/5 border border-destructive/10">
              <div className="flex gap-3">
                <span className="text-destructive font-bold">❌ Don't:</span>
                <p className="text-muted-foreground leading-snug">Rely on placeholders alone—labels are essential for accessibility.</p>
              </div>
              <div className="flex gap-3">
                <span className="text-destructive font-bold">❌ Don't:</span>
                <p className="text-muted-foreground leading-snug">Hide labels visually—screen readers and users need them.</p>
              </div>
            </div>
          </div>
        </DocSection>
      </DocSection>
    </DocPage>
  )
}
