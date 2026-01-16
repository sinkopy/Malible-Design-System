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
          code={`<Popover>
  <PopoverTrigger asChild>
    <Button variant="secondary">Top</Button>
  </PopoverTrigger>
  <PopoverContent side="top">
    <p className="text-sm">Popover on top</p>
  </PopoverContent>
</Popover>

<Popover>
  <PopoverTrigger asChild>
    <Button variant="secondary">Bottom</Button>
  </PopoverTrigger>
  <PopoverContent side="bottom">
    <p className="text-sm">Popover on bottom</p>
  </PopoverContent>
</Popover>

<Popover>
  <PopoverTrigger asChild>
    <Button variant="secondary">Left</Button>
  </PopoverTrigger>
  <PopoverContent side="left">
    <p className="text-sm">Popover on left</p>
  </PopoverContent>
</Popover>

<Popover>
  <PopoverTrigger asChild>
    <Button variant="secondary">Right</Button>
  </PopoverTrigger>
  <PopoverContent side="right">
    <p className="text-sm">Popover on right</p>
  </PopoverContent>
</Popover>`}
        >
          <div className="flex flex-col items-center gap-8 py-8">
            <Popover>
              <PopoverTrigger asChild>
                <Button variant="secondary">Top</Button>
              </PopoverTrigger>
              <PopoverContent side="top">
                <p className="text-sm">Popover on top</p>
              </PopoverContent>
            </Popover>
            <div className="flex items-center gap-8">
              <Popover>
                <PopoverTrigger asChild>
                  <Button variant="secondary">Left</Button>
                </PopoverTrigger>
                <PopoverContent side="left">
                  <p className="text-sm">Popover on left</p>
                </PopoverContent>
              </Popover>
              <Popover>
                <PopoverTrigger asChild>
                  <Button variant="secondary">Right</Button>
                </PopoverTrigger>
                <PopoverContent side="right">
                  <p className="text-sm">Popover on right</p>
                </PopoverContent>
              </Popover>
            </div>
            <Popover>
              <PopoverTrigger asChild>
                <Button variant="secondary">Bottom</Button>
              </PopoverTrigger>
              <PopoverContent side="bottom">
                <p className="text-sm">Popover on bottom</p>
              </PopoverContent>
            </Popover>
          </div>
        </ComponentExample>
      </DocSection>

      <DocSection title="Alignment" description="Control horizontal alignment relative to the trigger.">
        <ComponentExample
          code={`<Popover>
  <PopoverTrigger asChild>
    <Button variant="secondary">Start</Button>
  </PopoverTrigger>
  <PopoverContent align="start">
    <p className="text-sm">Aligned to start</p>
  </PopoverContent>
</Popover>

<Popover>
  <PopoverTrigger asChild>
    <Button variant="secondary">Center</Button>
  </PopoverTrigger>
  <PopoverContent align="center">
    <p className="text-sm">Aligned to center</p>
  </PopoverContent>
</Popover>

<Popover>
  <PopoverTrigger asChild>
    <Button variant="secondary">End</Button>
  </PopoverTrigger>
  <PopoverContent align="end">
    <p className="text-sm">Aligned to end</p>
  </PopoverContent>
</Popover>`}
        >
          <div className="flex items-center justify-center gap-4 py-8">
            <Popover>
              <PopoverTrigger asChild>
                <Button variant="secondary">Start</Button>
              </PopoverTrigger>
              <PopoverContent align="start">
                <p className="text-sm">Aligned to start</p>
              </PopoverContent>
            </Popover>
            <Popover>
              <PopoverTrigger asChild>
                <Button variant="secondary">Center</Button>
              </PopoverTrigger>
              <PopoverContent align="center">
                <p className="text-sm">Aligned to center</p>
              </PopoverContent>
            </Popover>
            <Popover>
              <PopoverTrigger asChild>
                <Button variant="secondary">End</Button>
              </PopoverTrigger>
              <PopoverContent align="end">
                <p className="text-sm">Aligned to end</p>
              </PopoverContent>
            </Popover>
          </div>
        </ComponentExample>
      </DocSection>

      <DocSection title="Usage" description="Common patterns for popover usage.">
        <ComponentExample
          code={`import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover"

// Basic usage
<Popover>
  <PopoverTrigger asChild>
    <Button>Open</Button>
  </PopoverTrigger>
  <PopoverContent>
    {/* Your content here */}
  </PopoverContent>
</Popover>

// With custom positioning
<Popover>
  <PopoverTrigger asChild>
    <Button>Open</Button>
  </PopoverTrigger>
  <PopoverContent side="top" align="start" sideOffset={8}>
    <p>Custom positioned popover</p>
  </PopoverContent>
</Popover>

// Controlled state
const [open, setOpen] = useState(false)
<Popover open={open} onOpenChange={setOpen}>
  <PopoverTrigger asChild>
    <Button>Open</Button>
  </PopoverTrigger>
  <PopoverContent>
    <p>Controlled popover</p>
  </PopoverContent>
</Popover>`}
        >
          <div className="w-full max-w-sm">
            <Popover>
              <PopoverTrigger asChild>
                <Button variant="secondary">Open Popover</Button>
              </PopoverTrigger>
              <PopoverContent>
                <p className="text-sm">Your content here</p>
              </PopoverContent>
            </Popover>
          </div>
        </ComponentExample>
      </DocSection>

      <DocSection title="Props" description="Popover component props.">
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
                <td className="py-2 px-4 text-sm text-foreground font-medium" rowSpan={4}>PopoverContent</td>
                <td className="py-2 px-4 text-sm text-foreground font-medium">side</td>
                <td className="py-2 px-4 text-sm text-muted-foreground">{"\"top\" | \"right\" | \"bottom\" | \"left\""}</td>
                <td className="py-2 px-4 text-sm text-muted-foreground">"bottom"</td>
                <td className="py-2 px-4 text-sm text-muted-foreground">Side of trigger to show popover</td>
              </tr>
              <tr className="border-b border-border">
                <td className="py-2 px-4 text-sm text-foreground font-medium">align</td>
                <td className="py-2 px-4 text-sm text-muted-foreground">{"\"start\" | \"center\" | \"end\""}</td>
                <td className="py-2 px-4 text-sm text-muted-foreground">"center"</td>
                <td className="py-2 px-4 text-sm text-muted-foreground">Alignment relative to trigger</td>
              </tr>
              <tr className="border-b border-border">
                <td className="py-2 px-4 text-sm text-foreground font-medium">sideOffset</td>
                <td className="py-2 px-4 text-sm text-muted-foreground">number</td>
                <td className="py-2 px-4 text-sm text-muted-foreground">4</td>
                <td className="py-2 px-4 text-sm text-muted-foreground">Distance from trigger in pixels</td>
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

      <Timestamp date="17-01-2026" />
    </DocPage>
  )
}
