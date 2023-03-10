import React from 'react';
import ReactDOM from 'react-dom/client';
// import App from './App';
import reportWebVitals from './reportWebVitals';
import {
  Routes,
  Route,
  BrowserRouter
} from "react-router-dom";
import './css/index.css';

import ErrorPage from "./error-page";
import HomePage from './pages/home';
import Layout from './components/Layout';
import Lab1 from './pages/lab1/lab1.js';
import Lab2 from './pages/lab2/Lab2';

ReactDOM.createRoot(document.getElementById('root')).render(
     <BrowserRouter basename='/react_labs'>
      {/* Routes nest inside one another. Nested route paths build upon
            parent route paths, and nested route elements render inside
            parent route elements. See the note about <Outlet> below. */}
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<HomePage />} />
          <Route path="lab1" element={<Lab1 />} />
          <Route path="lab2" element={<Lab2 />} />
          <Route path="*" element={<ErrorPage />} />
        </Route>
      </Routes>
     </BrowserRouter>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
