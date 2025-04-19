// src/pages/gso/index.tsx

import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom'; // Correct import for React Router
import GSODashboard from '@/components/GSODashboard/Dashboard';
import Sidebar from '@/components/GSODashboard/Sidebar';
import TopNavBar from '@/components/GSODashboard/TopNavBar';
import { UserRole } from '@/types'; // Assuming UserRole enum

const GSODashboardPage = () => {
  const navigate = useNavigate();

  useEffect(() => {
    // Get user role from local storage (or your auth method)
    const userRole = localStorage.getItem('userRole');

    // Check if the user is an office staff
    if (userRole !== UserRole.GSO) {
      // Redirect to a not-authorized page if not an office staff
      navigate('/not-authorized');
    }
  }, [navigate]);

  // If not an office staff, the component will redirect, so this render is only for office staff
  return (
    <div>
      <TopNavBar />
      <div style={{ display: 'flex' }}>
        <Sidebar />
        <div style={{ flex: 1, padding: '20px' }}>
          <GSODashboard />
        </div>
      </div>
    </div>
  );
};

export default GSODashboardPage;
