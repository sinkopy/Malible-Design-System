import { DocPage, DocSection, ComponentExample } from "@/components/docs"
import { Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"

export default function CardDocs() {
  return (
    <DocPage
      category="Components"
      title="Card"
      description="A container component for grouping related content and actions."
    >
      <DocSection title="Examples" description="Common use cases and variations of the card component." level={2}>
        <DocSection title="Basic Card" description="Card with header, content, and description.">
          <ComponentExample
            code={`<Card>
  <CardHeader>
    <CardTitle>Card Title</CardTitle>
    <CardDescription>Card description goes here.</CardDescription>
  </CardHeader>
  <CardContent>
    <p>Card content goes here.</p>
  </CardContent>
</Card>`}
          >
            <Card className="w-[350px]">
              <CardHeader>
                <CardTitle>Card Title</CardTitle>
                <CardDescription>Card description goes here.</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground">Card content goes here.</p>
              </CardContent>
            </Card>
          </ComponentExample>
        </DocSection>

        <DocSection title="With Shadow" description="Add elevation using shadow utility classes.">
          <ComponentExample
            code={`<Card className="shadow-md">
  <CardHeader>
    <CardTitle>Elevated Card</CardTitle>
    <CardDescription>This card has shadow-md applied.</CardDescription>
  </CardHeader>
  <CardContent>
    <p>Shadows are applied on-demand, not baked in.</p>
  </CardContent>
</Card>`}
          >
            <Card className="w-[350px] shadow-md">
              <CardHeader>
                <CardTitle>Elevated Card</CardTitle>
                <CardDescription>This card has shadow-md applied.</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground">Shadows are applied on-demand, not baked in.</p>
              </CardContent>
            </Card>
          </ComponentExample>
        </DocSection>

        <DocSection title="With Footer" description="Card with action buttons in the footer.">
          <ComponentExample
            code={`<Card>
  <CardHeader>
    <CardTitle>Confirm Action</CardTitle>
    <CardDescription>Are you sure you want to proceed?</CardDescription>
  </CardHeader>
  <CardContent>
    <p>This action cannot be undone.</p>
  </CardContent>
  <CardFooter>
    <Button variant="secondary">Cancel</Button>
    <Button>Confirm</Button>
  </CardFooter>
</Card>`}
          >
            <Card className="w-[350px]">
              <CardHeader>
                <CardTitle>Confirm Action</CardTitle>
                <CardDescription>Are you sure you want to proceed?</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground">This action cannot be undone.</p>
              </CardContent>
              <CardFooter>
                <Button variant="secondary">Cancel</Button>
                <Button>Confirm</Button>
              </CardFooter>
            </Card>
          </ComponentExample>
        </DocSection>

        <DocSection title="Form Card" description="Card containing a form.">
          <ComponentExample
            code={`<Card className="shadow-md">
  <CardHeader>
    <CardTitle>Login</CardTitle>
    <CardDescription>Enter your credentials to continue.</CardDescription>
  </CardHeader>
  <CardContent className="space-y-4">
    <div className="space-y-2">
      <Label htmlFor="email">Email</Label>
      <Input id="email" type="email" placeholder="you@example.com" />
    </div>
    <div className="space-y-2">
      <Label htmlFor="password">Password</Label>
      <Input id="password" type="password" />
    </div>
  </CardContent>
  <CardFooter>
    <Button className="w-full">Sign in</Button>
  </CardFooter>
</Card>`}
          >
            <Card className="w-[350px] shadow-md">
              <CardHeader>
                <CardTitle>Login</CardTitle>
                <CardDescription>Enter your credentials to continue.</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="space-y-2">
                  <Label htmlFor="email">Email</Label>
                  <Input id="email" type="email" placeholder="you@example.com" />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="password">Password</Label>
                  <Input id="password" type="password" />
                </div>
              </CardContent>
              <CardFooter>
                <Button className="w-full">Sign in</Button>
              </CardFooter>
            </Card>
          </ComponentExample>
        </DocSection>
      </DocSection>

      <DocSection title="Reference" description="Technical details and configuration for the card component." level={2}>
        <DocSection title="Anatomy">
          <div className="rounded-lg border border-border/50 overflow-hidden">
            <table className="w-full text-sm">
              <thead className="bg-muted/30">
                <tr>
                  <th className="text-left p-4 font-medium uppercase tracking-wider text-[11px] text-muted-foreground">Part</th>
                  <th className="text-left p-4 font-medium uppercase tracking-wider text-[11px] text-muted-foreground">Required</th>
                  <th className="text-left p-4 font-medium uppercase tracking-wider text-[11px] text-muted-foreground">Description</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-border/50">
                <tr>
                  <td className="p-4"><code className="text-xs font-mono bg-muted/50 px-1.5 py-0.5 rounded text-info/80">Card</code></td>
                  <td className="p-4 text-muted-foreground text-[13px]">Yes</td>
                  <td className="p-4 text-muted-foreground text-[13px]">Main container component</td>
                </tr>
                <tr>
                  <td className="p-4"><code className="text-xs font-mono bg-muted/50 px-1.5 py-0.5 rounded text-info/80">CardHeader</code></td>
                  <td className="p-4 text-muted-foreground text-[13px]">No</td>
                  <td className="p-4 text-muted-foreground text-[13px]">Groups title and description</td>
                </tr>
                <tr>
                  <td className="p-4"><code className="text-xs font-mono bg-muted/50 px-1.5 py-0.5 rounded text-info/80">CardTitle</code></td>
                  <td className="p-4 text-muted-foreground text-[13px]">No</td>
                  <td className="p-4 text-muted-foreground text-[13px]">Primary heading component</td>
                </tr>
                <tr>
                  <td className="p-4"><code className="text-xs font-mono bg-muted/50 px-1.5 py-0.5 rounded text-info/80">CardDescription</code></td>
                  <td className="p-4 text-muted-foreground text-[13px]">No</td>
                  <td className="p-4 text-muted-foreground text-[13px]">Secondary text component</td>
                </tr>
                <tr>
                  <td className="p-4"><code className="text-xs font-mono bg-muted/50 px-1.5 py-0.5 rounded text-info/80">CardContent</code></td>
                  <td className="p-4 text-muted-foreground text-[13px]">No</td>
                  <td className="p-4 text-muted-foreground text-[13px]">Main body content area</td>
                </tr>
                <tr>
                  <td className="p-4"><code className="text-xs font-mono bg-muted/50 px-1.5 py-0.5 rounded text-info/80">CardFooter</code></td>
                  <td className="p-4 text-muted-foreground text-[13px]">No</td>
                  <td className="p-4 text-muted-foreground text-[13px]">Action buttons area</td>
                </tr>
              </tbody>
            </table>
          </div>
        </DocSection>

        <DocSection title="Best Practices">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-[14px]">
            <div className="space-y-4 p-4 rounded-lg bg-success/5 border border-success/10">
              <div className="flex gap-3">
                <span className="text-success font-bold">✅ Do:</span>
                <p className="text-muted-foreground leading-snug">Maintain clear hierarchy: CardTitle for heading, CardDescription for subtitle.</p>
              </div>
              <div className="flex gap-3">
                <span className="text-success font-bold">✅ Do:</span>
                <p className="text-muted-foreground leading-snug">Use CardFooter for actions, typically aligning buttons to the right.</p>
              </div>
            </div>
            <div className="space-y-4 p-4 rounded-lg bg-destructive/5 border border-destructive/10">
              <div className="flex gap-3">
                <span className="text-destructive font-bold">❌ Don't:</span>
                <p className="text-muted-foreground leading-snug">Apply shadows to every card—it creates visual noise. Use sparingly.</p>
              </div>
              <div className="flex gap-3">
                <span className="text-destructive font-bold">❌ Don't:</span>
                <p className="text-muted-foreground leading-snug">Cram too much content into one card—split into sections or multiple cards.</p>
              </div>
            </div>
          </div>
        </DocSection>
      </DocSection>
    </DocPage>
  )
}
