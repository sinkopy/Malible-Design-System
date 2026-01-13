import { Switch } from "@/components/ui/switch";
import { Checkbox } from "@/components/ui/checkbox";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Badge } from "@/components/ui/badge";
import { useState } from "react";

// Icons
const CheckIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M20 6 9 17l-5-5"/>
  </svg>
);

const AlertIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <circle cx="12" cy="12" r="10"/><line x1="12" x2="12" y1="8" y2="12"/><line x1="12" x2="12.01" y1="16" y2="16"/>
  </svg>
);

const InfoIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <circle cx="12" cy="12" r="10"/><path d="M12 16v-4"/><path d="M12 8h.01"/>
  </svg>
);

// Code Block
function CodeBlock({ children }: { children: string }) {
  return (
    <div className="rounded-lg border bg-zinc-950 p-4 overflow-x-auto">
      <pre className="text-sm text-zinc-100 font-mono">{children}</pre>
    </div>
  );
}

// Example Section
function ExampleSection({ 
  title, 
  children, 
  code 
}: { 
  title: string; 
  children: React.ReactNode; 
  code: string;
}) {
  return (
    <div className="space-y-4">
      <h3 className="text-lg font-medium">{title}</h3>
      <div className="rounded-lg border p-6 bg-background">
        {children}
      </div>
      <CodeBlock>{code}</CodeBlock>
    </div>
  );
}

