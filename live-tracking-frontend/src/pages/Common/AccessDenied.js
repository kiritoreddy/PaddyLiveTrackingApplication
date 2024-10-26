import React, { useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { AuthContext } from '../../context/AuthContext';

const AccessDenied = () => {
    const { user } = useContext(AuthContext);
    const navigate = useNavigate();

    const handleBackToDashboard = () => {
        if (user?.role === "admin") {
            navigate('/admin/dashboard'); // Navigate to admin dashboard
        } else if (user?.role === "user") {
            navigate('/ppc/dashboard'); // Navigate to PPC dashboard
        } else {
            navigate('/login'); // Default to login if role is undefined
        }
    };

    return (
        <div>
            <h1>Access Denied</h1>
            <p>You do not have permission to view this page.</p>
            <button onClick={handleBackToDashboard}>Go Back to Dashboard</button>
        </div>
    );
};

export default AccessDenied;
