import { Link } from "react-router-dom"
import { GithubLogo, Info, Plus, Pencil } from "@phosphor-icons/react"
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
import { Checkbox } from "@/components/ui/checkbox"
import { FileInput } from "@/components/ui/file-input"
import { Input } from "@/components/ui/input"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { Select, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Separator } from "@/components/ui/separator"
import { Slider } from "@/components/ui/slider"
import { Skeleton } from "@/components/ui/skeleton"
import { Switch } from "@/components/ui/switch"
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Textarea } from "@/components/ui/textarea"
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
      className="group flex flex-col bg-background border border-border/60 rounded-xl overflow-hidden hover:border-foreground/10 transition-all duration-300 hover:shadow-[0_8px_30px_rgb(0,0,0,0.04)]"
    >
      {/* Preview area - Polaris style containment */}
      <div className="h-40 bg-secondary/50 flex items-center justify-center p-8 transition-colors group-hover:bg-secondary/80">
        <div className="scale-100 group-hover:scale-105 transition-transform duration-500 ease-out">
          {preview}
        </div>
      </div>

      {/* Info area */}
      <div className="p-5 flex flex-col flex-1 border-t border-border/40">
        <div className="flex items-center justify-between mb-1.5">
          <h4 className="font-semibold text-[14px] tracking-tight text-foreground group-hover:text-info transition-colors">
            {name}
          </h4>
          <div className="opacity-0 group-hover:opacity-100 transition-opacity translate-x-1 group-hover:translate-x-0 duration-300">
            <span className="text-[10px] font-bold uppercase tracking-widest text-info flex items-center gap-1">
              View <Plus size={10} weight="bold" />
            </span>
          </div>
        </div>
        <p className="text-[13px] text-muted-foreground/80 leading-snug line-clamp-2">
          {description}
        </p>
      </div>
    </Link>
  )
}

