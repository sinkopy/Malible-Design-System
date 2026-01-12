import { Button } from "@/components/ui/button"

export default function ButtonPage() {
  return (
    <div className="container relative pb-10">
      <div className="mx-auto flex max-w-[980px] flex-col items-start gap-2 px-4 py-8 md:py-12 md:pb-8 lg:py-24 lg:pb-20">
        <h1 className="text-3xl font-bold leading-tight tracking-tighter md:text-5xl lg:leading-[1.1]">
          Button
        </h1>
        <p className="max-w-[750px] text-lg text-muted-foreground sm:text-xl">
          Displays a button or a component that looks like a button.
        </p>
      </div>

      <div className="mx-auto max-w-[980px] px-4">
        {/* Preview Section */}
        <div className="space-y-4">
          <div className="flex items-center justify-between">
            <h2 className="text-2xl font-bold tracking-tight">Examples</h2>
          </div>

          {/* Default Example */}
          <div className="space-y-4">
            <div>
              <h3 className="text-lg font-semibold">Default</h3>
              <p className="text-sm text-muted-foreground">
                The default button style.
              </p>
            </div>
            <div className="flex items-center justify-center rounded-lg border bg-background p-8">
              <Button>Button</Button>
            </div>
            <div className="rounded-lg bg-muted px-4 py-3">
              <code className="text-sm">
                {`<Button>Button</Button>`}
              </code>
            </div>
          </div>

          {/* Secondary */}
          <div className="space-y-4">
            <div>
              <h3 className="text-lg font-semibold">Secondary</h3>
              <p className="text-sm text-muted-foreground">
                Secondary button style with subtle background.
              </p>
            </div>
            <div className="flex items-center justify-center rounded-lg border bg-background p-8">
              <Button variant="secondary">Secondary</Button>
            </div>
            <div className="rounded-lg bg-muted px-4 py-3">
              <code className="text-sm">
                {`<Button variant="secondary">Secondary</Button>`}
              </code>
            </div>
          </div>

          {/* Destructive */}
          <div className="space-y-4">
            <div>
              <h3 className="text-lg font-semibold">Destructive</h3>
              <p className="text-sm text-muted-foreground">
                For destructive actions like deleting data.
              </p>
            </div>
            <div className="flex items-center justify-center rounded-lg border bg-background p-8">
              <Button variant="destructive">Destructive</Button>
            </div>
            <div className="rounded-lg bg-muted px-4 py-3">
              <code className="text-sm">
                {`<Button variant="destructive">Destructive</Button>`}
              </code>
            </div>
          </div>

          {/* Ghost */}
          <div className="space-y-4">
            <div>
              <h3 className="text-lg font-semibold">Ghost</h3>
              <p className="text-sm text-muted-foreground">
                Transparent button with hover effect.
              </p>
            </div>
            <div className="flex items-center justify-center rounded-lg border bg-background p-8">
              <Button variant="ghost">Ghost</Button>
            </div>
            <div className="rounded-lg bg-muted px-4 py-3">
              <code className="text-sm">
                {`<Button variant="ghost">Ghost</Button>`}
              </code>
            </div>
          </div>

          {/* Sizes */}
          <div className="space-y-4">
            <div>
              <h3 className="text-lg font-semibold">Sizes</h3>
              <p className="text-sm text-muted-foreground">
                Available button sizes: sm, default, and lg.
              </p>
            </div>
            <div className="flex flex-wrap items-center justify-center gap-4 rounded-lg border bg-background p-8">
              <Button size="sm">Small</Button>
              <Button size="default">Default</Button>
              <Button size="lg">Large</Button>
            </div>
            <div className="rounded-lg bg-muted px-4 py-3">
              <code className="text-sm block">
                {`<Button size="sm">Small</Button>
<Button size="default">Default</Button>
<Button size="lg">Large</Button>`}
              </code>
            </div>
          </div>

          {/* With Icon */}
          <div className="space-y-4">
            <div>
              <h3 className="text-lg font-semibold">With Icon</h3>
              <p className="text-sm text-muted-foreground">
                Buttons can include icons for added context.
              </p>
            </div>
            <div className="flex flex-wrap items-center justify-center gap-4 rounded-lg border bg-background p-8">
              <Button>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  viewBox="0 0 256 256"
                  fill="currentColor"
                >
                  <path d="M224,177.32V78.68a8,8,0,0,0-4.07-6.94l-88-49.5a8,8,0,0,0-7.86,0l-88,49.5A8,8,0,0,0,32,78.68v98.64a8,8,0,0,0,4.07,6.94l88,49.5a8,8,0,0,0,7.86,0l88-49.5A8,8,0,0,0,224,177.32Z"></path>
                </svg>
                With Icon
              </Button>
              <Button variant="secondary">
                Send Email
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  viewBox="0 0 256 256"
                  fill="currentColor"
                >
                  <path d="M224,48H32a8,8,0,0,0-8,8V192a16,16,0,0,0,16,16H216a16,16,0,0,0,16-16V56A8,8,0,0,0,224,48Zm-96,85.15L52.57,64H203.43ZM98.71,128,40,181.81V74.19Zm11.84,10.85,12,11.05a8,8,0,0,0,10.82,0l12-11.05,58,53.15H52.57ZM157.29,128,216,74.18V181.82Z"></path>
                </svg>
              </Button>
            </div>
            <div className="rounded-lg bg-muted px-4 py-3">
              <code className="text-sm block whitespace-pre">
{`<Button>
  <MailIcon className="w-4 h-4" />
  Login with Email
</Button>`}
              </code>
            </div>
          </div>

          {/* Loading */}
          <div className="space-y-4">
            <div>
              <h3 className="text-lg font-semibold">Loading</h3>
              <p className="text-sm text-muted-foreground">
                Disable interaction during loading states.
              </p>
            </div>
            <div className="flex flex-wrap items-center justify-center gap-4 rounded-lg border bg-background p-8">
              <Button disabled>
                <svg
                  className="animate-spin -ml-1 mr-2 h-4 w-4"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                >
                  <circle
                    className="opacity-25"
                    cx="12"
                    cy="12"
                    r="10"
                    stroke="currentColor"
                    strokeWidth="4"
                  ></circle>
                  <path
                    className="opacity-75"
                    fill="currentColor"
                    d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                  ></path>
                </svg>
                Please wait
              </Button>
            </div>
            <div className="rounded-lg bg-muted px-4 py-3">
              <code className="text-sm block whitespace-pre">
{`<Button disabled>
  <Loader2 className="mr-2 h-4 w-4 animate-spin" />
  Please wait
</Button>`}
              </code>
            </div>
          </div>

          {/* As Child */}
          <div className="space-y-4">
            <div>
              <h3 className="text-lg font-semibold">As Child</h3>
              <p className="text-sm text-muted-foreground">
                Use <code className="text-sm">asChild</code> to render a different element while keeping button styles.
              </p>
            </div>
            <div className="flex items-center justify-center rounded-lg border bg-background p-8">
              <Button asChild>
                <a href="/login">Login</a>
              </Button>
            </div>
            <div className="rounded-lg bg-muted px-4 py-3">
              <code className="text-sm block whitespace-pre">
{`<Button asChild>
  <Link href="/login">Login</Link>
</Button>`}
              </code>
            </div>
          </div>
        </div>

        {/* Installation Section */}
        <div className="mt-16 space-y-4">
          <h2 className="text-2xl font-bold tracking-tight">Installation</h2>
          <div className="rounded-lg bg-muted px-4 py-3">
            <code className="text-sm">
              npx shadcn-ui@latest add button
            </code>
          </div>
        </div>

        {/* Usage Section */}
        <div className="mt-8 space-y-4">
          <h2 className="text-2xl font-bold tracking-tight">Usage</h2>
          <div className="rounded-lg bg-muted px-4 py-3">
            <code className="text-sm block whitespace-pre">
{`import { Button } from "@/components/ui/button"

export default function Example() {
  return <Button>Click me</Button>
}`}
            </code>
          </div>
        </div>

        {/* Props Table */}
        <div className="mt-8 space-y-4">
          <h2 className="text-2xl font-bold tracking-tight">Props</h2>
          <div className="overflow-hidden rounded-lg border">
            <table className="w-full text-sm">
              <thead>
                <tr className="border-b bg-muted/50">
                  <th className="px-4 py-3 text-left font-medium">Prop</th>
                  <th className="px-4 py-3 text-left font-medium">Type</th>
                  <th className="px-4 py-3 text-left font-medium">Default</th>
                  <th className="px-4 py-3 text-left font-medium">Description</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-b">
                  <td className="px-4 py-3 font-mono">variant</td>
                  <td className="px-4 py-3 font-mono text-muted-foreground">
                    "default" | "secondary" | "destructive" | "ghost"
                  </td>
                  <td className="px-4 py-3 font-mono text-muted-foreground">"default"</td>
                  <td className="px-4 py-3">The visual style of the button.</td>
                </tr>
                <tr className="border-b">
                  <td className="px-4 py-3 font-mono">size</td>
                  <td className="px-4 py-3 font-mono text-muted-foreground">
                    "sm" | "default" | "lg"
                  </td>
                  <td className="px-4 py-3 font-mono text-muted-foreground">"default"</td>
                  <td className="px-4 py-3">The size of the button.</td>
                </tr>
                <tr className="border-b">
                  <td className="px-4 py-3 font-mono">asChild</td>
                  <td className="px-4 py-3 font-mono text-muted-foreground">boolean</td>
                  <td className="px-4 py-3 font-mono text-muted-foreground">false</td>
                  <td className="px-4 py-3">
                    Change the default rendered element for the one passed as a child.
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  )
}
