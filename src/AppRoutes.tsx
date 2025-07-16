import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
import { useState, useEffect } from "react";
import Loader from "./components/Loader";
import Index from "./pages/Index";
import NotFound from "./pages/NotFound";
import OpenAccount from "./pages/OpenAccount";
import AdminLogin from "./pages/AdminLogin";
import AdminDashboard from "./pages/AdminDashboard";
import Register from "./pages/Register";
import VerifyCode from "./pages/VerifyCode";
import CompleteProfile from "./pages/CompleteProfile";
import ClientDashboard from "./pages/ClientDashboard";
import TeamPage from "./pages/TeamPage";
import TeamMemberPage from "./pages/TeamMemberPage";

const RoutesWithLoader = () => {
  const [loading, setLoading] = useState(false);
  const location = useLocation();

  useEffect(() => {
    setLoading(true);
    const timeout = setTimeout(() => {
      setLoading(false);
    }, 700); // Durée du loader (ms)
    return () => clearTimeout(timeout);
  }, [location]);

  return (
    <>
      {loading && <Loader />}
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
        <Route path="/notre-equipe" element={<TeamPage />} />
        <Route path="/notre-equipe/:slug" element={<TeamMemberPage />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </>
  );
};

const AppRoutes = () => (
  <BrowserRouter>
    <RoutesWithLoader />
  </BrowserRouter>
);

export default AppRoutes; 