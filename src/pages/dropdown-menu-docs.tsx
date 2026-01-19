import {
  DropdownMenu,
  DropdownMenuTrigger,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuCheckboxItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
} from "@/components/ui/dropdown-menu"
import { Button } from "@/components/ui/button"
import { DocPage, DocSection, ComponentExample, Timestamp, PropsTable, StateTable } from "@/components/docs"
import { User, Gear, CreditCard, Trash, Copy, FileText } from "@phosphor-icons/react"
import * as React from "react"

export default function DropdownMenuDocs() {
  const [showStatus, setShowStatus] = React.useState(true)
  const [showActivity, setShowActivity] = React.useState(false)

  return (
    <DocPage
      title="Dropdown Menu"
      description="Displays a menu of actions or options triggered by a button."
      category="Components"
    >
      <DocSection title="Examples" description="Common use cases and variations of the dropdown menu component." level={2}>
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

        <DocSection title="Checkbox Items" description="Toggleable menu items with checkboxes.">
          <ComponentExample
            code={`const [showStatus, setShowStatus] = useState(true)
const [showActivity, setShowActivity] = useState(false)

<DropdownMenu>
  <DropdownMenuTrigger asChild>
    <Button variant="secondary">View Options</Button>
  </DropdownMenuTrigger>
  <DropdownMenuContent>
    <DropdownMenuCheckboxItem checked={showStatus} onCheckedChange={setShowStatus}>
      Show Status Bar
    </DropdownMenuCheckboxItem>
    <DropdownMenuCheckboxItem checked={showActivity} onCheckedChange={setShowActivity}>
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
      </DocSection>

      <DocSection title="Reference" description="Technical details and configuration for the dropdown menu component." level={2}>
        <DocSection title="State Reference">
          <StateTable
            states={[
              { state: "Item Hover", style: "Soft background", token: "bg-accent text-accent-foreground" },
              { state: "Checkbox Checked", style: "Icon indicator", token: "bg-primary text-primary-foreground" },
              { state: "Destructive Hover", style: "Red background", token: "bg-destructive text-destructive-foreground" },
            ]}
          />
        </DocSection>

        <DocSection title="Props" description="Dropdown Menu component props configuration.">
          <PropsTable
            props={[
              {
                name: "destructive",
                type: "boolean",
                default: "false",
                description: "Apply destructive styling (red text) to the menu item."
              },
              {
                name: "side",
                type: '"top" | "right" | "bottom" | "left"',
                default: '"bottom"',
                description: "The preferred side of the trigger element to render against."
              },
              {
                name: "checked",
                type: "boolean",
                description: "The controlled checked state of the checkbox item."
              },
              {
                name: "onCheckedChange",
                type: "(checked: boolean) => void",
                description: "Event handler called when the checked state changes."
              }
            ]}
          />
        </DocSection>

        <DocSection title="Best Practices">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-[14px]">
            <div className="space-y-4 p-4 rounded-lg bg-success/5 border border-success/10">
              <div className="flex gap-3">
                <span className="text-success font-bold">✅ Do:</span>
                <p className="text-muted-foreground leading-snug">Group related items with labels and separators for better scannability.</p>
              </div>
              <div className="flex gap-3">
                <span className="text-success font-bold">✅ Do:</span>
                <p className="text-muted-foreground leading-snug">Use icons consistently—if one item has an icon, all similar items should.</p>
              </div>
            </div>
            <div className="space-y-4 p-4 rounded-lg bg-destructive/5 border border-destructive/10">
              <div className="flex gap-3">
                <span className="text-destructive font-bold">❌ Don't:</span>
                <p className="text-muted-foreground leading-snug">Mix items with and without icons randomly—it creates visual inconsistency.</p>
              </div>
              <div className="flex gap-3">
                <span className="text-destructive font-bold">❌ Don't:</span>
                <p className="text-muted-foreground leading-snug">Include too many items in a single list—use submenus for complex menus.</p>
              </div>
            </div>
          </div>
        </DocSection>
      </DocSection>

      <Timestamp date="17-01-2026 08:34PM" />
    </DocPage>
  )
}
