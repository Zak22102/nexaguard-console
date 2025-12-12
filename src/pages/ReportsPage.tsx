import { useState } from "react";
import { AppShell } from "@/components/layout/AppShell";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { FileText, Download, Mail, Eye, Loader2 } from "lucide-react";

export default function ReportsPage() {
  const [isGenerating, setIsGenerating] = useState(false);
  const [pdfUrl, setPdfUrl] = useState<string | null>(null);

  const handleGenerateReport = async () => {
    setIsGenerating(true);
    // TODO: POST /reports/weekly
    // Simulate API call
    await new Promise((resolve) => setTimeout(resolve, 2000));
    setPdfUrl("dummy-report.pdf");
    setIsGenerating(false);
  };

  const handleDownload = () => {
    // TODO: GET /reports/download/<id>
    console.log("Downloading report...");
  };

  const handleEmail = () => {
    // TODO: Implement email sending
    console.log("Sending report via email...");
  };

  return (
    <AppShell>
      <div className="space-y-8 animate-fade-in">
        {/* Page header */}
        <div>
          <h1 className="font-heading text-3xl font-bold">Rapporter</h1>
          <p className="text-muted-foreground mt-1">Generér og download sikkerhedsrapporter</p>
        </div>

        <div className="grid gap-6 lg:grid-cols-3">
          {/* Actions Card */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <FileText className="w-5 h-5 text-primary" />
                Handlinger
              </CardTitle>
              <CardDescription>Generér og administrer rapporter</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <Button
                variant="hero"
                className="w-full"
                onClick={handleGenerateReport}
                disabled={isGenerating}
              >
                {isGenerating ? (
                  <>
                    <Loader2 className="w-4 h-4 animate-spin" />
                    Genererer...
                  </>
                ) : (
                  <>
                    <FileText className="w-4 h-4" />
                    Generér ugentlig rapport
                  </>
                )}
              </Button>

              <Button
                variant="outline"
                className="w-full"
                onClick={handleDownload}
                disabled={!pdfUrl}
              >
                <Download className="w-4 h-4" />
                Download PDF
              </Button>

              <Button
                variant="outline"
                className="w-full"
                onClick={handleEmail}
                disabled={!pdfUrl}
              >
                <Mail className="w-4 h-4" />
                Send via e-mail
              </Button>
            </CardContent>
          </Card>

          {/* PDF Viewer */}
          <Card className="lg:col-span-2">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Eye className="w-5 h-5 text-primary" />
                Rapport visning
              </CardTitle>
              <CardDescription>
                {pdfUrl ? "Seneste genererede rapport" : "Ingen rapport valgt endnu"}
              </CardDescription>
            </CardHeader>
            <CardContent>
              {pdfUrl ? (
                <div className="aspect-[4/3] bg-secondary/50 rounded-lg border border-border flex items-center justify-center">
                  <div className="text-center space-y-4">
                    <FileText className="w-16 h-16 text-primary mx-auto" />
                    <div>
                      <h3 className="font-heading font-semibold">Ugentlig Sikkerhedsrapport</h3>
                      <p className="text-sm text-muted-foreground mt-1">
                        Genereret {new Date().toLocaleDateString("da-DK")}
                      </p>
                    </div>
                    <Button variant="glow" onClick={handleDownload}>
                      <Download className="w-4 h-4" />
                      Download
                    </Button>
                  </div>
                </div>
              ) : (
                <div className="aspect-[4/3] bg-secondary/30 rounded-lg border border-dashed border-border flex items-center justify-center">
                  <div className="text-center space-y-3">
                    <FileText className="w-12 h-12 text-muted-foreground mx-auto" />
                    <div>
                      <p className="font-medium">Ingen rapport valgt endnu</p>
                      <p className="text-sm text-muted-foreground mt-1">
                        Klik på "Generér rapport" for at oprette en ny rapport
                      </p>
                    </div>
                  </div>
                </div>
              )}
            </CardContent>
          </Card>
        </div>

        {/* Recent Reports */}
        <Card>
          <CardHeader>
            <CardTitle>Tidligere rapporter</CardTitle>
            <CardDescription>Oversigt over genererede rapporter</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-3">
              {[
                { date: "2024-01-08", type: "Ugentlig", status: "Completed" },
                { date: "2024-01-01", type: "Ugentlig", status: "Completed" },
                { date: "2023-12-25", type: "Ugentlig", status: "Completed" },
                { date: "2023-12-01", type: "Månedlig", status: "Completed" },
              ].map((report, i) => (
                <div
                  key={i}
                  className="flex items-center justify-between p-4 rounded-lg bg-secondary/30 border border-border hover:border-primary/30 transition-colors"
                >
                  <div className="flex items-center gap-4">
                    <div className="w-10 h-10 rounded-lg bg-primary/10 border border-primary/30 flex items-center justify-center">
                      <FileText className="w-5 h-5 text-primary" />
                    </div>
                    <div>
                      <p className="font-medium">{report.type} rapport</p>
                      <p className="text-sm text-muted-foreground">{report.date}</p>
                    </div>
                  </div>
                  <Button variant="ghost" size="sm">
                    <Download className="w-4 h-4" />
                  </Button>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>
    </AppShell>
  );
}
