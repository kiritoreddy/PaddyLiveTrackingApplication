// PrivateRoute component
import React from 'react';
import { Route, Navigate } from 'react-router-dom';
import { AuthService } from './services/AuthService';

const PrivateRoute = ({ component: Component, ...rest }) => {
    const [isAuthenticated, setIsAuthenticated] = React.useState(false);

    React.useEffect(() => {
        const checkAuth = async () => {
            const auth = await AuthService.isAuthenticated();
            setIsAuthenticated(auth);
        };
        checkAuth();
    }, []);

    return (
        <Route
            {...rest}
            render={props =>
                isAuthenticated ? (
                    <Component {...props} />
                ) : (
                    <Navigate to="/login" />
                )
            }
        />
    );
};

export default PrivateRoute;