export default function ControlsDocs() {
  const [switchChecked, setSwitchChecked] = useState(false);
  const [checkboxChecked, setCheckboxChecked] = useState<boolean | "indeterminate">(false);
  const [radioValue, setRadioValue] = useState("option-1");

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <div className="border-b bg-secondary/30">
        <div className="container max-w-4xl py-8 px-6">
          <div className="flex items-center gap-2 text-sm text-muted-foreground mb-2">
            <span>Docs</span>
            <span className="text-muted-foreground/50">/</span>
            <span>Components</span>
            <span className="text-muted-foreground/50">/</span>
            <span className="text-foreground">Form Controls</span>
          </div>
          <h1 className="text-3xl font-bold tracking-tight text-foreground">Form Controls</h1>
          <p className="text-muted-foreground mt-2 text-lg">
            Switch, Checkbox, Radio, and Badge components.
          </p>
        </div>
      </div>

      {/* Content */}
      <div className="container max-w-4xl py-10 px-6 space-y-20">
        
        {/* ==================== SWITCH ==================== */}
        <section className="space-y-8">
          <div>
            <h2 className="text-2xl font-semibold tracking-tight">Switch</h2>
            <p className="text-muted-foreground mt-1">A control that allows the user to toggle between checked and not checked.</p>
          </div>

          {/* Preview */}
          <div className="rounded-xl border bg-card p-8 flex items-center justify-center gap-4">
            <Switch checked={switchChecked} onCheckedChange={setSwitchChecked} />
            <span className="text-sm text-muted-foreground">
              {switchChecked ? "On" : "Off"}
            </span>
          </div>

          <ExampleSection 
            title="Default" 
            code={`<Switch />`}
          >
            <div className="flex items-center gap-4">
              <Switch />
              <span className="text-sm">Airplane Mode</span>
            </div>
          </ExampleSection>

          <ExampleSection 
            title="With Label" 
            code={`<div className="flex items-center gap-2">
  <Switch id="notifications" />
  <label htmlFor="notifications">Enable notifications</label>
</div>`}
          >
            <div className="flex items-center gap-2">
              <Switch id="notifications" />
              <label htmlFor="notifications" className="text-sm">Enable notifications</label>
            </div>
          </ExampleSection>

          <ExampleSection 
            title="Disabled" 
            code={`<Switch disabled />`}
          >
            <div className="flex gap-4">
              <Switch disabled />
              <Switch disabled checked />
            </div>
          </ExampleSection>

          <ExampleSection 
            title="All States" 
            code={`// States: Default, Focus, Disabled × Checked/Unchecked`}
          >
            <div className="grid grid-cols-3 gap-6 text-center text-xs text-muted-foreground">
              <div>Default</div>
              <div>Focus (tab to see)</div>
              <div>Disabled</div>
              <Switch />
              <Switch />
              <Switch disabled />
              <Switch defaultChecked />
              <Switch defaultChecked />
              <Switch defaultChecked disabled />
            </div>
          </ExampleSection>
        </section>

        {/* ==================== CHECKBOX ==================== */}
        <section className="space-y-8">
          <div>
            <h2 className="text-2xl font-semibold tracking-tight">Checkbox</h2>
            <p className="text-muted-foreground mt-1">A control that allows the user to select one or multiple options.</p>
          </div>

          {/* Preview */}
          <div className="rounded-xl border bg-card p-8 flex items-center justify-center gap-4">
            <Checkbox 
              checked={checkboxChecked} 
              onCheckedChange={setCheckboxChecked} 
            />
            <span className="text-sm text-muted-foreground">
              {checkboxChecked === "indeterminate" ? "Indeterminate" : checkboxChecked ? "Checked" : "Unchecked"}
            </span>
          </div>

          <ExampleSection 
            title="Default" 
            code={`<Checkbox />`}
          >
            <div className="flex items-center gap-2">
              <Checkbox id="terms" />
              <label htmlFor="terms" className="text-sm">Accept terms and conditions</label>
            </div>
          </ExampleSection>

          <ExampleSection 
            title="Checked" 
            code={`<Checkbox defaultChecked />`}
          >
            <div className="flex items-center gap-2">
              <Checkbox id="checked" defaultChecked />
              <label htmlFor="checked" className="text-sm">Already accepted</label>
            </div>
          </ExampleSection>

          <ExampleSection 
            title="Indeterminate" 
            code={`<Checkbox checked="indeterminate" />`}
          >
            <div className="flex items-center gap-2">
              <Checkbox checked="indeterminate" />
              <label className="text-sm">Select all (some selected)</label>
            </div>
          </ExampleSection>

          <ExampleSection 
            title="Error State" 
            code={`<Checkbox error />`}
          >
            <div className="space-y-2">
              <div className="flex items-center gap-2">
                <Checkbox id="error" error />
                <label htmlFor="error" className="text-sm">Required field</label>
              </div>
              <p className="text-xs text-destructive ml-6">You must accept the terms</p>
            </div>
          </ExampleSection>

          <ExampleSection 
            title="Disabled" 
            code={`<Checkbox disabled />`}
          >
            <div className="flex gap-4">
              <Checkbox disabled />
              <Checkbox disabled defaultChecked />
            </div>
          </ExampleSection>

          <ExampleSection 
            title="All States" 
            code={`// States: Default, Focus, Error, Error Focus, Disabled`}
          >
            <div className="grid grid-cols-5 gap-4 text-center text-xs text-muted-foreground">
              <div>Default</div>
              <div>Focus</div>
              <div>Error</div>
              <div>Error Focus</div>
              <div>Disabled</div>
              <Checkbox />
              <Checkbox />
              <Checkbox error />
              <Checkbox error />
              <Checkbox disabled />
              <Checkbox defaultChecked />
              <Checkbox defaultChecked />
              <Checkbox defaultChecked error />
              <Checkbox defaultChecked error />
              <Checkbox defaultChecked disabled />
              <Checkbox checked="indeterminate" />
              <Checkbox checked="indeterminate" />
              <div></div>
              <div></div>
              <Checkbox checked="indeterminate" disabled />
            </div>
          </ExampleSection>
        </section>

        {/* ==================== RADIO ==================== */}
        <section className="space-y-8">
          <div>
            <h2 className="text-2xl font-semibold tracking-tight">Radio Group</h2>
            <p className="text-muted-foreground mt-1">A set of checkable buttons where only one can be checked at a time.</p>
          </div>

          {/* Preview */}
          <div className="rounded-xl border bg-card p-8 flex items-center justify-center">
            <RadioGroup value={radioValue} onValueChange={setRadioValue}>
              <div className="flex items-center gap-2">
                <RadioGroupItem value="option-1" id="opt-1" />
                <label htmlFor="opt-1" className="text-sm">Option 1</label>
              </div>
              <div className="flex items-center gap-2">
                <RadioGroupItem value="option-2" id="opt-2" />
                <label htmlFor="opt-2" className="text-sm">Option 2</label>
              </div>
              <div className="flex items-center gap-2">
                <RadioGroupItem value="option-3" id="opt-3" />
                <label htmlFor="opt-3" className="text-sm">Option 3</label>
              </div>
            </RadioGroup>
          </div>

          <ExampleSection 
            title="Default" 
            code={`<RadioGroup defaultValue="option-1">
  <div className="flex items-center gap-2">
    <RadioGroupItem value="option-1" id="r1" />
    <label htmlFor="r1">Default</label>
  </div>
  <div className="flex items-center gap-2">
    <RadioGroupItem value="option-2" id="r2" />
    <label htmlFor="r2">Comfortable</label>
  </div>
</RadioGroup>`}
          >
            <RadioGroup defaultValue="option-1">
              <div className="flex items-center gap-2">
                <RadioGroupItem value="option-1" id="r1" />
                <label htmlFor="r1" className="text-sm">Default</label>
              </div>
              <div className="flex items-center gap-2">
                <RadioGroupItem value="option-2" id="r2" />
                <label htmlFor="r2" className="text-sm">Comfortable</label>
              </div>
              <div className="flex items-center gap-2">
                <RadioGroupItem value="option-3" id="r3" />
                <label htmlFor="r3" className="text-sm">Compact</label>
              </div>
            </RadioGroup>
          </ExampleSection>

          <ExampleSection 
            title="Error State" 
            code={`<RadioGroupItem error value="option-1" />`}
          >
            <RadioGroup>
              <div className="flex items-center gap-2">
                <RadioGroupItem error value="err-1" id="err1" />
                <label htmlFor="err1" className="text-sm">Option with error</label>
              </div>
              <div className="flex items-center gap-2">
                <RadioGroupItem error value="err-2" id="err2" />
                <label htmlFor="err2" className="text-sm">Another option</label>
              </div>
            </RadioGroup>
          </ExampleSection>

          <ExampleSection 
            title="Disabled" 
            code={`<RadioGroupItem disabled value="option-1" />`}
          >
            <RadioGroup defaultValue="dis-2">
              <div className="flex items-center gap-2">
                <RadioGroupItem disabled value="dis-1" id="dis1" />
                <label htmlFor="dis1" className="text-sm text-muted-foreground">Disabled unchecked</label>
              </div>
              <div className="flex items-center gap-2">
                <RadioGroupItem disabled value="dis-2" id="dis2" />
                <label htmlFor="dis2" className="text-sm text-muted-foreground">Disabled checked</label>
              </div>
            </RadioGroup>
          </ExampleSection>

          <ExampleSection 
            title="All States" 
            code={`// States: Default, Focus, Error, Error Focus, Disabled`}
          >
            <div className="grid grid-cols-5 gap-4 text-center text-xs text-muted-foreground">
              <div>Default</div>
              <div>Focus</div>
              <div>Error</div>
              <div>Error Focus</div>
              <div>Disabled</div>
              <RadioGroup><RadioGroupItem value="a" /></RadioGroup>
              <RadioGroup><RadioGroupItem value="b" /></RadioGroup>
              <RadioGroup><RadioGroupItem error value="c" /></RadioGroup>
              <RadioGroup><RadioGroupItem error value="d" /></RadioGroup>
              <RadioGroup><RadioGroupItem disabled value="e" /></RadioGroup>
              <RadioGroup defaultValue="f"><RadioGroupItem value="f" /></RadioGroup>
              <RadioGroup defaultValue="g"><RadioGroupItem value="g" /></RadioGroup>
              <RadioGroup defaultValue="h"><RadioGroupItem error value="h" /></RadioGroup>
              <RadioGroup defaultValue="i"><RadioGroupItem error value="i" /></RadioGroup>
              <RadioGroup defaultValue="j"><RadioGroupItem disabled value="j" /></RadioGroup>
            </div>
          </ExampleSection>
        </section>

        {/* ==================== BADGE ==================== */}
        <section className="space-y-8">
          <div>
            <h2 className="text-2xl font-semibold tracking-tight">Badge</h2>
            <p className="text-muted-foreground mt-1">Displays a badge with semantic colors and optional icons.</p>
          </div>

          {/* Preview */}
          <div className="rounded-xl border bg-card p-8 flex items-center justify-center gap-4 flex-wrap">
            <Badge>Neutral</Badge>
            <Badge variant="info">Info</Badge>
            <Badge variant="success">Success</Badge>
            <Badge variant="warning">Warning</Badge>
            <Badge variant="critical">Critical</Badge>
          </div>

          <ExampleSection 
            title="Tones (Subtle)" 
            code={`<Badge variant="neutral">Neutral</Badge>
<Badge variant="info">Info</Badge>
<Badge variant="success">Success</Badge>
<Badge variant="warning">Warning</Badge>
<Badge variant="critical">Critical</Badge>`}
          >
            <div className="flex gap-2 flex-wrap">
              <Badge variant="neutral">Neutral</Badge>
              <Badge variant="info">Info</Badge>
              <Badge variant="success">Success</Badge>
              <Badge variant="warning">Warning</Badge>
              <Badge variant="critical">Critical</Badge>
            </div>
          </ExampleSection>

          <ExampleSection 
            title="Tones (Solid)" 
            code={`<Badge variant="neutral-solid">Neutral</Badge>
<Badge variant="info-solid">Info</Badge>
<Badge variant="success-solid">Success</Badge>
<Badge variant="warning-solid">Warning</Badge>
<Badge variant="critical-solid">Critical</Badge>`}
          >
            <div className="flex gap-2 flex-wrap">
              <Badge variant="neutral-solid">Neutral</Badge>
              <Badge variant="info-solid">Info</Badge>
              <Badge variant="success-solid">Success</Badge>
              <Badge variant="warning-solid">Warning</Badge>
              <Badge variant="critical-solid">Critical</Badge>
            </div>
          </ExampleSection>

          <ExampleSection 
            title="With Icons" 
            code={`<Badge variant="success" icon={<CheckIcon />}>Completed</Badge>
<Badge variant="critical" icon={<AlertIcon />}>Error</Badge>
<Badge variant="info" icon={<InfoIcon />}>Information</Badge>`}
          >
            <div className="flex gap-2 flex-wrap">
              <Badge variant="success" icon={<CheckIcon />}>Completed</Badge>
              <Badge variant="critical" icon={<AlertIcon />}>Error</Badge>
              <Badge variant="info" icon={<InfoIcon />}>Information</Badge>
            </div>
          </ExampleSection>

          <ExampleSection 
            title="Sizes" 
            code={`<Badge size="sm">Small</Badge>
<Badge size="default">Default</Badge>`}
          >
            <div className="flex gap-2 items-center">
              <Badge size="sm">Small</Badge>
              <Badge size="default">Default</Badge>
            </div>
          </ExampleSection>

          <ExampleSection 
            title="All Variants Grid" 
            code={`// 5 tones × subtle/solid × 2 sizes`}
          >
            <div className="space-y-4">
              <div className="text-xs text-muted-foreground font-medium">Subtle</div>
              <div className="grid grid-cols-5 gap-2">
                <Badge variant="neutral">Label</Badge>
                <Badge variant="info">Label</Badge>
                <Badge variant="success">Label</Badge>
                <Badge variant="warning">Label</Badge>
                <Badge variant="critical">Label</Badge>
              </div>
              <div className="text-xs text-muted-foreground font-medium">Solid</div>
              <div className="grid grid-cols-5 gap-2">
                <Badge variant="neutral-solid">Label</Badge>
                <Badge variant="info-solid">Label</Badge>
                <Badge variant="success-solid">Label</Badge>
                <Badge variant="warning-solid">Label</Badge>
                <Badge variant="critical-solid">Label</Badge>
              </div>
              <div className="text-xs text-muted-foreground font-medium">With Icons (Subtle)</div>
              <div className="grid grid-cols-5 gap-2">
                <Badge variant="neutral" icon={<CheckIcon />}>Label</Badge>
                <Badge variant="info" icon={<InfoIcon />}>Label</Badge>
                <Badge variant="success" icon={<CheckIcon />}>Label</Badge>
                <Badge variant="warning" icon={<AlertIcon />}>Label</Badge>
                <Badge variant="critical" icon={<AlertIcon />}>Label</Badge>
              </div>
              <div className="text-xs text-muted-foreground font-medium">With Icons (Solid)</div>
              <div className="grid grid-cols-5 gap-2">
                <Badge variant="neutral-solid" icon={<CheckIcon />}>Label</Badge>
                <Badge variant="info-solid" icon={<InfoIcon />}>Label</Badge>
                <Badge variant="success-solid" icon={<CheckIcon />}>Label</Badge>
                <Badge variant="warning-solid" icon={<AlertIcon />}>Label</Badge>
                <Badge variant="critical-solid" icon={<AlertIcon />}>Label</Badge>
              </div>
            </div>
          </ExampleSection>
        </section>

        {/* ==================== PROPS TABLES ==================== */}
        <section className="space-y-8">
          <h2 className="text-2xl font-semibold tracking-tight">Props Reference</h2>
          
          {/* Switch Props */}
          <div className="space-y-4">
            <h3 className="text-lg font-medium">Switch</h3>
            <div className="rounded-lg border overflow-hidden">
              <table className="w-full text-sm">
                <thead className="bg-muted/50">
                  <tr>
                    <th className="text-left p-4 font-medium">Prop</th>
                    <th className="text-left p-4 font-medium">Type</th>
                    <th className="text-left p-4 font-medium">Description</th>
                  </tr>
                </thead>
                <tbody className="divide-y">
                  <tr>
                    <td className="p-4 font-mono text-xs">checked</td>
                    <td className="p-4 font-mono text-xs text-muted-foreground">boolean</td>
                    <td className="p-4 text-muted-foreground">Controlled checked state</td>
                  </tr>
                  <tr>
                    <td className="p-4 font-mono text-xs">onCheckedChange</td>
                    <td className="p-4 font-mono text-xs text-muted-foreground">(checked: boolean) =&gt; void</td>
                    <td className="p-4 text-muted-foreground">Called when checked state changes</td>
                  </tr>
                  <tr>
                    <td className="p-4 font-mono text-xs">disabled</td>
                    <td className="p-4 font-mono text-xs text-muted-foreground">boolean</td>
                    <td className="p-4 text-muted-foreground">Disables the switch</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>

          {/* Checkbox Props */}
          <div className="space-y-4">
            <h3 className="text-lg font-medium">Checkbox</h3>
            <div className="rounded-lg border overflow-hidden">
              <table className="w-full text-sm">
                <thead className="bg-muted/50">
                  <tr>
                    <th className="text-left p-4 font-medium">Prop</th>
                    <th className="text-left p-4 font-medium">Type</th>
                    <th className="text-left p-4 font-medium">Description</th>
                  </tr>
                </thead>
                <tbody className="divide-y">
                  <tr>
                    <td className="p-4 font-mono text-xs">checked</td>
                    <td className="p-4 font-mono text-xs text-muted-foreground">boolean | "indeterminate"</td>
                    <td className="p-4 text-muted-foreground">Controlled checked state</td>
                  </tr>
                  <tr>
                    <td className="p-4 font-mono text-xs">error</td>
                    <td className="p-4 font-mono text-xs text-muted-foreground">boolean</td>
                    <td className="p-4 text-muted-foreground">Shows error styling</td>
                  </tr>
                  <tr>
                    <td className="p-4 font-mono text-xs">disabled</td>
                    <td className="p-4 font-mono text-xs text-muted-foreground">boolean</td>
                    <td className="p-4 text-muted-foreground">Disables the checkbox</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>

          {/* Radio Props */}
          <div className="space-y-4">
            <h3 className="text-lg font-medium">RadioGroupItem</h3>
            <div className="rounded-lg border overflow-hidden">
              <table className="w-full text-sm">
                <thead className="bg-muted/50">
                  <tr>
                    <th className="text-left p-4 font-medium">Prop</th>
                    <th className="text-left p-4 font-medium">Type</th>
                    <th className="text-left p-4 font-medium">Description</th>
                  </tr>
                </thead>
                <tbody className="divide-y">
                  <tr>
                    <td className="p-4 font-mono text-xs">value</td>
                    <td className="p-4 font-mono text-xs text-muted-foreground">string</td>
                    <td className="p-4 text-muted-foreground">Value for the radio item (required)</td>
                  </tr>
                  <tr>
                    <td className="p-4 font-mono text-xs">error</td>
                    <td className="p-4 font-mono text-xs text-muted-foreground">boolean</td>
                    <td className="p-4 text-muted-foreground">Shows error styling</td>
                  </tr>
                  <tr>
                    <td className="p-4 font-mono text-xs">disabled</td>
                    <td className="p-4 font-mono text-xs text-muted-foreground">boolean</td>
                    <td className="p-4 text-muted-foreground">Disables the radio item</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>

          {/* Badge Props */}
          <div className="space-y-4">
            <h3 className="text-lg font-medium">Badge</h3>
            <div className="rounded-lg border overflow-hidden">
              <table className="w-full text-sm">
                <thead className="bg-muted/50">
                  <tr>
                    <th className="text-left p-4 font-medium">Prop</th>
                    <th className="text-left p-4 font-medium">Type</th>
                    <th className="text-left p-4 font-medium">Description</th>
                  </tr>
                </thead>
                <tbody className="divide-y">
                  <tr>
                    <td className="p-4 font-mono text-xs">variant</td>
                    <td className="p-4 font-mono text-xs text-muted-foreground">"neutral" | "info" | "success" | "warning" | "critical" | "*-solid"</td>
                    <td className="p-4 text-muted-foreground">Color variant</td>
                  </tr>
                  <tr>
                    <td className="p-4 font-mono text-xs">size</td>
                    <td className="p-4 font-mono text-xs text-muted-foreground">"sm" | "default"</td>
                    <td className="p-4 text-muted-foreground">Badge size</td>
                  </tr>
                  <tr>
                    <td className="p-4 font-mono text-xs">icon</td>
                    <td className="p-4 font-mono text-xs text-muted-foreground">ReactNode</td>
                    <td className="p-4 text-muted-foreground">Icon to display before label</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </section>

      </div>
    </div>
  );
}
