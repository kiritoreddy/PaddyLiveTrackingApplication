import React, { createContext, useState, useEffect } from 'react';
import { AuthService } from '../services/AuthService';

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null);

    useEffect(() => {
        const authenticateUser = async () => {
           // const isAuthenticated = await AuthService.isAuthenticated();
            if (true) {

                // Get user details (role, ppcId, etc.) from initial login
                const { role, ppcId, societyId } = await AuthService.login();
                setUser({ role, ppcId, societyId });
                console.log("user is ",user)
            }
        };
        // const authenticateUser = async () => {
        // const isAuthenticated = AuthService._isAuthenticated; // Check if authenticated
        // if (isAuthenticated) {
        //     // Fetch the user data stored after successful login
        //     const storedUser = AuthService.hardcodedUsers.find(
        //         (u) => u.username === user?.username // Fetch the current user's details from hardcoded users
        //     );
        //     if (storedUser) {
        //         setUser(storedUser); // Update the user state with the user details
               
        //     }
            
        // }

        authenticateUser();
    }, []);

    return (
        <AuthContext.Provider value={{ user, setUser }}>
            {children}
        </AuthContext.Provider>
    );
};
