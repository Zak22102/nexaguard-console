import { cn } from "@/lib/utils";

interface RiskScoreGaugeProps {
  score: number;
  size?: "sm" | "md" | "lg";
  showLabel?: boolean;
  className?: string;
}

export function RiskScoreGauge({ score, size = "md", showLabel = true, className }: RiskScoreGaugeProps) {
  const getLevel = (score: number) => {
    if (score <= 40) return { level: "Low", color: "success" };
    if (score <= 70) return { level: "Medium", color: "warning" };
    return { level: "High", color: "danger" };
  };

  const { level, color } = getLevel(score);

  const sizeClasses = {
    sm: "w-24 h-24",
    md: "w-36 h-36",
    lg: "w-48 h-48",
  };

  const textSizes = {
    sm: "text-2xl",
    md: "text-4xl",
    lg: "text-5xl",
  };

  const strokeWidth = size === "sm" ? 6 : size === "md" ? 8 : 10;
  const radius = size === "sm" ? 40 : size === "md" ? 60 : 80;
  const circumference = 2 * Math.PI * radius;
  const progress = ((100 - score) / 100) * circumference;

  const colorClasses = {
    success: "stroke-success",
    warning: "stroke-warning",
    danger: "stroke-danger",
  };

  const glowClasses = {
    success: "drop-shadow-[0_0_10px_hsl(var(--success)/0.5)]",
    warning: "drop-shadow-[0_0_10px_hsl(var(--warning)/0.5)]",
    danger: "drop-shadow-[0_0_10px_hsl(var(--danger)/0.5)]",
  };

  const textColorClasses = {
    success: "text-success",
    warning: "text-warning",
    danger: "text-danger",
  };

  return (
    <div className={cn("flex flex-col items-center gap-3", className)}>
      <div className={cn("relative", sizeClasses[size])}>
        <svg className="w-full h-full -rotate-90" viewBox={`0 0 ${(radius + strokeWidth) * 2} ${(radius + strokeWidth) * 2}`}>
          {/* Background circle */}
          <circle
            cx={radius + strokeWidth}
            cy={radius + strokeWidth}
            r={radius}
            fill="none"
            stroke="hsl(var(--muted))"
            strokeWidth={strokeWidth}
            className="opacity-30"
          />
          {/* Progress circle */}
          <circle
            cx={radius + strokeWidth}
            cy={radius + strokeWidth}
            r={radius}
            fill="none"
            strokeWidth={strokeWidth}
            strokeDasharray={circumference}
            strokeDashoffset={progress}
            strokeLinecap="round"
            className={cn(colorClasses[color], glowClasses[color], "transition-all duration-1000")}
          />
        </svg>
        <div className="absolute inset-0 flex flex-col items-center justify-center">
          <span className={cn("font-heading font-bold", textSizes[size], textColorClasses[color])}>
            {score}
          </span>
          {showLabel && (
            <span className="text-xs text-muted-foreground uppercase tracking-wider mt-1">
              Risk Score
            </span>
          )}
        </div>
      </div>
      {showLabel && (
        <span className={cn("text-sm font-medium uppercase tracking-wider", textColorClasses[color])}>
          {level}
        </span>
      )}
    </div>
  );
}
