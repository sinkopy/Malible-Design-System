interface DocPageProps {
  title: string;
  description: string;
  children: React.ReactNode;
}

export function DocPage({ title, description, children }: DocPageProps) {
  return (
    <div className="space-y-8 pb-16">
      {/* Header */}
      <div className="space-y-2">
        <h1 className="text-3xl font-bold tracking-tight">{title}</h1>
        <p className="text-lg text-muted-foreground">{description}</p>
      </div>

      {/* Content */}
      <div className="space-y-12">
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
        <h2 className="text-xl font-semibold tracking-tight">{title}</h2>
        {description && (
          <p className="text-sm text-muted-foreground">{description}</p>
        )}
      </div>
      {children}
    </div>
  );
}
