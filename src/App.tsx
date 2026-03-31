import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import FloatingButtons from "@/components/FloatingButtons";
import BookingPopup from "@/components/BookingPopup";
import Index from "./pages/Index";
import XeGhep from "./pages/XeGhep";
import XeDuLich from "./pages/XeDuLich";
import DiaDiem from "./pages/DiaDiem";
import TourDuLich from "./pages/TourDuLich";
import GioiThieu from "./pages/GioiThieu";
import LienHe from "./pages/LienHe";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Navbar />
        <main>
          <Routes>
            <Route path="/" element={<Index />} />
            <Route path="/xe-ghep" element={<XeGhep />} />
            <Route path="/xe-du-lich" element={<XeDuLich />} />
            <Route path="/dia-diem" element={<DiaDiem />} />
            <Route path="/tour-du-lich" element={<TourDuLich />} />
            <Route path="/gioi-thieu" element={<GioiThieu />} />
            <Route path="/lien-he" element={<LienHe />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </main>
        <Footer />
        <FloatingButtons />
        <BookingPopup />
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
