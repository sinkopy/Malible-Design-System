import { Textarea } from "@/components/ui/textarea"
import { Label } from "@/components/ui/label"
import { DocPage, DocSection, ComponentExample } from "@/components/docs"

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
    </DocPage>
  )
}
