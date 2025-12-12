import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import LandingPage from "./pages/LandingPage";
import LoginPage from "./pages/LoginPage";
import DashboardPage from "./pages/DashboardPage";
import LogsPage from "./pages/LogsPage";
import ReportsPage from "./pages/ReportsPage";
import NIS2Page from "./pages/NIS2Page";
import DarkWebPage from "./pages/DarkWebPage";
import IncidentResponsePage from "./pages/IncidentResponsePage";
import IntegrationsPage from "./pages/IntegrationsPage";
import SettingsPage from "./pages/SettingsPage";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/app" element={<DashboardPage />} />
          <Route path="/app/logs" element={<LogsPage />} />
          <Route path="/app/reports" element={<ReportsPage />} />
          <Route path="/app/nis2" element={<NIS2Page />} />
          <Route path="/app/darkweb" element={<DarkWebPage />} />
          <Route path="/app/incident-response" element={<IncidentResponsePage />} />
          <Route path="/app/integrationer" element={<IntegrationsPage />} />
          <Route path="/app/indstillinger" element={<SettingsPage />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
