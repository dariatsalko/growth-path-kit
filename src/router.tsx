import { useEffect } from "react";
import { createBrowserRouter, Outlet, useLocation } from "react-router-dom";

import CabinetRent from "./pages/CabinetRent";
import Cancellation from "./pages/Cancellation";
import Depression from "./pages/Depression";
import FamilyPsychologist from "./pages/FamilyPsychologist";
import Anxiety from "./pages/Anxiety";
import CareerGuidance from "./pages/CareerGuidance";
import PsychologOnline from "./pages/PsychologOnline";
import Consent from "./pages/Consent";
import Contacts from "./pages/Contacts";
import Index from "./pages/Index";
import Mindfulness from "./pages/Mindfulness";
import NotFound from "./pages/NotFound";
import Privacy from "./pages/Privacy";
import School from "./pages/School";
import Terms from "./pages/Terms";
import TestEIPart1 from "./pages/TestEIPart1";
import TestEIPart2 from "./pages/TestEIPart2";

import Header from "@/components/ui/header/header";

const ScrollToTop = () => {
  const location = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location.pathname]);

  return null;
};

const RootLayout = () => {
  return (
    <>
      <ScrollToTop />
      <Header />
      <Outlet />
    </>
  );
};

export const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
    children: [
      {
        path: "/",
        element: <Index />,
      },
      {
        path: "/school",
        element: <School />,
      },
      {
        path: "/mindfulness",
        element: <Mindfulness />,
      },
      {
        path: "/contacts",
        element: <Contacts />,
      },
      {
        path: "/privacy",
        element: <Privacy />,
      },
      {
        path: "/terms",
        element: <Terms />,
      },
      {
        path: "/consent",
        element: <Consent />,
      },
      {
        path: "/cancellation",
        element: <Cancellation />,
      },
      {
        path: "/test-ei-part1",
        element: <TestEIPart1 />,
      },
      {
        path: "/test-ei-part2",
        element: <TestEIPart2 />,
      },
      {
        path: "/cabinet-rent",
        element: <CabinetRent />,
      },
      {
        path: "/depression",
        element: <Depression />,
      },
      {
        path: "/family-psychologist",
        element: <FamilyPsychologist />,
      },
      {
        path: "/anxiety",
        element: <Anxiety />,
      },
      {
        path: "/career-guidance",
        element: <CareerGuidance />,
      },
      // ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE
      {
        path: "*",
        element: <NotFound />,
      },
    ],
  },
]);
