import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import MainLayout from "./components/layout/MainLayout";
//import Dashboard from "./pages/Dashboard"; // No longer used directly
import Users from "./pages/Users";
import FuelSettings from "./pages/FuelSettings";
import TruckRecords from "./pages/TruckRecords";
import Orders from "./pages/Orders";
import Inventory from "./pages/Inventory";
import Reports from "./pages/Reports";
import Messages from "./pages/Messages";
import Profile from "./pages/Profile";
import Settings from "./pages/Settings";
import NotFound from "./pages/NotFound";
import Landing from "./pages/Landing";
import Auth from "./pages/Auth";
import AdminDashboardPage from "@/pages/admin/index.tsx";
import OfficeStaffDashboardPage from "@/pages/office/index.tsx";
import DepotStaffDashboardPage from "@/pages/depot/index.tsx";
import GSODashboardPage from "@/pages/gso/index.tsx";
import GSOStaffDashboardPage from "@/pages/gsostaff/index.tsx";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <BrowserRouter>
      <Toaster />
      <Sonner />
      <Routes>
        {/* Public routes */}
        <Route path="/" element={<Landing />} />
        <Route path="/auth" element={<Auth />} />
        <Route path="/not-authorized" element={<NotFound />} /> {/*Make sure this component exists*/}

        {/* Role-based routes */}
        <Route path="/admin" element={<AdminDashboardPage />} />
        <Route path="/office" element={<OfficeStaffDashboardPage />} />
        <Route path="/depot" element={<DepotStaffDashboardPage />} />
        <Route path="/gso" element={<GSODashboardPage />} />
        <Route path="/gsostaff" element={<GSOStaffDashboardPage />} />

        {/* MainLayout is applied to all the /app routes */}
        <Route path="/app" element={<MainLayout />}>
            <Route path="users" element={<Users />} />
            <Route path="fuel-settings" element={<FuelSettings />} />
            <Route path="trucks" element={<TruckRecords />} />
            <Route path="orders" element={<Orders />} />
            <Route path="inventory" element={<Inventory />} />
            <Route path="reports" element={<Reports />} />
            <Route path="messages" element={<Messages />} />
            <Route path="profile" element={<Profile />} />
            <Route path="settings" element={<Settings />} />
        </Route>
        
        {/* Catch-all route for 404 */}
        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  </QueryClientProvider>
);

export default App;
