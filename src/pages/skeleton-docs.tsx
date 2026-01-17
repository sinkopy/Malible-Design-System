import { Skeleton } from "@/components/ui/skeleton"
import { DocPage, DocSection, ComponentExample, Timestamp } from "@/components/docs"

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

            <Timestamp date="17-01-2026 08:34PM" />
        </DocPage>
    )
}
