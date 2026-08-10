import { Link } from 'react-router-dom';
import { ArrowRight, ShieldCheck, Stethoscope, Activity } from 'lucide-react';
import './Home.css';

export default function Hero() {
  return (
    <section className="hero-section">
      <div className="hero-container">
        {/* Left Column: Messaging */}
        <div className="hero-content">
          <div className="badge">
            <Activity size={16} />
            <span>Your Personal Health Companion</span>
          </div>

          <h1 className="hero-title">
            Welcome to <br />
            <span className="text-highlight">HealthAid</span>
          </h1>

          <p className="hero-subtitle">
            Track health metrics, consult certified medical professionals, and take full control of your well-being in one unified platform.
          </p>

          <div className="hero-actions">
            <Link to="/register" className="btn-hero-primary">
              Get Started <ArrowRight size={18} />
            </Link>
            <Link to="/login" className="btn-hero-secondary">
              Already have an account? <span className="underline">Sign In</span>
            </Link>
          </div>
        </div>

        {/* Right Column: Healthcare Visual Elements matching Image 1 & 3 */}
        <div className="hero-visual">
          <div className="illustration-card">
            <div className="floating-badge badge-top">
              <ShieldCheck size={20} className="icon-green" />
              <div>
                <strong>Verified Care</strong>
                <p>Licensed Professionals</p>
              </div>
            </div>

            <div className="illustration-center">
              <div className="pulse-circle">
                <Stethoscope size={64} className="icon-stethoscope" />
              </div>
            </div>

            <div className="waveform-bg">
              <svg viewBox="0 0 500 150" preserveAspectRatio="none">
                <path d="M0,100 C150,180 350,0 500,100 L500,150 L0,150 Z" fill="#E6F4F1" opacity="0.6"></path>
              </svg>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}