import React from 'react';
import { Link } from 'react-router-dom';
import { ROUTES } from '@/constants/routes';

const Sidebar = () => {
  return (
    <aside className="sidebar" style={{ width: '200px', background: '#ddd', height: '100vh', padding: '1rem' }}>
      <ul style={{ listStyle: 'none', padding: 0 }}>
        <li><Link to={ROUTES.DASHBOARD}>Dashboard</Link></li>
        <li><Link to={ROUTES.PROFILE}>Profile</Link></li>
        <li><Link to={ROUTES.SETTINGS}>Settings</Link></li>
      </ul>
    </aside>
  );
};

export default Sidebar;
