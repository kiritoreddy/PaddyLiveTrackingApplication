// AuthService for managing authentication and roles using cookies
// import axios from 'axios';
// import Cookies from 'js-cookie';
// import { jwtDecode } from 'jwt-decode';

// axios.defaults.baseURL = 'http://localhost:8080';


// export const AuthService = {

    // hardcodedUsers: [
    //     {
    //         username: 'admin',
    //         password: 'admin123',
    //         role: 'admin', // Define user roles here
    //         ppcId: 'ppc123',
    //         societyId: 'society456',
    //     },
    //     {
    //         username: 'user1',
    //         password: 'user123',
    //         role: 'user', // Another user with role 'user'
    //         ppcId: 'ppc789',
    //         societyId: 'society123',
    //     },
    //     {
    //         username: 'user2',
    //         password: 'user456',
    //         role: 'user', // Another user with role 'user'
    //         ppcId: 'ppc456',
    //         societyId: 'society789',
    //     }
    // ],
    // _isAuthenticated: false,
    // login: async (credentials) => {
    //     try {
    //         // Check hardcoded credentials
    //         const user = AuthService.hardcodedUsers.find(
    //             (u) => u.username === credentials.username && u.password === credentials.password
    //         );
    //          console.log(user)
    //         if (user) {
    //             const { role, ppcId, societyId } = user;
    //             AuthService.isAuthenticated = true;
    //             // Return role, ppcId, societyId from hardcoded user data
    //             return { role, ppcId, societyId};
    //         } else { AuthService.isAuthenticated = false;
    //             throw new Error('Invalid credentials');
    //         }
    //     } catch (error) {
    //         console.error('Login failed:', error);
    //         return false;
    //     }
    // },


    
//     login: async (credentials) => {
//         try {
//             const response = await axios.post('/api/users/login', credentials);
//             const token = response.data;
//           //  const { role, ppcId, societyId } = response.data;
//             // Store role, ppcId, societyId in Context or State for later use
//             Cookies.set('authToken', token, { expires: 7 });
//             const decodedToken = jwtDecode(token);
//             const { role, ppcId, societyId } = decodedToken;

//             return { role, ppcId, societyId };
//         } catch (error) {
//             console.error('Login failed:', error);
//             return false;
//         }
//     },
//     logout: async () => {
//         try {
//             await axios.post('/api/users/logout', {}, { withCredentials: true }); // Clear cookies on logout
//         } catch (error) {
//             console.error('Logout failed:', error);
//         }
//     },
//     // isAuthenticated: () => {
//     //     return AuthService._isAuthenticated; // Return the current authentication status
//     // },

//     isAuthenticated: async () => {
//         try {
//             const response = await axios.get('/api/users/validate', { withCredentials: true });
//             return response.status === 200;
//         } catch (error) {
//             console.error('Authentication check failed:', error);
//             return false;
//         }
//     },
//     getRoles: async () => {
//         try {
//             const response = await axios.get('/api/user/roles', { withCredentials: true });
//             return response.data.roles; // Assuming the response contains a 'roles' array
//         } catch (error) {
//             console.error('Failed to fetch user roles:', error);
//             return []; // Return empty array if there's an error
//         }
//     },
//     hasRole: async (role) => {
//         const roles = await this.getRoles();
//         return roles.includes(role); // Check if the user has the specified role
//     }
// };

import axios from 'axios';
import Cookies from 'js-cookie';
import {jwtDecode} from 'jwt-decode'; // Corrected the import, removed curly braces

axios.defaults.baseURL = 'http://localhost:8080';

export const AuthService = {
    // Login function
    login: async (credentials) => {
        try {
            const response = await axios.post('/api/users/login', credentials);
            const token = response.data; // Assuming the token is returned in response.data

            // Store the token in cookies for later use
            Cookies.set('authToken', token, { expires: 7 });

            // Decode the token to extract user information (role, ppcId, societyId)
            const decodedToken = jwtDecode(token); // Corrected the decoding method
            const { role, ppcId, societyId } = decodedToken;

            return { role, ppcId, societyId };
        } catch (error) {
            console.error('Login failed:', error);
            return false;
        }
    },
    
    // Logout function
    logout: async () => {
        try {
            await axios.post('/api/users/logout', {}, { withCredentials: true });
            Cookies.remove('authToken'); // Clear token from cookies on logout
        } catch (error) {
            console.error('Logout failed:', error);
        }
    },

    // Authentication check function
    isAuthenticated: async () => {
        try {
            const token = Cookies.get('authToken'); // Retrieve token from cookies

            if (!token) {
                throw new Error('No token found');
            }

            // Send token in the Authorization header
            const response = await axios.get('/api/users/validate', {
                headers: {
                    'Authorization': 'Bearer ' + token, // Correct Bearer token format
                },
                withCredentials: true // Include credentials if needed by server
            });

            return response.status === 200; // Return true if authentication is valid
        } catch (error) {
            console.error('Authentication check failed:', error);
            return false;
        }
    },

    // Fetch user roles
    getRoles: async () => {
        try {
            const token = Cookies.get('authToken'); // Retrieve token from cookies

            if (!token) {
                throw new Error('No token found');
            }

            // Send request with Authorization header containing Bearer token
            const response = await axios.get('/api/user/roles', {
                headers: {
                    'Authorization': 'Bearer ' + token, // Ensure token is sent in the correct format
                },
                withCredentials: true // Include credentials if needed by server
            });

            return response.data.roles; // Return the roles array
        } catch (error) {
            console.error('Failed to fetch user roles:', error);
            return []; // Return an empty array if error occurs
        }
    },

    // Check if user has a specific role
    hasRole: async (role) => {
        const roles = await AuthService.getRoles(); // Fixed reference to AuthService for method call
        return roles.includes(role); // Return true if user has the specified role
    }
};



