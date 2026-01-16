import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectSeparator,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
import { Label } from "@/components/ui/label"
import { DocPage, DocSection, ComponentExample, Timestamp } from "@/components/docs"

export default function SelectDocs() {
  return (
    <DocPage
      title="Select"
      description="Displays a list of options for the user to pick from—triggered by a button."
      category="Components"
    >
      <DocSection title="Default" description="Basic select with placeholder and options.">
        <ComponentExample
          code={`<Select>
  <SelectTrigger className="w-[240px]">
    <SelectValue placeholder="Select an option" />
  </SelectTrigger>
  <SelectContent>
    <SelectItem value="option1">Option 1</SelectItem>
    <SelectItem value="option2">Option 2</SelectItem>
    <SelectItem value="option3">Option 3</SelectItem>
  </SelectContent>
</Select>`}
        >
          <Select>
            <SelectTrigger className="w-[240px]">
              <SelectValue placeholder="Select an option" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="option1">Option 1</SelectItem>
              <SelectItem value="option2">Option 2</SelectItem>
              <SelectItem value="option3">Option 3</SelectItem>
            </SelectContent>
          </Select>
        </ComponentExample>
      </DocSection>

      <DocSection title="With Groups" description="Grouped options with labels and separators.">
        <ComponentExample
          code={`<Select>
  <SelectTrigger className="w-[240px]">
    <SelectValue placeholder="Select a theme" />
  </SelectTrigger>
  <SelectContent>
    <SelectGroup>
      <SelectLabel>Default</SelectLabel>
      <SelectItem value="default">Default</SelectItem>
      <SelectItem value="blue">Blue</SelectItem>
      <SelectItem value="green">Green</SelectItem>
    </SelectGroup>
    <SelectSeparator />
    <SelectGroup>
      <SelectLabel>Scaled</SelectLabel>
      <SelectItem value="scaled-default">Default</SelectItem>
      <SelectItem value="scaled-blue">Blue</SelectItem>
    </SelectGroup>
  </SelectContent>
</Select>`}
        >
          <Select>
            <SelectTrigger className="w-[240px]">
              <SelectValue placeholder="Select a theme" />
            </SelectTrigger>
            <SelectContent>
              <SelectGroup>
                <SelectLabel>Default</SelectLabel>
                <SelectItem value="default">Default</SelectItem>
                <SelectItem value="blue">Blue</SelectItem>
                <SelectItem value="green">Green</SelectItem>
              </SelectGroup>
              <SelectSeparator />
              <SelectGroup>
                <SelectLabel>Scaled</SelectLabel>
                <SelectItem value="scaled-default">Default</SelectItem>
                <SelectItem value="scaled-blue">Blue</SelectItem>
              </SelectGroup>
            </SelectContent>
          </Select>
        </ComponentExample>
      </DocSection>

      <DocSection title="States" description="Different states for the select component.">
        <ComponentExample
          code={`<Select>
  <SelectTrigger className="w-[240px]">
    <SelectValue placeholder="Default" />
  </SelectTrigger>
  <SelectContent>
    <SelectItem value="option1">Option 1</SelectItem>
    <SelectItem value="option2">Option 2</SelectItem>
  </SelectContent>
</Select>

<Select>
  <SelectTrigger className="w-[240px]" error>
    <SelectValue placeholder="Error state" />
  </SelectTrigger>
  <SelectContent>
    <SelectItem value="option1">Option 1</SelectItem>
    <SelectItem value="option2">Option 2</SelectItem>
  </SelectContent>
</Select>

<Select>
  <SelectTrigger className="w-[240px]" disabled>
    <SelectValue placeholder="Disabled" />
  </SelectTrigger>
  <SelectContent>
    <SelectItem value="option1">Option 1</SelectItem>
    <SelectItem value="option2">Option 2</SelectItem>
  </SelectContent>
</Select>`}
        >
          <div className="flex flex-col gap-4 w-full max-w-sm">
            <Select>
              <SelectTrigger className="w-[240px]">
                <SelectValue placeholder="Default" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="option1">Option 1</SelectItem>
                <SelectItem value="option2">Option 2</SelectItem>
              </SelectContent>
            </Select>
            <Select>
              <SelectTrigger className="w-[240px]" error>
                <SelectValue placeholder="Error state" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="option1">Option 1</SelectItem>
                <SelectItem value="option2">Option 2</SelectItem>
              </SelectContent>
            </Select>
            <Select>
              <SelectTrigger className="w-[240px]" disabled>
                <SelectValue placeholder="Disabled" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="option1">Option 1</SelectItem>
                <SelectItem value="option2">Option 2</SelectItem>
              </SelectContent>
            </Select>
          </div>
        </ComponentExample>
      </DocSection>

      <DocSection title="Form Integration" description="Select with external label for form usage.">
        <ComponentExample
          code={`<div className="space-y-2">
  <Label htmlFor="framework">Framework</Label>
  <Select>
    <SelectTrigger id="framework" className="w-[240px]">
      <SelectValue placeholder="Select a framework" />
    </SelectTrigger>
    <SelectContent>
      <SelectItem value="react">React</SelectItem>
      <SelectItem value="vue">Vue</SelectItem>
      <SelectItem value="angular">Angular</SelectItem>
    </SelectContent>
  </Select>
</div>`}
        >
          <div className="space-y-2 w-full max-w-sm">
            <Label htmlFor="framework">Framework</Label>
            <Select>
              <SelectTrigger id="framework" className="w-[240px]">
                <SelectValue placeholder="Select a framework" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="react">React</SelectItem>
                <SelectItem value="vue">Vue</SelectItem>
                <SelectItem value="angular">Angular</SelectItem>
              </SelectContent>
            </Select>
          </div>
        </ComponentExample>
      </DocSection>

      <DocSection title="Usage" description="Common patterns for select usage.">
        <ComponentExample
          code={`import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"

// Basic usage
<Select>
  <SelectTrigger className="w-[240px]">
    <SelectValue placeholder="Select an option" />
  </SelectTrigger>
  <SelectContent>
    <SelectItem value="option1">Option 1</SelectItem>
    <SelectItem value="option2">Option 2</SelectItem>
    <SelectItem value="option3">Option 3</SelectItem>
  </SelectContent>
</Select>

// With error state
<Select>
  <SelectTrigger className="w-[240px]" error>
    <SelectValue placeholder="Select an option" />
  </SelectTrigger>
  <SelectContent>
    <SelectItem value="option1">Option 1</SelectItem>
    <SelectItem value="option2">Option 2</SelectItem>
  </SelectContent>
</Select>

// Controlled value
const [value, setValue] = useState("option1")
<Select value={value} onValueChange={setValue}>
  <SelectTrigger className="w-[240px]">
    <SelectValue />
  </SelectTrigger>
  <SelectContent>
    <SelectItem value="option1">Option 1</SelectItem>
    <SelectItem value="option2">Option 2</SelectItem>
  </SelectContent>
</Select>`}
        >
          <div className="w-full max-w-sm space-y-4">
            <Select>
              <SelectTrigger className="w-[240px]">
                <SelectValue placeholder="Select an option" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="option1">Option 1</SelectItem>
                <SelectItem value="option2">Option 2</SelectItem>
                <SelectItem value="option3">Option 3</SelectItem>
              </SelectContent>
            </Select>
          </div>
        </ComponentExample>
      </DocSection>

      <DocSection title="Props" description="Select component props.">
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
                <td className="py-2 px-4 text-sm text-foreground font-medium" rowSpan={2}>SelectTrigger</td>
                <td className="py-2 px-4 text-sm text-foreground font-medium">className</td>
                <td className="py-2 px-4 text-sm text-muted-foreground">string</td>
                <td className="py-2 px-4 text-sm text-muted-foreground">-</td>
                <td className="py-2 px-4 text-sm text-muted-foreground">Additional CSS classes</td>
              </tr>
              <tr className="border-b border-border">
                <td className="py-2 px-4 text-sm text-foreground font-medium">error</td>
                <td className="py-2 px-4 text-sm text-muted-foreground">boolean</td>
                <td className="py-2 px-4 text-sm text-muted-foreground">false</td>
                <td className="py-2 px-4 text-sm text-muted-foreground">Show error state styling</td>
              </tr>
              <tr className="border-b border-border">
                <td className="py-2 px-4 text-sm text-foreground font-medium">SelectTrigger</td>
                <td className="py-2 px-4 text-sm text-foreground font-medium">disabled</td>
                <td className="py-2 px-4 text-sm text-muted-foreground">boolean</td>
                <td className="py-2 px-4 text-sm text-muted-foreground">false</td>
                <td className="py-2 px-4 text-sm text-muted-foreground">Disable interaction</td>
              </tr>
              <tr className="border-b border-border">
                <td className="py-2 px-4 text-sm text-foreground font-medium" rowSpan={1}>SelectContent</td>
                <td className="py-2 px-4 text-sm text-foreground font-medium">position</td>
                <td className="py-2 px-4 text-sm text-muted-foreground">{"\"popper\" | \"item-aligned\""}</td>
                <td className="py-2 px-4 text-sm text-muted-foreground">"popper"</td>
                <td className="py-2 px-4 text-sm text-muted-foreground">Dropdown positioning strategy</td>
              </tr>
              <tr className="border-b border-border">
                <td className="py-2 px-4 text-sm text-foreground font-medium" rowSpan={2}>SelectItem</td>
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

      <Timestamp date="17-01-2026" />
    </DocPage>
  )
}
