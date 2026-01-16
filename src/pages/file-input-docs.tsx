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
    </DocPage>
  );
}
