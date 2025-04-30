
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
import IosChildAccount from "./pages/instructions/IosChildAccount";
import AndroidChildAccount from "./pages/instructions/AndroidChildAccount";
import IosScreenTime from "./pages/instructions/IosScreenTime";
import IosContentRestrictions from "./pages/instructions/IosContentRestrictions";
import AndroidFamilyLink from "./pages/instructions/AndroidFamilyLink";

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
          <Route path="/instructions/ios-child-account" element={<IosChildAccount />} />
          <Route path="/instructions/android-child-account" element={<AndroidChildAccount />} />
          <Route path="/instructions/ios-screen-time" element={<IosScreenTime />} />
          <Route path="/instructions/ios-content-restrictions" element={<IosContentRestrictions />} />
          <Route path="/instructions/android-family-link" element={<AndroidFamilyLink />} />
          
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
