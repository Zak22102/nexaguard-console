import { AppShell } from "@/components/layout/AppShell";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { RiskScoreGauge } from "@/components/ui/RiskScoreGauge";
import { ComplianceBar } from "@/components/ui/ComplianceBar";
import {
  dummyNis2Categories,
  dummyNis2Violations,
  dummyNis2Recommendations,
  dummyNis2OverallScore,
} from "@/data/dummyNis2";
import { Shield, AlertTriangle, Lightbulb, Calendar } from "lucide-react";

export default function NIS2Page() {
  const getSeverityBadge = (severity: string) => {
    switch (severity) {
      case "High":
        return <Badge variant="danger">Høj</Badge>;
      case "Medium":
        return <Badge variant="warning">Medium</Badge>;
      case "Low":
        return <Badge variant="success">Lav</Badge>;
      default:
        return <Badge variant="secondary">{severity}</Badge>;
    }
  };

  const getPriorityBadge = (priority: string) => {
    switch (priority) {
      case "High":
        return <Badge variant="danger">Høj prioritet</Badge>;
      case "Medium":
        return <Badge variant="warning">Medium prioritet</Badge>;
      case "Low":
        return <Badge variant="success">Lav prioritet</Badge>;
      default:
        return <Badge variant="secondary">{priority}</Badge>;
    }
  };

  return (
    <AppShell>
      {/* TODO: NIS2 compliance data kan tilføjes senere */}
      <div className="space-y-8 animate-fade-in">
        {/* Page header */}
        <div>
          <h1 className="font-heading text-3xl font-bold">NIS2 Compliance</h1>
          <p className="text-muted-foreground mt-1">Overblik over jeres NIS2-compliance status</p>
        </div>

        <div className="grid gap-6 lg:grid-cols-3">
          {/* Overall Score */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Shield className="w-5 h-5 text-primary" />
                Overordnet compliance
              </CardTitle>
              <CardDescription>Samlet NIS2-score</CardDescription>
            </CardHeader>
            <CardContent className="flex justify-center">
              <RiskScoreGauge score={dummyNis2OverallScore} size="lg" showLabel={false} />
            </CardContent>
          </Card>

          {/* Category Bars */}
          <Card className="lg:col-span-2">
            <CardHeader>
              <CardTitle>Compliance pr. kategori</CardTitle>
              <CardDescription>Status på de fem hovedområder</CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              {dummyNis2Categories.map((category) => (
                <ComplianceBar key={category.id} label={category.name} score={category.score} />
              ))}
            </CardContent>
          </Card>
        </div>

        {/* Violations */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <AlertTriangle className="w-5 h-5 text-warning" />
              Brudte krav
            </CardTitle>
            <CardDescription>Krav der kræver opmærksomhed</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {dummyNis2Violations.map((violation) => (
                <div
                  key={violation.id}
                  className="p-4 rounded-lg bg-secondary/30 border border-border hover:border-primary/30 transition-colors"
                >
                  <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
                    <div className="space-y-1">
                      <div className="flex items-center gap-2">
                        <span className="font-medium">{violation.requirement}</span>
                        {getSeverityBadge(violation.severity)}
                      </div>
                      <p className="text-sm text-muted-foreground">{violation.description}</p>
                      <p className="text-xs text-muted-foreground">Kategori: {violation.category}</p>
                    </div>
                    {violation.deadline && (
                      <div className="flex items-center gap-2 text-sm text-muted-foreground whitespace-nowrap">
                        <Calendar className="w-4 h-4" />
                        Deadline: {new Date(violation.deadline).toLocaleDateString("da-DK")}
                      </div>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* Recommendations */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Lightbulb className="w-5 h-5 text-primary" />
              Anbefalinger
            </CardTitle>
            <CardDescription>Forslag til forbedring af compliance</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="grid gap-4 md:grid-cols-2">
              {dummyNis2Recommendations.map((rec) => (
                <div
                  key={rec.id}
                  className="p-4 rounded-lg bg-secondary/30 border border-border hover:border-primary/30 transition-colors"
                >
                  <div className="flex items-start justify-between gap-4 mb-2">
                    <h4 className="font-medium">{rec.title}</h4>
                    {getPriorityBadge(rec.priority)}
                  </div>
                  <p className="text-sm text-muted-foreground mb-3">{rec.description}</p>
                  <div className="flex items-center gap-2 text-xs text-muted-foreground">
                    <span>Indsats:</span>
                    <Badge variant="secondary">{rec.effort}</Badge>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* Category Details */}
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-5">
          {dummyNis2Categories.map((category) => (
            <Card key={category.id}>
              <CardContent className="pt-6">
                <div className="text-center space-y-3">
                  <div
                    className={`text-3xl font-heading font-bold ${
                      category.score >= 80
                        ? "text-success"
                        : category.score >= 50
                        ? "text-warning"
                        : "text-danger"
                    }`}
                  >
                    {category.score}%
                  </div>
                  <h3 className="font-medium">{category.name}</h3>
                  <p className="text-xs text-muted-foreground">
                    {category.fulfilled} af {category.requirements} krav opfyldt
                  </p>
                  <Badge
                    variant={
                      category.status === "compliant"
                        ? "compliant"
                        : category.status === "partial"
                        ? "partial"
                        : "nonCompliant"
                    }
                  >
                    {category.status === "compliant"
                      ? "Compliant"
                      : category.status === "partial"
                      ? "Delvis"
                      : "Ikke compliant"}
                  </Badge>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </AppShell>
  );
}
