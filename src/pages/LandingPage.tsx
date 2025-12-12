import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Shield, Brain, FileText, BarChart3, Check, ArrowRight } from "lucide-react";

const features = [
  {
    icon: Brain,
    title: "AI-analyse af hændelser",
    description: "Automatisk analyse og prioritering af sikkerhedshændelser med avanceret AI.",
  },
  {
    icon: FileText,
    title: "Automatiske sikkerhedsrapporter",
    description: "Generér ugentlige og månedlige rapporter med ét klik.",
  },
  {
    icon: Shield,
    title: "NIS2 compliance overblik",
    description: "Hold styr på jeres NIS2-krav med real-time compliance tracking.",
  },
];

const productFeatures = [
  {
    icon: BarChart3,
    title: "Global sikkerhedsscore",
    description: "Samlet risiko-score baseret på alle jeres sikkerhedsdata.",
  },
  {
    icon: Brain,
    title: "AI-sammendrag",
    description: "Daglige AI-genererede oversigter over sikkerhedssituationen.",
  },
  {
    icon: FileText,
    title: "Logs & hændelser",
    description: "Centraliseret visning af alle sikkerhedshændelser.",
  },
  {
    icon: Shield,
    title: "NIS2 compliance dashboard",
    description: "Komplet overblik over jeres NIS2-compliance status.",
  },
];

const pricingPlans = [
  {
    name: "Starter",
    price: "2.499",
    description: "For mindre virksomheder",
    features: ["Op til 5 brugere", "Basis log-analyse", "Ugentlige rapporter", "Email support"],
  },
  {
    name: "Business",
    price: "4.999",
    description: "For mellemstore virksomheder",
    features: [
      "Op til 25 brugere",
      "Avanceret AI-analyse",
      "NIS2 compliance modul",
      "Dark web monitoring",
      "Prioriteret support",
    ],
    popular: true,
  },
  {
    name: "Pro",
    price: "9.999",
    description: "For enterprise",
    features: [
      "Ubegrænsede brugere",
      "Full AI-suite",
      "Custom integrationer",
      "Incident response advisor",
      "Dedicated success manager",
      "SLA garanti",
    ],
  },
];

