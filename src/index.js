import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import SignUp from './components/signup';
import Login from './components/login';
import Navbar from './components/Navbar';
import ProductPage from './components/ProductPage';
import AddProduct from './components/add_product';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Navbar />
    <BrowserRouter>
      <Routes>

          <Route path="/" element={<App />} />
          <Route path="/Signup" element={<SignUp />} />
          <Route path='/Login' element={<Login />} />
          <Route path='/ProductPage' element={<ProductPage />} />
          <Route path='/AddProduct' element={<AddProduct />} />
      
      </Routes>
    </BrowserRouter>
  </React.StrictMode>

);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
