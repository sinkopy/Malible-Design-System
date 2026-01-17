import { FileInput } from "@/components/ui/file-input";
import { Label } from "@/components/ui/label";
import { DocPage, DocSection, ComponentExample } from "@/components/docs";

export default function FileInputDocs() {
  return (
    <DocPage
      title="FileInput"
      description="Styled file upload input with visual feedback."
      category="Components"
    >
      <DocSection title="Default" description="Basic file input with placeholder text.">
        <ComponentExample
          code={`<FileInput />`}
        >
          <FileInput className="max-w-sm" />
        </ComponentExample>
      </DocSection>

      <DocSection title="With Label" description="Pair with Label for accessibility.">
        <ComponentExample
          code={`<div className="grid w-full gap-1.5">
  <Label htmlFor="file">Upload file</Label>
  <FileInput id="file" />
</div>`}
        >
          <div className="grid w-full max-w-sm gap-1.5">
            <Label htmlFor="file">Upload file</Label>
            <FileInput id="file" />
          </div>
        </ComponentExample>
      </DocSection>

      <DocSection title="With Callback" description="Handle file selection with onFileSelect prop.">
        <ComponentExample
          code={`<FileInput 
  onFileSelect={(file) => {
    console.log("Selected file:", file?.name);
  }}
/>`}
        >
          <FileInput
            className="max-w-sm"
            onFileSelect={(file) => {
              // File selection handled
            }}
          />
        </ComponentExample>
      </DocSection>

      <DocSection title="Disabled" description="Non-interactive state.">
        <ComponentExample
          code={`<FileInput disabled />`}
        >
          <FileInput disabled className="max-w-sm" />
        </ComponentExample>
      </DocSection>

      <DocSection title="File Types" description="Restrict file types with accept prop.">
        <ComponentExample
          code={`<FileInput accept="image/*" />
<FileInput accept=".pdf,.doc,.docx" />`}
        >
          <div className="flex flex-col gap-4 max-w-sm">
            <FileInput accept="image/*" />
            <FileInput accept=".pdf,.doc,.docx" />
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
                <td className="p-3 font-medium">Hover</td>
                <td className="p-3 text-muted-foreground">Background tint</td>
                <td className="p-3 font-mono text-xs text-muted-foreground">hover:bg-secondary</td>
              </tr>
              <tr>
                <td className="p-3 font-medium">Focus</td>
                <td className="p-3 text-muted-foreground">Ring</td>
                <td className="p-3 font-mono text-xs text-muted-foreground">focus-within:ring-2 ring-ring</td>
              </tr>
              <tr>
                <td className="p-3 font-medium">Disabled</td>
                <td className="p-3 text-muted-foreground">Muted</td>
                <td className="p-3 font-mono text-xs text-muted-foreground">opacity-50 cursor-not-allowed</td>
              </tr>
              <tr>
                <td className="p-3 font-medium">Selected</td>
                <td className="p-3 text-muted-foreground">Shows filename</td>
                <td className="p-3 font-mono text-xs text-muted-foreground">text-foreground</td>
              </tr>
            </tbody>
          </table>
        </div>
      </DocSection>

      <DocSection title="Best Practices">
        <div className="space-y-4 text-sm">
          <div className="flex gap-3">
            <span className="text-green-600 font-medium">✅ Do:</span>
            <p className="text-muted-foreground">Specify accepted file types with the accept prop to prevent invalid uploads.</p>
          </div>
          <div className="flex gap-3">
            <span className="text-red-600 font-medium">❌ Don't:</span>
            <p className="text-muted-foreground">Accept all file types when you only need specific formats.</p>
          </div>

          <div className="flex gap-3">
            <span className="text-green-600 font-medium">✅ Do:</span>
            <p className="text-muted-foreground">Show the selected filename and provide a way to clear the selection.</p>
          </div>
          <div className="flex gap-3">
            <span className="text-red-600 font-medium">❌ Don't:</span>
            <p className="text-muted-foreground">Leave users guessing if their file was selected—show clear feedback.</p>
          </div>
        </div>
      </DocSection>
    </DocPage>
  );
}
