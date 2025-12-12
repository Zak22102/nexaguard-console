import * as React from "react";
import { cva, type VariantProps } from "class-variance-authority";

import { cn } from "@/lib/utils";

const badgeVariants = cva(
  "inline-flex items-center rounded-full border px-2.5 py-0.5 text-xs font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2",
  {
    variants: {
      variant: {
        default: "border-transparent bg-primary text-primary-foreground",
        secondary: "border-transparent bg-secondary text-secondary-foreground",
        destructive: "border-transparent bg-destructive text-destructive-foreground",
        outline: "text-foreground border-border",
        // Severity variants for NexaGuard
        success: "border-transparent bg-success/20 text-success",
        warning: "border-transparent bg-warning/20 text-warning",
        danger: "border-transparent bg-danger/20 text-danger",
        info: "border-transparent bg-info/20 text-info",
        // Log level variants
        critical: "border-transparent bg-danger/20 text-danger font-bold",
        error: "border-transparent bg-danger/20 text-danger",
        warn: "border-transparent bg-warning/20 text-warning",
        infoLevel: "border-transparent bg-info/20 text-info",
        // Status variants
        connected: "border-transparent bg-success/20 text-success",
        disconnected: "border-transparent bg-muted text-muted-foreground",
        pending: "border-transparent bg-warning/20 text-warning",
        // Compliance variants
        compliant: "border-transparent bg-success/20 text-success",
        partial: "border-transparent bg-warning/20 text-warning",
        nonCompliant: "border-transparent bg-danger/20 text-danger",
        // Risk variants
        low: "border-transparent bg-success/20 text-success",
        medium: "border-transparent bg-warning/20 text-warning",
        high: "border-transparent bg-danger/20 text-danger",
        // Suspicious
        suspicious: "border-danger/50 bg-danger/10 text-danger",
      },
    },
    defaultVariants: {
      variant: "default",
    },
  },
);

export interface BadgeProps extends React.HTMLAttributes<HTMLDivElement>, VariantProps<typeof badgeVariants> {}

function Badge({ className, variant, ...props }: BadgeProps) {
  return <div className={cn(badgeVariants({ variant }), className)} {...props} />;
}

export { Badge, badgeVariants };
