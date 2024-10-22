import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import './Sidebar.css'; // Custom CSS for Sidebar

const Sidebar = () => {
    const location = useLocation(); // Get the current route

    return (
        <div className="bg-light border-right sidebar-container" id="sidebar">
            <div className="sidebar-heading">Paddy Management</div>
            <ul className="nav flex-column">
                <li className="nav-item">
                    <Link
                        className={`nav-link ${location.pathname === '/admin/manage-users' ? 'active' : ''}`}
                        to="/admin/manage-users"
                    >
                        <i className="fas fa-users"></i> Manage Users
                    </Link>
                </li>
                <li className="nav-item">
                    <Link
                        className={`nav-link ${location.pathname === '/admin/reports' ? 'active' : ''}`}
                        to="/admin/reports"
                    >
                        <i className="fas fa-chart-line"></i> Reports
                    </Link>
                </li>
                <li className="nav-item">
                    <Link
                        className={`nav-link ${location.pathname === '/ppc/form' ? 'active' : ''}`}
                        to="/ppc/form"
                    >
                        <i className="fas fa-plus-circle"></i> Add Paddy Purchase
                    </Link>
                </li>
            </ul>
        </div>
    );
};

export default Sidebar;
