import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './SignupLogin.css'
import mail_icon from '../assets/mail-icon.png'
import password_icon from '../assets/key-icon.png'
import user_icon from '../assets/user-icon.png'
import FormHandler from '../FormHandler';

export const SignupLogin = () => {
  const navigate = useNavigate();
  const [action, setAction] = useState("Sign Up");
  const [formData, setFormData] = useState({username: "",email: "",password: ""});
  const [storedData, setStoredData] = useState({ email: "", password: "" });
  
  const handleLoginSuccess = () => {navigate('/dashboard');};

  const {handleInputChange,handleSubmit} = FormHandler({action,formData,setFormData,setStoredData,storedData,onLoginSuccess:handleLoginSuccess});
  
  return (
    <div className='container'>
      <div className='header'>
        <div className='text'>{action}</div>
        <div className='line'></div>
      </div>

      <div className='fields'>
        {action === "Login" ? null : (
          <div className='input'>
            <img src={user_icon} alt='user_icon'/>
            <input type="text" name="username" value={formData.username} onChange={handleInputChange} placeholder="Username" />
          </div>
        )}
   
        <div className='input'>
          <img src={mail_icon} alt='email_icon'/>
          <input type="email" name="email" value={formData.email} onChange={handleInputChange} placeholder="Email"/>
        </div>

        <div className='input'>
          <img src={password_icon} alt='key_icon'/>
          <input type="password" name="password" value={formData.password} onChange={handleInputChange} placeholder="Password"/>
        </div>
      </div>

      
      <div className='submit-box'>
        <div className={action === "Login" ? "submit gray" : "submit"} onClick={() => setAction("Sign Up")}>Signup</div>
        <div className={action === "Sign Up" ? "submit gray" : "submit"} onClick={() => setAction("Login")}>Login</div>
        
        </div>
      <div className="submit" onClick={handleSubmit}>Submit</div>
      <div className="forgotPass"><span>Forgot Password ?</span></div>
    </div>
  )
}

export default SignupLogin;