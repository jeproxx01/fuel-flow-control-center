// src/pages/gsostaff/index.tsx

import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom'; // Correct import for React Router
import GSOStaffDashboard from '@/components/GSOStaffDashboard/Dashboard';
import Sidebar from '@/components/GSOStaffDashboard/Sidebar';
import TopNavBar from '@/components/GSOStaffDashboard/TopNavBar';
import { UserRole } from '@/types'; // Assuming UserRole enum

const GSOStaffDashboardPage = () => {
  const navigate = useNavigate();

  useEffect(() => {
    // Get user role from local storage (or your auth method)
    const userRole = localStorage.getItem('userRole');

    // Check if the user is an office staff
    if (userRole !== UserRole.GSOStaff) {
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
          <GSOStaffDashboard />
        </div>
      </div>
    </div>
  );
};

export default GSOStaffDashboardPage;
