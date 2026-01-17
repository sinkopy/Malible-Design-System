import { Tabs, TabsList, TabsTrigger, TabsContent, TabsCounter } from "@/components/ui/tabs"
import { DocPage, DocSection, ComponentExample } from "@/components/docs"
import { Square, MagnifyingGlass, TrendUp } from "@phosphor-icons/react"

export default function TabsDocs() {
  return (
    <DocPage
      title="Tabs"
      description="A set of layered sections of content that display one panel at a time."
      category="Components"
    >
      <DocSection title="Pill Variant (Default)" description="Pill-style tabs with background and border for active state.">
        <ComponentExample
          code={`<Tabs defaultValue="account">
  <TabsList variant="pill">
    <TabsTrigger value="account" variant="pill">
      Account
      <TabsCounter>3</TabsCounter>
    </TabsTrigger>
    <TabsTrigger value="password" variant="pill">
      Password
      <TabsCounter>1</TabsCounter>
    </TabsTrigger>
    <TabsTrigger value="settings" variant="pill">
      Settings
      <TabsCounter>2</TabsCounter>
    </TabsTrigger>
  </TabsList>
  <TabsContent value="account">Account content</TabsContent>
  <TabsContent value="password">Password content</TabsContent>
  <TabsContent value="settings">Settings content</TabsContent>
</Tabs>`}
        >
          <Tabs defaultValue="account">
            <TabsList variant="pill">
              <TabsTrigger value="account" variant="pill">
                Account
                <TabsCounter>3</TabsCounter>
              </TabsTrigger>
              <TabsTrigger value="password" variant="pill">
                Password
                <TabsCounter>1</TabsCounter>
              </TabsTrigger>
              <TabsTrigger value="settings" variant="pill">
                Settings
                <TabsCounter>2</TabsCounter>
              </TabsTrigger>
            </TabsList>
            <TabsContent value="account">Account content</TabsContent>
            <TabsContent value="password">Password content</TabsContent>
            <TabsContent value="settings">Settings content</TabsContent>
          </Tabs>
        </ComponentExample>
      </DocSection>

      <DocSection title="Underline Variant" description="Underline-style tabs with blue active indicator.">
        <ComponentExample
          code={`<Tabs defaultValue="account">
  <TabsList variant="underline">
    <TabsTrigger value="account" variant="underline">
      Account
      <TabsCounter>3</TabsCounter>
    </TabsTrigger>
    <TabsTrigger value="password" variant="underline">
      Password
      <TabsCounter>1</TabsCounter>
    </TabsTrigger>
    <TabsTrigger value="settings" variant="underline">
      Settings
      <TabsCounter>2</TabsCounter>
    </TabsTrigger>
  </TabsList>
  <TabsContent value="account">Account content</TabsContent>
  <TabsContent value="password">Password content</TabsContent>
  <TabsContent value="settings">Settings content</TabsContent>
</Tabs>`}
        >
          <Tabs defaultValue="account">
            <TabsList variant="underline">
              <TabsTrigger value="account" variant="underline">
                Account
                <TabsCounter>3</TabsCounter>
              </TabsTrigger>
              <TabsTrigger value="password" variant="underline">
                Password
                <TabsCounter>1</TabsCounter>
              </TabsTrigger>
              <TabsTrigger value="settings" variant="underline">
                Settings
                <TabsCounter>2</TabsCounter>
              </TabsTrigger>
            </TabsList>
            <TabsContent value="account">Account content</TabsContent>
            <TabsContent value="password">Password content</TabsContent>
            <TabsContent value="settings">Settings content</TabsContent>
          </Tabs>
        </ComponentExample>
      </DocSection>

      <DocSection title="With Icons" description="Icon-only tabs for compact navigation.">
        <ComponentExample
          code={`<Tabs defaultValue="trending">
  <TabsList variant="pill">
    <TabsTrigger value="trending" variant="pill">
      <TrendUp size={20} />
    </TabsTrigger>
    <TabsTrigger value="search" variant="pill">
      <MagnifyingGlass size={20} />
    </TabsTrigger>
  </TabsList>
  <TabsContent value="trending">Trending content</TabsContent>
  <TabsContent value="search">Search content</TabsContent>
</Tabs>`}
        >
          <Tabs defaultValue="trending">
            <TabsList variant="pill">
              <TabsTrigger value="trending" variant="pill">
                <TrendUp size={20} />
              </TabsTrigger>
              <TabsTrigger value="search" variant="pill">
                <MagnifyingGlass size={20} />
              </TabsTrigger>
            </TabsList>
            <TabsContent value="trending">Trending content</TabsContent>
            <TabsContent value="search">Search content</TabsContent>
          </Tabs>
        </ComponentExample>
      </DocSection>

      <DocSection title="Icon + Label" description="Tabs with both icon and text label.">
        <ComponentExample
          code={`<Tabs defaultValue="files">
  <TabsList variant="pill">
    <TabsTrigger value="files" variant="pill">
      <Square size={20} weight="fill" />
      Files
      <TabsCounter>1</TabsCounter>
    </TabsTrigger>
    <TabsTrigger value="docs" variant="pill">
      <Square size={20} />
      Docs
      <TabsCounter>2</TabsCounter>
    </TabsTrigger>
  </TabsList>
  <TabsContent value="files">Files content</TabsContent>
  <TabsContent value="docs">Docs content</TabsContent>
</Tabs>`}
        >
          <Tabs defaultValue="files">
            <TabsList variant="pill">
              <TabsTrigger value="files" variant="pill">
                <Square size={20} weight="fill" />
                Files
                <TabsCounter>1</TabsCounter>
              </TabsTrigger>
              <TabsTrigger value="docs" variant="pill">
                <Square size={20} />
                Docs
                <TabsCounter>2</TabsCounter>
              </TabsTrigger>
            </TabsList>
            <TabsContent value="files">Files content</TabsContent>
            <TabsContent value="docs">Docs content</TabsContent>
          </Tabs>
        </ComponentExample>
      </DocSection>

      <DocSection title="State Reference">
        <div className="rounded-lg border overflow-hidden">
          <table className="w-full text-sm">
            <thead className="bg-muted/50">
              <tr>
                <th className="text-left p-3 font-medium">Variant</th>
                <th className="text-left p-3 font-medium">State</th>
                <th className="text-left p-3 font-medium">Style</th>
                <th className="text-left p-3 font-medium">Token/Value</th>
              </tr>
            </thead>
            <tbody className="divide-y">
              <tr>
                <td className="p-3 font-medium">Pill</td>
                <td className="p-3 text-muted-foreground">Inactive</td>
                <td className="p-3 text-muted-foreground">No background</td>
                <td className="p-3 font-mono text-xs text-muted-foreground">text-muted-foreground</td>
              </tr>
              <tr>
                <td className="p-3 font-medium">Pill</td>
                <td className="p-3 text-muted-foreground">Active</td>
                <td className="p-3 text-muted-foreground">Background + border</td>
                <td className="p-3 font-mono text-xs text-muted-foreground">bg-background border-border</td>
              </tr>
              <tr>
                <td className="p-3 font-medium">Underline</td>
                <td className="p-3 text-muted-foreground">Inactive</td>
                <td className="p-3 text-muted-foreground">No indicator</td>
                <td className="p-3 font-mono text-xs text-muted-foreground">text-muted-foreground</td>
              </tr>
              <tr>
                <td className="p-3 font-medium">Underline</td>
                <td className="p-3 text-muted-foreground">Active</td>
                <td className="p-3 text-muted-foreground">Bottom border</td>
                <td className="p-3 font-mono text-xs text-muted-foreground">border-b-2 border-primary</td>
              </tr>
            </tbody>
          </table>
        </div>
      </DocSection>

      <DocSection title="Best Practices">
        <div className="space-y-4 text-sm">
          <div className="flex gap-3">
            <span className="text-green-600 font-medium">✅ Do:</span>
            <p className="text-muted-foreground">Use tabs for organizing related content on the same page level.</p>
          </div>
          <div className="flex gap-3">
            <span className="text-red-600 font-medium">❌ Don't:</span>
            <p className="text-muted-foreground">Use tabs for top-level navigation—use a nav bar instead.</p>
          </div>

          <div className="flex gap-3">
            <span className="text-green-600 font-medium">✅ Do:</span>
            <p className="text-muted-foreground">Keep tab labels short (1-2 words) and use counters for counts.</p>
          </div>
          <div className="flex gap-3">
            <span className="text-red-600 font-medium">❌ Don't:</span>
            <p className="text-muted-foreground">Use more than 5-6 tabs—consider a dropdown or different pattern.</p>
          </div>
        </div>
      </DocSection>
    </DocPage>
  )
}
