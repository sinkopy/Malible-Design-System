import { Separator } from "@/components/ui/separator"
import { DocPage, DocSection, ComponentExample } from "@/components/docs"

export default function SeparatorDocs() {
  return (
    <DocPage
      title="Separator"
      description="Visually divides content into clear sections."
      category="Components"
    >
      <DocSection title="Horizontal" description="Default orientation. Full width, 1px height.">
        <ComponentExample
          code={`<div className="space-y-4">
  <div>Content above</div>
  <Separator />
  <div>Content below</div>
</div>`}
        >
          <div className="w-full max-w-sm space-y-4">
            <div className="text-sm">Content above</div>
            <Separator />
            <div className="text-sm">Content below</div>
          </div>
        </ComponentExample>
      </DocSection>

      <DocSection title="Vertical" description="Use orientation='vertical' for vertical dividers.">
        <ComponentExample
          code={`<div className="flex h-8 items-center gap-4">
  <span>Item 1</span>
  <Separator orientation="vertical" />
  <span>Item 2</span>
  <Separator orientation="vertical" />
  <span>Item 3</span>
</div>`}
        >
          <div className="flex h-8 items-center gap-4 text-sm">
            <span>Item 1</span>
            <Separator orientation="vertical" />
            <span>Item 2</span>
            <Separator orientation="vertical" />
            <span>Item 3</span>
          </div>
        </ComponentExample>
      </DocSection>

      <DocSection title="With Spacing" description="Control spacing with wrapper margins or padding.">
        <ComponentExample
          code={`<div>
  <div>Section 1</div>
  <Separator className="my-4" />
  <div>Section 2</div>
  <Separator className="my-8" />
  <div>Section 3</div>
</div>`}
        >
          <div className="w-full max-w-sm text-sm">
            <div>Section 1</div>
            <Separator className="my-4" />
            <div>Section 2</div>
            <Separator className="my-8" />
            <div>Section 3</div>
          </div>
        </ComponentExample>
      </DocSection>
    </DocPage>
  )
}
