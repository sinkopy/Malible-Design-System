import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar"
import { DocPage, DocSection, ComponentExample, PropsTable } from "@/components/docs"

export default function AvatarDocs() {
  return (
    <DocPage
      title="Avatar"
      description="Displays a user's profile picture or initials."
      category="Components"
    >
      <DocSection title="Examples" description="Common use cases and variations of the avatar component." level={2}>
        <DocSection title="Default" description="Circle avatar with initials fallback.">
          <ComponentExample
            code={`<Avatar>
  <AvatarImage src="https://github.com/shadcn.png" alt="User" />
  <AvatarFallback>SA</AvatarFallback>
</Avatar>`}
          >
            <div className="flex items-center gap-4">
              <Avatar>
                <AvatarImage src="https://github.com/shadcn.png" alt="User" />
                <AvatarFallback>SA</AvatarFallback>
              </Avatar>
              <Avatar>
                <AvatarFallback>JD</AvatarFallback>
              </Avatar>
            </div>
          </ComponentExample>
        </DocSection>

        <DocSection title="Sizes" description="Variants for different layout contexts.">
          <ComponentExample
            code={`<Avatar size="sm">
  <AvatarFallback size="sm">SA</AvatarFallback>
</Avatar>
<Avatar>
  <AvatarFallback>JD</AvatarFallback>
</Avatar>
<Avatar size="lg">
  <AvatarFallback size="lg">MB</AvatarFallback>
</Avatar>`}
          >
            <div className="flex items-center gap-4">
              <Avatar size="sm">
                <AvatarFallback size="sm">SA</AvatarFallback>
              </Avatar>
              <Avatar>
                <AvatarFallback>JD</AvatarFallback>
              </Avatar>
              <Avatar size="lg">
                <AvatarFallback size="lg">MB</AvatarFallback>
              </Avatar>
            </div>
          </ComponentExample>
        </DocSection>

        <DocSection title="Shapes" description="Circle (people) or square (brands).">
          <ComponentExample
            code={`<Avatar shape="circle">
  <AvatarFallback>JD</AvatarFallback>
</Avatar>
<Avatar shape="square">
  <AvatarFallback>MB</AvatarFallback>
</Avatar>`}
          >
            <div className="flex items-center gap-4">
              <Avatar shape="circle">
                <AvatarFallback>JD</AvatarFallback>
              </Avatar>
              <Avatar shape="square">
                <AvatarFallback>MB</AvatarFallback>
              </Avatar>
            </div>
          </ComponentExample>
        </DocSection>
      </DocSection>

      <DocSection title="Reference" description="Technical details and configuration for the avatar component." level={2}>
        <DocSection title="Accessibility">
          <div className="space-y-4 text-[14px] text-muted-foreground leading-relaxed">
            <p>
              Avatars use semantic HTML and ARIA attributes to ensure they are accessible to assistive technologies.
            </p>
            <ul className="list-disc list-inside space-y-2 ml-2">
              <li>Use the <code className="text-[13px] bg-muted/20 border border-border/30 px-1 rounded">alt</code> prop on <code className="text-[13px] bg-muted/20 border border-border/30 px-1 rounded">AvatarImage</code> to provide a text alternative for the image.</li>
              <li>The <code className="text-[13px] bg-muted/20 border border-border/30 px-1 rounded">AvatarFallback</code> is automatically shown only when the image is not available, and is hidden from screen readers if the image has a null alt attribute.</li>
            </ul>
          </div>
        </DocSection>

        <DocSection title="Props">
          <PropsTable
            props={[
              {
                name: "size",
                type: '"sm" | "default" | "lg"',
                default: '"default"',
                description: "The size of the avatar."
              },
              {
                name: "shape",
                type: '"circle" | "square"',
                default: '"circle"',
                description: "The shape of the avatar."
              },
            ]}
          />
        </DocSection>

        <DocSection title="Best Practices">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-[14px]">
            <div className="space-y-4 p-4 rounded-lg bg-success/5 border border-success/10">
              <div className="flex gap-3">
                <span className="text-success font-bold">✅ Do:</span>
                <p className="text-muted-foreground leading-snug">Always provide a fallback (initials or icon) for when images fail to load.</p>
              </div>
              <div className="flex gap-3">
                <span className="text-success font-bold">✅ Do:</span>
                <p className="text-muted-foreground leading-snug">Use square avatars for brands/workspaces, circles for people.</p>
              </div>
            </div>
            <div className="space-y-4 p-4 rounded-lg bg-destructive/5 border border-destructive/10">
              <div className="flex gap-3">
                <span className="text-destructive font-bold">❌ Don't:</span>
                <p className="text-muted-foreground leading-snug">Show broken image placeholders—use meaningful fallbacks instead.</p>
              </div>
              <div className="flex gap-3">
                <span className="text-destructive font-bold">❌ Don't:</span>
                <p className="text-muted-foreground leading-snug">Mix avatar shapes inconsistently within the same context.</p>
              </div>
            </div>
          </div>
        </DocSection>
      </DocSection>
    </DocPage>
  )
}
