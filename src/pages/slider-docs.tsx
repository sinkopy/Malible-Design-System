import { Slider } from "@/components/ui/slider"
import { Label } from "@/components/ui/label"
import { DocPage, DocSection, ComponentExample, Timestamp, PropsTable, StateTable } from "@/components/docs"
import * as React from "react"

export default function SliderDocs() {
  const [singleValue, setSingleValue] = React.useState([50])
  const [labeledValue, setLabeledValue] = React.useState([40, 60])

  return (
    <DocPage
      title="Slider"
      description="An input where the user selects a value from within a given range."
      category="Components"
    >
      <DocSection title="Default" description="Single thumb slider for selecting a single value.">
        <ComponentExample
          code={`<Slider defaultValue={[50]} max={100} step={1} />`}
        >
          <div className="w-full max-w-sm">
            <Slider defaultValue={[50]} max={100} step={1} />
          </div>
        </ComponentExample>
      </DocSection>

      <DocSection title="Range" description="Dual thumb slider for selecting a range of values.">
        <ComponentExample
          code={`<Slider defaultValue={[25, 75]} max={100} step={1} />
<Slider defaultValue={[10, 90]} max={100} step={1} />`}
        >
          <div className="w-full max-w-sm space-y-8">
            <div>
              <Slider defaultValue={[25, 75]} max={100} step={1} />
              <p className="text-xs text-muted-foreground mt-2">Range narrow</p>
            </div>
            <div>
              <Slider defaultValue={[10, 90]} max={100} step={1} />
              <p className="text-xs text-muted-foreground mt-2">Range wide</p>
            </div>
          </div>
        </ComponentExample>
      </DocSection>

      <DocSection title="With Labels" description="Slider with label and value display.">
        <ComponentExample
          code={`<div className="flex items-center justify-between gap-4">
  <Label>Range</Label>
  <span className="text-sm text-muted-foreground">40 - 60</span>
</div>
<Slider value={[40, 60]} max={100} step={1} />`}
        >
          <div className="w-full max-w-sm space-y-2">
            <div className="flex items-center justify-between gap-4">
              <Label>Range</Label>
              <span className="text-sm text-muted-foreground">
                {labeledValue[0]} - {labeledValue[1]}
              </span>
            </div>
            <Slider
              value={labeledValue}
              onValueChange={setLabeledValue}
              max={100}
              step={1}
            />
          </div>
        </ComponentExample>
      </DocSection>

      <DocSection title="Vertical" description="Vertical orientation slider. Requires explicit height on container.">
        <ComponentExample
          code={`<div className="h-48">
  <Slider orientation="vertical" defaultValue={[50]} max={100} step={1} />
</div>`}
        >
          <div className="flex items-center justify-center">
            <div className="h-48">
              <Slider orientation="vertical" defaultValue={[50]} max={100} step={1} />
            </div>
          </div>
        </ComponentExample>
      </DocSection>

      <DocSection title="Usage" description="Common patterns for slider usage.">
        <ComponentExample
          code={`import { Slider } from "@/components/ui/slider"
import { useState } from "react"

// Single value slider
<Slider defaultValue={[50]} max={100} step={1} />

// Range slider (dual thumbs)
<Slider defaultValue={[25, 75]} max={100} step={1} />

// With change handler
const [value, setValue] = useState([50])
<Slider value={value} onValueChange={setValue} max={100} step={1} />

// Vertical
<div className="h-48">
  <Slider orientation="vertical" defaultValue={[50]} max={100} step={1} />
</div>`}
        >
          <div className="w-full max-w-sm space-y-8">
            <Slider defaultValue={[50]} max={100} step={1} />
            <Slider defaultValue={[25, 75]} max={100} step={1} />
            <Slider value={singleValue} onValueChange={setSingleValue} max={100} step={1} />
          </div>
        </ComponentExample>
      </DocSection>

      <DocSection title="Reference" description="Technical details and compliance for the slider component." level={2}>
        <DocSection title="Accessibility">
          <div className="space-y-4 text-[14px] text-muted-foreground leading-relaxed">
            <p>
              Sliders are implemented with semantic ARIA attributes to ensure they are fully navigable by keyboard and screen readers.
            </p>
            <ul className="list-disc list-inside space-y-2 ml-2">
              <li>Use the <code className="text-[13px] bg-muted/20 border border-border/30 px-1 rounded">Label</code> component to associate a text title with the slider.</li>
              <li>Provide current value feedback via a visible text element or <code className="text-[13px] bg-muted/20 border border-border/30 px-1 rounded">aria-valuetext</code>.</li>
              <li>Keyboard: <kbd className="text-[11px] font-sans bg-muted/20 px-1 rounded border border-border/20">Arrow Keys</kbd> to adjust value, <kbd className="text-[11px] font-sans bg-muted/20 px-1 rounded border border-border/20">Home/End</kbd> for min/max.</li>
            </ul>
          </div>
        </DocSection>

        <DocSection title="State Reference">
          <StateTable
            states={[
              { state: "Track", style: "Default background", token: "bg-muted" },
              { state: "Range", style: "Filled area", token: "bg-primary" },
              { state: "Thumb", style: "Circular indicator", token: "bg-background border-primary" },
              { state: "Thumb:Hover", style: "Inner ring", token: "ring-ring" },
              { state: "Disabled", style: "50% opacity", token: "opacity-50" },
            ]}
          />
        </DocSection>

        <DocSection title="Props" description="Slider component props configuration.">
          <PropsTable
            props={[
              {
                name: "defaultValue",
                type: "number[]",
                default: "[50]",
                description: "Initial value(s). Array length determines number of thumbs."
              },
              {
                name: "value",
                type: "number[]",
                description: "Controlled value(s)."
              },
              {
                name: "onValueChange",
                type: "(value: number[]) => void",
                description: "Callback when value changes."
              },
              {
                name: "max",
                type: "number",
                default: "100",
                description: "Maximum value"
              },
              {
                name: "min",
                type: "number",
                default: "0",
                description: "Minimum value"
              },
              {
                name: "step",
                type: "number",
                default: "1",
                description: "Step increment"
              },
              {
                name: "orientation",
                type: '"horizontal" | "vertical"',
                default: '"horizontal"',
                description: "Slider orientation"
              },
            ]}
          />
        </DocSection>
      </DocSection>

      <DocSection title="Best Practices">
        <div className="space-y-4 text-sm">
          <div className="flex gap-3">
            <span className="text-green-600 font-medium">✅ Do:</span>
            <p className="text-muted-foreground">Show the current value alongside the slider (e.g., "Volume: 75%").</p>
          </div>
          <div className="flex gap-3">
            <span className="text-red-600 font-medium">❌ Don't:</span>
            <p className="text-muted-foreground">Use sliders without any value feedback—users need to know the selection.</p>
          </div>

          <div className="flex gap-3">
            <span className="text-green-600 font-medium">✅ Do:</span>
            <p className="text-muted-foreground">Use sliders for ranges like volume, brightness, or price filters.</p>
          </div>
          <div className="flex gap-3">
            <span className="text-red-600 font-medium">❌ Don't:</span>
            <p className="text-muted-foreground">Use sliders when users need precise numeric input—use a number input.</p>
          </div>
        </div>
      </DocSection>

      <Timestamp date="17-01-2026 08:34PM" />
    </DocPage>
  );
}
