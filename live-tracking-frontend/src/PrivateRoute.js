import React, { useContext } from 'react';
import { Outlet, Navigate } from 'react-router-dom';
import { AuthContext } from './context/AuthContext';

const PrivateRoute = ({ requiredRole }) => {
    const { isAuthenticated, user } = useContext(AuthContext);

    if (isAuthenticated === null) {
        return <div>Loading...</div>; // Show loading while checking auth
    }

    if (!isAuthenticated) {
        return <Navigate to="/login" />; // Redirect to login if not authenticated
    }

    if (requiredRole && user.role !== requiredRole) {
        return <Navigate to="/access-denied" />; // Redirect if role doesn't match
    }

    return <Outlet />; // Render child routes if authenticated and role matches
};

export default PrivateRoute;
