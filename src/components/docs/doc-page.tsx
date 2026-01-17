import { useLocation } from "react-router-dom";
import { DocNavigation } from "./doc-navigation";
import { cn } from "@/lib/utils";

interface DocPageProps {
  title: string;
  description: string;
  category?: string; // "Components" | "Foundation"
  children: React.ReactNode;
}

export function DocPage({ title, description, category = "Components", children }: DocPageProps) {
  const location = useLocation();

  return (
    <div className="mx-auto w-full min-w-0">
      {/* Header */}
      <div className="mb-12 space-y-2">
        <p className="text-sm font-medium text-info tracking-tight">
          {category}
        </p>
        <h1 className="scroll-m-20 text-4xl font-bold tracking-tight">
          {title}
        </h1>
        <p className="text-lg text-muted-foreground leading-relaxed">
          {description}
        </p>
      </div>

      {/* Content */}
      <div className="space-y-16">
        {children}
      </div>

      {/* Navigation */}
      <div className="mt-20 pt-8 border-t">
        <DocNavigation currentPath={location.pathname} />
      </div>
    </div>
  );
}

interface DocSectionProps {
  title: string;
  description?: string;
  children: React.ReactNode;
  level?: 2 | 3;
}

export function DocSection({ title, description, children, level = 3 }: DocSectionProps) {
  const TitleTag = level === 2 ? "h2" : "h3";
  const spacingClass = level === 2 ? "mt-20" : "mt-12";

  return (
    <div className={cn("space-y-6", spacingClass)}>
      <div className="space-y-2">
        <TitleTag className={cn(
          "scroll-m-20 tracking-tight",
          level === 2 ? "text-3xl font-semibold border-b pb-2" : "text-xl font-semibold"
        )}>
          {title}
        </TitleTag>
        {description && (
          <p className="text-[15px] leading-relaxed text-muted-foreground">
            {description}
          </p>
        )}
      </div>
      <div className="mt-4">
        {children}
      </div>
    </div>
  );
}
