import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { cn } from "@/lib/utils";
import {
  LayoutDashboard,
  FileText,
  BarChart3,
  Shield,
  Globe,
  AlertTriangle,
  Plug,
  Settings,
  ChevronLeft,
  ChevronRight,
  Menu,
} from "lucide-react";
import { Button } from "@/components/ui/button";

const navigation = [
  { name: "Dashboard", href: "/app", icon: LayoutDashboard },
  { name: "Logs", href: "/app/logs", icon: FileText },
  { name: "Rapporter", href: "/app/reports", icon: BarChart3 },
  { name: "NIS2", href: "/app/nis2", icon: Shield },
  { name: "Dark Web", href: "/app/darkweb", icon: Globe },
  { name: "Incident Response", href: "/app/incident-response", icon: AlertTriangle },
  { name: "Integrationer", href: "/app/integrationer", icon: Plug },
  { name: "Indstillinger", href: "/app/indstillinger", icon: Settings },
];

interface AppShellProps {
  children: React.ReactNode;
}

export function AppShell({ children }: AppShellProps) {
  const [collapsed, setCollapsed] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const location = useLocation();

  return (
    <div className="flex min-h-screen w-full bg-background">
      {/* Mobile overlay */}
      {mobileOpen && (
        <div
          className="fixed inset-0 bg-background/80 backdrop-blur-sm z-40 lg:hidden"
          onClick={() => setMobileOpen(false)}
        />
      )}

      {/* Sidebar */}
      <aside
        className={cn(
          "fixed inset-y-0 left-0 z-50 flex flex-col bg-sidebar border-r border-sidebar-border transition-all duration-300",
          collapsed ? "w-16" : "w-64",
          mobileOpen ? "translate-x-0" : "-translate-x-full lg:translate-x-0"
        )}
      >
        {/* Logo */}
        <div className="flex h-16 items-center justify-between px-4 border-b border-sidebar-border">
          {!collapsed && (
            <Link to="/" className="flex items-center gap-2">
              <div className="w-8 h-8 rounded-lg bg-primary/20 border border-primary/50 flex items-center justify-center">
                <Shield className="w-5 h-5 text-primary" />
              </div>
              <span className="font-heading font-bold text-lg">NexaGuard</span>
            </Link>
          )}
          <Button
            variant="ghost"
            size="iconSm"
            onClick={() => setCollapsed(!collapsed)}
            className="hidden lg:flex"
          >
            {collapsed ? <ChevronRight className="w-4 h-4" /> : <ChevronLeft className="w-4 h-4" />}
          </Button>
          {collapsed && (
            <div className="w-8 h-8 rounded-lg bg-primary/20 border border-primary/50 flex items-center justify-center mx-auto">
              <Shield className="w-5 h-5 text-primary" />
            </div>
          )}
        </div>

        {/* Navigation */}
        <nav className="flex-1 overflow-y-auto py-4">
          <ul className="space-y-1 px-2">
            {navigation.map((item) => {
              const isActive = location.pathname === item.href;
              return (
                <li key={item.name}>
                  <Link
                    to={item.href}
                    onClick={() => setMobileOpen(false)}
                    className={cn(
                      "flex items-center gap-3 px-3 py-2.5 rounded-lg text-sm font-medium transition-all duration-200",
                      isActive
                        ? "bg-primary/10 text-primary border-glow-sm"
                        : "text-sidebar-foreground hover:bg-sidebar-accent hover:text-sidebar-accent-foreground"
                    )}
                  >
                    <item.icon className={cn("w-5 h-5 flex-shrink-0", isActive && "text-primary")} />
                    {!collapsed && <span>{item.name}</span>}
                  </Link>
                </li>
              );
            })}
          </ul>
        </nav>

        {/* Bottom section */}
        {!collapsed && (
          <div className="p-4 border-t border-sidebar-border">
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 rounded-full bg-secondary flex items-center justify-center">
                <span className="text-xs font-medium">AD</span>
              </div>
              <div className="flex-1 min-w-0">
                <p className="text-sm font-medium truncate">Admin User</p>
                <p className="text-xs text-muted-foreground truncate">admin@virksomhed.dk</p>
              </div>
            </div>
          </div>
        )}
      </aside>

      {/* Main content */}
      <div className={cn("flex-1 flex flex-col transition-all duration-300", collapsed ? "lg:pl-16" : "lg:pl-64")}>
        {/* Top bar */}
        <header className="sticky top-0 z-30 flex h-16 items-center gap-4 border-b border-border bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 px-4 lg:px-8">
          <Button
            variant="ghost"
            size="iconSm"
            className="lg:hidden"
            onClick={() => setMobileOpen(true)}
          >
            <Menu className="w-5 h-5" />
          </Button>
          <div className="flex-1">
            <h1 className="font-heading text-lg font-semibold">Virksomhed ApS</h1>
          </div>
          <div className="flex items-center gap-2">
            <div className="hidden sm:flex items-center gap-2 text-sm text-muted-foreground">
              <div className="w-2 h-2 rounded-full bg-success animate-pulse" />
              <span>System Active</span>
            </div>
          </div>
        </header>

        {/* Page content */}
        <main className="flex-1 p-4 lg:p-8">
          {children}
        </main>
      </div>
    </div>
  );
}
