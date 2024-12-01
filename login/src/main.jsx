import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import App from './App.jsx'
import './index.css'
import gdg_logo from './gdg_logo.png'


ReactDOM.createRoot(document.getElementById('root')).render(
  
  <React.StrictMode>
    <BrowserRouter>
    <img src={gdg_logo} className='gdg_logo'></img>
      <App />
    </BrowserRouter>
  </React.StrictMode>,
)