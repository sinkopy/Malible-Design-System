import { Box } from "@/components/ui/box";
import { Flex } from "@/components/ui/flex";
import { Stack } from "@/components/ui/stack";
import { Text } from "@/components/ui/text";
import { DocPage, DocSection, ComponentExample, Timestamp, PropsTable } from "@/components/docs";

export default function LayoutDocs() {
    return (
        <DocPage
            title="Layout"
            description="Layout primitives for building consistent and responsive interfaces."
            category="Foundation"
        >
            <DocSection title="Examples" description="Visual demonstrations of Layout primitives." level={2}>
                <DocSection title="Flex" description="A polymorphic flexbox container with easy gap and alignment control.">
                    <ComponentExample
                        code={`<Flex gap={4} align="center">
  <Box className="w-12 h-12 bg-accent rounded" />
  <Flex direction="col">
    <Text weight="bold">Item One</Text>
    <Text variant="muted">Subtext here</Text>
  </Flex>
</Flex>`}
                    >
                        <Flex gap={4} align="center">
                            <Box className="w-12 h-12 bg-accent rounded-lg" />
                            <Flex direction="col">
                                <Text weight="bold">Item One</Text>
                                <Text variant="muted">Subtext here</Text>
                            </Flex>
                        </Flex>
                    </ComponentExample>
                </DocSection>

                <DocSection title="Stack" description="A specialized vertical flex container for consistent spacing between elements.">
                    <ComponentExample
                        code={`<Stack gap={2}>
  <Box className="h-4 w-full bg-muted rounded" />
  <Box className="h-4 w-3/4 bg-muted rounded" />
  <Box className="h-4 w-1/2 bg-muted rounded" />
</Stack>`}
                    >
                        <Stack gap={2} className="w-full max-w-xs">
                            <Box className="h-4 w-full bg-muted rounded" />
                            <Box className="h-4 w-3/4 bg-muted rounded" />
                            <Box className="h-4 w-1/2 bg-muted rounded" />
                        </Stack>
                    </ComponentExample>
                </DocSection>

                <DocSection title="Polymorphism" description="All layout primitives can be rendered as any HTML element using the 'as' prop.">
                    <ComponentExample
                        code={`<Stack as="section" gap={4}>
  <Box as="header" className="p-4 border-b border-border">Header</Box>
  <Box as="main" className="p-4">Content</Box>
</Stack>`}
                    >
                        <Stack as="section" gap={0} className="rounded-lg border border-border overflow-hidden w-full">
                            <Box as="header" className="p-4 border-b border-border bg-muted/20">
                                <Text weight="semibold">Section Header</Text>
                            </Box>
                            <Box as="main" className="p-4 bg-background">
                                <Text variant="muted">This entire stack is rendered as a semantic &lt;section&gt; element.</Text>
                            </Box>
                        </Stack>
                    </ComponentExample>
                </DocSection>
            </DocSection>

            <DocSection title="Reference" description="Technical details and configuration." level={2}>
                <DocSection title="Flex Props">
                    <PropsTable
                        props={[
                            {
                                name: "direction",
                                type: '"row" | "col" | "rowReverse" | "colReverse"',
                                default: '"row"',
                                description: "Flex direction."
                            },
                            {
                                name: "align",
                                type: '"start" | "center" | "end" | "baseline" | "stretch"',
                                default: '"stretch"',
                                description: "Cross-axis alignment (align-items)."
                            },
                            {
                                name: "justify",
                                type: '"start" | "center" | "end" | "between" | "around" | "evenly"',
                                default: '"start"',
                                description: "Main-axis alignment (justify-content)."
                            },
                            {
                                name: "gap",
                                type: "number",
                                default: "0",
                                description: "Tailwind gap value (0, 1, 2, 3, 4, etc.)."
                            }
                        ]}
                    />
                </DocSection>

                <DocSection title="Stack Props">
                    <PropsTable
                        props={[
                            {
                                name: "gap",
                                type: "number",
                                default: "4",
                                description: "Consistent spacing between children."
                            },
                            {
                                name: "align",
                                type: '"start" | "center" | "end" | "stretch"',
                                default: '"stretch"',
                                description: "Vertical child alignment."
                            }
                        ]}
                    />
                </DocSection>
            </DocSection>

            <Timestamp date="19-01-2026 02:50PM" />
        </DocPage>
    );
}
