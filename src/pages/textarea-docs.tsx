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
                <td className="p-3 text-muted-foreground">Red border</td>
                <td className="p-3 font-mono text-xs text-muted-foreground">border-destructive</td>
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
