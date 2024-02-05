import React, { useState } from 'react';
import './LoginForm.css';
import { FaUser, FaLock } from "react-icons/fa";
import { Link } from 'react-router-dom';
import { signInWithEmailAndPassword } from 'firebase/auth';
import { auth } from '../../Firebase';


const Login = () => {
    const [email, setEmail] = useState('');
    const [pass, setPassword] = useState('');

    const handleSubmit = async (event) => {
        event.preventDefault();
  
        signInWithEmailAndPassword(auth, email, pass)
        .then((userCredential)=>{
            console.log("Account Logged In", userCredential);
        }).catch((err) => {
            console.log(err)
        })
    };
    
    return (
        <div className='content'>
            <form onSubmit={handleSubmit}>
                <h1>Login</h1>
                <div className='input-box'>
                    <input
                        type="text"
                        id="email"
                        onChange={(e)=> setEmail(e.target.value)}
                        placeholder='Email' 
                        required />
                    <FaUser className='icon' />
                </div>
                <div className='input-box'>
                    <input
                        type="password"
                        id="password"
                        placeholder='Password'
                        onChange={(e)=> setPassword(e.target.value)}
                        required />
                    <FaLock className='icon' />
                </div>

                <div className='remember-forgot'>
                    <label><input type='checkbox' />Remember me</label><a href='www.google.com'>Forgot password?</a>
                </div>

                <button type='submit'>Login</button>

                <div className='register-link'>
                    <p>Don't have an account?  <Link to="/signup">Register</Link></p>
                </div>
            </form>
        </div>
    );
};

export default Login;