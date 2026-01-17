import { Input } from "@/components/ui/input";
import { FileInput } from "@/components/ui/file-input";
import { DocPage, DocSection, ComponentExample, Timestamp } from "@/components/docs";
import { MagnifyingGlass, Envelope as Mail } from "@phosphor-icons/react";

export default function InputDocs() {
  return (
    <DocPage
      title="Input"
      description="Displays a form input field or a component that looks like an input field."
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

        <DocSection title="Error State" description="Show validation errors with message.">
          <ComponentExample
            code={`<Input
  error
  errorMessage="Email is required"
  placeholder="Email"
/>`}
          >
            <div className="flex flex-col gap-4 w-full max-w-sm">
              <Input
                error
                errorMessage="Email is required"
                placeholder="Email"
              />
            </div>
          </ComponentExample>
        </DocSection>

        <DocSection title="With Label" description="Always pair inputs with labels for accessibility.">
          <ComponentExample
            code={`<div className="grid w-full items-center gap-1.5">
  <Label htmlFor="email-2">Email</Label>
  <Input type="email" id="email-2" placeholder="Email" />
  <p className="text-[13px] text-muted-foreground">Enter your university email address.</p>
</div>`}
          >
            <div className="grid w-full max-w-sm items-center gap-2">
              <label htmlFor="email-2" className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70">Email</label>
              <Input type="email" id="email-2" placeholder="Email" />
              <p className="text-[13px] text-muted-foreground">Enter your university email address.</p>
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
          <div className="rounded-lg border border-border/50 overflow-hidden">
            <table className="w-full text-sm">
              <thead className="bg-muted/30">
                <tr>
                  <th className="text-left p-4 font-medium uppercase tracking-wider text-[11px] text-muted-foreground">State</th>
                  <th className="text-left p-4 font-medium uppercase tracking-wider text-[11px] text-muted-foreground">Style</th>
                  <th className="text-left p-4 font-medium uppercase tracking-wider text-[11px] text-muted-foreground">Token/Value</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-border/50">
                <tr>
                  <td className="p-4 font-medium">Default</td>
                  <td className="p-4 text-muted-foreground text-[13px]">Border only</td>
                  <td className="p-4 font-mono text-xs text-info/80">border-input</td>
                </tr>
                <tr>
                  <td className="p-4 font-medium">Focus</td>
                  <td className="p-4 text-muted-foreground text-[13px]">Ring indicator</td>
                  <td className="p-4 font-mono text-xs text-info/80">ring-2 ring-ring</td>
                </tr>
                <tr>
                  <td className="p-4 font-medium">Error</td>
                  <td className="p-4 text-muted-foreground text-[13px]">Destructive border</td>
                  <td className="p-4 font-mono text-xs text-info/80">border-destructive</td>
                </tr>
                <tr>
                  <td className="p-4 font-medium">Disabled</td>
                  <td className="p-4 text-muted-foreground text-[13px]">50% opacity</td>
                  <td className="p-4 font-mono text-xs text-info/80">opacity-50</td>
                </tr>
              </tbody>
            </table>
          </div>
        </DocSection>

        <DocSection title="Props">
          <div className="rounded-lg border border-border/50 overflow-hidden">
            <table className="w-full text-sm">
              <thead className="bg-muted/30">
                <tr>
                  <th className="text-left p-4 font-medium uppercase tracking-wider text-[11px] text-muted-foreground">Prop</th>
                  <th className="text-left p-4 font-medium uppercase tracking-wider text-[11px] text-muted-foreground">Type</th>
                  <th className="text-left p-4 font-medium uppercase tracking-wider text-[11px] text-muted-foreground">Default</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-border/50">
                <tr>
                  <td className="p-4 font-mono text-xs text-info/80 font-semibold">prefix</td>
                  <td className="p-4 font-mono text-xs text-info/80">ReactNode | string</td>
                  <td className="p-4 font-mono text-xs text-muted-foreground">—</td>
                </tr>
                <tr>
                  <td className="p-4 font-mono text-xs text-info/80 font-semibold">suffix</td>
                  <td className="p-4 font-mono text-xs text-info/80">ReactNode | string</td>
                  <td className="p-4 font-mono text-xs text-muted-foreground">—</td>
                </tr>
                <tr>
                  <td className="p-4 font-mono text-xs text-info/80 font-semibold">error</td>
                  <td className="p-4 font-mono text-xs text-info/80">boolean</td>
                  <td className="p-4 font-mono text-xs text-muted-foreground">false</td>
                </tr>
              </tbody>
            </table>
          </div>
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
