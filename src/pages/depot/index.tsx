// src/pages/depot/index.tsx

import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom'; // Correct import for React Router
import DepotStaffDashboard from '@/components/DepotStaffDashboard/Dashboard';
import Sidebar from '@/components/DepotStaffDashboard/Sidebar';
import TopNavBar from '@/components/DepotStaffDashboard/TopNavBar';
import { UserRole } from '@/types'; // Assuming UserRole enum

const DepotStaffDashboardPage = () => {
  const navigate = useNavigate();

  useEffect(() => {
    // Get user role from local storage (or your auth method)
    const userRole = localStorage.getItem('userRole');

    // Check if the user is an office staff
    if (userRole !== UserRole.DepotStaff) {
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
          <DepotStaffDashboard />
        </div>
      </div>
    </div>
  );
};

export default DepotStaffDashboardPage;
