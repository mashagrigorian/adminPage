import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Login from './view/pages/login';
import Register from './view/pages/register';
import AuthHandler from './view/pages/redirect';

function App(props) {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<AuthHandler />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;