import { Link, Outlet, useLocation } from "react-router-dom";
import { cn } from "@/lib/utils";

const navSections = [
  {
    title: "Foundation",
    items: [
      { href: "/tokens", label: "Tokens" },
      { href: "/colors", label: "Colors" },
      { href: "/typography", label: "Typography" },
    ],
  },
  {
    title: "Components",
    items: [
      { href: "/", label: "Button" },
      { href: "/input", label: "Input" },
      { href: "/badge", label: "Badge" },
      { href: "/switch", label: "Switch" },
      { href: "/checkbox", label: "Checkbox" },
      { href: "/radio", label: "Radio" },
      { href: "/separator", label: "Separator" },
      { href: "/label", label: "Label" },
      { href: "/textarea", label: "Textarea" },
      { href: "/alert", label: "Alert" },
    ],
  },
];

export default function Layout() {
  const location = useLocation();
  
  return (
    <div className="flex min-h-screen">
      {/* Sidebar */}
      <aside className="fixed left-0 top-0 h-screen w-56 border-r border-border bg-background p-6">
        <div className="mb-6 flex items-center gap-2 px-3">
          <img src="/malible-logo.svg" alt="Malible" className="h-8 w-8" />
          <div>
            <p className="text-base font-medium leading-none">Malible</p>
            <p className="text-xs text-muted-foreground mt-0.5">v1.2</p>
          </div>
        </div>
        <nav className="space-y-6">
          {navSections.map((section) => (
            <div key={section.title} className="space-y-1">
              <p className="px-3 text-xs font-medium text-muted-foreground uppercase tracking-wider">
                {section.title}
              </p>
              <div className="space-y-1">
                {section.items.map((item) => (
                  <Link
                    key={item.href}
                    to={item.href}
                    className={cn(
                      "block rounded-lg px-3 py-2 text-sm transition-colors",
                      location.pathname === item.href
                        ? "bg-secondary text-foreground font-medium"
                        : "text-muted-foreground hover:bg-secondary/50"
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
        <div className="mx-auto max-w-3xl px-8 py-8">
          <Outlet />
        </div>
      </main>
    </div>
  );
}
