import React from 'react';
import MainPage from 'pages/MainPage/MainPage';
import Header from 'components/Header/Header';
import Footer from 'components/Footer/Footer';

import { BrowserRouter, Routes, Route } from 'react-router-dom';

import './App.css';

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<MainPage />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
