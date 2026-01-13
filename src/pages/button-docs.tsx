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

      <DocSection title="Outline" description="Lower emphasis. Good for secondary actions in dense UIs.">
        <ComponentExample code={`<Button variant="outline">Outline</Button>`}>
          <Button variant="outline">Outline</Button>
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

      <DocSection title="States" description="Interactive states for all button variants.">
        <ComponentExample
          code={`{/* States are handled via Tailwind modifiers */}
<Button>Default</Button>
<Button disabled>Disabled</Button>

{/* Hover: hover:bg-primary/90 */}
{/* Focus: focus-visible:ring-2 ring-ring */}
{/* Active: active:bg-primary/80 */}
{/* Disabled: disabled:opacity-50 disabled:pointer-events-none */}`}
        >
          <div className="flex flex-col gap-4 items-center">
            <div className="flex items-center gap-2">
              <Button>Default</Button>
              <Button disabled>Disabled</Button>
            </div>
            <p className="text-xs text-muted-foreground">
              Hover, focus, and active states visible on interaction
            </p>
          </div>
        </ComponentExample>
      </DocSection>

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

      <Timestamp date="13-01-2026" />
    </DocPage>
  );
}
