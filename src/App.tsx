
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import WiFiSafety from "./pages/WiFiSafety";
import DeviceSafety from "./pages/DeviceSafety";
import AppSafety from "./pages/AppSafety";
import Resources from "./pages/Resources";
import NotFound from "./pages/NotFound";

// Instruction Pages
import ChangeRouterPassword from "./pages/instructions/ChangeRouterPassword";
import ContentFiltering from "./pages/instructions/ContentFiltering";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/wifi" element={<WiFiSafety />} />
          <Route path="/devices" element={<DeviceSafety />} />
          <Route path="/apps" element={<AppSafety />} />
          <Route path="/resources" element={<Resources />} />
          
          {/* Instruction Routes */}
          <Route path="/instructions/change-router-password" element={<ChangeRouterPassword />} />
          <Route path="/instructions/content-filtering" element={<ContentFiltering />} />
          
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
