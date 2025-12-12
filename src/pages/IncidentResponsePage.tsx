import { useState } from "react";
import { AppShell } from "@/components/layout/AppShell";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { dummyLogs, LogEntry } from "@/data/dummyLogs";
import { AlertTriangle, Brain, ChevronRight, Download, MessageSquare, Send } from "lucide-react";

export default function IncidentResponsePage() {
  const [selectedIncident, setSelectedIncident] = useState<LogEntry | null>(
    dummyLogs.filter((log) => log.suspicious)[0] || null
  );
  const [chatMessage, setChatMessage] = useState("");

  const suspiciousLogs = dummyLogs.filter((log) => log.suspicious);

  const getLevelBadge = (level: string) => {
    switch (level) {
      case "CRITICAL":
        return <Badge variant="critical">CRITICAL</Badge>;
      case "ERROR":
        return <Badge variant="danger">ERROR</Badge>;
      case "WARNING":
        return <Badge variant="warning">WARNING</Badge>;
      default:
        return <Badge variant="secondary">{level}</Badge>;
    }
  };

  const handleSendMessage = () => {
    if (!chatMessage.trim()) return;
    // TODO: POST /ai/analyze-log
    setChatMessage("");
  };

  return (
    <AppShell>
      <div className="space-y-8 animate-fade-in">
        {/* Page header */}
        <div>
          <h1 className="font-heading text-3xl font-bold">Incident Response Advisor</h1>
          <p className="text-muted-foreground mt-1">AI-assisteret håndtering af sikkerhedshændelser</p>
        </div>

        <div className="grid gap-6 lg:grid-cols-3">
          {/* Incidents List */}
          <Card className="lg:col-span-1">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <AlertTriangle className="w-5 h-5 text-warning" />
                Hændelser
              </CardTitle>
              <CardDescription>{suspiciousLogs.length} aktive hændelser</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-2">
                {suspiciousLogs.map((log) => (
                  <button
                    key={log.id}
                    onClick={() => setSelectedIncident(log)}
                    className={`w-full text-left p-4 rounded-lg border transition-all ${
                      selectedIncident?.id === log.id
                        ? "bg-primary/10 border-primary/50"
                        : "bg-secondary/30 border-border hover:border-primary/30"
                    }`}
                  >
                    <div className="flex items-center justify-between mb-2">
                      {getLevelBadge(log.level)}
                      <ChevronRight className="w-4 h-4 text-muted-foreground" />
                    </div>
                    <p className="text-sm font-medium line-clamp-2">{log.message}</p>
                    <p className="text-xs text-muted-foreground mt-1">{log.source}</p>
                  </button>
                ))}
              </div>
            </CardContent>
          </Card>

          {/* AI Advisor */}
          <Card className="lg:col-span-2">
            <CardHeader>
              <div className="flex items-center justify-between">
                <div>
                  <CardTitle className="flex items-center gap-2">
                    <Brain className="w-5 h-5 text-primary" />
                    AI Advisor
                  </CardTitle>
                  <CardDescription>
                    {selectedIncident
                      ? "Analyse og anbefalinger for valgt hændelse"
                      : "Vælg en hændelse for at se analyse"}
                  </CardDescription>
                </div>
                {selectedIncident && (
                  <Button variant="outline" size="sm">
                    <Download className="w-4 h-4" />
                    Eksportér PDF
                  </Button>
                )}
              </div>
            </CardHeader>
            <CardContent>
              {selectedIncident ? (
                <div className="space-y-6">
                  {/* Incident summary */}
                  <div className="p-4 rounded-lg bg-secondary/30 border border-border">
                    <div className="flex items-center gap-2 mb-2">
                      {getLevelBadge(selectedIncident.level)}
                      <span className="text-sm text-muted-foreground">{selectedIncident.source}</span>
                    </div>
                    <p className="text-sm">{selectedIncident.message}</p>
                  </div>

                  {/* AI Analysis */}
                  {/* TODO: POST /ai/analyze-log */}
                  <div className="space-y-4">
                    <div className="p-4 rounded-lg bg-primary/5 border border-primary/20">
                      <div className="flex items-start gap-3">
                        <div className="w-8 h-8 rounded-lg bg-primary/20 flex items-center justify-center flex-shrink-0">
                          <Brain className="w-4 h-4 text-primary" />
                        </div>
                        <div className="space-y-3 flex-1">
                          <h4 className="font-medium">AI Forklaring</h4>
                          <p className="text-sm text-muted-foreground">
                            {selectedIncident.details ||
                              "Denne hændelse indikerer potentiel uautoriseret adgang. Baseret på log-mønsteret ser det ud til, at der har været flere mislykkede login-forsøg efterfulgt af en succesfuld godkendelse, hvilket kan tyde på et brute force-angreb eller credential stuffing."}
                          </p>
                        </div>
                      </div>
                    </div>

                    {/* Step by step handling */}
                    <div className="space-y-3">
                      <h4 className="font-medium">Anbefalet handling</h4>
                      <div className="space-y-3">
                        {[
                          "Verificér brugerens identitet ved at kontakte dem direkte",
                          "Gennemgå login-historik for brugeren de sidste 30 dage",
                          "Overvej at nulstille brugerens adgangskode som sikkerhedsforanstaltning",
                          "Bloker den mistænkelige IP-adresse midlertidigt",
                          "Dokumentér hændelsen og eventuelle trufne foranstaltninger",
                        ].map((step, i) => (
                          <div
                            key={i}
                            className="flex items-start gap-3 p-3 rounded-lg bg-secondary/30 border border-border"
                          >
                            <div className="w-6 h-6 rounded-full bg-primary/20 flex items-center justify-center flex-shrink-0 text-xs font-medium text-primary">
                              {i + 1}
                            </div>
                            <p className="text-sm">{step}</p>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>

                  {/* Chat input */}
                  <div className="flex gap-3 pt-4 border-t border-border">
                    <div className="relative flex-1">
                      <MessageSquare className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
                      <input
                        type="text"
                        value={chatMessage}
                        onChange={(e) => setChatMessage(e.target.value)}
                        onKeyDown={(e) => e.key === "Enter" && handleSendMessage()}
                        placeholder="Stil et spørgsmål om denne hændelse..."
                        className="w-full h-10 pl-10 pr-4 rounded-lg bg-secondary border border-border focus:border-primary/50 focus:outline-none text-sm"
                      />
                    </div>
                    <Button variant="hero" size="icon" onClick={handleSendMessage}>
                      <Send className="w-4 h-4" />
                    </Button>
                  </div>
                </div>
              ) : (
                <div className="text-center py-12">
                  <Brain className="w-12 h-12 text-muted-foreground mx-auto mb-4" />
                  <p className="font-medium">Ingen hændelse valgt</p>
                  <p className="text-sm text-muted-foreground mt-1">
                    Vælg en hændelse fra listen for at se AI-analyse
                  </p>
                </div>
              )}
            </CardContent>
          </Card>
        </div>
      </div>
    </AppShell>
  );
}
