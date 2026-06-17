import React from 'react';
import { Link } from 'react-router-dom';
import { ROUTES } from '@/constants/routes';

const NotFound = () => {
  return (
    <div className="not-found-page" style={{ textAlign: 'center', padding: '2rem' }}>
      <h1>404 - Page Not Found</h1>
      <p>The page you are looking for does not exist.</p>
      <Link to={ROUTES.HOME}>Go back to Home</Link>
    </div>
  );
};

export default NotFound;
