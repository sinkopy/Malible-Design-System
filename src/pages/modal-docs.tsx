import * as React from "react";
import { DocPage, DocSection, ComponentExample, PropsTable } from "@/components/docs";
import { Modal } from "@/components/ui/modal";
import { Button } from "@/components/ui/button";
import { DialogClose } from "@/components/ui/dialog";

export default function ModalDocs() {
    return (
        <DocPage
            category="Components"
            title="Modal"
            description="A high-level wrapper for the Dialog component, providing pre-configured size variants and a streamlined API."
        >
            <DocSection title="Usage">
                <ComponentExample
                    code={`<Modal
  title="Edit Profile"
  description="Make changes to your profile here. Click save when you're done."
  trigger={<Button>Open Modal</Button>}
  footer={
    <div className="flex gap-2">
      <DialogClose asChild>
        <Button variant="ghost">Cancel</Button>
      </DialogClose>
      <Button>Save Changes</Button>
    </div>
  }
>
  <div className="space-y-4 pt-4">
    <p className="text-sm">Main body content goes here.</p>
  </div>
</Modal>`}
                >
                    <Modal
                        title="Edit Profile"
                        description="Make changes to your profile here. Click save when you're done."
                        trigger={<Button variant="default">Open Modal</Button>}
                        footer={
                            <div className="flex gap-2">
                                <DialogClose asChild>
                                    <Button variant="ghost">Cancel</Button>
                                </DialogClose>
                                <Button>Save Changes</Button>
                            </div>
                        }
                    >
                        <div className="space-y-4 pt-4">
                            <p className="text-sm text-muted-foreground">This is the main content area inside the modal.</p>
                        </div>
                    </Modal>
                </ComponentExample>
            </DocSection>

            <DocSection title="Sizes">
                <div className="flex flex-wrap gap-4">
                    {(["xs", "sm", "md", "lg", "xl"] as const).map((size) => (
                        <Modal
                            key={size}
                            size={size}
                            title={`${size.toUpperCase()} Modal`}
                            description={`Testing the ${size} size variant.`}
                            trigger={<Button variant="secondary">{size}</Button>}
                        >
                            <div className="py-8 text-center text-muted-foreground">
                                Content for {size} variant
                            </div>
                        </Modal>
                    ))}
                </div>
            </DocSection>

            <DocSection title="Properties">
                <PropsTable
                    props={[
                        {
                            name: "title",
                            type: "string",
                            description: "The title of the modal.",
                        },
                        {
                            name: "description",
                            type: "string",
                            description: "The subtitle or description.",
                        },
                        {
                            name: "size",
                            type: '"xs" | "sm" | "md" | "lg" | "xl" | "full"',
                            default: '"md"',
                            description: "Predefined width variants.",
                        },
                        {
                            name: "footer",
                            type: "ReactNode",
                            description: "Content to display in the footer area.",
                        },
                        {
                            name: "showClose",
                            type: "boolean",
                            default: "true",
                            description: "Whether to show the close button in the header.",
                        },
                    ]}
                />
            </DocSection>
        </DocPage>
    );
}
