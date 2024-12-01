import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const FormHandler = ({ action, formData, setFormData, setStoredData, storedData }) => {
  const navigate = useNavigate();

  const handleInputChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = () => {
    if (action === "Sign Up") {
      setStoredData({ email: formData.email, password: formData.password });
      alert("Sign Up Successful!");
    } else if (action === "Login") {
      if (formData.email === storedData.email && formData.password === storedData.password) {
        alert("Login Successful!");
        navigate('/dashboard');
      } else {
        alert("Invalid Credentials!");
      }
    }
  };

  return { handleInputChange, handleSubmit };
};

export default FormHandler;
