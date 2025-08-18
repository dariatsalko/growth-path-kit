import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import School from "./pages/School";
import Mindfulness from "./pages/Mindfulness";
import Contacts from "./pages/Contacts";
import Privacy from "./pages/Privacy";
import Terms from "./pages/Terms";
import Consent from "./pages/Consent";
import Cancellation from "./pages/Cancellation";
import NotFound from "./pages/NotFound";
import GlobalBookingModal from "@/components/GlobalBookingModal";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/school" element={<School />} />
          <Route path="/mindfulness" element={<Mindfulness />} />
          <Route path="/contacts" element={<Contacts />} />
          <Route path="/privacy" element={<Privacy />} />
          <Route path="/terms" element={<Terms />} />
          <Route path="/consent" element={<Consent />} />
          <Route path="/cancellation" element={<Cancellation />} />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
      <GlobalBookingModal />
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
