import { Link, Outlet, useLocation } from "react-router-dom";
import { cn } from "@/lib/utils";

const navSections = [
  {
    title: "Foundation",
    items: [
      { href: "/getting-started", label: "Getting Started" },
      { href: "/tokens", label: "Tokens" },
      { href: "/colors", label: "Colors" },
      { href: "/typography", label: "Typography" },
      { href: "/layout", label: "Layout" },
      { href: "/shadows", label: "Shadows" },
    ],
  },
  {
    title: "Components",
    items: [
      { href: "/button", label: "Button" },
      { href: "/icon-button", label: "Icon Button" },
      { href: "/tooltip", label: "Tooltip" },
      { href: "/slider", label: "Slider" },
      { href: "/scroll-area", label: "Scroll Area" },
      { href: "/skeleton", label: "Skeleton" },
      { href: "/select", label: "Select" },
      { href: "/sheet", label: "Sheet" },
      { href: "/popover", label: "Popover" },
      { href: "/dropdown-menu", label: "Dropdown Menu" },
      { href: "/dialog", label: "Dialog" },
      { href: "/toggle-group", label: "Toggle Group" },
      { href: "/input", label: "Input" },
      { href: "/badge", label: "Badge" },
      { href: "/switch", label: "Switch" },
      { href: "/checkbox", label: "Checkbox" },
      { href: "/radio", label: "Radio" },
      { href: "/separator", label: "Separator" },
      { href: "/label", label: "Label" },
      { href: "/textarea", label: "Textarea" },
      { href: "/alert", label: "Alert" },
      { href: "/card", label: "Card" },
      { href: "/avatar", label: "Avatar" },
      { href: "/breadcrumb", label: "Breadcrumb" },
      { href: "/tabs", label: "Tabs" },
      { href: "/file-input", label: "FileInput" },
      { href: "/form-field", label: "Form Field" },
      { href: "/autocomplete", label: "Auto Complete" },
      { href: "/drawer", label: "Drawer" },
      { href: "/modal", label: "Modal" },
    ],
  },
];

export default function Layout() {
  const location = useLocation();

  return (
    <div className="flex min-h-screen">
      {/* Sidebar */}
      <aside className="fixed left-0 top-0 h-screen w-56 flex flex-col border-r border-border bg-background">
        {/* Fixed header/logo - does NOT scroll */}
        <div className="shrink-0 p-8 pb-4">
          <Link to="/" className="block px-1">
            <img src="/logo.png" alt="Malible" className="h-7 w-auto" />
          </Link>
        </div>
        {/* Scrollable navigation - THIS scrolls */}
        <nav className="flex-1 overflow-y-auto p-6 pt-6 space-y-8">
          <Link
            to="/"
            className={cn(
              "block rounded-lg px-3 py-2 text-sm transition-all duration-200 mb-8",
              location.pathname === "/"
                ? "bg-secondary text-foreground font-medium shadow-sm"
                : "text-muted-foreground/70 hover:bg-secondary/50 hover:text-foreground"
            )}
          >
            Overview
          </Link>
          {navSections.map((section) => (
            <div key={section.title} className="space-y-2">
              <p className="px-3 text-[10px] font-bold text-muted-foreground/30 uppercase tracking-[0.2em] mb-3">
                {section.title}
              </p>
              <div className="space-y-0.5">
                {section.items.map((item) => (
                  <Link
                    key={item.href}
                    to={item.href}
                    className={cn(
                      "block rounded-lg px-3 py-1.5 text-sm transition-all duration-200",
                      location.pathname === item.href
                        ? "bg-secondary text-foreground font-medium shadow-sm"
                        : "text-muted-foreground/60 hover:bg-secondary/40 hover:text-foreground"
                    )}
                  >
                    {item.label}
                  </Link>
                ))}
              </div>
            </div>
          ))}
        </nav>
      </aside>

      {/* Main Content */}
      <main className="flex-1 ml-56">
        <div className="mx-auto max-w-5xl px-12 py-12">
          <Outlet />
        </div>
      </main>
    </div>
  );
}
