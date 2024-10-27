import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import './Sidebar.css'; // Custom CSS for Sidebar
import { FaUsersLine } from "react-icons/fa6";
import { TbReportSearch } from "react-icons/tb";
import { IoIosAddCircle } from "react-icons/io";
import { AiOutlineDashboard } from "react-icons/ai";
import { IoIosLogOut } from "react-icons/io";


const Sidebar = () => {
    const location = useLocation();

    return (
        <div className="bg-light border-right sidebar-container" id="sidebar">
            <div className="sidebar-heading">  <img 
                    src="https://img.freepik.com/premium-vector/paddy-icon-logo-vector-design-template_827767-2940.jpg?w=2000" 
                    alt="Paddy Icon" 
                    className="paddy-icon" 
                /><span>Paddy Management </span></div>
            <ul className="nav flex-column">
                <li className="nav-item">
                    <Link
                        className={`nav-link ${location.pathname === '/admin/manage-users' ? 'active' : ''}`}
                        to="/admin/manage-users"
                    >
                        <FaUsersLine className="sidebar-icon" />
                        <span>Manage Users</span>
                    </Link>
                </li>
                <li className="nav-item">
                    <Link
                        className={`nav-link ${location.pathname === '/admin/reports' ? 'active' : ''}`}
                        to="/admin/reports"
                    >
                        <TbReportSearch className="sidebar-icon" />
                        <span>Reports</span>
                    </Link>
                </li>
                <li className="nav-item">
                    <Link
                        className={`nav-link ${location.pathname === '/ppc/form' ? 'active' : ''}`}
                        to="/ppc/form"
                    >
                        <IoIosAddCircle className="sidebar-icon" />
                        <span>Add Paddy Purchase</span>
                    </Link>
                    
                </li>
                <li className="nav-item">
                    <Link
                        className={`nav-link ${location.pathname === '/admin/dashboard' ? 'active' : ''}`}
                        to="/admin/dashboard"
                    >
                       <AiOutlineDashboard className="sidebar-icon" />
                        <span>Dashboard</span>
                    </Link>
                    
                </li>
                <li className="nav-item">
                    <Link
                        className={`nav-link ${location.pathname === '/login' ? 'active' : ''}`}
                        to="/login"
                    >
                       <AiOutlineDashboard className="sidebar-icon" />
                        <span>Dashboard</span>
                    </Link>
                    
                </li>
            </ul>
        </div>
    );
};

export default Sidebar;
