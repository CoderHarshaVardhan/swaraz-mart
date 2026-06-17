import React, { useState } from 'react';
import useAuth from '@/hooks/useAuth';
import { useNavigate, useLocation, Link } from 'react-router-dom';
import { ROUTES } from '@/constants/routes';
import './Login.css';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const { login } = useAuth();
  const navigate = useNavigate();
  const location = useLocation();

  const from = location.state?.from?.pathname || ROUTES.DASHBOARD;

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');
    const result = await login({ email, password });
    if (result.success) {
      navigate(from, { replace: true });
    } else {
      setError(result.error);
    }
  };

  return (
    <div className="login-page">
      <div className="login-header">
        <h2>Welcome Back</h2>
        <p>Login to your Swaraz Mart Agent dashboard</p>
      </div>

      {error && <div className="error-message">{error}</div>}
      
      <form onSubmit={handleSubmit} className="login-form">
        <div className="form-group">
          <label htmlFor="email">Email Address</label>
          <input 
            type="email" 
            id="email"
            placeholder="Enter your email" 
            value={email} 
            onChange={(e) => setEmail(e.target.value)} 
            required 
            className="form-input"
          />
        </div>
        
        <div className="form-group">
          <label htmlFor="password">Password</label>
          <input 
            type="password" 
            id="password"
            placeholder="Enter your password" 
            value={password} 
            onChange={(e) => setPassword(e.target.value)} 
            required 
            className="form-input"
          />
          <div className="forgot-password">
            <a href="#">Forgot password?</a>
          </div>
        </div>
        
        <button type="submit" className="btn btn-primary btn-block">Log In</button>
      </form>

      <div className="login-footer">
        Don't have an account? <Link to={ROUTES.REGISTER}>Register Free</Link>
      </div>
    </div>
  );
};

export default Login;
