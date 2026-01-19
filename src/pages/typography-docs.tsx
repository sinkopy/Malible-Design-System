import { Heading } from "@/components/ui/heading";
import { Text } from "@/components/ui/text";
import { DocPage, DocSection, ComponentExample, Timestamp, PropsTable } from "@/components/docs";

export default function TypographyDocs() {
  return (
    <DocPage
      title="Typography"
      description="Polymorphic primitives for hierarchical and readable text."
      category="Foundation"
    >
      <DocSection title="Examples" description="Visual demonstrations of the Text and Heading components." level={2}>
        <DocSection title="Headings" description="Use the Heading component for titles and section headers. Semantic tags (h1-h6) are derived from the level by default.">
          <ComponentExample
            code={`<Heading level={1}>Display Header</Heading>
<Heading level={2}>Section Header</Heading>
<Heading level={3}>Subsection Header</Heading>`}
          >
            <div className="flex flex-col gap-4">
              <Heading level={1}>Display Header</Heading>
              <Heading level={2}>Section Header</Heading>
              <Heading level={3}>Subsection Header</Heading>
            </div>
          </ComponentExample>
        </DocSection>

        <DocSection title="Text Variants" description="The Text component provides consistent body text with support for weight, size, and status variants.">
          <ComponentExample
            code={`<Text size="base">Default body text</Text>
<Text size="sm" variant="muted">Small muted caption</Text>
<Text weight="bold" variant="destructive">Important destructive notice</Text>`}
          >
            <div className="flex flex-col gap-2">
              <Text size="base">Default body text</Text>
              <Text size="sm" variant="muted">Small muted caption</Text>
              <Text weight="bold" variant="destructive">Important destructive notice</Text>
            </div>
          </ComponentExample>
        </DocSection>

        <DocSection title="Alignment & Style" description="Support for text alignment, italics, and underlining.">
          <ComponentExample
            code={`<Text align="center" className="block">Centered text</Text>
<Text italic underlined>Italic and underlined text</Text>`}
          >
            <div className="flex flex-col gap-2 w-full">
              <Text align="center" className="block">Centered text</Text>
              <Text italic underlined>Italic and underlined text</Text>
            </div>
          </ComponentExample>
        </DocSection>
      </DocSection>

      <DocSection title="Reference" description="Technical details and configuration." level={2}>
        <DocSection title="Heading Props">
          <PropsTable
            props={[
              {
                name: "level",
                type: "1 | 2 | 3 | 4 | 5 | 6",
                default: "1",
                description: "The heading level, which determines visual size and semantic tag."
              },
              {
                name: "variant",
                type: '"default" | "muted" | "accent"',
                default: '"default"',
                description: "The color variant of the heading."
              },
              {
                name: "as",
                type: "ElementType",
                description: "Override the default semantic HTML tag."
              }
            ]}
          />
        </DocSection>

        <DocSection title="Text Props">
          <PropsTable
            props={[
              {
                name: "size",
                type: '"xs" | "sm" | "base" | "lg" | "xl" | "2xl"',
                default: '"base"',
                description: "The font size of the text."
              },
              {
                name: "weight",
                type: '"light" | "normal" | "medium" | "semibold" | "bold"',
                default: '"normal"',
                description: "The font weight."
              },
              {
                name: "variant",
                type: '"default" | "muted" | "secondary" | "destructive" | "accent"',
                default: '"default"',
                description: "The color variant of the text."
              },
              {
                name: "align",
                type: '"left" | "center" | "right"',
                default: '"left"',
                description: "Text alignment."
              }
            ]}
          />
        </DocSection>
      </DocSection>

      <Timestamp date="19-01-2026 02:45PM" />
    </DocPage>
  );
}
