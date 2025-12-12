import { AppShell } from "@/components/layout/AppShell";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { dummyDarkweb, dummyDarkwebStats } from "@/data/dummyDarkweb";
import { Globe, Mail, Key, Building, AlertTriangle, Calendar, ExternalLink } from "lucide-react";

export default function DarkWebPage() {
  const getRiskBadge = (risk: string) => {
    switch (risk) {
      case "High":
        return <Badge variant="danger">Høj</Badge>;
      case "Medium":
        return <Badge variant="warning">Medium</Badge>;
      case "Low":
        return <Badge variant="success">Lav</Badge>;
      default:
        return <Badge variant="secondary">{risk}</Badge>;
    }
  };

  const getTypeIcon = (type: string) => {
    switch (type) {
      case "email":
        return <Mail className="w-4 h-4" />;
      case "password":
        return <Key className="w-4 h-4" />;
      case "domain":
        return <Building className="w-4 h-4" />;
      default:
        return <Globe className="w-4 h-4" />;
    }
  };

  return (
    <AppShell>
      {/* TODO: Insert API call here for darkweb data (når klart) */}
      <div className="space-y-8 animate-fade-in">
        {/* Page header */}
        <div>
          <h1 className="font-heading text-3xl font-bold">Dark Web Monitoring</h1>
          <p className="text-muted-foreground mt-1">Overvågning af lækager og eksponeringer på dark web</p>
        </div>

        {/* Stats Cards */}
        <div className="grid gap-6 md:grid-cols-3">
          <Card className="border-danger/20">
            <CardContent className="pt-6">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-lg bg-danger/10 border border-danger/30 flex items-center justify-center">
                  <Mail className="w-6 h-6 text-danger" />
                </div>
                <div>
                  <div className="text-3xl font-heading font-bold text-danger">
                    {dummyDarkwebStats.leakedEmails}
                  </div>
                  <p className="text-sm text-muted-foreground">Lækede emails</p>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card className="border-warning/20">
            <CardContent className="pt-6">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-lg bg-warning/10 border border-warning/30 flex items-center justify-center">
                  <Key className="w-6 h-6 text-warning" />
                </div>
                <div>
                  <div className="text-3xl font-heading font-bold text-warning">
                    {dummyDarkwebStats.exposedPasswords}
                  </div>
                  <p className="text-sm text-muted-foreground">Eksponerede adgangskoder</p>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card className="border-info/20">
            <CardContent className="pt-6">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-lg bg-info/10 border border-info/30 flex items-center justify-center">
                  <Building className="w-6 h-6 text-info" />
                </div>
                <div>
                  <div className="text-3xl font-heading font-bold text-info">
                    {dummyDarkwebStats.domainMentions}
                  </div>
                  <p className="text-sm text-muted-foreground">Domænefund</p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Alert Banner */}
        <Card className="bg-danger/5 border-danger/20">
          <CardContent className="py-4">
            <div className="flex items-center gap-4">
              <AlertTriangle className="w-6 h-6 text-danger flex-shrink-0" />
              <div className="flex-1">
                <p className="font-medium text-danger">Kritiske fund opdaget</p>
                <p className="text-sm text-muted-foreground">
                  Der er fundet {dummyDarkwebStats.exposedPasswords} eksponerede adgangskoder. Vi anbefaler øjeblikkelig handling.
                </p>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Leaks Table */}
        <Card>
          <CardHeader>
            <div className="flex items-center justify-between">
              <div>
                <CardTitle className="flex items-center gap-2">
                  <Globe className="w-5 h-5 text-primary" />
                  Dark web fund
                </CardTitle>
                <CardDescription>Oversigt over alle detekterede lækager</CardDescription>
              </div>
              <div className="text-sm text-muted-foreground flex items-center gap-2">
                <Calendar className="w-4 h-4" />
                Sidst scannet: {new Date(dummyDarkwebStats.lastScan).toLocaleDateString("da-DK")}
              </div>
            </div>
          </CardHeader>
          <CardContent>
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead>
                  <tr className="border-b border-border">
                    <th className="text-left py-3 px-4 text-sm font-medium text-muted-foreground">Type</th>
                    <th className="text-left py-3 px-4 text-sm font-medium text-muted-foreground">Email</th>
                    <th className="text-left py-3 px-4 text-sm font-medium text-muted-foreground">Fundet dato</th>
                    <th className="text-left py-3 px-4 text-sm font-medium text-muted-foreground">Kilde</th>
                    <th className="text-left py-3 px-4 text-sm font-medium text-muted-foreground">Risiko</th>
                  </tr>
                </thead>
                <tbody>
                  {dummyDarkweb.map((leak) => (
                    <tr
                      key={leak.id}
                      className="border-b border-border hover:bg-secondary/30 transition-colors"
                    >
                      <td className="py-3 px-4">
                        <div className="w-8 h-8 rounded-lg bg-secondary flex items-center justify-center">
                          {getTypeIcon(leak.type)}
                        </div>
                      </td>
                      <td className="py-3 px-4 font-medium">{leak.email}</td>
                      <td className="py-3 px-4 text-sm text-muted-foreground">
                        {new Date(leak.foundDate).toLocaleDateString("da-DK")}
                      </td>
                      <td className="py-3 px-4 text-sm text-muted-foreground">
                        <div className="flex items-center gap-1">
                          {leak.source}
                          <ExternalLink className="w-3 h-3" />
                        </div>
                      </td>
                      <td className="py-3 px-4">{getRiskBadge(leak.risk)}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </CardContent>
        </Card>
      </div>
    </AppShell>
  );
}
