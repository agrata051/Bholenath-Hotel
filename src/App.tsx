import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

// Pages

import Home from "./pages/Home";
import RoomsPage from "./pages/Roompage";
import AmenitiesPage from "./pages/AmenitiesPage";
import ContactPage from "./pages/ContactPage";
import Dashboard from './pages/Dashboard';


const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          
          <Route path="/" element={<Home />} />
          <Route path="/rooms" element={<RoomsPage />} />
          <Route path="/amenities" element={<AmenitiesPage />} />
          <Route path="/contact" element={<ContactPage />} />
          <Route path="/dashboard" element={<Dashboard />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
