import React from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import Sidebar from './components/Sidebar'; // Import the Sidebar
import AdminDashboard from './pages/Admin/Dashboard';
import ManageUsers from './pages/Admin/ManageUsers';
import AdminReports from './pages/Admin/Reports';
import PPCDashboard from './pages/PPC/Dashboard';
import Form from './pages/PPC/Form';
import Login from './pages/Common/Login';
import NotFound from './pages/Common/NotFound';
import PrivateRoute from './PrivateRoute';

const AppRoutes = () => {
    return (
        <div className="app-container">
            <Sidebar /> {/* Sidebar is persistent */}
            <div className="content-container">
                <Routes>
                    <Route path="/login" element={<Login />} />
                    <Route element={<PrivateRoute />}>
                        <Route path="/admin/dashboard" element={<AdminDashboard />} />
                        <Route path="/admin/manage-users" element={<ManageUsers />} />
                        <Route path="/admin/reports" element={<AdminReports />} />
                        <Route path="/ppc/dashboard" element={<PPCDashboard />} />
                        <Route path="/ppc/form" element={<Form />} />
                    </Route>
                    <Route path="/404" element={<NotFound />} />
                    <Route path="/" element={<Navigate to="/login" />} />
                    <Route path="*" element={<Navigate to="/404" />} />
                </Routes>
            </div>
        </div>
    );
};

export default AppRoutes;
