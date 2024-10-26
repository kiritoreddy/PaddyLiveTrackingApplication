import React from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import AdminDashboard from './pages/Admin/Dashboard';
import ManageUsers from './pages/Admin/ManageUsers';
import AdminReports from './pages/Admin/Reports';
import PPCDashboard from './pages/PPC/Dashboard';
import Form from './pages/PPC/Form';
import Login from './pages/Common/Login';
import NotFound from './pages/Common/NotFound';
import AccessDenied from './pages/Common/AccessDenied';
import PrivateRoute from './PrivateRoute';
import AdminLayout from './layouts/AdminLayout';
import PPCLayout from './layouts/PPCLayout';

const AppRoutes = () => {

    return (
        <Routes>
            {/* Public routes */}
            <Route path="/login" element={<Login />} />
            <Route path="/404" element={<NotFound />} />
            <Route path="/access-denied" element={<AccessDenied />} />
            <Route path="/" element={<Navigate to="/login" />} />
            <Route path="*" element={<Navigate to="/404" />} />

            {/* Private admin routes */}
            <Route element={<PrivateRoute requiredRole="admin" />}>
                <Route
                    element={<AdminLayout />}
                >
                    <Route path="/admin/dashboard" element={<AdminDashboard />} />
                    <Route path="/admin/manage-users" element={<ManageUsers />} />
                    <Route path="/admin/reports" element={<AdminReports />} />
                </Route>
            </Route>

            {/* Private PPC routes */}
            <Route element={<PrivateRoute requiredRole="user" />}>
                <Route
                    element={<PPCLayout />}
                >
                    <Route path="/ppc/dashboard" element={<PPCDashboard />} />
                    <Route path="/ppc/form" element={<Form />} />
                </Route>
            </Route>
        </Routes>
    );
};

export default AppRoutes;
