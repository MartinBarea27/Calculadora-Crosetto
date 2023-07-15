import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import reportWebVitals from './reportWebVitals';
import Home from './pages/home';
import Simple from './pages/simple';
import Multi from './pages/multi';

import { createBrowserRouter, RouterProvider } from 'react-router-dom';


const router = createBrowserRouter([
  { name: 'Home', path: '/', Component: Home },
  { name: 'Simple', path: '/simple', Component: Simple },
  { name: 'Multi', path: '/multi', Component: Multi },]);
  

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <RouterProvider router={router}/>
  </React.StrictMode>
);

reportWebVitals();
