import { Link } from "react-router-dom"
import { GithubLogo, Info, CaretDown, Plus, Pencil, Trash } from "@phosphor-icons/react"
import { Button } from "@/components/ui/button"
import { Alert, AlertDescription } from "@/components/ui/alert"
import { Avatar, AvatarFallback } from "@/components/ui/avatar"
import { Badge } from "@/components/ui/badge"
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb"
import { Card, CardHeader, CardTitle } from "@/components/ui/card"
import { Checkbox } from "@/components/ui/checkbox"
import { FileInput } from "@/components/ui/file-input"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { Select, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Separator } from "@/components/ui/separator"
import { Slider } from "@/components/ui/slider"
import { Switch } from "@/components/ui/switch"
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Textarea } from "@/components/ui/textarea"
import { ToggleGroup, ToggleGroupItem } from "@/components/ui/toggle-group"
import { Tooltip, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip"

interface ComponentCardProps {
  name: string
  description: string
  href: string
  preview: React.ReactNode
}

function ComponentCard({ name, description, href, preview }: ComponentCardProps) {
  return (
    <Link
      to={href}
      className="group block border border-border/50 rounded-lg overflow-hidden hover:border-foreground/20 transition-all duration-200 hover:shadow-sm"
    >
      {/* Preview area */}
      <div className="h-32 bg-muted/30 flex items-center justify-center p-6 grayscale-[0.2] group-hover:grayscale-0 transition-all">
        {preview}
      </div>
      {/* Info area */}
      <div className="p-4 border-t border-border/50 bg-background">
        <h4 className="font-medium text-[13px] tracking-tight group-hover:text-info transition-colors">{name}</h4>
        <p className="text-[12px] text-muted-foreground mt-1 leading-snug">{description}</p>
      </div>
    </Link>
  )
}

const componentsByLetter = {
  A: [
    {
      name: "Alert",
      description: "Contextual message for user notifications",
      href: "/alert",
      preview: (
        <Alert variant="info" className="w-full max-w-[240px]">
          <Info size={16} />
          <AlertDescription>This is an info alert.</AlertDescription>
        </Alert>
      ),
    },
    {
      name: "Avatar",
      description: "User or entity image with fallback initials",
      href: "/avatar",
      preview: (
        <div className="flex gap-2">
          <Avatar>
            <AvatarFallback>JD</AvatarFallback>
          </Avatar>
          <Avatar>
            <AvatarFallback>AB</AvatarFallback>
          </Avatar>
        </div>
      ),
    },
  ],
  B: [
    {
      name: "Badge",
      description: "Status indicator with semantic color variants",
      href: "/badge",
      preview: (
        <div className="flex gap-2">
          <Badge>Default</Badge>
          <Badge variant="success">Success</Badge>
          <Badge variant="destructive">Error</Badge>
        </div>
      ),
    },
    {
      name: "Breadcrumb",
      description: "Hierarchical page location indicator",
      href: "/breadcrumb",
      preview: (
        <Breadcrumb>
          <BreadcrumbList>
            <BreadcrumbItem>
              <BreadcrumbLink>Home</BreadcrumbLink>
            </BreadcrumbItem>
            <BreadcrumbSeparator />
            <BreadcrumbItem>
              <BreadcrumbLink>Products</BreadcrumbLink>
            </BreadcrumbItem>
            <BreadcrumbSeparator />
            <BreadcrumbItem>
              <BreadcrumbPage>Item</BreadcrumbPage>
            </BreadcrumbItem>
          </BreadcrumbList>
        </Breadcrumb>
      ),
    },
    {
      name: "Button",
      description: "Primary action trigger with multiple variants",
      href: "/button",
      preview: (
        <div className="flex gap-2">
          <Button size="sm">Primary</Button>
          <Button size="sm" variant="secondary">
            Secondary
          </Button>
        </div>
      ),
    },
  ],
  C: [
    {
      name: "Card",
      description: "Container for grouped content sections",
      href: "/card",
      preview: (
        <Card className="w-full max-w-[200px]">
          <CardHeader className="p-3">
            <CardTitle className="text-sm">Card Title</CardTitle>
          </CardHeader>
        </Card>
      ),
    },
    {
      name: "Checkbox",
      description: "Binary selection with indeterminate support",
      href: "/checkbox",
      preview: (
        <div className="flex items-center gap-4">
          <Checkbox defaultChecked />
          <Checkbox />
        </div>
      ),
    },
  ],
  D: [
    {
      name: "Dialog",
      description: "Modal window for focused interaction",
      href: "/dialog",
      preview: (
        <Button size="sm" variant="secondary">
          Open Dialog
        </Button>
      ),
    },
    {
      name: "Dropdown Menu",
      description: "Contextual action menu with submenus",
      href: "/dropdown-menu",
      preview: (
        <Button size="sm" variant="secondary">
          Options <CaretDown size={14} className="ml-1" />
        </Button>
      ),
    },
  ],
  F: [
    {
      name: "File Input",
      description: "File upload trigger with filename display",
      href: "/file-input",
      preview: <FileInput className="max-w-[200px]" />,
    },
  ],
  I: [
    {
      name: "Icon Button",
      description: "Compact button for icon-only actions",
      href: "/icon-button",
      preview: (
        <div className="flex gap-2">
          <Button size="icon" variant="secondary">
            <Plus size={16} />
          </Button>
          <Button size="icon" variant="secondary">
            <Pencil size={16} />
          </Button>
          <Button size="icon" variant="secondary">
            <Trash size={16} />
          </Button>
        </div>
      ),
    },
    {
      name: "Input",
      description: "Single-line text entry field",
      href: "/input",
      preview: <Input placeholder="Enter text..." className="max-w-[200px]" />,
    },
  ],
  L: [
    {
      name: "Label",
      description: "Accessible text label for form controls",
      href: "/label",
      preview: <Label>Form Label</Label>,
    },
  ],
  P: [
    {
      name: "Popover",
      description: "Floating content anchored to trigger",
      href: "/popover",
      preview: (
        <Button size="sm" variant="secondary">
          Open Popover
        </Button>
      ),
    },
  ],
  R: [
    {
      name: "Radio",
      description: "Single selection from exclusive options",
      href: "/radio",
      preview: (
        <RadioGroup defaultValue="a" className="flex gap-4">
          <RadioGroupItem value="a" />
          <RadioGroupItem value="b" />
        </RadioGroup>
      ),
    },
  ],
  S: [
    {
      name: "Scroll Area",
      description: "Custom scrollbar container for overflow",
      href: "/scroll-area",
      preview: (
        <div className="h-16 w-32 border border-border rounded text-xs text-muted-foreground flex items-center justify-center">
          Scrollable
        </div>
      ),
    },
    {
      name: "Select",
      description: "Dropdown picker with groups and separators",
      href: "/select",
      preview: (
        <Select>
          <SelectTrigger className="w-[160px]">
            <SelectValue placeholder="Select..." />
          </SelectTrigger>
        </Select>
      ),
    },
    {
      name: "Separator",
      description: "Visual divider between sections",
      href: "/separator",
      preview: (
        <div className="flex items-center gap-3 text-xs text-muted-foreground">
          <span>Left</span>
          <Separator orientation="vertical" className="h-4" />
          <span>Right</span>
        </div>
      ),
    },
    {
      name: "Slider",
      description: "Range selection with single or dual handles",
      href: "/slider",
      preview: <Slider defaultValue={[50]} className="w-32" />,
    },
    {
      name: "Switch",
      description: "Binary toggle for on/off states",
      href: "/switch",
      preview: (
        <div className="flex gap-3">
          <Switch />
          <Switch defaultChecked />
        </div>
      ),
    },
  ],
  T: [
    {
      name: "Tabs",
      description: "Switchable content panels",
      href: "/tabs",
      preview: (
        <Tabs defaultValue="a" className="w-full max-w-[200px]">
          <TabsList>
            <TabsTrigger value="a">Tab 1</TabsTrigger>
            <TabsTrigger value="b">Tab 2</TabsTrigger>
          </TabsList>
        </Tabs>
      ),
    },
    {
      name: "Textarea",
      description: "Multi-line text entry field",
      href: "/textarea",
      preview: <Textarea placeholder="Enter text..." className="max-w-[200px] h-16" />,
    },
    {
      name: "Toggle Group",
      description: "Toggleable buttons for single or multiple selection",
      href: "/toggle-group",
      preview: (
        <ToggleGroup type="single" defaultValue="b" size="sm">
          <ToggleGroupItem value="a">A</ToggleGroupItem>
          <ToggleGroupItem value="b">B</ToggleGroupItem>
          <ToggleGroupItem value="c">C</ToggleGroupItem>
        </ToggleGroup>
      ),
    },
    {
      name: "Tooltip",
      description: "Brief helper text on hover",
      href: "/tooltip",
      preview: (
        <TooltipProvider>
          <Tooltip>
            <TooltipTrigger asChild>
              <Button size="sm" variant="secondary">
                Hover me
              </Button>
            </TooltipTrigger>
          </Tooltip>
        </TooltipProvider>
      ),
    },
  ],
}

export default function Home() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="py-24 px-8 max-w-5xl mx-auto text-center">
        <h1 className="font-heading text-5xl font-bold tracking-tight mb-6 bg-gradient-to-br from-foreground to-foreground/70 bg-clip-text text-transparent">
          Malible Design System
        </h1>
        <p className="text-xl text-muted-foreground mb-10 max-w-2xl mx-auto leading-relaxed">
          A production-ready design system for building consistent, polished interfaces. Built on
          ShadCN and a 2-layer token system, it provides everything you need to ship great-looking
          products fast.
        </p>
        <div className="flex gap-4 justify-center">
          <Button size="lg" asChild className="px-8">
            <Link to="/getting-started">Get Started</Link>
          </Button>
          <Button size="lg" variant="secondary" asChild className="px-8">
            <a
              href="https://github.com/sinkopy/malible-design-system"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center"
            >
              <GithubLogo size={20} className="mr-2" />
              GitHub
            </a>
          </Button>
        </div>
      </section>

      {/* Built On Section */}
      <section className="py-12 px-8 border-t border-border">
        <div className="max-w-4xl mx-auto">
          <h2 className="font-heading text-xl font-medium mb-8 text-center">
            Built on proven foundations
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-5 gap-8">
            {[
              { name: "Figma", description: "Design source of truth" },
              { name: "ShadCN", description: "Component architecture" },
              { name: "Radix UI", description: "Accessible primitives" },
              { name: "Tailwind CSS", description: "Utility-first styling" },
              { name: "Phosphor Icons", description: "Consistent iconography" },
            ].map((item) => (
              <div key={item.name} className="text-center group">
                <p className="font-semibold text-[13px] tracking-tight group-hover:text-info transition-colors">{item.name}</p>
                <p className="text-[11px] text-muted-foreground mt-1 leading-tight">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Key Features Section */}
      <section className="py-12 px-8 border-t border-border bg-accent/30">
        <div className="max-w-4xl mx-auto">
          <h2 className="font-heading text-xl font-medium mb-8 text-center">Key features</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { emoji: "🎨", text: "24 production-ready components with full docs" },
              {
                emoji: "🎯",
                text: "2-layer token system (90 primitives → 34 theme variables)",
              },
              { emoji: "🌊", text: "Subtle shadow system with natural depth" },
              { emoji: "📦", text: "Zero-config TypeScript support" },
              { emoji: "♿", text: "Accessibility-first via Radix primitives" },
              { emoji: "🎭", text: "Light mode optimized (dark mode coming soon)" },
            ].map((feature) => (
              <div key={feature.text} className="flex items-start gap-4 p-4 rounded-xl bg-background/50 border border-border/40 hover:border-border/80 transition-colors">
                <span className="text-xl shrink-0">{feature.emoji}</span>
                <p className="text-[13px] text-muted-foreground leading-relaxed">{feature.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Components Section */}
      <section className="py-12 px-8 border-t border-border">
        <div className="max-w-6xl mx-auto">
          <h2 className="font-heading text-xl font-medium mb-8 text-center">Components</h2>

          {/* Component grid organized by letter */}
          {Object.entries(componentsByLetter).map(([letter, components]) => (
            <div key={letter} className="mb-12">
              <h3 className="font-heading text-lg font-medium mb-4 text-muted-foreground">
                {letter}
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                {components.map((component) => (
                  <ComponentCard key={component.name} {...component} />
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  )
}
