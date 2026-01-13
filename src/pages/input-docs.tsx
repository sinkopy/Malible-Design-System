import { Input } from "@/components/ui/input";
import { FileInput } from "@/components/ui/file-input";
import { DocPage, DocSection, ComponentExample, Timestamp } from "@/components/docs";

export default function InputDocs() {
  return (
    <DocPage
      title="Input"
      description="Displays a form input field or a component that looks like an input field."
      category="Components"
    >
      <DocSection title="Default" description="Standard text input for most use cases.">
        <ComponentExample code={`<Input type="email" placeholder="Email" />`}>
          <Input type="email" placeholder="Email" />
        </ComponentExample>
      </DocSection>

      <DocSection title="Disabled" description="Prevents interaction. Shows unavailable state.">
        <ComponentExample code={`<Input disabled placeholder="Disabled" />`}>
          <Input disabled placeholder="Disabled" />
        </ComponentExample>
      </DocSection>

      <DocSection title="With Label" description="Always pair inputs with labels for accessibility.">
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

      <DocSection title="File Input" description="For file uploads. Shows selected filename.">
        <ComponentExample 
          code={`<FileInput placeholder="Choose file..." />

// With accepted types
<FileInput accept=".pdf,.doc,.docx" />

// With callback
<FileInput onFileSelect={(file) => console.log(file)} />`}
        >
          <div className="w-full max-w-sm">
            <FileInput />
          </div>
        </ComponentExample>
      </DocSection>

      <DocSection title="States" description="Visual feedback for input interactions and validation.">
        <ComponentExample
          code={`<Input placeholder="Default" />
<Input placeholder="Focused" className="ring-2 ring-ring" />
<Input placeholder="Error" className="border-destructive ring-2 ring-destructive/20" />
<Input placeholder="Disabled" disabled />`}
        >
          <div className="flex flex-col gap-4 w-full max-w-sm">
            <Input placeholder="Default" />
            <Input placeholder="Disabled" disabled />
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
                <td className="p-3 font-medium">Default</td>
                <td className="p-3 text-muted-foreground">Border</td>
                <td className="p-3 font-mono text-xs text-muted-foreground">border-input</td>
              </tr>
              <tr>
                <td className="p-3 font-medium">Focus</td>
                <td className="p-3 text-muted-foreground">Ring</td>
                <td className="p-3 font-mono text-xs text-muted-foreground">ring-2 ring-ring</td>
              </tr>
              <tr>
                <td className="p-3 font-medium">Error</td>
                <td className="p-3 text-muted-foreground">Red border + ring</td>
                <td className="p-3 font-mono text-xs text-muted-foreground">border-destructive ring-destructive/20</td>
              </tr>
              <tr>
                <td className="p-3 font-medium">Disabled</td>
                <td className="p-3 text-muted-foreground">Muted</td>
                <td className="p-3 font-mono text-xs text-muted-foreground">opacity-50 cursor-not-allowed</td>
              </tr>
            </tbody>
          </table>
        </div>
      </DocSection>

      <Timestamp date="13-01-2026" />
    </DocPage>
  );
}
