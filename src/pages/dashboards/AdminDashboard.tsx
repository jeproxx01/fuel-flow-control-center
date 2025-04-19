
import React, { useState, useEffect } from 'react';
import { 
  ShoppingCart, 
  Users, 
  TrendingUp, 
  Truck, 
  AlertTriangle,
  Bell,
  Clock
} from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
// Assuming enums/types are defined, kept for potential future use or prop types
import { OrderStatus, TruckStatus, UserRole, ProfileRegistrationStatus } from '@/types'; 
import PendingGSOTable from '@/components/dashboard/PendingGSOTable'; 
// Removed Supabase import: import { supabase } from '@/lib/supabaseClient'; 
import { Skeleton } from '@/components/ui/skeleton'; // For loading state

const AdminDashboard: React.FC = () => {
  // Keep state variables, they will hold mock/default data
  const [pendingOrders, setPendingOrders] = useState<number>(0);
  const [activeUsers, setActiveUsers] = useState<number>(0);
  const [pendingGSOs, setPendingGSOs] = useState<number>(0);
  const [activeTrucks, setActiveTrucks] = useState<number>(0);
  const [systemAlertsCount, setSystemAlertsCount] = useState<number>(0);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null); // Keep error state for potential future non-DB errors

  useEffect(() => {
    // Simulate loading without fetching from Supabase
    setLoading(true);
    setError(null);

    const timer = setTimeout(() => {
      // Set mock data after timeout (or keep defaults)
      setPendingOrders(12); // Example mock data
      setActiveUsers(48);  // Example mock data
      setPendingGSOs(3);   // Example mock data
      setActiveTrucks(8);   // Example mock data
      setSystemAlertsCount(2); // Example mock data
      
      setLoading(false);
    }, 1000); // Simulate 1 second loading time

    // Clear timeout on component unmount
    return () => clearTimeout(timer);
  }, []);

  // Display error message if fetching failed (kept for future use)
  if (error) {
    return <div className="text-red-600 p-4 border border-red-300 bg-red-50 rounded-md">Error: {error}</div>;
  }

  return (
    <div className="space-y-6 animate-fade-in">
      <div>
        <h1 className="text-3xl font-bold text-gray-800">Admin Dashboard</h1>
        <p className="text-gray-600 mt-1">Welcome back to the Fuel Flow Control Center</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {/* Pending Orders Card */}
        <Card className="hover:shadow-md transition-shadow">
          <CardHeader className="flex flex-row items-center justify-between pb-2 space-y-0">
            <CardTitle className="text-sm font-medium">Pending Orders</CardTitle>
            <ShoppingCart className="h-4 w-4 text-indigo-600" />
          </CardHeader>
          <CardContent>
            {loading ? (
              <Skeleton className="h-8 w-1/2" />
            ) : (
              <div className="text-2xl font-bold">{pendingOrders}</div>
            )}
            <p className="text-xs text-gray-500 mt-1">Requiring attention</p>
          </CardContent>
        </Card>

        {/* Active Users Card */}
        <Card className="hover:shadow-md transition-shadow">
          <CardHeader className="flex flex-row items-center justify-between pb-2 space-y-0">
            <CardTitle className="text-sm font-medium">Active Users</CardTitle>
            <Users className="h-4 w-4 text-indigo-600" />
          </CardHeader>
          <CardContent>
            {loading ? (
              <Skeleton className="h-8 w-1/2" />
            ) : (
              <div className="text-2xl font-bold">{activeUsers}</div>
            )}
            <p className="text-xs text-gray-500 mt-1">Across all roles</p>
          </CardContent>
        </Card>

        {/* Pending GSOs Card */}
        <Card className="hover:shadow-md transition-shadow">
          <CardHeader className="flex flex-row items-center justify-between pb-2 space-y-0">
            <CardTitle className="text-sm font-medium">Pending GSOs</CardTitle>
            <Users className="h-4 w-4 text-indigo-600" />
          </CardHeader>
          <CardContent>
            {loading ? (
              <Skeleton className="h-8 w-1/2" />
            ) : (
              <div className="text-2xl font-bold">{pendingGSOs}</div>
            )}
            <p className="text-xs text-gray-500 mt-1">Awaiting approval</p>
          </CardContent>
        </Card>

        {/* Active Trucks Card */}
        <Card className="hover:shadow-md transition-shadow">
          <CardHeader className="flex flex-row items-center justify-between pb-2 space-y-0">
            <CardTitle className="text-sm font-medium">Active Trucks</CardTitle>
            <Truck className="h-4 w-4 text-indigo-600" />
          </CardHeader>
          <CardContent>
            {loading ? (
              <Skeleton className="h-8 w-1/2" />
            ) : (
              <div className="text-2xl font-bold">{activeTrucks}</div>
            )}
            <p className="text-xs text-gray-500 mt-1">Ready for delivery</p>
          </CardContent>
        </Card>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Pending GSO Registrations Table */}
        <Card className="lg:col-span-2 hover:shadow-md transition-shadow">
          <CardHeader>
            <CardTitle>Pending GSO Registrations</CardTitle>
          </CardHeader>
          <CardContent>
            {/* PendingGSOTable might need similar adjustments if it uses Supabase directly */}
            <PendingGSOTable /> 
          </CardContent>
        </Card>

        {/* System Alerts Section - Placeholder Content, Count from state */}
        <Card className="hover:shadow-md transition-shadow">
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">System Alerts</CardTitle>
             {loading ? (
               <Skeleton className="h-5 w-5 rounded-full" />
            ) : (
               <Bell className="h-4 w-4 text-indigo-600" />
             )} 
          </CardHeader>
          <CardContent>
             {loading ? (
               <div className="space-y-2">
                 <Skeleton className="h-4 w-full" />
                 <Skeleton className="h-4 w-3/4" />
               </div>
             ) : (
               <> 
                <div className="text-2xl font-bold">{systemAlertsCount}</div>
                <p className="text-xs text-gray-500 mt-1">
                  Active alerts requiring attention
                </p>
                 <div className="mt-4 space-y-2 text-xs text-gray-600 border-t pt-2">
                   <p>Example: Low inventory warnings</p>
                   <p>Example: Delivery delays</p>
                </div>
               </>
             )}
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default AdminDashboard;
