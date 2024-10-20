import React, { useState, useContext } from 'react';
import { AuthService } from '../../services/AuthService';
import { AuthContext } from '../../context/AuthContext';
import { useNavigate } from 'react-router-dom';
import './Login.css'; // Import the new CSS file

const Login = () => {
    const [userName, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const { setUser } = useContext(AuthContext);
    const navigate = useNavigate();

    const handleSubmit = async (e) => {
        e.preventDefault();
        const userData = await AuthService.login({ userName, password });
        if (userData) {
            setUser(userData); // Set user data in context after successful login
            if (userData.role === 'admin') {
                navigate('/admin/dashboard'); // Redirect to admin dashboard
            } else if (userData.role === 'user') {
                navigate('/ppc/dashboard'); // Redirect to PPC dashboard for users
            }
        } else {
            alert('Login failed');
        }
    };

    return (
        <div className="container">
            <h2>Login</h2>
            <form onSubmit={handleSubmit}>
                <div className="form-group">
                    <label htmlFor="username" className="label">Username</label>
                    <input
                        type="text"
                        id="username"
                        value={userName}
                        onChange={(e) => setUsername(e.target.value)}
                        required
                    />
                </div>
                <div className="form-group">
                    <label htmlFor="password" className="label">Password</label>
                    <input
                        type="password"
                        id="password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        required
                    />
                </div>
                <button type="submit">Login</button>
            </form>
        </div>
    );
};

export default Login;
