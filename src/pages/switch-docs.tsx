import { Switch } from "@/components/ui/switch";
import { Label } from "@/components/ui/label";
import { DocPage, DocSection, ComponentExample, Timestamp, PropsTable, StateTable } from "@/components/docs";

export default function SwitchDocs() {
  return (
    <DocPage
      title="Switch"
      description="A toggle control for binary on/off states."
      category="Components"
    >
      <DocSection title="Default" description="Binary toggle for on/off settings.">
        <ComponentExample
          code={`<div className="flex items-center gap-2">
  <Switch id="airplane" />
  <Label htmlFor="airplane">Airplane Mode</Label>
</div>`}
        >
          <div className="flex items-center gap-2">
            <Switch id="airplane" />
            <Label htmlFor="airplane">Airplane Mode</Label>
          </div>
        </ComponentExample>
      </DocSection>

      <DocSection title="Checked" description="Active state with success color.">
        <ComponentExample
          code={`<Switch defaultChecked />`}
        >
          <div className="flex items-center gap-2">
            <Switch id="notifications" defaultChecked />
            <Label htmlFor="notifications">Notifications</Label>
          </div>
        </ComponentExample>
      </DocSection>

      <DocSection title="Disabled" description="Prevents interaction when setting is locked.">
        <ComponentExample
          code={`<Switch disabled />
<Switch disabled defaultChecked />`}
        >
          <div className="flex items-center gap-4">
            <div className="flex items-center gap-2">
              <Switch id="disabled-off" disabled />
              <Label htmlFor="disabled-off" className="text-muted-foreground">Disabled off</Label>
            </div>
            <div className="flex items-center gap-2">
              <Switch id="disabled-on" disabled defaultChecked />
              <Label htmlFor="disabled-on" className="text-muted-foreground">Disabled on</Label>
            </div>
          </div>
        </ComponentExample>
      </DocSection>

      <DocSection title="States" description="Toggle states and disabled variations.">
        <ComponentExample
          code={`<Switch />                    {/* Unchecked: bg-muted */}
<Switch defaultChecked />     {/* Checked: bg-success */}
<Switch disabled />           {/* Disabled: opacity-50 */}
<Switch disabled defaultChecked />`}
        >
          <div className="grid grid-cols-2 gap-4">
            <div className="flex items-center gap-2">
              <Switch id="off" />
              <Label htmlFor="off">Off</Label>
            </div>
            <div className="flex items-center gap-2">
              <Switch id="on" defaultChecked />
              <Label htmlFor="on">On</Label>
            </div>
            <div className="flex items-center gap-2">
              <Switch id="dis-off" disabled />
              <Label htmlFor="dis-off" className="text-muted-foreground">Disabled Off</Label>
            </div>
            <div className="flex items-center gap-2">
              <Switch id="dis-on" disabled defaultChecked />
              <Label htmlFor="dis-on" className="text-muted-foreground">Disabled On</Label>
            </div>
          </div>
        </ComponentExample>
      </DocSection>

      <DocSection title="Reference" description="Technical details and compliance for the switch component." level={2}>
        <DocSection title="Accessibility">
          <div className="space-y-4 text-[14px] text-muted-foreground leading-relaxed">
            <p>
              Switches provide a clear visual and semantic indication of on/off states.
            </p>
            <ul className="list-disc list-inside space-y-2 ml-2">
              <li>Always associate the switch with a <code className="text-[13px] bg-muted/20 border border-border/30 px-1 rounded">Label</code> using <code className="text-[13px] bg-muted/20 border border-border/30 px-1 rounded">id</code> and <code className="text-[13px] bg-muted/20 border border-border/30 px-1 rounded">htmlFor</code>.</li>
              <li>The component uses <code className="text-[13px] bg-muted/20 border border-border/30 px-1 rounded">role="switch"</code> and manages <code className="text-[13px] bg-muted/20 border border-border/30 px-1 rounded">aria-checked</code> automatically.</li>
              <li>Keyboard: <kbd className="text-[11px] font-sans bg-muted/20 px-1 rounded border border-border/20">Space</kbd> or <kbd className="text-[11px] font-sans bg-muted/20 px-1 rounded border border-border/20">Enter</kbd> to toggle.</li>
            </ul>
          </div>
        </DocSection>

        <DocSection title="State Reference">
          <StateTable
            states={[
              { state: "Off", style: "Muted background", token: "bg-muted" },
              { state: "On", style: "Success background", token: "bg-success" },
              { state: "Disabled", style: "50% opacity", token: "opacity-50" },
            ]}
          />
        </DocSection>

        <DocSection title="Props" description="Switch component props configuration.">
          <PropsTable
            props={[
              {
                name: "checked",
                type: "boolean",
                description: "The controlled checked state."
              },
              {
                name: "defaultChecked",
                type: "boolean",
                default: "false",
                description: "The default checked state."
              },
              {
                name: "onCheckedChange",
                type: "(checked: boolean) => void",
                description: "Event handler called when the checked state changes."
              },
              {
                name: "disabled",
                type: "boolean",
                default: "false",
                description: "Whether the switch is disabled."
              },
            ]}
          />
        </DocSection>
      </DocSection>

      <DocSection title="Best Practices">
        <div className="space-y-4 text-sm">
          <div className="flex gap-3">
            <span className="text-green-600 font-medium">✅ Do:</span>
            <p className="text-muted-foreground">Use switches for binary on/off settings that take effect immediately.</p>
          </div>
          <div className="flex gap-3">
            <span className="text-red-600 font-medium">❌ Don't:</span>
            <p className="text-muted-foreground">Use switches for yes/no questions that require form submission.</p>
          </div>

          <div className="flex gap-3">
            <span className="text-green-600 font-medium">✅ Do:</span>
            <p className="text-muted-foreground">Always pair with a label that describes what happens when "on".</p>
          </div>
          <div className="flex gap-3">
            <span className="text-red-600 font-medium">❌ Don't:</span>
            <p className="text-muted-foreground">Use ambiguous labels like "Setting" without explaining the effect.</p>
          </div>
        </div>
      </DocSection>

      <Timestamp date="17-01-2026 08:34PM" />
    </DocPage>
  );
}
