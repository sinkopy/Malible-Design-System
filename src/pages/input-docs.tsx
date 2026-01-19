import { Input } from "@/components/ui/input";
import { FormField } from "@/components/ui/form-field";
import { FileInput } from "@/components/ui/file-input";
import { DocPage, DocSection, ComponentExample, Timestamp, PropsTable, StateTable } from "@/components/docs";
import { MagnifyingGlass, Envelope as Mail } from "@phosphor-icons/react";

export default function InputDocs() {
  return (
    <DocPage
      title="Input"
      description="A clean primitive input component. Use with FormField for labels and validation."
      category="Components"
    >
      <DocSection title="Examples" description="Common use cases and variations of the input component." level={2}>
        <DocSection title="Default" description="Standard text input for most use cases.">
          <ComponentExample code={`<Input type="email" placeholder="Email" />`}>
            <div className="w-full max-w-sm">
              <Input type="email" placeholder="Email" />
            </div>
          </ComponentExample>
        </DocSection>

        <DocSection title="With Prefix" description="Add icons or text before the input value.">
          <ComponentExample
            code={`<Input prefix={<Mail size={16} />} placeholder="Email" />
<Input prefix="https://" placeholder="example.com" />`}
          >
            <div className="flex flex-col gap-4 w-full max-w-sm">
              <Input prefix={<Mail size={16} />} placeholder="Email" />
              <Input prefix="https://" placeholder="example.com" />
            </div>
          </ComponentExample>
        </DocSection>

        <DocSection title="With Suffix" description="Add icons or text after the input value.">
          <ComponentExample
            code={`<Input suffix={<MagnifyingGlass size={16} />} placeholder="Search" />
<Input suffix=".com" placeholder="domain" />`}
          >
            <div className="flex flex-col gap-4 w-full max-w-sm">
              <Input suffix={<MagnifyingGlass size={16} />} placeholder="Search" />
              <Input suffix=".com" placeholder="domain" />
            </div>
          </ComponentExample>
        </DocSection>

        <DocSection title="Wrapped in FormField" description="Combine Input with FormField for labels, help text, and errors.">
          <ComponentExample
            code={`<FormField label="Email" helpText="Enter your work email.">
  <Input id="email-field" type="email" placeholder="name@company.com" />
</FormField>`}
          >
            <div className="w-full max-w-sm">
              <FormField label="Email" helpText="Enter your work email.">
                <Input id="email-field-demo" type="email" placeholder="name@company.com" />
              </FormField>
            </div>
          </ComponentExample>
        </DocSection>

        <DocSection title="File Input" description="For file uploads. Shows selected filename.">
          <ComponentExample
            code={`<FileInput placeholder="Choose file..." />`}
          >
            <div className="w-full max-w-sm">
              <FileInput />
            </div>
          </ComponentExample>
        </DocSection>
      </DocSection>

      <DocSection title="Reference" description="Technical details and configuration for the input component." level={2}>
        <DocSection title="State Reference">
          <StateTable
            states={[
              { state: "Default", style: "Border only", token: "border-border" },
              { state: "Hover", style: "Secondary background", token: "bg-secondary" },
              { state: "Focus", style: "Ring border", token: "border-ring" },
              { state: "Error", style: "Destructive border", token: "border-destructive" },
              { state: "Disabled", style: "Muted background", token: "bg-muted" },
            ]}
          />
        </DocSection>

        <DocSection title="Props">
          <PropsTable
            props={[
              {
                name: "prefix",
                type: "ReactNode",
                description: "Optional icon or content to display before the input."
              },
              {
                name: "suffix",
                type: "ReactNode",
                description: "Optional icon or content to display after the input."
              },
              {
                name: "error",
                type: "boolean",
                default: "false",
                description: "Applies error styling to the input container."
              }
            ]}
          />
        </DocSection>

        <DocSection title="Best Practices">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-[14px]">
            <div className="space-y-4 p-4 rounded-lg bg-success/5 border border-success/10">
              <div className="flex gap-3">
                <span className="text-success font-bold">✅ Do:</span>
                <p className="text-muted-foreground leading-snug">Always pair inputs with labels for accessibility.</p>
              </div>
              <div className="flex gap-3">
                <span className="text-success font-bold">✅ Do:</span>
                <p className="text-muted-foreground leading-snug">Use help text to provide instructions or format requirements.</p>
              </div>
            </div>
            <div className="space-y-4 p-4 rounded-lg bg-destructive/5 border border-destructive/10">
              <div className="flex gap-3">
                <span className="text-destructive font-bold">❌ Don't:</span>
                <p className="text-muted-foreground leading-snug">Use placeholder text as the only label for the field.</p>
              </div>
              <div className="flex gap-3">
                <span className="text-destructive font-bold">❌ Don't:</span>
                <p className="text-muted-foreground leading-snug">Show generic error messages that don't help users fix the issue.</p>
              </div>
            </div>
          </div>
        </DocSection>
      </DocSection>

      <Timestamp date="17-01-2026 08:34PM" />
    </DocPage>
  );
}
