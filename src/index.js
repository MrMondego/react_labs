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
import Lab1 from './pages/lab1/lab1.js';
import Layout from './components/Layout';


ReactDOM.createRoot(document.getElementById('root')).render(
     <BrowserRouter>
      {/* Routes nest inside one another. Nested route paths build upon
            parent route paths, and nested route elements render inside
            parent route elements. See the note about <Outlet> below. */}
      <Routes>
        <Route path="/react_labs/*" element={<Layout />}>
          <Route index element={<HomePage />} />
          <Route path="lab1" element={<Lab1 />} />
          <Route path="*" element={<ErrorPage />} />
        </Route>
      </Routes>
     </BrowserRouter>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
