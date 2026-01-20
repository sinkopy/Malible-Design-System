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

const pages: AutoCompleteOption[] = [
    { value: "home", label: "Home Page", image: "https://placehold.co/200x120/1a1a1a/ffffff?text=Home" },
    { value: "about", label: "About Page", image: "https://placehold.co/200x120/e0622d/ffffff?text=About" },
    { value: "contact", label: "Contact Page", image: "https://placehold.co/200x120/3ea377/ffffff?text=Contact" },
    { value: "pricing", label: "Pricing Page", image: "https://placehold.co/200x120/008ed6/ffffff?text=Pricing" },
];

export default function AutoCompleteDocs() {
    const [value, setValue] = React.useState("");
    const [multiValues, setMultiValues] = React.useState<string[]>([]);
    const [gridValue, setGridValue] = React.useState("");
    const [gridMultiValues, setGridMultiValues] = React.useState<string[]>([]);

    return (
        <DocPage
            category="Components"
            title="Auto Complete"
            description="A searchable selection component that filters a list of options based on user input. Supports list and grid variants with single or multi-select."
        >
            <DocSection title="Basic Usage">
                <ComponentExample
                    code={`<AutoComplete
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

            <DocSection title="Multi-Select">
                <ComponentExample
                    code={`<AutoComplete
  options={frameworks}
  values={multiValues}
  onValuesChange={setMultiValues}
  multiple
  placeholder="Select frameworks..."
/>`}
                >
                    <div className="w-full max-w-sm">
                        <AutoComplete
                            options={frameworks}
                            values={multiValues}
                            onValuesChange={setMultiValues}
                            multiple
                            placeholder="Select frameworks..."
                        />
                    </div>
                </ComponentExample>
            </DocSection>

            <DocSection title="Grid Variant">
                <ComponentExample
                    code={`const pages = [
  { value: "home", label: "Home Page", image: "..." },
  { value: "about", label: "About Page", image: "..." },
  // ...
];

<AutoComplete
  options={pages}
  value={gridValue}
  onValueChange={setGridValue}
  variant="grid"
  columns={2}
  placeholder="Select a page..."
/>`}
                >
                    <div className="w-full max-w-sm">
                        <AutoComplete
                            options={pages}
                            value={gridValue}
                            onValueChange={setGridValue}
                            variant="grid"
                            columns={2}
                            placeholder="Select a page..."
                        />
                    </div>
                </ComponentExample>
            </DocSection>

            <DocSection title="Grid Multi-Select">
                <ComponentExample
                    code={`<AutoComplete
  options={pages}
  values={gridMultiValues}
  onValuesChange={setGridMultiValues}
  variant="grid"
  columns={2}
  multiple
  placeholder="Select pages..."
/>`}
                >
                    <div className="w-full max-w-sm">
                        <AutoComplete
                            options={pages}
                            values={gridMultiValues}
                            onValuesChange={setGridMultiValues}
                            variant="grid"
                            columns={2}
                            multiple
                            placeholder="Select pages..."
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
                            description: "Selected value (single-select mode).",
                        },
                        {
                            name: "values",
                            type: "string[]",
                            description: "Selected values (multi-select mode).",
                        },
                        {
                            name: "onValueChange",
                            type: "(value: string) => void",
                            description: "Callback for single-select changes.",
                        },
                        {
                            name: "onValuesChange",
                            type: "(values: string[]) => void",
                            description: "Callback for multi-select changes.",
                        },
                        {
                            name: "variant",
                            type: '"list" | "grid"',
                            default: '"list"',
                            description: "Display variant for dropdown items.",
                        },
                        {
                            name: "columns",
                            type: "2 | 3 | 4",
                            default: "2",
                            description: "Number of columns for grid variant.",
                        },
                        {
                            name: "multiple",
                            type: "boolean",
                            default: "false",
                            description: "Enable multi-select mode.",
                        },
                        {
                            name: "renderItem",
                            type: "(option, isSelected) => ReactNode",
                            description: "Custom render function for items.",
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
                            description: "Message shown when no options match.",
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
