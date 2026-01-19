import { ToggleGroup, ToggleGroupItem } from "@/components/ui/toggle-group"
import { DocPage, DocSection, ComponentExample, Timestamp, PropsTable, StateTable } from "@/components/docs"
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

      <DocSection title="Reference" description="Technical details and compliance for the toggle group component." level={2}>
        <DocSection title="Accessibility">
          <div className="space-y-4 text-[14px] text-muted-foreground leading-relaxed">
            <p>
              Toggle groups represent a set of related options that can be toggled.
            </p>
            <ul className="list-disc list-inside space-y-2 ml-2">
              <li>Item icons should be hidden from screen readers if they are purely decorative.</li>
              <li>Always include an <code className="text-[13px] bg-muted/20 border border-border/30 px-1 rounded">aria-label</code> for icon-only items.</li>
              <li>Keyboard: <kbd className="text-[11px] font-sans bg-muted/20 px-1 rounded border border-border/20">Tab</kbd> to enter the group, <kbd className="text-[11px] font-sans bg-muted/20 px-1 rounded border border-border/20">Arrow Keys</kbd> to move between items, <kbd className="text-[11px] font-sans bg-muted/20 px-1 rounded border border-border/20">Space</kbd> or <kbd className="text-[11px] font-sans bg-muted/20 px-1 rounded border border-border/20">Enter</kbd> to toggle.</li>
            </ul>
          </div>
        </DocSection>

        <DocSection title="State Reference">
          <StateTable
            states={[
              { state: "Unselected", style: "Transparent background", token: "bg-transparent" },
              { state: "Hover", style: "Subtle background", token: "hover:bg-muted" },
              { state: "Selected", style: "Accent background", token: "bg-accent" },
              { state: "Disabled", style: "50% opacity", token: "opacity-50" },
            ]}
          />
        </DocSection>

        <DocSection title="Props" description="Toggle Group component props configuration.">
          <PropsTable
            props={[
              {
                name: "type",
                type: '"single" | "multiple"',
                description: "Required. Selection behavior."
              },
              {
                name: "defaultValue",
                type: "string | string[]",
                description: "Initial value(s)."
              },
              {
                name: "value",
                type: "string | string[]",
                description: "Controlled value(s)."
              },
              {
                name: "onValueChange",
                type: "(value: any) => void",
                description: "Callback when value changes."
              },
              {
                name: "size",
                type: '"default" | "sm" | "icon"',
                default: '"default"',
                description: "Item size (inherited by items)."
              },
            ]}
          />
        </DocSection>
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
