import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import './Signin.css';
import axios from 'axios';

export default function Signin({ onSubmit }) {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [email, setMail] = useState('');

    const navigate = useNavigate();

    const validateForm = () => {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        const passwordRegex = /^(?=.*[0-9])(?=.*[!@#$%^&*])[A-Za-z\d!@#$%^&*]{8,}$/;

        if (!username.trim()) {
            alert("Username is required.");
            return false;
        }

        if (!email.trim()) {
            alert("Email is required.");
            return false;
        } else if (!emailRegex.test(email)) {
            alert("Invalid email format.");
            return false;
        }

        if (!password.trim()) {
            alert("Password is required.");
            return false;
        } else if (!passwordRegex.test(password)) {
            alert("Password must be at least 8 characters long, include a number and a special character.");
            return false;
        }

        return true;
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        if (!validateForm()) return;

        axios.post('https://flashmart.onrender.com/user', { username, password, email })
            .then(result => {
                console.log(result);
                alert("Success! You have created an account!");
                navigate('/login');
            })
            .catch(err => console.log(err));
    };

    return (
        <>
            <div className="signin-logo">
                <h2>FlashMart</h2>
            </div>
            <div className="signin-form">
                <h2>Register</h2>
                <form onSubmit={handleSubmit}>
                    <input type="text" value={username} autoComplete='off' onChange={(e) => setUsername(e.target.value)} placeholder='Enter your Name' />
                    <input type="email" value={email} autoComplete='off' onChange={(e) => setMail(e.target.value)} placeholder='Enter your Email' />
                    <input type="password" value={password} autoComplete='off' onChange={(e) => setPassword(e.target.value)} placeholder='Enter your Password' />
                    <button>Submit</button>
                </form>
                <p>Already have an Account?</p>
                <button>
                    <Link to="/login">Login</Link>
                </button>
            </div>
        </>
    );
}
