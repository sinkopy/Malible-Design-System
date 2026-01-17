import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { DocPage, DocSection, ComponentExample, Timestamp } from "@/components/docs"

export default function PopoverDocs() {
  return (
    <DocPage
      title="Popover"
      description="Displays rich content in a portal, triggered by a button."
      category="Components"
    >
      <DocSection title="Examples" description="Common use cases and variations of the popover component." level={2}>
        <DocSection title="Default" description="Basic popover with form-like content.">
          <ComponentExample
            code={`<Popover>
  <PopoverTrigger asChild>
    <Button variant="secondary">Open Popover</Button>
  </PopoverTrigger>
  <PopoverContent className="w-80">
    <div className="space-y-4">
      <div className="space-y-1">
        <h4 className="font-medium text-lg leading-6">Dimensions</h4>
        <p className="text-xs text-muted-foreground">
          Set the dimensions for the layer.
        </p>
      </div>
      <div className="grid gap-2">
        <div className="grid grid-cols-3 items-center gap-4">
          <Label htmlFor="width">Width</Label>
          <Input id="width" defaultValue="100%" className="col-span-2 h-8" />
        </div>
        <div className="grid grid-cols-3 items-center gap-4">
          <Label htmlFor="maxWidth">Max. width</Label>
          <Input id="maxWidth" defaultValue="300px" className="col-span-2 h-8" />
        </div>
        <div className="grid grid-cols-3 items-center gap-4">
          <Label htmlFor="height">Height</Label>
          <Input id="height" defaultValue="40px" className="col-span-2 h-8" />
        </div>
        <div className="grid grid-cols-3 items-center gap-4">
          <Label htmlFor="maxHeight">Max. height</Label>
          <Input id="maxHeight" defaultValue="0" className="col-span-2 h-8" />
        </div>
      </div>
    </div>
  </PopoverContent>
</Popover>`}
          >
            <Popover>
              <PopoverTrigger asChild>
                <Button variant="secondary">Open Popover</Button>
              </PopoverTrigger>
              <PopoverContent className="w-80">
                <div className="space-y-4">
                  <div className="space-y-1">
                    <h4 className="font-medium text-lg leading-6">Dimensions</h4>
                    <p className="text-xs text-muted-foreground">
                      Set the dimensions for the layer.
                    </p>
                  </div>
                  <div className="grid gap-2">
                    <div className="grid grid-cols-3 items-center gap-4">
                      <Label htmlFor="width">Width</Label>
                      <Input id="width" defaultValue="100%" className="col-span-2 h-8" />
                    </div>
                    <div className="grid grid-cols-3 items-center gap-4">
                      <Label htmlFor="maxWidth">Max. width</Label>
                      <Input id="maxWidth" defaultValue="300px" className="col-span-2 h-8" />
                    </div>
                    <div className="grid grid-cols-3 items-center gap-4">
                      <Label htmlFor="height">Height</Label>
                      <Input id="height" defaultValue="40px" className="col-span-2 h-8" />
                    </div>
                    <div className="grid grid-cols-3 items-center gap-4">
                      <Label htmlFor="maxHeight">Max. height</Label>
                      <Input id="maxHeight" defaultValue="0" className="col-span-2 h-8" />
                    </div>
                  </div>
                </div>
              </PopoverContent>
            </Popover>
          </ComponentExample>
        </DocSection>

        <DocSection title="Positioning" description="Popover can appear on all four sides of the trigger.">
          <ComponentExample
            code={`<div className="flex gap-2">
  <Popover>
    <PopoverTrigger asChild>
      <Button variant="secondary">Top</Button>
    </PopoverTrigger>
    <PopoverContent side="top">Popover on top</PopoverContent>
  </Popover>
  {/* ... other sides */}
</div>`}
          >
            <div className="flex flex-wrap gap-4 items-center justify-center py-4">
              <Popover>
                <PopoverTrigger asChild>
                  <Button variant="secondary">Top</Button>
                </PopoverTrigger>
                <PopoverContent side="top">Popover on top</PopoverContent>
              </Popover>
              <Popover>
                <PopoverTrigger asChild>
                  <Button variant="secondary">Right</Button>
                </PopoverTrigger>
                <PopoverContent side="right">Popover on right</PopoverContent>
              </Popover>
              <Popover>
                <PopoverTrigger asChild>
                  <Button variant="secondary">Bottom</Button>
                </PopoverTrigger>
                <PopoverContent side="bottom">Popover on bottom</PopoverContent>
              </Popover>
              <Popover>
                <PopoverTrigger asChild>
                  <Button variant="secondary">Left</Button>
                </PopoverTrigger>
                <PopoverContent side="left">Popover on left</PopoverContent>
              </Popover>
            </div>
          </ComponentExample>
        </DocSection>
      </DocSection>

      <DocSection title="Reference" description="Technical details and configuration for the popover component." level={2}>
        <DocSection title="Props" description="Popover component props configuration.">
          <div className="rounded-lg border border-border/50 overflow-hidden">
            <table className="w-full text-sm">
              <thead className="bg-muted/30">
                <tr>
                  <th className="text-left p-4 font-medium uppercase tracking-wider text-[11px] text-muted-foreground">Component</th>
                  <th className="text-left p-4 font-medium uppercase tracking-wider text-[11px] text-muted-foreground">Prop</th>
                  <th className="text-left p-4 font-medium uppercase tracking-wider text-[11px] text-muted-foreground">Type</th>
                  <th className="text-left p-4 font-medium uppercase tracking-wider text-[11px] text-muted-foreground">Description</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-border/50">
                <tr>
                  <td className="p-4 font-medium text-[13px]">PopoverContent</td>
                  <td className="p-4"><code className="text-xs font-mono bg-muted/50 px-1.5 py-0.5 rounded text-info/80">side</code></td>
                  <td className="p-4 text-muted-foreground text-[13px]">string</td>
                  <td className="p-4 text-muted-foreground text-[13px]">Side of trigger (top, right, bottom, left)</td>
                </tr>
                <tr>
                  <td className="p-4 font-medium text-[13px]">PopoverContent</td>
                  <td className="p-4"><code className="text-xs font-mono bg-muted/50 px-1.5 py-0.5 rounded text-info/80">align</code></td>
                  <td className="p-4 text-muted-foreground text-[13px]">string</td>
                  <td className="p-4 text-muted-foreground text-[13px]">Alignment relative to trigger (start, center, end)</td>
                </tr>
                <tr>
                  <td className="p-4 font-medium text-[13px]">PopoverContent</td>
                  <td className="p-4"><code className="text-xs font-mono bg-muted/50 px-1.5 py-0.5 rounded text-info/80">sideOffset</code></td>
                  <td className="p-4 text-muted-foreground text-[13px]">number</td>
                  <td className="p-4 text-muted-foreground text-[13px]">Distance from trigger in pixels (default: 4)</td>
                </tr>
              </tbody>
            </table>
          </div>
        </DocSection>

        <DocSection title="Best Practices">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-[14px]">
            <div className="space-y-4 p-4 rounded-lg bg-success/5 border border-success/10">
              <div className="flex gap-3">
                <span className="text-success font-bold">✅ Do:</span>
                <p className="text-muted-foreground leading-snug">Use popovers for rich content like forms, small dashboards, or detailed settings.</p>
              </div>
              <div className="flex gap-3">
                <span className="text-success font-bold">✅ Do:</span>
                <p className="text-muted-foreground leading-snug">Size popovers appropriately for their content—typically between 240px and 320px wide.</p>
              </div>
            </div>
            <div className="space-y-4 p-4 rounded-lg bg-destructive/5 border border-destructive/10">
              <div className="flex gap-3">
                <span className="text-destructive font-bold">❌ Don't:</span>
                <p className="text-muted-foreground leading-snug">Use popovers for simple text-only hints—use tooltips for that purpose.</p>
              </div>
              <div className="flex gap-3">
                <span className="text-destructive font-bold">❌ Don't:</span>
                <p className="text-muted-foreground leading-snug">Make popovers too large—if it needs more space than a small panel, use a dialog instead.</p>
              </div>
            </div>
          </div>
        </DocSection>
      </DocSection>

      <Timestamp date="17-01-2026 08:34PM" />
    </DocPage>
  )
}
