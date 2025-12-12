import { useState } from "react";
import { AppShell } from "@/components/layout/AppShell";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Switch } from "@/components/ui/switch";
import { User, Key, FileText, Shield, Eye, EyeOff, Copy, RefreshCw } from "lucide-react";

export default function SettingsPage() {
  const [showApiKey, setShowApiKey] = useState(false);
  const apiKey = "ng_live_sk_1234567890abcdef";
  // TODO: GET/POST workspace settings API

  return (
    <AppShell>
      <div className="space-y-8 animate-fade-in">
        <div>
          <h1 className="font-heading text-3xl font-bold">Indstillinger</h1>
          <p className="text-muted-foreground mt-1">Administrer din konto og workspace</p>
        </div>

        <div className="grid gap-6 lg:grid-cols-2">
          {/* Profile */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2"><User className="w-5 h-5 text-primary" />Profil</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="space-y-2"><Label>Navn</Label><Input defaultValue="Admin User" /></div>
              <div className="space-y-2"><Label>Email</Label><Input defaultValue="admin@virksomhed.dk" /></div>
              <div className="space-y-2"><Label>Virksomhed</Label><Input defaultValue="Virksomhed ApS" /></div>
              <Button variant="hero">Gem ændringer</Button>
            </CardContent>
          </Card>

          {/* API Key */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2"><Key className="w-5 h-5 text-primary" />API-nøgle</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="flex gap-2">
                <div className="relative flex-1">
                  <Input type={showApiKey ? "text" : "password"} value={apiKey} readOnly className="pr-10 font-mono text-sm" />
                  <button onClick={() => setShowApiKey(!showApiKey)} className="absolute right-3 top-1/2 -translate-y-1/2">
                    {showApiKey ? <EyeOff className="w-4 h-4" /> : <Eye className="w-4 h-4" />}
                  </button>
                </div>
                <Button variant="outline" size="icon"><Copy className="w-4 h-4" /></Button>
              </div>
              <Button variant="outline" className="w-full"><RefreshCw className="w-4 h-4" />Generér ny nøgle</Button>
            </CardContent>
          </Card>

          {/* Reports */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2"><FileText className="w-5 h-5 text-primary" />Rapporter</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="space-y-2"><Label>Modtager email</Label><Input defaultValue="admin@virksomhed.dk" /></div>
              <div className="flex items-center justify-between p-3 rounded-lg bg-secondary/30 border border-border">
                <span className="text-sm">Send ugentlig rapport</span><Switch defaultChecked />
              </div>
              <div className="flex items-center justify-between p-3 rounded-lg bg-secondary/30 border border-border">
                <span className="text-sm">Send månedlig rapport</span><Switch />
              </div>
            </CardContent>
          </Card>

          {/* Security */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2"><Shield className="w-5 h-5 text-primary" />Sikkerhed</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="flex items-center justify-between p-3 rounded-lg bg-secondary/30 border border-border">
                <div><p className="text-sm font-medium">To-faktor godkendelse</p><p className="text-xs text-muted-foreground">Ekstra sikkerhed</p></div>
                <Switch />
              </div>
              <div className="p-3 rounded-lg bg-secondary/30 border border-border">
                <p className="text-sm font-medium mb-2">Aktive sessioner</p>
                <div className="text-xs text-muted-foreground space-y-1">
                  <p>Chrome på Windows • Nu</p>
                  <p>Safari på iPhone • 2 timer siden</p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </AppShell>
  );
}
