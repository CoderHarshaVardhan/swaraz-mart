import React from 'react';
import { Outlet, Link } from 'react-router-dom';
import { ROUTES } from '@/constants/routes';
import './AuthLayout.css';

const AuthLayout = () => {
  return (
    <div className="auth-layout">
      <div className="auth-background">
        <div className="shape shape-auth-1"></div>
        <div className="shape shape-auth-2"></div>
      </div>
      <div className="auth-content">
        <Link to={ROUTES.HOME} className="auth-logo">
          <img src="/images/swaraz-logo.png" alt="Swaraz Mart Logo" style={{ height: '80px' }} />
          Swaraz Mart
        </Link>
        <div className="auth-container">
          <Outlet />
        </div>
      </div>
    </div>
  );
};

export default AuthLayout;
