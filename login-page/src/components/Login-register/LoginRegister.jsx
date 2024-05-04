import React, { useState ,useEffect} from 'react';
import './LoginRegister.css';
import { FaUser } from "react-icons/fa";
import { FaLock } from "react-icons/fa";
import { MdEmail } from "react-icons/md";

const LoginRegister = () => {

     const [action,setAction] = useState('login');
     
     useEffect(()=>{
        if( action === 'register'){
            document.querySelector('.login').style.display = 'none';
            document.querySelector('.register').style.display = 'block';
        } else if (action === 'login'){
            document.querySelector('.login').style.display = 'block';
            document.querySelector('.register').style.display = 'none';
        }
     },[action])
     const registerLink = () => {

        setAction('register');

     };

     const loginLink = () => {

        setAction('login');

     };
    

    return(
        <div className={`wrapper`}>
            <div className="form-box login">
                <form action="">
                    <h1>Login</h1>
                    <div className="input-box">
                        <input type="text" placeholder='Username' required/>
                        <FaUser className='icon' />
                    </div>
                    <div className="input-box">
                        <input type="Password" placeholder='Password' required/>
                        <FaLock className='icon' />
                    </div>

                    <div className="remeber-forgot">
                        <label><input type="checkbox" />
                        Remember me</label>
                        <a href="#">Forgot password?</a>
                    </div>

                    <button type='submit'>Login</button>
                    <div className="register-link">

                    <p>Don't have an account?<a href="#" onClick={registerLink}>Register</a></p>
                    </div>
                </form>

            </div>

            <div className="form-box register">
                <form action="" >
                    <h1>Registration</h1>
                    <div className="input-box">
                        <input type="text" placeholder='Username' required/>
                        <FaUser className='icon' />
                    </div>
                    <div className="input-box">
                        <input type="email" placeholder='Email' required/>
                        <MdEmail className='icon' />
                    </div>
                    <div className="input-box">
                        <input type="Password" placeholder='Password' required/>
                        <FaLock className='icon' />
                    </div>

                    <div className="remeber-forgot">
                        <label><input type="checkbox" />
                       I agree to the terms & conditions</label>
                       
                    </div>

                    <button type='submit'>Register</button>
                    <div className="register-link">

                    <p>Already have an account?<a href='#' onClick={loginLink}>Login</a></p>
                    </div>
                </form>

            </div>

        </div>
    );
};

    export default LoginRegister 