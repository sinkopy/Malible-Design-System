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

  return (
    <DocPage
      title="Dialog"
      description="A window overlaid on either the primary window or another dialog window, rendering the content underneath inert."
      category="Components"
    >
      <DocSection title="Examples" description="Common use cases and variations of the dialog component." level={2}>
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
      </DocSection>

      <DocSection title="Reference" description="Technical details and configuration for the dialog component." level={2}>
        <DocSection title="Props" description="Dialog component props configuration.">
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
                  <td className="p-4 font-medium text-[13px]">DialogContent</td>
                  <td className="p-4"><code className="text-xs font-mono bg-muted/50 px-1.5 py-0.5 rounded text-info/80">className</code></td>
                  <td className="p-4 text-muted-foreground text-[13px]">string</td>
                  <td className="p-4 text-muted-foreground text-[13px]">Custom styling (e.g., max-w-[400px])</td>
                </tr>
                <tr>
                  <td className="p-4 font-medium text-[13px]">DialogHeader</td>
                  <td className="p-4"><code className="text-xs font-mono bg-muted/50 px-1.5 py-0.5 rounded text-info/80">className</code></td>
                  <td className="p-4 text-muted-foreground text-[13px]">string</td>
                  <td className="p-4 text-muted-foreground text-[13px]">Header styling (border-b by default)</td>
                </tr>
                <tr>
                  <td className="p-4 font-medium text-[13px]">DialogFooter</td>
                  <td className="p-4"><code className="text-xs font-mono bg-muted/50 px-1.5 py-0.5 rounded text-info/80">className</code></td>
                  <td className="p-4 text-muted-foreground text-[13px]">string</td>
                  <td className="p-4 text-muted-foreground text-[13px]">Footer styling (border-t by default)</td>
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
                <p className="text-muted-foreground leading-snug">Use dialogs sparingly for important tasks that require focused attention.</p>
              </div>
              <div className="flex gap-3">
                <span className="text-success font-bold">✅ Do:</span>
                <p className="text-muted-foreground leading-snug">Always provide a clear way to dismiss via a Close button or Cancel action.</p>
              </div>
            </div>
            <div className="space-y-4 p-4 rounded-lg bg-destructive/5 border border-destructive/10">
              <div className="flex gap-3">
                <span className="text-destructive font-bold">❌ Don't:</span>
                <p className="text-muted-foreground leading-snug">Use dialogs for nested flows—they disrupt user focus and context.</p>
              </div>
              <div className="flex gap-3">
                <span className="text-destructive font-bold">❌ Don't:</span>
                <p className="text-muted-foreground leading-snug">Trap users in dialogs without an obvious and consistent exit path.</p>
              </div>
            </div>
          </div>
        </DocSection>
      </DocSection>

      <Timestamp date="17-01-2026" />
    </DocPage>
  )
}
