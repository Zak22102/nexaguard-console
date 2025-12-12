import { useState } from "react";
import { AppShell } from "@/components/layout/AppShell";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Sheet, SheetContent, SheetHeader, SheetTitle, SheetDescription } from "@/components/ui/sheet";
import { dummyLogs, LogEntry } from "@/data/dummyLogs";
import { Search, Filter, Brain, ChevronLeft, ChevronRight, AlertTriangle, X } from "lucide-react";

export default function LogsPage() {
  const [selectedLog, setSelectedLog] = useState<LogEntry | null>(null);
  const [searchQuery, setSearchQuery] = useState("");
  const [levelFilter, setLevelFilter] = useState<string>("all");
  const [envFilter, setEnvFilter] = useState<string>("all");

  const filteredLogs = dummyLogs.filter((log) => {
    const matchesSearch = log.message.toLowerCase().includes(searchQuery.toLowerCase()) ||
                          log.source.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesLevel = levelFilter === "all" || log.level === levelFilter;
    const matchesEnv = envFilter === "all" || log.environment === envFilter;
    return matchesSearch && matchesLevel && matchesEnv;
  });

  const getLevelBadge = (level: string) => {
    switch (level) {
      case "CRITICAL":
        return <Badge variant="critical">CRITICAL</Badge>;
      case "ERROR":
        return <Badge variant="danger">ERROR</Badge>;
      case "WARNING":
        return <Badge variant="warning">WARNING</Badge>;
      case "INFO":
        return <Badge variant="infoLevel">INFO</Badge>;
      default:
        return <Badge variant="secondary">{level}</Badge>;
    }
  };

  return (
    <AppShell>
      <div className="space-y-8 animate-fade-in">
        {/* Page header */}
        <div>
          <h1 className="font-heading text-3xl font-bold">Logs</h1>
          <p className="text-muted-foreground mt-1">Alle sikkerhedshændelser og system logs</p>
        </div>

        {/* Filters */}
        <Card>
          <CardContent className="pt-6">
            <div className="flex flex-col md:flex-row gap-4">
              <div className="relative flex-1">
                <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
                <Input
                  placeholder="Søg i logs..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="pl-10"
                />
              </div>
              <div className="flex gap-4">
                <Select value={levelFilter} onValueChange={setLevelFilter}>
                  <SelectTrigger className="w-[150px]">
                    <Filter className="w-4 h-4 mr-2" />
                    <SelectValue placeholder="Niveau" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="all">Alle niveauer</SelectItem>
                    <SelectItem value="CRITICAL">Critical</SelectItem>
                    <SelectItem value="ERROR">Error</SelectItem>
                    <SelectItem value="WARNING">Warning</SelectItem>
                    <SelectItem value="INFO">Info</SelectItem>
                  </SelectContent>
                </Select>
                <Select value={envFilter} onValueChange={setEnvFilter}>
                  <SelectTrigger className="w-[150px]">
                    <SelectValue placeholder="Environment" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="all">Alle miljøer</SelectItem>
                    <SelectItem value="Production">Production</SelectItem>
                    <SelectItem value="Staging">Staging</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Logs table */}
        <Card>
          <CardHeader>
            <CardTitle>Log oversigt</CardTitle>
            <CardDescription>
              Viser {filteredLogs.length} af {dummyLogs.length} logs
            </CardDescription>
          </CardHeader>
          <CardContent>
            {/* TODO: Insert API call here (GET /logs) */}
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead>
                  <tr className="border-b border-border">
                    <th className="text-left py-3 px-4 text-sm font-medium text-muted-foreground">Tid</th>
                    <th className="text-left py-3 px-4 text-sm font-medium text-muted-foreground">Kilde</th>
                    <th className="text-left py-3 px-4 text-sm font-medium text-muted-foreground">Niveau</th>
                    <th className="text-left py-3 px-4 text-sm font-medium text-muted-foreground">Miljø</th>
                    <th className="text-left py-3 px-4 text-sm font-medium text-muted-foreground">Besked</th>
                    <th className="text-left py-3 px-4 text-sm font-medium text-muted-foreground">Status</th>
                    <th className="text-right py-3 px-4 text-sm font-medium text-muted-foreground">Handling</th>
                  </tr>
                </thead>
                <tbody>
                  {filteredLogs.map((log) => (
                    <tr
                      key={log.id}
                      className="border-b border-border hover:bg-secondary/30 transition-colors cursor-pointer"
                      onClick={() => setSelectedLog(log)}
                    >
                      <td className="py-3 px-4 text-sm whitespace-nowrap">
                        {new Date(log.timestamp).toLocaleTimeString("da-DK", {
                          hour: "2-digit",
                          minute: "2-digit",
                        })}
                      </td>
                      <td className="py-3 px-4 text-sm">{log.source}</td>
                      <td className="py-3 px-4">{getLevelBadge(log.level)}</td>
                      <td className="py-3 px-4 text-sm text-muted-foreground">{log.environment}</td>
                      <td className="py-3 px-4 text-sm max-w-md truncate">{log.message}</td>
                      <td className="py-3 px-4">
                        {log.suspicious && <Badge variant="suspicious">Mistænkelig</Badge>}
                      </td>
                      <td className="py-3 px-4 text-right">
                        <Button variant="ghost" size="sm" onClick={(e) => { e.stopPropagation(); setSelectedLog(log); }}>
                          <Brain className="w-4 h-4" />
                          <span className="ml-2 hidden lg:inline">AI analyse</span>
                        </Button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            {/* Pagination */}
            <div className="flex items-center justify-between mt-6 pt-6 border-t border-border">
              <p className="text-sm text-muted-foreground">
                Side 1 af 1
              </p>
              <div className="flex gap-2">
                <Button variant="outline" size="sm" disabled>
                  <ChevronLeft className="w-4 h-4" />
                  Forrige
                </Button>
                <Button variant="outline" size="sm" disabled>
                  Næste
                  <ChevronRight className="w-4 h-4" />
                </Button>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Log detail sheet */}
        <Sheet open={!!selectedLog} onOpenChange={() => setSelectedLog(null)}>
          <SheetContent className="sm:max-w-lg">
            <SheetHeader>
              <SheetTitle className="flex items-center gap-2">
                <Brain className="w-5 h-5 text-primary" />
                AI-analyse
              </SheetTitle>
              <SheetDescription>
                Detaljeret analyse af hændelsen
              </SheetDescription>
            </SheetHeader>
            {selectedLog && (
              <div className="mt-6 space-y-6">
                {/* TODO: Insert API call here (POST /ai/analyze-log) for modal-detaljer */}
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-muted-foreground">Kilde</span>
                    <span className="font-medium">{selectedLog.source}</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-muted-foreground">Niveau</span>
                    {getLevelBadge(selectedLog.level)}
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-muted-foreground">Tid</span>
                    <span className="text-sm">
                      {new Date(selectedLog.timestamp).toLocaleString("da-DK")}
                    </span>
                  </div>
                </div>

                <div className="p-4 rounded-lg bg-secondary/50 border border-border">
                  <p className="text-sm">{selectedLog.message}</p>
                </div>

                {selectedLog.details && (
                  <div className="space-y-2">
                    <h4 className="font-medium text-sm">AI-vurdering</h4>
                    <div className="p-4 rounded-lg bg-primary/5 border border-primary/20">
                      <p className="text-sm text-muted-foreground">{selectedLog.details}</p>
                    </div>
                  </div>
                )}

                {selectedLog.suspicious && (
                  <div className="p-4 rounded-lg bg-danger/10 border border-danger/20 flex items-start gap-3">
                    <AlertTriangle className="w-5 h-5 text-danger flex-shrink-0 mt-0.5" />
                    <div>
                      <h4 className="font-medium text-danger">Mistænkelig aktivitet</h4>
                      <p className="text-sm text-muted-foreground mt-1">
                        Denne hændelse er markeret som mistænkelig baseret på AI-analyse.
                      </p>
                    </div>
                  </div>
                )}

                <div className="flex gap-3">
                  <Button variant="hero" className="flex-1">
                    Marker som undersøgt
                  </Button>
                  <Button variant="outline">
                    Eksportér
                  </Button>
                </div>
              </div>
            )}
          </SheetContent>
        </Sheet>
      </div>
    </AppShell>
  );
}
