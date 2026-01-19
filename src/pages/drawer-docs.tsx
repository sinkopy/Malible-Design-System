import * as React from "react";
import { DocPage, DocSection, ComponentExample, PropsTable } from "@/components/docs";
import {
    Drawer,
    DrawerTrigger,
    DrawerContent,
    DrawerHeader,
    DrawerTitle,
    DrawerDescription,
    DrawerFooter,
    DrawerClose,
} from "@/components/ui/drawer";
import { Button } from "@/components/ui/button";

export default function DrawerDocs() {
    return (
        <DocPage
            category="Components"
            title="Drawer"
            description="A mobile-optimized bottom sheet that slides up from the bottom of the screen."
        >
            <DocSection title="Usage">
                <ComponentExample
                    code={`<Drawer>
  <DrawerTrigger asChild>
    <Button variant="outline">Open Drawer</Button>
  </DrawerTrigger>
  <DrawerContent>
    <DrawerHeader>
      <DrawerTitle>Are you absolutely sure?</DrawerTitle>
      <DrawerDescription>This action cannot be undone.</DrawerDescription>
    </DrawerHeader>
    <div className="p-4">
       <p className="text-sm">Main content area for the drawer.</p>
    </div>
    <DrawerFooter>
      <Button>Submit</Button>
      <DrawerClose asChild>
        <Button variant="ghost">Cancel</Button>
      </DrawerClose>
    </DrawerFooter>
  </DrawerContent>
</Drawer>`}
                >
                    <Drawer>
                        <DrawerTrigger asChild>
                            <Button variant="secondary">Open Drawer</Button>
                        </DrawerTrigger>
                        <DrawerContent>
                            <DrawerHeader>
                                <DrawerTitle>Are you absolutely sure?</DrawerTitle>
                                <DrawerDescription>This action cannot be undone.</DrawerDescription>
                            </DrawerHeader>
                            <div className="p-6">
                                <div className="h-24 flex items-center justify-center border border-dashed rounded-lg border-muted-foreground/20 text-muted-foreground text-sm">
                                    Drawer Content Area
                                </div>
                            </div>
                            <DrawerFooter>
                                <Button className="w-full">Confirm Action</Button>
                                <DrawerClose asChild>
                                    <Button variant="ghost" className="w-full">Cancel</Button>
                                </DrawerClose>
                            </DrawerFooter>
                        </DrawerContent>
                    </Drawer>
                </ComponentExample>
            </DocSection>

            <DocSection title="Anatomy">
                <PropsTable
                    props={[
                        {
                            name: "Drawer",
                            type: "DialogPrimitive.Root",
                            description: "The container component that manages state.",
                        },
                        {
                            name: "DrawerTrigger",
                            type: "DialogPrimitive.Trigger",
                            description: "The element that opens the drawer.",
                        },
                        {
                            name: "DrawerContent",
                            type: "DialogPrimitive.Content",
                            description: "The content container that slides up.",
                        },
                        {
                            name: "DrawerHeader",
                            type: "Component",
                            description: "Standardized header for titles and descriptions.",
                        },
                        {
                            name: "DrawerTitle",
                            type: "DialogPrimitive.Title",
                            description: "Title for accessibility and visual context.",
                        },
                        {
                            name: "DrawerDescription",
                            type: "DialogPrimitive.Description",
                            description: "Sub-text describing the drawer's purpose.",
                        },
                        {
                            name: "DrawerFooter",
                            type: "Component",
                            description: "Action area at the bottom of the drawer.",
                        },
                    ]}
                />
            </DocSection>
        </DocPage>
    );
}
