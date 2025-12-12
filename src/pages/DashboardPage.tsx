import { AppShell } from "@/components/layout/AppShell";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { RiskScoreGauge } from "@/components/ui/RiskScoreGauge";
import { dummyRisk, dummyAISummary, dummyTimeline } from "@/data/dummyRisk";
import { Brain, TrendingUp, AlertTriangle, CheckCircle2, Clock, ArrowRight, Eye, Activity } from "lucide-react";

export default function DashboardPage() {
  const getTimelineBadge = (severity: string) => {
    switch (severity) {
      case "critical":
        return <Badge variant="critical">Kritisk</Badge>;
      case "high":
        return <Badge variant="danger">Høj</Badge>;
      case "medium":
        return <Badge variant="warning">Medium</Badge>;
      case "low":
        return <Badge variant="success">Lav</Badge>;
      default:
        return <Badge variant="secondary">{severity}</Badge>;
    }
  };

  const getTimelineIcon = (type: string) => {
    switch (type) {
      case "incident":
        return <AlertTriangle className="w-4 h-4 text-danger" />;
      case "alert":
        return <Activity className="w-4 h-4 text-warning" />;
      case "resolved":
        return <CheckCircle2 className="w-4 h-4 text-success" />;
      default:
        return <Clock className="w-4 h-4 text-muted-foreground" />;
    }
  };

  return (
    <AppShell>
      <div className="space-y-8 animate-fade-in">
        {/* Page header */}
        <div>
          <h1 className="font-heading text-3xl font-bold">Dashboard</h1>
          <p className="text-muted-foreground mt-1">Overblik over jeres sikkerhedssituation</p>
        </div>

        {/* Main grid */}
        <div className="grid gap-6 lg:grid-cols-3">
          {/* Risk Score Card */}
          <Card className="lg:row-span-2">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Activity className="w-5 h-5 text-primary" />
                Global risiko-score
              </CardTitle>
              <CardDescription>Samlet vurdering baseret på alle data</CardDescription>
            </CardHeader>
            <CardContent className="flex flex-col items-center">
              {/* TODO: Insert API call here (POST /ai/threat-score + GET /logs) */}
              <RiskScoreGauge score={dummyRisk.score} size="lg" />
              
              <div className="w-full mt-6 pt-6 border-t border-border space-y-3">
                <div className="flex items-center justify-between text-sm">
                  <span className="text-muted-foreground">Trend</span>
                  <div className="flex items-center gap-1 text-danger">
                    <TrendingUp className="w-4 h-4" />
                    <span>Stigende</span>
                  </div>
                </div>
                <div className="flex items-center justify-between text-sm">
                  <span className="text-muted-foreground">Sidst opdateret</span>
                  <span>For 5 min. siden</span>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* AI Summary Card */}
          <Card className="lg:col-span-2">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Brain className="w-5 h-5 text-primary" />
                AI-sammendrag
              </CardTitle>
              <CardDescription>Automatisk genereret analyse</CardDescription>
            </CardHeader>
            <CardContent>
              {/* TODO: Insert API call here (POST /ai/daily-summary) */}
              <div className="grid gap-6 md:grid-cols-3">
                <div className="space-y-3">
                  <h4 className="font-medium text-sm flex items-center gap-2">
                    <Eye className="w-4 h-4 text-info" />
                    Hvad vi har observeret
                  </h4>
                  <ul className="space-y-2">
                    {dummyAISummary.observations.slice(0, 3).map((obs, i) => (
                      <li key={i} className="text-sm text-muted-foreground flex items-start gap-2">
                        <span className="w-1 h-1 rounded-full bg-info mt-2 flex-shrink-0" />
                        {obs}
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="space-y-3">
                  <h4 className="font-medium text-sm flex items-center gap-2">
                    <AlertTriangle className="w-4 h-4 text-warning" />
                    Mulige risici
                  </h4>
                  <ul className="space-y-2">
                    {dummyAISummary.risks.map((risk, i) => (
                      <li key={i} className="text-sm text-muted-foreground flex items-start gap-2">
                        <span className="w-1 h-1 rounded-full bg-warning mt-2 flex-shrink-0" />
                        {risk}
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="space-y-3">
                  <h4 className="font-medium text-sm flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-success" />
                    Forslag til handling
                  </h4>
                  <ul className="space-y-2">
                    {dummyAISummary.recommendations.slice(0, 3).map((rec, i) => (
                      <li key={i} className="text-sm text-muted-foreground flex items-start gap-2">
                        <span className="w-1 h-1 rounded-full bg-success mt-2 flex-shrink-0" />
                        {rec}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Quick stats */}
          <Card className="lg:col-span-2">
            <CardHeader>
              <CardTitle>Hurtig oversigt</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                <div className="p-4 rounded-lg bg-secondary/50 border border-border">
                  <div className="text-3xl font-heading font-bold text-danger">3</div>
                  <div className="text-sm text-muted-foreground">Kritiske hændelser</div>
                </div>
                <div className="p-4 rounded-lg bg-secondary/50 border border-border">
                  <div className="text-3xl font-heading font-bold text-warning">12</div>
                  <div className="text-sm text-muted-foreground">Advarsler</div>
                </div>
                <div className="p-4 rounded-lg bg-secondary/50 border border-border">
                  <div className="text-3xl font-heading font-bold text-primary">71%</div>
                  <div className="text-sm text-muted-foreground">NIS2 compliance</div>
                </div>
                <div className="p-4 rounded-lg bg-secondary/50 border border-border">
                  <div className="text-3xl font-heading font-bold text-info">5</div>
                  <div className="text-sm text-muted-foreground">Dark web fund</div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Timeline */}
        <Card>
          <CardHeader className="flex flex-row items-center justify-between">
            <div>
              <CardTitle className="flex items-center gap-2">
                <Clock className="w-5 h-5 text-primary" />
                Timeline over hændelser
              </CardTitle>
              <CardDescription>Seneste sikkerhedshændelser</CardDescription>
            </div>
            <Button variant="outline" size="sm">
              Se alle
              <ArrowRight className="w-4 h-4" />
            </Button>
          </CardHeader>
          <CardContent>
            {/* TODO: Insert API call here (GET /logs?limit=20) */}
            <div className="space-y-4">
              {dummyTimeline.map((event) => (
                <div
                  key={event.id}
                  className="flex items-start gap-4 p-4 rounded-lg bg-secondary/30 border border-border hover:border-primary/30 transition-colors cursor-pointer"
                >
                  <div className="w-10 h-10 rounded-lg bg-card border border-border flex items-center justify-center flex-shrink-0">
                    {getTimelineIcon(event.type)}
                  </div>
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center gap-2 mb-1">
                      <span className="font-medium">{event.title}</span>
                      {getTimelineBadge(event.severity)}
                    </div>
                    <p className="text-sm text-muted-foreground">{event.description}</p>
                  </div>
                  <div className="text-xs text-muted-foreground whitespace-nowrap">
                    {new Date(event.timestamp).toLocaleTimeString("da-DK", {
                      hour: "2-digit",
                      minute: "2-digit",
                    })}
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>
    </AppShell>
  );
}
