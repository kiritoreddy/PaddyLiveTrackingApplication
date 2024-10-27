import React from 'react';
import Sidebar from '../components/Sidebar';
import { Outlet } from 'react-router-dom';

const AdminLayout = () => {
    return (
        <div className="d-flex">
            
            <div className="container-fluid">
                <div className="row">
                    <div className="col-md-9">
                        <Sidebar />
                    </div>
                    <div className="col-md-9">
                    <Outlet />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AdminLayout;
