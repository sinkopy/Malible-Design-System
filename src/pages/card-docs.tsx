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

      <DocSection title="Content Only" description="Minimal card with just content.">
        <ComponentExample
          code={`<Card>
  <CardContent className="pt-6">
    <p>A simple card with only content, no header or footer.</p>
  </CardContent>
</Card>`}
        >
          <Card className="w-[350px]">
            <CardContent className="pt-6">
              <p className="text-sm text-muted-foreground">A simple card with only content, no header or footer.</p>
            </CardContent>
          </Card>
        </ComponentExample>
      </DocSection>

      <DocSection title="Anatomy">
        <div className="rounded-lg border overflow-hidden">
          <table className="w-full text-sm">
            <thead className="bg-muted/50">
              <tr>
                <th className="text-left p-4 font-medium">Part</th>
                <th className="text-left p-4 font-medium">Required</th>
                <th className="text-left p-4 font-medium">Description</th>
              </tr>
            </thead>
            <tbody className="divide-y">
              <tr>
                <td className="p-4"><code className="text-sm bg-muted px-1.5 py-0.5 rounded">Card</code></td>
                <td className="p-4">Yes</td>
                <td className="p-4 text-muted-foreground">Container wrapper</td>
              </tr>
              <tr>
                <td className="p-4"><code className="text-sm bg-muted px-1.5 py-0.5 rounded">CardHeader</code></td>
                <td className="p-4">No</td>
                <td className="p-4 text-muted-foreground">Groups title and description</td>
              </tr>
              <tr>
                <td className="p-4"><code className="text-sm bg-muted px-1.5 py-0.5 rounded">CardTitle</code></td>
                <td className="p-4">No</td>
                <td className="p-4 text-muted-foreground">Primary heading (TT Commons 18px/500)</td>
              </tr>
              <tr>
                <td className="p-4"><code className="text-sm bg-muted px-1.5 py-0.5 rounded">CardDescription</code></td>
                <td className="p-4">No</td>
                <td className="p-4 text-muted-foreground">Secondary text (Inter 14px/400)</td>
              </tr>
              <tr>
                <td className="p-4"><code className="text-sm bg-muted px-1.5 py-0.5 rounded">CardContent</code></td>
                <td className="p-4">No</td>
                <td className="p-4 text-muted-foreground">Main body content</td>
              </tr>
              <tr>
                <td className="p-4"><code className="text-sm bg-muted px-1.5 py-0.5 rounded">CardFooter</code></td>
                <td className="p-4">No</td>
                <td className="p-4 text-muted-foreground">Actions area (horizontal layout)</td>
              </tr>
            </tbody>
          </table>
        </div>
      </DocSection>
    </DocPage>
  )
}
