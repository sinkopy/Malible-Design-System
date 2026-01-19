import { Textarea } from "@/components/ui/textarea"
import { Label } from "@/components/ui/label"
import { DocPage, DocSection, ComponentExample, PropsTable, StateTable } from "@/components/docs"

export default function TextareaDocs() {
  return (
    <DocPage
      title="Textarea"
      description="Multi-line text input for longer content."
      category="Components"
    >
      <DocSection title="Default" description="Basic textarea with placeholder.">
        <ComponentExample
          code={`<Textarea placeholder="Type your message here." />`}
        >
          <Textarea placeholder="Type your message here." className="max-w-sm" />
        </ComponentExample>
      </DocSection>

      <DocSection title="With Label" description="Pair with Label for accessibility.">
        <ComponentExample
          code={`<div className="grid w-full gap-1.5">
  <Label htmlFor="message">Your message</Label>
  <Textarea id="message" placeholder="Type your message here." />
</div>`}
        >
          <div className="grid w-full max-w-sm gap-1.5">
            <Label htmlFor="message">Your message</Label>
            <Textarea id="message" placeholder="Type your message here." />
          </div>
        </ComponentExample>
      </DocSection>

      <DocSection title="Error" description="Shows validation error state.">
        <ComponentExample
          code={`<Textarea error placeholder="Type your message here." />`}
        >
          <Textarea error placeholder="Type your message here." className="max-w-sm" />
        </ComponentExample>
      </DocSection>

      <DocSection title="Disabled" description="Non-interactive state.">
        <ComponentExample
          code={`<Textarea disabled placeholder="Can't edit this." />`}
        >
          <Textarea disabled placeholder="Can't edit this." className="max-w-sm" />
        </ComponentExample>
      </DocSection>

      <DocSection title="With Default Value" description="Pre-filled content.">
        <ComponentExample
          code={`<Textarea defaultValue="This is some existing content that the user can edit." />`}
        >
          <Textarea
            defaultValue="This is some existing content that the user can edit."
            className="max-w-sm"
          />
        </ComponentExample>
      </DocSection>

      <DocSection title="State Reference">
        <StateTable
          states={[
            { state: "Default", style: "Border", token: "border-input" },
            { state: "Focus", style: "Ring", token: "ring-2 ring-ring" },
            { state: "Error", style: "Red border", token: "border-destructive" },
            { state: "Disabled", style: "Muted", token: "opacity-50 cursor-not-allowed" },
          ]}
        />
      </DocSection>

      <DocSection title="Props">
        <PropsTable
          props={[
            {
              name: "error",
              type: "boolean",
              default: "false",
              description: "Whether the textarea is in an error state."
            },
            {
              name: "className",
              type: "string",
              description: "Optional CSS classes for styling."
            }
          ]}
        />
      </DocSection>

      <DocSection title="Best Practices">
        <div className="space-y-4 text-sm">
          <div className="flex gap-3">
            <span className="text-green-600 font-medium">✅ Do:</span>
            <p className="text-muted-foreground">Use textarea for multi-line content like comments, descriptions, or messages.</p>
          </div>
          <div className="flex gap-3">
            <span className="text-red-600 font-medium">❌ Don't:</span>
            <p className="text-muted-foreground">Use textarea for single-line inputs—use Input instead.</p>
          </div>

          <div className="flex gap-3">
            <span className="text-green-600 font-medium">✅ Do:</span>
            <p className="text-muted-foreground">Provide adequate height for expected content length.</p>
          </div>
          <div className="flex gap-3">
            <span className="text-red-600 font-medium">❌ Don't:</span>
            <p className="text-muted-foreground">Make textareas too small—users will struggle to review their content.</p>
          </div>
        </div>
      </DocSection>
    </DocPage>
  )
}
