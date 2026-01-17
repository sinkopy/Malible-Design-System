import { ToggleGroup, ToggleGroupItem } from "@/components/ui/toggle-group"
import { DocPage, DocSection, ComponentExample, Timestamp } from "@/components/docs"
import {
  TextAlignLeft,
  TextAlignCenter,
  TextAlignRight,
  SquaresFour,
  List,
  TextB,
  TextItalic,
  TextUnderline,
} from "@phosphor-icons/react"
import * as React from "react"

export default function ToggleGroupDocs() {
  const [alignment, setAlignment] = React.useState("center")
  const [view, setView] = React.useState("grid")
  const [formatting, setFormatting] = React.useState<string[]>([])

  return (
    <DocPage
      title="Toggle Group"
      description="A set of two-state buttons that can be toggled on or off."
      category="Components"
    >
      <DocSection title="Default" description="Single selection toggle group with text and icons.">
        <ComponentExample
          code={`<ToggleGroup type="single" defaultValue="center">
  <ToggleGroupItem value="left">
    <TextAlignLeft size={16} />
    Left
  </ToggleGroupItem>
  <ToggleGroupItem value="center">
    <TextAlignCenter size={16} />
    Center
  </ToggleGroupItem>
  <ToggleGroupItem value="right">
    <TextAlignRight size={16} />
    Right
  </ToggleGroupItem>
</ToggleGroup>`}
        >
          <ToggleGroup type="single" value={alignment} onValueChange={(value) => value && setAlignment(value)}>
            <ToggleGroupItem value="left">
              <TextAlignLeft size={16} />
              Left
            </ToggleGroupItem>
            <ToggleGroupItem value="center">
              <TextAlignCenter size={16} />
              Center
            </ToggleGroupItem>
            <ToggleGroupItem value="right">
              <TextAlignRight size={16} />
              Right
            </ToggleGroupItem>
          </ToggleGroup>
        </ComponentExample>
      </DocSection>

      <DocSection title="Icon Only" description="Icon-only toggle group for compact toolbars.">
        <ComponentExample
          code={`<ToggleGroup type="single" defaultValue="grid" size="icon">
  <ToggleGroupItem value="grid" aria-label="Grid view">
    <SquaresFour size={16} />
  </ToggleGroupItem>
  <ToggleGroupItem value="list" aria-label="List view">
    <List size={16} />
  </ToggleGroupItem>
</ToggleGroup>`}
        >
          <ToggleGroup type="single" value={view} onValueChange={(value) => value && setView(value)} size="icon">
            <ToggleGroupItem value="grid" aria-label="Grid view">
              <SquaresFour size={16} />
            </ToggleGroupItem>
            <ToggleGroupItem value="list" aria-label="List view">
              <List size={16} />
            </ToggleGroupItem>
          </ToggleGroup>
        </ComponentExample>
      </DocSection>

      <DocSection title="Multiple" description="Multiple selection toggle group for independent toggles.">
        <ComponentExample
          code={`<ToggleGroup type="multiple" size="icon">
  <ToggleGroupItem value="bold" aria-label="Bold">
    <TextBolder size={16} />
  </ToggleGroupItem>
  <ToggleGroupItem value="italic" aria-label="Italic">
    <TextItalic size={16} />
  </ToggleGroupItem>
  <ToggleGroupItem value="underline" aria-label="Underline">
    <TextUnderline size={16} />
  </ToggleGroupItem>
</ToggleGroup>`}
        >
          <ToggleGroup
            type="multiple"
            value={formatting}
            onValueChange={setFormatting}
            size="icon"
          >
            <ToggleGroupItem value="bold" aria-label="Bold">
              <TextB size={16} />
            </ToggleGroupItem>
            <ToggleGroupItem value="italic" aria-label="Italic">
              <TextItalic size={16} />
            </ToggleGroupItem>
            <ToggleGroupItem value="underline" aria-label="Underline">
              <TextUnderline size={16} />
            </ToggleGroupItem>
          </ToggleGroup>
        </ComponentExample>
      </DocSection>

      <DocSection title="Disabled" description="Disabled toggle group prevents interaction.">
        <ComponentExample
          code={`<ToggleGroup type="single" defaultValue="left" disabled>
  <ToggleGroupItem value="left">Left</ToggleGroupItem>
  <ToggleGroupItem value="center">Center</ToggleGroupItem>
  <ToggleGroupItem value="right">Right</ToggleGroupItem>
</ToggleGroup>`}
        >
          <ToggleGroup type="single" defaultValue="left" disabled>
            <ToggleGroupItem value="left">Left</ToggleGroupItem>
            <ToggleGroupItem value="center">Center</ToggleGroupItem>
            <ToggleGroupItem value="right">Right</ToggleGroupItem>
          </ToggleGroup>
        </ComponentExample>
      </DocSection>

      <DocSection title="Usage" description="Common patterns for toggle group usage.">
        <ComponentExample
          code={`import { ToggleGroup, ToggleGroupItem } from "@/components/ui/toggle-group"
import { TextAlignLeft, TextAlignCenter, TextAlignRight } from "@phosphor-icons/react"

// Single selection
<ToggleGroup type="single" defaultValue="center">
  <ToggleGroupItem value="left">
    <TextAlignLeft size={16} />
    Left
  </ToggleGroupItem>
  <ToggleGroupItem value="center">
    <TextAlignCenter size={16} />
    Center
  </ToggleGroupItem>
  <ToggleGroupItem value="right">
    <TextAlignRight size={16} />
    Right
  </ToggleGroupItem>
</ToggleGroup>

// Multiple selection
<ToggleGroup type="multiple">
  <ToggleGroupItem value="bold">
    <TextB size={16} />
    Bold
  </ToggleGroupItem>
  <ToggleGroupItem value="italic">Italic</ToggleGroupItem>
</ToggleGroup>

// Icon only
<ToggleGroup type="single" size="icon">
  <ToggleGroupItem value="grid" aria-label="Grid">
    <SquaresFour size={16} />
  </ToggleGroupItem>
  <ToggleGroupItem value="list" aria-label="List">
    <List size={16} />
  </ToggleGroupItem>
</ToggleGroup>

// Controlled
const [value, setValue] = useState("center")
<ToggleGroup type="single" value={value} onValueChange={(v) => v && setValue(v)}>
  <ToggleGroupItem value="left">Left</ToggleGroupItem>
  <ToggleGroupItem value="center">Center</ToggleGroupItem>
</ToggleGroup>`}
        >
          <div className="w-full max-w-sm space-y-4">
            <ToggleGroup type="single" defaultValue="center">
              <ToggleGroupItem value="left">
                <TextAlignLeft size={16} />
                Left
              </ToggleGroupItem>
              <ToggleGroupItem value="center">
                <TextAlignCenter size={16} />
                Center
              </ToggleGroupItem>
              <ToggleGroupItem value="right">
                <TextAlignRight size={16} />
                Right
              </ToggleGroupItem>
            </ToggleGroup>
          </div>
        </ComponentExample>
      </DocSection>

      <DocSection title="Props" description="Toggle Group component props.">
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
                <td className="py-2 px-4 text-sm text-foreground font-medium" rowSpan={5}>ToggleGroup</td>
                <td className="py-2 px-4 text-sm text-foreground font-medium">type</td>
                <td className="py-2 px-4 text-sm text-muted-foreground">{"\"single\" | \"multiple\""}</td>
                <td className="py-2 px-4 text-sm text-muted-foreground">-</td>
                <td className="py-2 px-4 text-sm text-muted-foreground">Required. Selection behavior</td>
              </tr>
              <tr className="border-b border-border">
                <td className="py-2 px-4 text-sm text-foreground font-medium">defaultValue</td>
                <td className="py-2 px-4 text-sm text-muted-foreground">string | string[]</td>
                <td className="py-2 px-4 text-sm text-muted-foreground">-</td>
                <td className="py-2 px-4 text-sm text-muted-foreground">Initial value(s)</td>
              </tr>
              <tr className="border-b border-border">
                <td className="py-2 px-4 text-sm text-foreground font-medium">value</td>
                <td className="py-2 px-4 text-sm text-muted-foreground">string | string[]</td>
                <td className="py-2 px-4 text-sm text-muted-foreground">-</td>
                <td className="py-2 px-4 text-sm text-muted-foreground">Controlled value(s)</td>
              </tr>
              <tr className="border-b border-border">
                <td className="py-2 px-4 text-sm text-foreground font-medium">onValueChange</td>
                <td className="py-2 px-4 text-sm text-muted-foreground">{"(value: string | string[]) => void"}</td>
                <td className="py-2 px-4 text-sm text-muted-foreground">-</td>
                <td className="py-2 px-4 text-sm text-muted-foreground">Callback when value changes</td>
              </tr>
              <tr className="border-b border-border">
                <td className="py-2 px-4 text-sm text-foreground font-medium">size</td>
                <td className="py-2 px-4 text-sm text-muted-foreground">{"\"default\" | \"sm\" | \"icon\""}</td>
                <td className="py-2 px-4 text-sm text-muted-foreground">"default"</td>
                <td className="py-2 px-4 text-sm text-muted-foreground">Item size (inherited by items)</td>
              </tr>
              <tr className="border-b border-border">
                <td className="py-2 px-4 text-sm text-foreground font-medium" rowSpan={2}>ToggleGroupItem</td>
                <td className="py-2 px-4 text-sm text-foreground font-medium">value</td>
                <td className="py-2 px-4 text-sm text-muted-foreground">string</td>
                <td className="py-2 px-4 text-sm text-muted-foreground">-</td>
                <td className="py-2 px-4 text-sm text-muted-foreground">Required. Item value</td>
              </tr>
              <tr>
                <td className="py-2 px-4 text-sm text-foreground font-medium">disabled</td>
                <td className="py-2 px-4 text-sm text-muted-foreground">boolean</td>
                <td className="py-2 px-4 text-sm text-muted-foreground">false</td>
                <td className="py-2 px-4 text-sm text-muted-foreground">Disable this item</td>
              </tr>
            </tbody>
          </table>
        </div>
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
                <td className="p-3 font-medium">Unselected</td>
                <td className="p-3 text-muted-foreground">Muted background</td>
                <td className="p-3 font-mono text-xs text-muted-foreground">bg-transparent text-muted-foreground</td>
              </tr>
              <tr>
                <td className="p-3 font-medium">Hover</td>
                <td className="p-3 text-muted-foreground">Subtle background</td>
                <td className="p-3 font-mono text-xs text-muted-foreground">hover:bg-muted hover:text-muted-foreground</td>
              </tr>
              <tr>
                <td className="p-3 font-medium">Selected</td>
                <td className="p-3 text-muted-foreground">Accent background</td>
                <td className="p-3 font-mono text-xs text-muted-foreground">bg-accent text-accent-foreground</td>
              </tr>
              <tr>
                <td className="p-3 font-medium">Disabled</td>
                <td className="p-3 text-muted-foreground">50% opacity</td>
                <td className="p-3 font-mono text-xs text-muted-foreground">opacity-50 pointer-events-none</td>
              </tr>
            </tbody>
          </table>
        </div>
      </DocSection>

      <DocSection title="Best Practices">
        <div className="space-y-4 text-sm">
          <div className="flex gap-3">
            <span className="text-green-600 font-medium">✅ Do:</span>
            <p className="text-muted-foreground">Use toggle groups for mutually exclusive options like text alignment or view modes.</p>
          </div>
          <div className="flex gap-3">
            <span className="text-red-600 font-medium">❌ Don't:</span>
            <p className="text-muted-foreground">Use for more than 4-5 options—consider a select or radio group.</p>
          </div>

          <div className="flex gap-3">
            <span className="text-green-600 font-medium">✅ Do:</span>
            <p className="text-muted-foreground">Include aria-label on icon-only toggle items for screen readers.</p>
          </div>
          <div className="flex gap-3">
            <span className="text-red-600 font-medium">❌ Don't:</span>
            <p className="text-muted-foreground">Use icon-only toggles without tooltips or labels for accessibility.</p>
          </div>
        </div>
      </DocSection>

      <Timestamp date="17-01-2026 08:34PM" />
    </DocPage>
  )
}
