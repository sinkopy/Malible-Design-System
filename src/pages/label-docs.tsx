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
    </DocPage>
  )
}
