import {
  Breadcrumb,
  BreadcrumbList,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbPage,
  BreadcrumbSeparator,
  BreadcrumbEllipsis,
} from "@/components/ui/breadcrumb"
import { DocPage, DocSection, ComponentExample, PropsTable } from "@/components/docs"

export default function BreadcrumbDocs() {
  return (
    <DocPage
      title="Breadcrumb"
      description="Displays the path to the current resource using a hierarchy of links."
      category="Components"
    >
      <DocSection title="Examples" description="Common use cases and variations of the breadcrumb component." level={2}>
        <DocSection title="Default" description="Standard breadcrumb navigation showing the current page path.">
          <ComponentExample
            code={`<Breadcrumb>
  <BreadcrumbList>
    <BreadcrumbItem>
      <BreadcrumbLink href="/">Home</BreadcrumbLink>
    </BreadcrumbItem>
    <BreadcrumbSeparator />
    <BreadcrumbItem>
      <BreadcrumbLink href="/components">Components</BreadcrumbLink>
    </BreadcrumbItem>
    <BreadcrumbSeparator />
    <BreadcrumbItem>
      <BreadcrumbPage>Breadcrumb</BreadcrumbPage>
    </BreadcrumbItem>
  </BreadcrumbList>
</Breadcrumb>`}
          >
            <Breadcrumb>
              <BreadcrumbList>
                <BreadcrumbItem>
                  <BreadcrumbLink href="/">Home</BreadcrumbLink>
                </BreadcrumbItem>
                <BreadcrumbSeparator />
                <BreadcrumbItem>
                  <BreadcrumbLink href="/components">Components</BreadcrumbLink>
                </BreadcrumbItem>
                <BreadcrumbSeparator />
                <BreadcrumbItem>
                  <BreadcrumbPage>Breadcrumb</BreadcrumbPage>
                </BreadcrumbItem>
              </BreadcrumbList>
            </Breadcrumb>
          </ComponentExample>
        </DocSection>

        <DocSection title="With Ellipsis" description="Use ellipsis to collapse long paths.">
          <ComponentExample
            code={`<Breadcrumb>
  <BreadcrumbList>
    <BreadcrumbItem>
      <BreadcrumbLink href="/">Home</BreadcrumbLink>
    </BreadcrumbItem>
    <BreadcrumbSeparator />
    <BreadcrumbItem>
      <BreadcrumbEllipsis />
    </BreadcrumbItem>
    <BreadcrumbSeparator />
    <BreadcrumbItem>
      <BreadcrumbLink href="/components">Components</BreadcrumbLink>
    </BreadcrumbItem>
    <BreadcrumbSeparator />
    <BreadcrumbItem>
      <BreadcrumbPage>Breadcrumb</BreadcrumbPage>
    </BreadcrumbItem>
  </BreadcrumbList>
</Breadcrumb>`}
          >
            <Breadcrumb>
              <BreadcrumbList>
                <BreadcrumbItem>
                  <BreadcrumbLink href="/">Home</BreadcrumbLink>
                </BreadcrumbItem>
                <BreadcrumbSeparator />
                <BreadcrumbItem>
                  <BreadcrumbEllipsis />
                </BreadcrumbItem>
                <BreadcrumbSeparator />
                <BreadcrumbItem>
                  <BreadcrumbLink href="/components">Components</BreadcrumbLink>
                </BreadcrumbItem>
                <BreadcrumbSeparator />
                <BreadcrumbItem>
                  <BreadcrumbPage>Breadcrumb</BreadcrumbPage>
                </BreadcrumbItem>
              </BreadcrumbList>
            </Breadcrumb>
          </ComponentExample>
        </DocSection>
      </DocSection>

      <DocSection title="Reference" description="Technical details and compliance for the breadcrumb component." level={2}>
        <DocSection title="Accessibility">
          <div className="space-y-4 text-[14px] text-muted-foreground leading-relaxed">
            <p>
              Breadcrumbs use the <code className="text-[13px] bg-muted/20 border border-border/30 px-1 rounded">aria-label="Breadcrumb"</code> attribute on the <code className="text-[13px] bg-muted/20 border border-border/30 px-1 rounded">nav</code> element to identify the navigation landmark.
            </p>
            <ul className="list-disc list-inside space-y-2 ml-2">
              <li>Current page is identified with <code className="text-[13px] bg-muted/20 border border-border/30 px-1 rounded">aria-current="page"</code>.</li>
              <li>Links are focusable and use standard navigation patterns.</li>
              <li>Separators are hidden from screen readers using <code className="text-[13px] bg-muted/20 border border-border/30 px-1 rounded">aria-hidden="true"</code>.</li>
            </ul>
          </div>
        </DocSection>

        <DocSection title="Anatomy">
          <PropsTable
            props={[
              { name: "Breadcrumb", type: "Component", description: "Main navigation wrapper." },
              { name: "BreadcrumbList", type: "Component", description: "Ordered list of items." },
              { name: "BreadcrumbItem", type: "Component", description: "Individual step in the path." },
              { name: "BreadcrumbLink", type: "Component", description: "Navigable link for previous steps." },
              { name: "BreadcrumbPage", type: "Component", description: "Current page identifier (non-link)." },
              { name: "BreadcrumbSeparator", type: "Component", description: "Visual divider between steps." },
              { name: "BreadcrumbEllipsis", type: "Component", description: "Collapsed path indicator." },
            ]}
          />
        </DocSection>
        <DocSection title="Best Practices">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-[14px]">
            <div className="space-y-4 p-4 rounded-lg bg-success/5 border border-success/10">
              <div className="flex gap-3">
                <span className="text-success font-bold">✅ Do:</span>
                <p className="text-muted-foreground leading-snug">Start with "Home" or your root page name as the first item.</p>
              </div>
              <div className="flex gap-3">
                <span className="text-success font-bold">✅ Do:</span>
                <p className="text-muted-foreground leading-snug">Use ellipsis to collapse long paths with 5+ levels.</p>
              </div>
            </div>
            <div className="space-y-4 p-4 rounded-lg bg-destructive/5 border border-destructive/10">
              <div className="flex gap-3">
                <span className="text-destructive font-bold">❌ Don't:</span>
                <p className="text-muted-foreground leading-snug">Make the current page a link—use BreadcrumbPage for the final item.</p>
              </div>
              <div className="flex gap-3">
                <span className="text-destructive font-bold">❌ Don't:</span>
                <p className="text-muted-foreground leading-snug">Show every level of a deeply nested path—it overwhelms users.</p>
              </div>
            </div>
          </div>
        </DocSection>
      </DocSection>
    </DocPage>
  )
}
