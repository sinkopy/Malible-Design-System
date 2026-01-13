import { Button } from "@/components/ui/button";
import { DocPage, DocSection, ComponentExample, Timestamp } from "@/components/docs";

// Inline SVG icons (since lucide-react is not installed)
const MailIcon = ({ className }: { className?: string }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
    <rect width="20" height="16" x="2" y="4" rx="2"/>
    <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"/>
  </svg>
);

const Loader2Icon = ({ className }: { className?: string }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
    <path d="M21 12a9 9 0 1 1-6.219-8.56"/>
  </svg>
);

export default function ButtonDocs() {
  return (
    <DocPage
      title="Button"
      description="Displays a button or a component that looks like a button."
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
  <MailIcon className="h-4 w-4" />
  Login with Email
</Button>`}
        >
          <Button>
            <MailIcon className="h-4 w-4" />
            Login with Email
          </Button>
        </ComponentExample>
      </DocSection>

      <DocSection title="Loading">
        <ComponentExample
          code={`<Button disabled>
  <Loader2Icon className="h-4 w-4 animate-spin" />
  Please wait
</Button>`}
        >
          <Button disabled>
            <Loader2Icon className="h-4 w-4 animate-spin" />
            Please wait
          </Button>
        </ComponentExample>
      </DocSection>

      <Timestamp date="13-01-2026" />
    </DocPage>
  );
}
