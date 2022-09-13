import React, { Component } from 'react';

import MainPage from 'pages/MainPage/MainPage';
import LoginPage from 'pages/LoginPage/LoginPage';
import RegisterPage from 'pages/RegisterPage/RegisterPage';
import IntroPage from 'pages/MeunPage/AnsanPage/IntroPage';

import Auth from './hoc/auth';

import { BrowserRouter, Routes, Route } from 'react-router-dom';

import './App.css';

function App() {
  // const AuthMainPage:() = Auth(MainPage, null);
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<MainPage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/register" element={<RegisterPage />} />
        <Route path="/intro" element={<IntroPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
