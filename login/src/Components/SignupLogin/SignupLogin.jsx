import React from 'react';
import './SignupLogin.css'
import mail_icon from '../assets/mail-icon.png'
import password_icon from '../assets/key-icon.png'
import user_icon from '../assets/user-icon.png'

export const SignupLogin = () => {
  return (
    <div className='container'>
<div className='header'>
<div className='text'>Sign Up</div>
<div className='line'></div>
</div>
<div className='fields'>
    <div className='input'>
    <img src="" alt='user_icon'/>
    <input type="text"/>
    </div>

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
        <div className="submit">Signup</div>
        <div className="submit">Login</div>
    </div>
    <div className="forgotPass"><span>Forgot Password ?</span></div>
    </div>
  )
  
}

export default SignupLogin;