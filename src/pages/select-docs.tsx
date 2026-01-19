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
import { DocPage, DocSection, ComponentExample, Timestamp, PropsTable, StateTable } from "@/components/docs"

export default function SelectDocs() {
  return (
    <DocPage
      title="Select"
      description="Displays a list of options for the user to pick from—triggered by a button."
      category="Components"
    >
      <DocSection title="Examples" description="Common use cases and variations of the select component." level={2}>
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
    </SelectGroup>
    <SelectSeparator />
    <SelectGroup>
      <SelectLabel>Scaled</SelectLabel>
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
            code={`<div className="flex flex-col gap-4">
  <Select disabled>
    <SelectTrigger className="w-[240px]">
      <SelectValue placeholder="Disabled" />
    </SelectTrigger>
  </Select>
  
  <SelectTrigger error className="w-[240px]">
    <SelectValue placeholder="Error state" />
  </SelectTrigger>
</div>`}
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
              <Select disabled>
                <SelectTrigger className="w-[240px]">
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
      </DocSection>

      <DocSection title="Reference" description="Technical details and configuration for the select component." level={2}>
        <DocSection title="State Reference">
          <StateTable
            states={[
              { state: "Default", style: "Border only", token: "border-input" },
              { state: "Focus", style: "Ring indicator", token: "ring-2 ring-ring" },
              { state: "Error", style: "Destructive border", token: "border-destructive" },
              { state: "Disabled", style: "50% opacity", token: "opacity-50" },
            ]}
          />
        </DocSection>

        <DocSection title="Props" description="Select component props configuration.">
          <PropsTable
            props={[
              {
                name: "error",
                type: "boolean",
                default: "false",
                description: "Apply error styling (red border) to the trigger."
              },
              {
                name: "disabled",
                type: "boolean",
                default: "false",
                description: "Disable interaction with the select trigger."
              },
              {
                name: "value",
                type: "string",
                description: "The value to be returned when this item is selected."
              }
            ]}
          />
        </DocSection>

        <DocSection title="Best Practices">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-[14px]">
            <div className="space-y-4 p-4 rounded-lg bg-success/5 border border-success/10">
              <div className="flex gap-3">
                <span className="text-success font-bold">✅ Do:</span>
                <p className="text-muted-foreground leading-snug">Use a select when there are 5 or more options to choose from.</p>
              </div>
              <div className="flex gap-3">
                <span className="text-success font-bold">✅ Do:</span>
                <p className="text-muted-foreground leading-snug">Use grouped options and separators to organize long lists of options logically.</p>
              </div>
            </div>
            <div className="space-y-4 p-4 rounded-lg bg-destructive/5 border border-destructive/10">
              <div className="flex gap-3">
                <span className="text-destructive font-bold">❌ Don't:</span>
                <p className="text-muted-foreground leading-snug">Use a select for only 2 or 3 options—consider radio buttons or a segment control instead.</p>
              </div>
              <div className="flex gap-3">
                <span className="text-destructive font-bold">❌ Don't:</span>
                <p className="text-muted-foreground leading-snug">Use long labels that might be truncated in the trigger button.</p>
              </div>
            </div>
          </div>
        </DocSection>
      </DocSection>

      <Timestamp date="17-01-2026 08:34PM" />
    </DocPage>
  )
}
