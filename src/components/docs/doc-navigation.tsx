import { Link } from "react-router-dom";
import { ArrowLeft, ArrowRight } from "@phosphor-icons/react";

const allPages = [
  { href: "/tokens", label: "Tokens", category: "Foundation" },
  { href: "/colors", label: "Colors", category: "Foundation" },
  { href: "/typography", label: "Typography", category: "Foundation" },
  { href: "/", label: "Button", category: "Components" },
  { href: "/icon-button", label: "Icon Button", category: "Components" },
  { href: "/tooltip", label: "Tooltip", category: "Components" },
  { href: "/slider", label: "Slider", category: "Components" },
  { href: "/scroll-area", label: "Scroll Area", category: "Components" },
  { href: "/input", label: "Input", category: "Components" },
  { href: "/badge", label: "Badge", category: "Components" },
  { href: "/switch", label: "Switch", category: "Components" },
  { href: "/checkbox", label: "Checkbox", category: "Components" },
  { href: "/radio", label: "Radio", category: "Components" },
  { href: "/separator", label: "Separator", category: "Components" },
  { href: "/label", label: "Label", category: "Components" },
  { href: "/textarea", label: "Textarea", category: "Components" },
  { href: "/alert", label: "Alert", category: "Components" },
  { href: "/card", label: "Card", category: "Components" },
  { href: "/avatar", label: "Avatar", category: "Components" },
  { href: "/breadcrumb", label: "Breadcrumb", category: "Components" },
  { href: "/tabs", label: "Tabs", category: "Components" },
  { href: "/file-input", label: "FileInput", category: "Components" },
];

interface DocNavigationProps {
  currentPath: string;
}

export function DocNavigation({ currentPath }: DocNavigationProps) {
  const currentIndex = allPages.findIndex((page) => page.href === currentPath);
  const prev = currentIndex > 0 ? allPages[currentIndex - 1] : null;
  const next = currentIndex < allPages.length - 1 ? allPages[currentIndex + 1] : null;

  return (
    <div className="flex items-center justify-between pt-8 mt-8 border-t">
      {prev ? (
        <Link
          to={prev.href}
          className="group flex flex-col items-start gap-1"
        >
          <span className="text-xs text-muted-foreground flex items-center gap-1">
            <ArrowLeft size={12} className="transition-transform group-hover:-translate-x-1" />
            Previous
          </span>
          <span className="text-sm font-medium group-hover:text-primary transition-colors">
            {prev.label}
          </span>
        </Link>
      ) : (
        <div />
      )}

      {next ? (
        <Link
          to={next.href}
          className="group flex flex-col items-end gap-1"
        >
          <span className="text-xs text-muted-foreground flex items-center gap-1">
            Next
            <ArrowRight size={12} className="transition-transform group-hover:translate-x-1" />
          </span>
          <span className="text-sm font-medium group-hover:text-primary transition-colors">
            {next.label}
          </span>
        </Link>
      ) : (
        <div />
      )}
    </div>
  );
}
