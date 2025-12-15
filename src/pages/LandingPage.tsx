import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Shield, Brain, FileText, BarChart3, Check, ArrowRight, AlertTriangle, Globe, Lock, Zap, Users, Clock, TrendingUp, Eye, Bell, Database, Server, MessageSquare, ChevronRight } from "lucide-react";
const heroStats = [{
  value: "99.9%",
  label: "Uptime"
}, {
  value: "< 1s",
  label: "Responstid"
}, {
  value: "500+",
  label: "Virksomheder"
}, {
  value: "24/7",
  label: "Overvågning"
}];
const features = [{
  icon: Brain,
  title: "AI-analyse af hændelser",
  description: "Automatisk analyse og prioritering af sikkerhedshændelser med avanceret AI."
}, {
  icon: FileText,
  title: "Automatiske sikkerhedsrapporter",
  description: "Generér ugentlige og månedlige rapporter med ét klik."
}, {
  icon: Shield,
  title: "NIS2 compliance overblik",
  description: "Hold styr på jeres NIS2-krav med real-time compliance tracking."
}];
const platformFeatures = [{
  icon: BarChart3,
  title: "Global sikkerhedsscore",
  description: "Samlet risiko-score baseret på alle jeres sikkerhedsdata. Få et klart billede af jeres sikkerhedsstatus på sekunder.",
  highlight: "Real-time scoring"
}, {
  icon: Brain,
  title: "AI-drevet analyse",
  description: "Vores AI analyserer tusindvis af logs og identificerer mønstre, trusler og anomalier automatisk.",
  highlight: "Machine Learning"
}, {
  icon: Eye,
  title: "Dark Web Monitoring",
  description: "Overvåg om jeres data, emails eller adgangskoder dukker op på dark web før det bliver et problem.",
  highlight: "Proaktiv beskyttelse"
}, {
  icon: FileText,
  title: "NIS2 Compliance",
  description: "Komplet dashboard til NIS2-krav med automatisk dokumentation og anbefalinger til forbedringer.",
  highlight: "EU-direktiv ready"
}, {
  icon: Bell,
  title: "Incident Response",
  description: "AI-drevet incident response advisor der guider jer gennem håndtering af sikkerhedshændelser step-by-step.",
  highlight: "Guidet respons"
}, {
  icon: Database,
  title: "Log Management",
  description: "Centraliser logs fra alle jeres systemer. Søg, filtrer og analyser med AI-assistance.",
  highlight: "Ubegrænset logs"
}];
const integrations = [{
  name: "Microsoft 365",
  icon: Server
}, {
  name: "Google Workspace",
  icon: Globe
}, {
  name: "Slack",
  icon: MessageSquare
}, {
  name: "Linux/Windows",
  icon: Database
}];
const useCases = [{
  title: "For IT-afdelinger",
  description: "Reducer tiden brugt på log-analyse med 80% og få AI-genererede indsigter der hjælper jer med at prioritere.",
  benefits: ["Automatisk triage", "Reduceret alert fatigue", "Prioriterede handlinger"]
}, {
  title: "For ledelsen",
  description: "Få klare, forståelige rapporter om virksomhedens sikkerhedsstatus uden teknisk jargon.",
  benefits: ["Executive dashboards", "Risiko-scoring", "Compliance status"]
}, {
  title: "For compliance",
  description: "Dokumentér jeres NIS2-indsats automatisk og hold styr på alle krav med real-time tracking.",
  benefits: ["Auto-dokumentation", "Gap-analyse", "Audit-ready reports"]
}];
const testimonials = [{
  quote: "NexaGuard har reduceret vores responstid på sikkerhedshændelser fra timer til minutter.",
  author: "Thomas Hansen",
  role: "IT-chef",
  company: "Dansk Finans A/S"
}, {
  quote: "Endelig en platform der gør NIS2 compliance overskuelig og håndterbar.",
  author: "Maria Nielsen",
  role: "CISO",
  company: "Nordic Tech Group"
}, {
  quote: "AI-analysen har fanget trusler vi aldrig ville have opdaget manuelt.",
  author: "Lars Petersen",
  role: "Security Manager",
  company: "Scandinavian Retail"
}];
const pricingPlans = [{
  name: "Starter",
  price: "2.499",
  description: "For mindre virksomheder",
  features: ["Op til 5 brugere", "Basis log-analyse", "Ugentlige rapporter", "Email support", "1 integration"]
}, {
  name: "Business",
  price: "4.999",
  description: "For mellemstore virksomheder",
  features: ["Op til 25 brugere", "Avanceret AI-analyse", "NIS2 compliance modul", "Dark web monitoring", "Prioriteret support", "5 integrationer", "API adgang"],
  popular: true
}, {
  name: "Enterprise",
  price: "Kontakt",
  description: "For store organisationer",
  features: ["Ubegrænsede brugere", "Full AI-suite", "Custom integrationer", "Incident response advisor", "Dedicated success manager", "SLA garanti", "On-premise mulighed", "Custom rapporter"]
}];
const faqs = [{
  question: "Hvad er NexaGuard?",
  answer: "NexaGuard er en AI-drevet cybersecurity platform der hjælper virksomheder med at overvåge, analysere og reagere på sikkerhedstrusler, samt dokumentere NIS2 compliance."
}, {
  question: "Hvordan fungerer AI-analysen?",
  answer: "Vores AI analyserer logs og sikkerhedsdata i realtid, identificerer mønstre og anomalier, og genererer handlingsorienterede anbefalinger."
}, {
  question: "Er NexaGuard GDPR-compliant?",
  answer: "Ja, NexaGuard er fuldt GDPR-compliant. Alle data behandles og opbevares i EU, og vi følger strenge sikkerhedsstandarder."
}, {
  question: "Hvor hurtigt kan vi komme i gang?",
  answer: "De fleste virksomheder er op at køre inden for 24 timer. Vores onboarding-team hjælper jer med opsætning og integrationer."
}];
export default function LandingPage() {
  return <div className="min-h-screen bg-background">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-lg border-b border-border">
        <div className="container mx-auto px-4 h-16 flex items-center justify-between">
          <Link to="/" className="flex items-center gap-2">
            <div className="w-8 h-8 rounded-lg bg-primary/20 border border-primary/50 flex items-center justify-center">
              <Shield className="w-5 h-5 text-primary" />
            </div>
            <span className="font-heading font-bold text-xl">NexaGuard</span>
          </Link>
          <div className="hidden md:flex items-center gap-8">
            <a href="#features" className="text-sm text-muted-foreground hover:text-foreground transition-colors">Funktioner</a>
            <a href="#platform" className="text-sm text-muted-foreground hover:text-foreground transition-colors">Platform</a>
            <a href="#pricing" className="text-sm text-muted-foreground hover:text-foreground transition-colors">Priser</a>
            <a href="#faq" className="text-sm text-muted-foreground hover:text-foreground transition-colors">FAQ</a>
          </div>
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
        {/* Background effects */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-primary/5 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-primary/50 to-transparent" />
        
        <div className="container mx-auto px-4 relative">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/30 text-sm">
                <Zap className="w-4 h-4 text-primary" />
                <span className="text-primary">NIS2-ready platform</span>
              </div>
              <h1 className="font-heading text-4xl lg:text-5xl xl:text-6xl font-bold leading-tight">
                AI-drevet cybersikkerhed for{" "}
                <span className="text-gradient-primary">moderne virksomheder</span>
              </h1>
              <p className="text-lg text-muted-foreground max-w-xl">
                Automatisér loganalyse, sikkerhedsrapporter og NIS2-dokumentation. NexaGuard gør det nemt at forstå og reagere på trusler – uden et stort sikkerhedsteam.
              </p>
              <div className="flex flex-wrap gap-4">
                <Button variant="hero" size="lg">
                  Book gratis demo
                  <ArrowRight className="w-4 h-4" />
                </Button>
                <Link to="/app">
                  <Button variant="heroOutline" size="lg">
                    Se platformen live
                  </Button>
                </Link>
              </div>
              
              {/* Hero Stats */}
              <div className="grid grid-cols-4 gap-6 pt-8 border-t border-border">
                {heroStats.map((stat, index) => <div key={index} className="text-center">
                    <div className="font-heading text-2xl font-bold text-primary">{stat.value}</div>
                    <div className="text-xs text-muted-foreground">{stat.label}</div>
                  </div>)}
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
              
              {/* Floating notification cards */}
              <div className="absolute -right-4 top-4 animate-fade-in">
                <Card className="w-48 border-success/30 bg-card/90 backdrop-blur">
                  <CardContent className="p-3 flex items-center gap-2">
                    <div className="w-8 h-8 rounded-full bg-success/20 flex items-center justify-center">
                      <Check className="w-4 h-4 text-success" />
                    </div>
                    <div>
                      <div className="text-xs font-medium">Trussel blokeret</div>
                      <div className="text-[10px] text-muted-foreground">For 2 min siden</div>
                    </div>
                  </CardContent>
                </Card>
              </div>
              
              <div className="absolute -left-4 bottom-8 animate-fade-in" style={{
              animationDelay: '0.2s'
            }}>
                <Card className="w-52 border-primary/30 bg-card/90 backdrop-blur">
                  <CardContent className="p-3 flex items-center gap-2">
                    <div className="w-8 h-8 rounded-full bg-primary/20 flex items-center justify-center">
                      <Brain className="w-4 h-4 text-primary" />
                    </div>
                    <div>
                      <div className="text-xs font-medium">AI-analyse klar</div>
                      <div className="text-[10px] text-muted-foreground">47 logs analyseret</div>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Trusted By Section */}
      

      {/* Features Section */}
      <section className="py-20 border-t border-border" id="features">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="font-heading text-3xl lg:text-4xl font-bold mb-4">
              Hvorfor vælge <span className="text-gradient-primary">NexaGuard</span>?
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Vi kombinerer avanceret AI med en brugervenlig platform for at gøre cybersikkerhed tilgængelig for alle.
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            {features.map((feature, index) => <div key={index} className="flex flex-col items-center text-center p-8 rounded-xl bg-card border border-border hover:border-primary/30 transition-all duration-300 group">
                <div className="w-14 h-14 rounded-xl bg-primary/10 border border-primary/30 flex items-center justify-center mb-6 group-hover:bg-primary/20 transition-colors">
                  <feature.icon className="w-7 h-7 text-primary" />
                </div>
                <h3 className="font-heading text-xl font-semibold mb-3">{feature.title}</h3>
                <p className="text-muted-foreground">{feature.description}</p>
              </div>)}
          </div>
        </div>
      </section>

      {/* Platform Features Section */}
      <section className="py-20 border-t border-border bg-card/30" id="platform">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="font-heading text-3xl lg:text-4xl font-bold mb-4">
              En komplet <span className="text-gradient-primary">sikkerhedsplatform</span>
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Alt hvad du behøver til moderne cybersikkerhed – samlet i én intuitiv platform.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {platformFeatures.map((feature, index) => <Card key={index} className="hover:border-primary/30 transition-all duration-300 group">
                <CardContent className="p-6 space-y-4">
                  <div className="flex items-start justify-between">
                    <div className="w-12 h-12 rounded-lg bg-primary/10 border border-primary/30 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                      <feature.icon className="w-6 h-6 text-primary" />
                    </div>
                    <span className="text-[10px] px-2 py-1 rounded-full bg-primary/10 text-primary font-medium">
                      {feature.highlight}
                    </span>
                  </div>
                  <h3 className="font-heading text-lg font-semibold">{feature.title}</h3>
                  <p className="text-sm text-muted-foreground">{feature.description}</p>
                </CardContent>
              </Card>)}
          </div>
        </div>
      </section>

      {/* Use Cases Section */}
      <section className="py-20 border-t border-border">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="font-heading text-3xl lg:text-4xl font-bold mb-4">
              Løsninger til <span className="text-gradient-primary">hele organisationen</span>
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              NexaGuard er designet til at hjælpe alle i din organisation – fra IT til ledelse.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {useCases.map((useCase, index) => <Card key={index} className="overflow-hidden">
                <CardContent className="p-0">
                  <div className="p-6 space-y-4">
                    <h3 className="font-heading text-xl font-semibold">{useCase.title}</h3>
                    <p className="text-sm text-muted-foreground">{useCase.description}</p>
                  </div>
                  <div className="px-6 pb-6 space-y-2">
                    {useCase.benefits.map((benefit, i) => <div key={i} className="flex items-center gap-2 text-sm">
                        <ChevronRight className="w-4 h-4 text-primary" />
                        <span>{benefit}</span>
                      </div>)}
                  </div>
                </CardContent>
              </Card>)}
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section className="py-20 border-t border-border bg-card/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="font-heading text-3xl lg:text-4xl font-bold mb-4">
              Kom i gang på <span className="text-gradient-primary">under 24 timer</span>
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              En simpel og hurtig onboarding-proces får jer op at køre med det samme.
            </p>
          </div>

          <div className="grid md:grid-cols-4 gap-8">
            {[{
            step: "1",
            title: "Opret konto",
            description: "Tilmeld jer og konfigurer jeres workspace på få minutter."
          }, {
            step: "2",
            title: "Forbind systemer",
            description: "Integrer med Microsoft 365, Google Workspace og mere."
          }, {
            step: "3",
            title: "AI analyserer",
            description: "Vores AI begynder straks at analysere jeres sikkerhedsdata."
          }, {
            step: "4",
            title: "Få indsigter",
            description: "Modtag handlingsorienterede anbefalinger og rapporter."
          }].map((item, index) => <div key={index} className="text-center space-y-4">
                <div className="w-12 h-12 rounded-full bg-primary/20 border border-primary/50 flex items-center justify-center mx-auto font-heading font-bold text-primary text-xl">
                  {item.step}
                </div>
                <h3 className="font-heading font-semibold">{item.title}</h3>
                <p className="text-sm text-muted-foreground">{item.description}</p>
              </div>)}
          </div>
        </div>
      </section>

      {/* Integrations Section */}
      <section className="py-20 border-t border-border">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <h2 className="font-heading text-3xl lg:text-4xl font-bold">
                Integrerer med jeres <span className="text-gradient-primary">eksisterende systemer</span>
              </h2>
              <p className="text-muted-foreground">
                NexaGuard forbinder nemt med de værktøjer I allerede bruger. Få centraliseret indsigt uden at ændre jeres workflow.
              </p>
              <div className="grid grid-cols-2 gap-4">
                {integrations.map((integration, index) => <div key={index} className="flex items-center gap-3 p-4 rounded-lg bg-card border border-border">
                    <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center">
                      <integration.icon className="w-5 h-5 text-primary" />
                    </div>
                    <span className="font-medium">{integration.name}</span>
                  </div>)}
              </div>
              <Button variant="heroOutline">
                Se alle integrationer
                <ArrowRight className="w-4 h-4" />
              </Button>
            </div>
            
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-r from-primary/10 to-transparent rounded-2xl blur-2xl" />
              <Card className="relative">
                <CardContent className="p-6 space-y-4">
                  <div className="text-sm text-muted-foreground">Integration Status</div>
                  <div className="space-y-3">
                    {[{
                    name: "Microsoft 365",
                    status: "Connected",
                    logs: "12,847"
                  }, {
                    name: "Google Workspace",
                    status: "Connected",
                    logs: "8,234"
                  }, {
                    name: "Slack",
                    status: "Pending",
                    logs: "-"
                  }].map((item, index) => <div key={index} className="flex items-center justify-between p-3 rounded-lg bg-muted/50">
                        <span className="font-medium">{item.name}</span>
                        <div className="flex items-center gap-4">
                          <span className="text-xs text-muted-foreground">{item.logs} logs</span>
                          <span className={`text-xs px-2 py-1 rounded-full ${item.status === 'Connected' ? 'bg-success/20 text-success' : 'bg-warning/20 text-warning'}`}>
                            {item.status}
                          </span>
                        </div>
                      </div>)}
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20 border-t border-border bg-card/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="font-heading text-3xl lg:text-4xl font-bold mb-4">
              Hvad vores kunder <span className="text-gradient-primary">siger</span>
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => <Card key={index}>
                <CardContent className="p-6 space-y-4">
                  <p className="text-muted-foreground italic">"{testimonial.quote}"</p>
                  <div className="flex items-center gap-3 pt-4 border-t border-border">
                    <div className="w-10 h-10 rounded-full bg-primary/20 flex items-center justify-center font-heading font-bold text-primary">
                      {testimonial.author.charAt(0)}
                    </div>
                    <div>
                      <div className="font-medium">{testimonial.author}</div>
                      <div className="text-xs text-muted-foreground">{testimonial.role}, {testimonial.company}</div>
                    </div>
                  </div>
                </CardContent>
              </Card>)}
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section className="py-20 border-t border-border" id="pricing">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="font-heading text-3xl lg:text-4xl font-bold mb-4">
              Fleksible planer til <span className="text-gradient-primary">alle størrelser</span>
            </h2>
            <p className="text-muted-foreground">
              Start med det der passer jer – opgrader når I vokser.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {pricingPlans.map((plan, index) => <Card key={index} className={`relative ${plan.popular ? "border-primary/50 border-glow" : ""}`}>
                {plan.popular && <div className="absolute -top-3 left-1/2 -translate-x-1/2 px-3 py-1 bg-primary text-primary-foreground text-xs font-medium rounded-full">
                    Mest populær
                  </div>}
                <CardContent className="p-8 space-y-6">
                  <div>
                    <h3 className="font-heading text-xl font-semibold">{plan.name}</h3>
                    <p className="text-sm text-muted-foreground">{plan.description}</p>
                  </div>
                  <div className="flex items-baseline gap-1">
                    <span className="font-heading text-4xl font-bold">{plan.price}</span>
                    {plan.price !== "Kontakt" && <span className="text-muted-foreground">DKK/md</span>}
                  </div>
                  <ul className="space-y-3">
                    {plan.features.map((feature, i) => <li key={i} className="flex items-center gap-3 text-sm">
                        <Check className="w-4 h-4 text-success flex-shrink-0" />
                        <span>{feature}</span>
                      </li>)}
                  </ul>
                  <Button variant={plan.popular ? "hero" : "outline"} className="w-full">
                    {/* TODO: Insert Stripe Checkout session here */}
                    {plan.price === "Kontakt" ? "Kontakt salg" : "Kom i gang"}
                  </Button>
                </CardContent>
              </Card>)}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 border-t border-border bg-card/30" id="faq">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="font-heading text-3xl lg:text-4xl font-bold mb-4">
              Ofte stillede <span className="text-gradient-primary">spørgsmål</span>
            </h2>
          </div>

          <div className="max-w-3xl mx-auto space-y-4">
            {faqs.map((faq, index) => <Card key={index}>
                <CardContent className="p-6">
                  <h3 className="font-heading font-semibold mb-2">{faq.question}</h3>
                  <p className="text-sm text-muted-foreground">{faq.answer}</p>
                </CardContent>
              </Card>)}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 border-t border-border relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-primary/5 via-transparent to-primary/5" />
        <div className="container mx-auto px-4 relative text-center">
          <h2 className="font-heading text-3xl lg:text-4xl font-bold mb-6">
            Klar til at styrke jeres cybersikkerhed?
          </h2>
          <p className="text-muted-foreground mb-8 max-w-xl mx-auto">
            Book en gratis demo og se hvordan NexaGuard kan hjælpe jeres organisation med at blive mere sikker.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Button variant="hero" size="xl">
              Book gratis demo
              <ArrowRight className="w-5 h-5" />
            </Button>
            <Button variant="heroOutline" size="lg">
              Kontakt salg
            </Button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 border-t border-border">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-4 gap-8 mb-12">
            <div className="space-y-4">
              <div className="flex items-center gap-2">
                <div className="w-8 h-8 rounded-lg bg-primary/20 border border-primary/50 flex items-center justify-center">
                  <Shield className="w-5 h-5 text-primary" />
                </div>
                <span className="font-heading font-bold text-xl">NexaGuard</span>
              </div>
              <p className="text-sm text-muted-foreground">
                AI-drevet cybersikkerhed for moderne virksomheder.
              </p>
            </div>
            
            <div>
              <h4 className="font-heading font-semibold mb-4">Produkt</h4>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li><a href="#features" className="hover:text-foreground transition-colors">Funktioner</a></li>
                <li><a href="#pricing" className="hover:text-foreground transition-colors">Priser</a></li>
                <li><a href="#" className="hover:text-foreground transition-colors">Integrationer</a></li>
                <li><a href="#" className="hover:text-foreground transition-colors">Changelog</a></li>
              </ul>
            </div>
            
            <div>
              <h4 className="font-heading font-semibold mb-4">Virksomhed</h4>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li><a href="#" className="hover:text-foreground transition-colors">Om os</a></li>
                <li><a href="#" className="hover:text-foreground transition-colors">Karriere</a></li>
                <li><a href="#" className="hover:text-foreground transition-colors">Blog</a></li>
                <li><a href="#" className="hover:text-foreground transition-colors">Kontakt</a></li>
              </ul>
            </div>
            
            <div>
              <h4 className="font-heading font-semibold mb-4">Juridisk</h4>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li><a href="#" className="hover:text-foreground transition-colors">Privatlivspolitik</a></li>
                <li><a href="#" className="hover:text-foreground transition-colors">Vilkår</a></li>
                <li><a href="#" className="hover:text-foreground transition-colors">GDPR</a></li>
                <li><a href="#" className="hover:text-foreground transition-colors">Sikkerhed</a></li>
              </ul>
            </div>
          </div>
          
          <div className="flex flex-col md:flex-row items-center justify-between gap-4 pt-8 border-t border-border">
            <p className="text-sm text-muted-foreground">
              © 2024 NexaGuard. Alle rettigheder forbeholdes.
            </p>
            <div className="flex items-center gap-4 text-sm text-muted-foreground">
              <span>Dansk virksomhed</span>
              <span>•</span>
              <span>GDPR-compliant</span>
              <span>•</span>
              <span>ISO 27001</span>
            </div>
          </div>
        </div>
      </footer>
    </div>;
}