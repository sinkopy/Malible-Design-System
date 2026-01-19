import { Button } from "@/components/ui/button";
import { DocPage, DocSection, ComponentExample, Timestamp, PropsTable, StateTable } from "@/components/docs";
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
            <code className="px-1 py-0.5 bg-muted/20 border border-border/30 rounded text-[13px]">size</code> prop to individual icons unless you
            need to override the default behavior.
          </p>
          <StateTable
            states={[
              { state: "icon-sm", style: "32×32px button", token: "16px icon" },
              { state: "icon", style: "36×36px button", token: "20px icon" },
              { state: "icon-lg", style: "44×44px button", token: "24px icon" },
            ]}
          />
          <div className="p-4 rounded-lg bg-info/5 border border-info/20 text-sm text-info-foreground/80">
            <p className="flex items-center gap-2 font-medium mb-1">
              <span className="text-info">ℹ️</span> Unified Weight
            </p>
            <p>
              Buttons use <code className="px-1 py-0.5 bg-info/10 rounded text-[13px] text-info">IconContext</code> to
              automatically apply a <strong>bold</strong> weight to Phosphor icons, ensuring better visual
              presence and consistency.
            </p>
          </div>
        </div>
      </DocSection>

      <DocSection title="Reference" description="Technical details and compliance for icon buttons." level={2}>
        <DocSection title="Accessibility">
          <div className="space-y-4 text-[14px] text-muted-foreground leading-relaxed">
            <p>
              Icon buttons require special attention to accessibility as they lack visible text.
            </p>
            <ul className="list-disc list-inside space-y-2 ml-2">
              <li>Always provide an <code className="text-[13px] bg-muted/20 border border-border/30 px-1 rounded">aria-label</code> or use the <code className="text-[13px] bg-muted/20 border border-border/30 px-1 rounded">Tooltip</code> component.</li>
              <li>Icons are marked as <code className="text-[13px] bg-muted/20 border border-border/30 px-1 rounded">aria-hidden="true"</code> by default if a label is present.</li>
              <li>Visible focus indicators are critical for keyboard navigation.</li>
            </ul>
          </div>
        </DocSection>

        <DocSection title="Props" description="Icon buttons extension of the base Button component.">
          <PropsTable
            props={[
              {
                name: "size",
                type: '"icon-sm" | "icon" | "icon-lg"',
                default: '"icon"',
                description: "The square dimension of the button."
              },
              {
                name: "variant",
                type: '"default" | "secondary" | "ghost" | "destructive"',
                default: '"default"',
                description: "The visual style variant."
              },
            ]}
          />
        </DocSection>
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
