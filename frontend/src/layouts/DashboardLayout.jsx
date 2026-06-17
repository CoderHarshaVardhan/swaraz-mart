import React from 'react';
import { Outlet } from 'react-router-dom';
import Sidebar from '@/components/layout/Sidebar';
import useAuth from '@/hooks/useAuth';

const DashboardLayout = () => {
  const { logout, user } = useAuth();
  
  return (
    <div className="dashboard-layout" style={{ display: 'flex', minHeight: '100vh' }}>
      <Sidebar />
      <div className="dashboard-main" style={{ flex: 1, display: 'flex', flexDirection: 'column' }}>
        <header style={{ padding: '1rem', background: '#f4f4f4', display: 'flex', justifyContent: 'space-between' }}>
          <h2>Dashboard</h2>
          <div>
            <span style={{ marginRight: '1rem' }}>Welcome, {user?.name}</span>
            <button onClick={logout}>Logout</button>
          </div>
        </header>
        <main className="dashboard-content" style={{ padding: '2rem', flex: 1 }}>
          <Outlet />
        </main>
      </div>
    </div>
  );
};

export default DashboardLayout;
