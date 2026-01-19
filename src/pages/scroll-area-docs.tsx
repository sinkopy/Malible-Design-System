import { ScrollArea, ScrollBar } from "@/components/ui/scroll-area"
import { Separator } from "@/components/ui/separator"
import { DocPage, DocSection, ComponentExample, Timestamp, PropsTable } from "@/components/docs"
import * as React from "react"

export default function ScrollAreaDocs() {
  const versions = [
    "v1.2.0-beta.48",
    "v1.2.0-beta.47",
    "v1.2.0-beta.46",
    "v1.2.0-beta.45",
    "v1.2.0-beta.44",
    "v1.2.0-beta.43",
    "v1.2.0-beta.42",
    "v1.2.0-beta.41",
    "v1.2.0-beta.40",
    "v1.2.0-beta.39",
    "v1.2.0-beta.38",
    "v1.2.0-beta.37",
    "v1.2.0-beta.36",
    "v1.2.0-beta.35",
    "v1.2.0-beta.34",
  ]

  const images = [
    { name: "photo1", src: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=100&h=150&fit=crop", alt: "Mountain landscape", photographer: "John Doe" },
    { name: "photo2", src: "https://images.unsplash.com/photo-1518837695005-2083093ee35b?w=100&h=150&fit=crop", alt: "Ocean view", photographer: "Jane Smith" },
    { name: "photo3", src: "https://images.unsplash.com/photo-1501594907352-04cda38ebc29?w=100&h=150&fit=crop", alt: "Forest path", photographer: "Bob Johnson" },
    { name: "photo4", src: "https://images.unsplash.com/photo-1519681393784-d120267933ba?w=100&h=150&fit=crop", alt: "Sunset", photographer: "Alice Williams" },
    { name: "photo5", src: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=100&h=150&fit=crop", alt: "Mountain peak", photographer: "Charlie Brown" },
    { name: "photo6", src: "https://images.unsplash.com/photo-1518837695005-2083093ee35b?w=100&h=150&fit=crop", alt: "Beach scene", photographer: "Diana Prince" },
  ]

  return (
    <DocPage
      title="Scroll Area"
      description="Augments native scroll functionality for custom, cross-browser styling."
      category="Components"
    >
      <DocSection title="Examples" description="Common use cases and variations of the scroll area component." level={2}>
        <DocSection title="Vertical" description="Custom vertical scrollbar for long lists.">
          <ComponentExample
            code={`<ScrollArea className="h-[200px] w-[200px] rounded-md border p-4">
  <div className="space-y-4">
    {versions.map((version) => (
      <React.Fragment key={version}>
        <div className="text-sm">{version}</div>
        <Separator />
      </React.Fragment>
    ))}
  </div>
</ScrollArea>`}
          >
            <ScrollArea className="h-[200px] w-full max-w-sm rounded-md border p-4">
              <div className="space-y-4">
                {versions.map((version) => (
                  <React.Fragment key={version}>
                    <div className="text-sm font-medium">{version}</div>
                    <Separator className="opacity-50" />
                  </React.Fragment>
                ))}
              </div>
            </ScrollArea>
          </ComponentExample>
        </DocSection>

        <DocSection title="Horizontal" description="Horizontal scrolling for cards, images, or wide content.">
          <ComponentExample
            code={`<ScrollArea className="w-full max-w-md whitespace-nowrap rounded-md border">
  <div className="flex w-max space-x-4 p-4">
    {images.map((image) => (
      <figure key={image.name} className="shrink-0">
        <div className="overflow-hidden rounded-md border">
          <img
            src={image.src}
            alt={image.alt}
            className="h-[150px] w-[100px] object-cover"
          />
        </div>
      </figure>
    ))}
  </div>
  <ScrollBar orientation="horizontal" />
</ScrollArea>`}
          >
            <ScrollArea className="w-full max-w-lg whitespace-nowrap rounded-md border">
              <div className="flex w-max space-x-4 p-4">
                {images.map((image) => (
                  <figure key={image.name} className="shrink-0">
                    <div className="overflow-hidden rounded-md border border-border/50">
                      <img
                        src={image.src}
                        alt={image.alt}
                        className="h-[150px] w-[100px] object-cover"
                      />
                    </div>
                    <figcaption className="pt-2 text-[11px] text-muted-foreground flex flex-col gap-0.5">
                      <span className="font-medium text-foreground/80">{image.name}</span>
                      <span>By {image.photographer}</span>
                    </figcaption>
                  </figure>
                ))}
              </div>
              <ScrollBar orientation="horizontal" />
            </ScrollArea>
          </ComponentExample>
        </DocSection>
      </DocSection>

      <DocSection title="Reference" description="Technical details and compliance for the scroll area component." level={2}>
        <DocSection title="Accessibility">
          <div className="space-y-4 text-[14px] text-muted-foreground leading-relaxed">
            <p>
              Scroll areas are designed to be accessible by maintaining native scroll behavior for keyboard and screen reader users.
            </p>
            <ul className="list-disc list-inside space-y-2 ml-2">
              <li>Supports standard keyboard scrolling (<kbd className="text-[11px] font-sans bg-muted/20 px-1 rounded border border-border/20">Arrow Keys</kbd>, <kbd className="text-[11px] font-sans bg-muted/20 px-1 rounded border border-border/20">Page Up/Down</kbd>).</li>
              <li>Custom scrollbars are hidden from screen readers to avoid redundant navigation landmarks.</li>
              <li>Ensure the viewport is large enough to be easily focused and scrolled.</li>
            </ul>
          </div>
        </DocSection>

        <DocSection title="Props" description="Scroll Area component props configuration.">
          <PropsTable
            props={[
              {
                name: "type",
                type: '"auto" | "always" | "scroll" | "hover"',
                default: '"hover"',
                description: "When the scrollbar should be visible."
              },
              {
                name: "orientation",
                type: '"horizontal" | "vertical"',
                default: '"vertical"',
                description: "The scroll orientation (ScrollBar prop)."
              },
            ]}
          />
        </DocSection>

        <DocSection title="Best Practices">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-[14px]">
            <div className="space-y-4 p-4 rounded-lg bg-success/5 border border-success/10">
              <div className="flex gap-3">
                <span className="text-success font-bold">✅ Do:</span>
                <p className="text-muted-foreground leading-snug">Set an explicit height or width on the ScrollArea container for scrolling to occur.</p>
              </div>
              <div className="flex gap-3">
                <span className="text-success font-bold">✅ Do:</span>
                <p className="text-muted-foreground leading-snug">Use vertical scroll areas for long lists, sidebars, or dropdown menus with many options.</p>
              </div>
            </div>
            <div className="space-y-4 p-4 rounded-lg bg-destructive/5 border border-destructive/10">
              <div className="flex gap-3">
                <span className="text-destructive font-bold">❌ Don't:</span>
                <p className="text-muted-foreground leading-snug">Use scroll areas for small amounts of content that could easily fit without scrolling.</p>
              </div>
              <div className="flex gap-3">
                <span className="text-destructive font-bold">❌ Don't:</span>
                <p className="text-muted-foreground leading-snug">Hide the scrollbar if the content is not obviously scrollable—visibility is key for UX.</p>
              </div>
            </div>
          </div>
        </DocSection>
      </DocSection>

      <Timestamp date="17-01-2026 08:34PM" />
    </DocPage>
  )
}
