// src/pages/admin/index.tsx

import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom'; // Correct import for React Router
import AdminDashboard from '@/components/AdminDashboard/Dashboard';
import Sidebar from '@/components/AdminDashboard/Sidebar';
import TopNavBar from '@/components/AdminDashboard/TopNavBar';
import { UserRole } from '@/types'; // Assuming UserRole enum

const AdminDashboardPage = () => {
  const navigate = useNavigate();

  useEffect(() => {
    // Get user role from local storage (or your auth method)
    const userRole = localStorage.getItem('userRole');

    // Check if the user is an admin
    if (userRole !== UserRole.Admin) {
      // Redirect to a not-authorized page if not an admin
      navigate('/not-authorized');
    }
  }, [navigate]);

  // If not an admin, the component will redirect, so this render is only for admins
  return (
    <div>
      <TopNavBar />
      <div style={{ display: 'flex' }}>
        <Sidebar />
        <div style={{ flex: 1, padding: '20px' }}>
          <AdminDashboard />
        </div>
      </div>
    </div>
  );
};

export default AdminDashboardPage;
