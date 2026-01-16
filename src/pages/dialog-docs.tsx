import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
  DialogCloseButton,
} from "@/components/ui/dialog"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { DocPage, DocSection, ComponentExample, Timestamp } from "@/components/docs"
import * as React from "react"

export default function DialogDocs() {
  const [defaultOpen, setDefaultOpen] = React.useState(false)
  const [formOpen, setFormOpen] = React.useState(false)
  const [confirmOpen, setConfirmOpen] = React.useState(false)
  const [simpleOpen, setSimpleOpen] = React.useState(false)

  return (
    <DocPage
      title="Dialog"
      description="A window overlaid on either the primary window or another dialog window, rendering the content underneath inert."
      category="Components"
    >
      <DocSection title="Default" description="Basic dialog with trigger, title, description, and close button.">
        <ComponentExample
          code={`<Dialog>
  <DialogTrigger asChild>
    <Button variant="secondary">Open Dialog</Button>
  </DialogTrigger>
  <DialogContent>
    <DialogHeader>
      <DialogTitle>Dialog Title</DialogTitle>
      <DialogCloseButton />
    </DialogHeader>
    <div className="p-4">
      <DialogDescription>
        This is the dialog description. Add your content here.
      </DialogDescription>
    </div>
    <DialogFooter>
      <Button variant="secondary">Cancel</Button>
      <Button>Save</Button>
    </DialogFooter>
  </DialogContent>
</Dialog>`}
        >
          <Dialog open={defaultOpen} onOpenChange={setDefaultOpen}>
            <DialogTrigger asChild>
              <Button variant="secondary">Open Dialog</Button>
            </DialogTrigger>
            <DialogContent>
              <DialogHeader>
                <DialogTitle>Dialog Title</DialogTitle>
                <DialogCloseButton />
              </DialogHeader>
              <div className="p-4">
                <DialogDescription>
                  This is the dialog description. Add your content here.
                </DialogDescription>
              </div>
              <DialogFooter>
                <Button variant="secondary">Cancel</Button>
                <Button>Save</Button>
              </DialogFooter>
            </DialogContent>
          </Dialog>
        </ComponentExample>
      </DocSection>

      <DocSection title="With Form" description="Dialog containing form inputs.">
        <ComponentExample
          code={`<Dialog>
  <DialogTrigger asChild>
    <Button variant="secondary">Edit Profile</Button>
  </DialogTrigger>
  <DialogContent>
    <DialogHeader>
      <DialogTitle>Edit Profile</DialogTitle>
      <DialogCloseButton />
    </DialogHeader>
    <div className="p-4 space-y-4">
      <div className="space-y-2">
        <Label htmlFor="name">Name</Label>
        <Input id="name" placeholder="Enter your name" />
      </div>
      <div className="space-y-2">
        <Label htmlFor="email">Email</Label>
        <Input id="email" type="email" placeholder="Enter your email" />
      </div>
    </div>
    <DialogFooter>
      <Button variant="secondary">Cancel</Button>
      <Button>Save Changes</Button>
    </DialogFooter>
  </DialogContent>
</Dialog>`}
        >
          <Dialog open={formOpen} onOpenChange={setFormOpen}>
            <DialogTrigger asChild>
              <Button variant="secondary">Edit Profile</Button>
            </DialogTrigger>
            <DialogContent>
              <DialogHeader>
                <DialogTitle>Edit Profile</DialogTitle>
                <DialogCloseButton />
              </DialogHeader>
              <div className="p-4 space-y-4">
                <div className="space-y-2">
                  <Label htmlFor="dialog-name">Name</Label>
                  <Input id="dialog-name" placeholder="Enter your name" />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="dialog-email">Email</Label>
                  <Input id="dialog-email" type="email" placeholder="Enter your email" />
                </div>
              </div>
              <DialogFooter>
                <Button variant="secondary">Cancel</Button>
                <Button>Save Changes</Button>
              </DialogFooter>
            </DialogContent>
          </Dialog>
        </ComponentExample>
      </DocSection>

      <DocSection title="Confirmation" description="Simple confirm/cancel pattern for destructive actions.">
        <ComponentExample
          code={`<Dialog>
  <DialogTrigger asChild>
    <Button variant="destructive">Delete Account</Button>
  </DialogTrigger>
  <DialogContent className="max-w-[400px]">
    <DialogHeader>
      <DialogTitle>Are you sure?</DialogTitle>
      <DialogCloseButton />
    </DialogHeader>
    <div className="p-4">
      <DialogDescription>
        This action cannot be undone. This will permanently delete your account.
      </DialogDescription>
    </div>
    <DialogFooter>
      <Button variant="secondary">Cancel</Button>
      <Button variant="destructive">Delete</Button>
    </DialogFooter>
  </DialogContent>
</Dialog>`}
        >
          <Dialog open={confirmOpen} onOpenChange={setConfirmOpen}>
            <DialogTrigger asChild>
              <Button variant="destructive">Delete Account</Button>
            </DialogTrigger>
            <DialogContent className="max-w-[400px]">
              <DialogHeader>
                <DialogTitle>Are you sure?</DialogTitle>
                <DialogCloseButton />
              </DialogHeader>
              <div className="p-4">
                <DialogDescription>
                  This action cannot be undone. This will permanently delete your account.
                </DialogDescription>
              </div>
              <DialogFooter>
                <Button variant="secondary">Cancel</Button>
                <Button variant="destructive">Delete</Button>
              </DialogFooter>
            </DialogContent>
          </Dialog>
        </ComponentExample>
      </DocSection>

      <DocSection title="Without Borders" description="Dialog without header/footer separators.">
        <ComponentExample
          code={`<Dialog>
  <DialogTrigger asChild>
    <Button variant="secondary">Open Simple Dialog</Button>
  </DialogTrigger>
  <DialogContent>
    <DialogHeader className="border-b-0">
      <DialogTitle>Simple Dialog</DialogTitle>
      <DialogCloseButton />
    </DialogHeader>
    <div className="px-4 pb-4">
      <DialogDescription>Content without borders.</DialogDescription>
    </div>
    <DialogFooter className="border-t-0">
      <Button>OK</Button>
    </DialogFooter>
  </DialogContent>
</Dialog>`}
        >
          <Dialog open={simpleOpen} onOpenChange={setSimpleOpen}>
            <DialogTrigger asChild>
              <Button variant="secondary">Open Simple Dialog</Button>
            </DialogTrigger>
            <DialogContent>
              <DialogHeader className="border-b-0">
                <DialogTitle>Simple Dialog</DialogTitle>
                <DialogCloseButton />
              </DialogHeader>
              <div className="px-4 pb-4">
                <DialogDescription>Content without borders.</DialogDescription>
              </div>
              <DialogFooter className="border-t-0">
                <Button>OK</Button>
              </DialogFooter>
            </DialogContent>
          </Dialog>
        </ComponentExample>
      </DocSection>

      <DocSection title="Usage" description="Common patterns for dialog usage.">
        <ComponentExample
          code={`import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
  DialogCloseButton,
} from "@/components/ui/dialog"

// Basic usage
<Dialog>
  <DialogTrigger asChild>
    <Button variant="secondary">Open Dialog</Button>
  </DialogTrigger>
  <DialogContent>
    <DialogHeader>
      <DialogTitle>Dialog Title</DialogTitle>
      <DialogCloseButton />
    </DialogHeader>
    <div className="p-4">
      <DialogDescription>
        Dialog description text.
      </DialogDescription>
    </div>
    <DialogFooter>
      <Button variant="secondary">Cancel</Button>
      <Button>Save</Button>
    </DialogFooter>
  </DialogContent>
</Dialog>

// Controlled state
const [open, setOpen] = useState(false)
<Dialog open={open} onOpenChange={setOpen}>
  <DialogTrigger asChild>
    <Button>Open</Button>
  </DialogTrigger>
  <DialogContent>
    {/* Content */}
  </DialogContent>
</Dialog>

// Without borders
<DialogHeader className="border-b-0">
  <DialogTitle>Title</DialogTitle>
  <DialogCloseButton />
</DialogHeader>
<DialogFooter className="border-t-0">
  <Button>OK</Button>
</DialogFooter>`}
        >
          <div className="w-full max-w-sm">
            <Dialog>
              <DialogTrigger asChild>
                <Button variant="secondary">Open Dialog</Button>
              </DialogTrigger>
              <DialogContent>
                <DialogHeader>
                  <DialogTitle>Dialog Title</DialogTitle>
                  <DialogCloseButton />
                </DialogHeader>
                <div className="p-4">
                  <DialogDescription>
                    Dialog description text.
                  </DialogDescription>
                </div>
                <DialogFooter>
                  <Button variant="secondary">Cancel</Button>
                  <Button>Save</Button>
                </DialogFooter>
              </DialogContent>
            </Dialog>
          </div>
        </ComponentExample>
      </DocSection>

      <DocSection title="Props" description="Dialog component props.">
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
                <td className="py-2 px-4 text-sm text-foreground font-medium" rowSpan={1}>DialogContent</td>
                <td className="py-2 px-4 text-sm text-foreground font-medium">className</td>
                <td className="py-2 px-4 text-sm text-muted-foreground">string</td>
                <td className="py-2 px-4 text-sm text-muted-foreground">-</td>
                <td className="py-2 px-4 text-sm text-muted-foreground">Additional CSS classes (e.g., max-w-[400px])</td>
              </tr>
              <tr className="border-b border-border">
                <td className="py-2 px-4 text-sm text-foreground font-medium" rowSpan={1}>DialogHeader</td>
                <td className="py-2 px-4 text-sm text-foreground font-medium">className</td>
                <td className="py-2 px-4 text-sm text-muted-foreground">string</td>
                <td className="py-2 px-4 text-sm text-muted-foreground">-</td>
                <td className="py-2 px-4 text-sm text-muted-foreground">Additional CSS classes (border-b by default, use border-b-0 to remove)</td>
              </tr>
              <tr className="border-b border-border">
                <td className="py-2 px-4 text-sm text-foreground font-medium" rowSpan={1}>DialogFooter</td>
                <td className="py-2 px-4 text-sm text-foreground font-medium">className</td>
                <td className="py-2 px-4 text-sm text-muted-foreground">string</td>
                <td className="py-2 px-4 text-sm text-muted-foreground">-</td>
                <td className="py-2 px-4 text-sm text-muted-foreground">Additional CSS classes (border-t by default, use border-t-0 to remove)</td>
              </tr>
              <tr className="border-b border-border">
                <td className="py-2 px-4 text-sm text-foreground font-medium" rowSpan={1}>DialogTitle</td>
                <td className="py-2 px-4 text-sm text-foreground font-medium">className</td>
                <td className="py-2 px-4 text-sm text-muted-foreground">string</td>
                <td className="py-2 px-4 text-sm text-muted-foreground">-</td>
                <td className="py-2 px-4 text-sm text-muted-foreground">Additional CSS classes</td>
              </tr>
              <tr>
                <td className="py-2 px-4 text-sm text-foreground font-medium" rowSpan={1}>DialogDescription</td>
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
