// Centralized route configuration
import React, { useEffect } from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';
import { Dashboard as AdminDashboard, ManageUsers, Reports as AdminReports } from './pages/Admin';
import { Dashboard as PPCDashboard, Form, Reports as PPCReports } from './pages/PPC';
import { Login, NotFound } from './pages/Common';
import PrivateRoute from './components/PrivateRoute'; // Your custom private route component
import { AuthService } from './services/AuthService';

const Routes = () => {
    const [isAuthenticated, setIsAuthenticated] = React.useState(false);

    useEffect(() => {
        const checkAuth = async () => {
            const auth = await AuthService.isAuthenticated();
            setIsAuthenticated(auth);
        };
        checkAuth();
    }, []);

    return (
        <Switch>
            <Route path="/login" component={Login} />
            <PrivateRoute path="/admin/dashboard" component={AdminDashboard} />
            <PrivateRoute path="/admin/manage-users" component={ManageUsers} />
            <PrivateRoute path="/admin/reports" component={AdminReports} />
            <PrivateRoute path="/ppc/dashboard" component={PPCDashboard} />
            <PrivateRoute path="/ppc/form" component={Form} />
            <PrivateRoute path="/ppc/reports" component={PPCReports} />
            <Route path="/404" component={NotFound} />
            <Redirect from="/" to="/login" />
            <Redirect to="/404" />
        </Switch>
    );
};

export default Routes;
