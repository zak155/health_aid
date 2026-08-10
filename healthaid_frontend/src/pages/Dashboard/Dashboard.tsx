import { useAuth } from '../../context/AuthContext';
import { useNavigate } from 'react-router-dom';
import { 
  HeartPulse, 
  LogOut, 
  UserCheck, 
  Stethoscope, 
  Activity, 
  Calendar, 
  FileText, 
  Users 
} from 'lucide-react';
import './Dashboard.css';

export default function Dashboard() {
  const { user, logout } = useAuth();
  const navigate = useNavigate();

  const handleLogout = () => {
    logout();
    navigate('/login');
  };

  const isDoctor = user?.role === 'DOCTOR';

  return (
    <div className="dashboard-wrapper">
      {/* Authenticated Header */}
      <header className="dash-header">
        <div className="dash-header-inner">
          <div className="brand-logo">
            <div className="logo-icon-wrapper">
              <HeartPulse size={24} className="logo-icon" />
            </div>
            <span className="brand-text">
              Health<span className="brand-accent">Aid</span>
            </span>
          </div>

          <div className="user-profile-summary">
            <div className="user-info">
              <span className="user-name">{user?.full_name}</span>
              <span className={`role-badge ${isDoctor ? 'badge-doctor' : 'badge-patient'}`}>
                {isDoctor ? <Stethoscope size={12} /> : <UserCheck size={12} />}
                {user?.role}
              </span>
            </div>

            <button onClick={handleLogout} className="btn-logout" title="Log out">
              <LogOut size={18} />
              <span>Sign Out</span>
            </button>
          </div>
        </div>
      </header>

      {/* Main Content Area */}
      <main className="dash-content">
        <div className="welcome-banner">
          <h1>Welcome back, {isDoctor ? `Dr. ${user?.full_name}` : user?.full_name}!</h1>
          <p>
            {isDoctor 
              ? 'Manage your patient appointments and medical consultations.' 
              : 'Track your personal health metrics and view upcoming medical care.'}
          </p>
        </div>

        {/* Dynamic Metrics Cards based on Role */}
        <div className="metrics-grid">
          {isDoctor ? (
            <>
              <div className="metric-card">
                <div className="card-icon icon-mint"><Users size={24} /></div>
                <div>
                  <h3>28</h3>
                  <p>Active Patients</p>
                </div>
              </div>

              <div className="metric-card">
                <div className="card-icon icon-mint"><Calendar size={24} /></div>
                <div>
                  <h3>6</h3>
                  <p>Appointments Today</p>
                </div>
              </div>

              <div className="metric-card">
                <div className="card-icon icon-mint"><FileText size={24} /></div>
                <div>
                  <h3>12</h3>
                  <p>Pending Prescriptions</p>
                </div>
              </div>
            </>
          ) : (
            <>
              <div className="metric-card">
                <div className="card-icon icon-mint"><Activity size={24} /></div>
                <div>
                  <h3>120/80</h3>
                  <p>Blood Pressure</p>
                </div>
              </div>

              <div className="metric-card">
                <div className="card-icon icon-mint"><Calendar size={24} /></div>
                <div>
                  <h3>2</h3>
                  <p>Upcoming Consultations</p>
                </div>
              </div>

              <div className="metric-card">
                <div className="card-icon icon-mint"><HeartPulse size={24} /></div>
                <div>
                  <h3>72 bpm</h3>
                  <p>Resting Heart Rate</p>
                </div>
              </div>
            </>
          )}
        </div>
      </main>
    </div>
  );
}