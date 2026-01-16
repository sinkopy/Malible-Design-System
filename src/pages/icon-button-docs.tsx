import { Button } from "@/components/ui/button";
import { DocPage, DocSection, ComponentExample, Timestamp } from "@/components/docs";
import { Plus, X, DotsThree, Trash } from "@phosphor-icons/react";

export default function IconButtonDocs() {
  return (
    <DocPage
      title="Icon Button"
      description="Square button variant for icon-only actions. Extends the base Button component."
      category="Components"
    >
      <DocSection title="Sizes" description="Three size variants for different contexts.">
        <ComponentExample
          code={`<Button size="icon-sm">
  <Plus size={16} />
</Button>
<Button size="icon">
  <Plus size={20} />
</Button>
<Button size="icon-lg">
  <Plus size={24} />
</Button>`}
        >
          <div className="flex items-center gap-4">
            <div className="flex flex-col items-center gap-2">
              <Button size="icon-sm">
                <Plus size={16} />
              </Button>
              <span className="text-xs text-muted-foreground">icon-sm</span>
            </div>
            <div className="flex flex-col items-center gap-2">
              <Button size="icon">
                <Plus size={20} />
              </Button>
              <span className="text-xs text-muted-foreground">icon</span>
            </div>
            <div className="flex flex-col items-center gap-2">
              <Button size="icon-lg">
                <Plus size={24} />
              </Button>
              <span className="text-xs text-muted-foreground">icon-lg</span>
            </div>
          </div>
        </ComponentExample>
      </DocSection>

      <DocSection title="Variants" description="Icon buttons support default, secondary, ghost, and destructive variants.">
        <ComponentExample
          code={`<Button size="icon" variant="default">
  <Plus size={20} />
</Button>
<Button size="icon" variant="secondary">
  <DotsThree size={20} />
</Button>
<Button size="icon" variant="ghost">
  <X size={20} />
</Button>
<Button size="icon" variant="destructive">
  <Trash size={20} />
</Button>`}
        >
          <div className="flex items-center gap-4">
            <div className="flex flex-col items-center gap-2">
              <Button size="icon" variant="default">
                <Plus size={20} />
              </Button>
              <span className="text-xs text-muted-foreground">default</span>
            </div>
            <div className="flex flex-col items-center gap-2">
              <Button size="icon" variant="secondary">
                <DotsThree size={20} />
              </Button>
              <span className="text-xs text-muted-foreground">secondary</span>
            </div>
            <div className="flex flex-col items-center gap-2">
              <Button size="icon" variant="ghost">
                <X size={20} />
              </Button>
              <span className="text-xs text-muted-foreground">ghost</span>
            </div>
            <div className="flex flex-col items-center gap-2">
              <Button size="icon" variant="destructive">
                <Trash size={20} />
              </Button>
              <span className="text-xs text-muted-foreground">destructive</span>
            </div>
          </div>
        </ComponentExample>
      </DocSection>

      <DocSection title="Usage" description="Common patterns for icon buttons.">
        <ComponentExample
          code={`import { Button } from "@/components/ui/button"
import { Plus, X, DotsThree, Trash } from "@phosphor-icons/react"

// Primary action
<Button size="icon" variant="default">
  <Plus size={20} />
</Button>

// Secondary action
<Button size="icon" variant="secondary">
  <DotsThree size={20} />
</Button>

// Ghost (toolbar)
<Button size="icon" variant="ghost">
  <X size={20} />
</Button>

// Destructive
<Button size="icon" variant="destructive">
  <Trash size={20} />
</Button>`}
        >
          <div className="flex items-center gap-4">
            <Button size="icon" variant="default">
              <Plus size={20} />
            </Button>
            <Button size="icon" variant="secondary">
              <DotsThree size={20} />
            </Button>
            <Button size="icon" variant="ghost">
              <X size={20} />
            </Button>
            <Button size="icon" variant="destructive">
              <Trash size={20} />
            </Button>
          </div>
        </ComponentExample>
      </DocSection>

      <DocSection title="Icon Size Reference" description="Recommended icon sizes for each button size.">
        <div className="overflow-x-auto">
          <table className="w-full border-collapse">
            <thead>
              <tr className="border-b border-border">
                <th className="text-left py-2 px-4 text-sm font-semibold text-foreground">Button Size</th>
                <th className="text-left py-2 px-4 text-sm font-semibold text-foreground">Icon Size</th>
                <th className="text-left py-2 px-4 text-sm font-semibold text-foreground">Dimensions</th>
              </tr>
            </thead>
            <tbody>
              <tr className="border-b border-border">
                <td className="py-2 px-4 text-sm text-foreground">icon-sm</td>
                <td className="py-2 px-4 text-sm text-muted-foreground">16px</td>
                <td className="py-2 px-4 text-sm text-muted-foreground">32×32px</td>
              </tr>
              <tr className="border-b border-border">
                <td className="py-2 px-4 text-sm text-foreground">icon</td>
                <td className="py-2 px-4 text-sm text-muted-foreground">20px</td>
                <td className="py-2 px-4 text-sm text-muted-foreground">36×36px</td>
              </tr>
              <tr>
                <td className="py-2 px-4 text-sm text-foreground">icon-lg</td>
                <td className="py-2 px-4 text-sm text-muted-foreground">24px</td>
                <td className="py-2 px-4 text-sm text-muted-foreground">44×44px</td>
              </tr>
            </tbody>
          </table>
        </div>
      </DocSection>

      <DocSection title="Props" description="Icon buttons use the same Button component props. Size accepts 'icon-sm' | 'icon' | 'icon-lg'.">
        <div className="text-sm text-muted-foreground space-y-2">
          <p>
            <strong className="text-foreground">Note:</strong> Icon buttons extend the base Button component. 
            All Button props are available, including <code className="px-1 py-0.5 bg-muted rounded text-xs">variant</code>, 
            <code className="px-1 py-0.5 bg-muted rounded text-xs">size</code>, and <code className="px-1 py-0.5 bg-muted rounded text-xs">disabled</code>.
          </p>
          <p>
            <strong className="text-foreground">Size variants:</strong> Use <code className="px-1 py-0.5 bg-muted rounded text-xs">size="icon-sm"</code>, 
            <code className="px-1 py-0.5 bg-muted rounded text-xs">size="icon"</code>, or 
            <code className="px-1 py-0.5 bg-muted rounded text-xs">size="icon-lg"</code>.
          </p>
          <p>
            <strong className="text-foreground">Not recommended:</strong> <code className="px-1 py-0.5 bg-muted rounded text-xs">variant="outline"</code> and 
            <code className="px-1 py-0.5 bg-muted rounded text-xs">variant="link"</code> are not recommended for icon buttons.
          </p>
        </div>
      </DocSection>

      <Timestamp date="13-01-2026" />
    </DocPage>
  );
}
