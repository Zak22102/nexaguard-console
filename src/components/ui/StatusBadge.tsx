import { cn } from "@/lib/utils";

interface StatusBadgeProps {
  status: "connected" | "disconnected" | "pending";
  className?: string;
}

export function StatusBadge({ status, className }: StatusBadgeProps) {
  const statusConfig = {
    connected: {
      label: "Connected",
      dotClass: "bg-success",
      textClass: "text-success",
    },
    disconnected: {
      label: "Not connected",
      dotClass: "bg-muted-foreground",
      textClass: "text-muted-foreground",
    },
    pending: {
      label: "Pending",
      dotClass: "bg-warning animate-pulse",
      textClass: "text-warning",
    },
  };

  const config = statusConfig[status];

  return (
    <div className={cn("flex items-center gap-2", className)}>
      <div className={cn("w-2 h-2 rounded-full", config.dotClass)} />
      <span className={cn("text-sm", config.textClass)}>{config.label}</span>
    </div>
  );
}
