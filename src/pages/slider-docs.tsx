import { Slider } from "@/components/ui/slider"
import { Label } from "@/components/ui/label"
import { DocPage, DocSection, ComponentExample, Timestamp } from "@/components/docs"
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

      <DocSection title="Props" description="Slider component props.">
        <div className="overflow-x-auto">
          <table className="w-full border-collapse">
            <thead>
              <tr className="border-b border-border">
                <th className="text-left py-2 px-4 text-sm font-semibold text-foreground">Prop</th>
                <th className="text-left py-2 px-4 text-sm font-semibold text-foreground">Type</th>
                <th className="text-left py-2 px-4 text-sm font-semibold text-foreground">Default</th>
                <th className="text-left py-2 px-4 text-sm font-semibold text-foreground">Description</th>
              </tr>
            </thead>
            <tbody>
              <tr className="border-b border-border">
                <td className="py-2 px-4 text-sm text-foreground font-medium">defaultValue</td>
                <td className="py-2 px-4 text-sm text-muted-foreground">number[]</td>
                <td className="py-2 px-4 text-sm text-muted-foreground">[50]</td>
                <td className="py-2 px-4 text-sm text-muted-foreground">Initial value(s). Array length determines number of thumbs.</td>
              </tr>
              <tr className="border-b border-border">
                <td className="py-2 px-4 text-sm text-foreground font-medium">value</td>
                <td className="py-2 px-4 text-sm text-muted-foreground">number[]</td>
                <td className="py-2 px-4 text-sm text-muted-foreground">-</td>
                <td className="py-2 px-4 text-sm text-muted-foreground">Controlled value(s). Use with onValueChange.</td>
              </tr>
              <tr className="border-b border-border">
                <td className="py-2 px-4 text-sm text-foreground font-medium">onValueChange</td>
                <td className="py-2 px-4 text-sm text-muted-foreground">{"(value: number[]) => void"}</td>
                <td className="py-2 px-4 text-sm text-muted-foreground">-</td>
                <td className="py-2 px-4 text-sm text-muted-foreground">Callback when value changes.</td>
              </tr>
              <tr className="border-b border-border">
                <td className="py-2 px-4 text-sm text-foreground font-medium">max</td>
                <td className="py-2 px-4 text-sm text-muted-foreground">number</td>
                <td className="py-2 px-4 text-sm text-muted-foreground">100</td>
                <td className="py-2 px-4 text-sm text-muted-foreground">Maximum value</td>
              </tr>
              <tr className="border-b border-border">
                <td className="py-2 px-4 text-sm text-foreground font-medium">min</td>
                <td className="py-2 px-4 text-sm text-muted-foreground">number</td>
                <td className="py-2 px-4 text-sm text-muted-foreground">0</td>
                <td className="py-2 px-4 text-sm text-muted-foreground">Minimum value</td>
              </tr>
              <tr className="border-b border-border">
                <td className="py-2 px-4 text-sm text-foreground font-medium">step</td>
                <td className="py-2 px-4 text-sm text-muted-foreground">number</td>
                <td className="py-2 px-4 text-sm text-muted-foreground">1</td>
                <td className="py-2 px-4 text-sm text-muted-foreground">Step increment</td>
              </tr>
              <tr className="border-b border-border">
                <td className="py-2 px-4 text-sm text-foreground font-medium">orientation</td>
                <td className="py-2 px-4 text-sm text-muted-foreground">"horizontal" | "vertical"</td>
                <td className="py-2 px-4 text-sm text-muted-foreground">"horizontal"</td>
                <td className="py-2 px-4 text-sm text-muted-foreground">Slider orientation</td>
              </tr>
              <tr>
                <td className="py-2 px-4 text-sm text-foreground font-medium">disabled</td>
                <td className="py-2 px-4 text-sm text-muted-foreground">boolean</td>
                <td className="py-2 px-4 text-sm text-muted-foreground">false</td>
                <td className="py-2 px-4 text-sm text-muted-foreground">Disable interaction</td>
              </tr>
            </tbody>
          </table>
        </div>
      </DocSection>

      <Timestamp date="16-01-2026" />
    </DocPage>
  );
}
