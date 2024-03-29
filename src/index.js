import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import Login from "./components/Login/login";
import Home from "./components/Home/home";
import ContentDetails from './components/contentDetails/contentDetails';
import ContentCategory from './components/contentCategory/contentCategory';
import { Nav } from './components/Nav/Nav'

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>

    <Routes>
      <Route path='/login' element={<Login />} />
      <Route path='/home' element={<Home />} />
      <Route path='/contentDetails/:id' element={<ContentDetails />} />
      <Route path='/contentCategory' element={<ContentCategory />} />
      <Route path="/contentCategory/:id" element={<ContentCategory />} />
    </Routes>
  </BrowserRouter>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
