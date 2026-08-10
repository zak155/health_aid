import React, { useState } from 'react';
import { Link, useNavigate, useLocation } from 'react-router-dom';
import { Mail, Lock, Eye, EyeOff, HeartPulse, ChevronLeft } from 'lucide-react';
import { authService } from '../../services/authService';
import { useAuth } from '../../context/AuthContext';
import './Login.css';

export default function Login() {
  const navigate = useNavigate();
  const location = useLocation();
  const { login } = useAuth();

  // Check if redirected from registration
  const registrationSuccess = location.state?.registered;

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [errorMsg, setErrorMsg] = useState('');
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setErrorMsg('');

    try {
      setLoading(true);
      const data = await authService.login({ email, password });
      
      // Store user & tokens in AuthContext
      login(data.tokens, data.user);

      // Redirect to protected dashboard
      navigate('/dashboard');
    } catch (err: any) {
      if (err.response && err.response.data) {
        setErrorMsg(err.response.data.error || 'Invalid credentials. Please try again.');
      } else {
        setErrorMsg('Unable to connect to server. Please try again later.');
      }
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="auth-wrapper">
      <div className="auth-card">
        {/* Top Header Controls */}
        <div className="auth-header-nav">
          <Link to="/" className="back-btn" aria-label="Go back">
  <ChevronLeft size={22} />
</Link>
          <div className="top-signin-link">
            <span>Don't have an account? </span>
            <Link to="/register" className="link-green">Sign Up</Link>
          </div>
        </div>

        {/* Brand Header */}
        <div className="auth-brand">
          <div className="heart-badge">
            <HeartPulse size={32} className="icon-green" />
          </div>
          <h2>Welcome Back</h2>
          <p>Sign in to access your HealthAid portal</p>
        </div>

        {/* Success Alert if redirected from Sign Up */}
        {registrationSuccess && (
          <div className="success-alert">
            Account created successfully! Please sign in with your credentials.
          </div>
        )}

        {/* Error Alert Display */}
        {errorMsg && <div className="error-alert">{errorMsg}</div>}

        {/* Login Form */}
        <form onSubmit={handleSubmit} className="auth-form">
          {/* Email Input */}
          <div className="input-group">
            <Mail className="input-icon" size={20} />
            <input
              type="email"
              placeholder="Email Address"
              className="input-field"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>

          {/* Password Input */}
          <div className="input-group">
            <Lock className="input-icon" size={20} />
            <input
              type={showPassword ? 'text' : 'password'}
              placeholder="Password"
              className="input-field"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
            <button
              type="button"
              className="password-toggle"
              onClick={() => setShowPassword(!showPassword)}
            >
              {showPassword ? <EyeOff size={18} /> : <Eye size={18} />}
            </button>
          </div>

          {/* Forgot Password Link */}
          <div className="forgot-password-row">
            <a href="#forgot" className="link-green text-sm">Forgot password?</a>
          </div>

          {/* Submit Button */}
          <button type="submit" className="btn-primary" disabled={loading}>
            {loading ? 'Signing In...' : 'Sign In'}
          </button>
        </form>

        {/* Social Dividers & Placeholders */}
        <div className="divider">
          <span>or</span>
        </div>

        <div className="social-buttons">
          <button type="button" className="btn-social">
            <svg width="18" height="18" viewBox="0 0 24 24">
              <path fill="#4285F4" d="M23.745 12.27c0-.7-.06-1.4-.19-2.07H12v4.51h6.6c-.29 1.52-1.14 2.82-2.4 3.68v3.05h3.88c2.27-2.09 3.665-5.17 3.665-9.17z"/>
              <path fill="#34A853" d="M12 24c3.24 0 5.95-1.08 7.93-2.91l-3.88-3.05c-1.08.72-2.45 1.16-4.05 1.16-3.12 0-5.77-2.1-6.72-4.93H1.29v3.15C3.26 21.3 7.31 24 12 24z"/>
              <path fill="#FBBC05" d="M5.28 14.27c-.25-.72-.38-1.49-.38-2.27s.13-1.55.38-2.27V6.58H1.29C.47 8.21 0 10.05 0 12s.47 3.79 1.29 5.42l3.99-3.15z"/>
              <path fill="#EA4335" d="M12 4.75c1.77 0 3.35.61 4.6 1.8l3.42-3.42C17.95 1.19 15.24 0 12 0 7.31 0 3.26 2.7 1.29 6.58l3.99 3.15c.95-2.83 3.6-4.98 6.72-4.98z"/>
            </svg>
            Continue with Google
          </button>
        </div>
      </div>
    </div>
  );
}