import { DocPage, DocSection, ComponentExample, Timestamp } from "@/components/docs"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs"
import { Breadcrumb, BreadcrumbList, BreadcrumbItem, BreadcrumbLink, BreadcrumbSeparator, BreadcrumbPage } from "@/components/ui/breadcrumb"
import { Alert, AlertTitle, AlertDescription } from "@/components/ui/alert"
import { Info, User, Bell } from "@phosphor-icons/react"

export default function CompositionsDocs() {
  return (
    <DocPage
      title="Compositions"
      description="Real-world patterns showing how components work together."
      category="Foundation"
    >
      <DocSection title="Examples" description="Common real-world patterns showing how components work together." level={2}>
        <DocSection title="Form Layouts" description="Common form composition patterns.">
          <ComponentExample
            code={`<Card className="w-[400px]">
  <CardHeader>
    <CardTitle>Create Account</CardTitle>
    <CardDescription>Enter your details to sign up</CardDescription>
  </CardHeader>
  <CardContent className="space-y-4">
    <div className="space-y-2">
      <Label htmlFor="name">Name</Label>
      <Input id="name" placeholder="John Doe" />
    </div>
    <div className="space-y-2">
      <Label htmlFor="email">Email</Label>
      <Input 
        id="email" 
        type="email" 
        placeholder="john@example.com"
        helpText="We'll never share your email"
      />
    </div>
    <div className="space-y-2">
      <Label htmlFor="password">Password</Label>
      <Input 
        id="password" 
        type="password"
        error
        errorMessage="Must be at least 8 characters"
      />
    </div>
  </CardContent>
  <CardFooter>
    <Button variant="secondary">Cancel</Button>
    <Button>Create Account</Button>
  </CardFooter>
</Card>`}
          >
            <Card className="w-[400px]">
              <CardHeader>
                <CardTitle>Create Account</CardTitle>
                <CardDescription>Enter your details to sign up</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="space-y-2">
                  <Label htmlFor="comp-name">Name</Label>
                  <Input id="comp-name" placeholder="John Doe" />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="comp-email">Email</Label>
                  <Input
                    id="comp-email"
                    type="email"
                    placeholder="john@example.com"
                    helpText="We'll never share your email"
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="comp-password">Password</Label>
                  <Input
                    id="comp-password"
                    type="password"
                    error
                    errorMessage="Must be at least 8 characters"
                  />
                </div>
              </CardContent>
              <CardFooter>
                <Button variant="secondary">Cancel</Button>
                <Button>Create Account</Button>
              </CardFooter>
            </Card>
          </ComponentExample>
        </DocSection>

        <DocSection title="Button Groups" description="Multiple buttons for related actions.">
          <ComponentExample
            code={`<div className="flex items-center gap-2">
  <Button variant="secondary">Cancel</Button>
  <Button variant="destructive">Delete</Button>
  <Button font="mono" className="tracking-tight">Save</Button>
</div>`}
          >
            <div className="space-y-4">
              <div className="flex items-center gap-2">
                <Button variant="secondary">Cancel</Button>
                <Button variant="destructive">Delete</Button>
                <Button>Save Changes</Button>
              </div>
              <Button variant="secondary">
                <Bell size={16} />
                Notifications
                <Badge variant="destructive" size="sm" className="ml-2 font-mono">3</Badge>
              </Button>
            </div>
          </ComponentExample>
        </DocSection>

        <DocSection title="Card Patterns" description="Cards with rich headers and content.">
          <ComponentExample
            code={`<Card className="w-[350px]">
  <CardHeader>
    <div className="flex items-start justify-between">
      <div className="flex items-center gap-3">
        <Avatar>
          <AvatarFallback className="font-mono">JD</AvatarFallback>
        </Avatar>
        <div>
          <CardTitle className="text-base">John Doe</CardTitle>
          <CardDescription>john@example.com</CardDescription>
        </div>
      </div>
      <Badge size="sm">Active</Badge>
    </div>
  </CardHeader>
</Card>`}
          >
            <Card className="w-full max-w-sm">
              <CardHeader>
                <div className="flex items-start justify-between">
                  <div className="flex items-center gap-3">
                    <Avatar>
                      <AvatarFallback className="font-mono">JD</AvatarFallback>
                    </Avatar>
                    <div>
                      <CardTitle className="text-base">John Doe</CardTitle>
                      <CardDescription className="font-mono text-[10px] tracking-tight">john@example.com</CardDescription>
                    </div>
                  </div>
                  <Badge size="sm" variant="success">Active</Badge>
                </div>
              </CardHeader>
              <CardContent>
                <Tabs defaultValue="profile">
                  <TabsList variant="underline" className="w-full">
                    <TabsTrigger value="profile" variant="underline">Profile</TabsTrigger>
                    <TabsTrigger value="settings" variant="underline">Settings</TabsTrigger>
                  </TabsList>
                  <TabsContent value="profile" className="pt-4">
                    <p className="text-sm text-muted-foreground leading-relaxed">Customize your public profile, set your avatar, and manage your bio.</p>
                  </TabsContent>
                  <TabsContent value="settings" className="pt-4">
                    <p className="text-sm text-muted-foreground leading-relaxed">Manage your account preferences, security settings, and notifications.</p>
                  </TabsContent>
                </Tabs>
              </CardContent>
            </Card>
          </ComponentExample>
        </DocSection>
      </DocSection>

      <DocSection title="Reference" description="Technical tips for creating effective compositions." level={2}>
        <DocSection title="Best Practices">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-[14px]">
            <div className="space-y-4 p-4 rounded-lg bg-success/5 border border-success/10">
              <div className="flex gap-3">
                <span className="text-success font-bold">✅ Do:</span>
                <p className="text-muted-foreground leading-snug">Use consistent spacing utilities (gap-2, space-y-4) to maintain visual rhythm.</p>
              </div>
              <div className="flex gap-3">
                <span className="text-success font-bold">✅ Do:</span>
                <p className="text-muted-foreground leading-snug">Follow established hierarchy—h1 for titles, badges for status, primary buttons for main actions.</p>
              </div>
            </div>
            <div className="space-y-4 p-4 rounded-lg bg-destructive/5 border border-destructive/10">
              <div className="flex gap-3">
                <span className="text-destructive font-bold">❌ Don't:</span>
                <p className="text-muted-foreground leading-snug">Overload cards with too many interactive elements—keep focus on the primary task.</p>
              </div>
              <div className="flex gap-3">
                <span className="text-destructive font-bold">❌ Don't:</span>
                <p className="text-muted-foreground leading-snug">Mix different visual styles (e.g., pill and underline tabs) within the same context.</p>
              </div>
            </div>
          </div>
        </DocSection>
      </DocSection>

      <Timestamp date="17-01-2026 08:34PM" />
    </DocPage>
  )
}
