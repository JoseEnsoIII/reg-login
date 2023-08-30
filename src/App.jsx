import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import RegistrationPage from './pages/Registration'; 
import LoginPage from './pages/Login'; 

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<RegistrationPage />} />
        <Route path="/login" element={<LoginPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
