// src/pages/office/index.tsx

import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom'; // Correct import for React Router
import OfficeStaffDashboard from '@/components/OfficeStaffDashboard/Dashboard';
import Sidebar from '@/components/OfficeStaffDashboard/Sidebar';
import TopNavBar from '@/components/OfficeStaffDashboard/TopNavBar';
import { UserRole } from '@/types'; // Assuming UserRole enum

const OfficeStaffDashboardPage = () => {
  const navigate = useNavigate();

  useEffect(() => {
    // Get user role from local storage (or your auth method)
    const userRole = localStorage.getItem('userRole');

    // Check if the user is an office staff
    if (userRole !== UserRole.OfficeStaff) {
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
          <OfficeStaffDashboard />
        </div>
      </div>
    </div>
  );
};

export default OfficeStaffDashboardPage;
