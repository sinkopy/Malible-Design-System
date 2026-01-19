import { Skeleton } from "@/components/ui/skeleton"
import { DocPage, DocSection, ComponentExample, Timestamp, PropsTable } from "@/components/docs"

export default function SkeletonDocs() {
    return (
        <DocPage
            title="Skeleton"
            description="Use to show a placeholder while content is loading."
            category="Interaction"
        >
            <DocSection title="Examples" description="Common patterns for loading states." level={2}>
                <DocSection title="Text" description="Placeholders for headings and paragraphs.">
                    <ComponentExample
                        code={`<div className="space-y-2">
  <Skeleton className="h-4 w-[250px]" />
  <Skeleton className="h-4 w-[200px]" />
</div>`}
                    >
                        <div className="space-y-2">
                            <Skeleton className="h-4 w-[250px]" />
                            <Skeleton className="h-4 w-[200px]" />
                        </div>
                    </ComponentExample>
                </DocSection>

                <DocSection title="Card" description="Loading state for a complex component.">
                    <ComponentExample
                        code={`<div className="flex items-center space-x-4">
  <Skeleton className="h-12 w-12 rounded-full" />
  <div className="space-y-2">
    <Skeleton className="h-4 w-[250px]" />
    <Skeleton className="h-4 w-[200px]" />
  </div>
</div>`}
                    >
                        <div className="flex items-center space-x-4">
                            <Skeleton className="h-12 w-12 rounded-full" />
                            <div className="space-y-2">
                                <Skeleton className="h-4 w-[250px]" />
                                <Skeleton className="h-4 w-[200px]" />
                            </div>
                        </div>
                    </ComponentExample>
                </DocSection>
            </DocSection>

            <DocSection title="Complex Layouts" description="Using skeletons to represent page structure." level={2}>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    {[1, 2, 3].map((i) => (
                        <div key={i} className="flex flex-col space-y-3">
                            <Skeleton className="h-[125px] w-full rounded-xl" />
                            <div className="space-y-2">
                                <Skeleton className="h-4 w-full" />
                                <Skeleton className="h-4 w-4/5" />
                            </div>
                        </div>
                    ))}
                </div>
            </DocSection>
            <DocSection title="Reference" description="Technical details and compliance for the skeleton component." level={2}>
                <DocSection title="Accessibility">
                    <div className="space-y-4 text-[14px] text-muted-foreground leading-relaxed">
                        <p>
                            Skeletons are used to indicate that content is loading and should be treated as decorative.
                        </p>
                        <ul className="list-disc list-inside space-y-2 ml-2">
                            <li>Skeletons have <code className="text-[13px] bg-muted/20 border border-border/30 px-1 rounded">aria-hidden="true"</code> by default as they don't contain interactive content.</li>
                            <li>Ensure the parent container has appropriate loading states (e.g., <code className="text-[13px] bg-muted/20 border border-border/30 px-1 rounded">aria-busy="true"</code>).</li>
                            <li>Avoid using skeletons for long periods; provide text-based fallbacks if loading takes significant time.</li>
                        </ul>
                    </div>
                </DocSection>

                <DocSection title="Props" description="Skeleton component props configuration.">
                    <PropsTable
                        props={[
                            {
                                name: "className",
                                type: "string",
                                description: "Additional CSS classes to style the skeleton (usually height and width)."
                            },
                        ]}
                    />
                </DocSection>
            </DocSection>

            <Timestamp date="17-01-2026 08:34PM" />
        </DocPage>
    )
}
