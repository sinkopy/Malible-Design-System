import { Input } from "@/components/ui/input";
import { FormField } from "@/components/ui/form-field";
import { Textarea } from "@/components/ui/textarea";
import { DocPage, DocSection, ComponentExample, Timestamp, PropsTable } from "@/components/docs";

export default function FormFieldDocs() {
    return (
        <DocPage
            title="Form Field"
            description="A wrapper component that provides context for form elements, including labels, help text, and error states."
            category="Forms"
        >
            <DocSection title="Examples" description="Common use cases for the FormField component." level={2}>
                <DocSection title="Basic Usage" description="Wrap an input with FormField to add a label and help text.">
                    <ComponentExample
                        code={`<FormField 
  label="Username" 
  helpText="This is your public display name."
>
  <Input id="username" placeholder="johndoe" />
</FormField>`}
                    >
                        <div className="w-full max-w-sm">
                            <FormField
                                label="Username"
                                helpText="This is your public display name."
                            >
                                <Input id="username-demo" placeholder="johndoe" />
                            </FormField>
                        </div>
                    </ComponentExample>
                </DocSection>

                <DocSection title="Error State" description="FormField handles error messages consistently across all inputs.">
                    <ComponentExample
                        code={`<FormField 
  label="Email" 
  error 
  errorMessage="Please enter a valid email address."
>
  <Input id="email" type="email" placeholder="example@gmail.com" defaultValue="invalid-email" />
</FormField>`}
                    >
                        <div className="w-full max-w-sm">
                            <FormField
                                label="Email"
                                error
                                errorMessage="Please enter a valid email address."
                            >
                                <Input id="email-demo" type="email" placeholder="example@gmail.com" defaultValue="invalid-email" />
                            </FormField>
                        </div>
                    </ComponentExample>
                </DocSection>

                <DocSection title="With Textarea" description="FormField works with any form element, including textareas.">
                    <ComponentExample
                        code={`<FormField 
  label="Bio" 
  helpText="Write a few sentences about yourself."
>
  <Textarea id="bio" placeholder="I am a developer..." />
</FormField>`}
                    >
                        <div className="w-full max-w-sm">
                            <FormField
                                label="Bio"
                                helpText="Write a few sentences about yourself."
                            >
                                <Textarea id="bio-demo" placeholder="I am a developer..." />
                            </FormField>
                        </div>
                    </ComponentExample>
                </DocSection>
            </DocSection>

            <DocSection title="Reference" description="Technical details for the FormField component." level={2}>
                <DocSection title="Props">
                    <PropsTable
                        props={[
                            {
                                name: "label",
                                type: "string",
                                description: "The label text for the form field."
                            },
                            {
                                name: "helpText",
                                type: "string",
                                description: "Optional help or instruction text displayed below the input."
                            },
                            {
                                name: "error",
                                type: "boolean",
                                description: "Whether the field is in an error state."
                            },
                            {
                                name: "errorMessage",
                                type: "string",
                                description: "The error message to display when error is true."
                            },
                            {
                                name: "children",
                                type: "ReactNode",
                                description: "The form element (Input, Textarea, etc.) to wrap."
                            }
                        ]}
                    />
                </DocSection>
            </DocSection>

            <Timestamp date="18-01-2026 09:12AM" />
        </DocPage>
    );
}
