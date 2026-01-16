import { ScrollArea, ScrollBar } from "@/components/ui/scroll-area"
import { Separator } from "@/components/ui/separator"
import { DocPage, DocSection, ComponentExample, Timestamp } from "@/components/docs"
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
      <DocSection title="Vertical" description="Vertical scrolling with custom scrollbar.">
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
          <ScrollArea className="h-[200px] w-[200px] rounded-md border p-4">
            <div className="space-y-4">
              {versions.map((version) => (
                <React.Fragment key={version}>
                  <div className="text-sm">{version}</div>
                  <Separator />
                </React.Fragment>
              ))}
            </div>
          </ScrollArea>
        </ComponentExample>
      </DocSection>

      <DocSection title="Horizontal" description="Horizontal scrolling for wide content.">
        <ComponentExample
          code={`<ScrollArea className="w-[400px] whitespace-nowrap rounded-md border">
  <div className="flex w-max space-x-4 p-4">
    {images.map((image) => (
      <figure key={image.name} className="shrink-0">
        <div className="overflow-hidden rounded-md">
          <img
            src={image.src}
            alt={image.alt}
            className="h-[150px] w-[100px] object-cover"
          />
        </div>
        <figcaption className="pt-2 text-xs text-muted-foreground">
          Photo by {image.photographer}
        </figcaption>
      </figure>
    ))}
  </div>
  <ScrollBar orientation="horizontal" />
</ScrollArea>`}
        >
          <ScrollArea className="w-[400px] whitespace-nowrap rounded-md border">
            <div className="flex w-max space-x-4 p-4">
              {images.map((image) => (
                <figure key={image.name} className="shrink-0">
                  <div className="overflow-hidden rounded-md">
                    <img
                      src={image.src}
                      alt={image.alt}
                      className="h-[150px] w-[100px] object-cover"
                    />
                  </div>
                  <figcaption className="pt-2 text-xs text-muted-foreground">
                    Photo by {image.photographer}
                  </figcaption>
                </figure>
              ))}
            </div>
            <ScrollBar orientation="horizontal" />
          </ScrollArea>
        </ComponentExample>
      </DocSection>

      <DocSection title="Usage" description="Common patterns for scroll area usage.">
        <ComponentExample
          code={`import { ScrollArea, ScrollBar } from "@/components/ui/scroll-area"

// Vertical scroll (default)
<ScrollArea className="h-[200px]">
  <div>Long content here...</div>
</ScrollArea>

// Horizontal scroll
<ScrollArea className="w-[400px]">
  <div className="flex w-max">
    {/* Horizontal content */}
  </div>
  <ScrollBar orientation="horizontal" />
</ScrollArea>

// Both directions
<ScrollArea className="h-[300px] w-[400px]">
  <div className="w-[600px]">
    {/* Content larger than container */}
  </div>
  <ScrollBar orientation="horizontal" />
</ScrollArea>`}
        >
          <div className="w-full max-w-md space-y-8">
            <div>
              <p className="text-xs text-muted-foreground mb-2">Vertical scroll</p>
              <ScrollArea className="h-[100px] rounded-md border p-4">
                <div className="space-y-2">
                  {Array.from({ length: 10 }, (_, i) => (
                    <div key={i} className="text-sm">Item {i + 1}</div>
                  ))}
                </div>
              </ScrollArea>
            </div>
            <div>
              <p className="text-xs text-muted-foreground mb-2">Horizontal scroll</p>
              <ScrollArea className="w-[300px] rounded-md border">
                <div className="flex w-max space-x-2 p-4">
                  {Array.from({ length: 8 }, (_, i) => (
                    <div key={i} className="h-20 w-20 shrink-0 rounded bg-muted flex items-center justify-center text-xs">
                      {i + 1}
                    </div>
                  ))}
                </div>
                <ScrollBar orientation="horizontal" />
              </ScrollArea>
            </div>
          </div>
        </ComponentExample>
      </DocSection>

      <DocSection title="Props" description="Scroll Area component props.">
        <div className="overflow-x-auto">
          <table className="w-full border-collapse">
            <thead>
              <tr className="border-b border-border">
                <th className="text-left py-2 px-4 text-sm font-semibold text-foreground">Component</th>
                <th className="text-left py-2 px-4 text-sm font-semibold text-foreground">Prop</th>
                <th className="text-left py-2 px-4 text-sm font-semibold text-foreground">Type</th>
                <th className="text-left py-2 px-4 text-sm font-semibold text-foreground">Default</th>
                <th className="text-left py-2 px-4 text-sm font-semibold text-foreground">Description</th>
              </tr>
            </thead>
            <tbody>
              <tr className="border-b border-border">
                <td className="py-2 px-4 text-sm text-foreground font-medium" rowSpan={1}>ScrollArea</td>
                <td className="py-2 px-4 text-sm text-foreground font-medium">className</td>
                <td className="py-2 px-4 text-sm text-muted-foreground">string</td>
                <td className="py-2 px-4 text-sm text-muted-foreground">-</td>
                <td className="py-2 px-4 text-sm text-muted-foreground">Additional CSS classes</td>
              </tr>
              <tr className="border-b border-border">
                <td className="py-2 px-4 text-sm text-foreground font-medium" rowSpan={2}>ScrollBar</td>
                <td className="py-2 px-4 text-sm text-foreground font-medium">orientation</td>
                <td className="py-2 px-4 text-sm text-muted-foreground">{"\"vertical\" | \"horizontal\""}</td>
                <td className="py-2 px-4 text-sm text-muted-foreground">"vertical"</td>
                <td className="py-2 px-4 text-sm text-muted-foreground">Scrollbar orientation</td>
              </tr>
              <tr>
                <td className="py-2 px-4 text-sm text-foreground font-medium">className</td>
                <td className="py-2 px-4 text-sm text-muted-foreground">string</td>
                <td className="py-2 px-4 text-sm text-muted-foreground">-</td>
                <td className="py-2 px-4 text-sm text-muted-foreground">Additional CSS classes</td>
              </tr>
            </tbody>
          </table>
        </div>
      </DocSection>

      <Timestamp date="16-01-2026" />
    </DocPage>
  )
}
