import * as React from "react";
import { DocPage, DocSection, ComponentExample, PropsTable } from "@/components/docs";
import { AutoComplete, type AutoCompleteOption } from "@/components/ui/autocomplete";

const frameworks: AutoCompleteOption[] = [
    { value: "next.js", label: "Next.js" },
    { value: "sveltekit", label: "SvelteKit" },
    { value: "nuxt.js", label: "Nuxt.js" },
    { value: "remix", label: "Remix" },
    { value: "astro", label: "Astro" },
    { value: "vite", label: "Vite" },
    { value: "react", label: "React" },
];

export default function AutoCompleteDocs() {
    const [value, setValue] = React.useState("");

    return (
        <DocPage
            category="Components"
            title="Auto Complete"
            description="A searchable selection component that filters a list of options based on user input."
        >
            <DocSection title="Usage">
                <ComponentExample
                    code={`const frameworks = [
  { value: "next.js", label: "Next.js" },
  { value: "sveltekit", label: "SvelteKit" },
  { value: "nuxt.js", label: "Nuxt.js" },
  { value: "remix", label: "Remix" },
  { value: "astro", label: "Astro" },
];

const [value, setValue] = React.useState("");

<AutoComplete
  options={frameworks}
  value={value}
  onValueChange={setValue}
  placeholder="Select a framework..."
/>`}
                >
                    <div className="w-full max-w-sm">
                        <AutoComplete
                            options={frameworks}
                            value={value}
                            onValueChange={setValue}
                            placeholder="Select a framework..."
                        />
                    </div>
                </ComponentExample>
            </DocSection>

            <DocSection title="States">
                <div className="flex flex-col gap-8">
                    <div>
                        <h4 className="text-sm font-medium mb-3">Disabled</h4>
                        <div className="w-full max-w-sm">
                            <AutoComplete
                                options={frameworks}
                                placeholder="Disabled AutoComplete"
                                disabled
                            />
                        </div>
                    </div>
                    <div>
                        <h4 className="text-sm font-medium mb-3">Empty Search</h4>
                        <div className="w-full max-w-sm">
                            <AutoComplete
                                options={[]}
                                placeholder="Nothing here..."
                                emptyMessage="Custom empty message."
                            />
                        </div>
                    </div>
                </div>
            </DocSection>

            <DocSection title="Properties">
                <PropsTable
                    props={[
                        {
                            name: "options",
                            type: "AutoCompleteOption[]",
                            description: "The list of options to display.",
                        },
                        {
                            name: "value",
                            type: "string",
                            description: "The current selected value.",
                        },
                        {
                            name: "onValueChange",
                            type: "(value: string) => void",
                            description: "Callback when the selected value changes.",
                        },
                        {
                            name: "placeholder",
                            type: "string",
                            default: '"Search..."',
                            description: "Placeholder text for the input.",
                        },
                        {
                            name: "emptyMessage",
                            type: "string",
                            default: '"No results found."',
                            description: "Message to show when no options match the search.",
                        },
                        {
                            name: "disabled",
                            type: "boolean",
                            default: "false",
                            description: "Whether the component is disabled.",
                        },
                    ]}
                />
            </DocSection>
        </DocPage>
    );
}
