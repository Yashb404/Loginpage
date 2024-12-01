import React, { useState } from 'react';
import './SignupLogin.css'
import mail_icon from '../assets/mail-icon.png'
import password_icon from '../assets/key-icon.png'
import user_icon from '../assets/user-icon.png'
import FormHandler from '../FormHandler';

export const SignupLogin = () => {
  const [action,setAction] = useState("Sign Up");
  
    return (
    <div className='container'>
<div className='header'>
<div className='text'>Sign Up</div>
<div className='line'></div>
</div>
<div className='fields'>
    {action==="Login"?<div></div>: <div className='input'>
    <img src="" alt='user_icon'/>
    <input type="text"/>
    </div>}
   

    <div className='input'>
    <img src={mail_icon} alt='email_icon'/>
    <input type="email"/>
    </div>

    <div className='input'>
    <img src={password_icon} alt='key_icon'/>
    <input type="password"/>
    </div>
    </div>
    <div className='submit-box'>
        <div className={action==="Login"?"submit gray":"submit"} onClick={()=>{setAction("Sign Up")}}>Signup</div>
        <div className={action==="Sign Up"?"submit gray":"submit"} onClick={()=>{setAction("Login")}}>Login</div>
    </div>
    <div className="forgotPass"><span>Forgot Password ?</span></div>
    </div>
  )
  
}

export default SignupLogin;