import { AppShell } from "@/components/layout/AppShell";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { StatusBadge } from "@/components/ui/StatusBadge";
import { Mail, MessageSquare, Webhook, Monitor, Settings } from "lucide-react";

const integrations = [
  { id: "m365", name: "Microsoft 365", icon: Mail, status: "connected" as const, description: "Email og kalender integration" },
  { id: "google", name: "Google Workspace", icon: Mail, status: "disconnected" as const, description: "Gmail og Google Drive" },
  { id: "slack", name: "Slack", icon: MessageSquare, status: "connected" as const, description: "Notifikationer og alerts" },
  { id: "teams", name: "Microsoft Teams", icon: MessageSquare, status: "disconnected" as const, description: "Team kommunikation" },
  { id: "webhook", name: "Webhook", icon: Webhook, status: "pending" as const, description: "Custom integrations" },
  { id: "agent", name: "Log Agent", icon: Monitor, status: "connected" as const, description: "Linux/Windows logs" },
];

export default function IntegrationsPage() {
  // TODO: GET/POST /integrations når backend er klar
  return (
    <AppShell>
      <div className="space-y-8 animate-fade-in">
        <div>
          <h1 className="font-heading text-3xl font-bold">Integrationer</h1>
          <p className="text-muted-foreground mt-1">Forbind jeres systemer til NexaGuard</p>
        </div>
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {integrations.map((integration) => (
            <Card key={integration.id} className="hover:border-primary/30 transition-colors">
              <CardHeader className="pb-4">
                <div className="flex items-center justify-between">
                  <div className="w-12 h-12 rounded-lg bg-primary/10 border border-primary/30 flex items-center justify-center">
                    <integration.icon className="w-6 h-6 text-primary" />
                  </div>
                  <StatusBadge status={integration.status} />
                </div>
              </CardHeader>
              <CardContent className="space-y-4">
                <div>
                  <CardTitle className="text-lg">{integration.name}</CardTitle>
                  <p className="text-sm text-muted-foreground mt-1">{integration.description}</p>
                </div>
                <Button variant={integration.status === "connected" ? "outline" : "hero"} className="w-full">
                  <Settings className="w-4 h-4" />
                  {integration.status === "connected" ? "Konfigurer" : "Tilslut"}
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </AppShell>
  );
}
