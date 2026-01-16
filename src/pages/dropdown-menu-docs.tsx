import {
  DropdownMenu,
  DropdownMenuTrigger,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuCheckboxItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuShortcut,
  DropdownMenuRadioGroup,
  DropdownMenuRadioItem,
  DropdownMenuSub,
  DropdownMenuSubContent,
  DropdownMenuSubTrigger,
} from "@/components/ui/dropdown-menu"
import { Button } from "@/components/ui/button"
import { DocPage, DocSection, ComponentExample, Timestamp } from "@/components/docs"
import { User, Gear, CreditCard, Trash, Copy, FileText } from "@phosphor-icons/react"
import * as React from "react"

export default function DropdownMenuDocs() {
  const [showStatus, setShowStatus] = React.useState(true)
  const [showActivity, setShowActivity] = React.useState(false)
  const [position, setPosition] = React.useState("bottom")

  return (
    <DocPage
      title="Dropdown Menu"
      description="Displays a menu of actions or options triggered by a button."
      category="Components"
    >
      <DocSection title="Default" description="Basic dropdown menu with items and separators.">
        <ComponentExample
          code={`<DropdownMenu>
  <DropdownMenuTrigger asChild>
    <Button variant="secondary">Open Menu</Button>
  </DropdownMenuTrigger>
  <DropdownMenuContent>
    <DropdownMenuLabel>My Account</DropdownMenuLabel>
    <DropdownMenuSeparator />
    <DropdownMenuItem>Profile</DropdownMenuItem>
    <DropdownMenuItem>Settings</DropdownMenuItem>
    <DropdownMenuItem>Billing</DropdownMenuItem>
    <DropdownMenuSeparator />
    <DropdownMenuItem>Log out</DropdownMenuItem>
  </DropdownMenuContent>
</DropdownMenu>`}
        >
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="secondary">Open Menu</Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent>
              <DropdownMenuLabel>My Account</DropdownMenuLabel>
              <DropdownMenuSeparator />
              <DropdownMenuItem>Profile</DropdownMenuItem>
              <DropdownMenuItem>Settings</DropdownMenuItem>
              <DropdownMenuItem>Billing</DropdownMenuItem>
              <DropdownMenuSeparator />
              <DropdownMenuItem>Log out</DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </ComponentExample>
      </DocSection>

      <DocSection title="With Icons" description="Menu items with leading icons.">
        <ComponentExample
          code={`<DropdownMenu>
  <DropdownMenuTrigger asChild>
    <Button variant="secondary">Open Menu</Button>
  </DropdownMenuTrigger>
  <DropdownMenuContent>
    <DropdownMenuItem>
      <User size={16} />
      Profile
    </DropdownMenuItem>
    <DropdownMenuItem>
      <Gear size={16} />
      Settings
    </DropdownMenuItem>
    <DropdownMenuItem>
      <CreditCard size={16} />
      Billing
    </DropdownMenuItem>
  </DropdownMenuContent>
</DropdownMenu>`}
        >
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="secondary">Open Menu</Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent>
              <DropdownMenuItem>
                <User size={16} />
                Profile
              </DropdownMenuItem>
              <DropdownMenuItem>
                <Gear size={16} />
                Settings
              </DropdownMenuItem>
              <DropdownMenuItem>
                <CreditCard size={16} />
                Billing
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </ComponentExample>
      </DocSection>

      <DocSection title="With Shortcuts" description="Menu items with keyboard shortcuts.">
        <ComponentExample
          code={`<DropdownMenu>
  <DropdownMenuTrigger asChild>
    <Button variant="secondary">Open Menu</Button>
  </DropdownMenuTrigger>
  <DropdownMenuContent>
    <DropdownMenuItem>
      New Tab
      <DropdownMenuShortcut>⌘T</DropdownMenuShortcut>
    </DropdownMenuItem>
    <DropdownMenuItem>
      New Window
      <DropdownMenuShortcut>⌘N</DropdownMenuShortcut>
    </DropdownMenuItem>
    <DropdownMenuItem>
      New Incognito Window
      <DropdownMenuShortcut>⇧⌘N</DropdownMenuShortcut>
    </DropdownMenuItem>
  </DropdownMenuContent>
</DropdownMenu>`}
        >
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="secondary">Open Menu</Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent>
              <DropdownMenuItem>
                New Tab
                <DropdownMenuShortcut>⌘T</DropdownMenuShortcut>
              </DropdownMenuItem>
              <DropdownMenuItem>
                New Window
                <DropdownMenuShortcut>⌘N</DropdownMenuShortcut>
              </DropdownMenuItem>
              <DropdownMenuItem>
                New Incognito Window
                <DropdownMenuShortcut>⇧⌘N</DropdownMenuShortcut>
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </ComponentExample>
      </DocSection>

      <DocSection title="Checkbox Items" description="Toggleable menu items with checkboxes.">
        <ComponentExample
          code={`const [showStatus, setShowStatus] = useState(true)
const [showActivity, setShowActivity] = useState(false)

<DropdownMenu>
  <DropdownMenuTrigger asChild>
    <Button variant="secondary">View Options</Button>
  </DropdownMenuTrigger>
  <DropdownMenuContent>
    <DropdownMenuCheckboxItem
      checked={showStatus}
      onCheckedChange={setShowStatus}
    >
      Show Status Bar
    </DropdownMenuCheckboxItem>
    <DropdownMenuCheckboxItem
      checked={showActivity}
      onCheckedChange={setShowActivity}
    >
      Show Activity Bar
    </DropdownMenuCheckboxItem>
  </DropdownMenuContent>
</DropdownMenu>`}
        >
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="secondary">View Options</Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent>
              <DropdownMenuCheckboxItem
                checked={showStatus}
                onCheckedChange={setShowStatus}
              >
                Show Status Bar
              </DropdownMenuCheckboxItem>
              <DropdownMenuCheckboxItem
                checked={showActivity}
                onCheckedChange={setShowActivity}
              >
                Show Activity Bar
              </DropdownMenuCheckboxItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </ComponentExample>
      </DocSection>

      <DocSection title="Radio Items" description="Single selection menu items with radio buttons.">
        <ComponentExample
          code={`const [position, setPosition] = useState("bottom")

<DropdownMenu>
  <DropdownMenuTrigger asChild>
    <Button variant="secondary">Position</Button>
  </DropdownMenuTrigger>
  <DropdownMenuContent>
    <DropdownMenuRadioGroup value={position} onValueChange={setPosition}>
      <DropdownMenuRadioItem value="top">Top</DropdownMenuRadioItem>
      <DropdownMenuRadioItem value="bottom">Bottom</DropdownMenuRadioItem>
      <DropdownMenuRadioItem value="right">Right</DropdownMenuRadioItem>
    </DropdownMenuRadioGroup>
  </DropdownMenuContent>
</DropdownMenu>`}
        >
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="secondary">Position</Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent>
              <DropdownMenuRadioGroup value={position} onValueChange={setPosition}>
                <DropdownMenuRadioItem value="top">Top</DropdownMenuRadioItem>
                <DropdownMenuRadioItem value="bottom">Bottom</DropdownMenuRadioItem>
                <DropdownMenuRadioItem value="right">Right</DropdownMenuRadioItem>
              </DropdownMenuRadioGroup>
            </DropdownMenuContent>
          </DropdownMenu>
        </ComponentExample>
      </DocSection>

      <DocSection title="Submenu" description="Nested menu with submenu support.">
        <ComponentExample
          code={`<DropdownMenu>
  <DropdownMenuTrigger asChild>
    <Button variant="secondary">More Options</Button>
  </DropdownMenuTrigger>
  <DropdownMenuContent>
    <DropdownMenuItem>
      <Copy size={16} />
      Copy
    </DropdownMenuItem>
    <DropdownMenuItem>
      <FileText size={16} />
      Duplicate
    </DropdownMenuItem>
    <DropdownMenuSeparator />
    <DropdownMenuSub>
      <DropdownMenuSubTrigger>
        <Settings size={16} />
        More Options
      </DropdownMenuSubTrigger>
      <DropdownMenuSubContent>
        <DropdownMenuItem>Move to Folder</DropdownMenuItem>
        <DropdownMenuItem>Duplicate</DropdownMenuItem>
        <DropdownMenuSeparator />
        <DropdownMenuItem>Archive</DropdownMenuItem>
      </DropdownMenuSubContent>
    </DropdownMenuSub>
  </DropdownMenuContent>
</DropdownMenu>`}
        >
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="secondary">More Options</Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent>
              <DropdownMenuItem>
                <Copy size={16} />
                Copy
              </DropdownMenuItem>
              <DropdownMenuItem>
                <FileText size={16} />
                Duplicate
              </DropdownMenuItem>
              <DropdownMenuSeparator />
              <DropdownMenuSub>
                <DropdownMenuSubTrigger>
                  <Gear size={16} />
                  More Options
                </DropdownMenuSubTrigger>
                <DropdownMenuSubContent>
                  <DropdownMenuItem>Move to Folder</DropdownMenuItem>
                  <DropdownMenuItem>Duplicate</DropdownMenuItem>
                  <DropdownMenuSeparator />
                  <DropdownMenuItem>Archive</DropdownMenuItem>
                </DropdownMenuSubContent>
              </DropdownMenuSub>
            </DropdownMenuContent>
          </DropdownMenu>
        </ComponentExample>
      </DocSection>

      <DocSection title="Destructive Items" description="Menu items for dangerous actions.">
        <ComponentExample
          code={`<DropdownMenu>
  <DropdownMenuTrigger asChild>
    <Button variant="secondary">Actions</Button>
  </DropdownMenuTrigger>
  <DropdownMenuContent>
    <DropdownMenuItem>
      <Copy size={16} />
      Copy
    </DropdownMenuItem>
    <DropdownMenuItem>
      <FileText size={16} />
      Duplicate
    </DropdownMenuItem>
    <DropdownMenuSeparator />
    <DropdownMenuItem destructive>
      <Trash size={16} />
      Delete
    </DropdownMenuItem>
  </DropdownMenuContent>
</DropdownMenu>`}
        >
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="secondary">Actions</Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent>
              <DropdownMenuItem>
                <Copy size={16} />
                Copy
              </DropdownMenuItem>
              <DropdownMenuItem>
                <FileText size={16} />
                Duplicate
              </DropdownMenuItem>
              <DropdownMenuSeparator />
              <DropdownMenuItem destructive>
                <Trash size={16} />
                Delete
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </ComponentExample>
      </DocSection>

      <DocSection title="Usage" description="Common patterns for dropdown menu usage.">
        <ComponentExample
          code={`import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"

// Basic usage
<DropdownMenu>
  <DropdownMenuTrigger asChild>
    <Button variant="secondary">Open Menu</Button>
  </DropdownMenuTrigger>
  <DropdownMenuContent>
    <DropdownMenuLabel>My Account</DropdownMenuLabel>
    <DropdownMenuSeparator />
    <DropdownMenuItem>Profile</DropdownMenuItem>
    <DropdownMenuItem>Settings</DropdownMenuItem>
  </DropdownMenuContent>
</DropdownMenu>

// With icons
<DropdownMenuItem>
  <User size={16} />
  Profile
</DropdownMenuItem>

// With shortcuts
<DropdownMenuItem>
  New Tab
  <DropdownMenuShortcut>⌘T</DropdownMenuShortcut>
</DropdownMenuItem>

// Destructive item
<DropdownMenuItem destructive>
  <Trash size={16} />
  Delete
</DropdownMenuItem>

// Checkbox item
const [checked, setChecked] = useState(true)
<DropdownMenuCheckboxItem
  checked={checked}
  onCheckedChange={setChecked}
>
  Show Status Bar
</DropdownMenuCheckboxItem>

// Radio group
const [value, setValue] = useState("option1")
<DropdownMenuRadioGroup value={value} onValueChange={setValue}>
  <DropdownMenuRadioItem value="option1">Option 1</DropdownMenuRadioItem>
  <DropdownMenuRadioItem value="option2">Option 2</DropdownMenuRadioItem>
</DropdownMenuRadioGroup>`}
        >
          <div className="w-full max-w-sm">
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant="secondary">Open Menu</Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent>
                <DropdownMenuLabel>My Account</DropdownMenuLabel>
                <DropdownMenuSeparator />
                <DropdownMenuItem>
                  <User size={16} />
                  Profile
                </DropdownMenuItem>
                <DropdownMenuItem>Settings</DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          </div>
        </ComponentExample>
      </DocSection>

      <DocSection title="Props" description="Dropdown Menu component props.">
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
                <td className="py-2 px-4 text-sm text-foreground font-medium" rowSpan={3}>DropdownMenuItem</td>
                <td className="py-2 px-4 text-sm text-foreground font-medium">inset</td>
                <td className="py-2 px-4 text-sm text-muted-foreground">boolean</td>
                <td className="py-2 px-4 text-sm text-muted-foreground">false</td>
                <td className="py-2 px-4 text-sm text-muted-foreground">Add left padding for items without icons</td>
              </tr>
              <tr className="border-b border-border">
                <td className="py-2 px-4 text-sm text-foreground font-medium">destructive</td>
                <td className="py-2 px-4 text-sm text-muted-foreground">boolean</td>
                <td className="py-2 px-4 text-sm text-muted-foreground">false</td>
                <td className="py-2 px-4 text-sm text-muted-foreground">Apply destructive styling (red text)</td>
              </tr>
              <tr className="border-b border-border">
                <td className="py-2 px-4 text-sm text-foreground font-medium">disabled</td>
                <td className="py-2 px-4 text-sm text-muted-foreground">boolean</td>
                <td className="py-2 px-4 text-sm text-muted-foreground">false</td>
                <td className="py-2 px-4 text-sm text-muted-foreground">Disable interaction</td>
              </tr>
              <tr className="border-b border-border">
                <td className="py-2 px-4 text-sm text-foreground font-medium" rowSpan={3}>DropdownMenuContent</td>
                <td className="py-2 px-4 text-sm text-foreground font-medium">side</td>
                <td className="py-2 px-4 text-sm text-muted-foreground">{"\"top\" | \"right\" | \"bottom\" | \"left\""}</td>
                <td className="py-2 px-4 text-sm text-muted-foreground">"bottom"</td>
                <td className="py-2 px-4 text-sm text-muted-foreground">Side of trigger to show menu</td>
              </tr>
              <tr className="border-b border-border">
                <td className="py-2 px-4 text-sm text-foreground font-medium">align</td>
                <td className="py-2 px-4 text-sm text-muted-foreground">{"\"start\" | \"center\" | \"end\""}</td>
                <td className="py-2 px-4 text-sm text-muted-foreground">"start"</td>
                <td className="py-2 px-4 text-sm text-muted-foreground">Alignment relative to trigger</td>
              </tr>
              <tr>
                <td className="py-2 px-4 text-sm text-foreground font-medium">sideOffset</td>
                <td className="py-2 px-4 text-sm text-muted-foreground">number</td>
                <td className="py-2 px-4 text-sm text-muted-foreground">4</td>
                <td className="py-2 px-4 text-sm text-muted-foreground">Distance from trigger in pixels</td>
              </tr>
              <tr className="border-b border-border">
                <td className="py-2 px-4 text-sm text-foreground font-medium" rowSpan={2}>DropdownMenuCheckboxItem</td>
                <td className="py-2 px-4 text-sm text-foreground font-medium">checked</td>
                <td className="py-2 px-4 text-sm text-muted-foreground">boolean</td>
                <td className="py-2 px-4 text-sm text-muted-foreground">-</td>
                <td className="py-2 px-4 text-sm text-muted-foreground">Checked state</td>
              </tr>
              <tr>
                <td className="py-2 px-4 text-sm text-foreground font-medium">onCheckedChange</td>
                <td className="py-2 px-4 text-sm text-muted-foreground">{"(checked: boolean) => void"}</td>
                <td className="py-2 px-4 text-sm text-muted-foreground">-</td>
                <td className="py-2 px-4 text-sm text-muted-foreground">Callback when checked state changes</td>
              </tr>
              <tr className="border-b border-border">
                <td className="py-2 px-4 text-sm text-foreground font-medium" rowSpan={2}>DropdownMenuRadioGroup</td>
                <td className="py-2 px-4 text-sm text-foreground font-medium">value</td>
                <td className="py-2 px-4 text-sm text-muted-foreground">string</td>
                <td className="py-2 px-4 text-sm text-muted-foreground">-</td>
                <td className="py-2 px-4 text-sm text-muted-foreground">Selected value</td>
              </tr>
              <tr>
                <td className="py-2 px-4 text-sm text-foreground font-medium">onValueChange</td>
                <td className="py-2 px-4 text-sm text-muted-foreground">{"(value: string) => void"}</td>
                <td className="py-2 px-4 text-sm text-muted-foreground">-</td>
                <td className="py-2 px-4 text-sm text-muted-foreground">Callback when value changes</td>
              </tr>
            </tbody>
          </table>
        </div>
      </DocSection>

      <Timestamp date="17-01-2026" />
    </DocPage>
  )
}
