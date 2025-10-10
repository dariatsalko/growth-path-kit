import { HelmetProvider } from "react-helmet-async";
import { RouterProvider } from "react-router-dom";

import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

import { router } from "./router";

import GlobalContactModal from "@/components/GlobalContactModal/GlobalContactModal";
// Temporarily disabled booking modals
import GlobalBookingModal from "@/components/GlobalBookingModal/GlobalBookingModal";
// import GlobalSchoolBookingModal from "@/components/GlobalSchoolBookingModal/GlobalSchoolBookingModal";
import { Toaster as Sonner } from "@/components/ui/sonner/sonner";
import { Toaster } from "@/components/ui/toaster/toaster";
import { TooltipProvider } from "@/components/ui/tooltip/tooltip";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <HelmetProvider>
      <TooltipProvider>
        <Toaster />
        <Sonner />
        <RouterProvider router={router} />
        <GlobalContactModal />
        {/* Temporarily disabled booking modals */}
        <GlobalBookingModal />
        {/* <GlobalSchoolBookingModal /> */}
      </TooltipProvider>
    </HelmetProvider>
  </QueryClientProvider>
);

export default App;
