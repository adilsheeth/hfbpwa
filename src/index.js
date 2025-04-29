import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import Login from './components/pages/login';
import Signup from './components/pages/signup';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';

const router = createBrowserRouter([
  {
    path: '/hfbpwa/',
    element: <App />
  },
  {
    path: '/hfbpwa/login',
    element: <Login />
  },
  {
    path: '/hfbpwa/signup',
    element: <Signup />
  }
]);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);

