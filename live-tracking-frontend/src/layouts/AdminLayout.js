import React, { useState } from 'react';
import Sidebar from '../components/Sidebar';
import { Outlet } from 'react-router-dom';
import './AdminLayout.css'; // Custom CSS for AdminLayout

const AdminLayout = () => {
    const [isCollapsed, setIsCollapsed] = useState(false);

    const toggleSidebar = () => {
        setIsCollapsed(!isCollapsed);
    };

    return (
        <div className={`admin-layout ${isCollapsed ? 'collapsed' : ''}`}>
            <Sidebar />
            <div className={`main-content ${isCollapsed ? 'collapsed' : ''}`}>
                <Outlet />
            </div>
        </div>
    );
};

export default AdminLayout;
