import React, { Component } from 'react';

import Header from 'components/Header/Header';
import Footer from 'components/Footer/Footer';
import MainPage from 'pages/MainPage/MainPage';
import LoginPage from 'pages/LoginPage/LoginPage';
import RegisterPage from 'pages/RegisterPage/RegisterPage';
import IntroPage from 'pages/MeunPage/AnsanPage/IntroPage';
import EventPage from 'pages/MeunPage/AnsanPage/EventPage';

import Auth from './hoc/auth';

import { BrowserRouter, Routes, Route } from 'react-router-dom';

import './App.css';

// const AuthIntroPage= ({}): JSX.Element = Auth({IntroPage}, null);

function App() {
  // const AuthMainPage:() = Auth(MainPage, null);
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<MainPage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/register" element={<RegisterPage />} />
        <Route path="/intro" element={<IntroPage />} />
        <Route path="/event" element={<EventPage />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
