import { cn } from "@/lib/utils";

interface PreviewProps {
  children: React.ReactNode;
  className?: string;
}

export function Preview({ children, className }: PreviewProps) {
  return (
    <div
      className={cn(
        "flex min-h-40 w-full items-center justify-center rounded-lg border bg-background p-8",
        className
      )}
    >
      {children}
    </div>
  );
}
