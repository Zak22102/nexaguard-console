import { cn } from "@/lib/utils";

interface ComplianceBarProps {
  label: string;
  score: number;
  className?: string;
}

export function ComplianceBar({ label, score, className }: ComplianceBarProps) {
  const getColor = (score: number) => {
    if (score >= 80) return "bg-success";
    if (score >= 50) return "bg-warning";
    return "bg-danger";
  };

  const getGlow = (score: number) => {
    if (score >= 80) return "shadow-[0_0_10px_hsl(var(--success)/0.3)]";
    if (score >= 50) return "shadow-[0_0_10px_hsl(var(--warning)/0.3)]";
    return "shadow-[0_0_10px_hsl(var(--danger)/0.3)]";
  };

  return (
    <div className={cn("space-y-2", className)}>
      <div className="flex justify-between items-center">
        <span className="text-sm font-medium">{label}</span>
        <span className="text-sm text-muted-foreground">{score}%</span>
      </div>
      <div className="h-2 bg-muted rounded-full overflow-hidden">
        <div
          className={cn("h-full rounded-full transition-all duration-1000", getColor(score), getGlow(score))}
          style={{ width: `${score}%` }}
        />
      </div>
    </div>
  );
}
