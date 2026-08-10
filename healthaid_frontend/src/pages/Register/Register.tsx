import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { 
  User, 
  Mail, 
  Phone, 
  Lock, 
  Eye, 
  EyeOff, 
  HeartPulse,
  Plus,
  ChevronLeft,

  Stethoscope,
  UserCheck
} from 'lucide-react';
import { authService, type RegisterPayload } from '../../services/authService';
import './Register.css';

export default function Register() {
  const navigate = useNavigate();

  // Form State
  const [formData, setFormData] = useState<RegisterPayload>({
    full_name: '',
    email: '',
    phone_number: '',
    role: 'PATIENT',
    password: '',
    confirm_password: '',
  });

  // UI States
  const [showPassword, setShowPassword] = useState(false);
  const [agreedToTerms, setAgreedToTerms] = useState(false);
  const [errorMsg, setErrorMsg] = useState('');
  const [loading, setLoading] = useState(false);

  // Handle Input Changes dynamically
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  // Submit Handler
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setErrorMsg('');

    // Client-side validations
    if (!agreedToTerms) {
      setErrorMsg('You must agree to the Terms & Conditions and Privacy Policy.');
      return;
    }

    if (formData.password !== formData.confirm_password) {
      setErrorMsg('Passwords do not match.');
      return;
    }

    try {
      setLoading(true);
      await authService.register(formData);
      // Redirect user to login page upon success
      navigate('/login', { state: { registered: true } });
    } catch (err: any) {
      // Catch validation errors from Django DRF
      if (err.response && err.response.data) {
        const errors = err.response.data;
        const firstErrorKey = Object.keys(errors)[0];
        const message = Array.isArray(errors[firstErrorKey]) 
          ? errors[firstErrorKey][0] 
          : errors[firstErrorKey];
        setErrorMsg(`${firstErrorKey.toUpperCase()}: ${message}`);
      } else {
        setErrorMsg('Failed to connect to the server. Please try again.');
      }
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="auth-wrapper">
      <div className="auth-card">
        {/* Top Header Controls matching Image 2.jpg */}
        <div className="auth-header-nav">
          <Link to="/" className="back-btn" aria-label="Go back">
  <ChevronLeft size={22} />
</Link>
          <div className="top-signin-link">
            <span>Already have an account? </span>
            <Link to="/login" className="link-green">Sign In</Link>
          </div>
        </div>

        {/* Brand Icon & Heading */}
        <div className="auth-brand">
          <div className="heart-badge">
            <HeartPulse size={32} className="icon-green" />
          </div>
          <h2>Create Account</h2>
          <p>Let's get started with your health journey</p>
        </div>

        {/* Error Alert Display */}
        {errorMsg && <div className="error-alert">{errorMsg}</div>}

        {/* Registration Form */}
        <form onSubmit={handleSubmit} className="auth-form">
          {/* Role Selection Toggle */}
          <div className="role-selector">
            <label className={`role-option ${formData.role === 'PATIENT' ? 'active' : ''}`}>
              <input
                type="radio"
                name="role"
                value="PATIENT"
                checked={formData.role === 'PATIENT'}
                onChange={handleChange}
              />
              <UserCheck size={18} />
              <span>Patient</span>
            </label>

            <label className={`role-option ${formData.role === 'DOCTOR' ? 'active' : ''}`}>
              <input
                type="radio"
                name="role"
                value="DOCTOR"
                checked={formData.role === 'DOCTOR'}
                onChange={handleChange}
              />
              <Stethoscope size={18} />
              <span>Doctor</span>
            </label>
          </div>

          {/* Full Name */}
          <div className="input-group">
            <User className="input-icon" size={20} />
            <input
              type="text"
              name="full_name"
              placeholder="Full Name"
              className="input-field"
              value={formData.full_name}
              onChange={handleChange}
              required
            />
          </div>

          {/* Email */}
          <div className="input-group">
            <Mail className="input-icon" size={20} />
            <input
              type="email"
              name="email"
              placeholder="Email Address"
              className="input-field"
              value={formData.email}
              onChange={handleChange}
              required
            />
          </div>

          {/* Phone Number */}
          <div className="input-group">
            <Phone className="input-icon" size={20} />
            <input
              type="tel"
              name="phone_number"
              placeholder="Phone Number"
              className="input-field"
              value={formData.phone_number}
              onChange={handleChange}
              required
            />
          </div>

          {/* Password */}
          <div className="input-group">
            <Lock className="input-icon" size={20} />
            <input
              type={showPassword ? 'text' : 'password'}
              name="password"
              placeholder="Password"
              className="input-field"
              value={formData.password}
              onChange={handleChange}
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

          {/* Confirm Password */}
          <div className="input-group">
            <Lock className="input-icon" size={20} />
            <input
              type={showPassword ? 'text' : 'password'}
              name="confirm_password"
              placeholder="Confirm Password"
              className="input-field"
              value={formData.confirm_password}
              onChange={handleChange}
              required
            />
          </div>

          {/* Terms Checkbox */}
          <div className="checkbox-group">
            <input
              type="checkbox"
              id="terms"
              checked={agreedToTerms}
              onChange={(e) => setAgreedToTerms(e.target.checked)}
            />
            <label htmlFor="terms">
              I agree to the <a href="#terms" className="link-green">Terms & Conditions</a> and <a href="#privacy" className="link-green">Privacy Policy</a>
            </label>
          </div>

          {/* Submit Button */}
          <button type="submit" className="btn-primary" disabled={loading}>
            {loading ? 'Creating Account...' : 'Sign Up'}
          </button>
        </form>

        {/* Social Dividers & Placeholders matching Image 2.jpg */}
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

          <button type="button" className="btn-social">
            <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
              <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.81-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M15.97 6.32c.68-.83 1.14-1.99.98-3.14-.98.04-2.17.65-2.87 1.47-.62.72-1.16 1.89-.99 3.01 1.09.08 2.21-.51 2.88-1.34z"/>
            </svg>
            Continue with Apple
          </button>
        </div>

        
      </div>
    </div>
  );
}