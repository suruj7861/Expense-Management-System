import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import reportWebVitals from './reportWebVitals';
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import  HomePage  from './pages/HomePage';
import { Layout } from './components/Layout/Layout';
import 'antd/dist/reset.css';
import  Register  from './pages/Register';
import Login from './pages/Login';
const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout/>,
    children: [
      {
        path:"",
        element:<HomePage/>
      },
    ],
    
  },
  {
    path:"/Register",
    element:<Register/>,
    children:[]
  },
  {
    path:"/Login",
    element:<Login/>,
    children:[]
  }

]);



const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
   <RouterProvider router = {router}/>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
