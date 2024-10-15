// Entry point for the React application
import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { BrowserRouter } from 'react-router-dom';
import { AuthProvider } from './context/AuthContext';
import 'bootstrap/dist/css/bootstrap.min.css';

ReactDOM.render(<BrowserRouter><AuthProvider><App /></AuthProvider></BrowserRouter>, document.getElementById('root'));
