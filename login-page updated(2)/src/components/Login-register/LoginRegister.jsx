
import React, { useState } from 'react';
import './LoginRegister.css';
import { FaUser, FaLock } from "react-icons/fa";
import { MdEmail } from "react-icons/md";

const LoginRegister = () => {
    const [action, setAction] = useState('login'); // Set initial state to 'login'

    const registerLink = () => {
        setAction('register');
    };

    const loginLink = () => {
        setAction('login');
    };

    return (
        <div className={`wrapper ${action}`}>
            <div className={`form-box ${action === 'login' ? 'login' : 'register'}`}>
                <form action="">
                    <h1>{action === 'login' ? 'Login' : 'Registration'}</h1>
                    <div className="input-box">
                        <input type="text" placeholder='Username' required />
                        <FaUser className='icon' />
                    </div>
                    {action === 'register' && (
                        <div className="input-box">
                            <input type="email" placeholder='Email' required />
                            <MdEmail className='icon' />
                        </div>
                    )}
                    <div className="input-box">
                        <input type="password" placeholder='Password' required />
                        <FaLock className='icon' />
                    </div>

                    {action === 'login' && (
                        <div className="remeber-forgot">
                            <label><input type="checkbox" />
                                Remember me</label>
                        </div>
                    )}

                    {action === 'register' && (
                        <div className="remeber-forgot">
                            <label><input type="checkbox" />
                                I agree to the terms & conditions</label>
                        </div>
                    )}

                    <button type='submit'>{action === 'login' ? 'Login' : 'Register'}</button>
                    <div className="register-link">
                        <p>{action === 'login' ? 'Don\'t have an account?' : 'Already have an account?'}<a href='#' onClick={action === 'login' ? registerLink : loginLink}>{action === 'login' ? 'Register' : 'Login'}</a></p>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default LoginRegister;

