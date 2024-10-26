import React, { useState, useContext, useEffect } from 'react';
import { AuthService } from '../../services/AuthService';
import { AuthContext } from '../../context/AuthContext';
import { useNavigate } from 'react-router-dom';
import './Login.css';
import Loading from '../../components/Loading';

const Login = () => {
    const [userName, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const { user, setUser, isAuthenticated, loading } = useContext(AuthContext);
    const navigate = useNavigate();

    // Redirect to dashboard if user is authenticated
    useEffect(() => {
        if (!loading && isAuthenticated) {
            if (user?.role === "admin") {
                navigate("/admin/dashboard");
            } else if (user?.role === "user") {
                navigate("/ppc/dashboard");
            }
        }
    }, [loading, isAuthenticated, user, navigate]);

    const handleSubmit = async (e) => {
        e.preventDefault();
        const userData = await AuthService.login({ userName, password });

        if (userData) {
            setUser(userData);
            if (userData.role === "admin") {
                navigate("/admin/dashboard");
            } else if (userData.role === "user") {
                navigate("/ppc/dashboard");
            }
        } else {
            alert('Login failed');
        }
    };

    return (
        <>
            {loading ? (
                <Loading/>
            ) : (
                !isAuthenticated && (
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
                )
            )}
        </>
    );
};

export default Login;
