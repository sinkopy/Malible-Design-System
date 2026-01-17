import { Button } from "@/components/ui/button";
import { DocPage, DocSection, ComponentExample, Timestamp } from "@/components/docs";
import { Envelope, SpinnerGap } from "@phosphor-icons/react";

export default function ButtonDocs() {
  return (
    <DocPage
      title="Button"
      description="Displays a button or a component that looks like a button."
      category="Components"
    >
      <DocSection title="Examples" description="Common use cases and variations of the button component." level={2}>
        <DocSection title="Default" description="Primary action button. Use for the main call-to-action.">
          <ComponentExample code={`<Button>Button</Button>`}>
            <Button>Button</Button>
          </ComponentExample>
        </DocSection>

        <DocSection title="Secondary" description="For less prominent actions. Pairs with primary buttons.">
          <ComponentExample code={`<Button variant="secondary">Secondary</Button>`}>
            <Button variant="secondary">Secondary</Button>
          </ComponentExample>
        </DocSection>

        <DocSection title="Destructive" description="For dangerous actions like delete or remove.">
          <ComponentExample code={`<Button variant="destructive">Destructive</Button>`}>
            <Button variant="destructive">Destructive</Button>
          </ComponentExample>
        </DocSection>

        <DocSection title="Ghost" description="Minimal emphasis. Use for tertiary actions or toolbars.">
          <ComponentExample code={`<Button variant="ghost">Ghost</Button>`}>
            <Button variant="ghost">Ghost</Button>
          </ComponentExample>
        </DocSection>

        <DocSection title="Link" description="Appears as a text link. Use for navigation-style actions.">
          <ComponentExample code={`<Button variant="link">Link</Button>`}>
            <Button variant="link">Link</Button>
          </ComponentExample>
        </DocSection>
      </DocSection>

      <DocSection title="Customization" description="How to modify the appearance of the button." level={2}>
        <DocSection title="Sizes" description="Choose based on context and visual hierarchy.">
          <ComponentExample
            code={`<Button size="sm">Small</Button>
<Button>Default</Button>
<Button size="lg">Large</Button>`}
          >
            <div className="flex items-center gap-4">
              <Button size="sm">Small</Button>
              <Button>Default</Button>
              <Button size="lg">Large</Button>
            </div>
          </ComponentExample>
        </DocSection>

        <DocSection title="With Icon" description="Icons provide visual context. Place before label.">
          <ComponentExample
            code={`<Button>
  <Envelope size={16} />
  Login with Email
</Button>`}
          >
            <Button>
              <Envelope size={16} />
              Login with Email
            </Button>
          </ComponentExample>
        </DocSection>

        <DocSection title="Loading" description="Shows pending state. Disables interaction.">
          <ComponentExample
            code={`<Button disabled>
  <SpinnerGap size={16} className="animate-spin" />
  Please wait
</Button>`}
          >
            <Button disabled>
              <SpinnerGap size={16} className="animate-spin" />
              Please wait
            </Button>
          </ComponentExample>
        </DocSection>
      </DocSection>

      <DocSection title="State Reference">
        <div className="rounded-lg border overflow-hidden">
          <table className="w-full text-sm">
            <thead className="bg-muted/50">
              <tr>
                <th className="text-left p-3 font-medium">State</th>
                <th className="text-left p-3 font-medium">Style</th>
                <th className="text-left p-3 font-medium">Token/Value</th>
              </tr>
            </thead>
            <tbody className="divide-y">
              <tr>
                <td className="p-3 font-medium">Default</td>
                <td className="p-3 text-muted-foreground">Base colors</td>
                <td className="p-3 font-mono text-xs text-muted-foreground">variant colors</td>
              </tr>
              <tr>
                <td className="p-3 font-medium">Hover</td>
                <td className="p-3 text-muted-foreground">90% opacity overlay</td>
                <td className="p-3 font-mono text-xs text-muted-foreground">hover:bg-*/90</td>
              </tr>
              <tr>
                <td className="p-3 font-medium">Focus</td>
                <td className="p-3 text-muted-foreground">Ring</td>
                <td className="p-3 font-mono text-xs text-muted-foreground">ring-2 ring-ring</td>
              </tr>
              <tr>
                <td className="p-3 font-medium">Active</td>
                <td className="p-3 text-muted-foreground">80% opacity overlay</td>
                <td className="p-3 font-mono text-xs text-muted-foreground">active:bg-*/80</td>
              </tr>
              <tr>
                <td className="p-3 font-medium">Disabled</td>
                <td className="p-3 text-muted-foreground">50% opacity</td>
                <td className="p-3 font-mono text-xs text-muted-foreground">opacity-50 pointer-events-none</td>
              </tr>
            </tbody>
          </table>
        </div>
      </DocSection>

      <DocSection title="Best Practices">
        <div className="space-y-4 text-sm">
          <div className="flex gap-3">
            <span className="text-green-600 font-medium">✅ Do:</span>
            <p className="text-muted-foreground">Use primary buttons for the main action on a page. Limit to one per section.</p>
          </div>
          <div className="flex gap-3">
            <span className="text-red-600 font-medium">❌ Don't:</span>
            <p className="text-muted-foreground">Use multiple primary buttons that compete for attention.</p>
          </div>

          <div className="flex gap-3">
            <span className="text-green-600 font-medium">✅ Do:</span>
            <p className="text-muted-foreground">Use clear, action-oriented labels like "Save changes" or "Create account".</p>
          </div>
          <div className="flex gap-3">
            <span className="text-red-600 font-medium">❌ Don't:</span>
            <p className="text-muted-foreground">Use generic text like "Click here", "Submit", or "OK".</p>
          </div>

          <div className="flex gap-3">
            <span className="text-green-600 font-medium">✅ Do:</span>
            <p className="text-muted-foreground">Use destructive variant for dangerous actions like delete or remove.</p>
          </div>
          <div className="flex gap-3">
            <span className="text-red-600 font-medium">❌ Don't:</span>
            <p className="text-muted-foreground">Use red buttons for regular actions or confirmations.</p>
          </div>

          <div className="flex gap-3">
            <span className="text-green-600 font-medium">✅ Do:</span>
            <p className="text-muted-foreground">Add icons to clarify button purpose (e.g., download, upload, external link).</p>
          </div>
          <div className="flex gap-3">
            <span className="text-red-600 font-medium">❌ Don't:</span>
            <p className="text-muted-foreground">Use icon-only buttons without tooltips or aria-labels.</p>
          </div>
        </div>
      </DocSection>

      <Timestamp date="13-01-2026" />
    </DocPage>
  );
}
