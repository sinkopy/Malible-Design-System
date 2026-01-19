import { Link } from "react-router-dom"
import { GithubLogo, Plus } from "@phosphor-icons/react"
import { Button } from "@/components/ui/button"

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
        <div className="flex items-center justify-between mb-1">
          <h4 className="font-semibold text-[16px] tracking-tight text-foreground group-hover:text-info transition-colors">
            {name}
          </h4>
          <div className="opacity-0 group-hover:opacity-100 transition-opacity translate-x-1 group-hover:translate-x-0 duration-300">
            <span className="text-[10px] font-bold uppercase tracking-widest text-info flex items-center gap-1">
              View <Plus size={10} weight="bold" />
            </span>
          </div>
        </div>
        <p className="text-[13px] text-muted-foreground/60 leading-relaxed line-clamp-2">
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
      preview: (
        <div className="w-40 h-8 rounded-lg border-2 border-primary/20 bg-background relative overflow-hidden">
          <div className="absolute left-3 top-1/2 -translate-y-1/2 w-20 h-1.5 bg-muted/40 rounded-full" />
        </div>
      ),
    },
    {
      name: "Select",
      description: "Dropdown picker with groups and separators",
      href: "/select",
      preview: (
        <div className="w-32 h-8 rounded-lg border-2 border-primary/20 bg-background relative flex items-center justify-between px-3">
          <div className="w-16 h-1.5 bg-muted/40 rounded-full" />
          <div className="w-2.5 h-2.5 rounded-sm bg-muted/60" />
        </div>
      ),
    },
    {
      name: "Checkbox",
      description: "Binary selection with indeterminate support",
      href: "/checkbox",
      preview: (
        <div className="flex gap-4">
          <div className="w-6 h-6 rounded border-2 border-primary bg-primary flex items-center justify-center">
            <div className="w-2 h-3.5 border-r-2 border-b-2 border-primary-foreground rotate-45 mb-1" />
          </div>
          <div className="w-6 h-6 rounded border-2 border-primary/20 bg-background" />
        </div>
      ),
    },
    {
      name: "Radio",
      description: "Single selection from exclusive options",
      href: "/radio",
      preview: (
        <div className="flex gap-4">
          <div className="w-6 h-6 rounded-full border-2 border-primary bg-background flex items-center justify-center">
            <div className="w-2.5 h-2.5 rounded-full bg-primary" />
          </div>
          <div className="w-6 h-6 rounded-full border-2 border-primary/20 bg-background" />
        </div>
      ),
    },
    {
      name: "Switch",
      description: "Binary toggle for on/off states",
      href: "/switch",
      preview: (
        <div className="w-12 h-6 rounded-full bg-primary relative px-1 flex items-center">
          <div className="w-4 h-4 rounded-full bg-primary-foreground ml-auto" />
        </div>
      ),
    },
    {
      name: "Textarea",
      description: "Multi-line text entry field",
      href: "/textarea",
      preview: (
        <div className="w-40 h-16 rounded-lg border-2 border-primary/20 bg-background p-3 flex flex-col gap-2">
          <div className="w-24 h-1.5 bg-muted/40 rounded-full" />
          <div className="w-32 h-1.5 bg-muted/50 rounded-full" />
        </div>
      ),
    },
    {
      name: "Slider",
      description: "Range selection with single or dual handles",
      href: "/slider",
      preview: (
        <div className="w-40 h-1.5 bg-muted/40 rounded-full relative">
          <div className="absolute left-0 w-2/3 h-full bg-primary rounded-full" />
          <div className="absolute left-2/3 -translate-x-1/2 -top-[7px] w-5 h-5 rounded-full bg-background border-2 border-primary shadow-sm" />
        </div>
      ),
    },
    {
      name: "File Input",
      description: "File upload trigger with filename display",
      href: "/file-input",
      preview: (
        <div className="w-40 h-8 rounded-lg border-2 border-dashed border-primary/20 bg-muted/10 flex items-center justify-center">
          <div className="w-4 h-4 rounded bg-primary/40" />
        </div>
      ),
    },
  ],
  "Feedback & Display": [
    {
      name: "Alert",
      description: "Contextual message for user notifications",
      href: "/alert",
      preview: (
        <div className="w-48 h-12 rounded-lg border-2 border-info/20 bg-info/5 flex items-center gap-3 px-3">
          <div className="w-4 h-4 rounded-full bg-info/40 shrink-0" />
          <div className="w-24 h-1.5 bg-info/20 rounded-full" />
        </div>
      ),
    },
    {
      name: "Badge",
      description: "Status indicator with semantic color variants",
      href: "/badge",
      preview: (
        <div className="flex gap-2">
          <div className="px-3 py-1 rounded-sm bg-primary text-[9px] font-bold text-primary-foreground uppercase tracking-wider">New</div>
          <div className="px-3 py-1 rounded-sm bg-success/10 border border-success/30 text-[9px] font-bold text-success uppercase tracking-wider">Active</div>
        </div>
      ),
    },
    {
      name: "Skeleton",
      description: "Loading placeholder for content states",
      href: "/skeleton",
      preview: (
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-full bg-muted/40" />
          <div className="flex flex-col gap-2">
            <div className="w-20 h-2 bg-muted/20 rounded-full" />
            <div className="w-14 h-2 bg-muted/20 rounded-full" />
          </div>
        </div>
      ),
    },
    {
      name: "Avatar",
      description: "User or entity image with fallback initials",
      href: "/avatar",
      preview: (
        <div className="flex -space-x-3">
          <div className="w-11 h-11 rounded-full border-[3px] border-background bg-secondary flex items-center justify-center text-[11px] font-bold text-muted-foreground/50">JD</div>
          <div className="w-11 h-11 rounded-full border-[3px] border-background bg-primary/10 flex items-center justify-center text-[11px] font-bold text-primary">MS</div>
        </div>
      ),
    },
    {
      name: "Separator",
      description: "Visual divider between sections",
      href: "/separator",
      preview: (
        <div className="w-40 h-px bg-border/60 relative">
          <div className="absolute left-1/2 -translate-x-1/2 -top-1.5 h-3 w-3 rounded-full bg-primary/10" />
        </div>
      ),
    },
  ],
  "Overlay & Navigation": [
    {
      name: "Button",
      description: "Primary action trigger with multiple variants",
      href: "/button",
      preview: (
        <div className="px-6 py-2 rounded-lg bg-primary shadow-sm">
          <div className="w-12 h-2 bg-primary-foreground/40 rounded-full mx-auto" />
        </div>
      ),
    },
    {
      name: "Icon Button",
      description: "Compact button for icon-only actions",
      href: "/icon-button",
      preview: (
        <div className="flex gap-2">
          <div className="w-10 h-10 rounded-lg bg-secondary flex items-center justify-center">
            <div className="w-4 h-4 bg-foreground/30 rounded-sm" />
          </div>
          <div className="w-10 h-10 rounded-lg bg-secondary flex items-center justify-center">
            <div className="w-4 h-4 bg-foreground/30 rounded-sm" />
          </div>
        </div>
      ),
    },
    {
      name: "Dialog",
      description: "Modal window for focused interaction",
      href: "/dialog",
      preview: (
        <div className="w-32 h-24 rounded-xl border-2 border-border/40 bg-background shadow-xl p-4 flex flex-col gap-2">
          <div className="w-12 h-2 bg-primary/20 rounded-full" />
          <div className="w-full h-1 bg-muted/40 rounded-full" />
          <div className="w-full h-1 bg-muted/40 rounded-full" />
          <div className="w-12 h-6 bg-primary rounded-lg ml-auto mt-auto" />
        </div>
      ),
    },
    {
      name: "Dropdown Menu",
      description: "Contextual action menu with submenus",
      href: "/dropdown-menu",
      preview: (
        <div className="w-28 h-24 rounded-xl border-2 border-border/40 bg-background shadow-xl p-2 flex flex-col gap-1.5">
          <div className="w-full h-6 bg-muted/20 rounded-lg" />
          <div className="w-full h-6 bg-primary rounded-lg" />
          <div className="w-full h-6 bg-muted/20 rounded-lg" />
        </div>
      ),
    },
    {
      name: "Popover",
      description: "Floating content anchored to trigger",
      href: "/popover",
      preview: (
        <div className="relative">
          <div className="w-16 h-8 rounded-lg border-2 border-primary/20 bg-background" />
          <div className="absolute -top-14 left-1/2 -translate-x-1/2 w-28 h-12 rounded-xl border-2 border-border/40 bg-background shadow-xl p-2">
            <div className="w-full h-2 bg-muted/20 rounded-full mt-1" />
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
        <div className="w-40 h-10 rounded-lg bg-secondary/50 p-1 flex gap-1">
          <div className="flex-1 bg-background rounded-md shadow-sm border border-border/40 flex items-center justify-center">
            <div className="w-10 h-1.5 bg-muted/60 rounded-full" />
          </div>
          <div className="flex-1 flex items-center justify-center">
            <div className="w-10 h-1.5 bg-muted/20 rounded-full" />
          </div>
        </div>
      ),
    },
    {
      name: "Sheet",
      description: "Edge-sliding side panel for complementary content",
      href: "/sheet",
      preview: (
        <div className="w-40 h-28 rounded-xl border-2 border-border/40 bg-background overflow-hidden relative">
          <div className="absolute right-0 top-0 bottom-0 w-16 bg-muted/20 border-l border-border/40 p-2 flex flex-col gap-2">
            <div className="w-4 h-4 bg-muted-foreground/30 rounded-full" />
            <div className="w-full h-1.5 bg-muted-foreground/10 rounded-full" />
          </div>
        </div>
      ),
    },
    {
      name: "Breadcrumb",
      description: "Hierarchical page location indicator",
      href: "/breadcrumb",
      preview: (
        <div className="flex items-center gap-2">
          <div className="w-8 h-1.5 bg-muted/60 rounded-full" />
          <div className="w-2 h-2 bg-muted-foreground/30 rounded-full" />
          <div className="w-8 h-1.5 bg-primary/40 rounded-full" />
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
        <h1 className="font-heading text-6xl md:text-8xl font-semibold tracking-tighter mb-12 max-w-4xl text-foreground leading-[0.9]">
          Built for creation.
        </h1>
        <div className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto items-center">
          <Button size="lg" asChild className="px-10 h-14 text-base font-semibold">
            <Link to="/getting-started">Get Started</Link>
          </Button>
          <Button size="lg" variant="secondary" asChild className="px-10 h-14 text-base border-border hover:border-foreground/20 font-semibold bg-background">
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


      {/* Components Section */}
      <section id="components" className="py-24 px-8 border-t border-border">
        <div className="max-w-6xl mx-auto">
          <div className="mb-16">
            <h2 className="font-heading text-4xl font-semibold tracking-tight">Components</h2>
          </div>

          {/* Component grid organized by category */}
          {Object.entries(categorizedComponents).map(([category, components]) => (
            <div key={category} className="mb-20 last:mb-0">
              <div className="flex items-center gap-4 mb-8">
                <h3 className="font-heading text-xl font-medium tracking-tight">
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
