import React from 'react';
import { Outlet } from 'react-router-dom';

const PPCLayout = () => {
    return (
        <div>
            
            <div className="container-fluid">
            <Outlet />
            </div>
        </div>
    );
};

export default PPCLayout;
