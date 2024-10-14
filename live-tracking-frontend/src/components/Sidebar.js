import React from 'react';
import { Link } from 'react-router-dom';

const Sidebar = () => {
    return (
        <div className="bg-light border-right" id="sidebar">
            <div className="sidebar-heading">Paddy Management</div>
            <ul className="nav flex-column">
                <li className="nav-item">
                    <Link className="nav-link" to="/admin/manage-users">Manage Users</Link>
                </li>
                <li className="nav-item">
                    <Link className="nav-link" to="/admin/reports">Reports</Link>
                </li>
                <li className="nav-item">
                    <Link className="nav-link" to="/ppc/form">Add Paddy Purchase</Link>
                </li>
            </ul>
        </div>
    );
};

export default Sidebar;
