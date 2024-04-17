import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';
import './SignUp.css';
import { toast } from 'react-toastify';
import logo from "../Assets/logo.png";

function SignUp() {
    const [credentials, setCredentials] = useState({ email: '', password: '', confirmPassword: '' });
    const navigate = useNavigate();

    const handleChange = (event) => {
        const { name, value } = event.target;
        setCredentials(prev => ({ ...prev, [name]: value }));
    };

    const handleSubmit = async (event) => {
        event.preventDefault();
        if (credentials.password !== credentials.confirmPassword) {
            toast.error("Passwords do not match");
            return;
        }

        try {
            const response = await axios.post('http://localhost:3000/api/signup', {
                email: credentials.email,
                password: credentials.password
            });
            toast.success("Signup successful");
            navigate('/login'); // Redirect to login after successful signup
        } catch (error) {
            toast.error(error.response.data.message);
        }
    };

    return (
        <div className="login-container">
            {/* Similar layout and classes as the Login component */}
            <div className="login-header">
                <img src={logo} alt="Logo" className="logo"/>
                <div className="account-actions">
                    <p>Already have an account?</p>
                    <Link to="/login" className="btn-signin">Log In</Link>
                </div>
            </div>
            <h2 className="login-text">Sign Up</h2>
            <div className="login-box">
                <form className="login-form" onSubmit={handleSubmit}>
                    <div className="input-group">
                        <label>Email Address</label>
                        <input type="email" name="email" required onChange={handleChange} />
                    </div>
                    <div className="input-group">
                        <label>Password</label>
                        <input type="password" name="password" required onChange={handleChange} />
                    </div>
                    <div className="input-group">
                        <label>Confirm Password</label>
                        <input type="password" name="confirmPassword" required onChange={handleChange} />
                    </div>
                    <button type="submit" className="login-btn">Sign Up</button>
                </form>
            </div>
        </div>
    );
}

export default SignUp;
