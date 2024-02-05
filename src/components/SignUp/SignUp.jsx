import React, { useState } from 'react';
import './SignUp.css';

import { FaUser, FaLock } from "react-icons/fa";
import { Link } from 'react-router-dom';
import { auth } from '../../Firebase';
import { createUserWithEmailAndPassword } from 'firebase/auth';

const SignUp = () => {
    const [email, setEmail] = useState('');
    const [pass, setPassword] = useState('');
    let [message, setMessage] = useState('');

    const handleSubmit = async (event) => {
        event.preventDefault();
        createUserWithEmailAndPassword(auth, email, pass)
            .then((userCredential) => {
                setMessage('User created successfully!')
                console.log("Account Created", userCredential);
            }).catch((err) => {
                console.log(err)
                const erroString = err.toString();
                setMessage('Error creating new user' + erroString.substring(message.indexOf(':')) );
                console.log(err);
            });
    };

    return (
        <div className='content'>
            <form onSubmit={handleSubmit}>
                <h1>Sign Up</h1>
                <div className='input-box'>
                    <input
                        type="text"
                        id="email"
                        placeholder='Email'
                        onChange={(e) => setEmail(e.target.value)}
                        required />
                    <FaUser className='icon' />
                </div>
                <div className='input-box'>
                    <input
                        type="password"
                        id="password"
                        placeholder='Password'
                        onChange={(e) => setPassword(e.target.value)}
                        required />
                    <FaLock className='icon' />
                </div>

                <div className='remember-forgot'>
                    <label><input type='checkbox' />Remember me</label>
                </div>

                <button className='logout-button' type='submit'>Sign Up</button>

                <div className='register-link'>
                    <p>Already Registered? <Link to="/">Login</Link></p>
                </div>
            </form> 
     
            <div className="footer-signup">
                <p>{message}</p>
            </div>
        </div>
    );
};

export default SignUp;