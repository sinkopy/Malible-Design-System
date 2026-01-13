interface DocPageProps {
  title: string;
  description: string;
  category?: string; // "Components" | "Foundation"
  children: React.ReactNode;
}

export function DocPage({ title, description, category = "Components", children }: DocPageProps) {
  return (
    <div className="space-y-8">
      {/* Header */}
      <div className="space-y-4 pb-4 border-b">
        {/* Breadcrumb */}
        <p className="text-sm text-muted-foreground">
          Docs <span className="mx-1">/</span> {category} <span className="mx-1">/</span> {title}
        </p>
        
        {/* Title + Description */}
        <div className="space-y-1">
          <h1>{title}</h1>
          <p className="text-lg text-muted-foreground">{description}</p>
        </div>
      </div>

      {/* Content */}
      <div className="space-y-8">
        {children}
      </div>
    </div>
  );
}

interface DocSectionProps {
  title: string;
  description?: string;
  children: React.ReactNode;
}

export function DocSection({ title, description, children }: DocSectionProps) {
  return (
    <div className="space-y-4">
      <div className="space-y-1">
        <p className="text-lg font-medium">{title}</p>
        {description && (
          <p className="text-sm text-muted-foreground">{description}</p>
        )}
      </div>
      {children}
    </div>
  );
}
