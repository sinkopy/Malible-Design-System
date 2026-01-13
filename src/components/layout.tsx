import { Link, Outlet, useLocation } from "react-router-dom";
import { cn } from "@/lib/utils";

const navItems = [
  { href: "/", label: "Button" },
  { href: "/input", label: "Input" },
  { href: "/badge", label: "Badge" },
  { href: "/switch", label: "Switch" },
  { href: "/checkbox", label: "Checkbox" },
  { href: "/radio", label: "Radio" },
  { href: "/typography", label: "Typography" },
];

export default function Layout() {
  const location = useLocation();
  
  return (
    <div className="flex min-h-screen">
      {/* Sidebar */}
      <aside className="fixed left-0 top-0 h-screen w-56 border-r border-border bg-background p-6">
        <div className="mb-8">
          <h1 className="text-lg font-bold">Malible</h1>
          <p className="text-xs text-muted-foreground">v1.2</p>
        </div>
        <nav className="space-y-1">
          {navItems.map((item) => (
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
