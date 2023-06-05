import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import AddService from './componets/AddService.jsx';
import UpdateService from './componets/UpdateService.jsx';
import Services from './componets/Services.jsx';
import Home from './componets/Home/Home.jsx';
import Homepage from './componets/Home/Homepage.jsx';
import Login from './componets/login_registration/Login.jsx';
import SignUp from './componets/login_registration/SignUp.jsx';
import AuthProvider from './AuthProvider/AuthProvider.jsx';
import PrivateRoute from './AuthProvider/PrivateRoute.jsx';
import About from './componets/About.jsx';


const router = createBrowserRouter([
  {
    path: "/",
    element: <Home/>,
    children: [
      {
        path: "/",
        element: <Homepage/>
      },
      {
        path: "about",
        element: <About/>
      },
      {
        path: "login",
        element: <Login/>
      },
      {
        path: "signup",
        element: <SignUp/>
      },      
      {
        path: "addservice",
        element: <PrivateRoute><AddService/></PrivateRoute>
      },
      {
        path: "services",
        element: <PrivateRoute><Services/></PrivateRoute>,
        loader: () => fetch('http://localhost:5000/service')
      },
      {
        path: "updateservice/:id",
        element: <UpdateService/>,
        loader: ({params}) => fetch(`http://localhost:5000/service/${params.id}`)
      },
    ]
  },
  
]);


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <AuthProvider>
    <RouterProvider router={router} />
    </AuthProvider>
  </React.StrictMode>,
)
