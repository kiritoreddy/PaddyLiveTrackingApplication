import React from 'react';
import Navbar from '../components/Navbar';

const PPCLayout = ({ children }) => {
    return (
        <div>
            <Navbar />
            <div className="container-fluid">
                {children}
            </div>
        </div>
    );
};

export default PPCLayout;
