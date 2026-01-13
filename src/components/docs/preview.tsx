import { cn } from "@/lib/utils";

interface PreviewProps {
  children: React.ReactNode;
  className?: string;
}

export function Preview({ children, className }: PreviewProps) {
  return (
    <div
      className={cn(
        "flex min-h-[150px] w-full items-center justify-center rounded-md border bg-background p-10",
        className
      )}
    >
      {children}
    </div>
  );
}
