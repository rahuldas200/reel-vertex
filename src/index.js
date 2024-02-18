import React from 'react';
import "tw-elements-react/dist/css/tw-elements-react.min.css";
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { Toaster } from 'react-hot-toast';
import { createBrowserRouter,RouterProvider,} from "react-router-dom";
import HomePage from './components/Homepage/HomePage';
import SignIn from './components/auth/SignIn';

const router = createBrowserRouter([
  {
    path: "/",
    element: <div> <HomePage/> </div>,
  },
  {
    path:"/login",
    element : <div className=' bg-black'><SignIn/></div>
  }
]);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
    <RouterProvider router={router} />
    <Toaster />
  </React.StrictMode>
);

