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
  <Plus />
</Button>
<Button size="icon">
  <Plus />
</Button>
<Button size="icon-lg">
  <Plus />
</Button>`}
        >
          <div className="flex items-center gap-4">
            <div className="flex flex-col items-center gap-2">
              <Button size="icon-sm">
                <Plus />
              </Button>
              <span className="text-xs text-muted-foreground">icon-sm (16px)</span>
            </div>
            <div className="flex flex-col items-center gap-2">
              <Button size="icon">
                <Plus />
              </Button>
              <span className="text-xs text-muted-foreground">icon (20px)</span>
            </div>
            <div className="flex flex-col items-center gap-2">
              <Button size="icon-lg">
                <Plus />
              </Button>
              <span className="text-xs text-muted-foreground">icon-lg (24px)</span>
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

      <DocSection title="Icon Heuristics" description="Automatic scaling and weight handling.">
        <div className="space-y-6">
          <p className="text-sm text-muted-foreground">
            Icons within buttons are automatically scaled based on the button size. You do not need to pass a
            <code className="px-1 py-0.5 bg-muted rounded text-xs">size</code> prop to individual icons unless you
            need to override the default behavior.
          </p>
          <div className="overflow-x-auto rounded-lg border border-border/50">
            <table className="w-full text-sm">
              <thead className="bg-muted/30">
                <tr>
                  <th className="text-left p-4 font-medium uppercase tracking-wider text-[11px] text-muted-foreground">Button Size</th>
                  <th className="text-left p-4 font-medium uppercase tracking-wider text-[11px] text-muted-foreground">Auto Icon Size</th>
                  <th className="text-left p-4 font-medium uppercase tracking-wider text-[11px] text-muted-foreground">Button Dimensions</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-border/50">
                <tr>
                  <td className="p-4 font-medium">icon-sm</td>
                  <td className="p-4 text-muted-foreground">16px</td>
                  <td className="p-4 text-muted-foreground">32×32px</td>
                </tr>
                <tr>
                  <td className="p-4 font-medium">icon</td>
                  <td className="p-4 text-muted-foreground">20px</td>
                  <td className="p-4 text-muted-foreground">36×36px</td>
                </tr>
                <tr>
                  <td className="p-4 font-medium">icon-lg</td>
                  <td className="p-4 text-muted-foreground">24px</td>
                  <td className="p-4 text-muted-foreground">44×44px</td>
                </tr>
              </tbody>
            </table>
          </div>
          <div className="p-4 rounded-lg bg-info/5 border border-info/20 text-sm text-info-foreground/80">
            <p className="flex items-center gap-2 font-medium mb-1">
              <span className="text-info">ℹ️</span> Unified Weight
            </p>
            <p>
              Buttons use <code className="px-1 py-0.5 bg-info/10 rounded text-xs text-info">IconContext</code> to
              automatically apply a <strong>bold</strong> weight to Phosphor icons, ensuring better visual
              presence and consistency.
            </p>
          </div>
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

      <DocSection title="Best Practices">
        <div className="space-y-4 text-sm">
          <div className="flex gap-3">
            <span className="text-green-600 font-medium">✅ Do:</span>
            <p className="text-muted-foreground">Always include a tooltip or aria-label to describe the action.</p>
          </div>
          <div className="flex gap-3">
            <span className="text-red-600 font-medium">❌ Don't:</span>
            <p className="text-muted-foreground">Use icon buttons without any text alternatives—screen readers need context.</p>
          </div>

          <div className="flex gap-3">
            <span className="text-green-600 font-medium">✅ Do:</span>
            <p className="text-muted-foreground">Use ghost variant for toolbar buttons to reduce visual weight.</p>
          </div>
          <div className="flex gap-3">
            <span className="text-red-600 font-medium">❌ Don't:</span>
            <p className="text-muted-foreground">Use primary icon buttons for multiple actions in a row—they compete.</p>
          </div>
        </div>
      </DocSection>

      <Timestamp date="17-01-2026 08:34PM" />
    </DocPage>
  );
}
