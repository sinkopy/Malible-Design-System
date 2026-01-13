import { Input } from "@/components/ui/input";
import { Timestamp } from "@/components/docs";
import { useState } from "react";

// Icons (inline SVGs to avoid dependency)
const SearchIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <circle cx="11" cy="11" r="8"/><path d="m21 21-4.3-4.3"/>
  </svg>
);

const XIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M18 6 6 18"/><path d="m6 6 12 12"/>
  </svg>
);

const MailIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <rect width="20" height="16" x="2" y="4" rx="2"/><path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"/>
  </svg>
);

const LockIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <rect width="18" height="11" x="3" y="11" rx="2" ry="2"/><path d="M7 11V7a5 5 0 0 1 10 0v4"/>
  </svg>
);

const EyeIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M2 12s3-7 10-7 10 7 10 7-3 7-10 7-10-7-10-7Z"/><circle cx="12" cy="12" r="3"/>
  </svg>
);

const EyeOffIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M9.88 9.88a3 3 0 1 0 4.24 4.24"/><path d="M10.73 5.08A10.43 10.43 0 0 1 12 5c7 0 10 7 10 7a13.16 13.16 0 0 1-1.67 2.68"/><path d="M6.61 6.61A13.526 13.526 0 0 0 2 12s3 7 10 7a9.74 9.74 0 0 0 5.39-1.61"/><line x1="2" x2="22" y1="2" y2="22"/>
  </svg>
);

const DollarIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <line x1="12" x2="12" y1="2" y2="22"/><path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"/>
  </svg>
);

// Code Block Component
function CodeBlock({ children, className = "" }: { children: string; className?: string }) {
  return (
    <div className={`rounded-lg border bg-zinc-950 p-4 overflow-x-auto ${className}`}>
      <pre className="text-sm text-zinc-100 font-mono">{children}</pre>
    </div>
  );
}

// Example Section Component
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