export default function LandingPage() {
  return (
    <div className="min-h-screen bg-background">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-lg border-b border-border">
        <div className="container mx-auto px-4 h-16 flex items-center justify-between">
          <Link to="/" className="flex items-center gap-2">
            <div className="w-8 h-8 rounded-lg bg-primary/20 border border-primary/50 flex items-center justify-center">
              <Shield className="w-5 h-5 text-primary" />
            </div>
            <span className="font-heading font-bold text-xl">NexaGuard</span>
          </Link>
          <div className="flex items-center gap-4">
            <Link to="/login">
              <Button variant="ghost">Log ind</Button>
            </Link>
            <Link to="/app">
              <Button variant="hero">Se platformen</Button>
            </Link>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative pt-32 pb-20 lg:pt-40 lg:pb-32 overflow-hidden">
        {/* Background glow */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-primary/5 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-primary/50 to-transparent" />
        
        <div className="container mx-auto px-4 relative">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              <h1 className="font-heading text-4xl lg:text-5xl xl:text-6xl font-bold leading-tight">
                NexaGuard – AI-sikkerhed og{" "}
                <span className="text-gradient-primary">NIS2-overblik</span>{" "}
                samlet ét sted
              </h1>
              <p className="text-lg text-muted-foreground max-w-xl">
                Automatisér loganalyse, sikkerhedsrapporter og NIS2-dokumentation. NexaGuard gør det nemt at forstå og reagere på trusler – uden et stort sikkerhedsteam.
              </p>
              <div className="flex flex-wrap gap-4">
                <Button variant="hero" size="lg">
                  Book demo
                  <ArrowRight className="w-4 h-4" />
                </Button>
                <Link to="/app">
                  <Button variant="heroOutline" size="lg">
                    Se platformen
                  </Button>
                </Link>
              </div>
            </div>

            {/* Dashboard mockup */}
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-r from-primary/20 to-transparent rounded-2xl blur-2xl" />
              <Card className="relative border-glow animate-float">
                <CardContent className="p-6 space-y-4">
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-muted-foreground">Global Risk Score</span>
                    <span className="text-xs px-2 py-1 rounded-full bg-warning/20 text-warning">Medium</span>
                  </div>
                  <div className="flex items-center gap-4">
                    <div className="text-5xl font-heading font-bold text-warning">72</div>
                    <div className="flex-1">
                      <div className="h-2 bg-muted rounded-full overflow-hidden">
                        <div className="h-full w-[72%] bg-warning rounded-full" />
                      </div>
                    </div>
                  </div>
                  <div className="grid grid-cols-3 gap-4 pt-4 border-t border-border">
                    <div className="text-center">
                      <div className="text-2xl font-heading font-bold text-danger">3</div>
                      <div className="text-xs text-muted-foreground">Kritiske</div>
                    </div>
                    <div className="text-center">
                      <div className="text-2xl font-heading font-bold text-warning">12</div>
                      <div className="text-xs text-muted-foreground">Advarsler</div>
                    </div>
                    <div className="text-center">
                      <div className="text-2xl font-heading font-bold text-success">89</div>
                      <div className="text-xs text-muted-foreground">OK</div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 border-t border-border">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <div
                key={index}
                className="flex flex-col items-center text-center p-8 rounded-xl bg-card border border-border hover:border-primary/30 transition-all duration-300"
              >
                <div className="w-14 h-14 rounded-xl bg-primary/10 border border-primary/30 flex items-center justify-center mb-6">
                  <feature.icon className="w-7 h-7 text-primary" />
                </div>
                <h3 className="font-heading text-xl font-semibold mb-3">{feature.title}</h3>
                <p className="text-muted-foreground">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Product Section */}
      <section className="py-20 border-t border-border">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="font-heading text-3xl lg:text-4xl font-bold mb-4">
              Alt hvad du behøver til{" "}
              <span className="text-gradient-primary">cybersikkerhed</span>
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              En komplet platform der samler alle jeres sikkerhedsbehov ét sted.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {productFeatures.map((feature, index) => (
              <Card key={index} className="hover:border-primary/30 transition-all duration-300">
                <CardContent className="p-6 space-y-4">
                  <div className="w-12 h-12 rounded-lg bg-primary/10 border border-primary/30 flex items-center justify-center">
                    <feature.icon className="w-6 h-6 text-primary" />
                  </div>
                  <h3 className="font-heading text-lg font-semibold">{feature.title}</h3>
                  <p className="text-sm text-muted-foreground">{feature.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section className="py-20 border-t border-border" id="pricing">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="font-heading text-3xl lg:text-4xl font-bold mb-4">
              Vælg den rigtige plan
            </h2>
            <p className="text-muted-foreground">
              Fleksible planer der passer til virksomheder i alle størrelser.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {pricingPlans.map((plan, index) => (
              <Card
                key={index}
                className={`relative ${plan.popular ? "border-primary/50 border-glow" : ""}`}
              >
                {plan.popular && (
                  <div className="absolute -top-3 left-1/2 -translate-x-1/2 px-3 py-1 bg-primary text-primary-foreground text-xs font-medium rounded-full">
                    Mest populær
                  </div>
                )}
                <CardContent className="p-8 space-y-6">
                  <div>
                    <h3 className="font-heading text-xl font-semibold">{plan.name}</h3>
                    <p className="text-sm text-muted-foreground">{plan.description}</p>
                  </div>
                  <div className="flex items-baseline gap-1">
                    <span className="font-heading text-4xl font-bold">{plan.price}</span>
                    <span className="text-muted-foreground">DKK/md</span>
                  </div>
                  <ul className="space-y-3">
                    {plan.features.map((feature, i) => (
                      <li key={i} className="flex items-center gap-3 text-sm">
                        <Check className="w-4 h-4 text-success flex-shrink-0" />
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                  <Button
                    variant={plan.popular ? "hero" : "outline"}
                    className="w-full"
                  >
                    {/* TODO: Insert Stripe Checkout session here */}
                    Kom i gang
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 border-t border-border relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-primary/5 via-transparent to-primary/5" />
        <div className="container mx-auto px-4 relative text-center">
          <h2 className="font-heading text-3xl lg:text-4xl font-bold mb-6">
            Klar til at løfte jeres sikkerhed?
          </h2>
          <p className="text-muted-foreground mb-8 max-w-xl mx-auto">
            Start i dag og få overblik over jeres sikkerhedssituation på få minutter.
          </p>
          <Button variant="hero" size="xl">
            Book demo
            <ArrowRight className="w-5 h-5" />
          </Button>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 border-t border-border">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <div className="flex items-center gap-2">
              <div className="w-6 h-6 rounded-lg bg-primary/20 border border-primary/50 flex items-center justify-center">
                <Shield className="w-4 h-4 text-primary" />
              </div>
              <span className="font-heading font-semibold">NexaGuard</span>
            </div>
            <p className="text-sm text-muted-foreground">
              © 2024 NexaGuard. Alle rettigheder forbeholdes.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}
