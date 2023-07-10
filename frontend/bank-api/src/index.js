import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import './main.css';
import Login from './pages/login/Login';
import Header from './components/header/Header';
import Footer from './components/footer/Footer';
import Home from './pages/home/Home';
import User from './pages/user/User';
import store from './store/store';
import { Provider } from 'react-redux';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
    <Provider store={store}>
      <Header />
      <Routes>
          <Route index element={<Home/>} />
          <Route path="login" element={<Login />}/>
          <Route path='/profile/:id' element={<User/>} />
      </Routes>
      <Footer />
    </Provider>
  </BrowserRouter>
);


