import { cn } from "@/lib/utils";

export function Badge({
  className,
  children,
}: {
  className?: string;
  children: React.ReactNode;
}) {
  return (
    <span
      className={cn(
        "inline-flex items-center rounded-full border border-border/50 bg-muted/60 px-3 py-1 text-xs font-medium",
        className
      )}
    >
      {children}
    </span>
  );
}
