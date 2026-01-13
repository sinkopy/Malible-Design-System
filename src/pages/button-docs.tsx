import { Button } from "@/components/ui/button";
import { DocPage, DocSection, ComponentExample, Timestamp } from "@/components/docs";
import { Envelope, SpinnerGap } from "@phosphor-icons/react";

export default function ButtonDocs() {
  return (
    <DocPage
      title="Button"
      description="Displays a button or a component that looks like a button."
      category="Components"
    >
      <DocSection title="Default">
        <ComponentExample code={`<Button>Button</Button>`}>
          <Button>Button</Button>
        </ComponentExample>
      </DocSection>

      <DocSection title="Secondary">
        <ComponentExample code={`<Button variant="secondary">Secondary</Button>`}>
          <Button variant="secondary">Secondary</Button>
        </ComponentExample>
      </DocSection>

      <DocSection title="Destructive">
        <ComponentExample code={`<Button variant="destructive">Destructive</Button>`}>
          <Button variant="destructive">Destructive</Button>
        </ComponentExample>
      </DocSection>

      <DocSection title="Outline">
        <ComponentExample code={`<Button variant="outline">Outline</Button>`}>
          <Button variant="outline">Outline</Button>
        </ComponentExample>
      </DocSection>

      <DocSection title="Ghost">
        <ComponentExample code={`<Button variant="ghost">Ghost</Button>`}>
          <Button variant="ghost">Ghost</Button>
        </ComponentExample>
      </DocSection>

      <DocSection title="Link">
        <ComponentExample code={`<Button variant="link">Link</Button>`}>
          <Button variant="link">Link</Button>
        </ComponentExample>
      </DocSection>

      <DocSection title="Sizes">
        <ComponentExample
          code={`<Button size="sm">Small</Button>
<Button>Default</Button>
<Button size="lg">Large</Button>`}
        >
          <div className="flex items-center gap-4">
            <Button size="sm">Small</Button>
            <Button>Default</Button>
            <Button size="lg">Large</Button>
          </div>
        </ComponentExample>
      </DocSection>

      <DocSection title="With Icon">
        <ComponentExample
          code={`<Button>
  <Envelope size={16} />
  Login with Email
</Button>`}
        >
          <Button>
            <Envelope size={16} />
            Login with Email
          </Button>
        </ComponentExample>
      </DocSection>

      <DocSection title="Loading">
        <ComponentExample
          code={`<Button disabled>
  <SpinnerGap size={16} className="animate-spin" />
  Please wait
</Button>`}
        >
          <Button disabled>
            <SpinnerGap size={16} className="animate-spin" />
            Please wait
          </Button>
        </ComponentExample>
      </DocSection>

      <Timestamp date="13-01-2026" />
    </DocPage>
  );
}
