import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import './main.css';
import Login from './pages/login/Login';
import Header from './components/header/Header';
import Footer from './components/footer/Footer';
import Home from './pages/home/Home';
import User from './pages/user/User';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
    <Header />
    <Routes>
        <Route index element={<Home/>} />
        <Route path="login" element={<Login />}/>
        <Route path='profile' element={<User/>} />
    </Routes>
    <Footer />
  </BrowserRouter>
);


