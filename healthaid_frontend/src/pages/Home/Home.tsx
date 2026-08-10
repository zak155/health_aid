import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { 
  ArrowRight, 
  Heart, 
  Plus, 
  Stethoscope, 
  ShieldCheck,
  Activity
} from 'lucide-react';
import doctorImg from '../../assets/doctor.png';
import './Home.css';

export default function Home() {
  const [currentSlide, setCurrentSlide] = useState<number>(0);
  const navigate = useNavigate();

  const handleNext = () => {
    if (currentSlide < 1) {
      setCurrentSlide(currentSlide + 1);
    } else {
      navigate('/register');
    }
  };

  return (
    <div className="onboarding-wrapper">
      <div className="onboarding-card">
        
        {/* Top Header Controls */}
        <div className="onboarding-top-nav">
          {currentSlide === 0 ? (
            <Link to="/login" className="skip-btn">
              Skip
            </Link>
          ) : (
            <div style={{ height: '22px' }} /> /* Spacer for alignment on Slide 2 */
          )}
        </div>

        {/* SLIDE 1 (Image 1_2.jpg) */}
        {currentSlide === 0 && (
          <div className="slide-content">
            <div className="slide-1-text">
              <h1>
                Welcome to <br />
                <span className="brand-highlight">HealthAid</span>
              </h1>
              <p>
                Your personal health companion. Track, consult and take control of your well-being.
              </p>
            </div>

            <div className="doctor-visual-container">
              <img 
                src={doctorImg} 
                alt="HealthAid Doctor" 
                className="doctor-png-image"
              />
            </div>
          </div>
        )}

        {/* SLIDE 2 (Image 3_2.jpg) */}
        {currentSlide === 1 && (
          <div className="slide-content slide-2-container">
            {/* Header Brand Logo & Tagline */}
            <div className="brand-hero-section">
              <div className="heart-badge-wrapper" style={{ width: '64px', height: '64px' }}>
                <div className="heart-plus-icon">
                  <Heart size={44} fill="var(--primary-green)" color="var(--primary-green)" />
                  <Plus size={18} className="heart-plus-overlay" />
                </div>
              </div>
              <h1 className="brand-hero-title">
                Health<span className="brand-highlight">Aid</span>
              </h1>
              <p className="brand-hero-tagline">Your Health, Our Priority</p>
            </div>

            {/* Central Medical Illustration matching Image 3_2.jpg */}
            <div className="medical-hero-visual">
              {/* Pulse Waveform Background */}
              <div className="pulse-waveform-svg">
                <svg viewBox="0 0 500 80" preserveAspectRatio="none" style={{ width: '100%', height: '100%' }}>
                  <path
                    d="M0,40 L160,40 L180,15 L200,65 L220,25 L240,50 L250,40 L500,40"
                    fill="none"
                    stroke="var(--primary-green)"
                    strokeWidth="2.5"
                  />
                </svg>
              </div>

              {/* Shield & Stethoscope Display */}
              <div className="instruments-display-row">
                <div className="medical-badge-card" title="Verified Medical Security">
                  <ShieldCheck size={32} />
                </div>
                <div className="stethoscope-circle" title="Doctor Consultations">
                  <Stethoscope size={40} />
                </div>
                <div className="medical-badge-card" title="Health Metrics Tracking">
                  <Activity size={32} />
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Bottom Navigation & Controls */}
        <div className="onboarding-footer">
          {/* Centered Pagination Dots */}
          <div className="pagination-dots">
            <button 
              className={`dot ${currentSlide === 0 ? 'active' : ''}`} 
              onClick={() => setCurrentSlide(0)}
              aria-label="Slide 1"
            />
            <button 
              className={`dot ${currentSlide === 1 ? 'active' : ''}`} 
              onClick={() => setCurrentSlide(1)}
              aria-label="Slide 2"
            />
          </div>

          {currentSlide === 0 ? (
            /* Slide 1 Next Action */
            <div className="slide-1-action-row">
              <button onClick={handleNext} className="btn-circle-next" aria-label="Next Slide">
                <ArrowRight size={22} />
              </button>
            </div>
          ) : (
            /* Slide 2 Action: Get Started Button & Sign In Link */
            <div className="slide-2-footer">
              <button onClick={() => navigate('/register')} className="btn-get-started">
                Get Started
              </button>

              <div className="bottom-signin-text">
                <span>Already have an account? </span>
                <Link to="/login" className="link-green">Sign In</Link>
              </div>
            </div>
          )}
        </div>

      </div>
    </div>
  );
}