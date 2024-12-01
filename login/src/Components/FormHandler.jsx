import { useState } from 'react';

const FormHandler = ({ 
  action, 
  formData, 
  setFormData, 
  setStoredData, 
  storedData, 
  onLoginSuccess,
  setAction
}) => {
  const handleInputChange = (e) => {
const { name, value } = e.target;
setFormData(prevData => ({ ...prevData, [name]: value }));
  };

  const handleSubmit = () => {
    if(!formData.email||!formData.password) {
      alert("fill in all fields");
      return;
    }

    if (action === "Sign Up") {
    setStoredData({ email: formData.email, password: formData.password });
     alert("Sign Up was successful!");

     setTimeout(()=>{setAction("Login");},2000);
    } 
    else if (action === "Login") {
    if(formData.email===storedData.email&&formData.password=== storedData.password) {
    if (onLoginSuccess) {
          onLoginSuccess();
        }
      } else {
        alert("Wrong Username/Password");
      }
    }
  };

  return { handleInputChange, handleSubmit };
};

export default FormHandler;