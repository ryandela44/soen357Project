import React, { useState } from 'react';
import { Link, useNavigate } from "react-router-dom";
import './Login.css';
import axios from 'axios';
import { toast } from 'react-toastify'; // Import toast

function Login() {
    const [credentials, setCredentials] = useState({ email: '', password: '' });
    const navigate = useNavigate();

    const handleChange = (event) => {
        const { name, value } = event.target;
        setCredentials(prev => ({ ...prev, [name]: value }));
    };

    const handleSubmit = async (event) => {
        event.preventDefault();
        try {
            const response = await axios.post('http://localhost:3000/api/login', credentials);
            console.log(response.data); // Handle response accordingly
            navigate('/home'); // Navigate on successful login
        } catch (error) {
            if (error.response) {
                // The request was made and the server responded with a status code
                // that falls out of the range of 2xx
                console.error(error.response.data);
                toast.error("User or password not correct", {
                    position: "top-right",
                    autoClose: 5000,
                    hideProgressBar: false,
                    closeOnClick: true,
                    pauseOnHover: true,
                    draggable: true,
                    progress: undefined,
                });
            } else if (error.request) {
                // The request was made but no response was received
                console.error(error.request);
                toast.error("No response from server. Check your network connection.", {
                    position: "top-right",
                    autoClose: 5000,
                    hideProgressBar: false,
                    closeOnClick: true,
                    pauseOnHover: true,
                    draggable: true,
                    progress: undefined,
                });
            } else {
                // Something happened in setting up the request that triggered an Error
                console.error('Error', error.message);
                toast.error("Error: " + error.message, {
                    position: "top-right",
                    autoClose: 5000,
                    hideProgressBar: false,
                    closeOnClick: true,
                    pauseOnHover: true,
                    draggable: true,
                    progress: undefined,
                });
            }
        }
    };


    return (
        <div className="login-container">
            <div className="login-header">
                <img src="/path-to-your-logo.png" alt="Logo" className="logo"/>
                <div className="account-actions">
                    <p>Don't have an account?</p>
                    <Link to="/signin" className="btn-signin">Sign Up</Link>
                </div>
            </div>
            <h2 className="login-text">Login</h2>
            <div className="login-box">
                <form className="login-form" onSubmit={handleSubmit}>
                    <div className="input-group">
                        <label>Email address</label>
                        <input type="email" name="email" required onChange={handleChange} />
                    </div>
                    <div className="input-group">
                        <label>Password</label>
                        <input type="password" name="password" required onChange={handleChange} />
                    </div>
                    <button type="submit" className="login-btn">Login</button>
                </form>
            </div>
        </div>
    );
}

export default Login;
