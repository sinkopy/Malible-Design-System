import { Link, Outlet, useLocation } from "react-router-dom";
import { cn } from "@/lib/utils";

const navItems = [
  { href: "/", label: "Button" },
  { href: "/input", label: "Input" },
  { href: "/controls", label: "Controls" },
];

export default function Layout() {
  const location = useLocation();
  
  return (
    <div className="min-h-screen">
      {/* Sidebar */}
      <aside className="fixed left-0 top-0 h-full w-56 border-r bg-background p-4">
        <div className="mb-8">
          <h1 className="text-lg font-bold">Malible DS</h1>
          <p className="text-xs text-muted-foreground">Design System</p>
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
      <main className="ml-56">
        <Outlet />
      </main>
    </div>
  );
}
