import React, { useState } from 'react'
import './Login.css'
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

export default function Login({onLogin}) {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');


    const navigate = useNavigate();
    const handleLogin = (e) =>{
        e.preventDefault();
        axios.post('http://localhost:3001/login', {username, password})
        .then(result => {console.log(result)
            if(result.data === "Success")
            {
                alert("Verifying the credentials!");
                setTimeout(()=>{
                    alert(`Success welcome ${username}!`)
                    onLogin();
                    navigate('/', {state: {username}});
                }, 5000)
                
            }
            else{
                alert("Verifying the Credentials")
                setTimeout(()=>{
                    alert(`Sorry there was at error there is nor record for the username ${username}`)
                }, 5000)
            }
        })
        .catch(err => console.log(err))
    }
    return (
        <>
            <div className="login-logo">
                <h2>FlashMart</h2>
            </div>
            <div className="login-form">
                <h2>Login</h2>
                <form onSubmit={handleLogin}>
                    <input type="text" name="name" value={username} autoComplete='off' onChange={(e) => setUsername(e.target.value)} placeholder='Enter your Name' id="name" />
                    <input type="password" name="password" value={password} autoComplete='off' onChange={(e) => setPassword(e.target.value)} placeholder='Enter your Password' id="password" />
                    <button>Login</button>
                </form>
                <p>Forgot Password?</p>
            </div>
        </>
    )
}
