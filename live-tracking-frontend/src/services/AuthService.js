// AuthService for managing authentication and roles using cookies
import axios from 'axios';

export const AuthService = {
    login: async (credentials) => {
        try {
            const response = await axios.post('/api/login', credentials, { withCredentials: true });
            const { role, ppcId, societyId } = response.data;
            // Store role, ppcId, societyId in Context or State for later use
            return { role, ppcId, societyId };
        } catch (error) {
            console.error('Login failed:', error);
            return false;
        }
    },
    logout: async () => {
        try {
            await axios.post('/api/logout', {}, { withCredentials: true }); // Clear cookies on logout
        } catch (error) {
            console.error('Logout failed:', error);
        }
    },
    isAuthenticated: async () => {
        try {
            const response = await axios.get('/api/auth/validate', { withCredentials: true });
            return response.status === 200;
        } catch (error) {
            console.error('Authentication check failed:', error);
            return false;
        }
    },
    getRoles: async () => {
        try {
            const response = await axios.get('/api/user/roles', { withCredentials: true });
            return response.data.roles; // Assuming the response contains a 'roles' array
        } catch (error) {
            console.error('Failed to fetch user roles:', error);
            return []; // Return empty array if there's an error
        }
    },
    hasRole: async (role) => {
        const roles = await this.getRoles();
        return roles.includes(role); // Check if the user has the specified role
    }
};
