import { Input } from "@/components/ui/input";
import { DocPage, DocSection, ComponentExample, Timestamp } from "@/components/docs";

export default function InputDocs() {
  return (
    <DocPage
      title="Input"
      description="Displays a form input field or a component that looks like an input field."
      category="Components"
    >
      <DocSection title="Default">
        <ComponentExample code={`<Input type="email" placeholder="Email" />`}>
          <Input type="email" placeholder="Email" />
        </ComponentExample>
      </DocSection>

      <DocSection title="Disabled">
        <ComponentExample code={`<Input disabled placeholder="Disabled" />`}>
          <Input disabled placeholder="Disabled" />
        </ComponentExample>
      </DocSection>

      <DocSection title="With Label">
        <ComponentExample
          code={`<div className="space-y-2">
  <Label htmlFor="email">Email</Label>
  <Input id="email" type="email" placeholder="Enter your email" />
</div>`}
        >
          <div className="space-y-2 w-full max-w-sm">
            <label htmlFor="email" className="text-sm font-medium">Email</label>
            <Input id="email" type="email" placeholder="Enter your email" />
          </div>
        </ComponentExample>
      </DocSection>

      <DocSection title="File Input">
        <ComponentExample code={`<Input type="file" />`}>
          <Input type="file" />
        </ComponentExample>
      </DocSection>

      <Timestamp date="13-01-2026" />
    </DocPage>
  );
}
