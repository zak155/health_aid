import React from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';

interface ProtectedRouteProps {
  children: React.ReactNode;
  allowedRoles?: ('PATIENT' | 'DOCTOR')[];
}

export default function ProtectedRoute({ children, allowedRoles }: ProtectedRouteProps) {
  const { isAuthenticated, isLoading, user } = useAuth();
  const location = useLocation();

  // Show a clean loading spinner while checking token validity on initial reload
  if (isLoading) {
    return (
      <div className="loading-container" style={{ padding: '4rem', textAlign: 'center' }}>
        <p>Loading HealthAid session...</p>
      </div>
    );
  }

  // Guard 1: Must be authenticated
  if (!isAuthenticated) {
    // Redirect to login, but store the requested URL so we can send them back after login
    return <Navigate to="/login" state={{ from: location }} replace />;
  }

  // Guard 2: Optional Role-Based Access Control
  if (allowedRoles && user && !allowedRoles.includes(user.role)) {
    return (
      <div style={{ padding: '4rem', textAlign: 'center' }}>
        <h2>Access Denied</h2>
        <p>Your current role ({user.role}) does not have permission to view this portal.</p>
      </div>
    );
  }

  return <>{children}</>;
}