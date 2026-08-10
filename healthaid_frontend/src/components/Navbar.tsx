import { Link } from 'react-router-dom';
import { HeartPulse } from 'lucide-react';
import './Navbar.css';

export default function Navbar() {
  return (
    <header className="navbar-container">
      <div className="navbar-inner">
        {/* Brand Logo matching HealthAid design */}
        <Link to="/" className="navbar-brand">
          <div className="logo-icon-wrapper">
            <HeartPulse size={24} className="logo-icon" />
          </div>
          <span className="brand-text">
            Health<span className="brand-accent">Aid</span>
          </span>
        </Link>

        {/* Navigation CTAs */}
        <div className="navbar-actions">
          <Link to="/login" className="btn-link">
            Sign In
          </Link>
          <Link to="/register" className="btn-primary-sm">
            Get Started
          </Link>
        </div>
      </div>
    </header>
  );
}