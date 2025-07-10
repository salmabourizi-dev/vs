import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import NotFound from "./pages/NotFound";
import OpenAccount from "./pages/OpenAccount";
import AdminLogin from "./pages/AdminLogin";
import AdminDashboard from "./pages/AdminDashboard";
import Register from "./pages/Register";
import VerifyCode from "./pages/VerifyCode";
import CompleteProfile from "./pages/CompleteProfile";
import ClientDashboard from "./pages/ClientDashboard";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/open-account" element={<OpenAccount />} />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="/admin/login" element={<AdminLogin />} />
<Route path="/admin/dashboard" element={<AdminDashboard />} />
<Route path="/register" element={<Register />} />
<Route path="/verify-code" element={<VerifyCode />} />
<Route path="/complete-profile" element={<CompleteProfile />} />
<Route path="/client/dashboard" element={<ClientDashboard />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
