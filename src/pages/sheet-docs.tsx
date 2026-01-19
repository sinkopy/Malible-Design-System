import {
    Sheet,
    SheetContent,
    SheetDescription,
    SheetHeader,
    SheetTitle,
    SheetTrigger,
    SheetFooter,
    SheetClose,
} from "@/components/ui/sheet"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { DocPage, DocSection, ComponentExample, PropsTable, Timestamp } from "@/components/docs"

export default function SheetDocs() {
    return (
        <DocPage
            title="Sheet"
            description="Extends the Dialog component to display content that complements the main screen."
            category="Overlay"
        >
            <DocSection title="Usage" description="A side panel that slides in from the edge of the screen.">
                <ComponentExample
                    code={`import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet"

export function SheetDemo() {
  return (
    <Sheet>
      <SheetTrigger asChild>
        <Button variant="outline">Open Sheet</Button>
      </SheetTrigger>
      <SheetContent>
        <SheetHeader>
          <SheetTitle>Edit profile</SheetTitle>
          <SheetDescription>
            Make changes to your profile here. Click save when you're done.
          </SheetDescription>
        </SheetHeader>
        <div className="grid gap-4 py-4">
          <div className="grid grid-cols-4 items-center gap-4">
            <Label htmlFor="name" className="text-right">Name</Label>
            <Input id="name" value="Pedro Duarte" className="col-span-3" />
          </div>
        </div>
      </SheetContent>
    </Sheet>
  )
}`}
                >
                    <Sheet>
                        <SheetTrigger asChild>
                            <Button variant="secondary">Open Sheet</Button>
                        </SheetTrigger>
                        <SheetContent>
                            <SheetHeader>
                                <SheetTitle>Edit profile</SheetTitle>
                                <SheetDescription>
                                    Make changes to your profile here. Click save when you're done.
                                </SheetDescription>
                            </SheetHeader>
                            <div className="grid gap-4 py-4 font-sans">
                                <div className="grid grid-cols-4 items-center gap-4">
                                    <Label htmlFor="name" className="text-right text-[13px] text-muted-foreground mr-1">Name</Label>
                                    <Input id="name" defaultValue="Pedro Duarte" className="col-span-3" />
                                </div>
                                <div className="grid grid-cols-4 items-center gap-4">
                                    <Label htmlFor="username" className="text-right text-[13px] text-muted-foreground mr-1">Username</Label>
                                    <Input id="username" defaultValue="@peduarte" className="col-span-3" />
                                </div>
                            </div>
                            <SheetFooter>
                                <SheetClose asChild>
                                    <Button type="submit">Save changes</Button>
                                </SheetClose>
                            </SheetFooter>
                        </SheetContent>
                    </Sheet>
                </ComponentExample>
            </DocSection>

            <DocSection title="Sides" description="Use the side prop to position the sheet on any side of the screen.">
                <ComponentExample
                    code={`<SheetContent side="left">...</SheetContent>`}
                >
                    <div className="grid grid-cols-2 gap-2">
                        <Sheet>
                            <SheetTrigger asChild>
                                <Button variant="secondary" size="sm">Left</Button>
                            </SheetTrigger>
                            <SheetContent side="left">
                                <SheetHeader>
                                    <SheetTitle>Left Sheet</SheetTitle>
                                    <SheetDescription>This slides in from the left.</SheetDescription>
                                </SheetHeader>
                            </SheetContent>
                        </Sheet>
                        <Sheet>
                            <SheetTrigger asChild>
                                <Button variant="secondary" size="sm">Right</Button>
                            </SheetTrigger>
                            <SheetContent side="right">
                                <SheetHeader>
                                    <SheetTitle>Right Sheet</SheetTitle>
                                    <SheetDescription>This slides in from the right.</SheetDescription>
                                </SheetHeader>
                            </SheetContent>
                        </Sheet>
                        <Sheet>
                            <SheetTrigger asChild>
                                <Button variant="secondary" size="sm">Top</Button>
                            </SheetTrigger>
                            <SheetContent side="top">
                                <SheetHeader>
                                    <SheetTitle>Top Sheet</SheetTitle>
                                    <SheetDescription>This slides in from the top.</SheetDescription>
                                </SheetHeader>
                            </SheetContent>
                        </Sheet>
                        <Sheet>
                            <SheetTrigger asChild>
                                <Button variant="secondary" size="sm">Bottom</Button>
                            </SheetTrigger>
                            <SheetContent side="bottom">
                                <SheetHeader>
                                    <SheetTitle>Bottom Sheet</SheetTitle>
                                    <SheetDescription>This slides in from the bottom.</SheetDescription>
                                </SheetHeader>
                            </SheetContent>
                        </Sheet>
                    </div>
                </ComponentExample>
            </DocSection>

            <DocSection title="Props">
                <PropsTable
                    props={[
                        {
                            name: "side",
                            type: '"top" | "bottom" | "left" | "right"',
                            default: '"right"',
                            description: "The side of the screen the sheet will appear from.",
                        },
                    ]}
                />
            </DocSection>

            <Timestamp date="17th Jan 2026, 08:34PM" />
        </DocPage>
    )
}
