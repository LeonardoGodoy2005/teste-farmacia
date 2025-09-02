import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import Medicamentos from "./pages/Medicamentos";
import Beleza from "./pages/Beleza";
import Bebe from "./pages/Bebe";
import Ofertas from "./pages/Ofertas";
import Suplementos from "./pages/Suplementos";
import SobreNos from "./pages/SobreNos";
import CentralAjuda from "./pages/CentralAjuda";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/medicamentos" element={<Medicamentos />} />
          <Route path="/beleza" element={<Beleza />} />
          <Route path="/bebe" element={<Bebe />} />
          <Route path="/ofertas" element={<Ofertas />} />
          <Route path="/suplementos" element={<Suplementos />} />
          <Route path="/sobre-nos" element={<SobreNos />} />
          <Route path="/central-ajuda" element={<CentralAjuda />} />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
