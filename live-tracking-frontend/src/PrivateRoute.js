// // PrivateRoute component
// import React from 'react';
// import { Route, Navigate } from 'react-router-dom';
// import { AuthService } from './services/AuthService';

// const PrivateRoute = ({ component: Component, ...rest }) => {
//     const [isAuthenticated, setIsAuthenticated] = React.useState(false);

//     React.useEffect(() => {
//         const checkAuth = async () => {
//             const auth = await AuthService.isAuthenticated();
//             setIsAuthenticated(auth);
//         };
//         checkAuth();
//     }, []);

//     return (
//         <Route
//             {...rest}
//             render={props =>
//                 isAuthenticated ? (
//                     <Component {...props} />
//                 ) : (
//                     <Navigate to="/login" />
//                 )
//             }
//         />
//     );
// };

// export default PrivateRoute;
import React, { useState, useEffect } from 'react';
import { Outlet, Navigate } from 'react-router-dom';
import { AuthService } from './services/AuthService';

const PrivateRoute = () => {
    const [isAuthenticated, setIsAuthenticated] = useState(null); // Initial state is 'null' to indicate loading

    useEffect(() => {
        const checkAuth = async () => {
            const auth = await AuthService.isAuthenticated();
            setIsAuthenticated(auth);
        };
        checkAuth();
    }, []);

    if (isAuthenticated === null) {
        return <div>Loading...</div>; // Loading indicator while checking authentication
    }

    return isAuthenticated ? <Outlet /> : <Navigate to="/login" />;
};

export default PrivateRoute;

