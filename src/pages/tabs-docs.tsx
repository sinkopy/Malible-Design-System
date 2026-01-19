import { Tabs, TabsList, TabsTrigger, TabsContent, TabsCounter } from "@/components/ui/tabs"
import { DocPage, DocSection, ComponentExample, PropsTable, StateTable } from "@/components/docs"
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
        <StateTable
          states={[
            { state: "Inactive (Pill)", style: "No background, soft text", token: "text-muted-foreground" },
            { state: "Active (Pill)", style: "Background + subtle border", token: "bg-background border-border" },
            { state: "Inactive (Underline)", style: "No indicator", token: "text-muted-foreground" },
            { state: "Active (Underline)", style: "Bottom border indicator", token: "border-b-2 border-primary" },
          ]}
        />
      </DocSection>

      <DocSection title="Props" description="Tabs component configuration.">
        <PropsTable
          props={[
            {
              name: "variant",
              type: '"pill" | "underline"',
              default: '"pill"',
              description: "The visual style of the tabs."
            },
            {
              name: "value",
              type: "string",
              description: "The unique value for the tab trigger or content."
            },
            {
              name: "defaultValue",
              type: "string",
              description: "The value of the tab to be visible by default."
            }
          ]}
        />
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