const categorizedComponents = {
  "Forms & Inputs": [
    {
      name: "Input",
      description: "Single-line text entry field",
      href: "/input",
      preview: <Input placeholder="Enter text..." className="max-w-[160px]" />,
    },
    {
      name: "Select",
      description: "Dropdown picker with groups and separators",
      href: "/select",
      preview: (
        <Select>
          <SelectTrigger className="w-[140px]">
            <SelectValue placeholder="Select..." />
          </SelectTrigger>
        </Select>
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
    {
      name: "Textarea",
      description: "Multi-line text entry field",
      href: "/textarea",
      preview: <Textarea placeholder="Enter text..." className="max-w-[160px] h-12" />,
    },
    {
      name: "Slider",
      description: "Range selection with single or dual handles",
      href: "/slider",
      preview: <Slider defaultValue={[50]} className="w-24" />,
    },
    {
      name: "File Input",
      description: "File upload trigger with filename display",
      href: "/file-input",
      preview: <FileInput className="max-w-[160px]" />,
    },
  ],
  "Feedback & Display": [
    {
      name: "Alert",
      description: "Contextual message for user notifications",
      href: "/alert",
      preview: (
        <Alert variant="info" className="w-full max-w-[200px]">
          <Info size={16} />
          <AlertDescription className="text-[10px] leading-tight">Info alert</AlertDescription>
        </Alert>
      ),
    },
    {
      name: "Badge",
      description: "Status indicator with semantic color variants",
      href: "/badge",
      preview: (
        <div className="flex gap-2">
          <Badge>New</Badge>
          <Badge variant="success">Active</Badge>
        </div>
      ),
    },
    {
      name: "Skeleton",
      description: "Loading placeholder for content states",
      href: "/skeleton",
      preview: (
        <div className="flex items-center space-x-3">
          <Skeleton className="h-8 w-8 rounded-full" />
          <div className="space-y-1.5">
            <Skeleton className="h-2 w-[80px]" />
            <Skeleton className="h-2 w-[60px]" />
          </div>
        </div>
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
    {
      name: "Separator",
      description: "Visual divider between sections",
      href: "/separator",
      preview: (
        <div className="flex items-center gap-2 text-[10px] text-muted-foreground uppercase tracking-widest font-bold">
          <span>A</span>
          <Separator orientation="vertical" className="h-3" />
          <span>B</span>
        </div>
      ),
    },
  ],
  "Overlay & Navigation": [
    {
      name: "Button",
      description: "Primary action trigger with multiple variants",
      href: "/button",
      preview: <Button size="sm">Action</Button>,
    },
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
        </div>
      ),
    },
    {
      name: "Dialog",
      description: "Modal window for focused interaction",
      href: "/dialog",
      preview: (
        <div className="w-24 h-16 rounded border bg-background shadow-lg p-2">
          <div className="h-1.5 w-12 bg-muted rounded mb-1" />
          <div className="h-1 w-16 bg-muted/50 rounded" />
        </div>
      ),
    },
    {
      name: "Dropdown Menu",
      description: "Contextual action menu with submenus",
      href: "/dropdown-menu",
      preview: (
        <div className="w-24 h-20 rounded border bg-background shadow-lg p-1.5 space-y-1">
          <div className="h-2 w-full bg-secondary rounded" />
          <div className="h-2 w-full bg-muted rounded" />
          <div className="h-2 w-full bg-muted rounded" />
        </div>
      ),
    },
    {
      name: "Popover",
      description: "Floating content anchored to trigger",
      href: "/popover",
      preview: (
        <div className="relative">
          <Button size="sm" variant="secondary">Click</Button>
          <div className="absolute -top-12 left-0 w-20 h-10 border bg-background shadow-md rounded flex items-center justify-center">
            <div className="h-1 w-12 bg-muted rounded" />
          </div>
        </div>
      ),
    },
    {
      name: "Tooltip",
      description: "Brief helper text on hover",
      href: "/tooltip",
      preview: (
        <div className="h-10 w-24 bg-foreground text-background text-[9px] font-medium flex items-center justify-center rounded">
          Helper text
        </div>
      ),
    },
    {
      name: "Tabs",
      description: "Switchable content panels",
      href: "/tabs",
      preview: (
        <Tabs defaultValue="a" className="w-[160px]">
          <TabsList className="h-8">
            <TabsTrigger value="a" className="text-[10px] h-6 px-4">One</TabsTrigger>
            <TabsTrigger value="b" className="text-[10px] h-6 px-4">Two</TabsTrigger>
          </TabsList>
        </Tabs>
      ),
    },
    {
      name: "Breadcrumb",
      description: "Hierarchical page location indicator",
      href: "/breadcrumb",
      preview: (
        <div className="flex items-center gap-2 text-[10px] text-muted-foreground">
          <span>Home</span>
          <span>/</span>
          <span className="font-semibold text-foreground">Docs</span>
        </div>
      ),
    },
  ],
}

export default function Home() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="py-32 px-8 max-w-5xl mx-auto text-center flex flex-col items-center">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-info/10 text-info text-xs font-medium mb-8">
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-info opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2 w-2 bg-info"></span>
          </span>
          v1.2: The Documentation Refresh
        </div>
        <h1 className="font-heading text-6xl md:text-7xl font-bold tracking-tighter mb-8 max-w-4xl text-foreground">
          Built for trust. <br />
          <span className="text-muted-foreground/60">Designed for scale.</span>
        </h1>
        <p className="text-xl md:text-2xl text-muted-foreground/80 mb-12 max-w-2xl leading-relaxed tracking-tight">
          A production-ready design system for building high-integrity interfaces.
          Built on Radix and ShadCN, refined for the next generation of fintech and SaaS.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto items-center">
          <Button size="lg" asChild className="px-10 h-14 text-base shadow-lg shadow-primary/20">
            <Link to="/getting-started">Get Started</Link>
          </Button>
          <Button size="lg" variant="secondary" asChild className="px-10 h-14 text-base border-border/60 hover:border-foreground/20">
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
      <section id="components" className="py-24 px-8 border-t border-border">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="font-heading text-4xl font-bold tracking-tight mb-4">Components</h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              A comprehensive library of 24+ high-integrity components,
              designed for the world's most demanding interfaces.
            </p>
          </div>

          {/* Component grid organized by category */}
          {Object.entries(categorizedComponents).map(([category, components]) => (
            <div key={category} className="mb-20 last:mb-0">
              <div className="flex items-center gap-4 mb-8">
                <h3 className="font-heading text-xl font-semibold tracking-tight">
                  {category}
                </h3>
                <div className="h-px flex-1 bg-border/50" />
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
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