export default function InputDocs() {
  const [showPassword, setShowPassword] = useState(false);
  const [searchValue, setSearchValue] = useState("");

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
            <span className="text-foreground">Input</span>
          </div>
          <h1 className="text-3xl font-bold tracking-tight text-foreground">Input</h1>
          <p className="text-muted-foreground mt-2 text-lg">
            Displays a form input field or a component that looks like an input field.
          </p>
        </div>
      </div>

      {/* Content */}
      <div className="container max-w-4xl py-10 px-6 space-y-16">
        
        {/* Preview */}
        <section>
          <div className="rounded-xl border bg-card p-8 flex items-center justify-center">
            <Input placeholder="Email" className="max-w-sm" />
          </div>
        </section>

        {/* Installation */}
        <section className="space-y-4">
          <h2 className="text-2xl font-semibold tracking-tight">Installation</h2>
          <CodeBlock>npx shadcn@latest add input</CodeBlock>
        </section>

        {/* Usage */}
        <section className="space-y-4">
          <h2 className="text-2xl font-semibold tracking-tight">Usage</h2>
          <CodeBlock>{`import { Input } from "@/components/ui/input"

export default function Example() {
  return <Input type="email" placeholder="Email" />
}`}</CodeBlock>
        </section>

        {/* Examples */}
        <section className="space-y-10">
          <h2 className="text-2xl font-semibold tracking-tight">Examples</h2>

          <ExampleSection 
            title="Default" 
            code={`<Input placeholder="Enter your email" />`}
          >
            <Input placeholder="Enter your email" className="max-w-sm" />
          </ExampleSection>

          <ExampleSection 
            title="With Help Text" 
            code={`<Input 
  placeholder="you@example.com" 
  helpText="We'll never share your email."
/>`}
          >
            <Input 
              placeholder="you@example.com" 
              helpText="We'll never share your email with anyone else."
              className="max-w-sm" 
            />
          </ExampleSection>

          <ExampleSection 
            title="Error State" 
            code={`<Input 
  placeholder="Password" 
  type="password"
  error
  errorMessage="Password must be at least 8 characters"
/>`}
          >
            <Input 
              placeholder="Password" 
              type="password"
              error
              errorMessage="Password must be at least 8 characters"
              className="max-w-sm" 
            />
          </ExampleSection>

          <ExampleSection 
            title="With Prefix Icon" 
            code={`<Input 
  placeholder="Search..." 
  prefix={<SearchIcon />}
/>`}
          >
            <Input 
              placeholder="Search..." 
              prefix={<SearchIcon />}
              className="max-w-sm" 
            />
          </ExampleSection>

          <ExampleSection 
            title="With Clear Button" 
            code={`const [value, setValue] = useState("");

<Input 
  value={value}
  onChange={(e) => setValue(e.target.value)}
  prefix={<SearchIcon />}
  suffix={value && (
    <button onClick={() => setValue("")}>
      <XIcon />
    </button>
  )}
/>`}
          >
            <Input 
              placeholder="Search..." 
              value={searchValue}
              onChange={(e) => setSearchValue(e.target.value)}
              prefix={<SearchIcon />}
              suffix={
                searchValue ? (
                  <button 
                    onClick={() => setSearchValue("")}
                    className="hover:text-foreground transition-colors"
                  >
                    <XIcon />
                  </button>
                ) : null
              }
              className="max-w-sm" 
            />
          </ExampleSection>

          <ExampleSection 
            title="Password with Toggle" 
            code={`const [show, setShow] = useState(false);

<Input 
  type={show ? "text" : "password"}
  prefix={<LockIcon />}
  suffix={
    <button onClick={() => setShow(!show)}>
      {show ? <EyeOffIcon /> : <EyeIcon />}
    </button>
  }
/>`}
          >
            <Input 
              placeholder="Enter password" 
              type={showPassword ? "text" : "password"}
              prefix={<LockIcon />}
              suffix={
                <button 
                  onClick={() => setShowPassword(!showPassword)}
                  className="hover:text-foreground transition-colors"
                >
                  {showPassword ? <EyeOffIcon /> : <EyeIcon />}
                </button>
              }
              className="max-w-sm" 
            />
          </ExampleSection>

          <ExampleSection 
            title="With Prefix Icon (Currency)" 
            code={`<Input 
  placeholder="0.00" 
  prefix={<DollarIcon />}
  type="number"
/>`}
          >
            <Input 
              placeholder="0.00" 
              prefix={<DollarIcon />}
              type="number"
              className="max-w-sm" 
            />
          </ExampleSection>

          <ExampleSection 
            title="Disabled" 
            code={`<Input placeholder="Disabled input" disabled />`}
          >
            <Input 
              placeholder="Disabled input" 
              disabled
              className="max-w-sm" 
            />
          </ExampleSection>

          <ExampleSection 
            title="Read Only" 
            code={`<Input value="This value cannot be edited" readOnly />`}
          >
            <Input 
              value="This value cannot be edited" 
              readOnly
              className="max-w-sm" 
            />
          </ExampleSection>

          {/* All States */}
          <div className="space-y-4">
            <h3 className="text-lg font-medium">All States</h3>
            <div className="rounded-lg border p-6 bg-background">
              <div className="grid gap-6 max-w-sm">
                <div>
                  <span className="text-xs text-muted-foreground mb-2 block font-medium">Default</span>
                  <Input placeholder="Default state" />
                </div>
                <div>
                  <span className="text-xs text-muted-foreground mb-2 block font-medium">With Value (click to focus)</span>
                  <Input defaultValue="Entered value" />
                </div>
                <div>
                  <span className="text-xs text-muted-foreground mb-2 block font-medium">Error</span>
                  <Input error errorMessage="This field is required" placeholder="Error state" />
                </div>
                <div>
                  <span className="text-xs text-muted-foreground mb-2 block font-medium">Disabled</span>
                  <Input disabled placeholder="Disabled state" />
                </div>
                <div>
                  <span className="text-xs text-muted-foreground mb-2 block font-medium">Read Only</span>
                  <Input readOnly value="Read only value" />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Props */}
        <section className="space-y-4">
          <h2 className="text-2xl font-semibold tracking-tight">Props</h2>
          <div className="rounded-lg border overflow-hidden">
            <table className="w-full text-sm">
              <thead className="bg-muted/50">
                <tr>
                  <th className="text-left p-4 font-medium">Prop</th>
                  <th className="text-left p-4 font-medium">Type</th>
                  <th className="text-left p-4 font-medium">Default</th>
                  <th className="text-left p-4 font-medium">Description</th>
                </tr>
              </thead>
              <tbody className="divide-y">
                <tr>
                  <td className="p-4 font-mono text-xs">error</td>
                  <td className="p-4 font-mono text-xs text-muted-foreground">boolean</td>
                  <td className="p-4 font-mono text-xs text-muted-foreground">false</td>
                  <td className="p-4 text-muted-foreground">Applies error styling with red border and ring</td>
                </tr>
                <tr>
                  <td className="p-4 font-mono text-xs">errorMessage</td>
                  <td className="p-4 font-mono text-xs text-muted-foreground">string</td>
                  <td className="p-4 font-mono text-xs text-muted-foreground">—</td>
                  <td className="p-4 text-muted-foreground">Error message displayed below input</td>
                </tr>
                <tr>
                  <td className="p-4 font-mono text-xs">helpText</td>
                  <td className="p-4 font-mono text-xs text-muted-foreground">string</td>
                  <td className="p-4 font-mono text-xs text-muted-foreground">—</td>
                  <td className="p-4 text-muted-foreground">Help text below input (hidden when error)</td>
                </tr>
                <tr>
                  <td className="p-4 font-mono text-xs">prefix</td>
                  <td className="p-4 font-mono text-xs text-muted-foreground">ReactNode</td>
                  <td className="p-4 font-mono text-xs text-muted-foreground">—</td>
                  <td className="p-4 text-muted-foreground">Element rendered before input (icon, text)</td>
                </tr>
                <tr>
                  <td className="p-4 font-mono text-xs">suffix</td>
                  <td className="p-4 font-mono text-xs text-muted-foreground">ReactNode</td>
                  <td className="p-4 font-mono text-xs text-muted-foreground">—</td>
                  <td className="p-4 text-muted-foreground">Element rendered after input (clear button, icon)</td>
                </tr>
              </tbody>
            </table>
          </div>
          <p className="text-sm text-muted-foreground">
            Also accepts all standard HTML input attributes including <code className="text-xs bg-muted px-1 py-0.5 rounded">type</code>, <code className="text-xs bg-muted px-1 py-0.5 rounded">placeholder</code>, <code className="text-xs bg-muted px-1 py-0.5 rounded">disabled</code>, <code className="text-xs bg-muted px-1 py-0.5 rounded">readOnly</code>, etc.
          </p>
        </section>

        {/* Design Tokens */}
        <section className="space-y-4">
          <h2 className="text-2xl font-semibold tracking-tight">Design Tokens</h2>
          <div className="rounded-lg border overflow-hidden">
            <table className="w-full text-sm">
              <thead className="bg-muted/50">
                <tr>
                  <th className="text-left p-4 font-medium">Token</th>
                  <th className="text-left p-4 font-medium">Value</th>
                  <th className="text-left p-4 font-medium">Usage</th>
                </tr>
              </thead>
              <tbody className="divide-y">
                <tr>
                  <td className="p-4 font-mono text-xs">--background</td>
                  <td className="p-4 font-mono text-xs text-muted-foreground">#ffffff</td>
                  <td className="p-4 text-muted-foreground">Default background</td>
                </tr>
                <tr>
                  <td className="p-4 font-mono text-xs">--secondary</td>
                  <td className="p-4 font-mono text-xs text-muted-foreground">#fafafa</td>
                  <td className="p-4 text-muted-foreground">Hover/focus background</td>
                </tr>
                <tr>
                  <td className="p-4 font-mono text-xs">--muted</td>
                  <td className="p-4 font-mono text-xs text-muted-foreground">#e5e5e5</td>
                  <td className="p-4 text-muted-foreground">Disabled background</td>
                </tr>
                <tr>
                  <td className="p-4 font-mono text-xs">--border</td>
                  <td className="p-4 font-mono text-xs text-muted-foreground">#e5e5e5</td>
                  <td className="p-4 text-muted-foreground">Default border</td>
                </tr>
                <tr>
                  <td className="p-4 font-mono text-xs">--input</td>
                  <td className="p-4 font-mono text-xs text-muted-foreground">#d4d4d4</td>
                  <td className="p-4 text-muted-foreground">Hover border</td>
                </tr>
                <tr>
                  <td className="p-4 font-mono text-xs">--ring</td>
                  <td className="p-4 font-mono text-xs text-muted-foreground">#007ab7</td>
                  <td className="p-4 text-muted-foreground">Focus border + ring</td>
                </tr>
                <tr>
                  <td className="p-4 font-mono text-xs">--destructive</td>
                  <td className="p-4 font-mono text-xs text-muted-foreground">#bf1616</td>
                  <td className="p-4 text-muted-foreground">Error border + ring</td>
                </tr>
              </tbody>
            </table>
          </div>
        </section>

      </div>
      <Timestamp date="13-01-2026" />
    </div>
  );
}
