import { useState, useEffect, createContext } from 'react';
import { AuthService } from '../services/AuthService';

export const AuthContext = createContext(null);

export const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null);
    const [isAuthenticated, setIsAuthenticated] = useState(false);
    const [loading, setLoading] = useState(true);
    const authenticateUser = async () => {
        const authStatus = await AuthService.isAuthenticated();
        if (authStatus) {
            const { role, ppcId, societyId } = await AuthService.getUserInfo();
            setUser({ role, ppcId, societyId });
            setIsAuthenticated(true);
        } else {
            setUser(null);
            setIsAuthenticated(false);
        }
        setLoading(false);
    };

    useEffect(() => {
        authenticateUser();
    }, []);

    return (
        <AuthContext.Provider value={{ user, isAuthenticated, setUser, authenticateUser,loading }}>
            {children}
        </AuthContext.Provider>
    );
};
