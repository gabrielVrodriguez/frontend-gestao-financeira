// src/components/auth/ProtectedRoute.jsx

import React from 'react';
import { Navigate } from 'react-router-dom';

function ProtectedRoute({ isAuthenticated, children }) {
  if (!isAuthenticated) {
  
    return <Navigate to="/access" replace />;
  }

  return children;
}

export default ProtectedRoute;