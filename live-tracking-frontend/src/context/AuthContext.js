import React, { createContext, useState, useEffect } from 'react';
import { AuthService } from '../services/AuthService';

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null);

    useEffect(() => {
        const authenticateUser = async () => {
            const isAuthenticated = await AuthService.isAuthenticated();
            if (isAuthenticated) {
                // Get user details (role, ppcId, etc.) from initial login
                const { role, ppcId, societyId } = await AuthService.getUserDetails();
                setUser({ role, ppcId, societyId });
            }
        };
        authenticateUser();
    }, []);

    return (
        <AuthContext.Provider value={{ user, setUser }}>
            {children}
        </AuthContext.Provider>
    );
};
