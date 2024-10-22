import React from 'react';
import Sidebar from '../../components/Sidebar';

const Dashboard = () => {
    return (
        <div className="container mt-5">
            <Sidebar/>
            <h2>Dashboard</h2>
            {/* Dashboard content goes here */}
        </div>
    );
};

export default Dashboard;
